class AccountController < ApplicationController
  def index
    @account = Account.first
    render json: @account
  end
end
