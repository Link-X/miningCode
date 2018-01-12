export const hashrate = (data) => {
  data = [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73], ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245], ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111], ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128], ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106], ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73], ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107], ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106], ['2000-07-08', 107], ['2000-07-09', 66], ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64], ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83], ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]]
  let dateList = data.map(function (item) {
    return item[0]
  })
  let valueList = data.map(function (item) {
    return item[1]
  })

  let option = {

    // Make gradient line here
    visualMap: [{
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    }],
    title: [{
      left: 'center',
      text: '算力统计'
    }],
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      data: dateList
    }],
    yAxis: [{
      splitLine: { show: false }
    }],
    series: [{
      type: 'line',
      showSymbol: false,
      data: valueList
    }]
  }
  return option
}

export const CpuTemperature = (data) => {
  let option = {
    title: {
      left: 'center',
      text: 'CPU温度统计'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '10%',
      data: ['1号CPU', '2号CPU', '3号CPU', '4号CPU', '4号CPU']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '1号CPU',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 610]
      },
      {
        name: '2号CPU',
        type: 'line',
        stack: '总量',
        data: [220, 182, 591, 234, 290, 330, 310]
      },
      {
        name: '3号CPU',
        type: 'line',
        stack: '总量',
        data: [150, 232, 500, 154, 190, 330, 410]
      },
      {
        name: '4号CPU',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '5号CPU',
        type: 'line',
        stack: '总量',
        data: [820, 932, 1901, 934, 1290, 1330, 1320]
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
