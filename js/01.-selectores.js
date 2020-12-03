

// El simbolo dolar $ es lo mismo a jQuery
// recibe entre el parentesis un selector, en este caso document indica si esta listo el documento html, si ya cargo  
// ready es un evento, recibe como parametro una funcion callback

$(document).ready(function(){
    console.log("jQuery listo");

    // Selector de ID

    $("#rojo").css("background", "red")
              .css("color", "white");
    
    $("#amarillo").css("background","yellow")
                  .css("color", "green");

    $("#verde").css("background", "green")
               .css("color", "white");

    // Selector de CLASE

    $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function(){
        console.log("Has dado click");

        $(this).addClass('zebra');
    });

    // Selector de ETIQUETA

    let parrafos = $('p').css("cursor","pointer")

    parrafos.click(function(){

        let that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    // Selector de ATRIBUTOS

    $('[title=Google]').css('background', '#ccc');

    $('[title=Facebook]').css('background', 'blue');
     

    $('p, a').addClass('margen-superior');

    // BUSQUEDA FIND
    // Sirve para buscar dentro de un arbol html muy grande para buscar etiquetas

    let busqueda = $("#caja").find('.resaltado');
    // let busqueda = $("#caja .resaltado"); // mismo resultado con la de find

    // eq(), indica en que elemento del array se encuentra posicionado
    // parent(), saltar de un div o etiqueta hasta llegar en la posicion que se desea, en este caso hasta el body
    let busqueda2 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title=Google]'); // mismo resultado con la de find

    // parent() se encuentra en ul
    // parent().parent() se encuentra en el div y ahora si podra buscar la clase resaltado
    let busqueda3 = $("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);

    console.log(busqueda2);

    console.log(busqueda3);

});


