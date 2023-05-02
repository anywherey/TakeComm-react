import Mock from 'mockjs'

const login=Mock.mock({
    code:200,
    data:{
        userid:1,
        userName:'ddd',
        token:'aaadddsssawww'
    }
})

export default{
    login
}