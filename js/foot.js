$(document).mousemove(function(e){
    $('.red-ball').css("top", e.pageY);
    $('.red-ball').css("left", e.pageX);
 });
 $(document).ready(function() {//실행틀 시작
    var menu = $(".plus");
      var content = $("#back2");
      
      menu.click(function(){
          /*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
  별도의 브라우저 행동을 막기 위해 사용됩니다.*/
          event.preventDefault();
          
          //사용자가 클릭한 li
          var tg = $(this);
          //순서값을 찾는 함수 index()
          var idx = tg.index();
          //선택한 li와 순서가 같은 content 를 찾음 eq()
          var section = content.eq(idx);
          //선택된 영역의 top 의 좌표값을 저장
          //.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
          var tt = section.offset().top;
  
          //스크롤이 tt의 값에 맞게 움직이게
          $("html,body").stop().animate({scrollTop:tt});
  /*menu.click() 끝*/        })
})
