(function(win, doc){
    const data = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    const dadaForamatada = data.toLocaleDateString('pt-BR', options);
    console.log(dadaForamatada);

})(window, document)