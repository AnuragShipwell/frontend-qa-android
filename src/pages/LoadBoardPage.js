class LoadBoardPage{
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
    async loadBoardButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Load Board")')
    }
    async lbOpenButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("OPEN")')
    }
    async lbBiddingButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("BIDDING")')
    }
    async lbTenderedButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("TENDERED")')
    }
    async lbSearchButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellSearchView")')
    }
    async lbLoadID(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/textView_load_board_list_item_loadId")')
    }
    async lbLoadIDTitleBar(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/toolbar_title")')
    }
    async googleMapView(){
        return await this.element("//android.view.View[@content-desc='Google Map']")
    }
    async ldLoadDetailsText(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Load Details")')
    }
    async lbBidHistoryExpandable(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Bid History")')
    }

    async loadBoard(){

    const kebabButton= await this.kebabButton()
    const loadBoardButton= await this.loadBoardButton()
    const lbOpenButton= await this.lbOpenButton()
    const lbBiddingButton= await this.lbBiddingButton()
    const lbTenderedButton= await this.lbTenderedButton()
    const lbSearchButton= await this.lbSearchButton()
    const lbLoadID= await this.lbLoadID()
    const lbLoadIDTitleBar= await this.lbLoadIDTitleBar()
    const googleMapView= await this.googleMapView()
    const ldLoadDetailsText= await this.ldLoadDetailsText()
    const lbBidHistoryExpandable= await this.lbBidHistoryExpandable()
    const compassButton= await this.compassButton()
    
    await this.driver.pause(2000)

    if (await compassButton.isDisplayed()){
        await kebabButton.touchAction('tap')
        await loadBoardButton.touchAction('tap')
        await lbOpenButton.touchAction('tap')
        await lbSearchButton.waitForDisplayed({ timeout: 10000 })
        await lbSearchButton.waitForEnabled({ timeout: 10000 })
        await lbSearchButton.setValue('LIDA4GF4M')

    }
    else{
        await lbSearchButton.setValue('LIDPPFACX')

    }
    await loadBoardButton.waitForDisplayed({ timeout: 10000 })
    await lbOpenButton.waitForDisplayed({ timeout: 10000 })
    await lbBiddingButton.waitForDisplayed({ timeout: 10000 })
    await lbTenderedButton.waitForDisplayed({ timeout: 10000 })

    await lbLoadID.waitForDisplayed({ timeout: 10000 })
    await lbLoadID.waitForEnabled({ timeout: 10000 })
    await lbLoadID.touchAction('tap')

    await lbLoadIDTitleBar.waitForDisplayed({ timeout: 10000 })
    await googleMapView.waitForDisplayed({ timeout: 10000 })

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 500, y: 1190}},
        {action: "moveTo", options: {x: 500, y: 500}},
        {action: "release"},
    ])
    await ldLoadDetailsText.waitForDisplayed({ timeout: 10000 })

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 500, y: 1140}},
        {action: "moveTo", options: {x: 500, y: 500}},
        {action: "release"},
    ])
    await lbBidHistoryExpandable.waitForDisplayed({ timeout: 10000 })
}
}
export default LoadBoardPage;