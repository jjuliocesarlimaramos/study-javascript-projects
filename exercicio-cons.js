
// Questão 2
// Pergunta 2: Modifique o código do exemplo anterior.

// Suponha que os preços das flores sejam constantes (não mudarão). Declare e inicialize as variáveis restantes da mesma forma que no exemplo anterior. Exiba todas as informações coletadas no console. Agora, diminua o número de rosas em 20 e o de lírios em 30.

// Exiba todas as informações coletadas no console novamente.



const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose  unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily  unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip  unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);