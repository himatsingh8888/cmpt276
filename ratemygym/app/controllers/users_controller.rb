class UsersController < ApplicationController
  def new
    @user = User.new
  end

  # creates an account when the user enters a pssword and username
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to login_path, notice: "Account created successfully. Please log in."
    else
      # If there was a probelm with your account this alert message would be shown
      flash[:alert] = "There was a problem creating your account."
      render :new
    end
  end

  private

  def user_params
    # Requieres theses paramters when making a username and password confirmation
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
