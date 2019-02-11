Rails.application.routes.draw do
  devise_for :account_users
  root 'page#top'
  get 'page/login'
  get 'page/member_list'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
