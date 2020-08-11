<template>
	<header id="header" class="header">
		<h1 class="logo">
			<a href="#">
				<img src="@/assets/images/logo.png" alt="Gameb">
			</a>
		</h1>
		<nav id="nav" class="nav">
			<a href="#">소개</a>
			<a href="#">둘러보기</a>
		</nav>
	</header>
</template>
<style lang="scss" scoped>
	.header {
		display:flex;
		padding:10px 20px;
		justify-content:space-between;
		background:#171A21;
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
		a {
			color:#fff;
		}
	}
</style>