<template>
	<div id="content" class="content">
		<div class="inner">
			<div class="box">
<!--				<Sidebar-->
<!--					v-on:getList="getList"-->
<!--				></Sidebar>-->
				<section class="box__wrap">
					<article class="article">
						<h2 class="article__title">
							{{ title }}
						</h2>
						<transition-group tag="ul" class="list" mode="out-in" name="list">
							<li
								v-for="(item, index) in games"
								v-bind:key="item.id"
								:style="{
									'transition-delay' : (index * 0.08) + 's'
								}"
							>
								<a :href="'/detail/'+item.id">
									<span class="list__image" :style="{'background-image': 'url('+getCropImage(item.background_image)+')'}" >
										<span class="star">
											<span class="star__bg">
												★★★★★
											</span>
											<span class="star__active">
												★★★★★
											</span>
										</span>
									</span>
									<span class="list__title">
										{{ item.name   }}
									</span>
								</a>
							</li>
						</transition-group>
					</article>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar';
	import Tag from '@/components/Tag';

		export default {
		components: {
			Sidebar,
			Tag
		},
		name: 'Search',
		data() {
			return {
				games : null,
				title : '',
				cropText : 'crop/600/400'
			}
		},
		created() {

		},
		methods : {
			getCropImage(addr) {
				let first = addr.substring(0,28);
				let end = addr.substring(27,addr.length);
				return first + this.cropText + end;
			},
			getList(data) {
				this.games = data;
				this.title = this.$store.getters.currentCategory;
			}

		}
	}
</script>
