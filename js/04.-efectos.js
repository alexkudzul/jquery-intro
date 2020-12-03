$(document).ready(function () {
    // $("#caja").show(); // Acepta como parametro fast, medium, normal,
    // $("#caja").hide(); // Acepta como parametro fast, medium, normal,

    // Efecto fundido

    // $("#caja").fadeIn(); // Acepta como parametros slow(lento)
    // $("#caja").fadeOut();

    // $("#caja").fadeTo(); // Acepta 2 parametros (velocidad, opacidad)
    // $("#caja").fadeTo('slow',1); // 1 para que se muestre (0.8)
    // $("#caja").fadeTo('slow',0); // 0 para que se oculte  (0.2)

    // Toogle

    // $("#caja").toggle('fast');
    // $("#caja").fadeToggle('fast'); //efecto fundido
    // $("#caja").slideToggle('fast'); //Efecto deslizable

    // Slide

    // $("#caja").slideDown('fast'); //Efecto deslizable (Mostrar)
    // $("#caja").slideUp('fast'); //Efecto deslizable (Ocultar)

    let caja = $("#caja");

    // por defecto viene con el boton mostrar escondido
    $("#mostrar").hide();

    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        caja.show();
    });

    // cuando se de clic en ocultar, se ocultara igual el boton
    $("#ocultar").click(function () {
        $(this).hide();
        // Se muestra el boton mostrar
        $("#mostrar").show();
        // Escondemos la caja
        caja.hide();
    });

    $("#abrir").click(function () {
        caja.toggle("fast");
    });

    $("#animar").click(function () {
        caja.animate({ 
                marginLeft: "500px", 
                fontSize: "40px", 
                height: "60px" 
            }, "slow")

            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize:'40px',
                height:'60'
            }, 'slow');
    });
});
