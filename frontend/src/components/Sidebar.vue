<template>
	<nav id="sidebar" class="sidebar">
		<div class="sidebar__item">
			<h3 class="sidebar__title">게임</h3>
			<ul class="sidebar__list">
				<li><button type="button" @click="getCategory('-rating')">인기 제품</button></li>
				<li><button type="button" @click="getCategory('created')">신규 출시</button></li>
			</ul>
		</div>
		<div class="sidever__item">
			<h3 class="sidebar__title">장르</h3>
			<ul class="sidebar__list">
				<li><a href="#">대규모 멀티플레이어</a></li>
				<li><a href="#">롤플레잉</a></li>
				<li><a href="#">FPS</a></li>
				<li><a href="#">시뮬레이션</a></li>
				<li><a href="#">레이싱</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				type : '-rating'
			}
		},
		mounted() {
			this.getCategory(this.type);
		},
		methods : {
			getCategory(type) {
				this.type = type;
				this.$emit('getCategory',this.type)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.sidebar {
		position:absolute;
		top:0;
		left:0;
		&__item {
			margin-bottom:30px;
		}
		&__title {
			margin-bottom:5px;
			font-size:1.25rem;
			font-weight:400;
			color:$titleColor;
		}
		a, button {
			padding:0 15px;
			border:none;
			outline:none;
			font-family:'NEXON Gothic';
			font-size:1.01rem;
			color:$textColor;
			line-height:1.8;
			cursor:pointer;
			&:hover {
				color:$highlightColor;
			}
		}
	}
</style>