/*====================================================
 BOLETA IMCO
 MOTOR DE CALCULO IMCO
====================================================*/


const IMCO = {



    jornada: CONFIG.jornada.horas,



    //-----------------------------------------
    // Valor hora IMCO
    //-----------------------------------------

    valorHora(salarioDiario){


        return (salarioDiario / this.jornada)
        * CONFIG.empresa.factorHora;


    },




    //-----------------------------------------
    // Haber básico
    //-----------------------------------------

    haberBasico(dias, salarioDiario){


        return dias * salarioDiario;


    },





    //-----------------------------------------
    // Asignación familiar
    //-----------------------------------------

    asignacionFamiliar(tieneAsignacion){


        if(!tieneAsignacion){

            return 0;

        }


        return 127.50;


    },





    //-----------------------------------------
    // Hora extra 25%
    //-----------------------------------------

    extra25(horas, valorHora){


        return horas * valorHora * 1.25;


    },





    //-----------------------------------------
    // Hora extra 35%
    //-----------------------------------------

    extra35(horas, valorHora){


        return horas * valorHora * 1.35;


    },





    //-----------------------------------------
    // Dominical
    //-----------------------------------------

    dominical(dias, salarioDiario){


        return (salarioDiario * dias) / 6;


    },






    //-----------------------------------------
    // Descuento pensión
    //-----------------------------------------

    descuentoPension(total, sistema){


        if(sistema==="AFP"){


            return total * CONFIG.descuentos.AFP;


        }


        return total * CONFIG.descuentos.ONP;


    },






    //-----------------------------------------
    // Neto
    //-----------------------------------------

    neto(total, descuento){


        return total - descuento;


    }




};