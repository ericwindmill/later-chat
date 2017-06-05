Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create]
    resources :follows, only: [:create, :destroy]
  end
end
