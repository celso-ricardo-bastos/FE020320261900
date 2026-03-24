(function($) {

    console.log(window)

    // Vanila
    // document.querySelector('.h1').style.display = 'none'
    // text: innerHTML


    // jQuery
    $('button').blur(function() {
        $('.desc, h1').fadeIn().fadeOut().fadeIn();
    });


     $('button').click(function() {
        $('.desc').fadeOut(1000, function() {
            $('h1').slideUp(2000);
        });
    });

    // $('.desc').click(function() {
    //     console.log('clicou')
    //     $(this).animate({
    //         width: '200px',
    //         left: '250px',
    //         top: '100px',
    //         height: 'auto',
    //         fontSize: '5px',
    //     }, 2000, function() {

    //     $(this).animate({
    //         width: '200px',
    //         left: '250px',
    //         top: '500px',
    //         height: 'auto',
    //         })
    //     })
    // }); 


    $('.desc').click(function() {
        let best = $('.best-dental').text();
        // $(this).append(`<button>${best}</button>`);

        // $(this).css({
        //     color: 'red',
        //     fontSize: '30px'
        // });

        $(this).addClass('format')
    });

    $('.desc').dblclick(function() {
        // $(this).removeClass('format')
        // $(this).attr('data-set', 'teste123')
        // let valor =  $(this).attr('class');
        $(this).attr('class', 'teste123')
        // console.log(valor);
    });


    $('button').click(function() {
        // $(this).remove()
    })


})(jQuery)


