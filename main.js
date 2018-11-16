console.log('🥖🥖');
class Pokemon{
  constructor(hp,attack, defense,abilities){
    this.hp = hp;
    this.name = name;
    this.attack = attack;
    this.defense = defense;

  }
}

class Trainer {
  get(all)
}

function pik(){
let info1 = document.getElementById('pokemons1');
let pika ="http://fizal.me/pokeapi/api/v2/name/pikachu.json";
axios.get(pika)
  .then(function(response){
    let abi = response.data.abilities;
    let pik = document.createElement('span');
    let all1 = [];
    for(let i=0;i<abi.length;i++){
      all1.push(abi[i].ability.name);
      pik=all1;
      info1.innerHTML=(all1);
    }
  })
}

// let pika = new Pokemon(pikaHP, name, )

function mew(){
let info2 = document.getElementById('pokemons2');
let mew ="http://fizal.me/pokeapi/api/v2/name/mewtwo.json"
axios.get(mew)
  .then(function mew(response){
  let abi2 = response.data.abilities;
  let mew = document.createElement('span');
  let all2 = [];
  for(let i=0;i<abi2.length;i++){
    all2.push(abi2[i].ability.name);
    mew = all2;
    info2.innerHTML=(all2);
    }
  })
}

function snor(){
let info3 = document.getElementById('pokemons3')
let snorlax ="http://fizal.me/pokeapi/api/v2/name/snorlax.json"
axios.get(snorlax)
  .then(function snor(response){
  let abi3 = response.data.abilities;
  let snorlax = document.createElement('span');
  let all3 = [];
  for(let i=0;i<abi3.length;i++){
    all3.push(abi3[i].ability.name);
    snorlax = all3;
    info3.innerHTML =(all3);
    }
  })
}
  document.getElementById("pb").addEventListener("click", pik);
  document.getElementById("mb").addEventListener("click", mew);
  document.getElementById("sb").addEventListener("click", snor);
