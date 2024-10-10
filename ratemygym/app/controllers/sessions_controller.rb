class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      # Log the user in by setting the session
      session[:user_id] = user.id
      redirect_to home_index_path
    else
      # If login fails, render the login form again with an error message
      flash.now[:alert] = "Invalid username or password"
      render :new, status: :unprocessable_entity  # This sets the status to 422
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path, notice: "Logged out!"
  end
end
