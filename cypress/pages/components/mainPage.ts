class MainPage {
  elements = {
    mainImg: () => cy.get(".hotel-logoUrl"),
    roomsHeader: () => cy.get(".room-header > h2"),
  };
}

module.exports = new MainPage();
