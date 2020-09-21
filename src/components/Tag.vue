<template>
	<div class="tag">
		<a v-for="item in genres">
			{{ translateKOR(item.slug) }}
		</a>
	</div>
</template>

<script>
	export default {
		props : {
			genres : Array
		},
		methods : {
			translateKOR(eng) {
				switch (eng) {
					case "action" :
						return "액션";
						break;
					case "sports" :
						return "스포츠";
						break;
					case "casual" :
						return "캐주얼";
						break;
					case "massively-multiplayer" :
						return "대규모 멀티플레이어";
						break;
					case "indie" :
						return "인디";
						break;
					case "role-playing-games-rpg" :
						return "RPG";
						break;
					case "adventure" :
						return "어드벤쳐";
						break;
					case "shooter" :
						return "FPS";
						break;
					case "puzzle" :
						return "퍼즐";
						break;
					case "strategy" :
						return "전략";
						break;
					case "simulation" :
						return "시뮬레이션";
						break;
					default :
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		margin-left:-5px;
		a {
			display:inline-block;
			margin-left:5px;
			padding:2px 5px 1px 5px;
			background:rgba(103,193,245,.2);
			color:#67C1F5;
		}
	}
</style>
