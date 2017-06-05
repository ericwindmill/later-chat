class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render json: @follow.leader
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(params[:id])
    @follow.destroy
    render json: @follow
  end

  def follow_params
    params.require(:follow).permit(:leader_id)
  end

end
