// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-cy="signin"]').should('be.visible').click();
  cy.wait(3000);
  cy.get('[data-cy="loginUsername"]').type(username);
  cy.get('[data-cy="loginPassword"]').type(password);
  cy.get('[data-cy="signIn"]').should('be.visible').click();
})

Cypress.Commands.add('deletingExistingModels', (selector) => {
    cy.wait(4000)
    cy.get('tbody').then(container => {
    if (container.find('tr').length > 1) {
      cy.get(selector).each($el => {
              var a = $el.length
              cy.get(selector).first().should('be.visible').click();
              cy.wait(3000)
          })
     } else {
       
     }
  })
})

Cypress.Commands.add('searchDirectory', (selector) => {
    cy.get(selector).last().should('be.visible').click();
})

Cypress.Commands.add('rowsPerPageSelectAll', (selector,text) => {
    cy.get(selector).should('be.visible').click();
    cy.get("[role='listbox']").contains(text).should('be.visible').click();
})

// Cypress.Commands.add('logoutUserIfLoggedin', (loginTitelSelector,logoutBtnSelector) => {
//     cy.wait(4000)
//         cy.get("amplify-auth-container.hydrated").then(($container) => {
//         if ($container.find("[slot='sign-in']").length > 0) {
//           cy.get("[slot='sign-in']").shadow().find(loginTitelSelector).should('be.visible');          
//          } else {
//             cy.get("amplify-sign-out.hydrated").shadow().find(logoutBtnSelector).should('be.visible').last().click();
//             cy.get("[slot='sign-in']").shadow().find(loginTitelSelector).should('be.visible');
//          }
//         })
// })

// Get the body which will always exist
// If we find the signOutButton click it
// Otherwise just return

Cypress.Commands.add('logoutUserIfLoggedin', (loginTitelSelector, logoutBtnSelector) => {
  cy.wait(4000);
  cy.get('body')
    .then($body => {
      if ($body.find(['data-cy="signOutButton"']).length) {
        cy.get('[data-cy="singOutButton"]').click();
      }
      return
    })
})

Cypress.Commands.add('searchModelUrl', (url, modelId) => {
  cy.visit(`${url}${modelId}`, {failOnStatusCode: false})
})

Cypress.Commands.add('deletingExistingComments', (selector) => {
    cy.get('tbody').then(container => {
    if (container.find('td').length > 1) {
      cy.get(selector).each($el => {
              var a = $el.length
              cy.get(selector).first().should('be.visible').click();
            //   cy.wait(3000)
          })
     } else {
       
     }
  })
})
