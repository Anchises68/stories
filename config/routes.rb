Rails.application.routes.draw do
  root 'pages#index'
  get 'about' => 'pages#about'
  get 'new' => 'signups#new'
  post 'signups' => 'signups#thanks'
end
