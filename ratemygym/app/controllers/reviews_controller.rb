class ReviewsController < ApplicationController
  before_action :require_login  # Ensure the user is logged in before submitting a review

  # Display the reviews page with all reviews for a specific gym
  def index
    @gym = Gym.find(params[:gym_id])
    @reviews = @gym.reviews.order(created_at: :desc)  # Fetch all reviews for the gym
  end

  # Handle review submission
  # the @gym is the database used to find the databse for the gym
  # The @review is used to find the gym reviews for 
  def create
    @gym = Gym.find(params[:gym_id])
    @review = @gym.reviews.new(review_params)
    @review.user_id = current_user.id  # Assign the current user's ID to the review

    if @review.save
      # Renders the create.js.erb file
      # This makes it so the page does not reload when a new review is made
      respond_to do |format|
        # If the review is successfully added to the homepage
        format.js  
        format.html { redirect_to gym_path(@gym), notice: "Review added successfully!" }
      end
    else
      respond_to do |format|
        # If the review being added failed
        format.js { render js: "alert('Failed to submit the review.')" }
        format.html { redirect_to gym_path(@gym), alert: "Failed to submit the review." }
      end
    end
  end

  #  Requires this parameters whnever sumbtting the reviews which are each of the 5 ratings plus the comment
  # If these are not selected for the time of the review then it wont be processed
  def review_params
    params.require(:review).permit(:rating, :staff_rating, :location_rating, :clean_rating, :atmosphere_rating, :comment)
  end
end

  def require_login
    unless current_user
      redirect_to login_path, alert: "You must be logged in to submit a review."
    end

end
