describe('testStock', () => {
    it('visits the stock', () => {
      cy.visit('https://stock.izitek-crm.net/login')
    //   cy.contains('h1', 'You did it!')
      cy.wait(2000).get("#inputEmail").clear().type('invite')
      cy.wait(2000).get("#inputPassword").clear().type('invit2e')
      cy.get("button").click({ multiple: true })
      cy.wait(2000).get("#input-15").clear().type('izidream')
  
    })
  })