'use strict'

$(document).ready(function () {

    console.log("Hola");

    // Draggable, mueve un elemento del DOM
    $(".elemento").draggable();

    // Resizable, redimencionar un elemento del DOM
    $(".elemento").resizable();

    // Selectable, seleccionar un elemento del DOM
    // $(".lista-seleccionable").selectable();

    // Seleccionar y ordenar un elemento del DOM
    $(".lista-seleccionable").sortable({
        update: function (event, ui) {
            console.log("ha cambiado la lista");
        }
    });

    // Droppable, Soltar un elemento dentro del DOM
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area");
        }
    });


    // Efectos

    $("#mostrar").click(function () {
        $(".caja-efectos").toggle("explode"); // explode, blind, slide, drop, fold, puff, scale, shake, 
        // $(".caja-efectos").toggle("explode", "slow"); //se le puede pasar el tiempo como parametro, slow, 4000(4 segundos)
    });

    // Tooltip, es como un pequeño popup que se muestra al pasar el cursor encima de un enlace 

    $(document).tooltip();

    // Cuadro de dialogo
    $("#lanzar-popup").click(function () {
        // NOTA: en el cuadro que se lanza, muestra el title del close, esto ocure por el tooltip que esta activado en todo el document
        $("#popup").dialog();
    });

    // Datepicker
    $("#calendario").datepicker();

    // Tabs o pestañas
    $("#pestanas").tabs();
});