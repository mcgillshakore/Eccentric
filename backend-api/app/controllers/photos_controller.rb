class PhotosController < ApplicationController
    def index
        photos = Photo.all
        render json: photos
    end
    def create
        photo = Photo.new(photos_params)
        if photo.save
            render json: photo
        else
            render json: { error: photo.errors.message }, status: 422
        end
    end

    def destroy
        photo = Photo.find(params[:id])
        if photo.destroy
            head :no_content
        else
            render json: { error: photo.errors.message }, status: 422
        end
    end

    private

    def photos_params
        params.require(:photo).permit(:user_id, :group_id, :title, :img_url)
    end
end

