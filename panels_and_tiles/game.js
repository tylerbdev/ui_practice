 $(function() {
$( ".drag-tile" ).draggable();
$( "#drop-area" ).droppable({
drop: function( event, ui ) {
$( this )
.addClass( "ui-state-highlight" )
.find( "p" )
.html( "Dropped!" );
}
});
});