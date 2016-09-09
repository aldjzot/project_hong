/*functionStart*/

$(function(){

            /*메뉴바 슬라이드*/

            $(function(){
                $('.wrapper').fadeIn(100) 
                $('.nav button').click(function(){
                $(this).next('ul').slideToggle(300)
                        })
                        $(window).resize(function(){
                            if($(this).width() < 800){
                                $('.nav ul').css('display','none')
                            }else if($(this).width() > 779){
                                $('.nav ul').css('display','block')
                            }
                        });
                
            /*섬네일 이미지 효과*/
            
             $('.thumbnails_wrapper .content > li a').click(function(){
                 $(this).parent('li').addClass('on').siblings().removeClass('on');
                 $('img').fadeIn(100);
                      var url = $(this).attr('href')
                        $(this).children('img')
                             $('.wrapper').fadeOut(100,function(){
                                 $(this).css({
                                     'background-image':'url('+url+')'
                                 }).fadeIn(300)
                             });
                                return false;
                                    });
                                });
            
            /*슬라이드배너*/
        
            $('.wrapper .bgpf .nextImageBtn').click(function(){
                var idx = $('.content .on').index();
                if(idx != 8){
                    $('.content li').eq(idx + 1).children('a').click();
                }else if(idx == 8){
                    $('.content li').eq(0).children('a').click();
                }
                
                
            })
            
            $('.wrapper .bgpf .prevImageBtn').click(function() {
                var idx = $('.content .on').index();
                if(idx != 0){
                    $('.content li').eq(idx - 1).children('a').click();
                }else if(idx == 0){
                    $('.content li').eq(8).children('a').click();
                }
                
                
            })
       
})
/*functionEnd*/