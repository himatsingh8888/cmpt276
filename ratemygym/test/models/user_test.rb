require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(username: "testuser", password: "password123")
  end

  test "user with valid attributes should be valid" do
    assert @user.valid?
  end
end
