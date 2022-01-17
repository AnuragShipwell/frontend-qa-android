class SignOutComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async signOutButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("Sign Out")')
    }
    async cancelCapsButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("CANCEL")')
    }
    async signOutCapsButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("SIGN OUT")')
    }
    async welcomeToShipwellButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Welcome to the Shipwell App!")')
    }


async signOut(){

const signOutButton=await this.signOutButton()
const cancelCapsButton=await this.cancelCapsButton()
const signOutCapsButton=await this.signOutCapsButton()
const welcomeToShipwellButton= await this.welcomeToShipwellButton()

await signOutButton.waitForDisplayed({ timeout: 5000 })
await signOutButton.touchAction('tap')
await cancelCapsButton.waitForDisplayed({ timeout: 5000 })

await signOutCapsButton.waitForDisplayed({ timeout: 5000 })
await signOutCapsButton.touchAction('tap')

//Verifying first landing view:
await welcomeToShipwellButton.waitForDisplayed({ timeout: 5000 })
}
}

export default SignOutComponent;