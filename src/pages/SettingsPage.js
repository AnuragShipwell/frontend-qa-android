class SettingsPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }

    async kebabButton(){
        return await this.element('~Open navigation drawer')
    }
    async settingsButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Settings")')
    }
    async settingsSupportButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Support")')
    }
    async settingsAppFeedbackbutton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("App Feedback")')
    }
    async settingsTermsButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Terms and Conditions")')
    }
    async settingsPolicyButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Privacy Policy")')
    }

    async settings(){
    const kebabButton= await this.kebabButton()
    const settingsButton= await this.settingsButton()
    const settingsSupportButton= await this.settingsSupportButton()
    const settingsAppFeedbackbutton= await this.settingsAppFeedbackbutton()
    const settingsTermsButton= await this.settingsTermsButton()
    const settingsPolicyButton= await this.settingsPolicyButton()


    if (await kebabButton.isDisplayed()){
        await kebabButton.touchAction('tap')
    }
    await this.driver.pause(2000)
    expect(await settingsButton.isDisplayed()).toBe(true)
    await settingsButton.touchAction('tap')
    
    expect(await settingsSupportButton.isDisplayed()).toBe(true)
    
    expect(await settingsAppFeedbackbutton.isDisplayed()).toBe(true)
    
    expect(await settingsTermsButton.isDisplayed()).toBe(true)
    
    expect(await settingsPolicyButton.isDisplayed()).toBe(true)

    }
}

export default SettingsPage;