<template>
	<footer id="footer" class="footer">
		<div class="row">
			Copyright 2020@
		</div>
	</footer>
</template>
<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.footer {
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		padding:10px 0;
		background::rgba(0,0,0,.3);
		font-size:.7rem;
		text-align:center;
		color:$textColor;
	}
</style>