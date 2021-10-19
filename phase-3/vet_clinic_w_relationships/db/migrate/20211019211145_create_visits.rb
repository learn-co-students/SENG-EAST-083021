class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.integer :rating
      t.string :review
      t.integer :pet_id
      t.integer :doctor_id
    end 
  end
end
