class Review < ApplicationRecord
  belongs_to :gym
<<<<<<< HEAD
=======
  belongs_to :user
>>>>>>> reviews

  validates :comment, presence: true
  validates :rating, presence: true, inclusion: { in: 1..5 }
end
