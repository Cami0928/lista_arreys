const prompt = require("prompt-sync")()
let estoque = []
for(let i = 0; i < 5; i++) {
    let item = prompt("Digite um item: ")
    estoque.push(item)
}
{
console.log("Estoque:", estoque)
estoque.pop()
console.log("Último item removido!")
console.log("Novo estoque:", estoque)
}
console.log("Estoque:", estoque)

estoque.shift()

console.log("Primeiro item removido!")
console.log("Novo estoque:", estoque)
console.log("Novo estoque:", estoque)