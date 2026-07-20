/*====================================================
 BOLETA IMCO
 CALENDARIO Y REGISTRO DIARIO
====================================================*/


const calendario =
document.getElementById("calendario");



const DIAS=[

"Domingo",
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado"

];





function generarCalendario(){


    calendario.innerHTML="";


    const mes =
    Number(document.getElementById("mes").value);



    const anio =
    Number(document.getElementById("anio").value);



    const quincena =
    Number(document.getElementById("quincena").value);




    let inicio=1;

    let fin=15;




    if(quincena===2){


        inicio=16;


        fin=new Date(anio,mes,0).getDate();


    }





    for(let dia=inicio; dia<=fin; dia++){


        crearDia(dia,mes,anio);


    }


}








function crearDia(dia,mes,anio){



    const fecha =
    new Date(anio,mes-1,dia);



    const card =
    document.createElement("div");



    card.className="dia";



    if(fecha.getDay()===6){

        card.classList.add("sabado");

    }



    if(fecha.getDay()===0){

        card.classList.add("domingo");

    }






    card.innerHTML=`


<header>

<h3>${DIAS[fecha.getDay()]}</h3>

<div class="fecha">

${String(dia).padStart(2,"0")}

</div>

</header>



<div class="linea">

<label>Ingreso</label>


<input 
type="time"
class="ingreso">


</div>





<div class="linea">

<label>Salida</label>


<input 
type="time"
class="salida">


</div>





<div class="linea">


<label>
Semana cerrada
</label>


<input 
type="checkbox"
class="check">


</div>




<hr>




<div class="extra">

<span>
Trabajadas
</span>


<b class="trabajadas">
0.00
</b>


</div>




<div class="extra">

<span>
Normales
</span>


<b class="normales">
0.00
</b>


</div>




<div class="extra">

<span>
Extra 25%
</span>


<b class="v25">
0.00
</b>


</div>




<div class="extra">

<span>
Extra 35%
</span>


<b class="v35">
0.00
</b>


</div>


`;





calendario.appendChild(card);





card.querySelector(".ingreso")
.addEventListener("change",()=>{


    calcularDia(card);


});





card.querySelector(".salida")
.addEventListener("change",()=>{


    calcularDia(card);


});



}








function calcularDia(card){



    const ingreso =
    card.querySelector(".ingreso").value;



    const salida =
    card.querySelector(".salida").value;





    if(!ingreso || !salida){

        return;

    }






    let ini =
    convertirMinutos(ingreso);



    let fin =
    convertirMinutos(salida);





    if(fin < ini){


        fin += 1440;


    }





    let minutos =
    fin - ini;





    minutos -= CONFIG.jornada.refrigerio;





    if(minutos<0){

        minutos=0;

    }






    const horas =
    minutos/60;





    let normales =
    Math.min(horas,8);





    let extra25=0;

    let extra35=0;





    if(horas>8){


        extra25=Math.min(horas-8,2);


    }



    if(horas>10){


        extra35=horas-10;


    }






    card.querySelector(".trabajadas").textContent=
    horas.toFixed(2);




    card.querySelector(".normales").textContent=
    normales.toFixed(2);




    card.querySelector(".v25").textContent=
    extra25.toFixed(2);




    card.querySelector(".v35").textContent=
    extra35.toFixed(2);





    actualizarResumen();



}







function convertirMinutos(hora){


    const partes=hora.split(":");


    return Number(partes[0])*60+
    Number(partes[1]);


}