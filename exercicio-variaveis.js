

// 2.0.14 SEÇÃO QUIZ
// Questão 1
// Questão 1: Vamos brincar de florista. Declare seis variáveis, lembrando-se de nomeá-las de acordo com sua finalidade:

// o preço de uma única rosa (8) e o número de rosas que você tem (70)
// o preço de um único lírio (10) e o número de lírios que você tem (50)
// o preço de uma única tulipa (2) e o número de tulipas que você tem (120)
// Agora declare três variáveis, uma para cada uma das rosas, lírios e tulipas que você possui, nas quais você coloca o preço total. Insira os valores correspondentes nas variáveis usando as variáveis declaradas na etapa anterior. Por fim, declare uma variável na qual você armazena o preço de todas as suas flores (novamente, use as variáveis anteriores para inicialização). Exiba todas as informações de inventário no console da seguinte forma:




// there are many possible and correct variable names
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

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