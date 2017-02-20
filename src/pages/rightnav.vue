<template>
    <div id="rightnav">
        <div class="ylf-rightnav"  :style="rootStyle">
            <a class="rtoggle" @click="toggleNav">
                <i :class="['fa', navRight == 0 ? 'fa-angle-right' :'fa-angle-left']"></i>
            </a>
            <div class="ylf-rightnav__container">
                <div class="ylf-rightnav__toolbox" style="top: 10px;right: -1px;">
                    <div class="body">
                        <div class="group">
                            <div class="half">
                                <inputNum :model="x" @change="changeNum"></inputNum>
                                <label class="center">X</label>
                            </div>
                            <div class="half">
                                <inputNum :model="y" @change="changeNum"></inputNum>
                                <label class="center">Y</label>
                            </div>
                            <div class="half">
                                <inputNum :model="w" @change="changeNum"></inputNum>
                                <label class="center">宽</label>
                            </div>
                            <div class="half">
                                <inputNum :model="h" @change="changeNum"></inputNum>
                                <label class="center">高</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions ,mapGetters} from "vuex"
import inputNum from "components/forms/inputnum"
export default{
    data(){
        return{
            navRight:0,
            x:0,
            y:0,
            h:0,
            w:0
        }
    },
    computed:{
        rootStyle(){
            return {
                right : this.navRight + "px"
            }
        },
        ...mapGetters({
            compSize:'global/getCurCompSize'
        })
    },
    watch:{
        compSize:{
            deep:true,
            handler(nv,ov){
                if(nv){
                  this.x = nv.x;
                  this.y = nv.y;
                  this.w = nv.w;
                  this.h = nv.h;
                }
            }
        }
    },
    methods:{
        toggleNav(){
            let _right  = this.navRight == 0 ? -140 : 0;
            this.navRight = _right;
            this.$nextTick(() => {
                this.addScreenRight({
                    right : Math.abs(_right),
                })
            })
        },
        changeNum(v){
           console.log(v)
        },
        ...mapActions({
            addScreenRight:'global/setScreenSize'
        })
    },
    components:{
        inputNum
    }
}
</script>
<style>
@component-namespace ylf {
    @b rightnav{
        width: 238px;
        position: fixed;
        top: 38px;
        bottom: 0px;
        right: 0;
        text-align: left;
        transition: all 0.25s ease-in-out;
        overflow: visible;
        border-left: 1px solid #bbbbbb;
        z-index: 4;
        background-color: #efefef;
        @e container{
            position: absolute;
            overflow-x: hidden;
            overflow-y: auto;
            bottom: 0;
            width: 100%;
            height:100%;
            right: 0;
            z-index:1;
            transition: all 0.3s ease-in-out;
        }

        @e toolbox{

            width: 212px;
            position: absolute;
            border: 1px solid #bbbbbb;
            background: #f7f7f7;
            box-shadow: 0 0 20px #bbbbbb;

            & .body{
                padding:0;
                & .group{
                     padding: 10px 0px;
                     &:last-child{
                        padding-bottom:0;
                     }
                     & .half{
                        width: 44%;
                        margin-left: 4%;
                        margin-bottom: 6px;
                        float: left;
                        background: none;
                        & input{
                         width: 100%;
                        }
                    }
                    &  .input-group-addon {
                        cursor: pointer;
                        padding: 0px 3px;
                        font-size: 10px;
                        line-height: 20px;
                        color: #555555;
                        background-color: #eeeeee;
                        border-color: #cccccc;

                        &:first-child{
                          border-right:0;
                        }
                        &:last-child{
                          border-left: 0;
                        }
                    }
                }
            }


            & label{
                font-size: 12px;
                font-weight: normal;
                line-height: 12px;
                color: #888888;
                margin-bottom: 0;
                &.center{
                    width: 100%;
                    text-align: center;
                }
            }
        }

    }
}
</style>