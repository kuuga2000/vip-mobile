$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#back-to-top").fadeIn();
            //back_to_top();
        } else {
            $("#back-to-top").fadeOut();
        }
    });

    $('.bxslider').bxSlider({
        'auto':true,
        'controls':false
    });

    $("#form-order-el ul#size").find('li').click(function(){
        $("#form-order-el ul#size").find('li').removeClass('chosen');
        $(this).addClass('chosen');
    });

    //''function back_to_top() {
        $("#back-to-top").click(function () {
            $('html, body').animate({scrollTop: $('body').offset().top}, 1000);
        });
    //}

    $("ul#alpha-fixed").find('li').click(function () {
        $("ul#alpha-fixed").find('li').removeClass('current-alpha');
        $('html, body').animate({scrollTop: $($(this).attr("id")=="A" ? 'body' : '#F-'+$(this).attr("id")).offset().top}, 1000);
        $(this).addClass('current-alpha');
    });

    /*$(window).scroll(function (event) {
        var scroll = $(window).scrollTop().valueOf();
        console.log(scroll);
        // Do something
    });*/


    $("#btn-plus").click(function(){
        var text_input = $("#qty-order").val().length>0 ? $("#qty-order").val(): 0 ;
        if(text_input<=1) {
            $("#qty-order").val(1 + parseInt(text_input));
        }
    });

    $("#btn-min").click(function(){
        var text_input = $("#qty-order").val().length> 0 ? $("#qty-order").val(): 0 ;
        if(text_input>1) {
            $("#qty-order").val(parseInt(text_input)-1);
        }
    });

    $("#product-descriptions ul li").find('span').click(function(){
        $("#product-descriptions ul li").find('div').hide();
        $(this).parent().find('div').show();
    });

    $("#category-m li").click(function(){
        $("#category-m li").removeClass('expand');
        $("#category-m li").find('div').hide();
        $(this).find('a').parent().find('div').show();
        $(this).addClass('expand');
        /*$(this).prev().find('li').addClass('expand');
        $("#category-m li").find('div').hide();
        $(this).parent().find('div').show();*/
    });

    //btn shop by
    $(".btn-shop-by").click(function(){
        $(".m-right").hide();
        $("#"+$(this).attr('def')).show();
        $(".btn-shop-by").removeClass('active');
        $("#"+$(this).addClass('active'));
    });

    $("#div-button-form-subscribe").html('<input type="button" class="gn-male gn-btn" value="PRIA">\
    <input type="button" class="gn-female gn-btn" value="WANITA">\
    <div class="clearfix"></div>');
    $("#form-subscribe").html('<input type="text" class="text-input" placeholder="Masukkan email aktif anda">');


        $(".fancybox").fancybox();

});