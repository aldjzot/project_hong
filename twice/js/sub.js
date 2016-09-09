/*functionStart*/
/*메뉴바 슬라이드*/
       
    $(function(){    
        $('.nav button').click(function(){
        $(this).next('ul').slideToggle(500)
                })
                $(window).resize(function(){
                    if($(this).width() < 800){
                        $('.nav ul').css('display','none')
                    }else if($(this).width() > 779){
                        $('.nav ul').css('display','block')
                    }
                });        
            })
/*functionEnd*/            