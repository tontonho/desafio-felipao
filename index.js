let nomeHeroi = "Flash";
let xp = 0;
let nivel = " ";
    
for (xp = 0; xp <= 10000; xp += 1000) {
  if (xp === 1000) {
    nivel = "Ferro "
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-1 " + nivel)
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "bronze"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-2 " + nivel)
  } else if (xp >= 2001 && xp <= 3000) {
    nivel = "Prata"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-3 " + nivel)
  } else if (xp >= 3001 && xp <= 4000) {
    nivel = "Ouro"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-4 " + nivel)
  } else if (xp >= 4001 && xp <= 5000) {
    nivel = "Platina"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-5 " + nivel)
  } else if (xp >= 5001 && xp <= 6000) {
    nivel = "Ascendente"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-6 " + nivel)
  } else if (xp >= 6001 && xp <= 7000) {
    nivel = "Imortal"
    console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-7 " + nivel)
  } else (xp >= 7001 && xp <= 8000); {
    nivel = "Radiante"
  }
}
console.log(" O Heroi de nome " + nomeHeroi + " Está no nível-8 " + nivel)