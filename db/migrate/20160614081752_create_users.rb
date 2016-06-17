class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
        t.text :first_name
	t.text :last_name
	t.text :password
	t.text :city
	t.text :state
	t.text :country
	t.text :address
	t.text :email
t.timestamps null: false
    end
  end
end
