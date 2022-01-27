class ChatComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async chatButton(){
        return await this.element("~Messages")
    }
    async messagesTitleText(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/toolbar_title").text("Messages")')
    }
    async chatTextInput(){
        return await this.element('android= new UiSelector().className("android.widget.EditText").text("Type message here")')
    }
    async chatSendButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/send_button")')
    }
    async shipmentChatSendButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Send")')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async lbLoadIDTitleBar(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/toolbar_title")')
    }
    async shipmentChatHeader(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Shipment: 5RUCFH")')
    }
    async chat(message){
        const chatButton= await this.chatButton()
        const messagesTitleText= await this.messagesTitleText()
        const chatTextInput= await this.chatTextInput()
        const chatSendButton= await this.chatSendButton()
        const backButton= await this.backButton()
        const lbLoadIDTitleBar= await this.lbLoadIDTitleBar()
        const shipmentChatHeader= await this.shipmentChatHeader()
        const shipmentChatSendButton= await this.shipmentChatSendButton()

        await this.driver.pause(2000)
        await chatButton.waitForDisplayed({ timeout: 10000 })
        await chatButton.touchAction('tap')
        await this.driver.pause(2000)
        if (await shipmentChatHeader.isDisplayed()){           
            await messagesTitleText.waitForDisplayed({ timeout: 10000 })
            await chatTextInput.waitForDisplayed({ timeout: 10000 })
            await shipmentChatSendButton.waitForDisplayed({ timeout: 10000 })
            await chatTextInput.touchAction('tap')
            await chatTextInput.setValue("Shipper Chat message test")
            await shipmentChatSendButton.touchAction('tap')
            await backButton.waitForDisplayed({ timeout: 10000 })
            await backButton.touchAction('tap')
        }
        else{
            await messagesTitleText.waitForDisplayed({ timeout: 10000 })
            await chatTextInput.touchAction('tap')
            await chatTextInput.setValue(message)
            await chatSendButton.touchAction('tap')
            
            await backButton.waitForDisplayed({ timeout: 10000 })
            await backButton.touchAction('tap')
            await this.driver.pause(2000)
            if (await lbLoadIDTitleBar.isDisplayed()){
                await backButton.touchAction('tap')
        }
    }
}
}

export default ChatComponent