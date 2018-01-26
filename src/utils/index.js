export const hashrate = (data) => {
  let option = {

    // Make gradient line here
    visualMap: [{
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0
    }],
    // title: [{
    //   left: 'center',
    //   text: '算力统计'
    // }],
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
      splitLine: { show: false }
    }],
    series: [{
      type: 'line',
      showSymbol: false,
      data: [1, 20, 50, 30, 45, 35, 60]
    }]
  }
  return option
}

export const CpuTemperature = (data) => {
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      top: '0%',
      data: ['1号GPU', '2号GPU', '3号GPU', '4号GPU', '5号GPU', '6号GPU', '7号GPU', '8号GPU']
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: '温度'
    },
    series: [
      {
        name: '1号GPU',
        type: 'line',
        data: [10, 32, 92, 27, 22, 36, 20]
      },
      {
        name: '2号GPU',
        type: 'line',
        data: [10, 56, 43, 8, 126, 32, 23]
      },
      {
        name: '3号GPU',
        type: 'line',
        data: [1, 12, 83, 18, 56, 32, 200]
      },
      {
        name: '4号GPU',
        type: 'line',
        data: [20, 15, 35, 18, 76, 39, 23]
      },
      {
        name: '5号GPU',
        type: 'line',
        data: [50, 55, 63, 138, 56, 29, 13]
      },
      {
        name: '6号GPU',
        type: 'line',
        data: [20, 35, 13, 158, 26, 19, 3]
      },
      {
        name: '7号GPU',
        type: 'line',
        data: [120, 15, 53, 68, 22, 19, 23]
      },
      {
        name: '8号GPU',
        type: 'line',
        data: [10, 25, 33, 38, 52, 129, 150]
      }
    ]
  }
  return option
}

export const logout = () => {
  // 退出账号
  localStorage.clear()
  window.location.reload()
}

export const hassClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export const addClass = (el, className) => {
  if (hassClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export const remClass = (el, className) => {
  if (!hassClass(el, className)) {
    return
  }
  let rmCl = el.className.split(' ')
  rmCl.splice(rmCl.indexOf(className), 1)
  el.className = rmCl.join(' ')
}

export const touchDoms = (dom, name) => {
  if (typeof dom !== 'object') {
    return
  }
  let liDom = null
  dom.path.forEach(val => {
    if (val.nodeName === 'LI') {
      liDom = val
    }
  })
  if (liDom) {
    if (name === 'add') {
      addClass(liDom, 'home-li_click')
    } else {
      remClass(liDom, 'home-li_click')
    }
  }
}
export const getDate = () => {
  var d = new Date()
  var str = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  return str
}
