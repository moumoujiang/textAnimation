$(function(){
    //爱心特效
    function hearts() {
        if($(".text-hearts")){
            $.each($(".text-hearts"), function(){
                var heartcount = ($(this).width()/50)*5;
                for(var i = 0; i <= heartcount; i++) {
                    var size = (rnd(60,120)/10);
                    var html = `<span class="particle"
                                        style="top:` +rnd(20,80) + `%;
                                        left:` + rnd(0,95) + `%;
                                        width:` + size + `px;
                                        height:` + size + `px;
                                        animation-delay: ` +
                        (rnd(0,30)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    //气泡特效
    function bubbles() {
        if($(".text-bubbles")){
            $.each($(".text-bubbles"), function(){
                var bubblecount = ($(this).width()/50)*10;
                for(var i = 0; i <= bubblecount; i++) {
                    var size = (rnd(40,80)/10);
                    var html = `<span class="particle"
                                        style="top:` +rnd(20,80) + `%;
                                        left:` + rnd(0,95) + `%;
                                        width:` + size + `px;
                                        height:` + size + `px;
                                        animation-delay: ` +
                        (rnd(0,30)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    //音乐线条特效
    function lines() {
        if($(".text-lines")){
            $.each($(".text-lines"), function(){
                var w = $(this).width();
                var h = $(this).height();
                var linecount = (w/50)*10;
                for(var i = 0; i <= linecount; i++) {
                    var html = `<span class="particle"
                                        style="top:` +rnd(-30,30) + `%;
                                        left:` + rnd(2,102) + `%;
                                        width:` + rnd(1,3) + `px;
                                        height:` + rnd(h/4,h) + `px;
                                        animation-delay: ` +
                        (rnd(0,30)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    //节日彩带特效
    function confetti() {
        if($(".text-confetti")){
            $.each($(".text-confetti"), function(){
                var confetticount = ($(this).width()/50)*12;
                for(var i = 0; i <= confetticount; i++) {
                    var html = `<span class="particle c` +rnd(2,8) + `"
                                        style="top:` +rnd(-10,50) + `%;
                                        left:` + rnd(-5,105) + `%;
                                        width:` + rnd(6,8) + `px;
                                        height:` + rnd(3,4) + `px;
                                        animation-delay: ` +
                        (rnd(0,30)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    //火焰特效
    function fire() {
        if($(".text-fire")){
            $.each($(".text-fire"), function(){
                var firecount = ($(this).width()/50)*20;
                for(var i = 0; i <= firecount; i++) {
                    var size = rnd(8,12);
                    var html = `<span class="particle"
                                        style="top:` +rnd(60,80) + `%;
                                        left:` + rnd(0,95) + `%;
                                        width:` + size + `px;
                                        height:` + size + `px;
                                        animation-delay: ` +
                        (rnd(0,20)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    //线条炫光特效
    function sunbeams() {
        if($(".text-sunbeams")){
            $.each($(".text-sunbeams"), function(){
                var w = $(this).width();
                var h = $(this).height();
                var linecount = (w/50)*5;
                for(var i = 0; i <= linecount; i++) {
                    var html = `<span class="particle c` +rnd(2,8) + `"
                                        style="top:` +rnd(-50,0) + `%;
                                        left:` + rnd(0,100) + `%;
                                        width:` + rnd(1,3) + `px;
                                        height:` + rnd(h,1.5*h) + `px;
                                        animation-delay: ` +
                        (rnd(0,30)/10) + `s;"></span>`;
                    $(this).append(html);
                }
            });
        }
    }
    hearts();
    bubbles();
    lines();
    confetti();
    fire();
    sunbeams();
   //随机数函数
    function rnd(m,n){
        return Math.floor(Math.random()*(n-m)+m);
    }
})