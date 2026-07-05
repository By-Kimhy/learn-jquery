document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "JavaScript";
})
$(document).ready(function () {
    $('#btn2').click(function () {
        $('#demo').html('<h1>JQuery</h1>');
    });
    $('#btn3').click(function () {
        $('#demo').text('<h1>JQuery</h1>');
    });
    $('#btn4').click(function () {
        $('#txt-qty').val(10);
    });

});

$(document).ready(function () {
    $('#hide').click(function () {
        // $('#demo').hide();
        // $('#demo').slideUp();
        $('#demo').fadeOut();

    });
    $('#show').click(function () {
        // $('#demo').show();
        // $('#demo').slideDown();
        $('#demo').fadeIn();
    });
    $('#hideShow').click(function () {
        // $('#demo').toggle();
        // $('#demo').slideToggle();
        $('#demo').fadeToggle();

    })

})


//calculate

$(document).ready(function () {
    const qty = $('#txt-qty');
    const price = $('#txt-price');
    const total = $('#txt-total');

    qty.keyup(function () {
        // getTotal();
        total.text(getTotal2(qty.val(),price.val()));
    });
    price.keyup(function () {
        // getTotal();
        total.text(getTotal2(qty.val(),price.val()));
    });

    function getTotal(){
        total.text(qty.val() * price.val());
    }

    function getTotal2(x,y){
        return x*y;
    }
});