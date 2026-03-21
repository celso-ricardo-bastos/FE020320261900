(function() {

    const $_ajax = function({method, url, data, type}) {
        this.method = method;
        this.url = url;
        this.data = data;
        this.type = type;

        if(!new.target) {
            return new $_ajax({method, url, data, type})
        }
        
        this.init();
    }

    $_ajax.prototype.init = function() {
        this.xhr = new XMLHttpRequest();
        this.xhr.open(this.method, this.url);
    }

    $_ajax.prototype.submitAjax = function(callback) {
        this.xhr.onreadystatechange = function () {
            if(this.xhr.readyState == 4) {
                callback(JSON.parse(this.xhr.responseText), this.xhr.status);
            } 
        }.bind(this)
        this.send()
    } 

    $_ajax.prototype.send = function() {
        this.xhr.setRequestHeader('Content-Type', 'application/json')
        this.xhr.send(JSON.stringify(this.data));
    }

    window.$_ajax = $_ajax;


})(window, document)