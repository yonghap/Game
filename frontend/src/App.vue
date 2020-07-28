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
	.blind {
		overflow:hidden;
		position:absolute;
		top:0;
		left:0;
		width:1px;
		height:1px;
		font-size:0;
		line-height:0;
		visibility:hidden;
	}
	#nav {
		display:none
	}
</style>
