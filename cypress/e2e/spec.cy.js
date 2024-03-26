describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('.SDkEP').type('javascript')
    cy.get('.G43f7e > li > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').each(ele =>{
      // cy.log(ele)
      let textSearch = "javascript basics"
      cy.log(ele.text())
      // let elementText = ele.text.innerHTML
      if(ele.text().includes(textSearch))
      {
        ele.trigger('click')
      }

    })
  })
})