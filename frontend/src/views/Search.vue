<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<Sidebar></Sidebar>
				<section class="box__wrap">
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
			this.$store.dispatch('getSearchGame')
			.then(() => {
				this.games = this.$store.getters.categoryGame.results;
			})
		}
	}
</script>