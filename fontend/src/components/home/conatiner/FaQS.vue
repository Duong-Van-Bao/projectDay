<template>
<section id="faq-part" class="menu-section faq-part position-r ptb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="heading-part text-center mb-50 mb-sm-30 mb-xs-20">
                    <h2 class="main_title">FAQS</h2>
                    <span>Frequently asked questions</span>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10">
                    <div id="tabs">
                    <ul class="nav nav-tabs">
                        <li><a class="tab-General selected" title="General">General Questions</a></li>
                        <li><a class="tab-ICO" @click="QuestionsNav4" :class="{do: statusNavFaQ2}" title="ICO">ICO Questions</a></li>
                        <li><a class="tab-Token-sale" title="Token-sale">Token sale</a></li>
                        <li><a class="tab-Investors" title="Investors">Investors</a></li>
                    </ul>
                </div>
                <div id="items">
                    <div class="tab_content">
                        <ul>
                            <li>
                                <div class="items-General selected">
                                    <div id="accordion" class="accordion">
                                        <div class="accordion-box fadeInUpMedium delay1">
                                            <h3>
                                                <a href="#" @click="show = !show" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What cryptocurrencies can I use to purchase?
                                                    <i v-if="show"  class="fas fa-plus"></i>
                                                    <i v-else class="fas fa-minus"></i>
                                                </a>
                                            </h3>
                                            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                                <p>
                                                    {{this.QuestionsText}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box fadeInUpMedium delay2">
                                            <h3>
                                                <a href="#" @click="show2 = !show2" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How HedgingExchange different from other ICO
                                                    <i v-if="show2"  class="fas fa-plus"></i>
                                                    <i v-else  class="fas fa-minus"></i>                                                    
                                                </a>
                                            </h3>
                                            <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                                <p>
                                                   {{this.QuestionsText}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box fadeInUpMedium delay3">
                                            <h3>
                                                <a href="#" @click="show3" class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What is HedgingExchange Smart Contract
                                                    <i v-if="show3"  class="fas fa-plus"></i>
                                                    <i v-else  class="fas fa-minus"></i>
                                                </a>
                                            </h3>
                                            <div id="collapseThree" class="collapse" data-parent="#accordion">
                                                <p>
                                                    {{this.QuestionsText}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box fadeInUpMedium delay4">
                                            <h3>
                                                <a href="#" @click="Questions4" class="collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour" :class="{do: statusFaQ4}">
                                                    What is HedgingExchange business model?
                                                    <i v-if="statusFaQ4 == false"  class="fas fa-plus"></i>
                                                    <i v-else  class="fas fa-minus"></i>
                                                </a>
                                            </h3>
                                            <div id="collapsefour" class="collapse" data-parent="#accordion">
                                                <p>
                                                    {{this.QuestionsText}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="items-ICO">
                                    <div id="accordion-copy" class="accordion">
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-copy" data-toggle="collapse" data-target="#collapseTwo-copy" aria-expanded="false" aria-controls="collapseTwo-copy">
                                                    How HedgingExchange different from other ICO
                                                </a>
                                            </h3>
                                            <div id="collapseTwo-copy" class="collapse show" data-parent="#accordion-copy">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-copy" data-toggle="collapse" data-target="#collapseThree-copy" aria-expanded="false" aria-controls="collapseThree-copy">
                                                    What is HedgingExchange Smart Contract
                                                </a>
                                            </h3>
                                            <div id="collapseThree-copy" class="collapse" data-parent="#accordion-copy">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-copy" data-toggle="collapse" data-target="#collapsefour-copy" aria-expanded="false" aria-controls="collapsefour-copy">
                                                    What is HedgingExchange business model?
                                                </a>
                                            </h3>
                                            <div id="collapsefour-copy" class="collapse" data-parent="#accordion-copy">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" data-parent="#accordion-copy" data-toggle="collapse" data-target="#collapseOne-copy" aria-expanded="true" aria-controls="collapseOne-copy">
                                                    What cryptocurrencies can I use to purchase?
                                                </a>
                                            </h3>
                                            <div id="collapseOne-copy" class="collapse" data-parent="#accordion-copy">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="items-Token-sale">
                                    <div id="accordion-ico" class="accordion">
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-ico" data-toggle="collapse" data-target="#collapseThree-ico" aria-expanded="false" aria-controls="collapseThree-ico">
                                                    What is HedgingExchange Smart Contract
                                                </a>
                                            </h3>
                                            <div id="collapseThree-ico" class="collapse show" data-parent="#accordion-ico">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-ico" data-toggle="collapse" data-target="#collapsefour-ico" aria-expanded="false" aria-controls="collapsefour-ico">
                                                    What is HedgingExchange business model?
                                                </a>
                                            </h3>
                                            <div id="collapsefour-ico" class="collapse" data-parent="#accordion-ico">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" data-parent="#accordion-ico" data-toggle="collapse" data-target="#collapseOne-ico" aria-expanded="true" aria-controls="collapseOne-ico">
                                                    What cryptocurrencies can I use to purchase?
                                                </a>
                                            </h3>
                                            <div id="collapseOne-ico" class="collapse" data-parent="#accordion-ico">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-ico" data-toggle="collapse" data-target="#collapseTwo-ico" aria-expanded="false" aria-controls="collapseTwo-ico">
                                                    How HedgingExchange different from other ICO
                                                </a>
                                            </h3>
                                            <div id="collapseTwo-ico" class="collapse" data-parent="#accordion-ico">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="items-Investors">
                                    <div id="accordion-investors" class="accordion">
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-investors" data-toggle="collapse" data-target="#collapsefour-investors" aria-expanded="false" aria-controls="collapsefour-investors">
                                                    What is HedgingExchange business model?
                                                </a>
                                            </h3>
                                            <div id="collapsefour-investors" class="collapse show" data-parent="#accordion-investors">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" data-parent="#accordion-investors" data-toggle="collapse" data-target="#collapseOne-investors" aria-expanded="true" aria-controls="collapseOne-investors">
                                                    What cryptocurrencies can I use to purchase?
                                                </a>
                                            </h3>
                                            <div id="collapseOne-investors" class="collapse" data-parent="#accordion-investors">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-investors" data-toggle="collapse" data-target="#collapseTwo-investors" aria-expanded="false" aria-controls="collapseTwo-investors">
                                                    How HedgingExchange different from other ICO
                                                </a>
                                            </h3>
                                            <div id="collapseTwo-investors" class="collapse" data-parent="#accordion-investors">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                        <div class="accordion-box">
                                            <h3>
                                                <a href="#" class="collapsed" data-parent="#accordion-investors" data-toggle="collapse" data-target="#collapseThree-investors" aria-expanded="false" aria-controls="collapseThree-investors">
                                                    What is HedgingExchange Smart Contract
                                                </a>
                                            </h3>
                                            <div id="collapseThree-investors" class="collapse" data-parent="#accordion-investors">
                                                <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste perspiciatis eaque ipsa quae
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
               QuestionsText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nam, repellendus corrupti repellat libero, consequuntur quam expedita ullam veniam ducimus nulla eveniet voluptate commodi consequatur reprehenderit tenetur accusantium obcaecati? Impedit',
               show:false,
               show2: true,
               show3: true,
               statusFaQ4: false,
               statusNavFaQ: false,
               statusNavFaQ2: true,
               statusNavFaQ3: false,
               statusNavFaQ4: false,
            }
        },
        methods: {
            Questions4() {
                this.statusFaQ4 = !this.statusFaQ4 
            },
            QuestionsNav4() {
                this.statusNavFaQ2 = !this.statusNavFaQ2
            }
        },
    }
</script>

<style lang="less">
/* @import '../header/css/cryptoz.css';
@import '../header/css/responsive.css';
@import '../header/css/animate.css';
@import '../header/css/bootstrap.min.css'; */
.tab_content ul li .items-General .accordion .accordion-box h3 a i{
    display: inline-block;
	content: "";
	position: absolute;
	right: 0;
	height: 18px;
	width: 18px;
    top: 4px;
}
.faq-part .container .row .col-md-10 #items .tab_content ul li .items-General .accordion .accordion-box h3 a:after {
    display: none!important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.do{
    background: red!important;
}
</style>