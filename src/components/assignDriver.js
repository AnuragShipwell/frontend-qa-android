class AssignDriverComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async shipmentActiveAssignDriver(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_contained\")')
    }
    async shipmentActiveAssignTitle(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/toolbar_title\").text(\"Assign\")')
    }
    async shipmentActiveCountryCode(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/frameLayout_shipwellPhoneInput_country_container\")')
    }
    async shipmentActivePhoneNumber(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/frameLayout_shipwellPhoneInput_phone_container\")')
    }
    async shipmentActiveSelfAssignDriver(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_assign_asset_assign_self\")')
    }
    async shipmentActiveSelectPowerUnit(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/editText_shipwellTextInput\").text(\"Select Power Unit\")')
    }
    //async shipmentActiveSelectTrailer(){
      //  return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/editText_shipwellTextInput\").text(\"Select Trailer\")')
    //}
    //async shipmentActiveSelectTrailerSet(){
      //  return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/editText_shipwellTextInput\").text(\"Ford\")')
    //}
    async shipmentActiveCancelButton(){
      return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_assign_asset_cancel\")')
    }
    async shipmentActiveAssignButton(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_assign_asset_assign\")')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }

    async assignDriver(){
        const shipmentActiveAssignDriver= await this.shipmentActiveAssignDriver()
        const shipmentActiveAssignTitle= await this.shipmentActiveAssignTitle()
        const shipmentActiveCountryCode= await this.shipmentActiveCountryCode()
        const shipmentActivePhoneNumber= await this.shipmentActivePhoneNumber()
        const shipmentActiveSelfAssignDriver= await this.shipmentActiveSelfAssignDriver()
        const shipmentActiveSelectPowerUnit= await this.shipmentActiveSelectPowerUnit()
        //const shipmentActiveSelectTrailer= await this.shipmentActiveSelectTrailer()
        //const shipmentActiveSelectTrailerSet= await this.shipmentActiveSelectTrailerSet()
        const shipmentActiveCancelButton= await this.shipmentActiveCancelButton()
        const shipmentActiveAssignButton= await this.shipmentActiveAssignButton()
        const backButton= await this.backButton()

        
        await shipmentActiveAssignDriver.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveAssignDriver.waitForEnabled({ timeout: 5000 })
        await shipmentActiveAssignDriver.touchAction('tap')

        await shipmentActiveAssignTitle.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveAssignTitle.waitForEnabled({ timeout: 5000 })

        await shipmentActiveCountryCode.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveCountryCode.waitForEnabled({ timeout: 5000 })

        await shipmentActivePhoneNumber.waitForDisplayed({ timeout: 5000 })
        await shipmentActivePhoneNumber.waitForEnabled({ timeout: 5000 })

        await shipmentActiveSelfAssignDriver.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveSelfAssignDriver.waitForEnabled({ timeout: 5000 })

        await shipmentActiveSelectPowerUnit.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveSelectPowerUnit.waitForEnabled({ timeout: 5000 })

        await shipmentActiveCancelButton.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveCancelButton.waitForEnabled({ timeout: 5000 })

        await shipmentActiveAssignButton.waitForDisplayed({ timeout: 5000 })
        await shipmentActiveAssignButton.waitForEnabled({ timeout: 5000 })

        await backButton.waitForDisplayed({ timeout: 5000 })
        await backButton.waitForEnabled({ timeout: 5000 })
        await backButton.touchAction('tap')
}
}

export default AssignDriverComponent