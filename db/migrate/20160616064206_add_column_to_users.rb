class AddColumnToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :country, :string
  	add_column :users, :address, :text
    add_column :users, :email, :text 
  end
end
