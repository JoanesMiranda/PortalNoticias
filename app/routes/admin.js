module.exports = function(app){

	app.get('/inclusao_noticia', function(req, res){
		app.app.controllers.admin.inclusao_noticia(app,req, res);
	});

	app.post('/noticia/salvar', function(req, res){
		app.app.controllers.admin.salvar_noticia(app,req,res);
	});

}