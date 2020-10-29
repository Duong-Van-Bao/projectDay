<template>
<div  class="info-balance">
    <ul  class="info-balance-list d-flex">
        <li  class="info-balance-item">
            <span  class="label">KLGD hàng ngày</span>
            <span  class="value">$0</span>
        </li>
        <li  class="info-balance-item">
            <span  class="label">Vé của bạn</span>
            <span  class="value">0
                <svg  xmlns="http://www.w3.org/2000/svg" width="32.139"
                    height="32.139" viewBox="0 0 32.139 32.139" class="icon">
                    <g  id="ticket"
                        transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 6.792)">
                        <path  id="Path_14066" data-name="Path 14066"
                            d="M15.1,6.2l4.941,4.941-8.905,8.905L6.2,15.1ZM11.837,21.44l9.631-9.6a1.009,1.009,0,0,0,.279-.7,1.112,1.112,0,0,0-.279-.726L15.829,4.774a.982.982,0,0,0-.726-.279.891.891,0,0,0-.7.279L4.8,14.405a.947.947,0,0,0,0,1.4l5.639,5.639a.947.947,0,0,0,1.4,0Zm13.847-9.91L11.558,25.683a1.989,1.989,0,0,1-1.424.558,1.894,1.894,0,0,1-1.4-.558L6.756,23.729a2.966,2.966,0,0,0,0-4.243,2.9,2.9,0,0,0-2.122-.893,2.808,2.808,0,0,0-2.094.893L.586,17.5A1.848,1.848,0,0,1,0,16.108a1.938,1.938,0,0,1,.586-1.424L14.712.586A1.906,1.906,0,0,1,16.108,0a2,2,0,0,1,1.424.586l1.954,1.926a2.9,2.9,0,0,0-.893,2.122,2.9,2.9,0,0,0,.893,2.122,2.966,2.966,0,0,0,4.243,0L25.683,8.71a1.989,1.989,0,0,1,.558,1.424,1.894,1.894,0,0,1-.558,1.4Z"
                            fill="#fd8854"></path>
                    </g>
                </svg></span></li>
    </ul>
    <p  class="info-balance-note mb-0"><span  class="label">Chú
            ý:</span>$10 = 1 Vé
    </p>
    <div  class="info-balance-box">
        <img  src="../../assets/square.3659f3c.png" alt="">
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
@text-color: #fff;
.info-balance {
    width: 575px;
    margin: 0 auto 105px;
    position: relative;
    z-index: 3;

    .info-balance-list {
        background: #12023e;
        border: 2px solid rgba(255, 255, 255, 0.16);
        border-radius: 8px;
        padding: 20px 0;
        margin-bottom: 15px;

        .info-balance-item {
            flex: 50%;
            padding: 0 10px 0 30px;

            .label {
                color: rgba(128, 134, 177, 0.7);
                font-size: 15px;
                margin-bottom: 5px;
                display: block;
                text-align: start;
            }

            .value {
                color: @text-color;
                font-size: 31px;
                font-weight: bold;
                display: flex;
                align-items: center;

                .icon {
                    margin-left: 5px;
                }
            }
        }
    }

    .info-balance-note {
        color: #fff;
        font-size: 15px;
        text-align: center;
        font-weight: 500;

        .label {
            color: #f7a62f;
            margin-right: 4px;
        }
    }

    .info-balance-box {
        transform: translate(599px, -141px);
        width: 397px;
        height: 357px;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 100%;
        animation: floating-data-v-0797c334 3s ease-in-out infinite;
    }
}
</style>