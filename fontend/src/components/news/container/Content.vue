<template>
<div class="section section-main tw-py-12 lg_tw-py-16 tw-border-t tw-border-soft">
	<div class="tw-container">
		<div class="tw-flex tw-flex-row tw-flex-wrap tw--mx-4 tw--mb-8">
			<content-aside/>
			<content-section/>                  
		</div>
	</div>
</div>

</template>

<script>
import Section from './contents/Section.vue'
import Aside from './contents/Aside.vue'
    export default {
		components:{
			"content-section":Section,
			"content-aside":Aside
		}
    }
</script>

<style lang="css">

</style>