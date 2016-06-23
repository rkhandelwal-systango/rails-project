# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
admin = User.new({ first_name: "admin",last_name: "admin",password: "admin",city: "indore",state: "MP",
	country: "india",address: "indore", email: 'myadmin@rubyonrails.com',role: 'admin'
            })
    

    if admin.valid?
      admin.save()

    elsif admin.errors.any?
      admin.errors.full_messages.each do |msg|
        puts msg
      end
    else
      puts "****NOT VALID****"
    end