import axios from "axios";

const inputPesquisa = document.getElementById("inputPesquisar") as HTMLInputElement;
const formulario = document.getElementById("formulario") as HTMLFormElement;
const inputPesquisa2 = document.getElementById("inputPesquisar2") as HTMLInputElement;
const formulario2 = document.getElementById("formulario2") as HTMLFormElement;
const divInicio = document.getElementById("inicio") as HTMLDivElement;
const divPokemonPesquisado = document.getElementById("pokemonPesquisado") as HTMLDivElement;
const imgPokemonPesquisado = document.getElementById("fotoPokemonPesquisado") as HTMLImageElement;
const aIdPokemon = document.getElementById("idPokemon") as HTMLAnchorElement;
const aNomePokemon = document.getElementById("nomePokemon") as HTMLAnchorElement;
const aTipoPokemon = document.getElementById("tipoPokemon") as HTMLAnchorElement;
const aDescricaoPokemon = document.getElementById("descricaoPokemon") as HTMLAnchorElement;
const card = document.getElementById("cardPokemon") as HTMLDivElement;
const aInicio = document.getElementById("inicio") as HTMLAnchorElement;

divInicio.style.display = "flex";
divPokemonPesquisado.style.display = "none";

async function obterPokemon(nome : string){ 

    try {

        divInicio.style.display = "none";

        const reposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
    
        let pokemon = reposta.data;
        let idPokemon = pokemon["id"];
        let nomePokemon = pokemon["name"];
        let tipoPokemon = pokemon["types"][0]["type"]["name"];
        let fotoPokemon = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];

        let infosAdicionaisPokemon = pokemon["species"]["url"];

        const repostaDesc = await axios.get(infosAdicionaisPokemon);

        let descricaoPokemon = repostaDesc.data["flavor_text_entries"][9]["flavor_text"];

        imgPokemonPesquisado.src = fotoPokemon;
        aIdPokemon.innerText = `Nº: ${idPokemon}`;
        aNomePokemon.innerText = nomePokemon;
        aTipoPokemon.innerText = `type: ${tipoPokemon}`;
        aDescricaoPokemon.innerText = descricaoPokemon;

        obterCorCard(tipoPokemon);

        divPokemonPesquisado.style.display = "flex";

    } catch (error) {
        
        alert(error);
        divInicio.style.display = "flex";
        divPokemonPesquisado.style.display = "none";

    }
    
}

formulario.addEventListener("submit", (evt : SubmitEvent)=> {

    evt.preventDefault();
    obterPokemon(inputPesquisa.value)

});

formulario2.addEventListener("submit", (evt : SubmitEvent)=> {

    evt.preventDefault();
    obterPokemon(inputPesquisa2.value)

});

function obterCorCard(tipoPokemon : string){

    if(tipoPokemon === "normal"){

        card.style.backgroundColor = '#A8A77A';

    }else if(tipoPokemon === "fire"){

        card.style.backgroundColor = '#EE8130';

    }else if(tipoPokemon === "water"){

        card.style.backgroundColor = "#6390F0";

    }else if(tipoPokemon === "electric"){

        card.style.backgroundColor = "#F7D02C";

    }else if(tipoPokemon === "grass"){

        card.style.backgroundColor = "#74c74c";

    }else if(tipoPokemon === "ice"){

        card.style.backgroundColor = "#96d9d6";

    }else if(tipoPokemon === "fighting"){

        card.style.backgroundColor = "#c22e28";

    }else if(tipoPokemon === "poison"){

        card.style.backgroundColor = "#a33ea1";

    }else if(tipoPokemon === "ground"){

        card.style.backgroundColor = "#e2bf65";

    }else if(tipoPokemon === "flying"){

        card.style.backgroundColor = "#a98ff3";

    }else if(tipoPokemon === "psychic"){

        card.style.backgroundColor = "#f95587";

    }else if(tipoPokemon === "bug"){

        card.style.backgroundColor = "#a6b91a";

    }else if(tipoPokemon === "rock"){

        card.style.backgroundColor = "#b6a136";

    }else if(tipoPokemon === "ghost"){

        card.style.backgroundColor = "#735797";

    }else if(tipoPokemon === "dragon"){

        card.style.backgroundColor = "#6f35fc";

    }else if(tipoPokemon === "dark"){

        card.style.backgroundColor = "#705746";

    }else if(tipoPokemon === "steel"){

        card.style.backgroundColor = "#b7b7ce";

    }else{

        card.style.backgroundColor = "#d685ad";

    }

}

aInicio.addEventListener("click", voltar);

function voltar(){

    divInicio.style.display = "flex";
    divPokemonPesquisado.style.display = "none";

}