class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.string :location, null: false
      t.string :image_url
      t.boolean :public, default: false
      t.integer :author_id, nullL: false
      t.timestamps
    end
    add_index :posts, :location
  end
end
