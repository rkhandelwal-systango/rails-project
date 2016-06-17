class UsersController < ApplicationController
  

def new 
    @user = User.new
end


def create
    @user = User.new(user_params)
    respond_to  do |f|
      if @user.save
      f.html{redirect_to user_path(@user),notice: "Your data has been entered"}
      else
      f.html{render action: "new"}
      end
    end
end 


def update
    redirect_to "users_path"
end


def show
    @user = User.last
end 


def login
	@user = User.where(email: params[:users][:email], password: params[:users][:password])

	  if @user.present?
      render "login"
      else
      flash.now.alert = "Invalid Email"
      render "new"
      # user.valid_password?(params[:password])
      end
end
def output
    binding.pry
    @user = User.all
end

def user_params
    params.require(:users).permit(:first_name, :last_name, :password, :city, :state, :country, :address, :email )
end


end
