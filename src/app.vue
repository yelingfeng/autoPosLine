<template>
    <div class="workspace">
        <Toolbar></Toolbar>
        <ComponentsBox></ComponentsBox>
        <Screens></Screens>
    </div>
</template>
<script>
import Toolbar from "pages/toolbar"
import ComponentsBox from "pages/components"
import Screens from "pages/Screens"
export default{
    name : "app",
    data(){
        return{
        }
    },
    mounted(){
        let w = $(window).width();
    },
    components:{
        Toolbar,
        Screens,
        ComponentsBox
    }
}
</script>
<style>
@reset-global pc;
body {
    font-family: 'Microsoft YaHei','Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    font-size :14px;
    -webkit-font-smoothing: antialiased;
}
.workspace {
    position: fixed 0 0 *;
    size:100% 100%;
}
</style>