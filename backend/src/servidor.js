const { WebSocketServer } = require ('ws');
const dotenv = require ('dotenv');

dotenv.config()

const wss = new WebSocketServer({port:process.env.PORT || 8080 });

wss.on ("connection", (ws)=>{

    ws.on('error', console.error);

    ws.send("Mensagem Enviada Pelo Servidor")

    ws.on('message', (data) =>{
        console.log(data.toString())
        wss.clients.forEach((client) => client.send(data.toString()))
        ws.send(data);

    });

    console.log("client connected");

}); 