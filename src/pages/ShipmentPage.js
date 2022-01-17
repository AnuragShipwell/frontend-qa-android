class ShipmentPage{
    constructor(driver){
        this.driver=driver;
    }
    async element(selector){
        return await this.driver.$(selector)
    }

    async kebabButton(){
        return await this.element('~Open navigation drawer')
    }
    async shipmentsButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Shipments")')
    }
    async shipActiveButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("ACTIVE")')
    }
    async shipDeliveredButton(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("DELIVERED")')
    }
    async shipSearchShipments(){
        return await this.element('android= new UiSelector().className("android.widget.EditText").text("Search Shipments")')
    }
    async shipAssignButton(){
        return await this.element('android= new UiSelector().className("android.widget.EditText").text("Search Shipments")')
    }
    async shipShipmentIDText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Shipment: 5RUCFH")')
    }
    async shipDispatchedText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("DISPATCHED")')
    }
    async shipAtPickupText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("AT PICKUP")')
    }
    async shipAtDeliveryText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("AT DELIVERY")')
    }
    async shipDeliveredText(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("DELIVERED")')
    }
    async shipPickupText(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/stop_type").text("Pickup")')
    }
    async shipDeliveryText(){
        return await this.element('android= new UiSelector().resourceId("com.shipwell.debug:id/stop_type").text("Delivery")')
    }
    async shipEquipmentExpandable(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Equipment")')
    }
    async shipLineItem1Expandable(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Line Item 1")')
    }
    async shipAssignmentExpandable(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Assignments")')
    }
    async shipNotesNonExpandable(){
        return await this.element('android= new UiSelector().className("android.widget.TextView").text("Notes")')
    }


    async shipment(){
    const kebabButton= await this.kebabButton()
    const shipmentsButton= await this.shipmentsButton()
    const shipActiveButton= await this.shipActiveButton()
    const shipDeliveredButton= await this.shipDeliveredButton()
    const shipSearchShipments= await this.shipSearchShipments()
    const shipShipmentIDText = await this.shipShipmentIDText()
    const shipDispatchedText= await this.shipDispatchedText()
    const shipAtPickupText= await this.shipAtPickupText()
    const shipAtDeliveryText= await this.shipAtDeliveryText()
    const shipDeliveredText= await this.shipDeliveredText()
    const shipPickupText= await this.shipPickupText()
    const shipDeliveryText= await this.shipDeliveryText()
    const shipEquipmentExpandable=  await this.shipEquipmentExpandable()
    const shipLineItem1Expandable=  await this.shipLineItem1Expandable()
    const shipAssignmentExpandable=  await this.shipAssignmentExpandable()
    const shipNotesNonExpandable=   await this.shipNotesNonExpandable()

    if (await kebabButton.isDisplayed()){
        await kebabButton.touchAction("tap")
    }
    await shipmentsButton.waitForDisplayed({ timeout: 10000 })
    await shipmentsButton.touchAction('tap')
    await shipActiveButton.waitForDisplayed({ timeout: 10000 })
    await shipDeliveredButton.waitForDisplayed({ timeout: 10000 })

    await shipActiveButton.touchAction('tap')
    await shipActiveButton.waitForDisplayed({ timeout: 10000 })
    await shipDeliveredButton.waitForDisplayed({ timeout: 10000 })

    await shipSearchShipments.setValue('5RUCFH')

    await shipShipmentIDText.waitForDisplayed({ timeout: 10000 })
    await shipShipmentIDText.touchAction('tap')

    await shipDispatchedText.waitForDisplayed({ timeout: 10000 })
    await shipAtPickupText.waitForDisplayed({ timeout: 10000 })

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 500, y: 530}},
        {action: "moveTo", options: {x: 0, y: 530}},
        {action: "release"},
    ])

    await shipAtDeliveryText.waitForDisplayed({ timeout: 10000 })

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 500, y: 530}},
        {action: "moveTo", options: {x: 0, y: 530}},
        {action: "release"},
    ])
    
    await shipDeliveredText.waitForDisplayed({ timeout: 10000 })

    await this.driver.touchPerform([
        {action: "longPress", options: {x: 450, y: 1140}},
        { action: 'wait', options: { ms: 100 }},
        {action: "moveTo", options: {x: 450, y: 600}},
        {action: "release"},
    ])

    await shipPickupText.waitForDisplayed({ timeout: 5000 })
    
    await this.driver.touchPerform([
        {action: "longPress", options: {x: 450, y: 1790}},
        {action: "moveTo", options: {x: 450, y: 600}},
        {action: "release"},
    ])
    await shipDeliveryText.waitForDisplayed({ timeout: 5000 })
    await shipEquipmentExpandable.waitForDisplayed({ timeout: 5000 })
    await shipLineItem1Expandable.waitForDisplayed({ timeout: 5000 })
    await shipAssignmentExpandable.waitForDisplayed({ timeout: 5000 })
    await shipNotesNonExpandable.waitForDisplayed({ timeout: 5000 })
    }
}

export default ShipmentPage;