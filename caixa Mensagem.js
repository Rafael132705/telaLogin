class Cxmsg{
 static cor="#999" //sera a cor padrao do modulo 
 static destino=null
  static divmsg=null
  static tipo=null
  static comando_sn=null
  static  textos=[]

 
  static mostrar=(config,titulo,texto)=>{
    this.destino=document.body  
    this.titulo=titulo
    this.tipo=config.tipo
    this.textos=config.textos
    this.comando_sn=()=>{config.comando_sn()}
    this.cor=config.cor
    this.texto=texto
    this.divmsg=document.createElement("div")
    const estilo_divmsg=
    "display:flex;"+
    "justify-content:center;"+
    "align-items:center;"+
    "position:absolute;"+
    "top:0px;"+
    "left:0px;"+
    "width:100%;"+
    "height:100vh;"+
    "background-color:rgba(0,0,0,0.7);"+
    "z-index:99999"
    this.divmsg.setAttribute("id","divmsg")
    this.divmsg.setAttribute("style",estilo_divmsg)
    this.destino.prepend(this.divmsg)


    const estilo_areaCxmsg=
       "display:flex;"+
       "justify-content:flex-start;"+
       "align-items:flex-start;"+
        "flex-direction:column;"+
        "width:300px;"
        const areaCxmsg=document.createElement("div")
        areaCxmsg.setAttribute("style",estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)



       const estilo_tituloCxmsg=
          "display:flex;"+
          "justify-content:flex_start;"+
          "background-color:"+this.cor+";"+
          "color:#fff;"+
          "padding:5px;"+
          "border-radius:5px 5px 0px 0px;"+
          "width:100%;"+
          "align-items:center;"
        const tituloCxmsg=document.createElement("div")
        tituloCxmsg.setAttribute("style",estilo_tituloCxmsg)
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const estilo_corpoCxmsg=
        "display:flex;"+
        "justify-content:flex_start;"+
        "background-color:#eee;"+
        "color:#000;"+
        "padding:5px;"+
        "width:100%;"+       
        "align-items:center;"
        const CorpoCxmsg=document.createElement("div")
        CorpoCxmsg.setAttribute("style",estilo_corpoCxmsg)
        CorpoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(CorpoCxmsg)

        const estilo_rodapeCxmsg=
        "display:flex;"+
        "justify-content:space-around;"+
        "background-color:#ccc;"+
        "color:#000;"+
        "padding:5px;"+
        "border-radius:0px 0px 5px 5px;"+
        "width:100%;"+
        "align-items:center;"
        const rodapeCxmsg=document.createElement("div")
        rodapeCxmsg.setAttribute("style",estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)


        const estilo_botaoCxmsg=
        "background-color:"+this.cor+";"+
        "color:#fff;"+
        "padding: 10px 50px;"+
        "border-radius: 5px ;"+
        "cursor:pointer;"+
        "text-transform:uppercase;"
        if(this.tipo=="ok"){
            const btn_ok=document.createElement("button")
        btn_ok.setAttribute("style",estilo_botaoCxmsg)
        btn_ok.innerHTML="OK"
        btn_ok.addEventListener("click",(evt)=>{
          this.ocultar()
          this.comando_sn()
        })
        rodapeCxmsg.appendChild(btn_ok)
        }else if (this.tipo=="sn") {
          const btn_sim=document.createElement("button")
          btn_sim.setAttribute("style",estilo_botaoCxmsg)
          btn_sim.innerHTML=this.textos[0]//= SIM
          btn_sim.addEventListener("click",(evt)=>{
            this.comando_sn()
            this.ocultar()
          })
          rodapeCxmsg.appendChild(btn_sim)
          const btn_nao=document.createElement("button")
          btn_nao.setAttribute("style",estilo_botaoCxmsg)
          btn_nao.innerHTML=this.textos[1] // =NAO
          btn_nao.addEventListener("click",(evt)=>{
            this.ocultar()
          })
          rodapeCxmsg.appendChild(btn_nao)
        }
      


  }     
 static ocultar=()=>{
    this.divmsg.remove()
  }

}

export{Cxmsg}
