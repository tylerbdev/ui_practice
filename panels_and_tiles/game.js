 $(function() {
  $( ".drag-tile" ).draggable({
    revert: "invalid",
    snap: ".drop-area",
    snapMode: "inner",
    snapTolerance:"1px",
  });
  var last_dropped_id = '';
  // var last_pos = '';
  $( ".drop-area" ).droppable({
       
       tolerance: "touch",
    drop: function( event, ui ) {

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
          $(this).animate(pos, 400, "linear");

       },

      });
      
     
        last_dropped_id = '#' + ui.draggable.attr('id');
      
      console.log(last_dropped_id);
    }
       
   

  });
 

});


