<template>
	<div class="tw-w-full tw-px-4 lg_tw-w-2/3">
		<div class="content tw-mb-8">
			<div class="posts tw--mx-4">
                <aside-content/>
			</div>
                <aside-nextPage/> 
		</div>
	</div>
</template>

<script>
import Content from './aside/Content.vue'
import NextPage from './aside/NextPage.vue'
    export default {
		components:{
		"aside-content":Content,
		"aside-nextPage":NextPage
		}
    }
</script>

<style lang="css">

</style>