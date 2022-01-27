class BookNowComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async lbOpenButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("OPEN")')
    }
    async searchFieldClearButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/imageView_shipwellSearchView_clear")')
    }
    async lbSearchButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellSearchView")')
    }
    async lbOpenBookNow(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_load_item_book_now\")')
    }
    async lbOpenBookNowToAddress(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/to_addr\")')
    }
    async lbOpenBookNowPickUpPlannedFor(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/pickup_planned_for\")')
    }
    async lbOpenBookNowFromAddress(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/from_addr\")')
    }
    async lbOpenBookNowdropOffPlannedFor(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/dropoff_planned_for\")')
    }
    async lbOpenBookNowMode(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/mode\")')
    }
    async lbOpenBookNowEquipment(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/equipment\")')
    }
    async lbOpenBookNowNumStops(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/num_stops\")')
    }
    async lbOpenBookNowMiles(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/miles\")')
    }
    async lbOpenBookNowWeight(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/weight\")')
    }
    async lbOpenBookNowDetailsBookNowButton(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/book_button\")')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async bookNow(){
        const lbOpenButton= await this.lbOpenButton()
        const lbOpenBookNow= await this.lbOpenBookNow()
        const lbOpenBookNowToAddress= await this.lbOpenBookNowToAddress()
        const lbOpenBookNowPickUpPlannedFor= await this.lbOpenBookNowPickUpPlannedFor()
        const lbOpenBookNowFromAddress= await this.lbOpenBookNowFromAddress()
        const lbOpenBookNowdropOffPlannedFor= await this.lbOpenBookNowdropOffPlannedFor()
        const lbOpenBookNowMode= await this.lbOpenBookNowMode()
        const lbOpenBookNowEquipment= await this.lbOpenBookNowEquipment()
        const lbOpenBookNowNumStops= await this.lbOpenBookNowNumStops()
        const lbOpenBookNowMiles= await this.lbOpenBookNowMiles()
        const lbOpenBookNowWeight= await this.lbOpenBookNowWeight()
        const lbOpenBookNowDetailsBookNowButton= await this.lbOpenBookNowDetailsBookNowButton()
        const backButton= await this.backButton()
        const searchFieldClearButton= await this.searchFieldClearButton()
        const lbSearchButton= await this.lbSearchButton()
        await this.driver.pause(2000)

        if (await lbOpenButton.isDisplayed()){
            await lbOpenButton.touchAction('tap')
        }
        if (await searchFieldClearButton.isDisplayed()){
            await searchFieldClearButton.touchAction('tap')
            await this.driver.pause(3000)
            await lbSearchButton.waitForDisplayed({ timeout: 5000 })
            await lbSearchButton.waitForEnabled({ timeout: 5000 })
            await lbSearchButton.setValue('LIDPPFACX')
        }
        await lbOpenBookNow.touchAction('tap')
        await lbOpenBookNowToAddress.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowPickUpPlannedFor.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowFromAddress.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowdropOffPlannedFor.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowMode.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowEquipment.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowNumStops.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowMiles.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowWeight.waitForDisplayed({ timeout: 5000 })
        await lbOpenBookNowDetailsBookNowButton.waitForDisplayed({ timeout: 5000 })
        await backButton.waitForDisplayed({ timeout: 5000 })
        await backButton.touchAction('tap')

    }
}
export default BookNowComponent
