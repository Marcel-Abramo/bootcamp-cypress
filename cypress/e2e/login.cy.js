describe('Login', () =>{

    // Caso de teste 1
    it('Login com sucesso', () => {

    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="email"]').type('robertojota6@gmail.com');
    cy.wait(500);
    cy.get('[data-testid="senha"]').type('123456');
    cy.wait(500);
    cy.get('[data-testid="entrar"]').click();
    cy.wait(500);
    cy.location('pathname').should('equal', '/home');
    cy.get('h1').contains('Serverest Store');
    cy.wait(1000);
    })

    // Caso de teste 2
    it('Email invalido', () =>{
    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    cy.wait(500);
    // 2-Preencher email inválido
    cy.get('[data-testid="email"]').type('asdasd@asasdasd');
    cy.wait(500);
    // 3-Preencher senha inválida
    cy.get('[data-testid="senha"]').type('089867');
    cy.wait(1000);
    // 4-Clicar em Entrar
    cy.get('[data-testid="entrar"]').click();
    cy.wait(1000);
    // Deve exibir a mensagem: Email deve ser um email válido
    cy.get('.alert').contains('Email deve ser um email válido');
    cy.wait(1000);

        
    })

    // Caso de teste 3
    it('Senha invalida', () =>{
    
    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    cy.wait(500);
    // 2-Preencher email válido
    cy.get('[data-testid="email"]').type('robertojota6@gmail.com');
    cy.wait(500);
    // 3-Preencher senha inválida
    cy.get('[data-testid="senha"]').type('089867');
    cy.wait(500);
    // 4-Clicar em Entrar
    cy.get('[data-testid="entrar"]').click();
    cy.wait(500);
    // Deve exibir a mensagem: Email e/ou senha inválidos
    cy.get('.alert-secondary').contains('Email e/ou senha inválidos');
    cy.wait(1000);   
    

        
    })
     
 // Caso de teste 4
    it('Logar com campo usuário e senha em branco', () =>{
    
    // 1-Acessar a tela de login
    cy.visit('https://front.serverest.dev/login');
    // 2-Clicar em Entrar
    cy.get('[data-testid="entrar"]').click();
    // Deve exibir as mensagem: Email não pode ficar em branco e Password não pode ficar em branco
    cy.get('.form > :nth-child(3)').contains('Email é obrigatório')
    cy.get('.form > :nth-child(4)').contains('Password é obrigatório')
    cy.wait(1000);
   
        
    })
})