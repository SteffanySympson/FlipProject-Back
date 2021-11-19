const FlipAnuncios = require('../models/flip-model');

class FlipService{
    findAll = async () => await FlipAnuncios.find();

    findById = async (id) => await FlipAnuncios.findById(id);

    createTarefa = async (tarefa) => {
        return await FlipAnuncios.create(tarefa);
    }

    putTarefa = async(id, tarefa) => {
        return await FlipAnuncios.updateOne({_id: id}, tarefa);
    }

    delTarefa = async (id) =>{
        return await FlipAnuncios.deleteOne({_id: id});
    }
}

module.exports = FlipService;