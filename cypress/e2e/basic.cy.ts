describe("template spec", () => {
  it("should render the main image", () => {
    cy.visit("https://automationintesting.online/");
    cy.get(".hotel-logoUrl").should("be.visible");
  });

  it("should display the Rooms section", () => {
    cy.visit("https://automationintesting.online/");
    cy.get("h2").should("have.length", 1);
    cy.get("h2").contains("Rooms");
  });
});
