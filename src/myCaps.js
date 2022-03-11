let myCaps = {
    capabilities: {
    platformName: "Android",
    automationName: "uiautomator2",
    //deviceName: "emulator-5554",
    deviceName: process.env.BITRISE_EMULATOR_SERIAL,
    //app: "/Users/anuragshipwell/Documents/app-debug.apk",
    app: process.env.BITRISE_APK_PATH,
    unicodeKeyboard: "true",
    resetKeyboard: "true",
    fullReset: "true",
    autoLaunch: "true",
    autoGrantPermissions: "true",
    newCommandTimeout: "60000"
    },
    //host: process.env.HOST|| "0.0.0.0"
    host: "0.0.0.0",
    port: 4723,
    path: "/wd/hub",
  }
  export default myCaps;
  