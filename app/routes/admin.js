module.exports = function (app) {

	app.get('/inclusao_noticia', (req, res) => {
		app.app.controllers.admin.inclusao_noticia(app, req, res);
	});

	app.post('/noticia/salvar', (req, res) => {
		app.app.controllers.admin.salvar_noticia(app, req, res);
	});

}