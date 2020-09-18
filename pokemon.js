var botao = document.getElementById('botao');
var select = document.getElementById('select');
var mainlink = "https://pokeapi.co/api/v2/pokemon/";
botao.onclick = function lernome(){
    var entrada = document.getElementById('nome').value;
    var nome = entrada.toLowerCase();
    var pokelink = mainlink + nome; 
    axios.get(pokelink)
    .then(function(response){
        console.log(response.data);
        var imagem = (response.data.forms[0].url);
        axios.get(imagem)
        .then(function(response){
            var foto = document.getElementById('pokemon_image');
            var link_foto = (response.data.sprites.front_default)
            foto.setAttribute('src',link_foto);
        })
        .catch(function(error){
            console.warn(error);
        })
    })
    .catch(function(error){
        console.warn(error);
    });
}


