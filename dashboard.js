/*====================================================
 BOLETA IMCO
 DASHBOARD
====================================================*/

function actualizarDashboard(){

    const normales =
        Number(document.getElementById("hn").textContent);

    const extra25 =
        Number(document.getElementById("he25").textContent);

    const extra35 =
        Number(document.getElementById("he35").textContent);

    const neto =
        Number(document.getElementById("neto").textContent);

    document.getElementById("dbNormales").textContent =
        normales.toFixed(2);

    document.getElementById("db25").textContent =
        extra25.toFixed(2);

    document.getElementById("db35").textContent =
        extra35.toFixed(2);

    document.getElementById("dbNeto").textContent =
        "S/ " + neto.toFixed(2);

}