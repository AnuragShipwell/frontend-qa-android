class PlaceBidComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    } 
    async lbBiddingButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("BIDDING")')
    }
    async searchFieldClearButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/imageView_shipwellSearchView_clear")')
    }
    async lbSearchButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellSearchView")')
    }
    async lbPlaceBidButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Place Bid")')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async lbBiddingSearchedLoadID(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/textView_load_board_list_item_loadId").text("Load ID: LIDT2CGWP")')
    }
    async lbLoadIdTitleBarText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("LIDT2CGWP")')
    }
    async lbPlaceBidText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Place Bid")')
    }
    async lbEnterYourBidInput(){
        return await this.element('android= new UiSelector().className("android.widget.EditText").text("Enter Your Bid")')
    }
    async lbBidSubmitButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Submit Bid")')
    }
 
 async placeBid(){
 const lbBiddingButton= await this.lbBiddingButton()
 const lbSearchButton= await this.lbSearchButton()
 const searchFieldClearButton= await this.searchFieldClearButton()
 const lbPlaceBidButton= await this.lbPlaceBidButton()
 const backButton= await this.backButton()
 const lbBiddingSearchedLoadID= await this.lbBiddingSearchedLoadID()
 const lbLoadIdTitleBarText= await this.lbLoadIdTitleBarText()
 const lbPlaceBidText= await this.lbPlaceBidText()
 const lbEnterYourBidInput= await this.lbEnterYourBidInput()
 const lbBidSubmitButton= await this.lbBidSubmitButton()

 //Testing Placing multiple Bid and Deleting the bids.
 await lbBiddingButton.waitForDisplayed({ timeout: 5000 })
 await lbBiddingButton.waitForEnabled({ timeout: 5000 })
 await lbBiddingButton.touchAction('tap')
 
 await searchFieldClearButton.waitForDisplayed({ timeout: 5000 })
 await searchFieldClearButton.waitForEnabled({ timeout: 5000 })
 await searchFieldClearButton.touchAction('tap')
 
 //await lbSearchButton.touchAction('tap')
 await lbSearchButton.setValue('LIDT2CGWP') //'LIDT2CGWP'
 
 await lbPlaceBidButton.waitForDisplayed({ timeout: 5000 })
 await lbPlaceBidButton.waitForEnabled({ timeout: 5000 })
 await lbPlaceBidButton.touchAction('tap')
 
 await lbPlaceBidText.waitForDisplayed({ timeout: 5000 })
 await lbEnterYourBidInput.waitForDisplayed({ timeout: 5000 })
 
 await backButton.touchAction('tap')

 await lbBiddingSearchedLoadID.waitForDisplayed({ timeout: 5000 })
 await lbBiddingSearchedLoadID.waitForEnabled({ timeout: 5000 })
 await lbBiddingSearchedLoadID.touchAction('tap')
 
 
 await lbLoadIdTitleBarText.waitForDisplayed({ timeout: 5000 })
 await lbPlaceBidButton.waitForEnabled({ timeout: 5000 })
 await lbPlaceBidButton.touchAction('tap')

 await lbPlaceBidText.waitForDisplayed({ timeout: 5000 })
 
 await lbEnterYourBidInput.waitForDisplayed({ timeout: 5000 })
 await lbEnterYourBidInput.waitForEnabled({ timeout: 5000 })
 await lbEnterYourBidInput.touchAction('tap')
 await lbEnterYourBidInput.setValue('234')

 await lbBidSubmitButton.waitForDisplayed({ timeout: 5000 })
 await lbBidSubmitButton.waitForEnabled({ timeout: 5000 })
 await lbBidSubmitButton.touchAction('tap')
 
 await this.driver.pause(3000)
 await backButton.waitForDisplayed({ timeout: 5000 })
 await backButton.waitForEnabled({ timeout: 5000 })
 await backButton.touchAction('tap')
 }
}

export default PlaceBidComponent;