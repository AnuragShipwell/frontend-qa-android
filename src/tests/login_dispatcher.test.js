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
  });
  
  test("==002==> TESTING DISPATCHER LOGIN", async () =>{
    await app.loginPage.login('anurag+d001@shipwell.com', 'Shiptest%')
  });
  
  test("==003==> TESTING DISPATCHER LOGIN", async () =>{
    await app.onboardingPage.onboarding()
  });

  test("==004==> TESTING DISPATCHER LOAD BOARD VIEW", async () =>{
    await app.loadBoardPage.loadBoard()
  });
  
  test("==005==> TESTING DISPATCHER LOAD BOARD CHAT", async () =>{
    await app.chatComponent.chat('Msg:Android')
  });
  
  test("==006==> TESTING DISPATCHER LOAD BOARD BOOK NOW", async () =>{
    await app.bookNowComponent.bookNow()
  });
  
  test("==007==> TESTING DISPATCHER LOAD BOARD PLACE BID", async () =>{
    await app.placeBidComponent.placeBid('LIDT2CGWP')
  });
  
  test("==009==> TESTING DISPATCHER LOAD BOARD TENDER VIEW", async () =>{
    await app.tenderComponent.tender()
  });
  
  test("==008==> TESTING DISPATCHER SHIPMENT BOARD", async () =>{
    await app.shipmentPage.shipment()
    await app.chatComponent.chat('Msg:Android')
  
  });
  test("==009==> TESTING DISPATCHER SHIPMENT DOC UPLOAD", async () =>{
    await app.docUploadComponent.docUpload()
  });

  test("==009==> TESTING DISPATCHER SHIPMENT ASSIGN DRIVER", async () =>{
    await app.assignDriverComponent.assignDriver()
  });
  
  test("==011==> TESTING DISPATCHER SETTINGS BOARD", async () =>{
    await app.settingsPage.settings()
  });
  
  test("==012==> TESTING SIGNOUT", async () =>{
    await app.signOutComponent.signOut()
  });
});