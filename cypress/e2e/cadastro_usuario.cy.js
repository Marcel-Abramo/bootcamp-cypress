describe('Cadastro Usuario', () =>{

    // Caso de teste 1
    it('Cadastrar novo usuario', () =>{
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Roberto Jota${random}`;
    const email = `roberto.jota${random}@gmail.com`;


    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    // 2-Clicar em Cadastre-se
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(1000); 
    // 3-Digitar o Nome
    cy.get('[data-testid="nome"]').type(nome);
     cy.wait(1000); 
    // 4-Digitar Email válido
    cy.get('[data-testid="email"]').type(email);
     cy.wait(1000); 
    // 5-Digitar Senha válida
    cy.get('[data-testid="password"]').type(123456);
    cy.wait(1000);     
    // 6-Clicar em Cadastrar
    cy.get('[data-testid="cadastrar"]').click();
     cy.wait(1000); 
    // Deve exibir a mensagem: Cadastro Realizado com Sucesso
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Cadastro realizado com sucesso');
    cy.wait(1000); 
        

    })

   // Caso de teste 2
    it('Cadastrar usuario invalido', () =>{
    
    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    // 2-Clicar em Cadastre-se
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(1000); 
    // 3-Digitar o Nome
    cy.get('[data-testid="nome"]').type('Armando Golpes');
    // 4-Digitar Email inválido
    cy.get('[data-testid="email"]').type('armando@golpes');
    // 5-Digitar Senha
    cy.get('[data-testid="password"]').type(123456);
    // 6-Clicar em Cadastrar
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(1000); 
    // Deve exibir a mensagem: Email deve ser um email válido
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Email deve ser um email válido');
        
    })



 // Caso de teste 3
    it('Cadastrar usuario ja existente', () =>{
    
    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    // 2-Clicar em Cadastre-se
    cy.get('[data-testid="cadastrar"]').click();
    cy.wait(1000); 
    // 3-Digitar o Nome
    cy.get('[data-testid="nome"]').type('Roberto Jota6');
     cy.wait(1000); 
    // 4-Digitar Email válido
    cy.get('[data-testid="email"]').type('robertojota6@gmail.com');
     cy.wait(1000); 
    // 5-Digitar Senha válida
    cy.get('[data-testid="password"]').type(123456);
    cy.wait(1000);     
    // 6-Clicar em Cadastrar
    cy.get('[data-testid="cadastrar"]').click();
     cy.wait(1000); 
    // Deve exibir a mensagem: Este email já está sendo usado
    cy.location('pathname').should('equal', '/cadastrarusuarios');
    cy.get('.alert').contains('Este email já está sendo usado');
    cy.wait(1000); 

    })



// Caso de teste 4
    it('Realizar o cadastro usuario admin', () => {
    
    // Gera nome e email aleatórios
    const random = Math.floor(Math.random() * 100000);
    const nome = `Marcos Ricardo${random}`;
    const email = `marcos.ricardo${random}@gmail.com`;

    // 1 - Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');

    // 2 - Clicar em Cadastre-se
    cy.get('[data-testid="cadastrar"]').click();

    // 3 - Digitar o Nome
    cy.get('[data-testid="nome"]').type(nome);

    // 4 - Digitar Email válido
    cy.get('[data-testid="email"]').type(email);

    // 5 - Digitar Senha válida
    cy.get('[data-testid="password"]').type('123456');

    // 6 - Selecionar Cadastrar como Administrador
    cy.get('[data-testid="checkbox"]').click();

    // 7 - Clicar em Cadastrar
    cy.get('[data-testid="cadastrar"]').click();

    // Validações
    cy.get('.alert').contains('Cadastro realizado com sucesso');
    cy.location('pathname').should('equal', '/admin/home');
    cy.get('.lead').contains('Este é seu sistema para administrar seu ecommerce.');

    cy.wait(1000);

    })
})