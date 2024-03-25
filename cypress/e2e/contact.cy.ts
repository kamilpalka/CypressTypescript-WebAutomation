import ContactPage from "../../cypress/pages/components/contactPage";

import * as tests from "../../cypress/fixtures/contactTestScenarios.json";

describe("Contact section tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  tests.forEach((test) => {
    const { testName, name, email, phone, subject, message, expected } = test;

    it(testName, () => {
      ContactPage.typeName(name);
      ContactPage.typeEmail(email);
      ContactPage.typePhone(phone);
      ContactPage.typeSubject(subject);
      ContactPage.typeMessage(message);
      ContactPage.clickSubmit();

      if (testName === "should send contact message") {
        ContactPage.elements.contactSend().should("have.text", expected);
      } else if (testName === "should display all error messages") {
        ContactPage.elements
          .contactAlert()
          .children()
          .should("contain.text", expected)
          .and("have.length", 9);
      } else if (testName.includes("short") || testName.includes("long")) {
        ContactPage.elements
          .contactAlert()
          .children()
          .should("contain.text", expected)
          .and("have.length", 1);
      } else {
        ContactPage.elements.contactAlert().should("contain.text", expected);
      }
    });
  });
});
