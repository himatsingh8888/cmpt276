class AddDescriptionToGyms < ActiveRecord::Migration[7.2]
  def change
    add_column :gyms, :description, :text
  end
end
