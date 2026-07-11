$(document).ready(function(){
    var body=$('body');
    var i=0;
    // prepend() append() before() after()
    $("#btn1").click(function(){
        i++;
        var box= '<div class="box">'+i+'</div>';
        // body.prepend(box);
        // body.append(box);
        $('.box2').before(box);
        // $('.box2').after(box);
    })
    // remove() empty()
    $("#btnRemove").click(function(){
        // $('.box3').remove();
        $('.box3').empty();
    });

    // addClass() 
    $("#btnAddClass").click(function(){
        $('.box2').addClass('box4');
    });
    //removeClass()
    $("#btnRemoveClass").click(function(){
        $('.box2').removeClass('box4');
    });
    // parent() parents()
    $(".aa").click(function(){
        // $(this).parent().css('background-color','black');
        $(this).parents('.box10').css('background-color','green');
    })

    // find and children use in the same way but the difference is 
    // find() will search for all the children and grandchildren of the selected element, 
    // while children() will only search for the immediate children of the selected element.
    
    // find() eq()
    $("#aa").click(function(){
        $(this).parents('.item-box').find('.box10').eq(0).css('background-color','grey');
    })
    // children() eq()
    $("#bb").click(function(){
        $(this).parents('.item-box').children('.box10').eq(0).css('background-color','yellow');
    })
})

