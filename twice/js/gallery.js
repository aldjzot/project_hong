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

$(function(){
      //장막이벤트내용
       
        
        function popMaker(id){              //popMaker(id)를 실행해라
            
            var contents = $('.'+id).html();    //contents 안에 클래스와 아이디가 있는 html를 추가또는 변경할수있다.

            var tag = "";       //"" 안에 있는 태그라는 변수
            tag+='<div class="popup '+id+'">';
            tag+='<button class="closebtn">닫기</button>';
            tag+='<div class="content">';
           
            tag+='</div>';
            tag+='</div>';
            
            $('body').append(tag);
            $
            $('body').children('.popup').children('contents').append('text.html pop1')
            
            centerPosition($('.'+id));
        }
        
       
   function blindFn(){
       var bl_Tag = "";
       
       bl_Tag += '<div class="blind">';
       bl_Tag += '</div>';
       
       $('body').prepend(bl_Tag);
       
       //장막생성 스타일
       $('.blind').css({
           position:'absolute',
           backgroundColor:'#000',
           left:0,
           right:0,
           top:0,
           bottom:0,
           display:'none'
       }).fadeTo(1000,0.5);
   }
   
   function centerPosition(target){
           target.css({
               left:"50%",
               marginLeft:function(){
                   
                   var aa = $(this).css('width');
                   return -parseInt(aa)/2 + 'px';
                   
               },
               top:"50%",
               marginTop:function(){
                   
                   var aa = $(this).css('height');
                   return -parseInt(aa)/2 + 'px';
                   
               }
           })
           
       }
       
       //닫기
        var closeEvent = function(){
            //$('.blind').remove();
            $('.popup').fadeOut(1000,function(){
                $(this).remove()
            })
            $('.blind').fadeOut(1000,function(){
                $(this).remove()
            })
        }
       
       var openPopUp = function(){
           var id = $(this).attr('id');
           blindFn(); // 막생성
           popMaker(id); // 팝생성 //팝위치
           $('.popup').show(1000); //보여주기
        }
        
     
       
       //클릭이벤트 장막
        $('.open').click(openPopUp);
        
        $('body').on('click','.closebtn',closeEvent);
     });

/*images-popupEnd*/
});
/*functionEnd*/