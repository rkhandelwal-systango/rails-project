class WelcomeController < ApplicationController
  
def save_referer
  session['referer'] = request.env["HTTP_REFERER"] || 'none' unless session['referer'] && !is_logged_in?
end
  def index
  #if session[:current_user] != nil
  #redirect_to :back
  #end
  end
end
