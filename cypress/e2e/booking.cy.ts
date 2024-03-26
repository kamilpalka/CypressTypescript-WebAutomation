import mainPage from "../pages/mainPage";

describe("Booking section tests suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open booking calendar", () => {
    mainPage.clickBookRoomBtn();
    mainPage.elements.bookingCalendar().should("be.visible");
  });

  it("should close booking calendar", () => {
    mainPage.clickBookRoomBtn();
    mainPage.clickCancelBookingBtn();
    mainPage.elements.bookingCalendar().should("not.exist");
  });

  it("should display error booking message", () => {
    mainPage.clickBookRoomBtn();
    mainPage.clickBookBtn();
    mainPage.elements.bookingAlert().children().should("have.length", 9);
  });
});
