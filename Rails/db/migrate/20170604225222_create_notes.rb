class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.integer :post_id, null: false
      t.integer :recipient_id, null: false
      t.boolean :read_status, default: false
      t.timestamps
    end
    add_index :notes, :post_id
    add_index :notes, :recipient_id
  end
end
