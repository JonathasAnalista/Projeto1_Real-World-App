 describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#username').type('jessicascilio');
      cy.get('#password').type('test');
      cy.get('[data-test="signin-submit"]').click();
     });
      
      
          
  });

describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('#username').type('jonathasguilherme');
        cy.get('#password').type('test1234');
        cy.get('[data-test="signin-submit"]').click();
    });
});
