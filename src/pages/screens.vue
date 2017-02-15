<template>
    <div class="ylf-screens" style="right: 239px;left: 180px;">
        <div class="ylf-screens__container">
            <div class="screen" :style="screenObj">
                <div class="canvas">


                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            w : 0,
            h : 0,
        }
    },
    computed:{
        screenObj(){
            return {
                width: this.w +"px",
                height: this.h + "px"
            }
        }
    },
    mounted(){
        this.w = 1000 ;
        this.h = 500 ;
    }
}
</script>
<style>
@component-namespace ylf {
    @b screens{
        position: fixed;
        top: 38px;
        left: 180px;
        bottom: 0;
        box-sizing: border-box;
        overflow: auto;
        z-index: 2;
        background: #f0f0f2;

        @e container{
            width: 100%;
            position: relative;
            z-index: -100;
            width: 10000px;
            height: 9999px;

            & .screen{
                margin-left: -213px;
                z-index: -100;
                background: #e3e8ea;
                border: 1px solid #bbbbbb;
                border-radius: 10px;
                position: absolute;
                padding: 19px 19px 39px 19px;
                left: 50%;
                top: 58px;
                transform-origin: center 0;
                transition: all 0.3s ease-in-out;

                & .canvas{
                    border: 1px solid #c2c2c3;
                    width: 100%;
                    height: 100%;
                    background:#f0f0f2 repeat top left;
                    background-size: 100% auto;
                    overflow: visible;
                    position: relative;
                    z-index: -65535;
                }
            }
        }
    }
}
</style>