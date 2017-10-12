Rails.application.routes.draw do
  root 'pages#home'
  get 'about' => 'pages#about'
  get 'contact' => 'signups#contact'
  post 'signups' => 'signups#thanks'
end
