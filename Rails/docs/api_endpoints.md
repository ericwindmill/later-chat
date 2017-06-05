# API Endpoints

### Users
- `GET /api/users/` users#index
- `POST /api/users` users#create

### Session
- `POST /api/session` session#create
- `DELETE /api/session` session#destroy

### Posts
- `GET /api/posts` posts#index
- `POST /api/posts` posts#create

### Follows
- `POST /api/follows/` follows#create
- `DELETE /api/follows/:id` follows#destroy
