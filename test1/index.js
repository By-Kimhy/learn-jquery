// document.getElementById("btn1").addEventListener("click", function () {
//     document.getElementById("demo").innerHTML = "JavaScript";
// })
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
        total.text(getTotal2(qty.val(), price.val()));
    });
    price.keyup(function () {
        // getTotal();
        total.text(getTotal2(qty.val(), price.val()));
    });

    function getTotal() {
        total.text(qty.val() * price.val());
    }

    function getTotal2(x, y) {
        return x * y;
    }
});

//CSS
$(document).ready(function () {
    // $('#CSS').click(function () {
    //     $('#demo').css({"background-color":"yellow","font-size":"50px"});
    // });
    // all class
    // $('.like').click(function(){
    //     $('.like').css({"color":"red","font-size":"50px"});
    // })
    // for what you click with this
    $('.like').click(function(){
        var ethis=$(this);
        var opt=ethis.data("opt");
        if(opt==0){
            ethis.css({"color":"red"});
            ethis.data({"opt":"1"});
        }else{
            ethis.css({"color":"black"});
            ethis.data({"opt":"0"});
        }
        
    })
})

// img
// $(document).ready(function () {
//     // $('.img').click(function(){
//     //     $(this).attr({"src":"img/2.png"})
//     // });
//     $('.img').mouseover(function(){
//         var ethis =$(this);
//         var img1 = ethis.data("img1");
//         var img2 = ethis.data("img2");
//         ethis.attr({"src":img2});
//     });
//     $('.img').mouseout(function(){
//         var ethis=$(this);
//         var img1 = ethis.data("img1");
//         var img2 = ethis.data("img2");
//         ethis.attr({"src":img1});
//     })

//     $('.img').click(function(){
//         alert($(this).data("img1")); 
//     })
// })