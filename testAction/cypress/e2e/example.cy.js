// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    cy.get("[data-cy=counter]").should('have.value', '123')
    cy.get("[data-cy=btn]").click()
    cy.wait(2000).get("[data-cy=counter]").clear().type('300')

  })
})
