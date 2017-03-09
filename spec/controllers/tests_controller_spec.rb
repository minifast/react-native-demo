require 'rails_helper'

RSpec.describe TestsController, type: :controller do
  describe 'GET #show' do
    it 'responds with some json' do
      get :show, format: :json
      expect(response).to render_template(:show)
    end
  end
end
