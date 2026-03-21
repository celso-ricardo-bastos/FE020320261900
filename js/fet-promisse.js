(function(){



    // busca().then((resp) => {
    //     console.log(resp.json());
    // }).catch((error) => {
    //     console.log(error);
    // });

    async function executa() {
        try {
            const resultado = await fetch('http://localhost:3001/viacep/08048521', {
                method: 'GET'
            })
            console.log(resultado);
        } catch(error) {
            console.log(error);
        }
    }
    executa()


})()