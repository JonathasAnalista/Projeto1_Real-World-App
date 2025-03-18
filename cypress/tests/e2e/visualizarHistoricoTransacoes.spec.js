describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#username').type('zepaula');
        cy.get('#password').type('test123');
        cy.get('[data-test="signin-submit"]').click(); 
        cy.visit("http://localhost:3000/personal");
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.get('[data-test="transaction-action-yVEqEXBDn"]').click();
    });
  });


  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#username').type('zepaula');
        cy.get('#password').type('test123');
        cy.get('[data-test="signin-submit"]').click(); 
        cy.visit("http://localhost:3000/personal");
        cy.get('[data-test="nav-personal-tab"]').click();
        cy.get('[data-test="transaction-receiver-BlXRn7UWK"]').click();
    });
  });

  