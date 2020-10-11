<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
						<div class="article__tag">
							<a href="#" v-for="(item,index) in month">
								{{ index + 1 }} 월
							</a>
						</div>
						<ul class="list">
							<li
									v-for="(item, index) in games"
									v-bind:key="item.id"
									:style="{
									'transition-delay' : (index * 0.08) + 's'
								}"
							>
								<div class="list__item">
									<span class="list__image"
									      :style="{'background-image': 'url('+getCropImage(item.background_image)+')'}">
									</span>
									<span class="list__title">
										{{ item.name   }}
									</span>
								</div>
								<Stars v-bind:game="item.id" v-bind:star="getRating(item.id)"></Stars>
							</li>
						</ul>
						<div class="more">
							<button type="button" class="btn-more" @click="getList">MORE</button>
						</div>
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
				cropText: 'crop/600/400',
				currentPage: 1,
				ratings: localStorage
			}
		},
		computed: {
			title: function () {
				return this.$route.meta.title
			},
			type: function () {
				return this.$route.meta.type
			},
			month : function () {
				return new Date().getMonth() + 1;
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
			getRating(id) {
				if (typeof id == 'number') {
					for (var prop in this.ratings) {
						if (id == prop) {
							return parseInt(this.ratings[prop]);
						}
					}
					return 0;
				}
			},
			getList() {
				this.$store.commit('SET_LOADING');
				this.$store.dispatch('getSearchGame', {
					ordering: this.type,
					page: this.currentPage++
				})
					.then(() => {
						this.games = this.$store.getters.categoryGame.slice();
						this.$store.commit('SET_LOADING');
					})
			}
		}
	}
</script>
