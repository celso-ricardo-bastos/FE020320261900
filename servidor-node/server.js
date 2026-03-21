let express = require('express')
let app = express();
let cors = require("cors");
const fs = require('fs')

app.use(cors()) //meddlewere
app.use(express.json()) //meddlewere
app.use(express.urlencoded({extended: true}))//meddlewere

app.get('/viacep/:cep', (req, res) => {
    console.log(req.params);
    res.status(500).send({status: "error!!!!!!"});

    // res.send({cep: 10002, logradouro: 'Rua das Peras'})
});

app.get('/newsletter', (req, res) => {
    //res.send(req.query)
    console.log(req.query);
    let email = req.query.email;
    const isAEmail = email.includes('@');
    if (isAEmail) {
        res.send({mensagem: "email valido", status: true});
        return;
    }
    res.send({status: false, mensagem: "Email invalido! Tente novamente."})
    console.log(req.query.email);
})


app.post('/news', (req, res) => {

    function exec() {
        
        console.log('testando: ', req.body);

        fs.writeFileSync("dados.json", JSON.stringify(req.body))

        let email = req.body.email;
        const isAEmail = email.includes('@');
        if (isAEmail) {
            res.status(200).send({mensagem: "email valido", status: true});
            return;
        }
        res.status(400).send({status: false, mensagem: "Email invalido! Tente novamente."})
        console.log(req.query.email);
    }

    setTimeout(exec, 10000);

})

app.post('/salvar', (req, res) => {
    console.log(req.body)
    res.status(200)//.redirect('http://localhost:3000/');
})


app.listen(3001, () => {
  console.log('Servidor executando em  http://localhost:3001')
})