$(function(){
    $('li').on('click',function(){        
        var $panel = $('li.active').attr('data-rel');
        // if($(this).attr('data-rel')==$panel){
        //     return;
        // }
        $('ul').find('li.active').removeClass('active');
        $(this).addClass('active');
        var $j = $(this).attr('data-rel');
        $('#'+$panel).slideUp(300,afterShow);

        function afterShow() {
            $(this).removeClass('present');
           $('#'+$j).slideDown(300,function(){
              $(this).addClass('present');
          });
            
        }
       
        
        
    })
})