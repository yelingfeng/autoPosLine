import Vue from "vue"
import Component from "vue-class-component"
import DragClass from './drag'
@Component({
     props:{
        options:{
            type:Object,
            default(){
                return {}
            }
        }
     },
})
export default class elementBox {

    data(){
      return {

      }
    }

    clickHandler(){

    }

    resizeDone(){

    }

    contextMenuHandler(){

    }

    render(h){
        let content ;
        if(this.options.type == "1"){
          content = <h1>1234567890</h1>
        }else if(this.options.type == "2"){
          content = <button class="btn">按钮</button>
        }else if(this.options.type == "3"){
          content = <img class="ylf" width="40" height="40"></img>
        }
        return(
            <DragClass ref="box" options={this.options}
                 onHandlerClick={this.clickHandler}
                 onHandlerResize={this.resizeDone}
                 onHandlerRight={this.contextMenuHandler}>
              {content}
             </DragClass>
        )
    }
}
