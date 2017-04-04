import Mock from 'mockjs'

const Random = Mock.Random

Mock.setup({
  timeout: '1000-2000'
})

Mock.mock(/\/api\/banner/, {
  'data|5': [{
    'url': '',
    'img': '@dataImage("400x199", "@name")',
    'id|+1': 0,
    'weight': 0
  }],
  code: 0,
  errorMessage: ''
})

Mock.mock(/\/api\/itemView/, {
  'data': {
    'title': '@ctitle',
    'author': 'genghaode',
    'image': '@dataImage("80x80", "@name")',
    'create_time': '@datetime()',
    'content': ['内容'],
    category: '1',
    isCollection: false,
    'id': 1
  },
  code: 0,
  errorMessage: ''
})

Mock.mock(/\/api\/item/, {
  "data": {
    'items|10': [{
      'title': '@ctitle',
      'author': 'genghaode',
      'image': '@dataImage("80x80", "@name")',
      'create_time': '@datetime()',
      'content': ['内容'],
      category: '1',
      'id|+1': 0
    }],
    'total': 20
  },
  code: 0,
  errorMessage: '没有数据了'
})

Mock.mock(/\/api\/login/, {
  "data": null,
  'code': 0,
  'errorMessage': '登录成功'
})

Mock.mock(/\/api\/category/, {
  'code': 0,
  errorMessage: '',
  'data|6': [{
    'name': '@ctitle',
    'image': '@dataImage("100x100", "@name")',
    'id|+1': 0
  }]
})


Mock.mock(/\/api\/collection/, {
  "code": 0,
  data: {
    'isCollection': false
  },
  errorMessage: ''
})

Mock.mock(/\/api\/logout/, {
  code: 0,
  data: null,
  errorMessage: '退出成功',
})
