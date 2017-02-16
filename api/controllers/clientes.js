module.exports = function(app){

	var clienteModel = app.models.conecta;

	var ClienteController = {
		index : function(req, res){
			res.json('Olá');
		},
		listaClientes : function(req, res){

			clienteModel.getSelectAll().then(function(data){
				res.json(data);
			}).catch(function(err){
				res.json(err);
			});
			
		},
		adicionarCliente : function(req, res){
			clienteModel.insert().then(function(data){
				clienteModel.getSelectAll().then(function(data){
					res.json(data);
				}).catch(function(err){
					res.json(err);
				});
			}).catch(function(err){
				res.json(err);
			});
			
		}
	}

	return ClienteController;
}