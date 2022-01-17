class TenderComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async lbTenderedButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("TENDERED")')
    }
    async searchFieldClearButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/imageView_shipwellSearchView_clear")')
    }
    async lbSearchButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellSearchView")')
    }
    async lbTenderLoadCard(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/loads_card_view").index(0)')
    }
    async lbTenderedLoadID(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/textView_load_board_list_item_loadId\")')
    }
    async lbTenderedLoadPickUp(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/item_load_board_stop_pick_up\")')
    }
    async lbTenderedLoadDropOff(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/textView_drop_off_address\")')
    }
    async lbTenderedLoadConstraints(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/constraintLayout_row_container\")')
    }
    async lbTenderedLoadValue(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/linearLayout_tender_item_value_container\")')
    }
    async lbTenderedLoadRejectButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Reject")')
    }
    async lbTenderedLoadAceeptButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Accept")')
    }
    async lbTenderedLoadDetailsTitle(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/toolbar_title\")')
    }
    async googleMaps(){
        return await this.element('~Google Map')
    }
    async chatMessageButton(){
        return await this.element('~Messages')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async lbTenderedLoadConfirmationText(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/textView_AcceptTender_title\")')
    }
    async lbTenderedLoadConfirmationCancelButton(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_acceptTender_cancel\")')
    }
    async lbTenderedLoadConfirmationAcceptButton(){
        return await this.element('android= new UiSelector().resourceId(\"com.shipwell.debug:id/button_acceptTender_accept\")')
    }
    async lbfindMoreTenderButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Find More Tenders")')
    }

    async tender(){
        const lbSearchButton= await this.lbSearchButton()
        const lbTenderedButton= await this.lbTenderedButton()
        const searchFieldClearButton= await this.searchFieldClearButton()
        const lbTenderLoadCard= await this.lbTenderLoadCard()
        const lbTenderedLoadID= await this.lbTenderedLoadID()
        const lbTenderedLoadPickUp= await this.lbTenderedLoadPickUp()
        const lbTenderedLoadDropOff= await this.lbTenderedLoadDropOff()
        const lbTenderedLoadConstraints= await this.lbTenderedLoadConstraints()
        const lbTenderedLoadValue= await this.lbTenderedLoadValue()
        const lbTenderedLoadRejectButton= await this.lbTenderedLoadRejectButton()
        const lbTenderedLoadAceeptButton= await this.lbTenderedLoadAceeptButton()
        
        const lbTenderedLoadDetailsTitle= await this.lbTenderedLoadDetailsTitle()
        const googleMaps= await this.googleMaps()
        const chatMessageButton= await this.chatMessageButton()
        const backButton= await this.backButton()
        const lbTenderedLoadConfirmationText= await this.lbTenderedLoadConfirmationText()
        const lbTenderedLoadConfirmationCancelButton= await this.lbTenderedLoadConfirmationCancelButton()
        const lbTenderedLoadConfirmationAcceptButton= await this.lbTenderedLoadConfirmationAcceptButton()
        const lbfindMoreTenderButton= await this.lbfindMoreTenderButton()



        await this.driver.pause(3000)
        await lbTenderedButton.waitForDisplayed({ timeout: 5000 })
        await lbTenderedButton.waitForEnabled({ timeout: 5000 })
        await lbTenderedButton.touchAction('tap')
        if (await lbTenderLoadCard.isDisplayed()==true){
            await lbTenderedLoadID.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadPickUp.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadDropOff.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadConstraints.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadValue.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadRejectButton.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadAceeptButton.waitForDisplayed({ timeout: 5000 })
            
            await lbTenderLoadCard.touchAction('tap')
            await lbTenderedLoadDetailsTitle.waitForDisplayed({ timeout: 5000 })

            await googleMaps.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadRejectButton.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadAceeptButton.waitForDisplayed({ timeout: 5000 })

            await this.driver.touchPerform([
                {action: "longPress", options: {x: 500, y: 530}},
                {action: "moveTo", options: {x: 0, y: 530}},
                {action: "release"},
            ])

            await chatMessageButton.touchAction('tap')
            await backButton.waitForDisplayed({ timeout: 5000 })
            await backButton.waitForEnabled({ timeout: 5000 })
            await backButton.touchAction('tap')

            await lbTenderedLoadAceeptButton.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadAceeptButton.waitForEnabled({ timeout: 5000 })
            await lbTenderedLoadAceeptButton.touchAction('tap')

            await lbTenderedLoadConfirmationText.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadConfirmationText.waitForEnabled({ timeout: 5000 })
        
            await lbTenderedLoadConfirmationCancelButton.waitForDisplayed({ timeout: 5000 })
            await lbTenderedLoadConfirmationCancelButton.waitForEnabled({ timeout: 5000 })

            await lbTenderedLoadConfirmationAcceptButton.waitForDisplayed({ timeout: 5000 })
            

            await lbTenderedLoadConfirmationAcceptButton.touchAction('tap')
            await lbfindMoreTenderButton.waitForDisplayed({ timeout: 5000 })
            await lbfindMoreTenderButton.touchAction('tap')

    

        }
        else{
            console.log("***** No Shipment have been tendered to the logged in carrier ************")
        }
    }

}
export default TenderComponent;