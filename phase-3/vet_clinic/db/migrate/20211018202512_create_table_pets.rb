class CreateTablePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :pet_type
    end
  end
end
