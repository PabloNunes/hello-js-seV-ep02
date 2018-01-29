const crypto = require('crypto-js')

if (process.argv.length < 3){
    console.log("usage: node index2.js argument_to_key")
}

let ambient_variable = process.env.ALG
const mensg_normal = process.argv[2].toString()
let mensg_key = ''

if (ambient_variable == "MD5"){
    mensg_key = crypto.MD5(mensg_normal).toString()
} else {
    mensg_key = crypto.SHA256(mensg_normal).toString()
}

console.log("A variável do ambiente é",  ambient_variable, ". E a mensagem encriptada é", mensg_key, ".")