<template>
	<div id="wrap" class="wrap">
		<app-main/>
	</div>
</template>

<script>
	import { AppMain } from './components';

	export default {
		name : 'Layout',
		components : {
			AppMain
		}
	}
</script>