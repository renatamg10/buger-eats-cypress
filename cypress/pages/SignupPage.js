class SignupPage {

    go() {
        cy.viewport(1000, 660)
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }
    //Função para preencher o formulário e seleção
    fillform(entregador) {
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.telefone)
        //input endereço
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click({ force: true })

        //Dados de input
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        //Validar as informações em tela com a massa de dados
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidadeUf)

        //Selecionar meio de entrega
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        //Upload
        //cy.get('input[accept^=image]').attachFile(entregador.cnh)        
        cy.get('input[accept^=image]').selectFile('cypress/fixtures/cnh-digital.jpg', { force: true })

    }

    submit() {
        cy.get('button[type="submit"]').click()
    }

    //Validar mensagem de sucesso
    modalContentShouldBe(MensagemSucesso) {
        cy.get('div[class=swal2-html-container]').should('have.text', MensagemSucesso)
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    }

    //---------- Cenários de erro ----------

    //Mensagem de erro - CPF inválido
    alertMessageShouldBe(alertErrorCPF) {
        cy.get('span.alert-error', { timeout: 10000 }).should('have.text', alertErrorCPF);
        //cy.get('.alert.error').contains('Oops! CPF inválido') -- não funcionou com ".alert-error"

    }

    alertMessageShouldBe(alertError) {
        //cy.get('span.alert-error', { timeout: 10000 }).should('have.text', alertError);
        cy.contains('.alert-error',alertError).should('be.visible')

    }

}
export default SignupPage;