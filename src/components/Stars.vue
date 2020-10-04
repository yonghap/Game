<template>
	<div class="stars">
		<button type="button" class="star" @mousemove="ratingOver">
			<span class="star__bg">
				★★★★★
			</span>
			<span class="star__active">
				★★★★★
			</span>
		</button>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	.star {
		background:none;
		font-size:28px;
		letter-spacing:-.06rem;
		text-align:center;
		line-height:1em;
		outline:none;
		cursor:pointer;
		&__bg {
			color:rgba(255, 255, 255, 0.4);
		}
		&__active {
			overflow:hidden;
			position:absolute;
			top:0;
			left:0;
			width:0;
			color:rgb(255,183,98);
		}
	}
</style>
