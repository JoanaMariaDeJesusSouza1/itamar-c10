// array e matrizes é uma variiavel que permite armazenar varios valores
//indice/index    [0]       [1]    [2]    [3]                  
  var futebol=  ["bola","jogador","gol","campo"]

console.log(futebol)

console.log(futebol[2])
/// push para acrescentar novos elementos no array
futebol.push("juiz")
futebol.push("arbitro");
futebol.push("neymar")
console.log(futebol)
//pop para remover o ultimo elemento do array
futebol.pop();
console.log(futebol)
//console.log(jogarBola);
//delete remove um elemento mais continua com o espaço no array
delete futebol[5]
console.log(futebol)

//splice deleta totalmente o elemento do array
futebol.splice(4,1);
console.log(futebol);

// acrescenta um elemento especifico no array
futebol[4]="Messi";
console.log(futebol)


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}































