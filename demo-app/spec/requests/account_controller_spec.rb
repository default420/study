require 'rails_helper'

describe AccountController, type: :request do

  describe "GET #index" do
      before do
        get account_url, params: {}
      end

      it "response status is ok" do
        expect(response.status).to eq 200
      end

      it "response data is expected data" do
        json = JSON.parse(response.body)
        expect(json['message']).to eq("example")
      end
  end
end
