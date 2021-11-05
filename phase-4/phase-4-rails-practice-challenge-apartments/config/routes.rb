Rails.application.routes.draw do
  resources :leases, only: [:index, :create, :destroy, :update, :show]
  # resources :leases, except: [:show]
  # get '/leases', to: 'leases#index'
  # post '/leases', to: 'leases#create'
  # patch '/leases/:id', to: 'leases#update'
  # delete '/leases/:id', to: 'leases#destroy'

  resources :tenants
  resources :apartments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
