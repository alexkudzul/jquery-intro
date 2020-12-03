$(document).ready(function(){
    reloadLinks();

    // Al hacer click el boton
    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            // Agrega en el ul el value del input add_link
            $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');

            // dejamos limpio el input
            $("#add_link").val('');;
            reloadLinks();
        });
});

function reloadLinks(){
    // recorre todo los elementos 'a'
    $('a').each(function(){

        console.log(this)
        let that = $(this);

        // attr selecciona el atributo href y se consigue el texto que se encuentra dentro
        let enlace = that.attr("href");

        that.attr('target','_blank');
        // text obtiene el href y lo agrega como texto del propio enlace(lo agrega como texto dentro del li)
        that.text(enlace);
    });
}