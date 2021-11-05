class CreateLeases < ActiveRecord::Migration[6.1]
  def change
    create_table :leases do |t|
      t.integer :rent
      t.integer :tenant_id
      t.belongs_to :apartment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
