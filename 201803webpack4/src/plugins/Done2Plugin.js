
class Done2Plugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        console.log('开始挂载Done2Plugin');
        compiler.hooks.done.tapAsync('Done2Plugin',(stats,cb)=>{
            setTimeout(()=>{
                console.log('Done2 DONE事件已经触发');
                cb();
            },3000)
        });
    }
}
module.exports = Done2Plugin;