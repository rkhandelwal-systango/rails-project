class ArticlesController < ApplicationController
before_filter :authenticate
def new
 @article = Article.new
end
def create  
  user = User.find(session[:current_user])
  @article = user.articles.build(article_params)
  respond_to do |f|
    if @article.save
    f.html{render 'new' ,notice: "Your data has been entered"}
    else
    f.html{render action: "new"}
    end
  end
end
 
def index
  @articles = Article.all
end 

def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
end


def article_params
    params.require(:articles).permit(:description, :text)
end

end
