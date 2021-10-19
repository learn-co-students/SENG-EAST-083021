class CreateTableDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
        t.string :name
        t.string :specialty
    end
  end
end
