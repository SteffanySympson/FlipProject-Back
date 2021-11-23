const FlipAnuncios = require('../models/flip-model');

class FlipService{
    findAll = async () => await FlipAnuncios.find();

    findById = async (id) => await FlipAnuncios.findById(id);

    findByQuartos = async (quartos) => {
        return await FlipAnuncios.find({ quartos: +quartos });
    }

    createAnuncio = async (anuncio) => {
        return await FlipAnuncios.create(anuncio);
    }

    putAnuncio = async(id, anuncio) => {
        return await FlipAnuncios.updateOne({_id: id}, anuncio);
    }

    delAnuncio = async (id) =>{
        return await FlipAnuncios.deleteOne({_id: id});
    }
}

module.exports = FlipService;