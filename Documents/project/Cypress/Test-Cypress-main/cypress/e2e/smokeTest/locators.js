export class smokeTest{

    clickLoginBTN () {

        cy.get('.jsx-2273220519 > .jsx-883769654 > span').click()
    }
    popupBTN () {

        cy.get('#c-p-bn').click()
    }
    enterUsername(){

        cy.get(':nth-child(2) > .input-text__field').type('dapssyola@gmail.com')
    }
    enterPassword(){

        cy.get(':nth-child(3) > .input-text__field').type('Olayinka')
    }
    enterBTN(){

        cy.get('.login-form__submit > .jsx-38605866').click()
    }
    registrationBTN(){

        cy.get("div.jsx-1096026829 > button:nth-of-type(2) span").click();
    }    
   forJobseekersBTN(){

         cy.get("div.modal-root--visible button:nth-of-type(1) > span").click();
    }
    createaccountEmailBTN(){
         cy.get("div.modal-root--visible > div > div > div > div.jsx-579114886 > div > button > span").click();
    }
    emailAddressField(){
        cy.get(':nth-child(3) > .input-text__field').type('dapo_aiye@yahoo.com');
    }
    passwordField(){
        cy.get("label.jsx-937856329 > input").type("Olayinka");
    }
    firstNameField(){
        cy.get("label:nth-of-type(3) > input").type("Ola");
    }
    lastNameField(){
        cy.get("label:nth-of-type(4) > input").type("Ola1");
    }
    newslettersField(){
        cy.get("div.email-registration-form__content > div:nth-of-type(1) span.input-checkbox__icon").click();    
    }
    IagreeField(){
         cy.get("div.modal-root--visible div:nth-of-type(2) span.input-checkbox__icon").click();
    }
    InfoSentEmployerField(){
        cy.get("div.modal-root--visible div:nth-of-type(3) span.input-checkbox__icon").click();
    }
    registerBTN(){
        cy.get('[type="submit"]').click()
    }

}