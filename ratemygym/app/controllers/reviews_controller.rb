class ReviewsController < ApplicationController
before_action :require_login  # Ensure the user is logged in before submitting a review

def create
  @gym = Gym.find(params[:gym_id])
  @review = @gym.reviews.new(review_params)
  @review.user_id = current_user.id  # Assign the current user's ID to the review

  if @review.save
    redirect_to gym_path(@gym), notice: "Review submitted successfully!"
  else
    redirect_to gym_path(@gym), alert: "Failed to submit review."
  end
end

private

def review_params
  params.require(:review).permit(:comment, :rating)
end

def require_login
  unless current_user
    redirect_to login_path, alert: "You must be logged in to submit a review."
  end
end
end
