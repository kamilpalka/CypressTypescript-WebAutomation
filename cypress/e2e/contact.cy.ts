import ContactPage from "../../cypress/pages/components/contactPage";

const tests = require("../../cypress/fixtures/contactTestScenarios.json");

describe("Contact section tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  tests.forEach((test) => {
    it(test.testName, () => {
      ContactPage.typeName(test.name);
      ContactPage.typeEmail(test.email);
      ContactPage.typePhone(test.phone);
      ContactPage.typeSubject(test.subject);
      ContactPage.typeMessage(test.message);
      ContactPage.clickSubmit();

      if (test.testName === "should send contact message") {
        ContactPage.elements.contactSend().should("have.text", test.expected);
      } else {
        ContactPage.elements
          .contactAlert()
          .should("contain.text", test.expected);
      }
    });
  });
});
