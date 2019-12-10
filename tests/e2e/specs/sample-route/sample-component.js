
// https://docs.cypress.io/api/introduction/api.html

describe("SampleRoute Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/")
    cy.contains("a", "SampleRoute")
    cy.contains("p", "Lorem ipsum dolor sit amet.")
  })
})
