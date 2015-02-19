 $(function() { 


  $('[id*=del]').click(function(e) {
    deleted_tile = '#' + e.target['id'].substr(0, (e.target['id'].length)-4);
    reverted_left = $(deleted_tile).attr('data-orig-left');
    reverted_top = $(deleted_tile).attr('data-orig-top');
    $( deleted_tile ).offset({ top: reverted_top, left: reverted_left });
    $(deleted_tile).draggable( "enable" );
    $(deleted_tile + '-del').attr('style', 'display:none');

      
    
    
  });


  $( ".drag-tile" ).draggable({
    revert: "invalid",
    snap: ".drop-area",
    snapMode: "inner",
    snapTolerance:"1px",

    start: function( event, ui ){

      orig_pos = ui.offset;
      tile_id = ui.helper.attr("id");
      $('#' + tile_id).attr('data-orig-left', orig_pos['left']);
      $('#' + tile_id).attr('data-orig-top', orig_pos['top']);

    }
  });
  var last_dropped_id = '';
  // var last_pos = '';
  $( ".drop-area" ).droppable({
       
       tolerance: "touch",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      var valMy = "top";
      var valAt = "top";
      if(last_dropped_id != undefined){
        var last_pos = $(last_dropped_id).position();
        
        
        if(last_pos != undefined){
         
           
        valAt+= "+" + last_pos.top;
        } 
        
       

      }
      var $this = $(this);
    
      ui.draggable.position({
        my: valMy,
        at: valAt,
        of: $this,
        using: function(pos) {
          $(this).animate(pos, 200, "linear");

       },

      });
     
     
        last_dropped_id = '#' + ui.draggable.attr('id');
         $( last_dropped_id).draggable( "disable" );
      
      console.log(last_dropped_id);
    }
       
   

  });
 

});


