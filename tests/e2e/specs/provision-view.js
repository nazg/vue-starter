
// https://docs.cypress.io/api/introduction/api.html

describe("ProvisionView Test", () => {
  it("Visits ProvisionView url", () => {
    cy.visit("/provision")
    cy.contains("button", "Load Provision Settings")
  })
})
