class Review < ApplicationRecord
  belongs_to :gym
  belongs_to :user

   # Validate that the rating which are chosen between the numbers 1 and 5 meaning no empty stars
   validates :rating, :staff_rating, :location_rating, :clean_rating, :atmosphere_rating, presence: true, numericality: { in: 1..5 }

   # Validate that a comment is present in the review
   validates :comment, presence: true
end
