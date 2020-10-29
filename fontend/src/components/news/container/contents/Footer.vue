<template>
    <div class="section section-post-carousel tw-border-t tw-border-b tw-border-soft">
        <div class="tw-container">
            <footer-header/>
            <footer-content/>
        </div>
    </div>
</template>

<script>
import Header from './footer/Header.vue'
import Content from './footer/Content.vue'
    export default {
        components:{
            "footer-header":Header,
            "footer-content":Content
        }
    }
</script>

<style lang="css">

</style>