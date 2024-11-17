class GymsController < ApplicationController
  def show
    @gym = Gym.find(params[:id])
    Rails.logger.info "Gym: #{@gym.attributes}" # Log gym details to Render logs
    @reviews = @gym.reviews.order(created_at: :desc)

     # Calculate averages of each section rounded to one decimal place
     @average_machines_rating = @reviews.average(:rating).to_f.round(1)  
     @average_staff_rating = @reviews.average(:staff_rating).to_f.round(1)
     @average_location_rating = @reviews.average(:location_rating).to_f.round(1)
     @average_cleanliness_rating = @reviews.average(:clean_rating).to_f.round(1)
     @average_atmosphere_rating = @reviews.average(:atmosphere_rating).to_f.round(1)


  end
end
