(function(win){

   const Validate = function() {
        if (!new.target) {
            return new Validate();
        }
   } 

   Validate.prototype.testEmail = function(email) {
        return email.includes("@") && email.includes(".");
   }


   Validate.prototype.testSenha = function({min, max, senha}) {
        if (senha > max || senha < min) {
            return false;
        }
        return true
   }


   window.Validate = Validate
})(window)