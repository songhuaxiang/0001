import Mock from "mockjs";

Mock.mock('/login/user', 'post', options => {
    let {
        username,
        password
    } = JSON.parse(options.body)
    if (username == 'admin' && password == "admin") {
        return {
            code: 0,
            id: 1,
            token: 'admin',
            username: '管理员',
            data: '登陆成功'
        }
    } else {
        return {
            code: -1,
            id: 2,
            data: "用户名或密码错误"
        }
    }
})

Mock.mock('/logout/user', 'post', options => {
    let {
        username
    } = JSON.parse(options.body)
    if (username == 'admin') {
        return {
            code: 0,
            id: 1,
            data: '退出成功'
        }
    } else {
        return {
            code: -1,
            id: 2,
            data: "退出失败"
        }
    }
})