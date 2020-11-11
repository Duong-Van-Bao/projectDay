<template>
<section id="roadmap-part" class="menu-section roadmap-part position-r ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="heading-part text-center mb-50 mb-sm-30 mb-xs-20">
                    <h2 class="main_title">Roadmap</h2>
                    <span>Emergence and design of the idea</span>
                </div>
            </div>
        </div>
        <div class="main-roadmap">
            <div class="row">
                <div class="col-12">
                    <div class="h-border fadeInLeftBig delay2"></div>
                </div>
            </div>
            <div class="row n-margin">
                <div class="w-100">
                    <div id="roadmap-slider" class="roadmap-slider">
                        <div class="item n-padding main-box road_map-item">
                            <div class="roadmap-box">
                                <div class="date-title delay_4">
                                    Jan 2019
                                </div>
                                <div class="w-100 position-r map-graphic">
                                    <div class="small-round zoomIn delay_2"></div>
                                    <div class="v-row fadeInDownBig delay4"></div>
                                </div>
                                <div class="roadmap-detail-box invisible delay_4">
                                    <h3 class="sub-title">Creation of Our Company</h3>
                                    <p>calculate the number of tokens you’ll receive, you can follow the following formula.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item n-padding main-box road_map-item">
                            <div class="roadmap-box">
                                <div class="date-title delay_4">
                                    Fab 2019
                                </div>
                                <div class="w-100 position-r map-graphic">
                                    <div class="small-round zoomIn delay_2"></div>
                                    <div class="v-row fadeInDownBig delay4"></div>
                                </div>
                                <div class="roadmap-detail-box invisible delay_4">
                                    <h3 class="sub-title">Best ICO Brand</h3>
                                    <p>calculate the number of tokens you’ll receive, you can follow the following formula.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item n-padding main-box road_map-item">
                            <div class="roadmap-box">
                                <div class="date-title delay_4">
                                    Mar 2019
                                </div>
                                <div class="w-100 position-r map-graphic">
                                    <div class="small-round zoomIn delay_2"></div>
                                    <div class="v-row fadeInDownBig delay4"></div>
                                </div>
                                <div class="roadmap-detail-box invisible delay_4">
                                    <h3 class="sub-title">Private Token Round</h3>
                                    <p>calculate the number of tokens you’ll receive, you can follow the following formula.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item n-padding main-box road_map-item">
                            <div class="roadmap-box">
                                <div class="date-title delay_4">
                                    Apr 2019
                                </div>
                                <div class="w-100 position-r map-graphic">
                                    <div class="small-round zoomIn delay_2"></div>
                                    <div class="v-row fadeInDownBig delay4"></div>
                                </div>
                                <div class="roadmap-detail-box invisible delay_4">
                                    <h3 class="sub-title">Concept</h3>
                                    <p>calculate the number of tokens you’ll receive, you can follow the following formula.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item n-padding main-box road_map-item">
                            <div class="roadmap-box">
                                <div class="date-title delay_4">
                                    May 2019
                                </div>
                                <div class="w-100 position-r map-graphic">
                                    <div class="small-round zoomIn delay_2"></div>
                                    <div class="v-row fadeInDownBig delay4"></div>
                                </div>
                                <div class="roadmap-detail-box invisible delay_4">
                                    <h3 class="sub-title">Concept</h3>
                                    <p>calculate the number of tokens you’ll receive, you can follow the following formula.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
.menu-section{
    .container{
        .main-roadmap{
            .row{
                .w-100{
                    .roadmap-slider{
                        position: relative;
                        .item{
                            width: 307.5px;
                            display: inline-block;
                        }
                        .item:first-child{
                            position: absolute;
                            top: 0px;
                            left: 0px;
                        }
                        .item:nth-child(2){
                            position: absolute;
                            top: -95px;
                            left: 17%;
                            .roadmap-box{
                                .date-title{
                                    bottom: 40px;
                                }
                                .w-100{
                                        height: 116px;
                                        .small-round{
                                            top: 95px;
                                        }
                                        .v-row{
                                            top: 25px;
                                        }
                                    }
                            }
                        }
                        .item:nth-child(4){
                            position: absolute;
                            top: -95px;
                            left: 56%;
                            .roadmap-box{
                                .date-title{
                                    bottom: 40px;
                                }
                                .w-100{
                                        height: 116px;
                                        .small-round{
                                            top: 95px;
                                        }
                                        .v-row{
                                            top: 25px;
                                        }
                                    }
                            }
                        }
                        .item:last-child{
                            position: absolute;
                            top: 0px;
                            right: 0px;
                        }
                        // .item:nth-child(2n+0){
                        //     position: absolute;
                        //     top: -62px;
                        //     left: 17%;
                        // }
                    }
                }
            }
        }
    }
}
</style>