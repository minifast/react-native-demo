require 'appium_lib'

RSpec.configure do |config|
  config.before(:suite) do
    driver_caps = {
      platformName:  'iOS',
      versionNumber: '9.3',
      deviceName:    'iPhone 6s',
      newCommandTimeout: 9999,
      app: '/Users/minifast/workspace/react-native-demo/ios/build/Build/Products/Debug-iphonesimulator/ReactNativeDemo.app',
      automationName: 'XCUITest'
    }

    $driver = Appium::Driver.new(caps: driver_caps)
    $driver.start_driver
    Appium.promote_appium_methods(RSpec::Core::ExampleGroup)
  end

  config.after(:suite) do
    $driver.driver_quit
  end
end
