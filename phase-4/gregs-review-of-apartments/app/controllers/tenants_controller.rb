class TenantsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :handle_missing_record

  def index 
    tenant = Tenant.all 

    render json: tenant, status: :ok
  end 
  
  def show
    # The line below throws an exception if givin a bad id. Line 3 catches it and runs handle_missing_record
    tenant = Tenant.find(params[:id]) 
  
    render json: tenant, status: :ok
  end 

  def create
    # The line below throws an exception if it fails to create. Line 2 catches it and runs handle_invalid
    tenant = Tenant.create!(tenant_params)
    render json: tenant, status: :created
  end 

  def update 
    # Same as line 12
    tenant = Tenant.find(params[:id])
    
    # Same as line 19
    tenant.update!(tenant_params)
    render json: tenant, status: :created
  end 

  def destroy
    # Same as line 12
    tenant = Tenant.find(params[:id])
    tenant.destroy
    render json: {message: "Tenant has been deleted from database"}
  end 

  private 

  def tenant_params
    params.permit(:name, :age)
  end 

  def handle_invalid(exception)
    render json: {message: exception.message}, status: :unprocessable_entity
  end 
  
  def handle_missing_record(exception)
    render json: {message: exception.message}, status: :not_found
  end 
end
