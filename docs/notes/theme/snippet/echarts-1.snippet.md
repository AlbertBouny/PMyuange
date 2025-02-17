---
title: echarts-1.snippet
createTime: 2025/01/09 19:35:06
permalink: /article/jrqko5b3/
---
````md
::: echarts Dynamic Data & Time Axis
```js
const oneDay = 86400000
const data = []
let now = new Date(1997, 9, 3)
let value = Math.random() * 1000

function randomData() {
  now = new Date(+now + oneDay)
  value = value + Math.random() * 21 - 10
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value),
    ],
  }
}

for (let i = 0; i < 1000; i++) data.push(randomData())

const option = {
  tooltip: {
    trigger: 'axis',
    formatter(params) {
      params = params[0]
      const date = new Date(params.name)
      return (
        `${date.getDate()
        }/${
          date.getMonth() + 1
        }/${
          date.getFullYear()
        } : ${
          params.value[1]}`
      )
    },
    axisPointer: {
      animation: false,
    },
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false,
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true,
      },
      dataView: {
        show: true,
        readOnly: false,
      },
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
      },
    },
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data,
    },
  ],
}
const timeId = setInterval(() => {
  if (myChart._disposed)
    return clearInterval(timeId)

  for (let i = 0; i < 5; i++) {
    data.shift()
    data.push(randomData())
  }
  myChart.setOption({
    series: [
      {
        data,
      },
    ],
  })
}, 1000)
```
:::
````
