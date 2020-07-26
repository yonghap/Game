<template>
	<div id="app">
		<div id="nav">
			<router-link to="/home">Home</router-link>
			|
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss">
	* {
		margin:0;
		padding:0;
	}
	#nav {
		display:none
	}
</style>
