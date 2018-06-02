function NoticiasDAO(conexao){
	this._conexao = conexao;
}

NoticiasDAO.prototype.getNoticia = function(noticia_id, callback){
	this._conexao.query("SELECT * FROM noticias WHERE id = "+noticia_id, callback); 
};

NoticiasDAO.prototype.getNoticias = function(callback){
	this._conexao.query('SELECT * FROM noticias ORDER BY data_noticia',callback); 
};

NoticiasDAO.prototype.getNoticiasLimit = function(callback){
	this._conexao.query('SELECT * FROM noticias ORDER BY data_noticia limit 5',callback); 
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._conexao.query('INSERT INTO noticias SET ?',noticia, callback); 
};

NoticiasDAO.prototype.excluirNoticia = function(noticia_excluir, callback){
	this._conexao.query('DELETE FROM noticias WHERE id = '+noticia_excluir, callback); 
};


module.exports = function(){
	return NoticiasDAO;
}