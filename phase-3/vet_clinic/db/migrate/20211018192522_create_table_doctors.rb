class CreateTableDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :table_name do |t|
        t.string :name
        t.integer :rating
        t.string :specialty
    end
  end
end
