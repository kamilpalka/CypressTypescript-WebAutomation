class ContactPage {
  elements = {
    contactName: () => cy.get('[data-testid="ContactName"]'),
    contactEmail: () => cy.get('[data-testid="ContactEmail"]'),
    contactPhone: () => cy.get('[data-testid="ContactPhone"]'),
    contactSubject: () => cy.get('[data-testid="ContactSubject"]'),
    contactMessage: () => cy.get('[data-testid="ContactDescription"]'),
    contactSubmitBtn: () => cy.get("#submitContact"),
    contactAlert: () => cy.get("form > .alert"),
    contactSend: () => cy.get(":nth-child(2) > div > h2"),
  };

  typeName(name: string): void {
    this.elements.contactName().type(name);
  }

  typeEmail(email: string) {
    this.elements.contactEmail().type(email);
  }

  typePhone(phone: string) {
    this.elements.contactPhone().type(phone);
  }

  typeSubject(subject: string) {
    this.elements.contactSubject().type(subject, { delay: 0 });
  }

  typeMessage(message: string) {
    this.elements.contactMessage().type(message, { delay: 0 });
  }

  clickSubmit() {
    this.elements.contactSubmitBtn().click();
  }
}

export default new ContactPage();
