$(document).ready(function(){

    // Eventos

    // MouseOver y MouseOut

    let caja = $("#caja");

    /*
    caja.mouseover(function(){
        // this, hace referencia a la variable caja
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        $(this).css("background", "green");
    });
    */

    // Hover

    function cambiaRojo(){
        // this, hace referencia a la variable caja
        $(this).css("background", "red");
    }

    function cambiaVerde(){
        // this, hace referencia a la variable caja
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    // Click y Doble Click

    caja.click(function(){
        // this, hace referencia a la variable caja
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        // this, hace referencia a la variable caja
        $(this).css("background","pink")
            .css("color", "white");
    });

    // Focus y blur

    let name = $("#name");
    let datos = $("#datos");

    name.focus(function(){
        // this, hace referencia a la variable name
        $(this).css("border","2px solid green");
    });

    name.blur(function(){
        // this, hace referencia a la variable name
        $(this).css("border","2px solid #ccc");
        // $(this).val(); //obtiene los value de los imputs
        datos.text($(this).val()).show();
    });


    // Mousedown y Mouseup

    // Al hacer click cambia el color de border a gris y al soltar el click cambia a negro

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });


    // Mousemove
    // Captura el movimiento del mouse

    $(document).mousemove(function(){
        // Desaparece el cursor y solo mantiene la que se creo 
        $('body').css("cursor", "none");

        $("#sigueme").css("left", event.clientX)
                     .css("top",event.clientY);

        //  Se obtiene las cordenadas
        console.log("Eje X: "+event.clientX);
        console.log("Eje Y: "+event.clientY);
    });

});