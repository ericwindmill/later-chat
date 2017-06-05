json.extract! @post, :id, :body, :location, :image_url, :public
json.author do
  json.extract! @post.author, :id, :username
end
