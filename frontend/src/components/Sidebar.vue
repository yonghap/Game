<template>
	<nav id="sidebar" class="sidebar">
		<div class="sidebar__item">
			<h3 class="sidebar__title">게임</h3>
			<ul class="sidebar__list">
				<li><a href="#">인기 제품</a></li>
				<li><a href="#">신규 출시</a></li>
				<li><a href="#">발매 예정</a></li>
				<li><a href="#">최근 업데이트</a></li>
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

<style lang="scss" scoped>
	.sidebar {
		position:absolute;
		top:0;
		left:0;
		&__item {
			margin-bottom:20px;
		}
		&__title {
			font-size:1.25rem;
			font-weight:600;
			color:#66C0F4;
		}
		a {
			padding:0 15px;
			font-size:1.01rem;
			color:#66C0F4;
			line-height:1.8;
		}
	}
</style>