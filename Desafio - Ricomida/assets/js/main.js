//tooltip de bootstrap 5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function() {
    //alerterta de Correo enviado
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
    });

    //cambio de color de los parrafos con doble click
    $('body').on('dblclick', '.cambio-color', function() {
        $(this).css("color", "red");
    })
    //Ocultar y mostrar el texto de los parrafos lentamente
    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });
    //tooltip de bootstrap 5
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});

