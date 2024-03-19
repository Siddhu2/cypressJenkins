describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.SDkEP').type('javascript')
    cy.get('.G43f7e > li').then(ele =>{
      cy.log(ele)
      let text = "Javascript basics"
      cy.get(`li[data-entityname=${text}]`)
    })
  })
})