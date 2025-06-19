describe('Cadastro Usuario', () =>{

    // Caso de teste 1
    it('Cadastrar novo usuario', () =>{
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Roberto Jota${random}`;
    const email = `roberto.jota${random}@gmail.com`;

    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(123456);
    cy.get('[data-testid="cadastrar"]').click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Cadastro realizado com sucesso');
    })

   // Caso de teste 2
    it('Cadastrar usuario invalido', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('Armando Golpes');
    cy.get('[data-testid="email"]').type('armando@golpes');
    cy.get('[data-testid="password"]').type(123456);
    cy.get('[data-testid="cadastrar"]').click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Email deve ser um email válido');
    })

    // Caso de teste 3
    it('Cadastrar usuario ja existente', () =>{
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('Roberto Jota6');
    cy.get('[data-testid="email"]').type('robertojota6@gmail.com');
    cy.get('[data-testid="password"]').type(123456);
    cy.get('[data-testid="cadastrar"]').click();
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Este email já está sendo usado');
    })

    // Caso de teste 4
    it('Realizar o cadastro usuario admin', () => {
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Marcos Ricardo${random}`;
    const email = `marcos.ricardo${random}@gmail.com`;

    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type('123456');
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('.alert').contains('Cadastro realizado com sucesso');
    cy.location('pathname').should('equal', '/admin/home');
    cy.get('.lead').contains('Este é seu sistema para administrar seu ecommerce.');
    })
})