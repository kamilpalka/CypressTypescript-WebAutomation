class MainPage {
  elements = {
    bookingRoomBtn: () => cy.get(".openBooking").eq(0),
    bookingCalendar: () => cy.get(".rbc-calendar"),
    bookingFirstname: () => cy.get(".room-booking-form > .form-control"),
    bookingLastname: () => cy.get(".col-sm-4 > :nth-child(2) > .form-control"),
    bookingEmail: () => cy.get(".col-sm-4 > :nth-child(3) > .form-control"),
    bookingBookBtn: () => cy.get(".col-sm-4 > .btn-outline-primary"),
    bookingCancelBtn: () => cy.get(".col-sm-4 > .btn-outline-danger"),
    bookingAlert: () => cy.get(".col-sm-4 > .alert"),
    contactName: () => cy.get('[data-testid="ContactName"]'),
    contactEmail: () => cy.get('[data-testid="ContactEmail"]'),
    contactPhone: () => cy.get('[data-testid="ContactPhone"]'),
    contactSubject: () => cy.get('[data-testid="ContactSubject"]'),
    contactMessage: () => cy.get('[data-testid="ContactDescription"]'),
    contactSubmitBtn: () => cy.get("#submitContact"),
    contactAlert: () => cy.get("form > .alert"),
    contactSend: () => cy.get(":nth-child(2) > div > h2"),
  };

  clickBookRoomBtn() {
    this.elements.bookingRoomBtn().click();
  }

  clickCancelBookingBtn() {
    this.elements.bookingCancelBtn().click();
  }

  clickBookBtn() {
    this.elements.bookingBookBtn().click();
  }

  typeContactName(name: string): void {
    this.elements.contactName().type(name);
  }

  typeContactEmail(email: string) {
    this.elements.contactEmail().type(email);
  }

  typeContactPhone(phone: string) {
    this.elements.contactPhone().type(phone);
  }

  typeContactSubject(subject: string) {
    this.elements.contactSubject().type(subject, { delay: 0 });
  }

  typeContactMessage(message: string) {
    this.elements.contactMessage().type(message, { delay: 0 });
  }

  clickContactSubmit() {
    this.elements.contactSubmitBtn().click();
  }
}

export default new MainPage();
