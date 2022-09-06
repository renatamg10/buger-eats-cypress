import { fake } from "faker"

var faker = require("faker")
export default {
    
    //Funçao entregador com os dados dinâmicos
    entregador: function() {

        var pName =  faker.name.firstName()
        var uName = faker.name.lastName ()
       
        var cpf = require('gerador-validador-cpf')

        var data = {
            nome: `${pName} ${uName}`,
            //mascara generate({ format: true })
            cpf: cpf.generate(),
            email: faker.internet.email(pName),
            telefone: '999911223344',
            endereco: {
                cep: '69097163',
                rua: 'Rua Barbosa Machado',
                numero: '1',
                complemento: 'complemento teste',
                bairro: 'Cidade Nova',
                cidadeUf: 'Manaus/AM'
            },
            metodo_entrega: 'Moto',
            //cnh: 'cnh-digital.jpg'
            } 
            //devolve a mt com todos os itens do formulário
            return data
        }
    }

