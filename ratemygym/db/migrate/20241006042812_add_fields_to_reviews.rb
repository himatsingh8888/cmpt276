class AddFieldsToReviews < ActiveRecord::Migration[7.2]
  def change
    # add_column :reviews, :rating, :integer
    add_column :reviews, :staff_rating, :integer
    add_column :reviews, :location_rating, :integer
    add_column :reviews, :clean_rating, :integer
    add_column :reviews, :atmosphere_rating, :integer
    add_column :reviews, :opinion, :text
  end
end
