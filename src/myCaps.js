let myCaps = {
    capabilities: {
    platformName: "Android",
    automationName: "uiautomator2",
    deviceName: "emulator-5554",
    //deviceName: 'Google Pixel 3 GoogleAPI Emulator',
    app: "/Users/anuragshipwell/Documents/app-debug.apk",
    //appiumVersion: '1.20.2',
    fullReset: "true"
    },
    //host: process.env.HOST|| "0.0.0.0"
    host: "0.0.0.0",
    port: 4723,
    path: "/wd/hub",
  }
  export default myCaps;
  