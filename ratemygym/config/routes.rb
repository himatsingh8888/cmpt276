Rails.application.routes.draw do
  get "home/index"                  # Route for the homepage
  
  # Session routes (Login/Logout)
  get "login", to: "sessions#new"      # Display login form
  post "login", to: "sessions#create"  # Handle login form submission
  delete "logout", to: "sessions#destroy" # Handle logout

  # User routes (Signup)
  resources :users, only: [:new, :create] # Signup form and user creation

  # Root path route ("/")
  root "sessions#new"  # Set login page as the default root page

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Define the root path route ("/")
  root "home#index"  # <-- Add this line
end
