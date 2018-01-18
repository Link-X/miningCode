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
      top: '2%',
      data: ['1号GPU', '2号GPU']
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
      containLabel: true
    },
    yAxis: {
      type: 'log',
      name: '温度'
    },
    series: [
      {
        name: '1号GPU',
        type: 'line',
        data: [13, 32, 92, 27, 861, 247, 20]
      },
      {
        name: '2号GPU',
        type: 'line',
        data: [100, 252, 43, 8, 126, 32, 564]
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
