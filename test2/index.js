$(document).ready(function(){
    var body=$('body');
    var i=0;
    $("#btn1").click(function(){
        i++;
        var box= '<div class="box">'+i+'</div>';
        // body.prepend(box);
        // body.append(box);
        $('.box2').before(box);
        // $('.box2').after(box);
    })
    $("#btnRemove").click(function(){
        // $('.box3').remove();
        $('.box3').empty();
    });
})