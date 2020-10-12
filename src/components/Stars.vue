<template>
	<div class="rating">
		<div class="rating__wrap">
			<span class="rating__item" v-for="(item, index) in 5" @click="setRating(index)"
			      :class="{
					'active' : (5 - newStar) == index
			      }"
			>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			game: Object,
			star : Number
		},
		data() {
			return {
				newStar : this.star
			}
		},
		mounted() {
		},
		methods: {
			setRating(grad) {
				this.newStar = 5 - grad;
				let localSaveInfo = {
					'id' : this.game.id,
					'name' : this.game.name,
					'genres' : this.game.genres,
					'background_image' : this.game.background_image,
					'stars' : this.newStar
				}
				localStorage.setItem(this.game.id, JSON.stringify(localSaveInfo));
			}
		}
	}
</script>
<style lang="scss" scoped>
	.rating {
		&__wrap {
			overflow:hidden;
			line-height:1;
		}
		&__item {
			float:right;
			font-size:1.8rem;
			cursor:pointer;
			&:before {
				content:'★';
				color:#aaa;
				transition:all .2s cubic-bezier(0.445, 0.050, 0.550, 0.950);
			}
			&.active {
				&:before {
					color:#ffed85;
				}
				& ~ .rating__item:before {
					color:#ffed85;
				}
			}
			&:hover {
				&:before {
					color:#ffed85;
				}
				& ~ .rating__item:before {
					color:#ffed85;
				}
			}
		}
	}
</style>
