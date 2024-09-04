describe('template spec', () => {
  beforeEach("open the url",() =>{
  cy.visit('https://panel.frankporter.com/')
  cy.title().should("eq","Frank Porter | Log in")
  
})
it('login with valid credential', () => {
    // valid credential
    cy.get("#username").clear() .type("hiren.bhandari@dignizant.com").wait(2000)
    cy.xpath("//input[@id='password']").clear() .type("Hiren@123")
    cy.xpath("//button[@id='btnLogin']") .click();

  })
  it('login with invalid credential', () => {
    //Invalid credential
    cy.get("#username") .type("hiren.bhandari@digni.com")
    cy.xpath("//input[@id='password']") .type("Hiren@123456123")
    cy.xpath("//button[@id='btnLogin']") .click();
    cy.xpath("//div[@id='error_login']") .should ("be.visible"&& "have.text","Username or password is incorrect.")

    //Invalid credential incorrect email, correct pwd
    cy.get("#username").clear() .type("hiren.bhanderi@dignizant.com")
    cy.xpath("//input[@id='password']").clear() .type("Hiren@123")
    cy.xpath("//button[@id='btnLogin']") .click();
    cy.xpath("//div[@id='error_login']") .should ("be.visible"&& "have.text","Username or password is incorrect.")


    //Invalid credential correct email incorrect password
    cy.get("#username").clear() .type("hiren.bhandari@dignizant.com")
    cy.xpath("//input[@id='password']").clear() .type("Hiren@1997")
    cy.xpath("//button[@id='btnLogin']") .click();
    cy.xpath("//div[@id='error_login']") .should ("be.visible"&& "have.text","Username or password is incorrect.")

  })
})