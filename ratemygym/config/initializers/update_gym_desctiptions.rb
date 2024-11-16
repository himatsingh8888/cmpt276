Rails.application.config.after_initialize do
  Gym.find_or_create_by(name:"GoodLife Fitness").update(description:"dsgsdfsdf")

end