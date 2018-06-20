import axios from 'axios';
import linker from "../linkers/objectLinkers";

var middle = {
    sendMsg(msg){
        axios.post("https://chat-app-node-client.herokuapp.com:43210", {
            data:{
                "ppl": msg.ppl,
                "msg": msg.msg,
            }
        })
        // .then(res=>{console.log(res.data)})
        // .catch(err => console.log(err))
    },

    async sendCheck(){
        await axios.post("https://chat-app-node-client.herokuapp.com:43210/data", { data:{"length": linker.msjs.length, "man": linker.man}})
        .then(res=>{
            console.log(res.data)
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