// 配置文件
// 把这个项目中所有用到的接口地址全放在这里

// 所有接口的基地址
// 就是运行小黑窗服务器的地址.如果当前的服务器就是在自已电脑上，就可以直接写成localhost
var BASEURL = 'http://localhost:8000'
// var BASEURL = 'http://192.168.0.108:8000'
var BASEURL = 'http://39.99.130.177:8000'

// 用来保存所有的接口信息
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser',

    // 获取文章分类
    category_get:  BASEURL + '/admin/category_search',
    // 添加文章分类
    category_add:  BASEURL + '/admin/category_add',
    // 删除文章分类
    category_del:  BASEURL + '/admin/category_delete',
    // 编辑文章分类
    category_edit:  BASEURL + '/admin/category_edit',


    // 获取文章
    article_get: BASEURL + '/admin/search',
    // 删除文章
    article_del: BASEURL + '/admin/article_delete',
    // 添加文章
    article_add: BASEURL + '/admin/article_publish',
    // 保存文章的修改
    article_edit: BASEURL + '/admin/article_edit'
}
