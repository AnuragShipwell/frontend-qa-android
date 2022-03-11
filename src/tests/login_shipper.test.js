import App from "../app";
describe("Android mobileApp test", () => {
  let app;

  beforeAll(async () => {
    app = new App();
    await app.start();
});

  afterAll(async () => {
    await app.stop();
});

  test("==001==> TESTING APP INSTALLATION", async () => {
    expect(await app.driver.isAppInstalled("com.shipwell.debug")).toBe(true);
    await app.driver.pause(5000)
    await app.driver.queryAppState("com.shipwell.testflight")
    await app.driver.pause("5000")
    await app.driver.getPageSource()
});
  test("==002==> TESTING SHIPPER LOGIN", async () => {
    await app.loginPage.login('anurag@shipwell.com', 'Kmv!!1234')
})
  test("==003==> TESTING SHIPPER ONBOARDING", async () => {
    await app.onboardingPage.onboarding()
})
  test("==004==> TESTING COMPASS BOARD", async () => {
    await app.compassPage.compass()
});
  test("==005==> TESTING LOAD BOARD", async () => {
    await app.loadBoardPage.loadBoard()
});
  test("==006==> TESTING SHIPPER LOAD BOARD CHAT", async () =>{
    await app.chatComponent.chat('Msg:Android')
});
  test("==007==> TESTING SHIPMENT BOARD", async () => {
    await app.shipmentPage.shipment()
    await app.chatComponent.chat('Msg:Android')
});
  test("==008==> TESTING SHIPMENT BOARD DOC UPLOAD", async () => {
    await app.docUploadComponent.docUpload()
});
  test("==009==> TESTING INBOX BOARD", async () => {
    await app.inboxPage.inbox()
});

  test("==010==> TESTING SETTINGS BOARD", async () => {
    await app.settingsPage.settings()
});
  test("==011==> TESTING SIGNOUT", async () =>{
    await app.signOutComponent.signOut()
});

});
