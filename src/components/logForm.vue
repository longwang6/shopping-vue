<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
           v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
           v-model="passwordModel" placeholder="请输入密码">
        </div>
        <!-- <span class="g-form-error">{{ ddd }}</span> -->
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a @click="onlog" class="button">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
      <!-- <p>23333</p> -->
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
       usernameModel:'',
       passwordModel:'',
       errorText:''
    }
  },
  computed: {
      userErrors(){
         let errorText, status
         if(!/@/g.test(this.usernameModel)){
             errorText = '不包涵@！'
             status = false
         }else{
            errorText = ''
            status = true
         }
         if(!this.userFlag){
            errorText = "",
            this.userFlag = true
         }
         return {
            errorText,
            status
         }
      },
      passwordErrors(){
        let errorText, status
        if(!/^\w{1,6}$/g.test(this.passwordModel)){
             errorText = "密码不是1-6位！"
             status = false
        }else{
           errorText = ''
           status = true
        }
        if(!this.passwordFlag){
            errorText = "",
            this.passwordFlag = true
         }
        return {
           errorText,
           status
        }
      }
  },
  methods :{
       onlog(){
         if(!this.userErrors.status || !this.passwordErrors.status){
            this.errorText = '部分选项未通过！'
         }else{
            this.$http.post('api/login')
            .then( (res) =>{
               this.$emit('has-log',res.data)
            }
            ,(erro)=>{
              console.log(erro)
            })
         }
       }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}

</style>
