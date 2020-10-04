<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
						<transition-group tag="ul" class="list" mode="out-in" name="list">
							<li
									v-for="(item, index) in games"
									v-bind:key="item.id"
									:style="{
									'transition-delay' : (index * 0.08) + 's'
								}"
							>
								<a :href="'/detail/'+item.id">
									<span class="list__image"
									      :style="{'background-image': 'url('+getCropImage(item.background_image)+')'}">
									</span>
									<span class="list__title">
										{{ item.name   }}
									</span>
								</a>
								<Stars></Stars>
							</li>
						</transition-group>
					</article>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Stars from '@/components/Stars';

	export default {
		components: {
			Stars
		},
		name: 'Search',
		data() {
			return {
				games: null,
				cropText: 'crop/600/400'
			}
		},
		computed: {
			title: function () {
				return this.$route.meta.title
			},
			type: function () {
				return this.$route.meta.type
			}
		},
		mounted() {
			this.$nextTick(function () {
				this.getList();
			})
		},
		methods: {
			getCropImage(addr) {
				let first = addr.substring(0, 28);
				let end = addr.substring(27, addr.length);
				return first + this.cropText + end;
			},
			getList() {
				this.$store.commit('SET_LOADING');
				this.$store.dispatch('getSearchGame', {
					ordering: this.type
				})
					.then(() => {
						this.games = this.$store.getters.categoryGame.results;
						this.$store.commit('SET_LOADING');
					})
			},
			ratingOver : function (event) {
				console.log(event);
			}
		}
	}
</script>
