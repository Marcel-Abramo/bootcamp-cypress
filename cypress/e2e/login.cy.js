describe('Login', () =>{

    const selectorsList={
        usernameField: '[data-testid="email"]',
        passwordField: '[data-testid="senha"]',
        loginButton: '[data-testid="entrar"]',
    }





    // Caso de teste 1
    it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.usernameField).type('robertojota6@gmail.com');
    cy.get(selectorsList.passwordField).type('123456');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/home');
    cy.get('h1').contains('Serverest Store');
    })

    // Caso de teste 2
    it('Email invalido', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.usernameField).type('asdasd@asasdasd');
    cy.get(selectorsList.passwordField).type('089867');
    cy.get(selectorsList.loginButton).click();
    cy.get('.alert').contains('Email deve ser um email válido');
    })

    // Caso de teste 3
    it('Senha invalida', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.usernameField).type('robertojota6@gmail.com');
    cy.get(selectorsList.passwordField).type('089867');
    cy.get(selectorsList.loginButton).click();
    cy.get('.alert-secondary').contains('Email e/ou senha inválidos');
    })
     
    // Caso de teste 4
    it('Logar com campo usuário e senha em branco', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.loginButton).click();
    cy.get('.form > :nth-child(3)').contains('Email é obrigatório')
    cy.get('.form > :nth-child(4)').contains('Password é obrigatório')
    })
})