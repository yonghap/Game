<template>
	<div id="list" class="list">
		<TheHeader></TheHeader>
		<section class="search bg">
			<div class="content">
				<Sidebar></Sidebar>
				<div class="content__wrap">

				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader';
	import Sidebar from '@/components/Sidebar';

	export default {
		components: {
			TheHeader,
			Sidebar
		},
		name: 'Search',
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss" scoped>
	.search {
		padding:50px 0;
	}
</style>