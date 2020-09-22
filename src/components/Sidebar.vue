<template>
	<nav id="sidebar" class="sidebar">
		<div class="sidebar__item">
			<h3 class="sidebar__title">게임</h3>
			<ul class="sidebar__list">
				<li v-bind:class="{ 'active' : type == 'default'}"><button type="button" @click="getCategory('default')">인기 제품</button></li>
				<li v-bind:class="{ 'active' : type == 'date'}"><button type="button" @click="getCategory('date')">신규 출시</button></li>
			</ul>
		</div>
		<div class="sidever__item">
			<h3 class="sidebar__title">장르</h3>
			<ul class="sidebar__list">
				<li v-bind:class="{ 'active' : type == 'action'}"><button type="button" @click="getCategory('action')">액션</button></li>
				<li v-bind:class="{ 'active' : type == 'massively-multiplayer'}"><button type="button" @click="getCategory('massively-multiplayer')">대규모 멀티플레이어</button></li>
				<li v-bind:class="{ 'active' : type == 'role-playing-games-rpg'}"><button type="button" @click="getCategory('role-playing-games-rpg')">RPG</button></li>
				<li v-bind:class="{ 'active' : type == 'adventure'}"><button type="button" @click="getCategory('adventure')">어드벤쳐</button></li>
				<li v-bind:class="{ 'active' : type == 'simulation'}"><button type="button" @click="getCategory('simulation')">시뮬레이션</button></li>
				<li v-bind:class="{ 'active' : type == 'sports'}"><button type="button" @click="getCategory('sports')">스포츠</button></li>
				<li v-bind:class="{ 'active' : type == 'puzzle'}"><button type="button" @click="getCategory('puzzle')">퍼즐</button></li>
				<li v-bind:class="{ 'active' : type == 'indie'}"><button type="button" @click="getCategory('indie')">인디</button></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	import translate from '@/utils/translate';

	export default {
		data() {
			return {
				type : 'default',
				games : null,
				translate : translate
			}
		},
		mounted() {
			this.getCategory(this.type);
		},
		methods : {
			getCategory(type) {
				this.$store.commit('SET_LOADING');
				this.$store.dispatch('getSearchGame',{
					ordering : type
				})
					.then(() => {
						this.type = type;
						this.$store.commit('SET_CATEGORY',translate(type));
						this.games = this.$store.getters.categoryGame.results;
						this.$emit('getList',this.games);
						this.$store.commit('SET_LOADING');
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	.sidebar {
		position:absolute;
		top:0;
		left:0;
		&__item {
			margin-bottom:30px;
		}
		&__title {
			margin-bottom:5px;
			font-size:1.25rem;
			font-weight:400;
			color:$titleColor;
		}
		a, button {
			display:inline-block;
			margin-left:5px;
			padding:3px 5px 2px 5px;
			font-family:'NEXON Gothic';
			font-size:1rem;
			color:$titleColor;
			cursor:pointer;
			outline:none;

		}
		&__list {
			li {
				margin:5px 0;
				&.active {
					a,button {
						background:rgba(103,193,245,.2);
						color:$highlightColor;
					}
				}
			}
		}
	}
</style>
