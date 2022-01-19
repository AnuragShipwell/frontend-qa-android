class CompassPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async kebabButton(){
        return await this.element('~Open navigation drawer')
    }
    async compassButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Compass")')
    }
    async allOpenButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("All Open")')
    }
    async alertTilesButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("ALERT TILES")')
    }
    async mapViewButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("MAP VIEW")')
    }
    async googleMapView(){
        return await this.element("//android.view.View[@content-desc='Google Map']")
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async latePickupButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Late Pickup")')
    }
    async markStopComplete(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Mark Stop")')
    }
    async editAppointmentTime(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Appointment")')
    }
    async checkinTimeText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Check in Time")')
    }
    async checkoutTimeText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Check Out Time")')
    }
    async editTimeStop1Text(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Stop 1")')
    }
    async noPermissionText(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("You do not have permission")')
    }
    async closeButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Close")')
    }
    async lateDeliveryButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Late Delivery")')
    }
    async editStopHeaderText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Edit Stops")')
    }
    async LDmarkAsDeliveredButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Mark as Delivered")')
    }
    async unknownErrorDialog(){
        return await this.element('android= new UiSelector().className("android.view.View").text("An unknown error occurred.")')
    }



    async runningLateButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Running Late")')
    }










    async notTtracking(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Not Tracking")')
    }
    async NTdriverButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Driver")')
    }
    async NTdriverNumberButton(){
        return await this.element('id=com.shipwell.debug:id/editText_shipwellPhoneInput')
    }
    async NTselectPowerUnit(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Select Power Unit")')
    }
    async NTtrailer(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Trailer")')
    }
    async NTAssignButtonScroll(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.view.View").text("Assign")')
    }
    async NTAssignButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Assign")')
    }
    async NTshipwellAppTrackingText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Shipwell App Tracking")')
    }
    async NTrequestAppInstallButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Request App Install")')
    }
    async NTstartAppTrackingButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Start App Tracking")')
    }
    async NTEquipmentButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Equipment")')
    }
    async NTaddLocationEventoNTimeline(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Add Location Event on Timeline")')
    }
    async NTaddLocationZipCode(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/autoCompleteEditText")')
    }
    async NTaddLocationDescription(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText')
    }
    async NTsendEmail(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Send Not Tracking Email")')
    }
    async NTsendEmailCarrierText(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Carrier").index(1)')
    }
    async NTsendEmailCarrierCheckBox(){
        return await this.element('android= new UiSelector().className("android.widget.CheckBox").index(1)')
    }
    async NTadditionalEmailContact(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Additional Email Contact")')
    }
    async NTadditionalEmailContactInput(){
        return await this.element('android= new UiSelector().className("android.widget.EditText")')
    }
    async NTemailTemplate(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Select Email Template")')
    }
    async NTenterCustomMessage(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Enter a Custom Message Here *")')
    }
    async scrollDown(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollForward()')
    }
    async scrollUp(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollBackward()')
    }
    async scrollToBeginning(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning()')
    }
    async scrollToEnd(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd()')
    }
    async saveButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Save")')
    }

    async carrierNotAssignedButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Carrier Not Assigned")')
    }
    async actionCardHeader(){
        return await this.element('id=com.shipwell.debug:id/toolbar_title')
    }
    async actionButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Actions")')
    }
    async CNALogANewBid(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Log a New Bid")')
    }
    async CNARequestBids(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Request Bids")')
    }
    async CNATenderToCarriers(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Tenders to Carrier(s)")')
    }
    async CNAPushToRoutingGuide(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Push to Routing Guide")')
    }
    async CNACarrierUSDOT(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')
    }
    async CNAContactFirstName(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')
    }
    async CNAContactLastName(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[3]')
    }
    async CNAEmail(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[4]')
    }
    async CNAMobileNumber(){
        return await this.element('android= new UiSelector().className("android.widget.EditText").text("Mobile Number*")')
    }
    async CNABidDetailsText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Bid Details")')
    }
    async CNAAvailableLocation(){
        return await this.element('id=com.shipwell.debug:id/autoCompleteEditText')
    }
    async CNABidAmount(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')
    }
    async CNATenderModes(){
        return await this.element('android= new UiSelector().className("android.view.View").index(2)')
    }
    async CNATenderModesButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Mode *")')
    }
    async CNATenderModesDisplayed(){
        return await this.element('android= new UiSelector().className("android.view.View").text("MODE *")')
    }
    async CNARequestBidsMode(){
        return await this.element('android= new UiSelector().className("android.view.View").index(3)')
    }
    async CNARequestBidsEquipment(){
        return await this.element('android= new UiSelector().className("android.view.View").index(4)')
    }
    async CNAEquipment(){
        return await this.element('android= new UiSelector().className("android.view.View").index(5)')
    }
    async CNAEquipmentButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Equipment *")')
    }
    async CNAEquipmentDisplayed(){
        return await this.element('android= new UiSelector().className("android.view.View").text("EQUIPMENT *")')
    }
    async CNAAvailableDate(){
        return await this.element('android= new UiSelector().className("android.view.View").text("AVAILABLE DATE")')
    }
    async CNAAvailableTime(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Available Time")')
    }
    async CNANotes(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')
    }
    async cancelButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Cancel")')
    }
    async createButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Create")')
    }
    async createButtonScroll(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.view.View").text("Create"))')
    }
    async okButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("OK")')
    }
    async CNASearchCarrierByTag (){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')
    }
    async CNASearchCarrierByName (){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')
    }
    async CNASpecialInstruction (){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[3]')
    }
    async CNAPreviewEmailButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Preview Email")')
    }
    async CNASendButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Send")')
    }
    async CNATenderFromContract(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[1]')
    }
    async CNATenderCarrier(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[2]')
    }
    async CNATenderRates(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[3]')
    }
    async CNATenderAvailableDate(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.view.View[4]')
    }
    async CNATenderSpecialInstruction(){
        return await this.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.ScrollView/android.widget.EditText[4]')
    }
    async CNATenderSpecialInstructionText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Special Instructions")')
    }
    async CNATenderButtonScroll(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.view.View").text("Tender"))')
    }
    async CNATenderButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Tender")')
    }
    async CNARoutingGuideButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Routing Guide *")')
    }
    async CNARoutingGuideInput(){
        return await this.element('android= new UiSelector().className("android.widget.EditText")')
    }
    async CNARoutingGuideCancelButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Cancel")')
    }
    async cancelButton01(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("CANCEL")')
    }
    async CNARoutingGuideRunGuideButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Run Guide")')
    }    
    async carrierStatusButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Carrier Status")')
    }
    async CScarrierDetailsText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Carrier Details")')
    }
    async CScarrierNameText(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Carrier:")')
    }
    async CScarrierStatusText(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Status:")')
    }
    async CScarrierNotesText(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("Notes:")')
    }
    async viewShipmentDetailsButton(){
        return await this.element('android= new UiSelector().className("android.view.View").textContains("View Shipment Details")')
    }
    async wathedShipmentButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Watched Shipment")')
    }
    async locationCapacityExceededButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Location Capacity Exceeded")')
    }
    async compassShipmentAlertCard(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/compass_shipment_alert_card_view").index(0)')
    }
    async LCEButtonScroll(){
        return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.TextView").text("Location Capacity Exceeded"))')
    }
    async saveSuccessMessage(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Stop dates and times have been updated.")')
    }
    async noActionAvailableButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("No Actions Available")')
    }

    async compass(){
    const compassButton= await this.compassButton()
    const allOpenButton= await this.allOpenButton()
    const alertTilesButton= await this.alertTilesButton()
    const compassShipmentAlertCard= await this.compassShipmentAlertCard()
    const mapViewButton= await this.mapViewButton()
    const googleMapView= await this.googleMapView()
    const backButton= await this.backButton()
    const latePickupButton= await this.latePickupButton()
    const lateDeliveryButton= await this.lateDeliveryButton()
    const runningLateButton= await this.runningLateButton()
    const notTtracking=await this.notTtracking()
    const carrierNotAssignedButton= await this.carrierNotAssignedButton()
    const carrierStatusButton= await this.carrierStatusButton()
    const wathedShipmentButton= await this.wathedShipmentButton()
    const locationCapacityExceededButton= await this.locationCapacityExceededButton()
    const actionCardHeader= await this.actionCardHeader()
    const actionButton= await this.actionButton()
    const markStopComplete= await this.markStopComplete()
    const editAppointmentTime= await this.editAppointmentTime()
    const checkinTimeText= await this.checkinTimeText()
    const checkoutTimeText= await this.checkoutTimeText()
    const editTimeStop1Text= await this.editTimeStop1Text()
    const noPermissionText= await this.noPermissionText()
    const closeButton= await this.closeButton()
    const LDmarkAsDeliveredButton= await this.LDmarkAsDeliveredButton()
    const unknownErrorDialog= await this.unknownErrorDialog()
    const editStopHeaderText= await this.editStopHeaderText()
    const NTdriverButton= await this.NTdriverButton()
    const NTdriverNumberButton= await this.NTdriverNumberButton()
    const NTselectPowerUnit= await this.NTselectPowerUnit()
    const NTtrailer= await this.NTtrailer()
    const NTAssignButton= await this.NTAssignButton()
    const NTshipwellAppTrackingText= await this.NTshipwellAppTrackingText()
    const NTrequestAppInstallButton= await this.NTrequestAppInstallButton()
    const NTstartAppTrackingButton= await this.NTstartAppTrackingButton()
    const NTEquipmentButton= await this.NTEquipmentButton()
    const NTaddLocationEventoNTimeline= await this.NTaddLocationEventoNTimeline()
    const NTaddLocationZipCode= await this.NTaddLocationZipCode()
    const NTaddLocationDescription= await this.NTaddLocationDescription()
    const scrollUp= await this.scrollUp()
    const saveButton= await this.saveButton()
    const NTsendEmail= await this.NTsendEmail()
    const NTsendEmailCarrierText= await this.NTsendEmailCarrierText()
    const NTsendEmailCarrierCheckBox= await this.NTsendEmailCarrierCheckBox()
    const NTadditionalEmailContact= await this.NTadditionalEmailContact()
    const NTadditionalEmailContactInput= await this.NTadditionalEmailContactInput()
    const NTemailTemplate= await this.NTemailTemplate()
    const NTenterCustomMessage= await this.NTenterCustomMessage()
    const CNALogANewBid= await this.CNALogANewBid()
    const CNARequestBids= await this.CNARequestBids()
    const CNATenderToCarriers= await this.CNATenderToCarriers()
    const CNAPushToRoutingGuide= await this.CNAPushToRoutingGuide()
    const CNACarrierUSDOT= await this.CNACarrierUSDOT()
    const CNAContactFirstName= await this.CNAContactFirstName()
    const CNAContactLastName= await this.CNAContactLastName()
    const CNAEmail= await this.CNAEmail()
    const CNAMobileNumber= await this.CNAMobileNumber()
    const CNABidDetailsText= await this.CNABidDetailsText()
    const CNAAvailableLocation= await this.CNAAvailableLocation()
    const CNABidAmount= await this.CNABidAmount()
    const CNAEquipment= await this.CNAEquipment()
    const CNATenderModesDisplayed= await this.CNATenderModesDisplayed()
    const CNAEquipmentDisplayed= await this.CNAEquipmentDisplayed()
    const CNAAvailableDate= await this.CNAAvailableDate()
    const okButton= await this.okButton()
    const CNAAvailableTime= await this.CNAAvailableTime()
    const CNANotes= await this.CNANotes()
    const cancelButton= await this.cancelButton()
    const cancelButton01= await this.cancelButton01()
    const createButton= await this.createButton()
    const CNASearchCarrierByTag= await this.CNASearchCarrierByTag()
    const CNASearchCarrierByName= await this.CNASearchCarrierByName()
    const CNASpecialInstruction= await this.CNASpecialInstruction()
    const CNAPreviewEmailButton= await this.CNAPreviewEmailButton()
    const CNASendButton= await this.CNASendButton()
    const CNATenderFromContract= await this.CNATenderFromContract()
    const CNATenderCarrier= await this.CNATenderCarrier()
    const CNATenderModes= await this.CNATenderModes()
    const CNATenderModesButton= await this.CNATenderModesButton()
    const CNAEquipmentButton= await this.CNAEquipmentButton()
    const CNARequestBidsMode= await this.CNARequestBidsMode()
    const CNARequestBidsEquipment= await this.CNARequestBidsEquipment()
    const CNATenderRates= await this.CNATenderRates()
    const CNATenderSpecialInstructionText= await this.CNATenderSpecialInstructionText()
    const CNATenderAvailableDate= await this.CNATenderAvailableDate()
    const CNATenderSpecialInstruction= await this.CNATenderSpecialInstruction()
    const CNATenderButton= await this.CNATenderButton()
    const CNARoutingGuideButton= await this.CNARoutingGuideButton()
    const CNARoutingGuideInput= await this.CNARoutingGuideInput()
    const CNARoutingGuideCancelButton= await this.CNARoutingGuideCancelButton()
    const CNARoutingGuideRunGuideButton= await this.CNARoutingGuideRunGuideButton()
    
    const CScarrierDetailsText= await this.CScarrierDetailsText()
    const CScarrierNameText= await this.CScarrierNameText()
    const CScarrierStatusText= await this.CScarrierStatusText()
    const CScarrierNotesText= await this.CScarrierNotesText()
    const viewShipmentDetailsButton= await this.viewShipmentDetailsButton()
    const saveSuccessMessage= await this.saveSuccessMessage()
    const noActionAvailableButton= await this.noActionAvailableButton()

    await compassButton.waitForDisplayed({ timeout: 15000 })
    await this.driver.pause(4000)
    //Verifying OPEN ALERT view
    await allOpenButton.waitForDisplayed({ timeout: 30000 })
    await allOpenButton.touchAction('tap')
    await allOpenButton.waitForDisplayed({ timeout: 15000 })
    try {
    await mapViewButton.waitForDisplayed({ timeout: 15000 })
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })

    await alertTilesButton.waitForDisplayed({ timeout: 15000 })
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})

    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.waitForEnabled({ timeout: 15000 })
    await backButton.touchAction('tap')
    await this.driver.pause(3000)
    }
    catch (error){

    }

    //Verifying Late pickup
    if (await latePickupButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await latePickupButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    
    await latePickupButton.waitForDisplayed({ timeout: 8000 })
    await latePickupButton.waitForEnabled({ timeout: 8000 })
    await latePickupButton.touchAction('tap')
    await latePickupButton.waitForDisplayed({ timeout: 15000 })
    try{
    await alertTilesButton.waitForDisplayed({ timeout: 15000 })
    await mapViewButton.waitForDisplayed({ timeout: 15000 })
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })
    
    await alertTilesButton.waitForDisplayed({ timeout: 15000 })
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await compassShipmentAlertCard.touchAction('tap')
   
    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.waitForEnabled({ timeout: 15000 })
    await actionButton.touchAction('tap')

    if(await noActionAvailableButton.isDisplayed()==true){
        await noActionAvailableButton.touchAction('tap')
        await backButton.waitForDisplayed({ timeout: 10000 })
        await backButton.touchAction('tap')
    }
    //Edit appoinment Time
    else{
        if (await editAppointmentTime.isDisplayed()==true){
            await editAppointmentTime.waitForDisplayed({ timeout: 15000 })
            await editAppointmentTime.touchAction('tap')
            await editTimeStop1Text.waitForDisplayed({ timeout: 15000 })
            for (let i=0; i<2; i++){
                const scrollDown= await this.scrollDown();
                if(await saveButton.isDisplayed()==true){
                    break;
                }
            }
            await saveButton.waitForDisplayed({timeout: 15000})
            await saveButton.touchAction('tap')
            await this.driver.pause(2000)
            if (await closeButton.isDisplayed()==true){
                await closeButton.touchAction('tap')
                await this.driver.pause(1000)
                await backButton.waitForDisplayed({ timeout: 15000 })
                await backButton.waitForEnabled({ timeout: 15000 })
            }
            else if (await saveButton.isDisplayed()==true){
                await cancelButton.touchAction('tap')
            }
        }

    //Mark stop as complete
        await actionButton.waitForDisplayed({timeout: 25000})
        await actionButton.touchAction('tap')
        if (await markStopComplete.isDisplayed()==true){
            await markStopComplete.waitForDisplayed({ timeout: 15000 })
            await markStopComplete.touchAction('tap')
            await saveButton.waitForDisplayed({ timeout: 15000 })
            await saveButton.waitForEnabled({ timeout: 15000 })
            await cancelButton.waitForDisplayed({ timeout: 15000 })
            await cancelButton.waitForEnabled({ timeout: 15000 })
            await saveButton.touchAction('tap')
            if (await closeButton.isDisplayed()==true){
                await closeButton.touchAction('tap')
                await this.driver.pause(1000)
                if ((await backButton.isDisplayed()==true)){
                    await backButton.touchAction('tap')
                }
                
            }
            else if (await cancelButton.isDisplayed()==true){
                await cancelButton.touchAction('tap')
            }
            }
        await this.driver.pause(3000)
        }
        if (await LDmarkAsDeliveredButton.isDisplayed()==true){
            await LDmarkAsDeliveredButton.waitForDisplayed({ timeout: 15000 })
            await LDmarkAsDeliveredButton.touchAction('tap')
            await saveButton.waitForDisplayed({ timeout: 15000 })
            await saveButton.touchAction('tap')
            if (await closeButton.isDisplayed()==true){
                await closeButton.touchAction('tap')
                await this.driver.pause(1000)
                if ((await backButton.isDisplayed()==true)){
                    await backButton.touchAction('tap')
                }
            }
            else if (await cancelButton.isDisplayed()==true){
                await cancelButton.touchAction('tap')
            }
        }
        await backButton.waitForDisplayed({ timeout: 30000 })
        await backButton.waitForEnabled({ timeout: 30000 })
        await backButton.touchAction('tap')
        await this.driver.pause(3000)
    }   
    catch (error){
    }

    //Verifying Late delivery
    if (await lateDeliveryButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await lateDeliveryButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await lateDeliveryButton.waitForDisplayed({ timeout: 8000 })
    await lateDeliveryButton.waitForEnabled({ timeout: 8000 })
    await lateDeliveryButton.touchAction('tap')
    await lateDeliveryButton.waitForDisplayed({ timeout: 15000 })
    try{
    await alertTilesButton.waitForDisplayed({ timeout: 3000 })
    await mapViewButton.waitForDisplayed({ timeout: 15000 })
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })

    await alertTilesButton.waitForDisplayed({ timeout: 15000 })
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await compassShipmentAlertCard.waitForEnabled({ timeout: 15000 })
    await compassShipmentAlertCard.touchAction('tap')
    await actionCardHeader.waitForDisplayed({timeout: 5000})
    await actionCardHeader.waitForEnabled({ timeout: 5000 })
    await actionButton.waitForDisplayed({timeout: 5000})
    await actionButton.waitForEnabled({ timeout: 5000 })
    await actionButton.touchAction('tap')

    if(await noActionAvailableButton.isDisplayed()==true){
        await noActionAvailableButton.touchAction('tap')
        await backButton.waitForDisplayed({ timeout: 10000 })
        await backButton.touchAction('tap')
    }
    else{
    //Edit Delivery Appointment
    await editAppointmentTime.waitForDisplayed({timeout: 5000})
    await editAppointmentTime.waitForEnabled({ timeout: 5000 })
    await editAppointmentTime.touchAction('tap')
    
    await editTimeStop1Text.waitForDisplayed({ timeout: 5000 })
    while(await saveButton.isDisplayed()==false){
        const scrollDown= await this.scrollDown();
    }
    await saveButton.waitForDisplayed({timeout: 5000})
    await saveButton.waitForEnabled({ timeout: 5000 })
    await saveButton.touchAction('tap')
    if(closeButton.isDisplayed()==true){
        await closeButton.touchAction('tap')
        await this.driver.pause(1000)
        if ((await backButton.isDisplayed()==true)){
            await backButton.touchAction('tap')
        }
    }
    else if (await saveButton.isDisplayed()==true){
        await cancelButton.touchAction('tap')
    }

    //Mark as Delivered
    await actionButton.waitForDisplayed({timeout: 5000})
    await actionButton.waitForEnabled({ timeout: 5000 })
    await actionButton.touchAction('tap')

    if (await markStopComplete.isDisplayed()==true){
        await markStopComplete.touchAction('tap')
        while(await saveButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
        await saveButton.touchAction('tap')
        if(closeButton.isDisplayed()==true){
            await closeButton.touchAction('tap')
            await this.driver.pause(1000)
            if ((await backButton.isDisplayed()==true)){
                await backButton.touchAction('tap')
            }
        }
        else if (await saveButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
        }

    }
    else if(await LDmarkAsDeliveredButton.isDisplayed()==true){
        await LDmarkAsDeliveredButton.touchAction('tap')
        while(await saveButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
        await saveButton.touchAction('tap')
        if(closeButton.isDisplayed()==true){
            await closeButton.touchAction('tap')
            await this.driver.pause(1000)
            if ((await backButton.isDisplayed()==true)){
                await backButton.touchAction('tap')
            }
        }
        else if (await saveButton.isDisplayed()==true){
            await cancelButton.touchAction('tap')
        }
    }
    else if(await noActionAvailableButton.isDisplayed()==true){
        await noActionAvailableButton.touchAction('tap')
        await backButton.waitForDisplayed({ timeout: 10000 })
        await backButton.touchAction('tap')
    }
    /*
    if (await closeButton.isDisplayed()==true){
        await closeButton.waitForDisplayed({ timeout: 5000 })
        await closeButton.touchAction('tap')
        await backButton.waitForDisplayed({ timeout: 5000 })
        await backButton.touchAction('tap')
        await actionButton.waitForDisplayed({timeout: 5000})
        await actionButton.waitForEnabled({ timeout: 5000 })
        await actionButton.touchAction('tap')
    }*/
    }
    await this.driver.pause(3000)
    await backButton.waitForDisplayed({ timeout: 10000 })
    await backButton.touchAction('tap')
    await this.driver.pause(3000)
    }
    catch (error){
        console.log(error)
    }

    //Verifying Running Late
    if (await runningLateButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await runningLateButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await runningLateButton.waitForDisplayed({ timeout: 8000 })
    await runningLateButton.waitForEnabled({ timeout: 8000 })
    await runningLateButton.touchAction('tap')
    await runningLateButton.waitForDisplayed({timeout: 15000})
    try{
    await alertTilesButton.waitForDisplayed({timeout: 3000})
    await mapViewButton.waitForDisplayed({timeout: 15000})
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })
    
    await alertTilesButton.waitForDisplayed({timeout: 15000})
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await compassShipmentAlertCard.touchAction('tap')

    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.touchAction('tap')

    //Mark stop complete
    if (await LDmarkAsDeliveredButton.isdisplayed()==true){
        await LDmarkAsDeliveredButton.touchAction('tap')
    }
    else if (await markStopComplete.isdisplayed()==true){
        await markStopComplete.touchAction('tap')
    }
    //await checkinTimeText.waitForDisplayed({ timeout: 15000 })
    //await checkoutTimeText.waitForDisplayed({ timeout: 15000 })
    await saveButton.touchAction('tap')
    if (await closeButton.isDisplayed()==true){
        await closeButton.touchAction('tap')
        await this.driver.pause(1000)
        if ((await backButton.isDisplayed()==true)){
            await backButton.touchAction('tap')
        }
    }
    else if (await saveButton.isDisplayed()==true){
        await cancelButton.touchAction('tap')
    }
    //Edit appointment time
    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.touchAction('tap')
    await editAppointmentTime.waitForDisplayed({ timeout: 15000 })
    await editAppointmentTime.touchAction('tap')
    await editTimeStop1Text.waitForDisplayed({ timeout: 15000 })
    while(await saveButton.isDisplayed()==false){
        const scrollDown= await this.scrollDown();
    }
    await saveButton.waitForDisplayed({timeout: 15000})
    await saveButton.touchAction('tap')

    if (await closeButton.isDisplayed()==true){
        await closeButton.touchAction('tap')
        await this.driver.pause(1000)
        if ((await backButton.isDisplayed()==true)){
            await backButton.touchAction('tap')
        }
    }
    else if (await saveButton.isDisplayed()==true){
        await cancelButton.touchAction('tap')
    }
    await editTimeStop1Text.waitForDisplayed({timeout: 15000})
    await backButton.waitForDisplayed({ timeout: 30000 })
    await backButton.touchAction('tap')
    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await backButton.waitForDisplayed({ timeout: 30000 })
    await backButton.touchAction('tap')
    await this.driver.pause(3000)
    }
    catch (error){
    }

    //Verifying Not Tracking
    if (await notTtracking.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await notTtracking.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await notTtracking.waitForDisplayed({ timeout: 8000 })
    await notTtracking.waitForEnabled({ timeout: 8000 })
    await notTtracking.touchAction('tap')
    await notTtracking.waitForDisplayed({timeout: 15000})
    try{
        await alertTilesButton.waitForDisplayed({timeout: 3000})
        await mapViewButton.waitForDisplayed({timeout: 15000})
        await mapViewButton.waitForEnabled({ timeout: 15000 })
        await mapViewButton.touchAction('tap')
        await googleMapView.waitForDisplayed({ timeout: 8000 })
        await googleMapView.waitForEnabled({ timeout: 8000 })
        
        await alertTilesButton.waitForDisplayed({timeout: 15000})
        await alertTilesButton.waitForEnabled({ timeout: 15000 })
        await alertTilesButton.touchAction('tap')
    
        await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
        await compassShipmentAlertCard.waitForEnabled({ timeout: 15000 })
        await compassShipmentAlertCard.touchAction('tap')
        await NTdriverButton.waitForDisplayed({timeout: 15000})
        await NTdriverButton.waitForEnabled({ timeout: 15000 })
        await NTdriverButton.touchAction('tap')
        
        await NTdriverNumberButton.waitForDisplayed({timeout: 15000})
        await NTdriverNumberButton.waitForEnabled({ timeout: 15000 })
        await NTdriverNumberButton.clearValue()
        await NTdriverNumberButton.setValue("15128064080")
        await NTselectPowerUnit.waitForDisplayed({timeout: 15000})
        await NTselectPowerUnit.waitForEnabled({ timeout: 15000 })
        await NTtrailer.waitForDisplayed({timeout: 15000})
        await NTtrailer.waitForEnabled({ timeout: 15000 })

        //const NTAssignButtonScroll= await this.NTAssignButtonScroll()
        await NTAssignButton.waitForDisplayed({timeout: 15000})
        await NTAssignButton.waitForEnabled({ timeout: 15000 })
        await NTAssignButton.touchAction('tap')

        await NTshipwellAppTrackingText.waitForDisplayed({timeout: 15000})
        await NTshipwellAppTrackingText.waitForEnabled({ timeout: 15000 })
        await NTrequestAppInstallButton.waitForDisplayed({timeout: 15000})
        await NTrequestAppInstallButton.waitForEnabled({ timeout: 15000 })
        await NTstartAppTrackingButton.waitForDisplayed({timeout: 15000})
        await NTstartAppTrackingButton.waitForEnabled({ timeout: 15000 })
        await NTEquipmentButton.waitForDisplayed({timeout: 15000})
        await NTEquipmentButton.waitForEnabled({ timeout: 15000 })

        await actionButton.waitForDisplayed({timeout: 15000})
        await actionButton.waitForEnabled({ timeout: 15000 })
        await actionButton.touchAction('tap')
        await NTaddLocationEventoNTimeline.waitForDisplayed({timeout: 15000})
        await NTaddLocationEventoNTimeline.waitForEnabled({ timeout: 15000 })
        await NTaddLocationEventoNTimeline.touchAction('tap')
        await NTaddLocationZipCode.waitForDisplayed({timeout: 15000})
        await NTaddLocationZipCode.waitForEnabled({ timeout: 15000 })
        await NTaddLocationDescription.waitForDisplayed({timeout: 15000})
        await NTaddLocationDescription.waitForEnabled({ timeout: 15000 })
        await cancelButton.waitForDisplayed({timeout: 15000})
        await cancelButton.waitForEnabled({ timeout: 15000 })
        await saveButton.waitForDisplayed({timeout: 15000})
        await saveButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')

        await actionButton.waitForDisplayed({timeout: 15000})
        await actionButton.waitForEnabled({ timeout: 15000 })
        await actionButton.touchAction('tap')
        await NTsendEmail.waitForDisplayed({timeout: 15000})
        await NTsendEmail.waitForEnabled({ timeout: 15000 })
        await NTsendEmail.touchAction('tap')
        await NTsendEmailCarrierText.waitForDisplayed({timeout: 15000})
        await NTsendEmailCarrierText.waitForEnabled({ timeout: 15000 })
        await NTsendEmailCarrierText.touchAction('tap')

        await NTsendEmailCarrierCheckBox.waitForDisplayed({timeout: 15000})
        await NTsendEmailCarrierCheckBox.waitForEnabled({ timeout: 15000 })
        await NTsendEmailCarrierCheckBox.touchAction('tap')

        await NTadditionalEmailContact.waitForDisplayed({timeout: 15000})
        await NTadditionalEmailContact.waitForEnabled({ timeout: 15000 })
        await NTadditionalEmailContact.touchAction('tap')
        await NTadditionalEmailContactInput.waitForDisplayed({timeout: 15000})
        await NTadditionalEmailContactInput.waitForEnabled({ timeout: 15000 })
        await NTadditionalEmailContactInput.setValue("anurag371@gmail.com")
        await this.driver.touchPerform([
            {action: "longPress", options: {x: 600, y: 850}},
            { action: 'wait', options: { ms: 100 }},
            {action: "moveTo", options: {x: 600, y: 300}},
            {action: "release"},
        ])
        await NTemailTemplate.waitForDisplayed({timeout: 15000})
        await NTemailTemplate.waitForEnabled({ timeout: 15000 })
        await NTemailTemplate.touchAction('tap')
        await NTenterCustomMessage.waitForDisplayed({timeout: 15000})
        await NTenterCustomMessage.waitForEnabled({ timeout: 15000 })
        await NTenterCustomMessage.touchAction('tap')
        await saveButton.waitForDisplayed({timeout: 15000})
        await saveButton.waitForEnabled({ timeout: 15000 })
        await saveButton.touchAction('tap')
        if (await closeButton.isDisplayed()==true){
            await closeButton.touchAction('tap')
            await this.driver.pause(1000)
            await backButton.waitForDisplayed({ timeout: 15000 })
            await backButton.touchAction('tap')
        }
        await this.driver.pause(3000)
        await backButton.waitForDisplayed({ timeout: 15000 })
        await backButton.waitForEnabled({ timeout: 15000 })
        await backButton.touchAction('tap')
        await this.driver.pause(3000)
        }
        catch (error){
        }

    //Verifying Carrier Not Assigned
    if (await carrierNotAssignedButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await carrierNotAssignedButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await carrierNotAssignedButton.waitForDisplayed({ timeout: 8000 })
    await carrierNotAssignedButton.waitForEnabled({ timeout: 8000 })
    await carrierNotAssignedButton.touchAction('tap')
    await carrierNotAssignedButton.waitForDisplayed({timeout: 15000})
    try{
    await alertTilesButton.waitForDisplayed({timeout: 3000})
    await mapViewButton.waitForDisplayed({timeout: 15000})
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })

    await alertTilesButton.waitForDisplayed({timeout: 15000})
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await compassShipmentAlertCard.touchAction('tap')
    await actionCardHeader.waitForDisplayed({timeout: 15000})
    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.waitForEnabled({ timeout: 15000 })
    
    await actionButton.touchAction('tap')
    await CNALogANewBid.waitForDisplayed({timeout: 15000})
    await CNALogANewBid.waitForEnabled({ timeout: 15000 })
    await CNARequestBids.waitForDisplayed({timeout: 15000})
    await CNARequestBids.waitForEnabled({ timeout: 15000 })
    await CNATenderToCarriers.waitForDisplayed({timeout: 15000})
    await CNATenderToCarriers.waitForEnabled({ timeout: 15000 })
    await CNAPushToRoutingGuide.waitForDisplayed({timeout: 15000})
    await CNAPushToRoutingGuide.waitForEnabled({ timeout: 15000 })
    
    //Log a new bid
    await CNALogANewBid.touchAction('tap')
    await this.driver.pause(2000)
    await CNACarrierUSDOT.waitForDisplayed({timeout: 15000})
    await CNACarrierUSDOT.waitForEnabled({ timeout: 15000 })
    await CNACarrierUSDOT.setValue("00000")
    await this.driver.pause("10000")
    await CNAContactFirstName.touchAction('tap')

    await CNAContactFirstName.setValue('Test: FirstName')
    await CNAContactLastName.setValue('Test: LastName')
    await CNAEmail.setValue('email@test.com')
    await CNAMobileNumber.setValue('15128064080')
    await CNAAvailableLocation.setValue('1781 Spyglass Drive, Austin, TX, USA')
    await CNABidDetailsText.touchAction('tap')
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 53, y: 1450}},
        {action: "moveTo", options: {x: 53, y: 23}},
        {action: "release"},
    ])
    await CNABidAmount.setValue('1100')
    
    if (!CNATenderModesDisplayed.isDisplayed()){
    await CNARequestBidsMode.waitForDisplayed({timeout: 15000})
    await CNARequestBidsMode.waitForEnabled({ timeout: 15000 })
    await CNARequestBidsMode.touchAction('tap')
    }
    if (!CNAEquipmentDisplayed.isDisplayed()){
    await CNARequestBidsEquipment.waitForDisplayed({timeout: 15000})
    await CNARequestBidsEquipment.waitForEnabled({ timeout: 15000 })
    await CNARequestBidsEquipment.touchAction('tap')
    await CNANotes.touchAction('tap')
    }
    //await CNAAvailableDate.touchAction('tap')
    //await okButton.waitForDisplayed({timeout: 15000})
    //await okButton.waitForEnabled({ timeout: 15000 })
    //await okButton.touchAction('tap')
    //await CNAAvailableTime.waitForDisplayed({timeout: 15000})
    //await CNAAvailableTime.waitForEnabled({ timeout: 15000 })
    //await CNAAvailableTime.touchAction('tap')
    //await cancelButton01.waitForDisplayed({timeout: 15000})
    //await cancelButton01.waitForEnabled({ timeout: 15000 })
    //await cancelButton01.touchAction('tap')
    await CNANotes.waitForDisplayed({timeout: 15000})
    await CNANotes.waitForEnabled({ timeout: 15000 })
    await CNANotes.setValue("Testing, please ignore")
    await this.driver.pause(3000)
    await cancelButton.waitForDisplayed({timeout: 15000})
    await cancelButton.waitForEnabled({ timeout: 15000 })
    await createButton.waitForDisplayed({timeout: 15000})
    await createButton.waitForEnabled({ timeout: 15000 })
    await createButton.touchAction('tap')
    await this.driver.pause(3000)

    //Request bid
    await actionButton.touchAction('tap')
    await CNARequestBids.waitForDisplayed({ timeout: 15000 })
    await CNARequestBids.waitForEnabled({ timeout: 15000 })
    await CNARequestBids.touchAction('tap')

    await CNASearchCarrierByTag.waitForDisplayed({timeout: 15000})
    await CNASearchCarrierByTag.waitForEnabled({ timeout: 15000 })
    await CNASearchCarrierByName.setValue("Anurag_Carrier001")
    await this.driver.pause(2000)
    await this.driver.touchPerform([
        {action: "tap", options: {x: 150, y: 790}}
    ])
    await CNASpecialInstruction.setValue('Testing please ignore')
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 500, y: 1200}},
        {action: "moveTo", options: {x: 500, y: 350}},
        {action: "release"},
    ])
    await CNAPreviewEmailButton.waitForDisplayed({timeout: 15000})
    await CNAPreviewEmailButton.waitForEnabled({ timeout: 15000 })
    await CNASendButton.waitForDisplayed({timeout: 15000})
    await CNASendButton.waitForEnabled({ timeout: 15000 })
    await CNASendButton.touchAction('tap')
    
    //Tender to carrier
    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.waitForEnabled({ timeout: 15000 })
    await actionButton.touchAction('tap')
    await CNATenderToCarriers.waitForDisplayed({timeout: 15000})
    await CNATenderToCarriers.waitForEnabled({ timeout: 15000 })
    await CNATenderToCarriers.touchAction('tap')
    
    await CNATenderFromContract.waitForDisplayed({timeout: 15000})
    await CNATenderFromContract.waitForEnabled({ timeout: 15000 })
    await CNATenderCarrier.setValue("Anurag_Carrier001")
    await this.driver.pause(3000)
    await CNATenderModes.touchAction('tap')

    if (await CNATenderModesDisplayed.isDisplayed()==false){
        await CNATenderModesButton.waitForDisplayed({timeout: 15000})
        await CNATenderModesButton.waitForEnabled({ timeout: 15000 })
        await CNATenderModesButton.touchAction('tap')
        await CNAEquipmentButton.touchAction('tap') // To tap on the dropdown
    }

    if (await CNAEquipmentDisplayed.isDisplayed()==false){
        await CNAEquipmentButton.waitForDisplayed({timeout: 15000})
        await CNAEquipmentButton.waitForEnabled({ timeout: 15000 })
        await CNAEquipmentButton.touchAction('tap')
        await CNATenderSpecialInstructionText.touchAction('tap') // To tap on the dropdown
    }
    

    await CNATenderRates.setValue("1122")
    //await CNATenderAvailableDate.touchAction('tap')
    //await cancelButton01.waitForDisplayed({timeout: 15000})
    //await cancelButton01.waitForEnabled({ timeout: 15000 })
    //await cancelButton01.touchAction('tap')
    await CNATenderSpecialInstruction.setValue("Testing")
    const CNATenderButtonScroll= await this.CNATenderButtonScroll()
    await CNATenderButton.waitForDisplayed({timeout: 15000})
    await CNATenderButton.waitForEnabled({ timeout: 15000 })
    await CNATenderButton.touchAction('tap')
    await this.driver.pause(5000)
    //Push to routing guide
    await actionButton.waitForDisplayed({timeout: 15000})
    await actionButton.waitForEnabled({ timeout: 15000 })
    await actionButton.touchAction('tap')
    await CNAPushToRoutingGuide.waitForDisplayed({timeout: 15000})
    await CNAPushToRoutingGuide.waitForEnabled({ timeout: 15000 })
    await CNAPushToRoutingGuide.touchAction('tap')
    await CNARoutingGuideButton.waitForDisplayed({timeout: 15000})
    await CNARoutingGuideButton.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideButton.touchAction('tap')
    await CNARoutingGuideInput.setValue('ship')
    await this.driver.pause(2000)
    await CNARoutingGuideCancelButton.waitForDisplayed({timeout: 15000})
    await CNARoutingGuideCancelButton.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideCancelButton.touchAction('tap')
    await this.driver.pause(2000)
    await CNARoutingGuideRunGuideButton.waitForDisplayed({timeout: 15000})
    await CNARoutingGuideRunGuideButton.waitForEnabled({ timeout: 15000 })
    await CNARoutingGuideRunGuideButton.touchAction('tap')
    await this.driver.pause(2000)
    if (await CNARoutingGuideRunGuideButton.isDisplayed()==true){
        await cancelButton.touchAction('tap')
    }
    await this.driver.pause(3000)
    await backButton.waitForDisplayed({ timeout: 20000 })
    await backButton.waitForEnabled({ timeout: 20000 })
    await backButton.touchAction('tap')
    await this.driver.pause(2000)
    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.waitForEnabled({ timeout: 15000 })
    await backButton.touchAction('tap')
    await this.driver.pause(3000)
}
    catch (error){
        console.log(error)
    }

    //Verify Carrier Status
    if (await carrierStatusButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await carrierStatusButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await carrierStatusButton.waitForDisplayed({ timeout: 15000 })
    await carrierStatusButton.waitForEnabled({ timeout: 15000 })
    await carrierStatusButton.touchAction('tap')
    await carrierStatusButton.waitForDisplayed({timeout: 15000})
    try{
    await alertTilesButton.waitForDisplayed({timeout: 3000})
    await mapViewButton.waitForDisplayed({timeout: 15000})
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })

    await alertTilesButton.waitForDisplayed({timeout: 15000})
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await compassShipmentAlertCard.touchAction('tap')
    
    await CScarrierDetailsText.waitForDisplayed({timeout: 15000})
    await CScarrierNameText.waitForDisplayed({timeout: 15000})
    await CScarrierStatusText.waitForDisplayed({timeout: 15000})
    await CScarrierNotesText.waitForDisplayed({timeout: 15000})
    await viewShipmentDetailsButton.waitForDisplayed({timeout: 15000})

    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.touchAction('tap')
    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.touchAction('tap')
    }
    catch (error){
        console.log(error)
    }
    //Verify watched shipment
    if (await wathedShipmentButton.isDisplayed()==false){
        const scrollUp= await this.scrollUp()
        await this.driver.pause(1000)
        while(await wathedShipmentButton.isDisplayed()==false){
            const scrollDown= await this.scrollDown();
        }
    }
    await wathedShipmentButton.waitForDisplayed({ timeout: 15000 })
    await wathedShipmentButton.waitForEnabled({ timeout: 15000 })
    await wathedShipmentButton.touchAction('tap')
    await wathedShipmentButton.waitForDisplayed({ timeout: 15000 })
    try{
    await alertTilesButton.waitForDisplayed({ timeout: 3000 })
    await mapViewButton.waitForDisplayed({timeout: 15000})
    await mapViewButton.waitForEnabled({ timeout: 15000 })
    await mapViewButton.touchAction('tap')
    await googleMapView.waitForDisplayed({ timeout: 8000 })
    await googleMapView.waitForEnabled({ timeout: 8000 })

    await alertTilesButton.waitForDisplayed({timeout: 15000})
    await alertTilesButton.waitForEnabled({ timeout: 15000 })
    await alertTilesButton.touchAction('tap')

    await compassShipmentAlertCard.waitForDisplayed({timeout: 15000})
    
    await backButton.waitForDisplayed({ timeout: 15000 })
    await backButton.waitForEnabled({ timeout: 15000 })
    await backButton.touchAction('tap')
    await this.driver.pause(2000)
    }
    catch (error){
        console.log(error)
    }

}
}

export default CompassPage;