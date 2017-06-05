class Api::PostsController < ApplicationController

  def index
    
  end

  def create

    @post = Post.new(post_params)

    if @post.save
      params.post.recipients.each do |recipient|
        Note.create(post_id: @post.id, recipient_id: recipient.id)
      end
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def post_params
    params.require(:post).permit(:body, :location, :image_url, :author_id)
  end

end
