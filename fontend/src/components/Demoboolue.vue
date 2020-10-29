<template>
<div>
    <div class="container">
        <div class="row">
            <table class="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
            <div class="col-4">
                <p>{{ title }}</p>
                <button type="button" v-on:click="changeTitle" class="btn btn-primary">open</button>
            </div>
            <div style="background: pink;" class="col-4">
                <p>{{ count }}</p>
                <button style="margin-left: 10px;" type="button" v-on:click="upNumber" class="btn btn-gray">up number</button>
                <input type="text" v-model="message">               
            </div>
            <div class="col-4">
                <button type="button" v-on:click="changeStatus" class="btn btn-secondary">close</button>     
                <p>{{ status }}</p>          
            </div>
            <template>
                <div v-if="status == true">
                        <div class="alert alert-primary" role="alert">
                        This is a primary alert—check it out!
                        </div>
                        <div class="alert alert-secondary" role="alert">
                        This is a secondary alert—check it out!
                        </div>
                        <div class="alert alert-success" role="alert">
                        This is a success alert—check it out!
                        </div>
                        <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                        </div>
                        <div class="alert alert-warning" role="alert">
                        This is a warning alert—check it out!
                        </div>
                        <div class="alert alert-info" role="alert">
                        This is a info alert—check it out!
                        </div>
                        <div class="alert alert-light" role="alert">
                        This is a light alert—check it out!
                        </div>
                        <div class="alert alert-dark" role="alert">
                        This is a dark alert—check it out!
                        </div>
                </div>
                <div v-else class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            </template>
        </div>  
    </div>
    <div class="container">
        <div class="row">
            <div class="col-4">
                 <demo-text/><br>
                 <central-state/>
                 <hr>
                <div class="row">
                    <div class="col-6">
                       <button type="button" @click="len" class="btn btn-primary">len</button>
                    </div>
                    <div class="col-6">
                        <button type="button" @click="xuong" class="btn btn-secondary">xuong</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Demotext from './Demotext.vue'
import Centralstate from './CentralState' 
    export default {
        data() {
                return {
                    title:'Hello World!',
                    count:0,
                    message:'Duong Bao',
                    status:false
                }
            },
        methods: {
            changeTitle() {
                this.title = 'Change Title'
            },
            changeStatus() {
               this.status = !this.status
            },
            upNumber() {
                this.count += 1
            },
            len () {
                this.$store.state.result++,
                this.$store.state.commit('incrementOp', 30)     
            },
            xuong () {
               this.$store.state.result-- 
            },
        },
        components: {
          "demo-text":Demotext,
          "central-state":Centralstate
        }
    }
</script>

<style lang="less">

</style>