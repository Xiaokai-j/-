// 把所有与文章相关的操作写在这里

var article = {
    // 获取
    // page 就是当前要取出来的第几页的数据
    // type 就是当前文章的类型编号
    // status 就是当前文章的状态
    get: function (page, type, status) {
        return $.get(APILIST.article_get, { 'page': page, 'type': type, 'state': status })
    },
    /**
     * 根据id去获取文章的详情
     * @param {Number}} id 
     */
    getById: function (id) {
        return $.get(APILIST.article_get, { 'id': id })
    },
    // 删除文章
    del: function (id) {
        return $.get(APILIST.article_del, { 'id': id })
    },
    add: function (fd) {
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不要设置请求头
        })
    },
    /**
     * 保存文章编辑
     * @param {*} fd  formData对象
     */
    edit: function (fd) {
        return $.ajax({
            url: APILIST.article_edit,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不要设置请求头
        })
    }

}