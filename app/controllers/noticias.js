module.exports.noticias = function(app, req, res){

	var conexao = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(conexao); 

	noticiasModel.getNoticias(function(error, result){
		res.render('noticias/noticias',{noticias: result});
	});

}


module.exports.noticia = function(app, req, res){
	
	var conexao = app.config.dbConnection();
	var noticiaModel = new app.app.models.NoticiasDAO(conexao); 

	var noticia_id = req.query.noticia_id;
	var noticia_excluir = req.query.noticia_excluir;

	if(noticia_id){

		noticiaModel.getNoticia(noticia_id, function(error, result){
			res.render('noticias/noticia',{noticia: result});
		});

	}
	if(noticia_excluir){
		noticiaModel.excluirNoticia(noticia_excluir, function(error, result){
			res.redirect('/noticias');
		});
	}
	
}





