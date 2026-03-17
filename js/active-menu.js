(function(doc, win){
    "use strict"
    window.ActiveItem = {
        classActive: 'active',
        activePlay: function (className, context) {
            const parentContext = doc.querySelector(`.${context}`)
            const links = parentContext.querySelectorAll(`.${className}`);
            this.activeLink = links;
            this.init();
        },

        limarActive: function() {
            console.log(this.activeLink)
            this.activeLink.forEach( (element) => {
                if (element.classList.contains(this.classActive)) {
                    element.classList.remove(this.classActive);
                }
            })  
        },

        init: function() {
            const activeThis = this;
            this.activeLink.forEach( (element) => {
                element.addEventListener('click', event => {
                    activeThis.limarActive();
                    event.target.classList.add(this.classActive);
                });
            });
        }
    };
})(document, window)