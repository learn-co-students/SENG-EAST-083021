class SignupsController < ApplicationController

    def create
        new_signup = Signup.create(signup_params)

        if new_signup.valid?
            render json: new_signup
        else
            render json: {errors: new_signup.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def signup_params
        params.permit(:time, :camper_id, :activity_id)
    end
end
