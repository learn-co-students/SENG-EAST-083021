class LeasesController < ApplicationController
  
  def create
    lease = Lease.create(lease_params)
    
    if lease.valid?
      render json: lease 
    else 
      render json: {messages: lease.errors}, status: :unprocessable_entity
    end 

  end

  def destroy
    lease = Lease.find_by(id: params[:id])

    if lease 
      lease.destroy
      render json: {message: 'Lease was deleted'}, status: :accepted
    else
      render json: {message: 'Could Not Be Found'}, status: :unprocessable_entity
    end 

  end 


  private 

  def lease_params 
    # params = {rent: 100, apartment_id: 5, tenant_id: 5}
    params.permit(:rent, :apartment_id, :tenant_id)
    
    # params = {lease: {rent: 100, apartment_id: 5, tenant_id: 5}}
    # params.require(:lease).permit(:rent, :apartment_id, :tenant_id)
  end 


end
