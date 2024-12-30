import {sumar} from "./sumar.js";
import {restar} from "./restar.js"
import { multiplicar } from "./multiplicar.js";
import { dividirNums } from "./dividir.js";

const d=document;
let screen=d.querySelector("#screen");
const $clear=d.querySelector("#clear");
const $plus=d.querySelector(".plus");
const $less=d.querySelector(".less");
const $mul=d.querySelector(".mul");
const $dividir=d.querySelector(".dividir");
const $equal=d.querySelector(".equal");
const $btn0=d.querySelector(".zero");
const $btn1=d.querySelector(".one");
const $btn2=d.querySelector(".two");
const $btn3=d.querySelector(".three");
const $btn4=d.querySelector(".four");
const $btn5=d.querySelector(".five");
const $btn6=d.querySelector(".six");
const $btn7=d.querySelector(".seven");
const $btn8=d.querySelector(".eight");
const $btn9=d.querySelector(".nine");
const $btnPoint=d.querySelector(".point");


//VALORES DE LA VARIABLE GLOBAL PARA CON ESA CANTIDAD Y LA SIGUIENTE QUE 
// INGRESES REALIZAR LO QUE NECESITES Y LOS TRUE Y FALSE PARA CONTROLAR LA OPERACION QUE NECESITES
let $valorGlobal=0;
let suma=false;
let resta=false;
let mul=false;
let dividir=false;
//CLICK EVENTS

d.addEventListener("click",(e)=>{
  
    if(e.target === $btn0){
        screen.value+="0"
    }
    if(e.target === $btn1){
        screen.value+="1"
    }
    if(e.target === $btn2){
        screen.value+="2"
    }
    if(e.target === $btn3){
        screen.value+="3"
    }
    if(e.target === $btn4){
        screen.value+="4"
    }
    if(e.target === $btn5){
        screen.value+="5"
    }
    if(e.target === $btn6){
        screen.value+="6"
    }
    if(e.target === $btn7){
        screen.value+="7"
    }
    if(e.target === $btn8){
        screen.value+="8"
    }
    if(e.target === $btn9){
        screen.value+="9"
    }
    if(e.target === $clear){
        screen.value=""
    }
    if(e.target === $btnPoint){
        screen.value+="."
    }


    // MAS 

    if(e.target === $plus){
        if(suma=== true){
            $valorGlobal=$valorGlobal;
            
        }else{
            $valorGlobal=Number(screen.value);
            screen.value=''
            suma=true;
            
        }
        
    }

    //MENOS
    if(e.target === $less){
        if (resta===true) {
            $valorGlobal=$valorGlobal;
        }else{
            $valorGlobal=Number(screen.value);
            screen.value=''
            resta=true;
            
        }
     
    }

    //MULTIPLICAR

    if(e.target === $mul){
        if(mul===true){
            $valorGlobal=$valorGlobal;
     }else{
            $valorGlobal=Number(screen.value);
            screen.value=''
            mul=true;
            
        }
        
    }

    //DIVIDIR

    if(e.target === $dividir){
        if(dividir===true){
            $valorGlobal=$valorGlobal;
        }else{
            $valorGlobal=Number(screen.value);
            screen.value=''
            dividir=true;
            console.log($valorGlobal)
        }
        
    }

//REALIZANDO OPERACION DEPENDIENDO DE CUAL ESTA EN TRUE QUE SIGNIFICA QUE A ESE SE LE DIO CLIC
    if(e.target === $equal){
        if(suma===true){
            screen.value=sumar($valorGlobal, Number(screen.value))
            suma=false;
        }
        if(resta===true){
            screen.value=restar($valorGlobal, Number(screen.value))
            resta=false;
        }
        if(mul===true){
            screen.value=multiplicar($valorGlobal, Number(screen.value))
            mul=false;
        }
        if(dividir===true){
            screen.value=dividirNums($valorGlobal, Number(screen.value))
            dividir=false;
        }

    }

})