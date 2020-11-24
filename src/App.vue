<template>
	<div id="app">
		<top-nav />

		<router-view />
	</div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
export default {
	name: "Home",
	components: {
		TopNav,
	},
};
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
* {
	margin: 0;
	padding: 0;
}
body {
	background-color: #fafafa;
}

.container {
	width: 100%;
	max-width: 1200px;
	margin: 0px auto;
	padding-left: 20px;
	padding-right: 20px;
	box-sizing: border-box;
}
</style>
