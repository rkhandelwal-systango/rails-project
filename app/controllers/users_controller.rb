class UsersController < ApplicationController  

def new 
  @user = User.new
end

def create
  @user = User.new(user_params)
  respond_to  do |f|
    if @user.save
    f.html{render "login" ,notice: "Your data has been entered"}
    else
    f.html{render action: "new"}
    end
  end
end 

def update
  @user = User.where(email: params[:users][:email], password: params[:users][:password]).first
  if @user.present?
      @user = User.find(params[:id])
      if @user.update(user_params)
      render "login"
      else
      render 'edit'
      end
  else
    flash.alert = "Enter correct password"
  render 'edit' 

 end

end

def edit
 @users = User.find(params[:id])
end

def show
  @user = User.last
end 

def login
	@user = User.where(email: params[:users][:email], password: params[:users][:password]).first
	 if @user.present? 
    if @user.role == 'admin'
      redirect_to index_path
    elsif @user.present?
        render "login"
    else
        render "root"
    end
  else
    flash[:error] = 'Login unsuccessful'
    redirect_to root_path
    
  end
end
def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to index_path
end
def user_params
    params.require(:users).permit(:first_name, :last_name, :password, :city, :state, :country, :address, :email )
end
end
