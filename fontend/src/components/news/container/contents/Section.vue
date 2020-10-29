<template>
<div class="tw-w-full lg_tw-w-1/3 tw-px-4">
    <div class="sidebar tw-h-full tw-flex tw-flex-wrap tw-flex-col md_tw-flex-row lg_tw-flex-col tw--mx-4">
        <div class="tw-w-full md_tw-w-1/2 lg_tw-w-full tw-px-4 tw-mb-8">
            <div class="sidebar-widgets-1">
               <section-Header/>
               <section-Content/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from './section/Header.vue'
import Content from './section/Content.vue'
    export default {
            components:{
               "section-Header":Header,
               "section-Content":Content
           }
    }
</script>

<style lang="css">

</style>