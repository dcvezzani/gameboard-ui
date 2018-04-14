<template>
  <div id="app">
    <!-- img src="./assets/logo.png" -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App', 
	mounted () {
		$( "body" ).droppable({
			drop: function( event, ui ) {
				// console.log(['droppable', 'something was dropped on canvas', ui.draggable[0].id, ui.draggable[0].classList, ui.draggable[0].innerText, ui.offset ]);
				let classList = _.filter(ui.draggable[0].classList, entry => (typeof entry === 'string'));
				let positions = ui.offset;
				let uuid = ui.draggable[0].id;
				Event.$emit('game-piece-dropped', {on: 'body', uuid, classList, ...positions});

				/* $( this ) */
				/*   .addClass( "ui-state-highlight" ) */
				/*   .find( "p" ) */
				/*     .html( "Dropped!" ); */
			}
		});

		$( document ).on( "keydown", function( event ) {
			switch( event.keyCode ) {
				case $.ui.keyCode.LEFT:
					console.log( "left" );
					break;
				case $.ui.keyCode.RIGHT:
					console.log( "right" );
					break;
				case $.ui.keyCode.UP:
					console.log( "up" );
					break;
				case $.ui.keyCode.DOWN:
					console.log( "down" );
					break;
			}
			switch( event.key ) {
				case 'h':
					Event.$emit('toggle-hands')
					break;
				case 'H':
					Event.$emit('hide-hands')
					break;
			// 	default:
			// 		console.log( event.key );
			// 		break;
			}
		});
				
	},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px;
  position: relative;
}
</style>
