class SignupsController < ApplicationController

  def create 
    signup = Signup.create(singup_params)

    if signup.valid?
      render json: signup.activity, status: :created
    else 
      render json: {message: signup.errors.full_messages}, status: :unprocessable_entity
    end 
  end 


  private 

  def singup_params
    params.permit(:time, :camper_id, :activity_id)
  end 
end
