class Gym < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :image_url, presence: true  # Optionally validate the image_url field
end
