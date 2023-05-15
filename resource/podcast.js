$(document).ready(function () {

$('.p-nub').slabText();

    $('.podcast-player-bie').each(function (i) {
        $(this).find('.jquery_jplayer').attr('id','jquery_jplayer_'+i);
        $(this).find('.jp_container').attr('id','jp_container_'+i);
    });
    $('.podcast-player-z').each(function (i) {
        $(this).find('.jquery_jplayer').attr('id','jquery_jplayer_z_'+i);
        $(this).find('.jp_container').attr('id','jp_container_z_'+i);
    });
    $('.podcast-player-y').each(function (i) {
        $(this).find('.jquery_jplayer').attr('id','jquery_jplayer_y_'+i);
        $(this).find('.jp_container').attr('id','jp_container_y_'+i);
        $(this).height($(this).width())
    });
    $('.podcast-player-bie').each(function () {
        var id = $(this).find('.jquery_jplayer').attr('id');
        var cssid = $(this).find('.jp_container').attr('id');
        var cssidon = '#'+cssid;
        var player = $('#'+id);
        var m = $(this).attr('data-mp3');
        var bar = $(this).find('.bar');
        var bar_choose = $(this).find('.bar-choose');
        var progress = $(this).find('.progress');
        var current = $(this).find('.timer span');
        var jia = $(this).find('.volume-jia');
        var jian = $(this).find('.volume-jian');
        var val = $(this).find('.volume-val span');
        var v = 0.5;

        player.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: m,
                });

            },
            timeupdate: function (event) {
                var nn = event.jPlayer.status.currentPercentAbsolute;
                progress.css('width',100-nn + "%");
                current.text($.jPlayer.convertTime(event.jPlayer.status.currentTime))
            },
            play: function (event) {
                $(this).jPlayer("pauseOthers");
                bar.mousemove(function (e) {
                    var status = event.jPlayer.status;
                    var xxx = $(this).offset().left;
                    var w = $(this).width();
                    var xx = e.clientX;
                    var x = xx-xxx;
                    var t = status.duration;
                    var r = (x/w) * t;
                    bar_choose.text($.jPlayer.convertTime(r)).css('left',x+'px');
                })
            },
            pause: function (event) {

            },
            ended: function (event) {

            },
            volume: 0.5,
            swfPath: "jplayer",
            cssSelectorAncestor:cssidon,
            supplied: "mp3",
            wmode: "window"
        });

        jia.click(function () {
            v = v+0.1;
            if(v>=1){
                v=1.0;
            }
            val.text(v.toFixed(1));
            player.jPlayer("volume", v);
        })
        jian.click(function () {
            v = v-0.1;
            if(v<=0){
                v=0.0;
            }
            val.text(v.toFixed(1));
            player.jPlayer("volume", v);
        })

    })

    $('.podcast-player-z').each(function () {
        var id = $(this).find('.jquery_jplayer').attr('id');
        var cssid = $(this).find('.jp_container').attr('id');
        var cssidon = '#'+cssid;
        var player = $('#'+id);
        var m = $(this).attr('data-mp3');
        var bar = $(this).find('.bar-z');
        var bar_choose = $(this).find('.bar-choose-z');
        var progress = $(this).find('.progress-z');
        var current = $(this).find('.player-z-nub-c span');
        var d = $(this).find('.player-z-nub-d span');

        player.jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: m,
                });
            },
            canplay: function(){
                d.text($.jPlayer.convertTime($(this).data("jPlayer").status.duration))
            },
            timeupdate: function (event) {
                var nn = event.jPlayer.status.currentPercentAbsolute;
                progress.css('width',100-nn + "%");
                current.text($.jPlayer.convertTime(event.jPlayer.status.currentTime))
            },
            play: function (event) {
                $(this).jPlayer("pauseOthers");
                bar.mousemove(function (e) {
                    var status = event.jPlayer.status;
                    var xxx = $(this).offset().left;
                    var w = $(this).width();
                    var xx = e.clientX;
                    var x = xx-xxx;
                    var t = status.duration;
                    var r = (x/w) * t;
                    bar_choose.text($.jPlayer.convertTime(r)).css('left',x+'px');
                })

            },
            pause: function (event) {

            },
            ended: function (event) {

            },
            volume: 0.5,
            swfPath: "jplayer",
            cssSelectorAncestor:cssidon,
            supplied: "mp3",
            wmode: "window"
        });

        var color = Array("#00cf35","#cf7f00","#cf7f00","#cf0000","#007acf","#cceaff","#ccffd0","#fdffcc","#ffcccc");

        var colors = color[Math.floor(Math.random()*color.length)];
        bar.css('background',colors);

    })

    $('.podcast-player-y').each(function () {
        var id = $(this).find('.jquery_jplayer').attr('id');
        var cssid = $(this).find('.jp_container').attr('id');
        var cssidon = '#'+cssid;
        var m = $(this).attr('data-mp3');
        var yy = $(this).find('.cp-progress-1');
        var yy1 =$(this).find('.cp-progress-holder');
        var yy2 = $(this).find('.cp-progress-2')
        var w = $(this).width();
        yy2.attr('style','clip: rect(0px,'+ w/2 +'px,'+ w +'px,0px);')
        yy.attr('style','clip: rect(0px,'+ w/2 +'px,'+ w +'px,0px);')
        yy1.attr('style','clip: rect(0px,'+ w +'px,'+ w +'px,'+ w/2 +'px);')
        var Player = new CirclePlayer("#"+id,
            {
                m4a: m,
            }, {
                cssSelectorAncestor: cssidon,
                swfPath: "../../dist/jplayer",
                wmode: "window",
                keyEnabled: true
            });

    })


});