/**
 * @description mongoose 连接数据库
 * @author maple
 */

const mongoose =require('mongoose')

const url='mongodb://localhost:27017'
const dbName='AI-F'

//配置
mongoose.set('useCreateIndex',true)
mongoose.set('useFindAndModify',false)

//开始连接
mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//连接对象
const db=mongoose.connection
db.on('error',err=>{
    console.error(
        'mongoose connect error',err
    )
}
)