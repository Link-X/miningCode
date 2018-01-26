
<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #1C85C8;
  border: 1px solid #1C85C8;
  position: absolute;
  z-index: 200;
  bottom: 0;
}

.login-header {
  width: 100%;
  height: 1rem;
  text-align: center;
  font-size: .25rem;
  color: #fff;
  margin-top: .3rem;
}

.login-from {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: .1rem;
}

.login-from_submit {
  display: block;
  width: 80%;
  height: .5rem;
  margin: 0 auto;
  margin-top: .3rem;
  border: 1px solid #fff;
  border-radius: .1rem;
  background-color: transparent;
  font-size: .2rem;
  color: #fff;
}

.from-userName-inp {
  background-color: transparent;
}

.login-from_ul {
  li {
    height: .5rem;
    padding: .1rem .04rem;
    position: relative;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      padding-left: .51rem;
      font-size: .2rem;
      color: #fff;
    }
    i {
      position: absolute;
      left: .17rem;
      font-size: .25rem;
      color: #fff;
    }
  }
}

.login-from_userName {
  border-bottom: 1px solid #fff;
}

.login-close {
  position: absolute;
  top: .18rem;
  right: .3rem;
  z-index: 1000;
  i {
    font-size: .33rem;
    color: #fff;
  }
}
</style>
<style lang='less'>
.find {
  .mint-toast {
    z-index: 20001;
  }
}
</style>

<template>
  <div class="login find">
    <div class="login-header">设置密码</div>
    <div class="login-from">
      <ul class="login-from_ul">
        <li class="login-from_userName">
          <i class="iconfont icon-mima"></i>
          <input 
          type="password" 
          autocomplete='off' 
          class="from-inp" 
          v-model="from.pwd1" />
        </li>
        <li>
          <i class="iconfont icon-mima"></i>
          <input 
          type="password"  
          autocomplete='off' 
          class="from-inp" 
          v-model="from.pwd2" />
        </li>
      </ul>
    </div>
    <mt-button 
    class="login-from_submit" 
    type="default" 
    @click="submit">确定</mt-button>
    <div class="login-close" @click="back">
      <i class="iconfont icon-closecircleoutline"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { logout } from '@/utils/index'
export default {
  data () {
    return {
      from: {
        pwd1: '',
        pwd2: ''
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    submit () {
      if (!this.from.pwd1 && !this.from.pwd1) {
        this.$toast({
          message: '密码不能为空',
          position: 'top',
          duration: 5000
        })
        return
      }
      if (this.from.pwd1 !== this.from.pwd2) {
        this.$toast({
          message: '两次密码不一致',
          position: 'top',
          duration: 5000
        })
        return
      }
      this.setPwd()
    },
    setPwd () {
      this.setPasd(this.from).then(res => {
        let code = +res.code
        if (code === 200) {
          this.$toast({
            message: res.message,
            position: 'top',
            iconClass: ''
          })
          this.goHome()
        }
      })
    },
    goHome () {
      setTimeout(() => {
        this.$router.push({
          path: '/home'
        })
        logout()
      }, 1000)
    },
    ...mapActions([
      'setPasd'
    ])
  }
}
</script>
