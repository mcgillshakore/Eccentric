class MembersController < ApplicationController
    def index
        members = Member.all
        render json: members
    end

    def show
        member = Member.find_by(id: params[:id])
        render json: member
    end
end
