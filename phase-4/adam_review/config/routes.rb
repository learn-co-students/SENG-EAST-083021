Rails.application.routes.draw do
  # resources :campers
  # resources :signups
  # resources :activities
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/campers', to: "campers#index"
  get '/campers/:id', to: "campers#show"
  post '/campers', to: "campers#create"

  get '/activities', to: "activities#index"
  delete '/activities/:id', to: "activities#destroy"

  post '/signups', to: "signups#create"

  # post '/login', to: "login#create"
end
