class PetsController < ApplicationController
  def index 
    pets = Pet.all 

    render json: pets 
  end 

  def show 
    pet = Pet.find(params[:id])

    render json: pet.more_info
  end 

end
