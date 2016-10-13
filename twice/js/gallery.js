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
                        });    

        
    
/*images-popupStart*/

    $(document).ready(function(){
    
        $('.photo > li > a').click(function(){
            $('html, body').animate({
                'scrollTop':0
            },0)
    
            var imgAttr = $(this).parent().index()+1;
    
            var blind = $(function(){
                var bl_Tag = "";
                    bl_Tag += '<div class="blind">';
                    bl_Tag += '</div>';
    
                $('body').prepend(bl_Tag);
    
                $('.blind').css({
                    display:'block'
                }).show(0,1);
                centerPosition($('.popup'))
    
                $('.popup').show(100);
            })
    
            var imgidx = "../images/bic_pic/bic_pic_"+ imgAttr +".jpg";
    
            $('.popup_content .img').css({
                background:'rgba(0,0,0,0) url(' + imgidx+ ') no-repeat center center',
                backgroundSize:'contain'
            })
    
        });

    function centerPosition(target){

        target.css({
            left:'50%',
            marginLeft:function(){
                var aa = $('.popup').css('width');
                return -parseInt(aa)/2+'px';
            },
            top:'50%',
            marginTop:function(){
                var bb = $('.popup').css('height');
                return -parseInt(bb)/2 + 'px';
            }
        });
    }

    var closeEvent = function(){

        $('.popup').hide(100);
        $('.blind').hide(0,function(){
            $(this).remove();
        });
    };

    $('.close_btn').click(function(){
        closeEvent();
    })
    $('.img').click(function(){
        closeEvent();
    })


});
/*images-popupEnd*/
});
/*functionEnd*/