module.exports = function(app){

	var clientes = app.controllers.clientes;

	app.get('/', clientes.index);
	app.get('/lista-clientes', clientes.listaClientes);
}