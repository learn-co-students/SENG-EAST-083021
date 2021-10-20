Rails.application.routes.draw do
  resources :visits
  resources :doctors
 
  get '/pets', to: "pets#index"
  get '/pets/:id', to: "pets#show"

  # resources :pets do 
  #   resources :doctors 
  # end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
