<template>
  <div :id="uuid" :class="['game-piece', 'draggable']">
  </div>
</template>

<script>
export default {
  name: 'GamePiece',
  props: [ 'uuid', 'type', 'left', 'top' ], 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
	computed: {
		leftPx() { return `${this.left}px`; }, 
		topPx() { return `${this.top}px`; }, 
	},
	mounted () {
		$( `#${this.uuid}` ).css({left: this.leftPx, top: this.topPx, position: 'absolute'});
		$( `#${this.uuid}` ).draggable({ containment: "#app", zIndex: 100 });
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
.draggable {
	height: 30px; 
	width: 30px; 
	border: 1px solid black; 
	background-color: white;
	position: absolute;
}
</style>
