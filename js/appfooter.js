(function(win, Active, AddIcone){


    // let email = "fasdfasdf@fsdfasdf.com";

    // alert('sdafasds')

    // if (validaEmail(email)) {
    //     console.log('E email')
    // }

    const activeMenu = new Active('active', 'item-link', 'menu');
    activeMenu.activePlay(); // menu

    // const activeFooter = new Active('active', 'footer-item-link', 'company');
    // activeFooter.activePlay(); // Aplicando no footer

    // const iconeAdd = new AddIcone();
    // iconeAdd.activePlay('footer-item-link', 'company')s


    const icone = new AddIcone('active', 'footer-item-link', 'company');
    icone.activePlay()

})(window, ActiveItem, AddIcone);



