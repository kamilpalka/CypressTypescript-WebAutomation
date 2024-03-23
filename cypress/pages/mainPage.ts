class Page {
  mainImg = ".hotel-logoUrl";
  roomsHeader = ".room-header > h2";
  bookRoomBtn = ".openBooking";
  calendar = ".rbc-calendar";
  bookingFormFirstname = ".room-booking-form > .form-control";
  bookingFormLastname = ".col-sm-4 > :nth-child(2) > .form-control";
  bookingFormEmail = ".col-sm-4 > :nth-child(3) > .form-control";
  bookingBtn = ".btn-outline-primary";
  bookingCancelBtn = ".btn-outline-danger";
  bookingAlert = ".col-sm-4 > .alert";
  contactName = '[data-testid="ContactName"]';
  contactEmail = '[data-testid="ContactEmail"]';
  contactPhone = '[data-testid="ContactPhone"]';
  contactSubject = '[data-testid="ContactSubject"]';
  contactMessage = '[data-testid="ContactDescription"]';
  contactSubmitBtn = "#submitContact";
  contactAlert = "form > .alert";
}

export const MainPage = new Page();
