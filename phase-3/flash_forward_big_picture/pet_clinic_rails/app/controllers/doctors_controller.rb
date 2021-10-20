class DoctorsController < ApplicationController

  def index 
    docs = Doctor.all

    render json: docs
  end 

  # def index 
  #   pet = Pet.find(params[:pet_id])

  #   pet_docs = pet.doctors

  #   render json: pet_docs
  # end 
end
