console.log('🥖🥖');


let info = document.getElementById('pokemons');

let pika ="http://fizal.me/pokeapi/api/v2/name/pikachu.json";

axios.get(pika)
  .then(function(response){
    let abi = response.data.abilities;
    for(let i=0;i<abi.length;i++){
      let pik = document.createElement=('p');
      let all = [];
      all.push(abi[i].ability.name);
      info.innerHTML=(all);
    }

    console.log(response);
  })
let mew ="http://fizal.me/pokeapi/api/v2/name/mewtwo.json"
axios.get(mew)
  .then(function(response){
    console.log(response);
  })
let snorlax ="http://fizal.me/pokeapi/api/v2/name/snorlax.json"
axios.get(snorlax)
  .then(function(response){
    console.log(response);
  })
