/*====================================================
 BOLETA IMCO
 APLICACIÓN PRINCIPAL
====================================================*/


window.addEventListener(
"load",
iniciar
);








function iniciar(){



    llenarMeses();



    llenarAnios();





    document.getElementById("mes").value =
    CONFIG.calendario.mesActual;



    document.getElementById("anio").value =
    CONFIG.calendario.anioActual;



    document.getElementById("quincena").value =
    CONFIG.calendario.quincenaActual;






    generarCalendario();



    cargarDatos();



    activarAutoGuardado();



    actualizarResumen();



    eventos();



}









function eventos(){



    document
    .getElementById("mes")
    .addEventListener(
        "change",
        cambiarPeriodo
    );




    document
    .getElementById("anio")
    .addEventListener(
        "change",
        cambiarPeriodo
    );




    document
    .getElementById("quincena")
    .addEventListener(
        "change",
        cambiarPeriodo
    );





    document
    .getElementById("salario")
    .addEventListener(
        "input",
        actualizarResumen
    );





    document
    .getElementById("sistema")
    .addEventListener(
        "change",
        actualizarResumen
    );





    document
    .getElementById("asignacion")
    .addEventListener(
        "change",
        actualizarResumen
    );






    document
    .getElementById("guardar")
    .addEventListener(
        "click",
        ()=>{
            
            guardarDatos();

            alert(
            "Datos guardados"
            );

        }
    );







    document
    .getElementById("limpiar")
    .addEventListener(
        "click",
        limpiarPeriodo
    );



}









function cambiarPeriodo(){



    generarCalendario();



    cargarDatos();



    actualizarResumen();



}









function llenarMeses(){



    const meses=[


        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"


    ];





    const select =
    document.getElementById("mes");



    select.innerHTML="";






    meses.forEach((mes,i)=>{



        select.innerHTML +=

        `<option value="${i+1}">
        ${mes}
        </option>`;


    });



}









function llenarAnios(){



    const select =
    document.getElementById("anio");



    select.innerHTML="";



    const actual =
    new Date().getFullYear();





    for(
        let a=actual-3;
        a<=actual+2;
        a++
    ){



        select.innerHTML +=

        `<option value="${a}">
        ${a}
        </option>`;



    }



}