class ReviewsController < ApplicationController
  before_action :require_login  # Ensure the user is logged in before submitting a review

  # Display the reviews page with all reviews for a specific gym
  def index
    @gym = Gym.find(params[:gym_id])
    @reviews = @gym.reviews.order(created_at: :desc)  # Fetch all reviews for the gym
  end

  # Handle review submission
  def create
    @gym = Gym.find(params[:gym_id])
    @review = @gym.reviews.new(review_params)
    @review.user_id = current_user.id  # Assign the current user's ID to the review

    if @review.save
      respond_to do |format|
        format.js  # Renders the create.js.erb file
        format.html { redirect_to gym_path(@gym), notice: "Review added successfully!" }
      end
    else
      respond_to do |format|
        format.js { render js: "alert('Failed to submit the review.')" }
        format.html { redirect_to gym_path(@gym), alert: "Failed to submit the review." }
      end
    end
  end

  def review_params
    params.require(:review).permit(:rating, :staff_rating, :location_rating, :clean_rating, :atmosphere_rating, :comment)
  end
end

  def require_login
    unless current_user
      redirect_to login_path, alert: "You must be logged in to submit a review."
    end

end
