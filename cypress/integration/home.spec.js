describe('Homepage tests', () => {
  beforeEach(() => cy.visit('/'))

  it('welcome should render', function () {
    cy.get('main')
      .find('h1')
      .as('main-title')
      .should('have.text', 'Welcome to Next.js!')
    cy.get('@main-title').should('be.visible')
  })
})
