class DocUploadComponent{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }
    async documentUploadButton(){
        return await this.element("~Documents")
    }
    async shipAddDocumentButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/add_document_fab")')
    }
    async cameraAllowButton(){
        return await this.element('android= new UiSelector().className("android.widget.Button").text("While using the app")')
    }
    async cameraShutterButton(){
        return await this.element("~Shutter")
    }
    async cameraDoneButton(){
        return await this.element("~Done")
    }
    async cameraCropButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("CROP")')
    }
    async shipDocumentTypeButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/autoComplete_shipwellDropdown").text("Document Type")')
    }
    async shipPODButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/shipwellTextInput")')
    }
    async shipNotesButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/editText_shipwellTextInput")')
    }
    async shipPODImage(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/image")')
    }
    async shipDocumentSaveButton(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/save_action").text("SAVE")')
    }
    async backButton(){
        return await this.element('~Navigate up')
    }
    async kebabButton(){
        return await this.element('~Open navigation drawer')
    }

async docUpload(){
const documentUploadButton= await this.documentUploadButton()
const shipAddDocumentButton= await this.shipAddDocumentButton()
const cameraAllowButton= await this.cameraAllowButton()
const cameraShutterButton= await this.cameraShutterButton()
const cameraDoneButton= await this.cameraDoneButton()
const cameraCropButton= await this.cameraCropButton()
const shipDocumentTypeButton= await this.shipDocumentTypeButton()
const shipPODButton= await this.shipPODButton()
const shipNotesButton= await this.shipNotesButton()
const shipPODImage= await this.shipPODImage()
const shipDocumentSaveButton= await this.shipDocumentSaveButton()
const backButton= await this.backButton()
const kebabButton= await this.kebabButton()

await this.driver.pause(2000)
await documentUploadButton.waitForDisplayed({ timeout: 10000 })
await documentUploadButton.touchAction('tap')

await shipAddDocumentButton.waitForDisplayed({ timeout: 10000 })
await shipAddDocumentButton.touchAction('tap')

await cameraAllowButton.waitForDisplayed({ timeout: 10000 })
await cameraAllowButton.touchAction('tap')
await this.driver.pause(2000)

await cameraShutterButton.waitForDisplayed({ timeout: 10000 })
await cameraShutterButton.touchAction('tap')
if (await cameraShutterButton.isDisplayed()==true){
    await cameraShutterButton.waitForEnabled({ timeout: 10000 })
    await cameraShutterButton.touchAction('tap')
}

await cameraDoneButton.waitForDisplayed({ timeout: 10000 })
await cameraDoneButton.touchAction('tap')


await cameraCropButton.waitForDisplayed({ timeout: 10000 })
await cameraCropButton.touchAction('tap')

await shipDocumentTypeButton.waitForDisplayed({ timeout: 10000 })
await shipDocumentTypeButton.touchAction('tap')

await shipPODButton.waitForDisplayed({ timeout: 10000 })
await shipPODButton.touchAction('tap')

await shipNotesButton.waitForDisplayed({ timeout: 10000 })
await shipNotesButton.touchAction('tap')
await shipNotesButton.setValue('Mobile Automation POD Notes')

await shipPODImage.waitForDisplayed({ timeout: 10000 })
await shipDocumentSaveButton.waitForDisplayed({ timeout: 10000 })
await shipDocumentSaveButton.touchAction('tap')

await this.driver.pause(3000)

await backButton.waitForDisplayed({ timeout: 10000 })
await backButton.touchAction('tap')

await this.driver.pause(2000)

await backButton.waitForDisplayed({ timeout: 10000 })
await backButton.touchAction('tap')

//await kebabButton.waitForExist({ timeout: 10000 })
//await kebabButton.touchAction("tap")
    }
}

export default DocUploadComponent