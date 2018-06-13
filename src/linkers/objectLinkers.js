var linker = {
    man: String,
    msjs: [],
    agregarMsj(msj){
        this.msjs.push({
            "msj": msj.msj,
            "who": msj.who,
        })
    },
    setName(i){
        this.man = i;
    },
}

export default linker;