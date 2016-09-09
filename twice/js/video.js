    $(function(){ 

/*functionStart*/

/*메뉴바 슬라이드*/
       
   
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
           
/*functionEnd*/   

/*video start*/
            $('.video_list li a').click(function(){
                // console.log('ddddd')
                var url = $(this).attr('href');
                var location ='https://www.youtube.com/embed/'+url+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" class="view" allowfullscreen'    
                $('.movie iframe').attr('src',location);
                    return false; 
            });

/*video End*/            

    });

    
    
    