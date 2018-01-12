<style lang="less" scoped>
.setting-zhan {
  display: flex;
  justify-content: space-between;
  padding: 0.05rem 0.15rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  span {
    margin-top: 0.1rem;
    font-size: 0.18rem;
  }
}

.setting-img {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

.setting-btn {
  padding: 0.085rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #EFEFEF;
  vertical-align: middle;
  i {
    font-size: 0.25rem;
    vertical-align: middle;
  }
  p {
    float: right;
    height: 100%;
    line-height: 0.25rem;
  }
}
</style>

<template>
  <div>
    <div class="setting-zhan">
      <span>头像</span>
      <div class="setting-img">
        <img src="../../assets/img/toxian.jpg" />
      </div>
    </div>
    <div class="setting-btn">
      <i class="iconfont icon-shouji"></i>
      手机号
      <p>{{iphone}}</p>
    </div>
    <router-link tag='div' :to="{path: '/FindKey'}" class="setting-btn">
      <i class="iconfont icon-icon56-copy"></i>
      修改密码
    </router-link>
    <div class="setting-btn" @click="goBack">
      <i class="iconfont icon-tuichu"></i>
      退出登录
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { logout } from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sheetVisible: false,
      actions: [{
        name: '确定',
        method () {
          logout()
        }
      }]
    }
  },
  methods: {
    goBack () {
      this.sheetVisible = true
    }
  },
  computed: {
    ...mapGetters([
      'iphone'
    ])
  }
}
</script>
