module.exports.index = function(app,req, res){

	var conexao = app.config.dbConnection();
	var  noticiasLimit =  new app.app.models.NoticiasDAO(conexao);

	noticiasLimit.getNoticiasLimit(function(erro, result){
		res.render('home/index',{noticias: {}, noticias: result});
	});

}