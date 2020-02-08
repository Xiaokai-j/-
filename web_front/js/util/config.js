// 配置文件
// 把这个项目中所有用到的接口地址全放在这里

// 所有接口的基地址
// 就是运行小黑窗服务器的地址.如果当前的服务器就是在自已电脑上，就可以直接写成localhost
var BASEURL = 'http://localhost:8000'
// var BASEURL = 'http://192.168.0.108:8000'
// var BASEURL = 'http://39.99.130.177:8000'

// 用来保存所有的接口信息
var APILIST = {
    
    // 获取文章分类
    category_get:  BASEURL + '/category',
  
    // 获取文章
    article_get: BASEURL + '/search',

    // 获取热门文章排行
    article_rank:BASEURL + '/rank',

    // 最新文章
    article_last:BASEURL + '/lastest'
}
