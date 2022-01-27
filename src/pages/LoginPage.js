class LoginPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
async IhaveShipwellAccountButton(){
    return await this.element('android= new UiSelector().className("android.widget.TextView").text("I have a Shipwell Account")')
}
async emailButton(){
    return await this.element('android= new UiSelector().className("android.widget.EditText").text("Email*")')
}
async passwordInput(){
    return await this.element('android= new UiSelector().className("android.widget.EditText").text("Password*")')
}
async signInButton(){
    return await this.element('android= new UiSelector().className("android.widget.Button").text("Sign In")')
}
async signInButtonScroll(){
    return await this.element('android= new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.Button").text("Sign In"))')
}

async login(email, password){
    const IhaveShipwellAccountButton= await this.IhaveShipwellAccountButton()
    const emailButton= await this.emailButton()
    const passwordInput= await this.passwordInput()
    const signInButton= await this.signInButton()
    
    await IhaveShipwellAccountButton.waitForDisplayed({timeout:5000})
    await IhaveShipwellAccountButton.touchAction("tap");
    await emailButton.waitForDisplayed({timeout:5000})
    await emailButton.setValue(email)

    await passwordInput.waitForDisplayed({timeout:5000})
    await passwordInput.setValue(password)

    await this.signInButtonScroll()
    await signInButton.touchAction("tap");
}
}
export default LoginPage;