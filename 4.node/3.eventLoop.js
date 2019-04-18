// setTimeout和setImmediate顺序是不固定，看node准备时间
// setTimeout(function () {
//   console.log('setTimeout')
// },0);

// setImmediate(function () {
//   console.log('setImmediate')
// });

console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});
new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
})
setTimeout(() => {
  console.log(6);
})
console.log(7);




console.log(1);
setTimeout(() => {
  console.log('setTimeout1')
}, 0)
setTimeout(() => {
  console.log('setTimeout2')
}, 0)
Promise.resolve('p').then(() => console.log('p'));
// nextTick是队列切换时执行的，timer->check队列 timer1->timer2不叫且
setImmediate(() => {
  console.log('setImmediate1')
  setTimeout(() => {
    console.log('setTimeout1')
  }, 0);
})
setTimeout(() => {
  process.nextTick(() => console.log('nextTick'))
  console.log('setTimeout2')
  setImmediate(() => {
    console.log('setImmediate2')
  })
}, 0);

// poll的下一个阶段时check
// 有check阶段就会走到check中
let fs = require('fs');
fs.readFile('./1.txt', function () {
  setTimeout(() => {
    console.log('setTimeout')
  }, 0);
  setImmediate(() => {
    console.log('setImmediate')
  });
});

// nextTick不要写递归

function Person() {
  // 让特定的值在下一队列中执行，好处时优先级高于timeout
  process.nextTick(() => {
    this.arr();
  })
}
Person.prototype.eat = function () {
  this.arr = () => { console.log('吃') }
}
let p = new Person();
p.eat();

// 我会建立个仓库 1组 xxx.md 掘金地址 2组


// 调试的方式 



console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3)
  });
});
new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data);
  Promise.resolve().then(() => {
    console.log(6)
  }).then(() => {
    console.log(7)
    setTimeout(() => {
      console.log(8)
    }, 0);
  });
})
setTimeout(() => {
  console.log(9);
})
console.log(10);










console.log('start');
setTimeout(() => {          // callback1
  console.log(111);
  setTimeout(() => {        // callback2
    console.log(222);
  }, 0);
  setImmediate(() => {      // callback3
    console.log(333);
  })
  process.nextTick(() => {  // callback4
    console.log(444);  
  })
}, 0);
setImmediate(() => {        // callback5
  console.log(555);
  process.nextTick(() => {  // callback6
    console.log(666);  
  })
})
setTimeout(() => {          // callback7              
  console.log(777);
  process.nextTick(() => {  // callback8
    console.log(888);   
  })
}, 0);
process.nextTick(() => {    // callback9
  console.log(999);  
})
console.log('end');

/**
start
end
999
111
777
444
888
222
555
333
666
 */

console.log('1');
setTimeout(function() {//callback1
    console.log('2');
    process.nextTick(function() {//callback2
        console.log('3');
    })
    new Promise(function(resolve) {//callback3
        console.log('4');
        resolve();
    }).then(function() {//callback4
        console.log('5')
    })
})
new Promise(function(resolve) {//callback5
    console.log('7');
    resolve();
}).then(function() {//callback6
    console.log('8')
})
process.nextTick(function() {//callback7
  console.log('6');
})
setTimeout(function() {//callback8
    console.log('9');
    process.nextTick(function() {//callback9
        console.log('10');
    })
    new Promise(function(resolve) {//callback10
        console.log('11');
        resolve();
    }).then(function() {//callback11
        console.log('12')
    })
})

/*
1
7
6
8
2
4
9
11
3
10
5
12
*/
