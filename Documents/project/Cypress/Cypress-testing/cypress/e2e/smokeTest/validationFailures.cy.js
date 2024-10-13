import { smokeTest } from "./locators"
import { faker } from "@faker-js/faker";

var Stest = new smokeTest()

describe('https://test.cv.ee/et Validation Failure Test scenarios ', () => {
  beforeEach(() => {
   cy.visit('https://test.cv.ee/et')
   })

   it('Invaild Email address ', () => {

        // Test a registration with an invaild email address
        // assert that there is an error thrown "Sisesta kehtiv e-posti aadress" 
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type('d1@yahoo.c')
        Stest.registerBTN('registerBTN') 
        cy.get('.input-text-tooltip > span').should('have.text', 'Sisesta kehtiv e-posti aadress')
    })

    it('Duplicate Email address ', () => {

        //Test a registration with already registered email 
        //assert that there is an error thrown "See emaili aadress on juba kasutusel"
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        Stest.emailAddressField('usernameFieldBTN')
        Stest.passwordField('passwordFieldBTN')
        Stest.firstNameField('FirstNamelBTN')
        Stest.lastNameField('lastNameField')
        Stest.newslettersField('newslettersField')
        Stest.IagreeField('agreeField')
        Stest.InfoSentEmployerField('nfoSentEmployerField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.input-text-tooltip > span').should('have.text', 'See emaili aadress on juba kasutusel.')
    })

    it('Invaild Password, ', () => {

        //Test a registration with an invaild password, less than six characters, 
        //assert that there is an error thrown "Liiga lühike sisend" 
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get("label.jsx-937856329 > input").type("Ola");
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.input-password-tooltip > span').should('have.text', 'Liiga lühike sisend.')
    })

    it('Empty names ', () => {

        //Test a registration with empty names 
        //assert that the "Registreeri" button transition is diabled.
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
        Stest.passwordField('passwordFieldBTN')
        Stest.newslettersField('newslettersField')
        Stest.IagreeField('agreeField')
        Stest.InfoSentEmployerField('nfoSentEmployerField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })

    it('Empty First name', () => {

        //Test a registration with empty first name
        //assert that the "Registreeri" button transition is diabled.
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
        Stest.passwordField('passwordFieldBTN')
        Stest.lastNameField('lastNameField')
        Stest.newslettersField('newslettersField')
        Stest.IagreeField('agreeField')
        Stest.InfoSentEmployerField('nfoSentEmployerField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })

    it('Empty Last name', () => {

        //Test a registration with empty last name
        //assert that the "Registreeri" button transition is diabled.
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
        Stest.passwordField('passwordFieldBTN')
        Stest.firstNameField('FirstNamelBTN')
        Stest.newslettersField('newslettersField')
        Stest.IagreeField('agreeField')
        Stest.InfoSentEmployerField('nfoSentEmployerField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })

    it('Unticked required checkbox 2 ', () => {

        //Test a registration when checkbox 2 is not selected
        //assert that the "Registreeri" button transition is diabled.
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
        Stest.passwordField('passwordFieldBTN')
        Stest.firstNameField('FirstNamelBTN')
        Stest.lastNameField('lastNameField')
        Stest.newslettersField('newslettersField')
        Stest.InfoSentEmployerField('nfoSentEmployerField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })

    it('Unticked required checkbox 3 ', () => {

        //Test a registration when checkbox 3 is not selected
        //assert that the "Registreeri" button transition is diabled.
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
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })

    it('Unticked required checkbox 2 and 3 ', () => {  

        //Test a registration when checkbox 2 and 3 are not selected
        //assert that the "Registreeri" button transition is diabled.
        Stest.clickLoginBTN('LoginBTN')
        Stest.registrationBTN('RegistrationBTN')
        Stest.forJobseekersBTN('ForJobSeekersBTN')
        Stest.createaccountEmailBTN ('CreateAccountEmailBTN')
        cy.get(':nth-child(3) > .input-text__field').type(faker.internet.email());
        Stest.passwordField('passwordFieldBTN')
        Stest.firstNameField('FirstNamelBTN')
        Stest.lastNameField('lastNameField')
        Stest.newslettersField('newslettersField')
        Stest.registerBTN('CreateAccountEmailBTN')
        cy.get('.email-registration-form__title > span').should('have.text', 'Loo konto')
    })
})
