class Api::PostsController < ApplicationController

  def index
    #to pass params in a 'GET' request, must pass it in the query string
    #ex. .../api/posts?type=post&locations[]=Dolores%20Park&locations[]=Cafe
    @locations = params[:locations]
    if params[:type] == 'post'
      @posts = Post.limit(50).where("public = true AND location IN (?)", @locations)

    #for time being and testing purposes, this current controller doesn't have access to 'current_user.id'
    #so, to receive the notes for a user, send it in the query string like so: /api/posts?type=note&recipient_id=4&locations[]=Dolores%20Park
    elsif params[:type] == 'note'
      @posts = Note.joins(:post).includes(:post).where("notes.recipient_id = ? AND posts.location IN (?)", params[:recipient_id], @locations)
        .map(&:post)
    end
  end

  def create

    @post = Post.new(post_params)

    if @post.save
      #because arrays can't be sent, as far as I know, through POST requests,
      #the recipients need to be sent like so: post[recipients] = 1,2,3,4
      #where the controller parses the string recieved, splits and maps to int where notes are made
      if  params[:post][:recipients]
        recipients = params[:post][:recipients].split(',').map(&:to_i)
        recipients.each do |recipient|
          Note.create(post_id: @post.id, recipient_id: recipient.to_int)
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
