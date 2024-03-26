import MainPage from "../pages/mainPage";

import * as tests from "../../cypress/fixtures/contactTestScenarios.json";

describe("Contact section tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  tests.forEach((test) => {
    const { testName, name, email, phone, subject, message, expected } = test;

    it(testName, () => {
      MainPage.typeContactName(name);
      MainPage.typeContactEmail(email);
      MainPage.typeContactPhone(phone);
      MainPage.typeContactSubject(subject);
      MainPage.typeContactMessage(message);
      MainPage.clickContactSubmit();

      if (testName === "should send contact message") {
        MainPage.elements.contactSend().should("have.text", expected);
      } else if (testName === "should display all error messages") {
        MainPage.elements
          .contactAlert()
          .children()
          .should("contain.text", expected)
          .and("have.length", 9);
      } else if (testName.includes("short") || testName.includes("long")) {
        MainPage.elements
          .contactAlert()
          .children()
          .should("contain.text", expected)
          .and("have.length", 1);
      } else {
        MainPage.elements.contactAlert().should("contain.text", expected);
      }
    });
  });
});
