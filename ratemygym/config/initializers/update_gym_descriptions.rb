Rails.application.config.after_initialize do
    Gym.find_or_create_by(name: "GoodLife Fitness").update(description: "GoodLife Fitness provides a comprehensive fitness experience with certified personal trainers and advanced equipment. Membership rates vary depending on location and membership type, typically starting around $50 to $70 per month. Trainers are continually certified and stay up-to-date with the latest in fitness, ensuring members receive top-tier guidance. Some clubs offer a Women's Only section, adding a private space for women.")
    
    Gym.find_or_create_by(name: "Anytime Fitness").update(description: "Anytime Fitness offers 24/7 access to over 5,000 locations worldwide, with membership rates starting around $40 to $50 per month. 
    Each member benefits from a personalized plan and the option of group or individual training, led by coaches who are invested in helping members reach their goals. 
    Free fitness consultations and access to Apple Fitness+ are included, adding value to the membership. Anytime Fitness is designed for convenience, with a welcoming atmosphere and flexible hours, 
    making it perfect for those with busy schedules. Its an ideal choice for anyone seeking round-the-clock access to a supportive fitness environment.")

    Gym.find_or_create_by(name: "Planet Fitness").update(description: "Planet Fitness is known for its affordability, with membership options starting as low as $10 per month for the basic membership and $22.99 per month for the Black Card membership, 
  which includes perks like access to over 2,600 locations and guest privileges. The gym provides a clean, spacious environment with a variety of cardio and strength equipment. The PF App offers 
  guided workout routines, complete with visual tutorials. Members can also refer friends to earn free months, making it budget-friendly and social. Planet Fitness is ideal for beginners or those 
  looking for a supportive, affordable gym experience in a Judgement Free Zone")

  Gym.find_or_create_by(name: "She's Fit").update(description: "Shes Fit is a private womens gym that offers a comfortable, safe environment for women at all stages of their fitness journey. The gym is equipped with over 80 cardio machines, 
  including treadmills and ellipticals, each with private TV screens for a more personalized workout. The facility features designated weight areas, stretching zones, and private locker rooms 
  with individual changing booths and showers. With functional training areas and personal training options available, members can work towards their goals with tailored support. Shes Fit provides a 
  supportive, women-only space that empowers its members to prioritize fitness comfortably and confidently.")

  Gym.find_or_create_by(name: "Club 16").update(description: "Club 16 provides a welcoming and inclusive environment with membership rates starting around $20 bi-weekly. With over 110 pieces of cardio equipment, some with personal TV screens, 
  Club 16 offers a state-of-the-art workout experience. Members have access to TRX stations, functional training systems, and multiple class offerings tailored to various fitness levels. The gym includes 
  turf field areas, stretching zones, and a Member Assistance Program for additional support. Club 16 is ideal for those who value variety and community in a fitness setting, offering an extensive range 
  of equipment and classes at a budget-friendly rate.")

  Gym.find_or_create_by(name: "Gold's Gym").update(description: "Golds Gym is a premier fitness destination, with membership options starting around $30 to $60 per month depending on location and amenities. Known for its expert trainers, Golds Gym 
  offers personalized training programs in a private, focused setting. Each member receives guidance tailored to their goals, with a team of experienced professionals. The gyms private training spaces 
  provide an undisturbed environment for focused workouts, and the extensive equipment selection caters to both classic and modern training methods. Golds Gym is a great choice for fitness enthusiasts 
  seeking quality training in a professional and results-driven atmosphere.")


    
end
  