const { Socket } = require('dgram');
const net = require('net');
const port = process.argv[2];


const server = net.createServer((Socket) => {

    const data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    mes = mes.toString().padStart(2, 0);
    dia = dia.toString().padStart(2, 0);
    hora = hora.toString().padStart(2, 0);
    minuto = minuto.toString().padStart(2, 0);


    const dados = `${ano}-${mes}-${dia} ${hora}:${minuto}\n`;
    Socket.write(dados);
    Socket.end();

})



server.listen(port)



