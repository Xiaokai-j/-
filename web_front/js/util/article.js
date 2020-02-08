// 把所有与文章相关的操作写在这里

var article = {
    /**
     * 获取主页中5条焦点图新闻
     */
    getFouceFive:function(){
        // 因为只要5条数据，所以直接设置只获取5条
        return $.get(APILIST.article_get,{perpage: 5})
    },
    /**
     * 根据id去获取文章的详情
     * @param {Number}} id 
     */
    getById:function(id){
        return $.get(APILIST.article_get,{'id':id})
    },
    /**
     * 获取文章排行
     * @param {*} type  文章类别编号 
     * 如果不传则在全部的类别中进行排行。
     */
    getRank:function(type){
        return $.get(APILIST.article_rank,{'type':type})
    },
    /**
     * 获取最新的文章
     */
    getLastest:function(){
        return $.get(APILIST.article_last)
    },
    /***
     * 在列表页中，用来获取文章列表数据
     * type: 文章类型编号
     * page: 当前第几页
     */
    getList:function(type,page) {
        return $.get(APILIST.article_get,{'type':type,'page':page})
    }
}
