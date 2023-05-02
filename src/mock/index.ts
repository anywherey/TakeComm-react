import Mock from 'mockjs'
import loginAPI from './data/login'
Mock.setup({
    timeout: "350-600"
});

Mock.mock(/\/login/,'get',loginAPI.login)