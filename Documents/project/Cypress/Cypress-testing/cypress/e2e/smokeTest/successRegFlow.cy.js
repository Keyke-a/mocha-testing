import { smokeTest } from "./locators"
import { faker } from "@faker-js/faker";

var Stest = new smokeTest()
//const randomEmail = faker.internet.email();


describe('https://test.cv.ee/et Successful Regestration flow ', () => {
  beforeEach(() => {
   })

   it('Successful Registration', () => {
    //Test a successful registration 
    //assert that there is a successful registration message displayed

    cy.visit('https://test.cv.ee/et')
    Stest.clickLoginBTN('LoginBTN')
    Stest.registrationBTN('RegistrationBTN')
    Stest.forJobseekersBTN('ForJobSeekersBTN')
    Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
    cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
    Stest.passwordField('passwordFieldBTN')
    Stest.firstNameField('FirstNamelBTN')
    Stest.lastNameField('lastNameField')
    Stest.newslettersField('newslettersField')
    Stest.IagreeField('agreeField')
    Stest.InfoSentEmployerField('nfoSentEmployerField')
    Stest.registerBTN('CreateAccountEmailBTN')
    cy.get('.jsx-2989258888 > span').should('have.text', 'Teie kasutaja on loodud. Palun vaadake kinnituse linki oma e-maililt.')
          
  })



})