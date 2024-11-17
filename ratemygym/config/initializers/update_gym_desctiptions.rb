Rails.application.config.after_initialize do
  Gym.find_or_create_by(name:"GoodLife Fitness").update(description:"GoodLife Fitness provides a comprehensive fitness experience with certified personal trainers and advanced equipment. Membership rates vary depending on location and membership type, typically starting around $50 to $70 per month. Trainers are continually certified and stay up-to-date with the latest in fitness, ensuring members receive top-tier guidance. Some clubs offer a Women's Only section, adding a private space for women.")

end