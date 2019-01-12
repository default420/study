class AccountController < ApplicationController
  def index
    render json: {'message': 'example'}
  end
end
