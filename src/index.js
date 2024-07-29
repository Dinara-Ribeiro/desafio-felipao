// Nome/xp  no formato lista, declarando heróis
let herois = [
    { nome: "Dinara", xp: 5000 },
    { nome: "Rodrigo", xp: 7000 },
    { nome: "Ricardo", xp: 9000 },
    { nome: "Pai", xp: 12000}
  ];
// Verificar cada herói da lista acima
  for (let heroi of herois) {
    let nome = heroi.nome; // guarda nome
    let xp = heroi.xp; // guarda xp
    let nivel; // guarda nivel
  
//  Verifica o nível do herói através do xp
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp <= 2000) {
      nivel = "Bronze";
    } else if (xp <= 5000) {
      nivel = "Prata";
    } else if (xp <= 7000) {
      nivel = "Ouro";
    } else if (xp <= 8000) {
      nivel = "Platina";
    } else if (xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
// Retorna mensagem com nome e nível baseado no que foi analisado 
    console.log("O Herói de nome " + nome + "está no nível de " + nivel + ".");
  }