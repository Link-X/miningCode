<style lang='less' scoped>
.mining-header {
  height: .3rem;
  display: flex;
  padding: 0 .16rem;
  align-items: center;
  justify-content: space-between;
  color: #333;
  background-color: #dee1e2;
  font-weight: 100;
  border: none;
  span {
    font-weight: bold;
  }
}

.mining-ul {
  li {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.09rem 0.15rem;
    word-break: break-all;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border: none;
    }
    div {
      width: 0.65rem;
      font-family: bold;
      color: #000;
    }
    p {
      font-weight: 100;
      color: #676767;
      text-align: right;
    }
  }
}

.mining-ul2 {
  li {
    div {
      width: 1.65rem;
    }
  }
}

.btn {
  height: .25rem;
  background-color: #fff;
}

.btn2 {
  height: .25rem;
}

.addRemark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .15rem;
  margin-top: .1rem;
  p {
    color: red;
  }
}

.mining-box {
  padding-bottom: 83px;
}

.home-scroll {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all .2s;
  overflow: hidden;
}

.mining-remark {
  position: relative;
}

.reRemark {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 100%;
}

.minie-to_box {
  background-color: #fff;
  margin-top: .09rem;
}

.minie-tu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .17rem;
  border-bottom: 1px solid #DEDEDE;
  &:last-child {
    border: none;
  }
}
</style>
<template>
  <div class="mining">
    <Scroll :data='remarkList' class="home-scroll">
      <div class="mining-box">
        <div class="mining-name">
          <h3 class="mining-header">
            <span>备注</span>
            <mt-button @click="addRemark" class="btn" type="default" size='small'>添加备注</mt-button>
          </h3>
          <ul>
            <li class="mining-remark" v-for="item  in remarkList" :key="item.id">
              <mt-field placeholder="请输入备注" v-model="item.remark"></mt-field>
            </li>
          </ul>
        </div>
        <div class="mining-name">
          <h3 class="mining-header">
            <span>矿机名称</span>
            <span>一号矿机</span>
          </h3>
          <ul class="mining-ul">
            <li>
              <div>网卡</div>
              <p>Intel Corporation 1210 Gigabit Network Connection (rev 03)</p>
            </li>
            <li>
              <div>mac地址</div>
              <p>7c2be108414c</p>
            </li>
            <li>
              <div>显卡驱动</div>
              <p>amdgpu</p>
            </li>
            <li>
              <div>GPU数量</div>
              <p>2</p>
            </li>
            <li>
              <div>挖矿软件</div>
              <p>claymore</p>
            </li>
          </ul>
        </div>
        <div class="mining-name">
          <h3 class="mining-header">
            <span>挖矿软件版本</span>
            <span>v0.01</span>
          </h3>
          <ul class="mining-ul mining-ul2">
            <li>
              <div>钱包地址(当前使用)</div>
              <p>i1fnrn123nfkl1n2o3nlkn1l2k3nlrnl1nkfl1k2n3l1nlnf1</p>
            </li>
            <li>
              <div>矿池(当前使用)</div>
              <p>guangdong-pool.etfans.org:3333</p>
            </li>
            <li>
              <div>操作系统</div>
              <p>4.4.0-98-generic</p>
            </li>
            <li>
              <div>IP地址</div>
              <p>192.168.1.1</p>
            </li>
            <li>
              <div>主板厂商</div>
              <p>ZRT</p>
            </li>
            <li>
              <div>主板型号</div>
              <p>zetk-21611</p>
            </li>
          </ul>
        </div>
        <div class="addRemark">
          <p>更多参数显示将在后续版本中逐步开放...</p>
        </div>

        <div class="minie-to_box">
          <div class="minie-tu">
            <span>算力统计图</span>
            <mt-button class="btn2" size='small' type='primary' @click="goGraph">查看图表</mt-button>
          </div>
          <div class="minie-tu">
            <span>1号CPU温度统计图</span>
            <mt-button class="btn2" size='small' type='primary' @click="goGraph">查看图表</mt-button>
          </div>
          <div class="minie-tu">
            <span>2号CPU统计图</span>
            <mt-button class="btn2" size='small' type='primary' @click="goGraph">查看图表</mt-button>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll.vue'
export default {
  data () {
    return {
      username: '',
      remarkList: [
        {
          remark: '',
          id: null
        }
      ]
    }
  },
  components: {
    Scroll
  },
  methods: {
    addRemark () {
      this.remarkList.push({
        remark: '',
        id: Math.random()
      })
    },
    goGraph () {
      let id = this.$route.query.id
      this.$router.push({
        path: '/graph',
        query: { id: id }
      })
    }
  }
}
</script>
