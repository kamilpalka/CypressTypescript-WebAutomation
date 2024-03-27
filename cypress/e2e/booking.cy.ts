import MainPage from "../pages/mainPage";

import * as tests from "../../cypress/fixtures/bookingTestScenarios.json";

describe("Booking section tests suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open booking calendar", () => {
    MainPage.clickBookRoomBtn();
    MainPage.elements.bookingCalendar().should("be.visible");
  });

  it("should close booking calendar", () => {
    MainPage.clickBookRoomBtn();
    MainPage.clickCancelBookingBtn();
    MainPage.elements.bookingCalendar().should("not.exist");
  });

  it("should click Next button on calendar and change to next month", () => {
    let oldtext: string;
    MainPage.clickBookRoomBtn();
    MainPage.elements.calendarMonth().then(($el) => (oldtext = $el.text()));
    MainPage.clickCalendarNextBtn();
    MainPage.elements
      .calendarMonth()
      .then(($el) => expect(oldtext).not.to.eq($el.text()));
  });

  it("should click Back button on calendar and change to previous month", () => {
    let oldtext: string;
    MainPage.clickBookRoomBtn();
    MainPage.elements.calendarMonth().then(($el) => (oldtext = $el.text()));
    MainPage.clickCalendarBackBtn();
    MainPage.elements
      .calendarMonth()
      .then(($el) => expect(oldtext).not.to.eq($el.text()));
  });

  it("should click Today button and return to current month", () => {
    let oldtext: string;
    MainPage.clickBookRoomBtn();
    MainPage.elements.calendarMonth().then(($el) => (oldtext = $el.text()));
    MainPage.clickCalendarBackBtn();
    MainPage.clickCalendarBackBtn();
    MainPage.clickCalendarBackBtn();
    MainPage.clickCalendarTodayBtn();
    MainPage.elements
      .calendarMonth()
      .then(($el) => expect(oldtext).eq($el.text()));
  });

  it("should display error booking message", () => {
    MainPage.clickBookRoomBtn();
    MainPage.clickBookBtn();
    MainPage.elements.bookingAlert().children().should("have.length", 9);
  });

  it("should display not null message", () => {
    MainPage.clickBookRoomBtn();
    MainPage.typeBookingFirstName("Andrzej");
    MainPage.typeBookingLastName("Godzion");
    MainPage.typeBookingEmail("example@mail.com");
    MainPage.typeBookingPhone("12345678901");
    MainPage.clickBookBtn();
    MainPage.elements
      .bookingAlert()
      .children()
      .should("contain.text", "nie może mieć wartości nul")
      .and("have.length", 2);
  });

  tests.forEach((test) => {
    const { testName, FirstName, LastName, email, phone, expected } = test;

    it(testName, () => {
      cy.selectOnCalendar();
      MainPage.typeBookingFirstName(FirstName);
      MainPage.typeBookingLastName(LastName);
      MainPage.typeBookingEmail(email);
      MainPage.typeBookingPhone(phone);
      MainPage.clickBookBtn();

      if (testName.includes("short") || testName.includes("long")) {
        MainPage.elements
          .bookingAlert()
          .children()
          .should("contain.text", expected)
          .and("have.length", 1);
      } else
        MainPage.elements
          .bookingAlert()
          .children()
          .should("contain.text", expected);
    });
  });
});
