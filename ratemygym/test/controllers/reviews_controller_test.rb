require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gym = gyms(:one)  # Ensure gyms.yml has this fixture
    @user = users(:one) # Ensure users.yml has this fixture
  end

  test "should add a review when logged in" do
    log_in_as(@user)
    post gym_reviews_path(@gym), params: { review: { comment: "Great gym!", rating: 5 } }
    assert_redirected_to gym_path(@gym)
    follow_redirect!
    assert_match "Great gym!", response.body
  end

  test "should not add a review when not logged in" do
    post gym_reviews_path(@gym), params: { review: { comment: "Great gym!", rating: 5 } }
    assert_redirected_to login_path
  end
end
