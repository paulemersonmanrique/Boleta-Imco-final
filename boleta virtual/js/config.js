/*====================================================
 BOLETA IMCO
 CONFIGURACIÓN GENERAL
====================================================*/


const CONFIG = {


    empresa:{

        nombre:"IMCO",

        moneda:"S/.",

        factorHora:1.0443

    },


    jornada:{

        horas:8,

        refrigerio:45

    },


    beneficios:{


        asignacionFamiliar:true,

        porcentajeAsignacion:0.10,


    },


    descuentos:{


        ONP:0.13,

        AFP:0.10


    },


    calendario:{


        mesActual:new Date().getMonth()+1,

        anioActual:new Date().getFullYear(),

        quincenaActual:1


    },


    almacenamiento:{


        nombre:"BOLETA_IMCO"


    }


};