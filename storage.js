/*====================================================
 BOLETA IMCO
 ALMACENAMIENTO LOCAL
====================================================*/


function claveStorage(){


    const mes =
    document.getElementById("mes").value;


    const anio =
    document.getElementById("anio").value;


    const quincena =
    document.getElementById("quincena").value;



    return CONFIG.almacenamiento.nombre +
    "_" +
    anio +
    "_" +
    mes +
    "_" +
    quincena;


}






function guardarDatos(){


    const datos={


        salario:
        document.getElementById("salario").value,


        sistema:
        document.getElementById("sistema").value,


        asignacion:
        document.getElementById("asignacion").value,


        dias:[]


    };







    document.querySelectorAll(".dia")
    .forEach(card=>{


        datos.dias.push({


            ingreso:
            card.querySelector(".ingreso").value,


            salida:
            card.querySelector(".salida").value,


            check:
            card.querySelector(".check").checked



        });



    });







    localStorage.setItem(

        claveStorage(),

        JSON.stringify(datos)

    );


}









function cargarDatos(){



    const guardado =

    localStorage.getItem(
        claveStorage()
    );



    if(!guardado){

        return;

    }






    const datos =
    JSON.parse(guardado);






    document.getElementById("salario").value =
    datos.salario;



    document.getElementById("sistema").value =
    datos.sistema;



    document.getElementById("asignacion").value =
    datos.asignacion;






    const tarjetas =
    document.querySelectorAll(".dia");





    tarjetas.forEach((card,i)=>{



        if(!datos.dias[i]){

            return;

        }





        card.querySelector(".ingreso").value =
        datos.dias[i].ingreso;



        card.querySelector(".salida").value =
        datos.dias[i].salida;



        card.querySelector(".check").checked =
        datos.dias[i].check;





        calcularDia(card);



    });




}









function limpiarPeriodo(){



    const confirmar =
    confirm(
    "¿Eliminar datos de esta quincena?"
    );



    if(!confirmar){

        return;

    }



    localStorage.removeItem(
        claveStorage()
    );



    generarCalendario();


    actualizarResumen();



}








function activarAutoGuardado(){



    document.addEventListener(
        "input",
        guardarDatos
    );



    document.addEventListener(
        "change",
        guardarDatos
    );



}