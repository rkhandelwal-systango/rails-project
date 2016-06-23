class AdminController < ApplicationController
before_filter :authenticate
def index
end

def users_list
@users = User.all
end

def articles_list
@articles = Article.all
end

end
