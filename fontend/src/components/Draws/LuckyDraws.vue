<template>
<div  class="next-draw-body">
    <div  class="next-draw-body-inner">
        <div  class="next-draw-count-down-title">
            <h2  class="next-draw-title">Lần Rút tới</h2>
            <h3  class="next-draw-des">Kết thúc sau</h3>
        </div>
        <div  class="next-draw-count-down">
            <ul   class="vuejs-countdown">
                <li >
                    <p  class="digit">13</p>
                    <p  class="text">Hours</p>
                </li>
                <li >
                    <p  class="digit">06</p>
                    <p  class="text">Mins</p>
                </li>
                <li >
                    <p  class="digit">26</p>
                    <p  class="text">Secs</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
.next-draw-body {
    position: relative;
    color: #0C3653;
    .next-draw-body-inner {
        width: 575px;
        margin: 0 auto 15px;
        padding: 20px 40px 20px 20px;
        background: #12023E;
        border: 2px solid #FD8854;
        border-radius: 8px;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #0C3653;

        .next-draw-count-down-title {
            max-width: 45%;

            .next-draw-title {
                color: #fff;
                font-size: 25px;
                font-weight: bold;
                text-transform: uppercase;
                margin-bottom: 5px;
            }

            .next-draw-des {
                color: rgba(128, 134, 177, 0.7);
                font-size: 15px;
                margin-bottom: 0;
                text-align: start;
            }
        }

        .next-draw-count-down {
            .vuejs-countdown {
                padding: 0;
                margin: 0;

                li {
                    display: inline-block;
                    margin: 0 8px;
                    text-align: center;
                    position: relative;

                    .digit {
                        width: 58px;
                        height: 58px;
                        text-align: center;
                        line-height: 58px !important;
                        color: #fff;
                        font-size: 34px !important;
                        font-weight: bold !important;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 7px;
                        margin-bottom: 0;
                        margin: 0;
                    }

                    .text {
                        font-size: 14px !important;
                        color: #5E5E8E;
                        margin-bottom: 0;
                        font-size: 10px;
                        margin: 0;
                    }
                }
            }
        }
    }
}

.next-draw-body::before {
    content: '';
    width: 140%;
    height: 400%;
    background: #0f0132;
    border-radius: 35% 35% 0 0;
    position: absolute;
    top: 35px;
    left: 50%;
    margin-left: -70%;
    z-index: 1;
}
</style>