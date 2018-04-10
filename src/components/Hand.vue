<template>
  <div :class="classNames">
  </div>
</template>

<script>
export default {
  name: 'Hand',
  props: [ 'type' ],
	computed: {
		classNames() { return ['hand', (this.type === 'owner') ? 'hand-owner' : 'hand-peers'] }, 
		handType() { return (this.type === 'owner') ? ".hand-owner" : ".hand-peers" }, 
		handPos() { return (this.type === 'owner') ? "bottom" : "top" }, 
	},
	methods: {
		hide() { 
			this.transitioning = true;
			let offset = $(this.handType)[0].clientHeight;
			let animateAttrs = {};
			animateAttrs[this.handPos] = `-${offset}px`;
			$(this.handType).animate(animateAttrs, 600, 'easeInOutExpo', () => { this.transitioning = false; });
			this.active = false;
		}, 
		show() { 
			this.transitioning = true;
			let animateAttrs = {};
			animateAttrs[this.handPos] = 0;
			$(this.handType).animate(animateAttrs, 600, 'easeInOutExpo', () => { this.transitioning = false; });
			this.active = true;
		}, 
	},
  mounted () {
		Event.$on('toggle-hands', () => {
			if (this.transitioning === false) {
				(this.active) ? this.hide() : this.show();
			}
		})
		Event.$on('hide-hands', () => {
			if (this.transitioning === false) {
				this.hide();
			}
		})
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      transitioning: false,
      active: true,
    }
  }
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
.hand {
	position: fixed;
	left: 0;
	background-color: white;
	width: 100%;
	height: 40%;
	border-radius: 20px;
}
.hand-owner {
	box-shadow: 0 -12px 24px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	bottom: 0;
}
.hand-peers {
	box-shadow: 0 12px 24px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	top: 0;
}

</style>
