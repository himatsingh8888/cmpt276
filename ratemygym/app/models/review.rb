class Review < ApplicationRecord
  belongs_to :gym
  belongs_to :user

  validates :rating, presence: true, numericality: true
  validates :staff_rating, presence: true, numericality: true
  validates :location_rating, presence: true, numericality: true
  validates :clean_rating, presence: true, numericality: true
  validates :atmosphere_rating, presence: true, numericality: true
  validates :comment, presence: true
end
