class UsersController < ApplicationController  
before_filter :authenticate, :except => [:login, :create, :new]

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
    creating_session
    if @user.role == 'admin'
      redirect_to admin_index_path
    else
      render "login"
    end
   else
    redirect_to root_path
   end
   
end

def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to index_path
end

def logout
    destroy_session 
    redirect_to root_path
end  

def creating_session
session[:current_user] = @user.id
end

def destroy_session
session[:current_user] = nil
end  


def save_referer
  session['referer'] = request.env["HTTP_REFERER"] || 'none' unless session['referer'] && !is_logged_in?
end

def user_params
    params.require(:users).permit(:first_name, :last_name, :password, :city, :state, :country, :address, :email )
end
end
