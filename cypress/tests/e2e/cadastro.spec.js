describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get('#firstName').type('João');
      cy.get('#lastName').type('Silva');
      cy.get('#username').type('joaosilva');
      cy.get('#password').type('test');
      cy.get('#confirmPassword').type('test');
      cy.get('[data-test="signup-submit"]').click();
    });
    
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('#firstName').type('João');
        cy.get('#lastName').type('Silva');
        cy.get('#username').type('joaosilva');
        cy.get('#password').type('test');
        cy.get('#confirmPassword').type('  ');
        
        
    });
  });