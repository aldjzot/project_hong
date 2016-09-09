//1번문제 


$(function(){
    
    $('header nav li a').mouseover(function(){
          $(this).parent().css({
              "backgroundColor":"red"

          })
          
          $(this).css({"color":"#fff"})
    });
    
    $('header nav li a').mouseleave(function(){
        $(this).parent().css({
              "backgroundColor":"#ccc"
          })
          
          $(this).css({"color":"#000"})
        
        
    });
    
    
    
// 2번문제

      var bbb = [];  
            $('.content section').each(function(){  
              bbb.push($(this).offset().top) 
              console.log(bbb) 
            })
            
          $('header nav li a').click(function(){ 
                var aa = $(this).parent().index(); 
              console.log(aa)
              
              $('html,body').animate({ 
                  scrollTop:bbb[aa] 
              })
          })
});

//3번문제


    $(function() {
        
        var idx = 0 ;
        var slidewidth = $('.slide').width();
        
        
        $('.next').click(function(){
            
            $('.slidebanner li').eq(idx).children('img').animate({
            left: -slidewidth    
                
            }).parent().next().children('img').css({
                'display':'block',
                left: slidewidth
            }).stop().animate({
                left:'0'
            })
            idx++
            
        })
        
        if(idx == $('.slidebanner li').length){
            
            idx = 0
            $('.slidebanner li').eq(idx).children('img').css({
                'left':slidewidth
            }).parent().prev().children('img').css({
                'display':'block',
                'left':-slidewidth
            }).stop().animate({
                'left':'0'
                
            }).parent().addClass('on').siblings().removeClass('on')
        
        }
        
        
        
        $('.prev').click(function(){
            $('.slidebanner li').eq(idx).children('img').animate({
            left: -slidewidth    
                
            }).parent().prev().children('img').css({
                'display':'block',
                'left':-slidewidth
            }).stop().animate({
                left:'0'
            })
            
            idx--
            
            if(idx < 0)
            
            if(idx = $('.slidebanner li').length-1){
                $('.slidebanner li').eq(idx).children('img').css({
                    'left':-slidewidth,
                    'display':'block'
                }).stop().animate({
                  'left':'0'
                })
                
            }
        })
      
        $('.slidebanner div li a').click(function() {
            
            idx = $(this).parent().index();
            var hisidx = $('.slidebanner div li.on').index()
            
            if(idx > hisidx){
                
            $('slide div li').eq(idx).addClass('on').children('img').css({
                'left':slidewidth,
                'display':'block'
            }).animate({
                left:0
            })                
            
            
            
            
            
            
                
            }
        })
        
    })








































