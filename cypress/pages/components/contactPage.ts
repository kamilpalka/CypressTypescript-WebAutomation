class ContactPage {
  elements = {
    contactName: () => cy.get('[data-testid="ContactName"]'),
    contactEmail: () => cy.get('[data-testid="ContactEmail"]'),
    contactPhone: () => cy.get('[data-testid="ContactPhone"]'),
    contactSubject: () => cy.get('[data-testid="ContactSubject"]'),
    contactMessage: () => cy.get('[data-testid="ContactDescription"]'),
    contactSubmitBtn: () => cy.get("#submitContact"),
    contactAlert: () => cy.get("form > .alert"),
  };

  typeName(name) {
    this.elements.contactName().type(name);
  }

  typeEmail(email) {
    this.elements.contactEmail().type(email);
  }

  typePhone(phone) {
    this.elements.contactPhone().type(phone);
  }

  typeSubject(subject) {
    this.elements.contactSubject().type(subject);
  }

  typeMessage(message) {
    this.elements.contactMessage().type(message);
  }

  clickSubmit() {
    this.elements.contactSubmitBtn().click();
  }
}

module.exports = new ContactPage();
