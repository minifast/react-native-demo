require 'fileutils'
require 'tmpdir'

class Screenshot
  def capture
    $driver.screenshot(file.path)
    $stdout.puts "Saved screenshot to #{file.path}"
  end

  def file
    @file ||= File.new(File.join(Dir.tmpdir, SecureRandom.uuid) + '.png', 'w+')
  end
end

RSpec.configure do |config|
  config.after(:each) do |example|
    if example.exception
      Screenshot.new.capture
    end
  end
end
