function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {
    var entrada = _id("entradaFactorial").value;
    var resultat = 1;
    var operaciones = "";

    for (var i = 1; i <= entrada; i++) {
        resultat = resultat * i;
        operaciones += i + "*"
    }
    _id("resultatFactorial").innerHTML = resultat;
    _id("operacionsFactorial").innerHTML = operaciones;
}

function calculaIVA() {
    var preuAmbIVA = _id("entradaFactorial").value;
    var tipusIVA = 1;
    var preusenseIva = "";
    var IVA = "";

    preuAmbIVA = tipusIVA + preuAmbIVA
    preusenseIva = preuAmbIVA * 0,tipusIVA
    IVA = 

}
function canviaFons(tipus) {
    var colorfondo;
    var colortexto;

    if (tipus == "clear") {
        colorfondo = "white";
        colortexto = "black";
    } else if (tipus == "random") {
        var gris = Math.floor(Math.random() * 255);
        colorfondo = "rgb(" + gris + "," + gris + "," + gris + ")";
        colortexto = "white";
    }
    _id("cos").style.backgroundColor = colorfondo;
    _id("cos").style.color = colortexto;
}