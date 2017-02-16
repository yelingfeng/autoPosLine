<template>
    <div class="ylf-screens ps-container" style="right: 239px;left: 180px;"  ref="wrapper" >
        <div class="ylf-screens__container" ref="inner">
            <div class="screen" :style="screenObj">
                <div class="canvas">

                </div>
            </div>
        </div>
        <!-- 缩略图 -->
        <div class="ylf-screens__minimap" ref="minimap">
            <div class="ylf-screens__minimap--indicator" ></div>
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
        this.w = 800 ;
        this.h = 500 ;
        const inner = this.$refs.inner;
        const wrapper = this.$refs.wrapper;
        const minimapObj = this.$refs.minimap;
        this.myScroll = new IScroll(wrapper,{
              startX:-510,
              startY:-10,
              mouseWheel: true,
              scrollbars: true,
              disableMouse: true,
              disablePointer: true,
              freeScroll:true,
              fadeScrollbars: false,
              probeType: 3,                  // 探针的活跃度或者频率 3最高
              scrollX: true,                 // 开启横轴滚动
              interactiveScrollbars: true ,  // 滚动条能拖动
              indicators: {
                el:minimapObj,
                interactive: true
              }
        });


        this.$nextTick(()=>{
            html2canvas(inner,{
                width:250,
                height:100
            }).then(function(canvas) {
                var ctx = canvas.getContext("2d")
                console.log(ctx)
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.scale(0.125,0.05);//x和y方向的缩放比例
                ctx.strokeRect(0, 0,250,100);
                minimapObj.appendChild(canvas);
            });
        })


    }
}
</script>
<style>

.ps-container{
  overflow: hidden !important;
}

.iScrollHorizontalScrollbar{
    bottom: 5px  !important;
    display:block;
}

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
            position: relative;
            z-index: -100;
            width: 2000px;
            height: 2000px;
            & .screen{
                z-index: -100;
                background: #e3e8ea;
                border: 1px solid #bbbbbb;
                border-radius: 10px;
                position: absolute;
                padding: 19px 19px 19px 19px;
                left: 30%;
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

        @e minimap{
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 1;
            width: 250px;
            height: 100px;
            border: 2px solid #ccc;
            background-color:transparent;
            @m indicator {
                position: absolute;
                z-index: 1;
                border: 1px solid #fe0;
                box-shadow: 0 0 5px #000;
                background: rgba(255,255,255,0.15);
                transform: translateZ(0);
                cursor:pointer;
            }
        }

    }
}
</style>