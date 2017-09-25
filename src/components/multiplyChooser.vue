<template>
    <div class="chooser-component">
        <ul class="chooser-list">
           <li @click="chooseToggel(index)" v-for="(item,index) in selections" :class="{active: checkActive(index)}">
               {{ item.label }}
           </li>
        </ul>
      </div>
</template>

<script>
import _ from "lodash"
export default {
   props:{
       selections:{
          type:Array,
          default:[{
             value: 1,
             label: '测试'  
          }
          ]
       }
   },
   data(){
      return{
          newArr:[0]
      }
   },
   methods:{
       chooseToggel(index){
        //   console.log(this.selections)
           console.log(this.newArr.indexOf(index) === -1)
           if(this.newArr.indexOf(index) === -1){
                 this.newArr.push(index)
           }else{
             this.newArr = _.remove(this.newArr, (idx) => {   //删除数组中一项
                return idx !== index
                })
            }
            let nowObjArray = _.map(this.newArr, (idx) => {
                    return this.selections[idx]
                })
             console.log(nowObjArray)
             this.$emit('on-change', nowObjArray)
            },
        checkActive(index){
           return  this.newArr.indexOf(index) !== -1
        }
   }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .chooser-component {
        position: relative;
        display: inline-block;
      }
      .chooser-list li{
        display: inline-block;
        border: 1px solid #e3e3e3;
        height: 25px;
        line-height: 25px;
        padding: 0 8px;
        margin-right: 5px;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
      }
      .chooser-list li.active {
        border-color: #4fc08d;
        background: #4fc08d;
        color: #fff;
      }
</style>
