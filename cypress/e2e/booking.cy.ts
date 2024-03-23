describe("booking management", () => {
  it("should open and close booking calendar", () => {
    cy.visit("https://automationintesting.online/");
    cy.get(".openBooking").click();
    cy.get(".rbc-calendar").should("exist");
    cy.get(".btn-outline-danger").click();
    cy.get(".rbc-calendar").should("not.exist");
  });
});
