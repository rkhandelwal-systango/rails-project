class User < ActiveRecord::Base
#belongs_to :users
#attr_accessor :first_name, :last_name, :password, :city, :state
#has_secure_password

has_many :articles
end
