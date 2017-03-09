require 'spec_helper'
require_relative '../mobile_support/appium'
require_relative '../mobile_support/screenshot'

RSpec.describe 'React Rails Demo', type: :feature do
  it 'displays the welcome message' do
    text('Hello from Rails!')
  end
end
