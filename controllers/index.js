var index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
}
var login = async (ctx, next) => {
    ctx.render('login.html', {
        title: 'Welcome'
    });
}
var check_login = async (ctx, next) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === 'admin@example.com' && password === '123456') {
        // 登录成功:
        ctx.render('signin-ok.html', {
            title: 'Sign In OK',
            name: 'Mr Node'
        });
    } else {
        // 登录失败:
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed'
        });
    }
}

module.exports = {
    'GET /': index,
    'POST /signin': check_login,
    'GET /login':login
};