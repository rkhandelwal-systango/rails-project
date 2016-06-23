class AddColumnToArticles < ActiveRecord::Migration
  def change
  	add_column :articles, :description, :text
  	add_column :articles, :text, :text 
  end
end
