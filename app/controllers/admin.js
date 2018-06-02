module.exports.inclusao_noticia = function(app,req, res){
	res.render('admin/formulario_inclusao_noticia',{validacao: {}, noticia: {} });
}


module.exports.salvar_noticia = function(app, req, res){

	var conexao = app.config.dbConnection();
	var salvarNoticiaModel = new app.app.models.NoticiasDAO(conexao);

	var noticia = req.body;
	
	req.assert('titulo','O titulo não pode ficar vazio').notEmpty();
	req.assert('resumo','O resumo não pode ficar vazio').notEmpty();
	req.assert('autor','O autor não pode ficar vazio').notEmpty();
	req.assert('data_noticia','A data não pode ficar vazio').notEmpty();
	req.assert('noticia','A noticia não pode ficar vazio').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		res.render('admin/formulario_inclusao_noticia',{validacao: erros});
		return;
	}

	salvarNoticiaModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});
}