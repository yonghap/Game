<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<Sidebar
					v-on:getCategory="getCategory"
				></Sidebar>
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
						<ul class="list">
							<li v-for="item in games">
								<a :href="'detail/'+item.id">
									<span class="list__image" :style="{'background-image': 'url('+getCropImage(item.background_image)+')'}">
									</span>
									<span class="list__title">
										{{ item.name   }}
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
				games : null,
				title : '',
				cropText : 'crop/600/400'
			}
		},
		created() {
		},
		methods : {
			getCropImage(addr) {
				let first = addr.substring(0,28);
				let end = addr.substring(27,addr.length);
				return first + this.cropText + end;
			},
			setCategoryTitle(type) {
				switch (type) {
					case 'default' :
						this.title = '인기 게임';
						break;
					case 'date' :
						this.title = '신규 출시';
						break;
				}
			},
			getCategory(type) {
				this.$store.commit('SET_LOADING');
				this.$store.dispatch('getSearchGame',{
					ordering : type
				})
				.then(() => {
					this.setCategoryTitle(type);
					this.games = this.$store.getters.categoryGame.results;
					this.$store.commit('SET_LOADING');
				})
			}
		}
	}
</script>