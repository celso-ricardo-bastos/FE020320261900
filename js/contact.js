(function($) {
    $('.cep').mask('00000-000')
    $('.cep').keyup(function(event) {
        if (event.key === 'Enter') {
            let cep = $(this).val();
            $.ajax({
                method: "GET",
                url: `https://viacep.com.br/ws/${cep}/json/`,
                // data: {}
            })
            .done(function( response ) {
                if (response.erro) {
                    $('.cep').addClass('erro')
                }
                else {
                    $('.cep').removeClass('erro')
                    $('#logradouro').val(response.logradouro)
                }
            })
            .fail(function(error) {
                alert( "error" );
            })
        }
    });
})(jQuery)