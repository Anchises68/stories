Rails.application.routes.draw do

  get 'thanks' => 'pages#thanks'
  resources :signups, only: [:new, :create]
  get 'signups' => 'signups#new'
  post 'signups' => 'signups#create'

  root 'pages#home'
  get 'about' => 'pages#about'

end
