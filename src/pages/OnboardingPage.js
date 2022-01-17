class OnboardingPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async onboardingLoadView(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Find More Loads")')
    }
    async nextButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Next")')
    }
    async onboardingAssetView(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Manage Your Assets")')
    }
    async onboardingDispatchView(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Dispatch Your Shipments")')
    }
    async getStartedButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Get Started")')
    }

    async onboarding(){

    const onboardingLoadView = await this.onboardingLoadView()
    const nextButton = await this.nextButton()
    const onboardingAssetView = await this.onboardingAssetView()
    const onboardingDispatchView = await this.onboardingDispatchView()
    const getStartedButton = await this.getStartedButton()

    await onboardingLoadView.waitForDisplayed({timeout:5000})
    await nextButton.touchAction('tap')
    
    await onboardingAssetView.waitForDisplayed({timeout:5000})
    await nextButton.touchAction('tap')

    await onboardingDispatchView.waitForDisplayed({timeout:5000})
    await getStartedButton.touchAction('tap')
    await this.driver.pause(3000)
}

}

export default OnboardingPage;