<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-4">
        <div class="card" style="width: 18rem">
          <img
            src="https://icdn.dantri.com.vn/zoom/996_664/filters:quality(0)/2020/10/28/12-1603883640482.jpg"
            class="card-img-top"
            alt="báo số 9"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-4">
        <div class="card" style="width: 18rem">
          <img
            src="https://icdn.dantri.com.vn/zoom/996_664/filters:quality(0)/2020/10/28/12-1603883640482.jpg"
            class="card-img-top"
            alt="báo số 9"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-4">
        <div class="card" style="width: 18rem">
          <img
            src="https://icdn.dantri.com.vn/zoom/996_664/filters:quality(0)/2020/10/28/12-1603883640482.jpg"
            class="card-img-top"
            alt="báo số 9"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-6">
            <input type="text" class="form-control" v-model="className">
        </div>
        <div class="col-6">
            <button type="button" class="btn btn-primary form-control" v-on:click="changeColor">Small button</button>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
      return {
      className:''    
      }
  },
  methods: {
      changeColor() 
      {
       $('body').removeClass();
       $('body').addClass(this.className);
      }
  },
};
</script>

<style lang="less">

</style>