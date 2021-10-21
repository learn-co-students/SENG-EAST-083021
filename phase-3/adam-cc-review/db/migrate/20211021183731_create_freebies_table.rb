class CreateFreebiesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :freebies do |t|
      t.integer :dev_id
      t.integer :company_id
      t.string :item_name
      t.integer :value
    end
end
