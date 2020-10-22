
const {SyncHook}  = require('tapable')
class Done1Plugin {
    constructor(options) {
        this.options = options;
        this.hooks = {
            show: new SyncHook()
        }
    }
    apply(compiler) {
        console.log('开始挂载Done1Plugin');
        this.hooks.show.tap('监听我自己的show事件',()=>{
            console.log('Done1Plugin自己的show事件触发了');
        });
        compiler.hooks.done.tapAsync('Done1Plugin',(stats,cb)=>{
            compiler.start = Date.now();
            setTimeout(()=>{
                console.log('Done1Plugin事件已经触发');
                cb();
                this.hooks.show.call();
            },3000)
        });
    }
}
module.exports = Done1Plugin;