class SessionsController < ApplicationController
def new
	@user = User.new
end

def create
  @user = User.where(email: params[:sessions][:email], password: params[:sessions][:password]).first
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
def destroy
end


end
