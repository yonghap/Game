<template>
	<header id="header" class="header">
		<div class="header__row">
			<h1 class="logo">
				<a href="/">
					<img src="@/assets/images/logo.png" alt="Gameb">
				</a>
			</h1>
			<nav id="nav" class="nav">
				<router-link to="/about">소개</router-link>
				<router-link to="/search">둘러보기</router-link>
			</nav>
		</div>
	</header>
</template>
<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.header {
		background:#171A21;
		&__row {
			display:flex;
			max-width:1000px;
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
		height:54px;
		align-self:center;
		line-height:54px;
		a {
			display:inline-block;
			margin-left:20px;
			color:$titleColor;
			&:hover {
				color:$highlightColor;
			}
		}
	}
</style>
