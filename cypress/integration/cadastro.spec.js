/**
 * Autor: Renata
 * Mês/Ano: 08/22
 * Descrição: Projeto Buger Eats do curso Cypress Discovey | QAcademy.com
 * */

//import { before } from 'mocha';
import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import {faker} from '@faker-js/faker';


 
describe('Cadastrar', () => {

    /* beforeEach(function () {
        cy.fixture('entregador').then((mt) => {
            this.entregador = mt
        })
    }) */

    //var abstrata pra os CT
    var signup = new SignupPage()

    it('Cadastrar entregador', function () {

        var entregador = signupFactory.entregador()

        //acessar a página de cadastro
        signup.go()
        //Acessa a MT do caso de teste 'Cadastrar entregador' através do argumento
        signup.fillform(entregador)
        //Submter o form
        signup.submit()
        //Validação do cadastro com argumento
        const MensagemSucesso = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(MensagemSucesso)
    })

    it('CPF inválido', function () {
        
        var entregador = signupFactory.entregador()

        entregador.cpf = '091283476lk'
        const alertErrorCPF = 'Oops! CPF inválido'

        signup.go()
        signup.fillform(entregador)
        signup.submit()
        signup.alertMessageShouldBe(alertErrorCPF)
    })

    it('Email inválido', function () {

        var entregador = signupFactory.entregador()
        entregador.email = 'usuario.com.br'

        const alertErrorEmail = 'Oops! Email com formato inválido.'

        signup.go()
        signup.fillform(entregador)
        signup.submit()
        signup.alertMessageShouldBe(alertErrorEmail)
    })

    context('Campos obrigatórios',function(){
        const mensagens = [
            {field: 'name',output:'É necessário informar o nome'},
            {field: 'cpf',output:'É necessário informar o CPF'},
            //Expected: email
            {field: 'email',output:'É necessário informar o e-mail'},
            {field: 'cep',output:'É necessário informar o CEP'},
            {field: 'numero',output:'É necessário informar o número do endereço'},
            {field: 'entrega',output:'Selecione o método de entrega'},
            {field: 'foto',output:'Adicione uma foto da sua CNH'},
        ]
        before(function(){
            signup.go()
            signup.submit()
        })
        //a função vai percorrer a lista de mensagem
        mensagens.forEach(function(msg){
            //CT
            it(`${msg.field} é um campo obrigatório`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

   /*  it.skip('Campos obrigatórios', function(){
        signup.go()
        //Sem preenchimento dos campos (fillform())
        signup.submit()

        //Mensagens de alerta (.alert-error)
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    }) */

    
})
