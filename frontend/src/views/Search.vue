<template>
	<div id="cateogory" class="category">
		<TheHeader></TheHeader>
		<section class="search bg">
			<div class="content">
				<Sidebar></Sidebar>
				<div class="content__wrap">
					<article class="article">
						<h2 class="article__title">인기 게임</h2>
						<ul class="list">
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game1.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game2.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game3.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game4.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game5.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game6.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game7.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
						</ul>
						<div class="more">
							<a href="#" class="btn-common">
								MORE
							</a>
						</div>
					</article>
					<article class="article">
						<h2 class="article__title">신규 출시</h2>
						<ul class="list">
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game1.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game2.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game3.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game4.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game5.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game6.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url(' + require('../assets/images/game7.jpg') + ')'}">

									</span>
									<span class="list__title">
										Desperados 3
									</span>
								</a>
							</li>
						</ul>
						<div class="more">
							<a href="#" class="btn-common">
								MORE
							</a>
						</div>
					</article>
					</article>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader';
	import Sidebar from '@/components/Sidebar';

	export default {
		components: {
			TheHeader,
			Sidebar
		},
		name: 'Search',
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss" scoped>
	.search {
		padding:50px 0;
	}
</style>