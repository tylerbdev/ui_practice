 $(function() { 


  $('[id*=del]').click(function(e) {
    
    //move tile back over and hide delete button
    deleted_tile = '#' + e.target['id'].substr(0, (e.target['id'].length)-4);
    reverted_left = $(deleted_tile).attr('data-orig-left');
    reverted_top = $(deleted_tile).attr('data-orig-top');
    $( deleted_tile ).offset({ top: reverted_top, left: reverted_left });
    $(deleted_tile).draggable( "enable" );
    $(deleted_tile + '-del').attr('style', 'display:none');
    $(deleted_tile).attr('data-status', 'unselected');

    //clean up remaining tiles
    //get all tiles with offets of [overthere], for tilesthere[count],
    //tilesthere[count].offset-top = 0 + count*[height_of_tile];

    var selected_tiles = $("[id^=choice-]");
       //remove deleted buttons from selected_tiles array
    for(var count = 0; count<selected_tiles.length; count++){
      if ( selected_tiles[count] != undefined && selected_tiles[count]['id'].substr((selected_tiles[count]['id'].length)-4, selected_tiles[count]['id'].length) == '-del'){
        selected_tiles.splice(count, 1);
      } 
      
      if(selected_tiles[count] != undefined && $('#' + selected_tiles[count]['id']).attr('data-status') == 'unselected'){
        selected_tiles.splice(count,1);
      }
    }
    //reposition selected tiles
    for(var count = 0; count<selected_tiles.length; count++){
      var current_id = '#' + selected_tiles[count]['id'];
      var current_offset = $(current_id).offset();
      left_offset = current_offset['left'];
      top_offset = current_offset['top'];
     
      $(current_id).offset({top: (top_offset-93), left: left_offset});

    } 
    
    
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
 
  $( ".drop-area" ).droppable({
       
       tolerance: "touch",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
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


