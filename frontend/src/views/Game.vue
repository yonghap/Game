<template>
	<div id="detail" class="detail">
		<section class="game">
			<h2 class="title" :style="{'background-image': 'url('+background+')'}">
				<div class="row">
					THE LAST OF US PART Ⅱ
				</div>
			</h2>
			<div class="game__detail bg">
				<div class="row">
					<div class="game__wrap">
						<article class="game__meta">

						</article>
						<article class="game__desc desc">
							“사이버펑크 2077”은 권력, 사치와 신체 개조에 집착하는 거대 도시 “나이트 시티”를 배경으로 한 오픈 월드, 액션 어드벤처 게임입니다.
							당신은 무법자 용병 “V”가 되어, 유일무이한 불멸의 열쇠를 뒤쫓고 있습니다. 당신은 사이버웨어와 다양한 능력, 플레이스타일을 변경할 수 있고,
							거대한 도시를 탐험하며 당신의 선택과 결정이 스토리의 전개 뿐만 아니라 당신을 감싸고 있는 이 세계에 어떤 영향을 미치는지 확인할수 있습니다.
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				background : require('@/assets/images/game2.jpg')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.title {
		padding-top:22%;
		padding-bottom:1.6%;
		background-position:50% 50%;
		font-size:3.8rem;
		color:#fff;
	}
	.game {
		&__detail {
			padding:50px 0;
			background:url('~@/assets/images/bg.png');
		}
		&__wrap {
			padding:40px;
			background:rgba(0,0,0,.25);
		}
	}
</style>