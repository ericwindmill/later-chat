@locations.each do |location|
  json.set! location do
    json.array! (@posts.select {|post| post.location == location}) do |post|
      json.extract! post, :id, :body, :image_url, :author_id, :public
    end
  end
end
