// Lista de contatos inicial
const contatos = [
  {
    nome: "Maxwell Wright",
    telefone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

// Exibindo os contatos no console
console.log("Lista de Contatos:");
contatos.forEach((contato, index) => {
  console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});
  