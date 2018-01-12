<style lang='less' scoped>
.account-top {
  padding: .2rem 0;
  background-color: #EFEFEF;
}

.account-img {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

.account-center {
  height: 1.1rem;
  background-color: #fff;
}

.account-center_ul {
  li {
    width: 50%;
    float: left;
    padding: .1rem 0;
    p {
      font-size: .18rem;
      text-align: center;
    }
    span {
      display: block;
      font-weight: bold;
      font-size: .6rem;
      color: #0d75e2;
      text-align: center;
    }
  }
}

.account-sisint {
  padding: 0.08rem 0.3rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #EFEFEF;
  span {
    display: flex;
    width: .28rem;
    height: .28rem;
    background-color: #5Ca5DB;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  i {
    font-size: .18rem;
    color: #fff;
  }
  p {
    border-radius: 3px;
    height: .15rem;
    line-height: .15rem;
    background-color: #5Ca5DB;
    padding: 0.05rem;
    color: #fff;
    margin-left: 0.1rem;
  }
}
.account-color2 {
  background-color: #0E67B7!important;
}
.account-color {
  background-color: #7DD53F!important;
}
.account-sisint2 {
  i {
    font-size: .16rem;
  }
}
</style>

<template>
  <div class="account">
    <div class="account-top">
      <div class="account-img">
        <img src="../../assets/img/toxian.jpg" />
      </div>
    </div>
    <div class="account-center">
      <ul class="account-center_ul">
        <li>
          <p>我的矿机数量</p>
          <span>13</span>
        </li>
        <li>
          <p>矿机总算力</p>
          <span>13</span>
        </li>
      </ul>
    </div>
    <ul>
      <router-link tag='li' :to="{path: '/anomaly'}" class="account-sisint">
        <span>
          <i class="iconfont icon-weibiaoti3"></i>
        </span>
        <p class="account-p">我的消息</p>
      </router-link>
      <router-link tag='li' :to="{path: '/miningList'}" class="account-sisint account-sisint2">
        <span class="account-color">
          <i class="iconfont icon-wodekuangji"></i>
        </span>
        <p class="account-p account-color">我的矿机</p>
      </router-link>
      <router-link tag='li' :to="{path: '/setting'}" class="account-sisint account-sisint3">
        <span class="account-color2">
          <i class="iconfont icon-shezhi"></i>
        </span>
        <p class="account-p account-color2">我的设置</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>