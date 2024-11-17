class CreateGyms < ActiveRecord::Migration[7.2]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :location
      t.string :image_url

      t.timestamps
    end
  end
end
