# frontend-qa-android
test
This the forntend-qa automation for android App. It is using appium as the server framework, webdriverIO for user interaction and jest as the test runner.
Following thigns needs to be installed on the system locally.

SETUP:

Install nodejs: https://nodejs.org/en/download/

Install Java: https://java.com/en/download/

Install Android Studio: https://developer.android.com/studio/install

Install Appium server: npm install -g appium

Install Appium inspector: https://github.com/appium/appium-inspector

Install Appium-doctor: npm install -g appium-doctor

Run: appium-doctor to figure out if all the dependencies are install properly

Setup the environment variable under .zshrc for:
    export PATH=$HOME/local/bin:$PATH
    export JAVA_HOME=$(/usr/libexec/java_home)
    export ANDROID_HOME=/Users/anuragshipwell/Library/Android/sdk/
    export PATH=$PATH:$JAVA_HOME/bin
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/build-tools
    
To check for JAVA_HOME path refer: // https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/

Once setup is ready, time to run apps now.

1. Launch appium server from termnial: open -a appium
      1. Select default port 4723
      2. Start the server.
2. Launch android studio: 
      1. Open AVD manager from Tools >> AVD Manager >> Select existing phone or a create a new (Pixel 2) preferred.
      2. Start the emulator
3. Clone to project
4. Go to project directory in terminal and do: npm install
5. To run the test for shipper: npm run shipper
6. To run test for dispatcher: npm run dispatcher
