const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const anunciosModel = new mongoose.Schema({
    uf: {type: 'String', required: true},
    cidade: {type: 'String', required: true},
    bairro: {type: 'String', required: true},
    logradouro: {type: 'String', required: true},
    condominio: {type: 'String', required: true},
    tipo_imovel: {type: 'String', required: true},
    quartos: {type: 'Number', required: true},
    banheiros: {type: 'Number', required: true},
    suites: {type: 'Number', required: true},
    vagas: {type: 'Number', required: true},
    area: {type: 'Number', required: true},
    mobilia: {type: 'String', required: true},
    andar: {type: 'Number', required: true},
    preco_venda: {type: 'Number', required: true},
    preco_condominio: {type: 'Number', required: true},
    preco_iptu_mes: {type: 'Number', required: true}
})

const Anuncios = mongoose.model('anuncios', anunciosModel);

module.exports = Anuncios;