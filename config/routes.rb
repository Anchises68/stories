Rails.application.routes.draw do
  root 'pages#home'
  get 'about' => 'pages#about'
  get 'new' => 'signups#new'
  post 'signups' => 'signups#thanks'
end
