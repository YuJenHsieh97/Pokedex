console.log('🥖🥖');

class Pokemon{
  constructor(name,hp,attack,defense,abilities){
    this.hp = hp;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.ability = abilities;
    this.container = document.getElementById('allpoke');
    this.element = document.createElement('div');
    this.element.className = 'product';
  }

  display(){
    pokeinfo = document.createElement("ol");
    pokeinfo.innerHTML = [this.name,"HP: " + this.hp,"Attack: " + this.attack,"Defense: " + this.defense,"Abilities:" + this.ability];
    this.element.appendChild(pokeinfo);
    this.container.appendChild(this.element);
  }
}
//
// class Trainer {
//   get(all)
// }

let pokeinfo;
function pika(){
  let pika ="http://fizal.me/pokeapi/api/v2/name/pikachu.json";
  axios.get(pika)
    .then(function(response){

      let abi = response.data.abilities;
      let all1 = [];
      for(let i=0;i<abi.length;i++){
        all1.push(abi[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi.length;i++){
        concatenate +=all1[i] + " ,";
      }

      let name = "Pikachu";

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      let pikk = new Pokemon(name,hp,attack,defense,concatenate);

      document.getElementById('mb').style.display = "none";
      document.getElementById('sb').style.display = "none";

      pikk.display();

   })
}

function mew(){
  let mew ="http://fizal.me/pokeapi/api/v2/name/mewtwo.json";
    axios.get(mew)
    .then(function mew(response){

      let abi2 = response.data.abilities;
      let all2 = [];
      for(let i=0;i<abi2.length;i++){
        all2.push(abi2[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi2.length;i++){
        concatenate +=all2[i] + " ,";
      }

      let name = "Mewtwo";

      let hp = response.data.stats[5].base_stat;

      let attack = response.data.stats[4].base_stat;

      let defense = response.data.stats[3].base_stat;

      let mew = new Pokemon(name,hp,attack,defense,concatenate);

      document.getElementById('pb').style.display = "none";
      document.getElementById('sb').style.display = "none";

      mew.display();
    })
}

function snor(){
  let snorlax ="http://fizal.me/pokeapi/api/v2/name/snorlax.json";
  axios.get(snorlax)

    .then(function snor(response){
      let abi3 = response.data.abilities;
      let all3 = [];
      for(let i=0;i<abi3.length;i++){
        all3.push(abi3[i].ability.name);
      }

      let concatenate = "";
      for(let i=0;i<abi3.length;i++){
        concatenate +=all3[i] + " ,";
      }


      let name ="Snorlax";

      let hp = response.data.stats[5].base_stat;

      let attack= response.data.stats[4].base_stat;

      let defense= response.data.stats[3].base_stat;

      let snor = new Pokemon(name,hp,attack,defense,concatenate);

      document.getElementById('mb').style.display = "none";
      document.getElementById('pb').style.display = "none";

      snor.display();
    })
}

  function main(){
      document.getElementById('pb').style.display = "initial";
      document.getElementById('mb').style.display = "initial";
      document.getElementById('sb').style.display = "initial";
      pokeinfo.style.display = "none";
  }

    mb.addEventListener('click', mew);
    mb.addEventListener("mouseleave", main);
    sb.addEventListener('click', snor);
    sb.addEventListener("mouseleave", main);
    pb.addEventListener('click', pika);
    pb.addEventListener("mouseleave", main);
