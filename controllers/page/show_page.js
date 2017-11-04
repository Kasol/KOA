const Page=require('../../models/page');
var show_page=async (ctx,next)=> {
    let template_data={};
    var pages=await Page.findAll();
    console.log(pages);
     template_data={
        objects:pages
     };
    ctx.render('./page/show_page.html',template_data);
}

module.exports={
'GET /page/show_page':show_page
};