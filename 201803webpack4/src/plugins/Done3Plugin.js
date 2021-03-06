
class Done3Plugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        console.log('开始挂载Done3Plugin');
       
        compiler.hooks.done.tapAsync('Done3Plugin',(stats,cb)=>{
            setTimeout(()=>{
                console.log('Done3Plugin事件已经触发');
                cb();
                console.log('gap:' + (Date.now()- compiler.start)/1000);
            },3000)
        });
    }
}
module.exports = Done3Plugin;