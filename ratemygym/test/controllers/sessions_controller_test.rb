require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:testuser) # Using a fixture for a user
  end

  test "should log in with valid credentials" do
    post login_path, params: { username: @user.username, password: 'password123' }
    assert_redirected_to home_index_path
    follow_redirect!
    assert_select "body", /Logout/
  end

  test "should not log in with invalid credentials" do
    post login_path, params: { username: @user.username, password: 'wrongpassword' }
    assert_response :unprocessable_entity
    assert_select "body", /Invalid username or password/
  end

  test "should log out successfully" do
    post login_path, params: { username: @user.username, password: 'password123' }
    delete logout_path
    assert_redirected_to login_path
    follow_redirect!
    assert_select "body", /Login/
  end
end
