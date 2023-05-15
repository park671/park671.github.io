$(document).ready(function() {
    winW = $(window).width();
    winH = $(window).height();

    var root = document.documentElement;
    var timer;

    window.addEventListener('scroll', function() {
        // 用户滚动停止timeout
        clearTimeout(timer);
        // Pointer events 已被禁用
        if (!root.style.pointerEvents) {
            root.style.pointerEvents = 'none';
        }

        timer = setTimeout(function() {
            root.style.pointerEvents = '';
        }, 500);
    }, false);

    function header() {
        if($("body").hasClass("home")){
            $(window).scroll(function () {
                if($(window).scrollTop() >= winH-85){
                    $('#header').addClass('top');

                }else{
                    $('#header').removeClass('top');

                };
            });
        }else{

            if(!$("body").hasClass("post-type-archive-friends")){
                $(window).scroll(function () {
                    if($(window).scrollTop() >= 85){
                        $('#header').addClass('top');

                    }else{
                        $('#header').removeClass('top');
                    };
                });
            }

        }

        var ht = $('.header-title h1').html();
        var htx = $('.header-title h1').text();
        var htl = htx.length;


        if(htl > 5){
            $('.header-title h1').addClass("scroll");
            $('.header-title h1').html('<span>'+ ht +'</span><span>'+ ht +'</span><span>'+ ht +'</span>');
        }

        $('.search-btn').on('click',function () {
            if($('#search-f').hasClass('hide')){
                $('#search-f').addClass('show').removeClass('hide');
                $('body').addClass('show-hide-box');
                $(this).addClass('on');
                $(this).find('h1').text('关闭');
                $('#header-menu').addClass('hide').removeClass('show');
                $('.menu-btn').removeClass('on');
                $('.menu-btn').find('h1').text('目录');
                $('html,body').css('overflow','hidden')
            }else{
                $('#search-f').addClass('hide').removeClass('show');
                $('body').removeClass('show-hide-box');
                $(this).removeClass('on');
                $(this).find('h1').text('搜索');
                $('html,body').css('overflow','inherit')
            }
        })

        $('.menu-btn').on('click',function () {
            if($('#header-menu').hasClass('hide')){
                $('#header-menu').addClass('show').removeClass('hide');
                $('body').addClass('show-hide-box');
                $(this).addClass('on');
                $(this).find('h1').text('关闭');
                $('#search-f').addClass('hide').removeClass('show');
                $('.search-btn').removeClass('on');
                $('.search-btn').find('h1').text('搜索');
                $('html,body').css('overflow','hidden')
            }else{
                $('#header-menu').addClass('hide').removeClass('show');
                $('body').removeClass('show-hide-box');
                $(this).removeClass('on');
                $(this).find('h1').text('目录');
                $('html,body').css('overflow','inherit')
            }
        })

        $('.close').on('click',function () {
            $('#search-f').addClass('hide').removeClass('show');
            $('body').removeClass('show-hide-box');
            $('.search-btn').removeClass('on');
            $('.search-btn').find('h1').text('搜索');
        })

        $('.channel-menu-hide li').each(function () {
            var name = $(this).find("a").text();
            var url = $(this).find("a").attr('href');
            var classme = $(this).attr('class');
            var index = $(this).index();
            $('.circular tspan').eq(index).attr('class',classme);
            $('.circular tspan').eq(index).find('a').attr('href',url).text(''+ name +' - ');
        });
        $('.channel-menu-hide .img').each(function () {
            var bg = $(this).attr('data-bg');
            var id = $(this).attr('id');
            $('.'+id).find('a').attr('data-bg',bg);
        })

        $('.circular a').mouseenter(function () {
            var bg = $(this).attr('data-bg');
            $('.channel-menu .bg').css('background-image','url('+ bg +')');
        });

        $('.circular a').mouseout(function () {
            var current_bg =  $('.circular .current-menu-item a').attr('data-bg');
            $('.channel-menu .bg').css('background-image','url('+ current_bg +')');
        });

        var current_bg =  $('.circular .current-menu-item a').attr('data-bg');
            $('.channel-menu .bg').css('background-image','url('+ current_bg +')');

    }

    header();

      $('.story-box a').mouseenter(function () {
            $('.c-bg-img img').hide();
        });

        $('.story-box a').mouseout(function () {
             $('.c-bg-img img').show();
        });



    function comment() {


        $('.wpdiscuz_top_clearing').prepend('<div class="shou on"><i class="fas fa-chevron-up"></i><span>隐藏评论</span></div>');

        $('.shou').click(function () {
            $('#comments').slideToggle();
            if($(this).hasClass('on')){
                $(this).html('<i class="fas fa-chevron-down"></i><span>显示评论</span>')
                $(this).addClass('off').removeClass('on');
            }else{
                $(this).html('<i class="fas fa-chevron-up"></i><span>隐藏评论</span>')
                $(this).addClass('on').removeClass('off');
            }
        })

        var cSticky = new hcSticky('.com-left', {
            stickTo: '#wpcomm',
            top:100,
            responsive: {
                980: {
                    disable: true
                }
            }
        });



        $('.wpuf-submit').next().appendTo('.registration .wpuf-form-add');

        $('.wpfp-sz span').appendTo('.item-sc');
        $('.wpfp-pl span').appendTo('.item-pl');

    }

    comment();

    function getRandom(min, max) {
        if(min > max) {
            return -1;
        }

        if(min == max) {
            return min;
        }

        var r;

        do {
            r = Math.random();
        }
        while(r == 1.0);

        return min + parseInt(r * (max-min+1),"");
    }

    function home_slider() {
        $(".story-box").each(function() {
            var posW = getRandom(25, 35);
            $(this).css({width: posW+"%"});
        });

        $(document).on("mouseover", ".story-box", function(){
            $(this).addClass('current');
            $(".story-box").not(this).removeClass('current');
        });
        $(document).on("mouseout", ".story-box", function(){
            $(this).removeClass('current');
            $(".story-box").eq(0).addClass('current');
        });
    }
    home_slider();


    function trotting() {
        var trotting = new Swiper('.trotting-box-container',{
            slidesPerView: 'auto',
            speed:20000,
            loop : true,
            loopedSlides: 3,
            freeMode : true,
            autoplay: {
                delay: 0,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }
        });


    }
    trotting();

    function more() {


        $(document).on("click", ".load-more a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#page-content',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('.grid-box');
                    var nextlink = $(out).find('.load-more a').attr('href');

                    $('.grid-warp').append(result);
                    $('.load-more a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more a').attr('href', nextlink);
                    } else {
                        $('.load-more a').remove();
                    }

                    var sty = $('.dimension-grid').find('.grid-box:eq(0) .box-warp').attr('style');
                    $('.dimension-grid').find('.grid-box .box-warp').attr('style',sty);

                    aSticky.refresh();
                    wpfp();

                }
            });
        });


        $(document).on("click", ".load-more-s a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#subject-grid',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('#subject-grid .grid-box');
                    var nextlink = $(out).find('.load-more-s a').attr('href');

                    $('#subject-grid .grid-warp').append(result);
                    $('.load-more-s a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more-s a').attr('href', nextlink);
                    } else {
                        $('.load-more-s a').remove();
                    }
                    wpfp();

                }
            });
        });

        $(document).on("click", ".load-more-g a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#girl-grid',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('#girl-grid .grid-box');
                    var nextlink = $(out).find('.load-more-g a').attr('href');

                    $('#girl-grid .grid-warp').append(result);
                    $('.load-more-g a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more-g a').attr('href', nextlink);
                    } else {
                        $('.load-more-g a').remove();
                    }
                    wpfp();

                }
            });
        });

        $(document).on("click", ".load-more-main a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#page-section-grid',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('.home-grid .grid-box');
                    var nextlink = $(out).find('.load-more-main a').attr('href');

                    $('.home-grid .grid-warp').append(result);
                    $('.load-more-main a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more-main a').attr('href', nextlink);
                    } else {
                        $('.load-more-main a').remove();
                    }

                    wpfp();


                }
            });
        });

        $(document).on("click", ".load-more-m a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#music-grid',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('.music-grid .grid-box');
                    var nextlink = $(out).find('.load-more-m a').attr('href');

                    $('.music-grid .grid-warp').append(result);
                    $('.load-more-m a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more-m a').attr('href', nextlink);
                    } else {
                        $('.load-more-m a').remove();
                    }

                    wpfp();


                }
            });
        });


        $(document).on("click", ".load-more-art a", function(e){
            e.preventDefault();
            $(this).find('span').text('加载中...');
            $.ajax({
                type: "GET",
                url: $(this).attr('href') + '#page-content-art-right',
                dataType: "html",
                success: function(out){
                    var result = $(out).find('#page-content-art-right .grid-box');
                    var nextlink = $(out).find('.load-more-art a').attr('href');

                    $('#page-content-art-right .grid-warp').append(result);
                    $('.load-more-art a span').text('加载更多');
                    if (nextlink != undefined) {
                        $('.load-more-art a').attr('href', nextlink);
                    } else {
                        $('.load-more-art a').remove();
                    }

                    wpfp();
                    aSticky.refresh();


                }
            });
        });


    }

    more();

    function wpfp() {
        $('.wpfp-span').on('click', 'a.wpfp-link', function() {
            var dhis = $(this);
            wpfp_do_js( dhis, 1 );
            // For favorite post listing page
            if (dhis.hasClass('remove-parent')) {
                dhis.parent("p").parent(".media-right").parent(".media").fadeOut();
            }
            return false;
        });

        $('.wpfp-span').on('click', 'span.wpfp-link', function() {
            var t = $(this).attr('data-original-title');
            $('body').append('<div class="wpulike-notification"><div class="wpulike-message wpulike-success">'+t+'</div></div>');
            setTimeout(function () {
                $('.wpulike-notification').remove()
            },3000)
        });



        $('.wpfp-widget-ul').on('click', '.wpfp-link', function() {
            var dhis = $(this);
            wpfp_do_js( dhis, 1 );
            // For favorite post listing page
            if (dhis.hasClass('remove-parent')) {
                dhis.parent("li").fadeOut();
            }
            return false;
        });
    }

    wpfp();



    function wpfp_do_js( dhis, doAjax ) {
        loadingImg = dhis.prev();
        loadingImg.show();
        beforeImg = dhis.prev().prev();
        beforeImg.hide();
        url = document.location.href.split('#')[0];
        params = dhis.attr('href').replace('?', '') + '&ajax=1';
        if ( doAjax ) {
            jQuery.get(url, params, function(data) {
                    dhis.parent().html(data);
                    if(typeof wpfp_after_ajax == 'function') {
                        wpfp_after_ajax( dhis ); // use this like a wp action.
                    }
                    loadingImg.hide();
                }
            );
        }
    }

    function tags() {
        $('.get-info').click(function () {
            $('.tags-info').slideToggle();
        })
    }
    tags();


    function girl() {
        $(".girl-cover li").each(function (i) {
            $(this).css({"transform": "translateZ(" + -i*130 + "px)"});
        });

        var XAngle = 0;
        var YAngle = 0;
        var Z = 50;

        $("body").on('mousemove', function (e) {

            var XRel = e.screenX;
            var YRel = e.screenY;

            YAngle = -(0.5 - XRel / winW)*50;
            XAngle = (0.5 - (YRel / winW))*50;
            $(".girl-cover ul").css({
                "transform": "perspective(2000px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)",
            });
        });

        var boxH = $('.girl-two-right .grid-box').height();
        $('.girl-two-left .grid-box img').height(boxH);

        var girl_swiper = new Swiper('.girl-swiper', {
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            seed:500,
            on: {
                init: function(){
                    this.slideTo(1, 1000, false);
                },
            },
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });

        var $gridg = $('.girl-tagcloud').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: 'li',
            stamp: '.stamp',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
            }
        });

        $('.stamp').each(function () {
            var gh = $('.girl-tagcloud').height();
            $(this).css('top',gh/2-175);
            $gridg.isotope('layout');
        })

        $('.girl-tags ul li a').addClass('color-text-b');

    }
    girl();

    function color() {
        var color =Array("#ff0000", "#ff71d5" ,"#ff0000", "#a800ff", "#0000ff","#007eff","#00fcff","#00ff0c","#baff00","#ffa200");
        var color_ligth = Array("#b5f9ff","#ffabab","#e0bfff","#abffbf","#feffb3","#ffcaf9","#e4ffca","#cae9ff","#ffffff","#eeeeee","");
        var color_ligths = Array("#ffe3e3","#f3e3ff","#e3fbff","#e4ffe3","#fff0e3","#e4e3ff");

        $('.art-nav ul li a').addClass('color-text');

        $('.color-text').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('text-shadow','0 0 20px '+ colors +'');
        });
        $('.color-text-b').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('text-shadow','0 0 100px '+ colors +'');
        });
        $('.current-menu-item').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('text-shadow','0 0 50px '+ colors +'');
        });
        $('.color').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('color', colors);
        });
        $('.color-bg').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('background',colors);
        });

        $('.color-box').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('box-shadow','0 0 30px '+ colors +'');
        });
        $('.color-box-a').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('box-shadow','5px 5px 20px '+ colors +'');
        });



        $('.color-box-in').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('box-shadow','inset 0 0 10px '+ colors +'');
        });

        $('.tag-bianjituijian .box-warp').each(function () {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var rgbas = 'rgba('+r+','+g+','+b+',.3)';
            $(this).css('box-shadow','0px 0px 30px '+ rgbas+'').css('border',''+ rgbas+' solid 1px');
        });

        $('.color-bian').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('border',''+ colors+' solid 2px');
        });
        $('.color-bian-a').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('border',''+ colors+' solid 1px');
        });


        $('.color-box-b').each(function () {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var rgbas = 'rgba('+r+','+g+','+b+',.3)';
            $(this).css('box-shadow','0 0 20px '+ rgbas +'');
        });

        $('.tag-jianbao .box-warp').each(function () {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var rgbas = 'rgba('+r+','+g+','+b+',.2)';
            $(this).css('background', 'linear-gradient(to top, rgba(255,255,255,1) 0%,'+ rgbas +' 100%)');
        });



        $(document).on("mouseover", ".color-hover", function(){
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('text-shadow','0 0 20px '+ colors +'');
        });
        $(document).on("mouseout", ".color-hover", function(){
            $(this).css('text-shadow','unset');
        });

        $('.random-tags a,.tag-clouds ul li a').each(function () {
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            var colorRR = Math.floor((Math.random() * 256));
            var colorGG = Math.floor((Math.random() * 256));
            var colorBB = Math.floor((Math.random() * 256));

            var minNumber = 20;
            var maxNumber = 80
            var number = number(minNumber, maxNumber);

            function number(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            var color1 = 'linear-gradient(to right,' + 'rgba(' + colorR + ',' + colorG + ',' + colorB + ',0.5) 0%,rgba(0,0,0,0)' + number + '%,' + 'rgba(' + colorRR + ',' + colorGG + ',' + colorBB + ',0.5) 100%';

            $(this).css({'background': color1});
        });

        $('.girl-page .box-link a,.girl-page .box-tags a').each(function () {
            var colors = color[Math.floor(Math.random()*color.length)];
            $(this).css('text-shadow','0 0 20px '+ colors +'');
        });

        $('.girl-nav ul li a,.stamp,.music-current-grid .grid-box .box-content,.music-label-releases,.x-artists,.single-bie_records .artists-post-header,.a-p-grid').each(function () {
            var colors = color_ligth[Math.floor(Math.random()*color_ligth.length)];
            $(this).css('background', 'linear-gradient(to top, rgba(255,255,255,1) 0%,'+ colors +' 100%)');
        });

        $('.color-box-g,.page-music .grid-box .box-warp,.page input,.wpuf-login-form,.registration ul.wpuf-form').each(function () {
            var colors = color_ligths[Math.floor(Math.random()*color_ligths.length)];
            $(this).css('box-shadow','0 0 50px '+ colors +'').css('border',''+ colors +' solid 1px');
        });

    }
    color();

    function grid() {
        $('.random-tags').each(function () {
            $(".home-grid .grid-box").eq(5).after(this);
        });
    }

    grid();

    function subject() {


        $('.book-container').each(function () {
            var boxd = $(this).find('.book-s');
            var video = $(this).attr('data-video');
            var img = $(this).attr('data-img');
            if(boxd.length == 1){
                for(var i = 0;i<3;i++){
                    var content = boxd.clone();
                 $(this).prepend(content);
                }
            }else if(boxd.length == 2){
                    var content_1 = boxd.eq(0).clone();
                    var content_2 = boxd.eq(1).clone();
                    $(this).prepend(content_1);
                $(this).prepend(content_2);
            }else if(boxd.length == 3){
                if(video){
                    $(this).prepend('<div class="book-s book-video"><video autoplay loop muted src="'+video+'"></video></div>');
                }else{
                    $(this).prepend('<div class="book-s book-img"><img src='+img+'></div>');
                }
            }
        })



        var lastX; //stores x position from mousedown
        var lastY; //y position from mousedown
        var dragging = false;
        var matrix3d = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] ;


        // $('.section-subject-container').on('mousedown', function(event) {
        //     $('.book-container').removeClass('anm');
        //     lastX=event.pageX;
        //     lastY=event.pageY;
        //     dragging = true;
           
        // });

        // $('.section-subject-container').on('mouseup', function() {
        //     dragging = false;
        //     $('.book-container').removeClass('noclick');
        //     m = $('.book-container').css('transform');
        //     //if this condition is true, transform property is either "none" in initial state or "matrix2d" which happens when the cube is at 0 rotation.
        //     if(m.match(/matrix3d/) == null)
        //         matrix3d = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]; //identity matrix for no transformaion
        //     else
        //         matrix3d = stringToMatrix(m.substring(8,m.length));
        // });

        // $('.section-subject-container').on('mousemove', function (event) {
        //     if (dragging) {
        //         var x = -(event.pageY - lastY);
        //         var y = event.pageX - lastX;
        //         var angle = Math.sqrt(x * x + y * y);
        //         var r = [[x], [y], [0], [angle]]; //rotation vector
        //         rotate3d = multiply(matrix3d, r); //multiply to get correctly transformed rotation vector
        //         var str = 'matrix3d' + matrixToString(matrix3d)
        //             + ' rotate3d(' + rotate3d[0][0] + ', ' + rotate3d[1][0] + ', ' + rotate3d[2][0] + ', ' + rotate3d[3][0] + 'deg)';
        //         $('.book-container').css('transform', str);
        //     }
        // });


        function matrixToString(matrix) {
            var s = "(";
            for(i=0; i<matrix.length; i++) {
                for(j=0; j<matrix[i].length; j++) {
                    s+=matrix[i][j];
                    if(i<matrix.length-1 || j<matrix[i].length-1) s+=", ";
                }
            }
            return s+")";
        }

