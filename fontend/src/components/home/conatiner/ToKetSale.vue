<template>
<section id="tokensale-part" class="tokensale-part position-r ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 fadeInLeft">
                <div class="tokensale-detail pb-md-30">
                    <div class="tokensale-detail-inner">
                        <div class="heading-part mb-20 mb-sm-30 mb-xs-20">
                            <h2 class="main_title">Token Sale</h2>
                            <span>Breakdown of our Token Recipients.</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <ul class="mt-30">
                            <li><span class="color1"></span>12% Gift Code Inventory</li>
                            <li><span class="color2"></span>32% Bounty and Overhead</li>
                            <li><span class="color3"></span>38% it infastrueture</li>
                            <li><span class="color4"></span>55% Bonus & found</li>
                            <li><span class="color5"></span>73% Finacial Overhead</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 align-right center-md">
                <div class="token-graph">
                    <div class="graph-logo">
                        <template>
                            <div class="donut-chart">
                                <img src="../../../assets/graph-logo.png" width="170px" alt="cryptoz">
                                <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>

    export default {
    data() {
        return {
            options: {},
            series: [12, 32, 38, 55, 73]      
        }
    },

    }

</script>

<style lang="less" >
/* @import '../header/css/cryptoz.css';
@import '../header/css/responsive.css';
@import '../header/css/animate.css';
@import '../header/css/bootstrap.min.css'; */
div{
    div{
        .apexcharts-canvas{
            svg{
                foreignObject{
                    .apexcharts-legend{
                        display: none;
                    }
                }
            }
        }
    }
}
.tokensale-part{
    .container{
        .row{
            .col-lg-6{
                .token-graph{
                    .graph-logo{
                        .donut-chart{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            div{
                                .apexcharts-canvas{
                                    position: absolute;
                                    top:0px;
                                    left: -103px;;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
