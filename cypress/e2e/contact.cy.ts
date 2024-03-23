import ContactPage from "../../cypress/pages/components/contactPage";

describe("POM Impl.", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should send contact", () => {
    ContactPage.typeName("Andrzej");
    ContactPage.typeEmail("123@ex.com");
    ContactPage.typePhone("1122112233445");
    ContactPage.typeSubject("ertrt rtrete rterte tret");
    ContactPage.typeMessage("dasfsfsdfsfsfsfscscscsczscszczs");
    ContactPage.clickSubmit();
  });
});
