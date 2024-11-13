import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
Given('Validar username and password', function() {
  // Implementar lógica para validar username y password
  console.log("Validando username y password");
});

const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
Given('Abrir la pagina OrangeHRM', () => {
  cy.visit(url)
})

When('ingresar el username {string}', (username) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(username); 
  });

  And('ingresar password {string}', (password) => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(password); 
  });
  And('Dar click al boton', () => {
    cy.get('.oxd-button').should('be.visible').click();
});



And('Estoy en la página de lista de empleados', () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click()
})
When('iClick al boton de agregar', () => {
  cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click()
});

And('Ingreso el primer nombre {string}', (name) => {
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('be.visible').type(name)
});
And('Ingreso el segundo nombre {string}', (Middlename) => {
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('be.visible').type(Middlename)
});
And('Ingreso el apellido {string}', (lastname) => {
  cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').should('be.visible').type(lastname)
});
Then('Clickeo en el botón', () => {
  cy.get('.oxd-button--secondary').should('be.visible').click()
  cy.wait(1500)
});

And('Consultar empleado creado', () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click()
})
And('Ingreses el id del empleado {string}', (id) => {
  cy.get(':nth-child(2) > .oxd-input').should('be.visible').type(id)
});
Then('Clickeo en el botón buscar', () => {
  cy.get('.oxd-form-actions > .oxd-button--secondary').click().should('be.visible').click()
});