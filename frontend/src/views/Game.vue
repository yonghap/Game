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
						<article class="meta">
							<div class="meta__content">
								<img src="@/assets/images/game3.jpg">
							</div>
							<div class="meta__info">
								<div class="info">
									<div class="info__image">
										<img src="@/assets/images/game4.jpg">
									</div>
									<dl class="info__list">
										<dt>개발사</dt>
										<dd>CD PROJECKT RED CD PROJECKT RED</dd>
										<dt>배급사</dt>
										<dd>CD PROJECKT RED</dd>
									</dl>
									<div class="info__meta">
										<Tag></Tag>
									</div>
								</div>
							</div>
						</article>
						<article class="game__article desc">
							“사이버펑크 2077”은 권력, 사치와 신체 개조에 집착하는 거대 도시 “나이트 시티”를 배경으로 한 오픈 월드, 액션 어드벤처 게임입니다.
							당신은 무법자 용병 “V”가 되어, 유일무이한 불멸의 열쇠를 뒤쫓고 있습니다. 당신은 사이버웨어와 다양한 능력, 플레이스타일을 변경할 수 있고,
							거대한 도시를 탐험하며 당신의 선택과 결정이 스토리의 전개 뿐만 아니라 당신을 감싸고 있는 이 세계에 어떤 영향을 미치는지 확인할수 있습니다.
						</article>
						<article class="game__article">
							<ul class="game__image">
								<li>
									<img src="@/assets/images/game5.jpg">
								</li>
								<li>
									<img src="@/assets/images/game6.jpg">
								</li>
								<li>
									<img src="@/assets/images/game7.jpg">
								</li>
								<li>
									<img src="@/assets/images/game8.jpg">
								</li>
							</ul>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Tag from '@/components/Tag';

	export default {
		components: {
			Tag
		},
		name: 'Home',
		data() {
			return {
				background: require('@/assets/images/game2.jpg')
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/styles/variables.scss';
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
		}
		&__wrap {
			padding:40px;
			background:rgba(0, 0, 0, .25);
		}
		&__article {
			margin:26px 0;
		}
		&__image {
			display:flex;
			margin:0 -10px;
			li {
				padding:0 10px;
			}
		}
	}
	.meta {
		display:flex;
		margin-bottom:26px;
		&__content {
			margin-right:20px;
		}
		&__info {
			flex:0 0 340px;
		}
	}
	.info {
		color:$titleColor;
		&__image {
			margin-bottom:5px;
		}
		&__list {
			display:flex;
			flex-wrap:wrap;
			margin-bottom:10px;
			dt {
				flex:0 0 20%;
				padding:5px 0;
				box-sizing:border-box;
			}
			dd {
				flex:0 1 80%;
				padding:5px;
				box-sizing:border-box;
				font-weight:600;
			}
		}
	}
</style>