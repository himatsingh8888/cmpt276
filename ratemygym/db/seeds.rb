# db/seeds.rb

Gym.create(
  name: "GoodLife Fitness", 
  description: "A well-equipped fitness center.", 
  image_url: "https://www.opatoday.com/wp-content/uploads/2020/11/23.jpg"
)

Gym.create(
  name: "Anytime Fitness", 
  description: "24-hour gym access.", 
  image_url: "https://www.10thousanddesign.com/assets/uploads/anytime-fitness/66741_AF_Case_Study_ELEMENTS_10T_01_LogoImage_2680x1600.jpg"
)

Gym.create(
  name: "Planet Fitness", 
  description: "Affordable gym memberships.", 
  image_url: "https://logos-world.net/wp-content/uploads/2022/01/Planet-Fitness-Symbol.png"
)

Gym.create(
  name: "She's Fit", 
  description: "Women-only gym.", 
  image_url: "https://us2-photo.nextdoor.com/business_logo/eb/e9/ebe9c192f1042d5b9d2d404a198f2e51.png"
)

Gym.create(
  name: "Club 16", 
  description: "A local fitness club.", 
  image_url: "data:image/png;base64,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"
)

Gym.create(
  name: "Gold's Gym", 
  description: "Brand new equipment and machines", 
  image_url: "https://robknappdesign.com/wp-content/uploads/2021/07/golds-gym-socal-logo-featured.jpg"
)
