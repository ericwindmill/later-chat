class Api::PostsController < ApplicationController

  def index
    #an to pass params in a 'GET' request, must pass it in the query string
    #ex. .../api/posts?type=post&locations[]=Dolores%20Park&locations[]=Cafe

    @locations = params[:locations]
    if params[:type] == 'post'
      @posts = Post.limit(50).where("public = true AND location IN (?)", @locations)
    elsif params[:type] == 'note'
      @posts = Note.joins(:post).includes(:post).where("notes.recipient_id = ? AND posts.location IN (?)", current_user.id, @locations)
    end
  end

  def create

    @post = Post.new(post_params)

    if @post.save
      #as it currently stands, testing in Postman, every controller action works except this one
      #creating a post saves a post, but when we try to make a note for every recipient,
      #rails can't recieve or I can't send via Postman, an array.
      #if this is possible in ajax, I think it's another reason we may want to use jQuery, along with the reason above
      #if not, we may need to refactor this controller / create a Notes Controller
      if  params[:post][:recipients]
        params[:post][:recipients].each do |recipient|
          Note.create(post_id: @post.id, recipient_id: recipient)
        end
      end
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def post_params
    params.require(:post).permit(:body, :location, :image_url, :author_id, :public)
  end

end
