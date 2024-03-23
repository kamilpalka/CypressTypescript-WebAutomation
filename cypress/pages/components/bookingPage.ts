class BookingPage {
  elements = {
    bookRoomBtn: () => cy.get(".openBooking"),
    calendar: () => cy.get(".rbc-calendar"),
    bookingFormFirstname: () => cy.get(".room-booking-form > .form-control"),
    bookingFormLastname: () =>
      cy.get(".col-sm-4 > :nth-child(2) > .form-control"),
    bookingFormEmail: () => cy.get(".col-sm-4 > :nth-child(3) > .form-control"),
    bookingBtn: () => cy.get(".btn-outline-primary"),
    bookingCancelBtn: () => cy.get(".btn-outline-danger"),
    bookingAlert: () => cy.get(".col-sm-4 > .alert"),
  };
}

module.exports = new BookingPage();
