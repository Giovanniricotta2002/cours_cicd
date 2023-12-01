import Slot from '../../src/components/test.vue'

describe('<NamedSlot />', () => {
    it('renders', () => {
      const slots = {
        header: 'my header',
        footer: 'my footer',
      }
      cy.mount(Slot, {
        slots,
      })
      cy.get('header').should('have.text', 'my header')
      cy.get('footer').should('have.text', 'my footer')
    })
  })