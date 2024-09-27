class Gym < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
