module.exports.index = function(app,req, res){

	const conexao = app.config.dbConnection();
	const  noticiasLimit =  new app.app.models.NoticiasDAO(conexao);

	noticiasLimit.getNoticiasLimit((erro, result) =>{
		res.render('home/index',{noticias: {}, noticias: result});
	});

}