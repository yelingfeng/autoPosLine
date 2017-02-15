<template>
    <div class="ylf-toolbar" id="toolbar">
        <div class="ylf-toolbar__container">
             <div class="ylf-toolbar__left">
                 <a class="name">yelingfeng</a>
                 <a class="avatar" href="https://github.com/yelingfeng" target="_blank">
                     <img src="../assets/images/ylf.png" height="20" width="20" />
                 </a>
                 <a class="divider"></a>
                 <a v-for="icon in iconArr">
                     <i :class="['fa','fa-'+icon]"></i>
                 </a>
             </div>
             <div class="ylf-toolbar__right">
                 <a class="launch">  <i class="fa fa-rocket"></i>运行</a>
             </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:'hello vue',
            iconArr : ['weibo','github','weixin','qq','windows','mac']
        }
    },
    methods:{
    },
    components:{
    }
}
</script>
<style>
  #toolbar{
    right: 0px;
    left: 0px;
    top: 0;
    transition: all 0.15s ease-in-out;
    z-index: 110;
  }

 @component-namespace ylf{
    @b toolbar {
        background: #e3e8ea;
        position: fixed;
        border-bottom: 1px solid #bbbbbb;
        padding: 0 10px;
        height: 38px;

        @e container {
            display: flex;
            box-pack: justify;
            justify-content: space-between;
            box-align: center;
            align-items: center;
            height: 100%;

            & a {
                display: inline-block;
                text-align: center;
                cursor: pointer;
                text-decoration: none;
                opacity: 0.65;
                color: #333333;
              & :hover {
                color: #ff6600
              }
            }
        }

        @e left {
            align-self: flex-start;
            display: flex;

            & .name{
                width: 118px;
                text-align: left;
                margin-left: 10px;
                font-size: 14px;
                overflow: hidden;
                border-radius: 0px;
            }

            & .divider{
                display: inline-block;
                width: 1px;
                background: #bbbbbb;
                height: 22px;
                margin: 7px 2px;
            }
            & a{
                font-size: 20px;
                line-height: 38px;
                width: 30px;
                height: 38px;
                margin: 0 3px;
            }
            & img{
               margin: 9px 0;
            }
        }
        @e right {
            width: 228px;
            height: 22px;
            justify-content: space-around;
            box-align: center;
            align-items: center;
            border-left: 1px solid #bbbbbb;
            display: flex;

            & i{
                font-size: 20px;
                vertical-align: middle;
                margin-right: 4px;
            }
            & a:hover {
                color: #ff6600
            }
        }
    }
 }

  .toolbar {
    background: #e3e8ea;
    position: fixed;
    border-bottom: 1px solid #bbbbbb;
    padding: 0 10px;
    height: 38px;
  }
  .toolbar-container{
    display: flex;
    box-pack: justify;
    justify-content: space-between;
    box-align: center;
    align-items: center;
    height: 100%;

    & a {
        display: inline-block;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        opacity: 0.65;
        color: #333333;
      & :hover {
        color: #ff6600
      }
    }


    .left {
        align-self: flex-start;
        display: flex;

        & .divider{
            display: inline-block;
            width: 1px;
            background: #bbbbbb;
            height: 22px;
            margin: 7px 2px;
        }

        & a{
            font-size: 20px;
            line-height: 38px;
            width: 30px;
            height: 38px;
            margin: 0 3px;
        }
        .name {
            width: 118px;
            text-align: left;
            margin-left: 10px;
            font-size: 14px;
            overflow: hidden;
            border-radius: 0px;
        }
        & img{
           margin: 9px 0;
        }

    }

    .right{
        width: 228px;
        height: 22px;
        justify-content: space-around;
        box-align: center;
        align-items: center;
        border-left: 1px solid #bbbbbb;
        display: flex;

        & i{
            font-size: 20px;
            vertical-align: middle;
            margin-right: 4px;
        }
        & a:hover {
            color: #ff6600
        }
    }

  }

</style>