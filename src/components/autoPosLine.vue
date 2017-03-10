<template>
    <div class="line-container">
        <div v-for="item in leftStyle" class="vertical_line" :style="item"></div>
        <div v-for="item in topStyle" class="horizon_line"  :style="item" ></div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import _ from "lodash"
export default{
    props:['w','h'],
    data(){
        return {
           elementPos : {
              left : [this.w*1/2],
              top : [this.h*1/2]
           },
           leftStyle:[],
           topStyle:[],
           selectId:""
        }
    },
    computed:{
        ...mapGetters({
            allElementsOption:'global/getAllElementsOption',
            getCurSelect:"global/getCurSelect"
        })
    },
    watch:{
        allElementsOption : {
            deep:true,
            handler(e){
                this.setSelectId(e)
                this.countElementPos(e)
            }
        },
        leftStyle : {
            deep:true,
            handler(e){
            }
        }
    },
    methods:{
        setSelectId(e){
          this.selectId = e.selectId
        },
        countElementPos(e){
            //每次计算的时候都需要将以前数据清除
            this.clearElementPos()
            //对对象进行循环
            for(let key in e){
                if(  key != "selectId"){
                    let x = parseInt(e[key].x)
                    let y = parseInt(e[key].y)
                    let h = parseInt(e[key].height)
                    let w = parseInt(e[key].width)
                    let tTop = y
                    let tCenter = y + 1/2 * h
                    let tBottom = y + h
                    let lLeft = x
                    let lMiddle = x + 1/2 * w
                    let lRight = x + w
                    this.elementPos.left = this.elementPos.left.concat([lLeft,lMiddle,lRight])
                    this.elementPos.top = this.elementPos.top.concat([tTop,tCenter,tBottom])
                }
            }
            this.checkCoincidence()
        },
        clearElementPos(){
            this.elementPos = {
                left : [this.w*1/2],
                top : [this.h*1/2]
            }
            this.leftStyle = []
            this.topStyle = []
        },
        checkCoincidence(){
            let _this = this
            //检测是否有重复值
            let repeatObj = {
                lRepeat : this.judgeArrRepeat(this.elementPos.left),
                tRepeat : this.judgeArrRepeat(this.elementPos.top)
            }
            for(let key in repeatObj){
                if(repeatObj[key] instanceof Array && repeatObj[key].length >0 ){
                    repeatObj[key].forEach(function (e) {
                        if(key == "lRepeat"){
                            _this.leftStyle.push({
                                left : e + "px",
                                display : "block"
                            })
                        }else if(key == "tRepeat"){
                            _this.topStyle.push({
                                top : e + "px",
                                display : "block"
                            })
                        }
                    })
                }
            }
        },
        judgeArrRepeat(arr){
            let s = arr.join(",")+",";
            let resultArr = []
            for(let i=0;i<arr.length;i++) {
                if(s.replace(arr[i]+",","").indexOf(arr[i]+",")>-1) {
                    resultArr.push(arr[i])
                }
            }
            return _.uniq(resultArr)
        }
    }
}
</script>
<style>
.line-container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    -webkit-user-drag: none;
    pointer-events: none;

    & .vertical_line {
        height: 100%;
        position: absolute;
        top: 0;
        left: 100px;
        width: 1px;
        border-left: 1px dashed #fe9d60;
        z-index: 9;
        display: none;
    }
    & .horizon_line {
        width: 110%;
        position: absolute;
        top: 100px;
        left: -5%;
        height: 1px;
        border-top: 1px dashed #fe9d60;
        z-index: 9;
        display: none;
    }
}
</style>