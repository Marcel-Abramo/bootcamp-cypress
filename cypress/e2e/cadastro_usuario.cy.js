describe('Cadastro Usuario', () =>{

 const selectorsList={
        cadastrarButton: '[data-testid="cadastrar"]',
        nameField: '[data-testid="nome"]',
        emailField: '[data-testid="email"]',
        passwordField: '[data-testid="password"]',
        checkBoxButton: '[data-testid="checkbox"]',
        alert: '.alert',
    }



    // Caso de teste 1
    it('Cadastrar novo usuario', () =>{
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Roberto Jota${random}`;
    const email = `roberto.jota${random}@gmail.com`;

    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.cadastrarButton).click();
    cy.get(selectorsList.nameField).type(nome);
    cy.get(selectorsList.emailField).type(email);
    cy.get(selectorsList.passwordField).type(123456);
    cy.get(selectorsList.cadastrarButton).click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get(selectorsList.alert).contains('Cadastro realizado com sucesso');
    })

   // Caso de teste 2
    it('Cadastrar usuario invalido', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.cadastrarButton).click();
    cy.get(selectorsList.nameField).type('Armando Golpes');
    cy.get(selectorsList.emailField).type('armando@golpes');
    cy.get(selectorsList.passwordField).type(123456);
    cy.get(selectorsList.cadastrarButton).click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get(selectorsList.alert).contains('Email deve ser um email válido');
    })

    // Caso de teste 3
    it('Cadastrar usuario ja existente', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.cadastrarButton).click();
    cy.get(selectorsList.nameField).type('Roberto Jota6');
    cy.get(selectorsList.emailField).type('robertojota6@gmail.com');
    cy.get(selectorsList.passwordField).type(123456);
    cy.get(selectorsList.cadastrarButton).click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get(selectorsList.alert).contains('Este email já está sendo usado');
    })

    // Caso de teste 4
    it('Realizar o cadastro usuario admin', () => {
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Marcos Ricardo${random}`;
    const email = `marcos.ricardo${random}@gmail.com`;

    cy.visit('https://front.serverest.dev/login');
    cy.get(selectorsList.cadastrarButton).click();
    cy.get(selectorsList.nameField).type(nome);
    cy.get(selectorsList.emailField).type(email);
    cy.get(selectorsList.passwordField).type('123456');
    cy.get(selectorsList.checkBoxButton).click();
    cy.get(selectorsList.cadastrarButton).click();
    cy.get(selectorsList.alert).contains('Cadastro realizado com sucesso');
    cy.location('pathname').should('equal', '/admin/home');
    cy.get('.lead').contains('Este é seu sistema para administrar seu ecommerce.');
    })
})