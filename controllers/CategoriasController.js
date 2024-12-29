const CategoriaModel = require("../models/CategoriaModel");

class CategoriasController{
    async listar(request, response) {
        let dados = await CategoriaModel.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await CategoriaModel.findByPk(id, {
            attributes: ['id','name', 'slug']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await CategoriaModel.create(body);
        response.status(201).json({
            message: "Categoria criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await CategoriaModel.update(body, { where: {id} });
        return response.json({
            message: "Categoria atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await CategoriaModel.destroy({ where: {id} });
        return response.json({
            message: "Categoria deletado com sucesso!"
        })
    }
}


module.exports = CategoriasController;