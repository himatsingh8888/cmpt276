Rails.application.routes.draw do
  # Gym routes with nested reviews for viewing, creating, editing, and deleting reviews
  resources :gyms, only: [:show] do
    resources :reviews, only: [:index, :create, :edit, :update, :destroy] # Include all necessary actions
  end
  
  # Home route (can be changed as needed)
  get "home/index"
  
  # Session routes (Login/Logout)
  get "login", to: "sessions#new"         # Display login form
  post "login", to: "sessions#create"     # Handle login form submission
  delete "logout", to: "sessions#destroy" # Handle logout

  # User routes (Signup)
  resources :users, only: [:new, :create] # Signup form and user creation

  # Set root path route to the login page by default
  root "sessions#new"

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
