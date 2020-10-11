<template>
	<div class="tag">
		<span v-for="item in genres">
			{{ translate(item.slug) }}
		</span>
	</div>
</template>

<script>
	import translate from '@/utils/translate';

	export default {
		props : {
			genres : Array
		},
		data() {
			return {
				'translate' : translate
			}
		}

	}
</script>

<style lang="scss" scoped>
	.tag {
		margin-left:-5px;
		span, a {
			display:inline-block;
			margin:2px;
			padding:2px 5px 1px 5px;
			background:rgba(103,193,245,.2);
			color:#67C1F5;
		}
	}
</style>
