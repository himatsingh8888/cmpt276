class GymsController < ApplicationController
  def show
    @gym = Gym.find(params[:id])
    @reviews = @gym.reviews.order(created_at: :desc)
  end
end
