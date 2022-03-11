import * as webdriverio from "webdriverio";
import myCaps from "./myCaps";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import LoadBoardPage from "./pages/LoadBoardPage";
import ChatComponent from "./components/chat";
import PlaceBidComponent from "./components/placeBid";
import ShipmentPage from "./pages/ShipmentPage";
import DocUploadComponent from "./components/docUpload";
import SettingsPage from "./pages/SettingsPage";
import SignOutComponent from "./components/signOut";
import CompassPage from "./pages/compassPage";
import InboxPage from "./pages/inboxPage";
import BookNowComponent from "./components/bookNow";
import AssignDriverComponent from "./components/assignDriver";
import TenderComponent from "./components/tender";
//import CreateShipmentDetailsComponent from "./components/createShipmentDetails"
//import CreateShipmentStopsComponent from "./components/createShipmentStops"
//import CreateShipmentFinanceComponent from "./components/createShipmentFinance"
//import CreateShipmentReviewComponent from "./components/createShipmentReview"

class App {
  constructor() {
    this.options = myCaps;
    this.driver = null;
  }

  async start() {
    this.driver = await webdriverio.remote(this.options);
    this.loginPage = new LoginPage(this.driver);
    this.onboardingPage= new OnboardingPage(this.driver)
    this.loadBoardPage= new LoadBoardPage(this.driver)
    this.chatComponent= new ChatComponent(this.driver)
    this.placeBidComponent=  new PlaceBidComponent(this.driver)
    this.shipmentPage=  new ShipmentPage(this.driver)
    this.docUploadComponent= new DocUploadComponent(this.driver)
    this.settingsPage= new SettingsPage(this.driver)
    this.signOutComponent= new SignOutComponent(this.driver)
    this.compassPage= new CompassPage(this.driver)
    this.inboxPage= new InboxPage(this.driver)
    this.bookNowComponent= new BookNowComponent(this.driver)
    this.assignDriverComponent= new AssignDriverComponent(this.driver)
    this.tenderComponent= new TenderComponent(this.driver)
    //this.createShipmentDetailsComponent= new CreateShipmentDetailsComponent(this.driver)
    //this.createShipmentStopsComponent= new CreateShipmentStopsComponent(this.driver)
    //this.createShipmentFinanceComponent= new CreateShipmentFinanceComponent(this.driver)
    //this.createShipmentReviewComponent= new CreateShipmentReviewComponent(this.driver)
  }

  async stop() {
    await this.driver.deleteSession();
    this.driver = null;
  }
  async close() {
    await this.driver.closeApp();
  }
}

export default App;