var Promise = require('bluebird'), 
mysql = require('mysql');

function conectaBD(){

	return new Promise(function(resolve, reject){

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'gestao'
		});

		connection.connect(function(err){
			if(err){
				reject("Erro " + err);
				return;
			}

			resolve(connection);
		});	
	})
}

exports.getSelectAll = function(){

	return new Promise(function(resolve, reject){

		conectaBD().then(function(conexao){

				    conexao.query('SELECT * FROM TB_CLIENTES', function(error, results, fields){
				    	if(error) { reject (error); }

				    	resolve(results);
				    })

			}).catch(function(err) {
		        reject(err); 
		    });
		});
}

exports.insert = function(){
	return new Promise(function(resolve, reject){

		conectaBD().then(function(conexao){

					var object = {nome : 'Luiz', telefone : '(21)964445656', cpf : '12264402741', data_nascimento  : '1992-08-12', email : 'luizsantos1992@gmail.com'};

				    conexao.query('INSERT INTO TB_CLIENTES SET ? ', object, function(error, results, fields){
				    	if(error) { reject (error); }

				    	resolve(results);
				    })

			}).catch(function(err) {
		        reject(err); 
		    });
		});
}