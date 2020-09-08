<template>
	<div id="loading" class="loading">
		<div class="loader-wrap">
			<div class="loader"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.loading {
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,.7);
	}
	.loader-wrap {
		position:absolute;
		top:50%;
		left:50%;
		margin-left:-35px;
		margin-top:-35px;
	}
	.loader {
		border:10px solid #f3f3f3;
		border-radius:50%;
		border-top:10px solid #11283c;
		width:60px;
		height:60px;
		margin:0 auto;
		-webkit-animation:spin 1s linear infinite; /* Safari */
		animation:spin 1s linear infinite;
	}
	@-webkit-keyframes spin {
		0% {
			-webkit-transform:rotate(0deg);
		}
		100% {
			-webkit-transform:rotate(360deg);
		}
	}
	@keyframes spin {
		0% {
			transform:rotate(0deg);
		}
		100% {
			transform:rotate(360deg);
		}
	}
</style>