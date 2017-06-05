class Api::PostsController < ApplicationController

  def index
    @locations = params[:locations]
    if params[:post]
      @posts = Post.limit(50).where("public = true AND location IN (?)", @locations)
    elsif params[:note]
      @posts = Note.joins(:post).includes(:post).where("notes.recipient_id = ? AND posts.location IN (?)", current_user.id, @locations)
    end
  end

  def create

    @post = Post.new(post_params)

    if @post.save
      params.post.recipients.each do |recipient|
        Note.create(post_id: @post.id, recipient_id: recipient.id)
        render json: @post
      end
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def post_params
    params.require(:post).permit(:body, :location, :image_url, :author_id)
  end

end