//converts a string of transform matrix into a matrix
        function stringToMatrix(s) {
            array=s.substring(1,s.length-1).split(", ");
            return [array.slice(0,4), array.slice(4,8), array.slice(8,12), array.slice(12,16)];
        }

//matrix multiplication
        function multiply(a, b) {
            var aNumRows = a.length, aNumCols = a[0].length,
                bNumRows = b.length, bNumCols = b[0].length,
                m = new Array(aNumRows);  // initialize array of rows
            for (var r = 0; r < aNumRows; ++r) {
                m[r] = new Array(bNumCols); // initialize the current row
                for (var c = 0; c < bNumCols; ++c) {
                    m[r][c] = 0;             // initialize the current cell
                    for (var i = 0; i < aNumCols; ++i) {
                        m[r][c] += a[r][i] * b[i][c];
                    }
                }
            }
            return m;
        }
    }

    subject();

    function most() {
       if(winW>700){
           var most = new Swiper('.most-swiper',{
               effect : 'flip',
               flipEffect: {
                   slideShadows : false,
                   limitRotation : true,
               },
               on: {
                   transitionStart: function () {
                       $('.swiper-arr').hide();
                   },
                   transitionEnd: function(){
                       $('.swiper-arr').show();
                   },
               }
           });
       }else{
           var most = new Swiper('.most-swiper',{
               on: {
                   transitionStart: function () {
                       $('.swiper-arr').hide();
                   },
                   transitionEnd: function(){
                       $('.swiper-arr').show();
                   },
               }
           });
       }
        var most_swiper = new Swiper('.most-swiper-2', {
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });

        $('.choose-most-read').on('click',function () {
            most.slideTo(0, 1000, false);
            $(this).addClass('current');
            $('.most-read-choose>div').not(this).removeClass('current');
            most_swiper
        })
        $('.choose-most-com').on('click',function () {
            most.slideTo(1, 1000, false);
            $(this).addClass('current');
            $('.most-read-choose>div').not(this).removeClass('current');
        })

        $('.most-read-choose').height($('.most-read').height())
    }

    most();

    function end() {
        $('.end-items-swiper').each(function () {
            var box = $(this).find('.grid-box');
            if(winW>700){
                box.each(function (i) {
                    box.slice(i * 3, i * 3 + 3).wrapAll('<div class="swiper-slide"><div class="grid"><div class="grid-warp"></div></div></div>')
                });
            }else{
                box.each(function (i) {
                    $(this).wrapAll('<div class="swiper-slide"><div class="grid"><div class="grid-warp"></div></div></div>')
                });
            }
        });
        var end_items_swiper = new Swiper('.end-items-swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
        });
    }
    end();

    function topswiper() {
        var topswiper = new Swiper('.top-swiper-container', {
            effect : 'flip',
            autoHeight: true,
            flipEffect: {
                slideShadows : false,
                limitRotation : true,
            },
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
            on:{
                slideChange: function(){
                    var imgbg = this.slides.eq(this.activeIndex).attr('data-bg');
                    var bgvideo = this.slides.eq(this.activeIndex).attr('data-video');
                    if(bgvideo){
                        $('.swiper-bg').html('<video src="'+ bgvideo +'" muted loop autoplay></video>')
                    }else{
                        $('.swiper-bg').css('background-image','url("'+ imgbg +'")');
                    }
                },
            },
        });
        var bgImg = $('.top-swiper-container .swiper-wrapper .swiper-slide:first-child').attr('data-bg');
        var bgVideo = $('.top-swiper-container .swiper-wrapper .swiper-slide:first-child').attr('data-video');
        if(bgVideo){
            $('.swiper-bg').html('<video src="'+ bgVideo +'" muted loop autoplay></video>');
        }else{
            $('.swiper-bg').css('background-image','url("'+ bgImg +'")');
        }

        var topvideo= new Swiper('.top-video-container', {
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })


    }

    topswiper();

    function sub() {
        var bgs = $('.current-subject-box .box-img img').attr('src');
        $('.subject-bg').css('background-image','url("'+ bgs +'")');
    }

    sub();

    function art_page() {

        aSticky = new hcSticky('.page-content-art-left', {
            stickTo: '.page-content-art',
            top:100,
            responsive: {
                980: {
                    disable: true
                }
            }
        });

        $('#canvas-art canvas').on('click',function () {
            $('#canvas-art').addClass('show');
            $('body').addClass('show-hide-box')
        })

        $('.canvas-art-close').on('click',function () {
            $('#canvas-art').removeClass('show');
            $('body').removeClass('show-hide-box')
        })
    }
    art_page();


    function single() {
       if(winW > 700){
           var $st = $('.share-post');
           $st.hcSticky({
               top:winH - (32*4) - 100,
               stickTo: '.post-page-content',
           });

           var $lp = $('.post-box-link');
           $lp.hcSticky({
               top:winH - (32*2) - 100,
               stickTo: '.post-page-content',
           });

           var $si = $('.shop-post-info');
           $si.hcSticky({
               top:100,
               stickTo: '.shop-post-content-warp',
           });
       }

        var post_swiper_nside = new Swiper('.post-swiper-inside', {
            autoHeight:true,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var post_swiper_nside_3d = new Swiper('.post-swiper-inside-td', {
            autoHeight:true,
            slidesPerView: 3,
            effect : 'coverflow',
            centeredSlides: false,
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows : false
            },
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var post_swiper_nside_f = new Swiper('.post-swiper-inside-flip', {
            effect : 'flip',
            flipEffect: {
                slideShadows : false,
                limitRotation : false,
            },
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var post_swiper_nside_cube = new Swiper('.post-swiper-inside-cube', {
            effect : 'cube',
            cubeEffect: {
                slideShadows: false,
                shadow: false,
                shadowOffset: 100,
                shadowScale: 0.6
            },
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        $('.video-pic').click(function () {
            $(this).hide();
            $(this).parent('.post-content-video').find('video').trigger('play');
        });
        $('.post-content-video').each(function () {
            var vw = $(this).width();
            var s = $(this).attr('data-size');
            if(s === 'z'){
                var ss = 4/3;
            }else{
                var ss = 16/9;
            }
            var vh = Math.floor((vw/ss) + 100);
            $(this).find('.post-content-video-if').height(vh);
        })

        $('.post-content-music-wy').each(function () {
            var mw = $(this).width();
            var ow = $(this).find('iframe').attr('width');
            var oh = $(this).find('iframe').attr('height');
            if(oh>86){
                var s= ow/oh;
                var hh = mw/s;
                $(this).find('iframe').height(hh);
            }

        })

        $('.inside-grid').each(function () {
            var box = $(this).find('.grid-box');
            if(box.length == '1'){
                box.css('width','100%').css('padding',0);
            }else if(box.length == '2'){
                box.css('width','50%').css('padding','1.5rem')
            }
        })



    }
    single();

    function tagcloud() {
        $('.tag-clouds ul').isotope({
            itemSelector: 'li',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: 1
            }
        });
    }
   if(winW > 700){
       tagcloud();
   }



    function d() {
        $('body').on('mousemove', function (e) {
            var XRel = e.pageX;
            $('.dimension-current-img').css('width', XRel+'px');
            $('.d-line').css('left', XRel+'px');
        })

        $('.dimension-grid .yuan').each(function () {
            var t = getRandom(0,70)
            var l = getRandom(-20,100)
            $(this).css('top',t+'%').css('left',l+'%')
        })

    }

    d();

    function m() {
        // for (var i = 0; i < 300; i++) {
        //     $('#brickwall').append('<span ><div class="z"></div></span>');
        // }
        //
        // $('#brickwall').each(function () {
        //     var box = $(this).find("span");
        //     box.each(function (i) {
        //         box.slice(i*20,i*20+20).wrapAll('<div class="row"></div>');
        //     });
        // });
        //
        //
        // $('body').mousemove(function (e) {
        //     var xx = e.pageX;
        //     var yy = e.pageY;
        //     var xg = Math.floor((xx / winW)*20);
        //     var yg = Math.floor((yy / winH)*10);
        //     var aa = getRandom(-50,50);
        //   $('#brickwall .row').eq(yg).find('span').eq(xg).find('.z').css('transform', 'translateY('+winH+'px) rotate('+ aa+'deg)').css('z-index','99').addClass('luo')
        //
        // })
        //
        // $('#brickwall').each(function () {
        //     var nn = getRandom(5,200);
        //     for (var i = 0; i < nn; i++) {
        //         var xx = getRandom(21,200);
        //       $('#brickwall span').eq(xx).find('.z').hide();
        //     }
        // })
        // var color = Array("#00cf35","#cf8800","#00cfcd","#aa3333");
        // var colors = color[Math.floor(Math.random()*color.length)];
        // $('.music-current,.music-current-grid .grid-box .box-content,.music-bg').css({'background': ' linear-gradient(to bottom, '+ colors +' 0%,#ffffff 100%'});



        var mwz = new Swiper('.music-wz-current-swiper',{
            virtualTranslate : true,
            pagination: {
                el: '.swiper-music-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });

        var mpd = new Swiper('.music-podcast-current-swiper');

        var mwz = new Swiper('.music-video-current-swiper',{
            pagination: {
                el: '.swiper-music-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });

        var mpl = new Swiper('.playlist-swiper',{
            direction : 'vertical',
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            // on: {
            //     init: function(){
            //         this.translateTo(-280, 300, true, false);
            //     },
            // },
        });

        var aSticky = new hcSticky('.music-small-nav', {
            stickTo: '#music-post-content',
            top:100,
            responsive: {
                980: {
                    disable: true
                }
            }
        });

        $('.music-playlist-wz-swiper').each(function () {
            var box = $(this).find('.grid-box');
            box.each(function (i) {
                box.slice(i * 2, i * 2 + 2).wrapAll('<div class="swiper-slide"></div>')
            });
        });

        $('.music-small-nav li a').each(function () {
            $(this).find('b').prependTo($(this));
        })

        var ml = new Swiper('.music-playlist-wz-swiper',{
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        })

        $('.where').click(function () {
            $('.choose').toggleClass('show');
        })

        $('.event-list li .d').click(function () {
            $(this).parents('li').toggleClass('show');
        })

        $('.event-list li .close-it').click(function () {
            $(this).parents('li').removeClass('show');
        })



    }

    m();


    function mobile() {
        $('.open-phone-menu').click(function () {
            if($(this).hasClass('open')){
                $(this).text('关闭')
                $(this).addClass('closed').removeClass('open')
            }else{
                $(this).text('目录')
                $(this).addClass('open').removeClass('closed')
            }
            $('.phone-menu-content').slideToggle();
        })

        var mtp = new Swiper('.phone-home-top',{
            pagination :{
                el: '.swiper-pagination',
                clickable :true,
            }
        })


        var phs = new Swiper('.phone-home-selection',{
            slidesPerView:'auto',
            centeredSlides : true,
            pagination :{
                el: '.swiper-pagination',
                clickable :true,
            }
        })

        $('#phone-home-selection').each(function () {
            $(".home-grid .grid-box").eq(5).after(this);
        });

        $('.icon-wechat').click(function (e) {
            e.preventDefault();
        })

    }

    mobile();

    var tt = $('.wpuf-message').text()

    if(tt.indexOf("注销") >= 0){
         $('.wpuf-message').text('您已退出')
    }

   function co() {

        $('.wpuf-submit-button').click(function () {
            var name = $('.ue-name').find('input').val();
            var mail = $('.ue-mail').find('input').val();
            var info = $('.ue-info').find('textarea').val();

            var qq = $('.ue-qq').find('input').val();
            var weibo = $('.ue-weibo').find('input').val();
            var wechat = $('.ue-wechat').find('input').val();
            var instagram = $('.ue-ins').find('input').val();

            $.cookie('ue-name', name, { expires:365, path: '/' });
            $.cookie('ue-mail', mail, { expires:365, path: '/' });
            $.cookie('ue-info', info, { expires:365, path: '/' });

            $.cookie('ue-qq', qq, { expires:365, path: '/' });
            $.cookie('ue-weibo', weibo, { expires:365, path: '/' });
            $.cookie('ue-wechat', wechat, { expires:365, path: '/' });
            $.cookie('ue-ins', instagram, { expires:365, path: '/' });
        })

       var ue_name = $.cookie('ue-name');
       var ue_mail = $.cookie('ue-mail');
       var ue_info = $.cookie('ue-info');
       var ue_qq = $.cookie('ue-qq');
       var ue_weibo = $.cookie('ue-weibo');
       var ue_wechat = $.cookie('ue-wechat');
       var ue_ins = $.cookie('ue-ins');

       $('.page-template-template-page-tg-page .ue-name').find('input').val(ue_name);
       $('.page-template-template-page-tg-page .ue-info').find('textarea').val(ue_info);
       $('.page-template-template-page-tg-page .ue-mail').find('input').val(ue_mail);
       $('.page-template-template-page-tg-page .ue-qq').find('input').val(ue_qq);
       $('.page-template-template-page-tg-page .ue-weibo').find('input').val(ue_weibo);
       $('.page-template-template-page-tg-page .ue-wechat').find('input').val(ue_wechat);
       $('.page-template-template-page-tg-page .ue-ins').find('input').val(ue_ins);

       $('.frm_save_draft').text('保存草稿')

    }

    co();





})