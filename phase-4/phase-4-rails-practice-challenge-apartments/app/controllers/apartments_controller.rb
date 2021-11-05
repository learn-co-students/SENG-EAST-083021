class ApartmentsController < ApplicationController
  before_action :find_and_validate_apartment, only: [:show, :update, :destroy]

  def index 
    apartment = Apartment.all 

    render json: apartment, status: :ok
  end 
  
  def show
    # remmember find_and_validate_apartment is running before this action. Which is where @apartment is being defined
    render json: @apartment, status: :ok
  end 

  def create
    apartment = Apartment.create(apartment_params)

    if apartment.valid?
      render json: apartment, status: :created
    else 
      render json: apartment.errors.full_messages, status: :unprocessable_entity
    end 
  end 

  def update
    # same as line 11
    if @apartment.update(apartment_params)
      render json: @apartment, status: :created
    else 
      render json: @apartment.errors.full_messages, status: :unprocessable_entity
    end
  end 


  def destroy
    # same as line 11
    @apartment.destroy
    render json: {message: "Apartment has been deleted from database"}
  end 

  private 

  def tenant_params
    params.permit(:name, :age)
  end
  
  def find_and_validate_apartment
    @apartment = Apartment.find_by(id: params[:id]) 

    if !@apartment 
      render json: {message: "invalid apartment id"}, status: :not_found
    end 
  end 
end
