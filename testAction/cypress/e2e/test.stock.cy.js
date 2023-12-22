describe('testStock', () => {
    it('visits the stock', () => {
      cy.visit('http://srv-docker-demo:8001')
    //   cy.contains('h1', 'You did it!')
      cy.wait(2000).get("#inputEmail").clear().type('invite')
      cy.wait(2000).get("#inputPassword").clear().type('invite')
      cy.get("button").click({ multiple: true })
      cy.wait(2000).get("#input-15").clear().type('izidream')
      cy.get('#input-59').type("gio")
    })
  })