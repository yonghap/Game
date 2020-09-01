<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<Sidebar></Sidebar>
				<section class="box__wrap">
					<article class="article">
						<div class="article__tag">
							<Tag></Tag>
						</div>
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
						<h2 class="article__title">인기 게임</h2>
						<ul class="list">
							<li v-for="item in games">
								<a href="#">
									<span class="list__image" :style="{'background-image': 'url('+item.background_image+')'}">
									</span>
									<span class="list__title">
										{{ item.name }}
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
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar';
	import Tag from '@/components/Tag';

	export default {
		components: {
			Sidebar,
			Tag
		},
		name: 'Search',
		data() {
			return {
				games : null
			}
		},
		created() {
			this.$http.get('https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-rating')
			.then(res => {
				this.games = res.data.results;
			})
		}
	}
</script>