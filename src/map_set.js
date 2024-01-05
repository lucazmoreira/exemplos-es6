let meuMap = new Map();
meuMap.set("nome", "Lucas");
meuMap.set("stack", "html, css, js e react");
console.log(meuMap);

// Buscando o valor através da chave
const nome = meuMap.get("nome");
console.log(nome);

console.log(meuMap.size); // 2
console.log(meuMap.has("sobrenome")); // false

// Limpando o Map
// meuMap.clear();
// console.log(meuMap.size);

// Buscando as chaves e valores
for (let chave of meuMap.keys()) {
  console.log(chave);
}
for (let valor of meuMap.values()) {
  console.log(valor);
}

for (let entrada of meuMap.entries()) {
  console.log(entrada);
}

// Removendo valores
meuMap.delete("stack");
console.log(meuMap); // Map(1) { 'nome' => 'Lucas' }

/*
 *   SET
 */

const cpfs = new Set();
cpfs.add("44569952362");
cpfs.add("03698856635");
cpfs.add("23698563214");

console.log(cpfs); // Set(3) { '44569952362', '03698856635', '23698563214' }

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

const array = [
  "Lucas Moreira",
  "Angela Silveira",
  "João Ribeiro",
  "Lucas Moreira",
  "João Ribeiro",
];
const arrayComoSet = new Set([...array]);
const arraySemDuplicados = [...arrayComoSet];
console.log(arrayComoSet); // Set(3) { 'Lucas Moreira', 'Angela Silveira', 'João Ribeiro' }
console.log(arraySemDuplicados); // [ 'Lucas Moreira', 'Angela Silveira', 'João Ribeiro' ]
