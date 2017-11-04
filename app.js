const http=require('http');
const fs=require('fs');
const Koa=require('koa');
const router=require('koa-router')();
const templating=require('./middleware/templating');
const bodyParse=require('koa-bodyparser');
const controller=require('./controller');
const isProduction = process.env.NODE_ENV === 'production';


app=new Koa();
//记录路由和访问时间
app.use(async (ctx,next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});
//处理静态文件
if (! isProduction) {
    let staticFiles = require('./middleware/static_files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}
//处理非GET请求
app.use(bodyParse());
//挂载render方法
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(controller());

app.listen(3000);
console.log('server is running at 127.0.0.1:3000');



