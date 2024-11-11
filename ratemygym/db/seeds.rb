# db/seeds.rb

Gym.create(
  name: "GoodLife Fitness", 
  description: "A well-equipped fitness center.", 
  image_url: "goodlifefitnessimage.png"
)

Gym.create(
  name: "Anytime Fitness", 
  description: "24-hour gym access.", 
  image_url: "anytimefitnessimage.jpg"
)

Gym.create(
  name: "Planet Fitness", 
  description: "Affordable gym memberships.", 
  image_url: "planetfitnessimage.png"
)

Gym.create(
  name: "She's Fit", 
  description: "Women-only gym.", 
  image_url: "shesfitimage.png"
)

Gym.create(
  name: "Club 16", 
  description: "A local fitness club.", 
  image_url: "club16image.png"
)

Gym.create(
  name: "Gold's Gym", 
  description: "Brand new equipment and machines", 
  image_url: "goldsgymimage.jpg"
)


Gym.create([
  { name: "GoodLife Fitness", latitude: 49.3371712, longitude: -123.4515419, }
])

