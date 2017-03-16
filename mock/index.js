import Mock from 'mockjs'

const Random = Mock.Random

Mock.setup({
  timeout: '1000-2000'
})

Mock.mock(/\/api\/test/, {
  'myData|10': [{
    'storeName': '@name',
    'storeAddress': '@city(true)',
    'fowllerNum|0-10000': 10,
    'fowllerFlag|1': true,
    'img': '@dataImage("450x300", "@name")',
    'id|+1': 0
  }]
})

Mock.mock(/\/api\/getBanner/, {
  'myData|5': [{
    'url': '',
    'img': '@dataImage("540x260", "@name")',
    'id|+1': 0
  }]
})

Mock.mock(/\/api\/getItemList/, {
  "myData|10": [{
    'title': '@ctitle',
    'fowllerNum|0-10000': 10,
    'img': '@dataImage("80x80", "@name")',
    'time': '@datetime()',
    'id|+1': 0
  }],
  'status|1': true
})

Mock.mock(/\/api\/postLogin/, {
  "myData": {
    'status|1': true
  }
})

Mock.mock(/\/api\/getCategoryData/, {
  'myData|20': [{
    'text': '@ctitle',
    'icon': '@dataImage("100x100", "@name")',
    'id|+1': 0
  }]
})

Mock.mock(/\/api\/getItemContent/, {
  "myData": {
    'content': '@cparagraph(30, 50)',
    'fowllerFlag|1': true,
    'time': '@datetime()',
    'title': '@ctitle'
  }
})
Mock.mock(/\/api\/getFowllerFlag/, {
  "myData": {
    'fowllerFlag|1': true
  }
})
