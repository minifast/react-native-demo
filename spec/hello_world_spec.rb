require 'spec_helper'

RSpec.describe 'Welcome to React', type: :feature do
  it 'displays the welcome message' do
    expect(text('Welcome to React Native!')).not_to be_nil
  end
end
