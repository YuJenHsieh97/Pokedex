console.log('🥖🥖');


let info = document.getElementById('pokemons');

let pika ="http://fizal.me/pokeapi/api/v2/name/pikachu.json";

axios.get(pika)
  .then(function(response){
    let abi = response.data.abilities;
    let pik = document.createElement=('span');
    let all1 = [];
    for(let i=0;i<abi.length;i++){
      all1.push(abi[i].ability.name);
      pik = all1;
      info.innerHTML=(all1);
      console.log(all1);
    }
  })
let mew ="http://fizal.me/pokeapi/api/v2/name/mewtwo.json"
axios.get(mew)
  .then(function(response){
  let abi2 = response.data.abilities;
  let mew = document.createElement=('span');
  let all2 = [];
  for(let i=0;i<abi2.length;i++){
    all2.push(abi2[i].ability.name);
    mew = all2;
    info.innerHTML=(all2);
    console.log(all2);
    }
  })

let snorlax ="http://fizal.me/pokeapi/api/v2/name/snorlax.json"
axios.get(snorlax)
  .then(function(response){
  let abi3 = response.data.abilities;
  let snorlax = document.createElement=('span');
  let all3 = [];
  for(let i=0;i<abi3.length;i++){
    all3.push(abi3[i].ability.name);
    snorlax = all3;
    info.innerHTML =(all3);
    console.log(all3);
    }
  })
