class CampersController < ApplicationController

    def show
        camper = Camper.find_by(id: params[:id])
        if camper
            render json: camper, serializer: CamperdetailSerializer
        else
            render json: {error: "cannot find the camper"}, status: :not_found
        end
    end

    def create
        new_camper = Camper.create(camper_params)

        if new_camper.valid?
            render json: new_camper
        else
            render json: {errors: new_camper.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        render json: Camper.all, include: :activities
    end

    private

    def camper_params
        params.permit(:name, :age)
    end
end
