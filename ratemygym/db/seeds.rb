# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Gym.create(name: "Gym 1", location: "123 Gym St, Vancouver, BC", description: "A great gym to workout with a wide range of equipment and excellent trainers.")
Gym.create(name: "Anytime Fitness", location: "456 Fitness Ave, Burnaby, BC", description: "Perfect for strength training with 24/7 access and modern facilities.")
Gym.create(name: "Planet Fitness", location: "789 Wellness Blvd, Richmond, BC", description: "Known for cardio workouts, this gym offers plenty of treadmills and group classes.")
Gym.create(name: "Gold's Gym", location: "1011 BodyFit Dr, Surrey, BC", description: "State of the art equipment with an emphasis on bodybuilding and strength training.")
Gym.create(name: "CrossFit Muscle", location: "1213 Muscle St, North Vancouver, BC", description: "Top-notch gym for athletes looking to improve their performance with CrossFit training.")
Gym.create(name: "YMCA", location: "1415 Fit Lane, Coquitlam, BC", description: "Great environment for all levels, offering family-friendly facilities and a swimming pool.")

