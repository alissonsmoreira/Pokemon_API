var botao = document.getElementById('botao');
var botaocima = document.getElementById('seta-cima');
var botaobaixo = document.getElementById('seta-baixo');
var select = document.getElementById('select');
var attribute = document.getElementById('pokemon_Attribute');
var mainlink = "https://pokeapi.co/api/v2/pokemon/";
var pokemonsObjeto;

botao.addEventListener('click', function() {
    var entrada = document.getElementById('nome').value;
    var nome = entrada.toLowerCase();
    var pokelink = mainlink + nome; 
    
    axios.get(pokelink)
    .then(function(response){
        
        pokemonsObjeto = response;

        geradorImagem(response);     

        geradorDescricao(response);
        
    })
    .catch(function(error){
        console.warn(error);
    });
});

function geradorDescricao(response){
    var number = document.getElementById('number'); 
    var numero = JSON.stringify(response.data.id);
    number.textContent = '#' + numero;

    var name = document.getElementById('name');
    var nome = JSON.stringify(response.data.name);
    name.textContent = 'Name:' + nome.toUpperCase();

    var type = document.getElementById('type');
    var tipo = JSON.stringify(response.data.types[0].type.name);
    type.textContent = 'Type:' + tipo.toUpperCase();
}

function geradorImagem(response){
    var imagem = (response.data.sprites.front_default);
    var foto = document.getElementById('pokemon_image');
    foto.setAttribute('src',imagem);
}

botaocima.addEventListener('click', function () {
    var id = pokemonsObjeto.data.id + 1;
    var pokelink = mainlink + id;
    axios.get(pokelink)
    .then(function(response){
        pokemonsObjeto = response;
        
        geradorImagem(response);    
        geradorDescricao(response); 
             
    })
    .catch(function (error){
        console.warn(error);
    });
});

botaobaixo.addEventListener('click', function() {
    var id = pokemonsObjeto.data.id - 1;
    var pokelink = mainlink + id;

    axios.get(pokelink)
    .then(function(response){
        pokemonsObjeto = response;

        geradorImagem(response);     

        geradorDescricao(response);
    })
    .catch(function (error){
        console.warn(error);
    });
});



