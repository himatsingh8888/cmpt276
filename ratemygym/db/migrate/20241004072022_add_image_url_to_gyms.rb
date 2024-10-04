class AddImageUrlToGyms < ActiveRecord::Migration[7.2]
  def change
    add_column :gyms, :image_url, :string
  end
end
