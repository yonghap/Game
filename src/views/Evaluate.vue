<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
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
										<span class="list__info">
											<Tag v-bind:genres="item.genres"></Tag>
										</span>
									</span>
									<span class="list__title">
										{{ item.name  }}
									</span>
								</div>
								<Stars v-bind:game="item" v-bind:star="getRating(item.id)"></Stars>
							</li>
						</ul>
					</article>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Stars from '@/components/Stars';
	import Tag from '@/components/Tag';

	export default {
		components: {
			Stars,
			Tag
		},
		name: 'Search',
		data() {
			return {
				games: [],
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
							return parseInt(JSON.parse(this.ratings[prop]).stars);
						}
					}
					return 0;
				}
			},
			getList() {
				for (var item in this.ratings) {
					try {
						if (typeof JSON.parse(this.ratings[item]) == 'object') {
							this.games.push(JSON.parse(this.ratings[item]));
						}
					} catch (e) {
						return false;
					}
				}
			}
		}
	}
</script>
