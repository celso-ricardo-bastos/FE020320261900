(function() {
    "use strict"
    const botaoGetQuote = document.querySelector('[data-js="get-quote"]');

    botaoGetQuote.addEventListener('click', event => {
        // console.log("Maouse passou sobre")
        // console.dir(event)
    });

    botaoGetQuote.addEventListener('click', event => {
        // console.log("Botão foi clicado")
        event.target.classList.add('formata');
    });
    // console.log(botaoGetQuote)

})()



    // let menu = document.querySelector('.menu');

    // let att = menu.getAttribute('class')
    // let teste = menu.hasAttribute('id')

    // menu.classList.add('meuteste123')
    // menu.style.backgroundColor = 'red'
    // console.dir();

    // console.dir(menu.parentElement.parentElement.parentElement)
    // console.dir(menu.closest('.header'))

    // let p = document.createElement('p'); // <p><p/>
    // let texto = document.createTextNode('Meu elemento html');
    // p.appendChild(texto) // // <p>Meu elemento html<p/>
    // menu.insertBefore(menu, menu.firstChild);

/*
const Carro = {
        modelo: 'C4',
        cor: 'Cinza',
        acerar: function() {
            let acelerar = 1;
            console.log(acelerar++);
        }
    }

    console.log(Carro.acerar())

*/


// var dadosUser = document.querySelector(".email");
// dadosUser.addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         // Inicio do programa
//         var valor = dadosUser.value;
//         console.log(valor.length);
        
        
        

//         // Fim do programa
//         e.preventDefault();
//     }
// })

// var primeiroNome = "Otavio"; // String
// var ultimoNome = "Silva"; // String
// var idade = 52; // number
// var somaIdade;
// var informacao;
// Operadores Aritmeticos
/*
    + adição / concatenar
    - subtrair
    / divisão
    * multiplicação
*/
// somaIdade = idade + 2;
// informacao = primeiroNome + " " + ultimoNome + " - idade: " + somaIdade + " anos";
// informacao = `${primeiroNome} ${ultimoNome} - idade: ${somaIdade} anos`;

// Operadores relacionais
// var nota = "7"; // nota da prova
// var faltas = 10; // faltas do aluno

// Regras para aprovação
// var mediaMeta = 7; // Nota deve ser >=7
// var faltasNoBimestre = 5; // Faltas deve ser < 5
// >, >=, !=, ==, <, <=, ===
// var resultatoMedia = nota == mediaMeta; //boolean


// Operadores Logicos
// && = e , || = ou, ! = não
// var resultatoMedia = nota >= mediaMeta && faltas < faltasNoBimestre; //boolean


// truthy | falsy
// var nome = ""; // False
// var nome = "dfsdf" // True

// Estrutura de Seleção Simples
// if(nota >= 7) {
//     console.log("Aprovado");
// }

// Estrutura de seleção composta
// if (nota > 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// var codigo = 10;

// Estrutura de seleção encadeada
// if (codigo === 1) {
//     console.log("Sabão");
// } else if(codigo === 2) {
//     console.log("Oleo");
// }
// else if(codigo === 3) {
//     console.log("Pasta de Dente");
// }
// else {
//     console.log("Produto não existe no estoque");
// }

// Switch case
// switch(codigo) {
//     case 1:
//         console.log("Sabão");
//     break;
//     case 2:
//         console.log("Leite");
//     break;
//     case 3:
//     case 4:
//         console.log("Shampoo");
//     break;
//     default:
//         console.log("Produto não existe no estoque");
// }

/*
    if (nota > 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
*/

// Ternario
// var respostaAluno = nota > 2 ? "Aprovado" : "Reprovado";
// console.log(respostaAluno);