(function(doc, win){
    "use strict"

    const ActiveItem = function(active, className, context) {
        this.classActive = active;
        this.className = className;
        this.context = context;
    }

    ActiveItem.prototype.activePlay = function () {
        const parentContext = doc.querySelector(`.${this.context}`)
        const links = parentContext.querySelectorAll(`.${this.className}`);
        this.activeLink = links;
        this.init();
    };

    ActiveItem.prototype.limarActive = function() {
        this.activeLink.forEach( (element) => {
            if (element.classList.contains(this.classActive)) {
                element.classList.remove(this.classActive);
            }
        })  
    };

    ActiveItem.prototype.init = function() {
        this.activeLink.forEach( (element) => {
            element.addEventListener('click', event => {
                this.limarActive();
                event.target.classList.add(this.classActive);
            });
        });
    }
    win.ActiveItem = ActiveItem;

})(document, window)

    // const Animal = function(nome) {
    //     this.nome = nome ?? 'Não tem nome'
    // } 
    // Animal.prototype.imprimir = function(mensagem) {
    //     console.log(mensagem + ' => ' + this.nome);
    // }

    // const Cachorro = function(nome) {
    //     Animal.call(this, nome);
    // }

    // Cachorro.prototype.mensagem = function() {
    //      console.log(mensagem + ' => ' + this.nome);   
    // }

    // Cachorro.prototype = Object.create(Animal.prototype);
    // Cachorro.prototype.constructor = Cachorro;

    // const dog = new Cachorro("Rex");

    // dog.imprimir('dog')

    // const m1 = new Animal('Rex');
    // m1.imprimir("ola")

    // const m2 = new Animal('Rex 2');
    // m2.imprimir("Oi")

    // const Animal = function() {
    //     this.idade = 10;
    // };

    // const Gato = function() {
    //     this.som = "Mia";
    // }
    // Gato.prototype = Object.create(Animal.prototype);
    // Gato.prototype.constructor = Gato
    // const animal1 = new Gato();
    // animal1.idade = 45

    // const animal2 = new Gato();
    // animal2.idade = 81
    // console.dir(animal1.idade);


    // win.validaEmail = function (email) {
    //      return email.includes('@');
    // };
    // console.log(win)

// win.ActiveItem = {
//     classActive: 'active',
//     activePlay: function (className, context) {
//         const parentContext = doc.querySelector(`.${context}`)
//         const links = parentContext.querySelectorAll(`.${className}`);
//         this.activeLink = links;
//         this.init();
//     },

//     limarActive: function() {
//         console.log(this.activeLink)
//         this.activeLink.forEach( (element) => {
//             if (element.classList.contains(this.classActive)) {
//                 element.classList.remove(this.classActive);
//             }
//         })  
//     },

//     init: function() {
//         this.activeLink.forEach( (element) => {
//             element.addEventListener('click', event => {
//                 this.limarActive();
//                 event.target.classList.add(this.classActive);
//             });
//         });
//     }
// };