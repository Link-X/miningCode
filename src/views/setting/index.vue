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

.imgFile {
  background-color: transparent;
}
</style>

<template>
  <div>
    <div class="setting-zhan" @click="upImg">
      <span>头像</span>
      <div class="setting-img">
        <img src="../../assets/img/toxian.jpg" v-if="!imgSrc" />
        <img :src="'http://47.91.249.184/Public/Upload/' + imgSrc" v-else />
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
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2">
    </mt-actionsheet>
    <input ref="files" id="files" type='file' class="imgFile" @change="upImgFile" style="display:none;">
  </div>
</template>

<script>
import { logout } from '@/utils/index'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sheetVisible: false,
      sheetVisible2: false,
      imgSrc: '',
      def: '../../assets/img/toxian.jpg',
      actions: [{
        name: '确定',
        method () {
          logout()
        }
      }],
      actions2: [{
        name: '更换头像',
        method () {
          document.getElementById('files').click()
        }
      }]
    }
  },
  created () {
    this.imgSrc = localStorage.getItem('imgSrc')
  },
  methods: {
    goBack () {
      this.sheetVisible = true
    },
    upImg () {
      this.sheetVisible2 = true
    },
    upImgFile (e) {
      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('file', file)
        formData.append('token', localStorage.getItem('token'))
        let config = {
          url: 'home/user/imguplod',
          method: 'post',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$http2(config).then(res => {
          console.log(res)
          if (res.code === 200 || '200') {
            this.imgSrc = res.data.img
            localStorage.setItem('imgSrc', res.data.img)
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters([
      'iphone'
    ])
  }
}
</script>
