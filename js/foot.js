$(document).mousemove(function(e){
    $('.red-ball').css("top", e.pageY);
    $('.red-ball').css("left", e.pageX);
    
    $(function(){
        $('#pop_bt').click(function(e) {
        	e.stopPropagation();
            $('#pop').show(); 
        })  
        $(document).click(function(){
            $('#pop').hide(); 
        })
     })
     $(function(){
        $('#pop_bt2').click(function(e) {
        	e.stopPropagation();
            $('#pop2').show(); 
        })  
        $(document).click(function(){
            $('#pop2').hide(); 
        })
     })

 });


