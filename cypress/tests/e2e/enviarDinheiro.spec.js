describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#username').type('jessicascilio');
      cy.get('#password').type('test');
      cy.get('[data-test="signin-submit"]').click();
      
      cy.get('.NavBar-newTransactionButton').click();
      cy.get("[data-test='user-list-item-uBmeaz5pX']").click();
      cy.get('#amount').type('10');
      cy.get('#transaction-create-description-input').type('Teste');
      cy.get('[data-test="transaction-create-submit-payment"]').click();
     });
      
      
          
  });

// describe('Enviar dinheiro com saldo suficiente', () => {
//     it('Verifique se é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente', () => {
//       cy.visit('http://localhost:3000/new');
//       cy.get('.NavBar-newTransactionButton').click();
//       cy.get("[placeholder='Procurar...']").type('Ted parisiense');
      
      
          
//   });

// });