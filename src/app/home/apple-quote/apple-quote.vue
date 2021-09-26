<template>
    <section class="apple-quote height-100vh" id="trigger-draw">
        <!--        <div style="width: 200px" id="trigger1"></div>-->
        <div class="container apple-quote__draw">
            <div class="apple-quote__draw__steve-jobs">
                <img src="/images/steve-jobs.jpeg" alt="Steve Jobs">
            </div>
            <div class="apple-quote__draw__svg" id="steve-job-quote"></div>
            <!--            <div style="height: 100vh">-->
            <!--                <div class="apple-quote__draw__content">-->
            <!--                    <div class="quote">-->
            <!--                        <cite>Think Different!</cite>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="apple-quote__draw__steve"></div>-->
            <!--            </div>-->
        </div>
    </section>
</template>

<script>
import * as Vivus from 'vivus';
import ScrollMagic from 'scrollmagic';
import TweenMax, {TimelineMax} from "gsap";
import Linear from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

export default {
    name: "AppleQuote",
    mounted() {
        new Vivus('steve-job-quote', {file: '/images/apple-think-diff.svg', start: 'autostart'}, () => {
            this.initDraw();
        });
    },
    methods: {
        initDraw() {
            let apple = document.querySelector('path#apple-logo');
            // prepare SVG
            this.pathPrepare(apple);
            // init controller
            let controller = new ScrollMagic.Controller();
            // build tween
            let tween = new TimelineMax()
                .add(TweenMax.to(apple, 0.9, {strokeDashoffset: 0, ease: Linear.easeNone})) // draw word for 0.9
                .add(TweenMax.to("path#apple-logo", 1, {stroke: "#fff", ease: Linear.easeNone}), 0);			// change color during the whole thing
            // build scene
            new ScrollMagic.Scene({triggerElement: '#trigger-draw', duration: 400, triggerHook: 0})
                .setClassToggle('.apple-quote__draw', 'steve-fade-in')
                .setTween(tween)
                .setPin('#trigger-draw')
                .addIndicators()
                .addTo(controller);
        },
        pathPrepare($el) {
            if ($el) {
                let lineLength = $el[0] ? $el[0].getTotalLength() : $el.getTotalLength();
                $el.style.strokeDasharray = lineLength;
                $el.style.strokeDashoffset = lineLength;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.apple-quote {
    .apple-quote__draw {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease-out;

        &.steve-fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        .apple-quote__draw__steve-jobs {
            max-width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-width: 100%;
                max-height: 80%;
            }
        }
        .apple-quote__draw__svg {
            height: 400px;
            width: fit-content;
        }
        //.apple-quote__draw__content {
        //    $color1: #fff;
        //    $color2: #d6d6d6;
        //
        //    height: 100%;
        //    min-height: 335px;
        //    //text-align: center;
        //    position: relative;
        //
        //    #replay {
        //        position: absolute;
        //        z-index: 9999;
        //        bottom: -65px;
        //        left: 50%;
        //        transform: translateX(-50%);
        //        display: inline-block;
        //        padding: 10px;
        //        background: rgba(240, 240, 240, 0.44);
        //        border: 1px solid #bababa;
        //        color: #696969;
        //        text-transform: uppercase;
        //        text-decoration: none;
        //        font-size: 0.6em;
        //        -moz-transition: left 6s cubic-bezier(1, 0.01, 1, 0.01);
        //        -o-transition: left 6s cubic-bezier(1, 0.01, 1, 0.01);
        //        -webkit-transition: left 6s cubic-bezier(1, 0.01, 1, 0.01);
        //        transition: left 6s cubic-bezier(1, 0.01, 1, 0.01);
        //
        //        &:hover {
        //            left: -100000%;
        //            -moz-transition: none;
        //            -o-transition: none;
        //            -webkit-transition: none;
        //            transition: none;
        //
        //            + .play {
        //                -moz-animation: none !important;
        //                -o-animation: none !important;
        //                -webkit-animation: none !important;
        //                animation: none !important;
        //            }
        //        }
        //    }
        //
        //    .quote {
        //        position: absolute;
        //        left: 25%;
        //        right: 25%;
        //        top: 20%;
        //        padding: 30px 0 15px 0;
        //
        //        cite {
        //            color: #444;
        //            font-family: "Hoefler Text", Georgia, Garamond, Times, serif;
        //            letter-spacing: 0.1em;
        //            //text-align: center;
        //            line-height: 110%;
        //            font-size: 1.7em;
        //            font-variant: small-caps;
        //
        //            &:before {
        //                content: "’’";
        //                position: absolute;
        //                left: -100px;
        //                top: 100px;
        //                width: 100%;
        //                height: 100%;
        //                pointer-events: none;
        //                font-size: 8em;
        //                text-align: left;
        //                font-family: Arial;
        //                letter-spacing: -16px;
        //                font-style: normal;
        //                font-weight: bold;
        //                color: rgb(123, 154, 185);
        //            }
        //        }
        //
        //        #dex-sign {
        //            position: absolute;
        //            bottom: -125px;
        //            right: 0;
        //        }
        //    }
        //}
    }
}
</style>