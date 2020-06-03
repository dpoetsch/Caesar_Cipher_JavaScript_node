const express = require('express')
const fs = require('fs')
const sha1 = require('sha1');
const axios = require('axios')
const FormData = require('form-data')
const app = express()

//Pegar o JSON no endereço específicado utilizando token - necessário preencher o token
axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=')
  .then(async response => {
    await fs.writeFileSync('answer.json', JSON.stringify(response.data))

    const data = require('./answer.json')

    const fileName = './answer.json';

    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
//Pegando os dados do JSON e passando de string para manipular como objeto no JS para decifrar o código    
        var answer = JSON.parse(data);
        var casas = answer.numero_casas;
        var token = answer.token;
        var cifrado = answer.cifrado;
        var decifrado = "";
    
    console.log(cifrado);
    
        for ( var i = 0; i < cifrado.length; i++ ){
            if ( cifrado[i] == " " || cifrado[i] == "," || cifrado[i] == "." ){       
                decifrado = decifrado + cifrado[i];
                continue
            }
                numLetra = cifrado[i].charCodeAt(0);
                cont = numLetra - casas;
        
              if ( cont < 97 ){
              cont = 122 - (97 - cont - 1);
              }      
              decifrado = (decifrado + (trans = String.fromCharCode(cont)));     
            }        
    
            console.log(decifrado);
            console.log(sha1(decifrado));
//editando os dados no JSON
                    const send = {
                numero_casas: casas,
                token: token,
                cifrado: cifrado,
                decifrado: decifrado,
                resumo_criptografico: sha1(decifrado),
            }
            const jsonString = JSON.stringify(send)
            fs.writeFile('./answer.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })  
        })
    })
//enviando o arquivo para o endereço fornecido no desafio
    const formData = new FormData();
    formData.append('answer', fs.createReadStream('answer.json'));
//necessário preencher o token
    axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=', formData, {
      headers: formData.getHeaders()
    }).then(function(response) {
        console.log(response.data);
    });