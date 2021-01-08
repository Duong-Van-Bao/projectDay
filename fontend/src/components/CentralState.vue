<template>
    <div style="margin-top:30px">
       <p class="text number">{{ Result }}</p>
       <button type="button" @click="trangThai" class="btn btn-secondary">trạng thái</button>
    </div>
</template>

<script>
export default {
        computed: {
         Result() {  
            return this.$store.state.result * 10
         },
         Resultone() {
             return this.$store.state.statusone
         },
         
        },
        methods: {
            trangThai() {
             this.$store.commit("statusButton")
          }
      }
    };
</script>

<style lang="less">

</style>