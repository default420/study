require 'rails_helper'

RSpec.describe Account, type: :model do
  describe "Account" do
    it "is valid model information" do
      account = Account.new(
        username: 'test',
        account: '12345'
      )
      expect(account).to be_valid
    end
  end
end
