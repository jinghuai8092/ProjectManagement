/**
 * @description 错误返回数据模型
    @maple
*/

class ErrorModel{
    constructor(error=-1,message='error'){
        this.error=error
        this.message=message
    }
}

module.exports=ErrorModel