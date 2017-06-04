
```javascript

componentWillMount() {
  this.fetchGoogleLocations()
    .then(this.fetchPosts(res.locations, "Notes"));
    .then(this.fetchPosts(res.locations, "Posts"));
};
```

// Rails GET "api/posts?query=note"
```ruby
// Rails
GET "api/posts?query=note"
def index
  if params[:query] = "post"
    @posts = Post.all.where().order().limit()
  else if params[:query] = "note"
    # ...
  end
end
```

```javascript
// Dispatch action to reducer
switch(action.type) {
  case(RECEIVE_POSTS):
    return merge({}, state, action.posts)
  case(RECEIVE_POST):
    const nextState = merge({}, state);
    nextState[action.post.location].push(action.post);
    return nextState;
}
```

// Two reducers, one for notes and one for posts
// organize things on backend with ActiveRecord, rather than trying to organize and filter things on the frontend

// Two reducers, one for notes and one for posts
// organize things on backend with ActiveRecord, rather than trying to organize and filter things on the frontend 
