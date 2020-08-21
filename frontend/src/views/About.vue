<template>
	<div id="about" class="about">
		<TheHeader></TheHeader>
		<section class="search bg">
			<div class="content">
				<div class="content__wrap">
					<article class="article desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat suscipit voluptatibus. Asperiores dicta ea eius enim, fugiat iste maxime minima molestiae non officia quae quibusdam ratione, reprehenderit, sapiente vel.
					</article>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import TheHeader from '@/components/TheHeader';

	export default {
		components: {
			TheHeader
		},
		name: 'About',
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss" scoped>
	.search {padding:50px;}
</style>