<template>
    <div style="margin-top:30px">
       <p class="text number">{{ tenResult }}</p>
       <p class="text number">{{ nameResult }}</p>
       <p class="text number">{{ statusButton }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(["tenResult","nameResult","statusButton"]) 
        }   
    };
</script>

<style lang="less">

</style>