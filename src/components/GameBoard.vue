<template>
	<div id="board-canvas">
		<div id="game-board">
			<GamePiece v-for="gamePiece in gamePieces" :key="gamePiece.uuid" :uuid="gamePiece.uuid" :type="gamePiece.type" :left="gamePiece.left" :top="gamePiece.top"></GamePiece>

			<Hand type="peers"></Hand>
			<Hand type="owner"></Hand>
		</div>
	</div>
</template>

<script>
import GamePiece from '@/components/GamePiece'
import Hand from '@/components/Hand'

export default {
  name: 'GameBoard',
  components: { GamePiece, Hand },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      gamePieces: [
				{uuid: 'asdf', type: 'house', top: 100, left: 100}, 
				{uuid: 'qwer', type: 'house', top: 200, left: 200}, 
				{uuid: 'zxcv', type: 'house', top: 300, left: 300}, 
				{uuid: 'zxc1', type: 'house', top: 300, left: 300}, 
				{uuid: 'zxc2', type: 'house', top: 300, left: 300}, 
				{uuid: 'zxc3', type: 'house', top: 300, left: 300}, 
				{uuid: 'zxc4', type: 'house', top: 300, left: 300}, 
			]
    }
  }, 
	mounted () {
		Event.$on('game-piece-dropped', ({on, uuid, classList, top, left}) => {
			console.log(['on:game-piece-dropped', {on, uuid, classList, top, left}])
		});
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#board-canvas {
	position: relative;
	width: 100%;
	padding: 30px;
}
#game-board {
	position: relative;
	margin: 0 auto; 
  background-image: url("../assets/monopoly-board-72.jpg");
	width: 1200px;
	height: 1206px;
	background-repeat: no-repeat;
	background-size: 90%;
  background-position: center;
}
</style>
