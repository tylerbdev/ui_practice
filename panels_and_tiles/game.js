 $(function() { 

  //choice id : area id
  var where_is_what = [];

  $('[id*=del]').click(function(e) {
    
    //move tile back over and hide delete button
    deleted_tile = '#' + e.target['id'].substr(0, (e.target['id'].length)-4);
    reverted_left = $(deleted_tile).attr('data-orig-left');
    reverted_top = $(deleted_tile).attr('data-orig-top');
    $( deleted_tile ).offset({ top: reverted_top, left: reverted_left });
    $(deleted_tile).draggable( "enable" );
    $(deleted_tile + '-del').attr('style', 'display:none');
    $(deleted_tile).attr('data-status', 'unselected');
    //reenable droppable area
    $('#' + where_is_what[deleted_tile]).droppable({disabled:false});
      
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
 
  $( "#area-1" ).droppable({
       
       tolerance: "pointer",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
      var valMy = "top";
      var valAt = "top";
    
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
      $this.droppable({
        disabled: true }
        );
     
      where_is_what[last_dropped_id] = $this[0].id;
   
    }
  });
  $( "#area-2" ).droppable({
       
       tolerance: "pointer",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
      var valMy = "top";
      var valAt = "top";
    
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
      $this.droppable({
        disabled: true }
        );
         where_is_what[last_dropped_id] = $this[0].id;
    }
    
    });
   $( "#area-3" ).droppable({
       
       tolerance: "pointer",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
      var valMy = "top";
      var valAt = "top";
    
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
      $this.droppable({
        disabled: true }
        );
         where_is_what[last_dropped_id] = $this[0].id;
    }
    
    });

 $( "#area-4" ).droppable({
       
       tolerance: "pointer",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
      var valMy = "top";
      var valAt = "top";
    
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
      $this.droppable({
        disabled: true }
        );
         where_is_what[last_dropped_id] = $this[0].id;
    }
    
    });

 $( "#area-5" ).droppable({
       
       tolerance: "pointer",
    drop: function( event, ui ) {
      $('#' + ui.draggable.attr('id') + '-del').attr('style', 'display:block');
      $('#' + ui.helper.attr("id")).attr('data-status', 'selected');
      var valMy = "top";
      var valAt = "top";
    
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
      $this.droppable({
        disabled: true }
        );
         where_is_what[last_dropped_id] = $this[0].id;
    }
    
    });


});


