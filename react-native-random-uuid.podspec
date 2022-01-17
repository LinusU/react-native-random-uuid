require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-random-uuid"
  s.version      = package["version"]
  s.summary      = "randomUUID for React Native"
  s.homepage     = "https://github.com/LinusU/react-native-random-uuid"
  s.license      = "MIT"
  s.authors      = { "Linus Unnebäck" => "linus@folkdatorn.se" }

  s.platforms    = { :ios => "10.0", :tvos => "10.0", :osx => "10.14" }
  s.source       = { :git => "https://github.com/LinusU/react-native-random-uuid.git", :tag => "v#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm}"

  s.dependency "React-Core"
end
