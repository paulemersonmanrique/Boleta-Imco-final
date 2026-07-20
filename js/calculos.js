/*====================================================
 BOLETA IMCO
 CALCULOS GENERALES
====================================================*/


function actualizarResumen(){


    const tarjetas =
    document.querySelectorAll(".dia");



    let normales=0;

    let extra25=0;

    let extra35=0;

    let dias=0;





    tarjetas.forEach(card=>{


        const trabajadas =
        Number(
        card.querySelector(".trabajadas").textContent
        );



        if(trabajadas>0){

            dias++;

        }




        normales += Number(
        card.querySelector(".normales").textContent
        );



        extra25 += Number(
        card.querySelector(".v25").textContent
        );



        extra35 += Number(
        card.querySelector(".v35").textContent
        );



    });






    document.getElementById("hn").textContent =
    normales.toFixed(2);



    document.getElementById("he25").textContent =
    extra25.toFixed(2);



    document.getElementById("he35").textContent =
    extra35.toFixed(2);



    document.getElementById("dias").textContent =
    dias;





    calcularBoleta(
        dias,
        normales,
        extra25,
        extra35
    );



}








function calcularBoleta(
    dias,
    normales,
    extra25,
    extra35
){



    const salarioDiario =
    Number(
    document.getElementById("salario").value
    );



    const sistema =
    document.getElementById("sistema").value;



    const tieneAsignacion =
    document.getElementById("asignacion").value==="si";






    const valorHora =
    IMCO.valorHora(
        salarioDiario
    );





    const haber =
    IMCO.haberBasico(
        dias,
        salarioDiario
    );





    const pago25 =
    IMCO.extra25(
        extra25,
        valorHora
    );





    const pago35 =
    IMCO.extra35(
        extra35,
        valorHora
    );





    const asignacion =
    IMCO.asignacionFamiliar(
        tieneAsignacion
    );







    const total =

        haber +
        pago25 +
        pago35 +
        asignacion;








    const descuento =

        IMCO.descuentoPension(
            total,
            sistema
        );






    const neto =

        IMCO.neto(
            total,
            descuento
        );









    document.getElementById("haber").textContent =
    haber.toFixed(2);




    document.getElementById("af").textContent =
    asignacion.toFixed(2);




    document.getElementById("remu").textContent =
    total.toFixed(2);




    document.getElementById("descuento").textContent =
    descuento.toFixed(2);




    document.getElementById("neto").textContent =
    neto.toFixed(2);





    actualizarDashboard(
        normales,
        extra25,
        extra35,
        neto
    );



}








function actualizarDashboard(
    normales,
    extra25,
    extra35,
    neto
){



    document.getElementById("dbNormales").textContent =
    normales.toFixed(2);



    document.getElementById("db25").textContent =
    extra25.toFixed(2);



    document.getElementById("db35").textContent =
    extra35.toFixed(2);



    document.getElementById("dbNeto").textContent =
    "S/ " + neto.toFixed(2);



}