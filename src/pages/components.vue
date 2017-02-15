<template>
    <div class="ylf-compArea">
        <div class="ylf-compArea__containers">
            <div class="items">
                <div class="group ">
                    <div class="title">基本</div>
                </div>
                <div class="item" v-for="(item,index) in compItems">
                    <div class="component">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="ylf-compArea__footer">
            <a href="javascript:;"><i class="fa fa-pinterest"></i></a>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            compItems:[]
        }
    },
    mounted(){
        let comps = [
           {id:1 ,name:"文本"},
           {id:2 ,name:"按钮"},
           {id:3 ,name:"图片"}
        ]
        this.compItems = comps;
    },
    components:{
    }
}
</script>
<style>
@component-namespace ylf {
    @b compArea{
        position: fixed;
        left: 0;
        top: 38px;
        box-sizing: border-box;
        bottom: 0px;
        width: 180px;
        z-index: 4;
        border-right: 1px solid #aaaaaa;
        transition: all 0.15s ease-in-out;

        @e containers {
            margin-right: auto;
            margin-left: auto;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            width: 100%;
            text-align: center;
            position: absolute;
            top: 0;
            bottom: 46px;
            background-color: #f7f7f7;
            padding: 0;

            & .items{
                width: 180px;

                & .group{
                    clear:both;

                    & .title{
                        line-height: 30px;
                        border-bottom: 1px solid #cccccc;
                        color: #666666;
                        margin: 10px 20px;
                    }
                }

                & .item:hover{
                  background: RGBA(255, 255, 255, 0.8)
                }
                & .item{
                    float: left;
                    opacity: 1;
                    margin: 0px;
                    cursor: pointer;
                    padding: 15px;
                    & .component{
                        background: white;
                        border: 1px solid #efefef;
                        width: 120px;
                        height: 30px;
                    }
                    & span{
                        color: #555555;
                        font-size: 14px;
                        line-height: 28px;
                    }
                }
            }
        }

        @e footer{
            height: 46px;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            text-align: center;
            line-height: 46px;
            background: #e3e8ea;
            border-top: 1px solid #aaaaaa;
            color: #888888;
            & a{
                color: #888888;
                text-decoration: none;
                font-size: 14px;
                width: 60px;
                display: inline-block;
                cursor: pointer;
                & i{
                 font-size: 20px;
                }
            }
        }
    }

}

</style>