<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #1C85C8;
  border: 1px solid #1C85C8;
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

.login-bottom {
  width: 75%;
  height: .1rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: .5rem;
  margin: 0 auto;
  color: #fff;
  font-size: .2rem;
  .login-bottom_link {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-right: .1rem;
    }
    i {
      font-size: .25rem;
    }
  }
}

.login-achieved {
  // animation: myfirst 5s infinite;
  i {
    font-size: .45rem;
    color: #fff;
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
</style>

<template>
  <div class="login">
    <div class="login-header">登录</div>
    <div class="login-from">
      <ul class="login-from_ul">
        <li class="login-from_userName">
          <i class="iconfont icon-me"></i>
          <input class="from-inp" autocomplete='off' v-model="from.username" />
        </li>
        <li>
          <i class="iconfont icon-mima"></i>
          <input type="password" autocomplete='off' class="from-inp" v-model="from.password" />
        </li>
      </ul>
    </div>
    <mt-button class="login-from_submit" type="default" @click.native="submit">登录</mt-button>
 <!-- <div class="login-bottom">
        <router-link class="login-bottom_link" tag="div" to="/FindKey">
              <span>忘记密码,重新找回密码</span>
            <i class="iconfont icon-yuanjiantou"></i>
        </router-link>
       </div> -->
    <div class="login-achieved centers" v-if="achieved">
      <mt-spinner :size='50' color="rgb(255, 255, 255)" type="triple-bounce"></mt-spinner>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      achieved: false,
      from: {
        username: '13512345678',
        password: '123456'
      }
    }
  },
  methods: {
    submit () {
      this.achieved = true
      setTimeout(() => {
        this.login(this.from).then(res => {
          let data = res.data
          let code = +data.code
          this.achieved = false
          if (code !== 200) {
            this.$toast({
              title: '请求错误',
              message: data.message,
              position: 'top',
              iconClass: ''
            })
            return
          }
          this.SET_TOKEN_STORAGE(data.data.token)
          this.SET_IPHONE(this.from.username)
        })
      }, 500)
    },
    ...mapActions([
      'login'
    ]),
    ...mapMutations([
      'SET_TOKEN_STORAGE',
      'SET_IPHONE'
    ])
  }
}
</script>