class InboxPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async kebabButton(){
        return await this.element('~Open navigation drawer')
    }
    async inboxButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Inbox")')
    }
    async inboxMessagesCapsButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("MESSAGES")')
    }
    async inboxNotificationsCapsButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("NOTIFICATIONS")')
    }
    async inboxMessagesButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Messages")')
    }
    async inboxNotificationButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Notifications")')
    }
    async notificationReadButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Read")')
    }
    async notificationUnReadButton(){
        return await this.element('android= new UiSelector().className("android.view.View").text("Unread")')
    }

    async inbox(){

    const inboxButton= await this.inboxButton()
    const inboxMessagesCapsButton= await this.inboxMessagesCapsButton()
    const inboxNotificationsCapsButton= await this.inboxNotificationsCapsButton()
    const inboxMessagesButton= await this.inboxMessagesButton()
    const kebabButton= await this.kebabButton()
    const inboxNotificationButton= await this.inboxNotificationButton()
    const notificationReadButton= await this.notificationReadButton()
    const notificationUnReadButton= await this.notificationUnReadButton()
    
    if (await kebabButton.isDisplayed()){
        await kebabButton.touchAction('tap')
    }
    await inboxButton.waitForDisplayed({ timeout: 5000 })
    await inboxButton.waitForEnabled({ timeout: 5000 })
    await inboxButton.touchAction('tap')

    await inboxMessagesCapsButton.waitForDisplayed({ timeout: 5000 })
    await inboxMessagesCapsButton.waitForEnabled({ timeout: 5000 })
    await inboxNotificationsCapsButton.waitForDisplayed({ timeout: 5000 })
    await inboxNotificationsCapsButton.waitForEnabled({ timeout: 5000 })
    
    //Messages view
    await inboxMessagesCapsButton.touchAction('tap')
    await inboxMessagesButton.waitForDisplayed({ timeout: 5000 })
    
    await kebabButton.touchAction("tap")

    //Notification view
    await inboxNotificationsCapsButton.touchAction('tap')
    await inboxNotificationButton.waitForDisplayed({ timeout: 5000 })
    
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 150, y: 460}},
        {action: "moveTo", options: {x: 900, y: 460}},
        {action: "release"},
    ])
    await this.driver.pause(2000)
    if (await notificationReadButton.isDisplayed()){
        await notificationReadButton.waitForDisplayed({ timeout: 5000 })
        await notificationReadButton.touchAction('tap')
    }
    else{
        await notificationUnReadButton.waitForDisplayed({timeout: 5000})
        await notificationUnReadButton.touchAction('tap')
}
    await this.driver.pause(2000)
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 150, y: 460}},
        {action: "moveTo", options: {x: 900, y: 460}},
        {action: "release"},
    ])
    await this.driver.pause(2000)
    if (await notificationUnReadButton.isDisplayed() ){
        await notificationUnReadButton.waitForDisplayed({timeout: 5000})
        await notificationUnReadButton.touchAction('tap')
    }
    else{
        await notificationReadButton.waitForDisplayed({ timeout: 5000 })
        await notificationReadButton.touchAction('tap')
    }
    

    await kebabButton.touchAction("tap")

}
}

export default InboxPage;