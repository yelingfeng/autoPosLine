<template>
    <div class="line-container">
        <div class="vertical_line left" :style="cleft"></div>
        <div class="vertical_line top" :style="cxCenter" ></div>
        <div class="vertical_line right" :style="cright" ></div>
        <div class="horizon_line left"  :style="ctop" ></div>
        <div class="horizon_line top" :style="cyCenter" ></div>
        <div class="horizon_line right"  :style="cbottom" ></div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
let attractOffsets = {};
export default{
    props:['w','h'],
    data(){
        return {
           viewMod:{
             left :[],
             top :[]
           },
           cleft:{left:0,display:'none'},
           cxCenter:{left:0,display:'none'},
           cright:{left:0,display:'none'},
           ctop:{top:0,display:'none'},
           cyCenter:{top:0,display:'none'},
           cbottom:{top:0,display:'none'},
           curStyle :{},
           elementPos : {
              left : [],
              top : []
           }
        }
    },
    computed:{
        ...mapGetters({
            moveObj:'global/getMovingObj',
            elements : 'global/getComponents',
            selectedElement : 'global/getCurSelect'
        })
    },
    watch:{
         selectedElement:{
            deep:true,
            handler(newVal,oldVal){
                if(newVal ){
                    let size = newVal.size
                    let style = {
                        width : size.width,
                        height : size.height,
                        left :size.x,
                        top : size.y,
                        right : size.x + size.width,
                        xCenter : size.x + parseInt(size.width / 2,10),
                        bottom : size.y + size.height,
                        yCenter : size.y + parseInt(size.height/2,10)
                    };
                   this.curStyle = style;
                }
            }
         },

        'moveObj.left':{
            deep:true,
            handler(left){
                if(left){
                    this.curStyle.left = left;
                    this.posStyle('left')
                    this.posStyle('xCenter')
                    this.posStyle('right')
                }
            }
        },
        'moveObj.top':{
            deep:true,
            handler(top){
                if(top){
                    this.curStyle.top = top;
                    this.posStyle('top')
                    this.posStyle('yCenter')
                    this.posStyle('bottom')
                }
            }
        }
    },
    methods:{
        posStyle(pos){
            let relativePos = /left|right|xCenter/.test(pos) ? 'left' : 'top';
            let allPos = this.elementPos[relativePos].concat(this['viewMod'][relativePos]);
            let attractOffset = 5;
            let elePos = this.curStyle[pos];
            let samePos = false;
            let targetPos;
	        let targetOffset ;
	        let lockX = false;
	        let lockY = false;
            attractOffsets[pos] = undefined;
            for (let i = 0,allNum = allPos.length; i < allNum; i += 1) {
                targetPos = allPos[i];
                if (elePos <= attractOffset + targetPos && elePos >= targetPos - attractOffset) {
                  targetOffset = targetPos - elePos;
                  samePos = true;
                  attractOffsets[pos] = targetOffset;
                  break;
                }
            }
            if (pos == 'yCenter' && this.movingObj) {
                let moveObj = {};
                for (var key in attractOffsets) {
                  if (!lockX && attractOffsets[key] != undefined && ['left', 'right', 'xCenter'].indexOf(key) > -1) {
                    moveObj.left = parseInt(attractOffsets[key]);
                    lockX = true;
                  }
                  if (!lockY && attractOffsets[key] != undefined && ['top', 'bottom', 'yCenter'].indexOf(key) > -1) {
                    moveObj.top = parseInt(attractOffsets[key]);
                    lockY = true;
                  }
                }
                window.moveObj = moveObj;
             }
	        let targetAttr = 'c'+pos;
	        let style = {
	            display: samePos ? 'block' : 'none'
	        }
	        if(samePos){
	           style[relativePos] = targetPos+ "px"
	        }
            this[targetAttr] = style;
        },
        viewInit(){
          let top = 0 ;
          let bottom = 0;
          top = $("#canvas-container").offset()['top'];
          bottom = top + this.h;
          this.viewMod.left = [0, (0 + this.w) / 2, this.w];
          this.viewMod.top = [top , (top + bottom)  / 2, bottom ]
          this.setElementsPos()
        },
        setElementsPos(){
          let elements = this.elements,
	          el,
	          elementStyle,
	          selectId = this.selectedElement.id,
	          num = elements.length,
	          viewBoxBottom = this.viewMod ? this.viewMod['top'][2] : this.h,
	          viewBoxTop = this.viewMod ? this.viewMod['top'][0] : 0,
	          pos = {
                left: [],
                top: []
              },
	          left ,
	          top ,
	          width ,
	          height ;

	       for(let i= 0 ;i<num ;i++){
	            el = elements[i];
                if (el.id == selectId) {
                  continue;
                }
                left = el.size['x'];
                top = el.size['y'];
                width = el.size['width'];
                height = el.size['height'];
                pos['left'].push(left, left + parseInt(width / 2), left + width);
	            pos['top'].push(top, parseInt(top + height / 2), top + height);
            }
            this.$set(this.elementPos, 'left',pos['left']);
            this.$set(this.elementPos, 'top',pos['top']);
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