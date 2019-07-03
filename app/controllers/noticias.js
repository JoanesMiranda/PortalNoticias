module.exports.noticias = function (app, req, res) {

	const conexao = app.config.dbConnection();
	const noticiasModel = new app.app.models.NoticiasDAO(conexao);

	noticiasModel.getNoticias((error, result) => {
		res.render('noticias/noticias', { noticias: result });
	});

}

module.exports.noticia = function (app, req, res) {

	const conexao = app.config.dbConnection();
	const noticiaModel = new app.app.models.NoticiasDAO(conexao);

	const noticia_id = req.query.noticia_id;
	const noticia_excluir = req.query.noticia_excluir;

	if (noticia_id) {
		noticiaModel.getNoticia(noticia_id, (error, result) => {
			res.render('noticias/noticia', { noticia: result });
		});

	}
	if (noticia_excluir) {
		noticiaModel.excluirNoticia(noticia_excluir, (error, result) => {
			res.redirect('/noticias');
		});
	}

}





