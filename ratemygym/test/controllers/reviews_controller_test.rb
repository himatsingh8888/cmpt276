require "test_helper"

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:testuser)
    @gym = gyms(:goodlife) # Assuming you have a gym fixture for this
  end

  test "should add a review when logged in" do
    post login_path, params: { username: @user.username, password: 'password123' }
    post gym_reviews_path(@gym), params: { review: { comment: "Great gym!", rating: 5 } }
    assert_redirected_to gym_path(@gym)
    follow_redirect!
    assert_select "body", /Great gym!/
  end

  test "should not add a review if not logged in" do
    post gym_reviews_path(@gym), params: { review: { comment: "Amazing gym!", rating: 5 } }
    assert_redirected_to login_path
  end
end
