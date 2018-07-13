import axios from 'axios';
import linker from "../linkers/objectLinkers";

// var socket = new WebSocket("ws://10.16.134.211:8080");
// socket.addEventListener('open', ()=>{
//     socket.send("$$$")
// })

var middle = {
    sendMsg(msg){
        // socket.send('Man!')
        // socket.addEventListener('error', (err)=>{
        //     console.log(err)
        // })
        // if(socket.CONNECTING)
        // {console.log("Connecting")}
        // else
        // {socket.send("Hola!");}
        axios.post("https://10.16.134.211:43210", {
            data:{
                "ppl": msg.ppl,
                "msg": msg.msg,
            }
        })
        .then(res=>{console.log(res.data)})
        .catch(err => console.log(err))
    },

    async sendCheck(){
        await axios.post("https://10.16.134.211:43210/data", { data:{"length": linker.msjs.length, "man": linker.man}})
        .then(res=>{
            res.data.map((mres)=>{
                linker.agregarMsj({
                    "msj": mres.ppl + ": " + mres.msg,
                    "who": "else",
                })
                return true;
            })
        })
    }
}

export default middle;