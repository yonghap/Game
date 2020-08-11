<template>
	<header id="header" class="header">
		<div class="header__row">
			<h1 class="logo">
				<a href="#">
					<img src="@/assets/images/logo.png" alt="Gameb">
				</a>
			</h1>
			<nav id="nav" class="nav">
				<a href="#">소개</a>
				<a href="#">둘러보기</a>
			</nav>
		</div>
	</header>
</template>
<style lang="scss" scoped>
	.header {
		background:#171A21;
		&__row {
			display:flex;
			max-width:1140px;
			margin:0 auto;
			padding:20px;
			justify-content:space-between;
		}
	}
	.logo {
		a {
			display:inline-block;
			border:2px solid #fff;
			img {
				height:50px;
			}
		}
	}
	.nav {
		align-items:center;
		a {
			color:#fff;
		}
	}
</style>