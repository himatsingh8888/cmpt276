require "test_helper"

class GymsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get gyms_show_url
    assert_response :success
  end
end
