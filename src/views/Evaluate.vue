<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
						<ul class="list" v-if="games.length > 0">
							<li
									v-for="(item, index) in games"
									v-bind:key="item.id"
									:style="{
									'transition-delay' : (index * 0.08) + 's'
								}"
							>
								<div class="list__item">
									<span class="list__image"
									      :style="{'background-image': 'url('+getItems.getCropImage(item.background_image)+')'}">
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
						<div v-else class="list--no">
							평가한 게임이 없습니다.
						</div>
					</article>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Stars from '@/components/Stars';
	import Tag from '@/components/Tag';
	import getItems from '@/utils/getItem';

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
				ls: localStorage,
				getItems : getItems
			}
		},
		computed: {
			title: function () {
				return this.$route.meta.title
			}
		},
		mounted() {
			this.$nextTick(function () {
				this.getList();
			})
		},
		methods: {
			getRating(id) {
				if (typeof id == 'number') {
					for (var prop in this.ls) {
						if (id == prop) {
							return parseInt(JSON.parse(this.ls[prop]).stars);
						}
					}
					return 0;
				}
			},
			getList() {
				this.$store.state.app.gameList.length = 0;
				for (var item in this.ls) {
					try {
						console.log(this.ls[item]);
						if (typeof JSON.parse(this.ls[item]) == 'object') {
							this.games.push(JSON.parse(this.ls[item]));
						}
					} catch (e) {
						return false;
					}
				}
			}
		}
	}
</script>
