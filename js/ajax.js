(function() {

    const $_ajax = function(method, url) {

        this.method = method;
        this.url = url;
    }

    $_ajax.prototype.submitAjax = function( callback, header, dados ) {
        const xhr = new XMLHttpRequest();
        xhr.open(this.method, this.url);  
        xhr.onreadystatechange = callback(xhr)

        if (header == 'json') {
            xhr.setRequestHeader('Content-Type', 'application/json')
        }
        

        let dados = JSON.stringify({email: email})
        xhr.send(dados);


        

    }





})(window, document)