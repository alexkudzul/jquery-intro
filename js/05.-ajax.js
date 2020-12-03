'use strict'

$(document).ready( function() {

    // LOAD
    // Trae todo los datos por ajax incluso html
    // $("#datos").load("https://reqres.in/");

    // GET
    $.get("https://reqres.in/api/users", {page:3}, function (response) {
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+ element.last_name+"</p>");
        });
    });

    //POST

    // let usuario = {
    //     name: "Alex Ku Dzul",
    //     web:"alexkudzul.com"
    // }

    // $.post("https://reqres.in/api/users", usuario, function(response){
    //     console.log(response);
    // });


    $("#formulario").submit(function(e){

        e.preventDefault();

        let usuario = {
            name: $('input[name = "name"]').val(),
            web: $('input[name = "web"]').val()
        }

        // POST
    
        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });

        */


        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            // Realiza una accion antes de enviar los datos
            beforeSend: function(){
                console.log("Enviando usuario");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout:1000
        });

        return false;
    });


});