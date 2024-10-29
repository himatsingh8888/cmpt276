class ReviewsController < ApplicationController
  before_action :require_login  # Ensure the user is logged in before submitting a review
  before_action :set_gym        # Set the gym for the current context
  before_action :set_review, only: [:edit, :update, :destroy] # Set the review for actions that need it

  # Display the reviews page with all reviews for a specific gym
  def index
    @reviews = @gym.reviews.order(created_at: :desc)  # Fetch all reviews for the gym
  end

  # Handle review submission
  def create
    @review = @gym.reviews.new(review_params)
    @review.user_id = current_user.id  # Assign the current user's ID to the review
    
    # Specify the required fields you want to check for presence
    required_fields = %w[rating staff_rating location_rating clean_rating atmosphere_rating comment]
    missing_fields = required_fields.select { |field| @review.send(field).blank? }
  
    if missing_fields.any?
      # If any required fields are blank, respond with an error
      respond_to do |format|
        format.js { render js: "alert('Please fill all fields before submitting the review')" }
        format.html { redirect_to gym_path(@gym), alert: "Please fill in all required(*) fields before submitting the review" }
      end
    else
      if @review.save
        respond_to do |format|
          format.js  
          format.html { redirect_to gym_path(@gym), notice: "Review added successfully!" }
        end
      else
        Rails.logger.error(@review.errors.full_messages)  # Log the error messages
        respond_to do |format|
          format.js { render js: "alert('Failed to submit the review: #{@review.errors.full_messages.join(', ')}')" }
          format.html { redirect_to gym_path(@gym), alert: "Failed to submit the review" }
        end
      end
    end
  end
  
  
  

  # Render the edit form
  def edit
    # This will render the edit form
  end

  # Update the review
  def update
    if @review.update(review_params)
      redirect_to gym_path(@gym), notice: "Review updated successfully!"
    else
      render :edit
    end
  end

  # Delete the review
  def destroy
    @review.destroy
    redirect_to gym_path(@gym), notice: "Review deleted successfully!"
  end

  private
  
  # Set the gym based on params
  def set_gym
    @gym = Gym.find(params[:gym_id])
  end
  
  # Set the review based on params
  def set_review
    @review = @gym.reviews.find(params[:id])
  end
  
  # Require parameters when submitting the reviews
  def review_params
    params.require(:review).permit(:rating, :staff_rating, :location_rating, :clean_rating, :atmosphere_rating, :comment)
  end

  # Ensure the user is logged in
  def require_login
    unless current_user
      redirect_to login_path, alert: "You must be logged in to submit a review."
    end
  end
end
