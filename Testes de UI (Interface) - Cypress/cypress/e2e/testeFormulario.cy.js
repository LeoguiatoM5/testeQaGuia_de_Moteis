describe('Testes de UI para o formulário de cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Testes%20de%20UI%20(Interface)%20-%20Cypress/formulario.html'); 
  });

  it('Deve exibir mensagem de sucesso ao preencher o formulário corretamente', () => {
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmar-email').type('joao.silva@example.com');
    cy.get('#senha').type('Senha123');
    cy.get('#confirmar-senha').type('Senha123');
    cy.get('form').submit();
    cy.get('.mensagem-sucesso').should('contain', 'Cadastro realizado com sucesso!');
  });

  it('Deve exibir mensagens de erro ao deixar campos obrigatórios vazios', () => {
    cy.get('form').submit();
    cy.get('.mensagem-erro').should('contain', 'O campo Nome é obrigatório');
    cy.get('.mensagem-erro').should('contain', 'O campo E-mail é obrigatório');
    cy.get('.mensagem-erro').should('contain', 'O campo Confirmar E-mail é obrigatório');
    cy.get('.mensagem-erro').should('contain', 'O campo Senha é obrigatório');
    cy.get('.mensagem-erro').should('contain', 'O campo Confirmar Senha é obrigatório');
  });

  it('Deve exibir erro de validação ao digitar uma senha fraca', () => {
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmar-email').type('joao.silva@example.com');
    cy.get('#senha').type('12345');
    cy.get('#confirmar-senha').type('12345');
    cy.get('form').submit();
    cy.get('.mensagem-erro').should('contain', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número');
  });

  it('Deve exibir erro ao digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail"', () => {
    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmar-email').type('joao.silva2@example.com');
    cy.get('#senha').type('Senha123');
    cy.get('#confirmar-senha').type('Senha123');
    cy.get('form').submit();
    cy.get('.mensagem-erro').should('contain', 'Os e-mails digitados não coincidem');
  });
});