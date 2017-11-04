const File=require('../../models/file');
var show_file=async (ctx,next)=> {
    let template_data={};
    var files=await File.findAll();
    console.log(files);
     template_data={
        objects:files
     };
    ctx.render('./file/show_file.html',template_data);
}

module.exports={
'GET /file/show_file':show_file
};