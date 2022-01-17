import App from "./app";
describe("Android mobileApp test", () => {
  let app;

  beforeAll(async () => {
    app = new App();
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });
  test("==001==> TESTING DRIVER LOGIN", async () =>{
    //Driver login
    await app.driver.pause(5000)
    const driverLoginButton = await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("I’m a Driver")')
    expect(await driverLoginButton.isDisplayed()).toBe(true)
    await driverLoginButton.touchAction('tap')

    const driverSignInText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Driver Sign In")')
    expect(await driverSignInText.isDisplayed()).toBe(true)
    const driverPinTextVerification= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Please enter your mobile number and pin associated with your Shipwell account.")')
    expect(await driverPinTextVerification.isDisplayed()).toBe(true)
    const driverMobileNumberInput= await app.driver.$('android= new UiSelector().className("android.widget.EditText").text("Mobile Number*")')
    expect(await driverMobileNumberInput.isDisplayed()).toBe(true)
    await driverMobileNumberInput.touchAction('tap')
    await driverMobileNumberInput.setValue('5123586283')
    const driverSendVerificationCodeButton = await app.driver.$('android= new UiSelector().className("android.widget.Button").text("Send Verification Pin")')
    expect(await driverSendVerificationCodeButton.isDisplayed()).toBe(true)
    await driverSendVerificationCodeButton.touchAction('tap')
    await app.driver.pause(2000)
    expect(await driverSignInText.isDisplayed()).toBe(true)
    const driversendingPinText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Sending Shipwell Pin...")')
    expect(await driversendingPinText.isDisplayed()).toBe(true)
    const driverPinCodeText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Enter the PIN code that was sent to the phone number on the previous screen")')
    expect(await driverPinCodeText.isDisplayed()).toBe(true)
    await app.driver.pause(5000)
    const driverPinResendButton= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Resend PIN")')
    expect(await driverPinResendButton.isDisplayed()).toBe(true)
    const driverEnterPinInput= await app.driver.$('android= new UiSelector().className("android.widget.EditText").text("PIN")')
    expect(await driverEnterPinInput.isDisplayed()).toBe(true)
    await driverEnterPinInput.touchAction('tap')
    await driverEnterPinInput.setValue('9678')
    const driverNextButton= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("Next")')
    expect(await driverNextButton.isDisplayed()).toBe(true)
    await driverNextButton.touchAction('tap')
    await app.driver.pause(5000)
  });

  test("==002==> TESTING DRIVER ONBOARDING", async () =>{
    const driverManageShipmentText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Manage All of Your Shipments")')
    expect(await driverManageShipmentText.isDisplayed()).toBe(true)
    const drivermanageShipmentDetailText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("View shipment details, exchange messages, and access and upload documents such as BOLs, PODs, and receipts.")')
    expect(await drivermanageShipmentDetailText.isDisplayed()).toBe(true)
    const driverNextButton= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("Next")')
    expect(await driverNextButton.isDisplayed()).toBe(true)
    await driverNextButton.touchAction('tap')

    const driverAutomationLocationText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Automated Location Updates")')
    expect(await driverAutomationLocationText.isDisplayed()).toBe(true)
    const driverAutomationLocationTextDetails= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Reduce calls with our carrier reps by allowing location tracking to always be on so you can focus on driving.")')
    expect(await driverAutomationLocationTextDetails.isDisplayed()).toBe(true)
    const driverEnableLocationButton= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("Enable Location")')
    expect(await driverEnableLocationButton.isDisplayed()).toBe(true)
    await driverEnableLocationButton.touchAction('tap')
    const driverAllowLocationPermission= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("While using the app")')
    expect(await driverAllowLocationPermission.isDisplayed()).toBe(true)
    await driverAllowLocationPermission.touchAction('tap')

    const driverMessageNotificationText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Messages and Notifications")')
    expect(await driverMessageNotificationText.isDisplayed()).toBe(true)
    const driverMessageNotificationTextDetails= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Exchange messages with shippers and brokers around individual Loads and Shipments, and receive real-time alerts.")')
    expect(await driverMessageNotificationTextDetails.isDisplayed()).toBe(true)
    await driverNextButton.touchAction('tap')
    await app.driver.pause(5000)

  });
  test("==003==> TESTING DRIVER SHIPMENT BOARD", async () =>{
    const driverShipmentText= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Shipments")')
    expect(await driverShipmentText.isDisplayed()).toBe(true)
    const driverSearchShipmentButton= await app.driver.$('android= new UiSelector().className("android.widget.EditText").text("Search Shipments")')
    expect(await driverSearchShipmentButton.isDisplayed()).toBe(true)
    const driverActiveButton= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("ACTIVE")')
    expect(await driverActiveButton.isDisplayed()).toBe(true)
    const driverDeliveredButton= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("DELIVERED")')
    expect(await driverDeliveredButton.isDisplayed()).toBe(true)

    //Searching for an active Shipment and verifying the card
    await driverSearchShipmentButton.touchAction('tap')
    await driverSearchShipmentButton.setValue('ECXEG5')
    await app.driver.pause(2000)
    const driverShipmentTextID= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Shipment: ECXEG5")')
    expect(await driverShipmentTextID.isDisplayed()).toBe(true)
    const driverIamOnTheWayButton= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("I\'m on the way")')
    expect(await driverIamOnTheWayButton.isDisplayed()).toBe(true)
    const driverReportAProblemButton= await app.driver.$('android= new UiSelector().className("android.widget.Button").text("Report a Problem")')
    expect(await driverReportAProblemButton.isDisplayed()).toBe(true)
    await driverShipmentTextID.touchAction('tap')
    await app.driver.pause(3000)

    //Verifying shipment details view
    const driverShipmentID= await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("ECXEG5")')
    expect(await driverShipmentID.isDisplayed()).toBe(true)
    expect(await driverIamOnTheWayButton.isDisplayed()).toBe(true)
    expect(await driverReportAProblemButton.isDisplayed()).toBe(true)
    const googleMapView= await app.driver.$("//android.view.View[@content-desc='Google Map']")
    expect(await googleMapView.isDisplayed()).toBe(true)

    const driverShipmentRef= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_title").text("References")')
    expect(await driverShipmentRef.isDisplayed()).toBe(true)

    const driverShipmentBOL= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_bol").text("BOL#: --")')
    expect(await driverShipmentBOL.isDisplayed()).toBe(true)

    const driverShipmentPO= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_po").text("PO#: --")')
    expect(await driverShipmentPO.isDisplayed()).toBe(true)

    const driverShipmentPRO= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_pro").text("PRO#: --")')
    expect(await driverShipmentPRO.isDisplayed()).toBe(true)

    const driverShipmentPickup= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_pickup").text("Pickup#: --")')
    expect(await driverShipmentPickup.isDisplayed()).toBe(true)

    const driverShipmentCustomerRef= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/ref_customer_reference").text("Customer Reference#: --")')
    expect(await driverShipmentCustomerRef.isDisplayed()).toBe(true)

    await app.driver.touchPerform([
        {action: "longPress", options: {x: 450, y: 1140}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 450, y: 600}},
        {action: "release"},
    ])

    const driverPickupText= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/stop_type").text("Pickup")')
    expect(await shipPickupText.isDisplayed()).toBe(true)
    const driverPickupCompanyAddress= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/company_name").text("1781 Spyglass Dr, Austin, TX 78746, US")')
    expect(await shipPickupCompanyAddress.isDisplayed()).toBe(true)
    const driverPickupAddress1= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/address_1").text("1781 Spyglass Dr")')
    expect(await shipPickupAddress1.isDisplayed()).toBe(true)
    const driverPickupAddress2= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/address_2").text("Austin, TX 78746")')
    expect(await shipPickupAddress2.isDisplayed()).toBe(true)
    const driverPickupPlannedForDate= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/planned_for").text("Planned For: Fri Oct 1 between 08:00-18:00 CDT")')
    expect(await shipPickupPlannedForDate.isDisplayed()).toBe(true)

    const driverDeliveryText= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/stop_type").text("Delivery")')
    expect(await shipDeliveryText.isDisplayed()).toBe(true)
    const driverDeliveryCompanyAddress= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/company_name").text("3799 S Las Vegas Blvd, Las Vegas, NV 89109, US")')
    expect(await shipDeliveryCompanyAddress.isDisplayed()).toBe(true)
    const driverDeliveryAddress1= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/address_1").text("3799 S Las Vegas Blvd")')
    expect(await shipDeliveryAddress1.isDisplayed()).toBe(true)
    const driverAddressAddress2= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/address_2").text("Las Vegas, NV 89109")')
    expect(await shipAddressAddress2.isDisplayed()).toBe(true)
    const driverDeliveryPlannedForDate= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/planned_for").text("Planned For: Fri Oct 1 between 08:00-18:00 PDT")')
    expect(await shipDeliveryPlannedForDate.isDisplayed()).toBe(true)

    await app.driver.touchPerform([
        {action: "longPress", options: {x: 450, y: 1690}},
        {action: "moveTo", options: {x: 450, y: 600}},
        {action: "release"},
    ])

    const driverEquipmentExpandable=  await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Equipment")')
    const driverLineItem1Expandable=  await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Line Item 1")')
    const driverAssignmentExpandable=  await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Assignments")')
    const driverNotesNonExpandable=   await app.driver.$('android= new UiSelector().className("android.widget.TextView").text("Notes")')
    expect(await driverEquipmentExpandable.isDisplayed()).toBe(true)
    expect(await driverLineItem1Expandable.isDisplayed()).toBe(true)
    expect(await driverAssignmentExpandable.isDisplayed()).toBe(true)
    expect(await driverNotesNonExpandable.isDisplayed()).toBe(true)

    //Testing Shipment message
    const MessageButton= await app.driver.$("~Messages")
    await MessageButton.touchAction('tap')
    const driverMessagesText= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/toolbar_title").text("Messages")')
    expect(await driverMessagesText.isDisplayed()).toBe(true)
    expect(await shipShipmentIDText.isDisplayed()).toBe(true)
    const driverChatTextInput= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/messageThread_input").text("Type message here")')
    expect(await driverChatTextInput.isDisplayed()).toBe(true)
    await driverChatTextInput.touchAction('tap')
    await driverChatTextInput.setValue("Mobile Automation Driver to Shipment Chat Message")
    const driverChatSendButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/messageThread_send").text("Send")')
    await driverChatSendButton.touchAction('tap')
    await app.driver.pause(2000)
    const backButton002= await app.driver.$("~Navigate up")
    await backButton002.touchAction('tap')
    await app.driver.pause(3000)

    //Testing Documents inside shipment
    const shipDocumentButton= await app.driver.$("~Documents")
    await shipDocumentButton.touchAction('tap')
    const shipAddDocumentButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/add_document_fab")')
    await shipAddDocumentButton.touchAction('tap')

    const cameraPermissionDialog= await app.driver.$('android= new UiSelector().resourceId("com.android.permissioncontroller:id/permission_message")')
    if (await cameraPermissionDialog.isDisplayed()){
        const cameraAllowButton= await app.driver.$('android= new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")')
        await cameraAllowButton.touchAction('tap')
    }
    
    const cameraShutterButton= await app.driver.$("~Shutter")
    await cameraShutterButton.touchAction('tap')
    const cameraDoneButton= await app.driver.$("~Done")
    await cameraDoneButton.touchAction('tap')
    const cameraCropButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/crop_image_menu_crop")')
    await cameraCropButton.touchAction('tap')
    const shipDocumentTypeButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/autoComplete_shipwellDropdown").text("Document Type")')
    await shipDocumentTypeButton.touchAction('tap')
    const shipPODButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/shipwellTextInput")')
    await shipPODButton.touchAction('tap')
    const shipNotesButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellTextInput")')
    await shipNotesButton.touchAction('tap')
    await shipNotesButton.setValue('Mobile Automation POD Notes')
    const shipPODImage= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/image")')
    expect(await shipPODImage.isDisplayed()).toBe(true)
    const shipDocumentSaveButton= await app.driver.$('android= new UiSelector().resourceId("com.shipwell.debug:id/save_action").text("SAVE")')
    await shipDocumentSaveButton.touchAction('tap')
    await app.driver.pause(3000)
    await backButton002.touchAction('tap')
    await backButton002.touchAction('tap')
    await app.driver.pause(2000)

    await kebabButton001.touchAction("tap")
    await driverDeliveredButton.touchAction('tap')
    expect(await driverActiveButton.isDisplayed()).toBe(true)
    expect(await driverDeliveredButton.isDisplayed()).toBe(true)
    await driverActiveButton.touchAction('tap')
    await kebabButton001.touchAction("tap")
    await app.driver.pause(2000)

});

});