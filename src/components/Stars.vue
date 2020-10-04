<template>
	<div class="rating">
		<div class="rating__wrap">
			<span class="rating__item" v-for="(item, index) in 5" @click="setRating(5-index)"
			      :class="{
					'active' : getRating(game)
			      }"
			>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			game: Number,
			star: Number
		},
		data() {
			return {
				ratings: localStorage
			}
		},
		methods: {
			setRating(grad) {
				localStorage.setItem(this.game, grad);
			},
			getRating(id) {
				if (typeof id == 'number') {
					for (var prop in this.ratings) {
						if (id == prop) {
							console.log('t');
						} else {
						}
					}
				}
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
