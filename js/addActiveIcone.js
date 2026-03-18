(function(win, ActiveItem) {
        // New Object que herda ActiveItem
    const AddIcone = function (active, className, context) {
        ActiveItem.call(this, active, className, context)
    }

    AddIcone.prototype = Object.create(ActiveItem.prototype)
    AddIcone.prototype.constructor = AddIcone

    AddIcone.prototype.init = function() {
        this.activeLink.forEach( (element) => {
            element.addEventListener('click', event => {
                this.limarIcone();
                this.limarActive();
                event.target.classList.add(this.classActive);
                event.target.classList.add("icone");
            });
        });
    }

    AddIcone.prototype.limarIcone = function() {
        this.activeLink.forEach( (element) => {
            if (element.classList.contains('icone')) {
                element.classList.remove('icone');
            }
        })  
    };

    win.AddIcone = AddIcone;

})(window, ActiveItem)