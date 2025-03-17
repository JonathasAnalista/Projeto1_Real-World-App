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

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
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

  // Bug Report:
  // 1. O sistema está permitindo que o usuário envie dinheiro para outro usuário mesmo com saldo insuficiente.
  // 2. O sistema não está exibindo mensagem de erro ao enviar dinheiro sem saldo suficiente.
  // 3. O sistema não está exibindo mensagem de sucesso ao enviar dinheiro com saldo suficiente.
  
