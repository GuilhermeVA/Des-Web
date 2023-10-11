const ingrid = atletas[0];

const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('#container > img');
const espaco_descricao = document.querySelector('#container > p');

const preenche = (atleta) => {

espaco_nome.innerText = atleta.nome;
imagem.src = atleta.imagem
espaco_descricao.innerText = atleta.descricao

}
preenche(atletas[3])