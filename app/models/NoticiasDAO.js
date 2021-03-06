class NoticiasDAO {
	constructor(conexao) {
		this.conexao = conexao;
	}
}

NoticiasDAO.prototype.getNoticia = function (noticia_id, callback) {
	this.conexao.query("SELECT * FROM noticia WHERE id = " + noticia_id, callback);
};

NoticiasDAO.prototype.getNoticias = function (callback) {
	this.conexao.query('SELECT * FROM noticia ORDER BY data_noticia', callback);
};

NoticiasDAO.prototype.getNoticiasLimit = function (callback) {
	this.conexao.query('SELECT * FROM noticia ORDER BY data_noticia limit 5', callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
	this.conexao.query('INSERT INTO noticia SET ?', noticia, callback);
};

NoticiasDAO.prototype.excluirNoticia = function (noticia_excluir, callback) {
	this.conexao.query('DELETE FROM noticia WHERE id = ' + noticia_excluir, callback);
};


module.exports = () => NoticiasDAO;

