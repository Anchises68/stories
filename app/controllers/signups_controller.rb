class SignupsController < ApplicationController
    def contact
        @signup = Signup.new
    end
    
    def create
        @signup = Signup.new(signup_params)
        if @signup.save
            redirect_to '/thanks'
        else
            render 'contact'
        end
    end
    
    private
    def signup_params
        params.require(:firstname).permit(:email)
    end 
end
