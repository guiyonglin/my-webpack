【一面】1hour
自我介绍
项目难点介绍，怎么进行解决与优化的
数字的千分位转化，如：123123234.123 -> 123,123,234.123
1、为什么第二次访问项目白屏的时间会缩短，引出 http 缓存；是通过什么方式来找到本地缓存文件的？
2、css、js 解析顺序与相互阻塞；引出 defer、async
3、cdn 缓存原理；引出 http 强制缓存 cache-control：public
4、Linux 找到名称 nginx 并杀掉的方法；讲一下守护进程
5、死锁的理解
6、socket websocket 的理解
7、http 400 502 的含义
8、http 2.0 的新特性？引出多路复用的流程及二进制分帧、头部压缩 hpack 的原理
9、内存泄露的场景及如何解决？引出内存泄漏的排查工具 chrome tools
10、点击事件的几个阶段？preventDe\*\*\*t 是否会阻止冒泡
11、instanceof 的原理
12、0.1 + 0.2 === 0.3，解释原因；引出二进制浮点数对于小数的处理
13、const a = {}，是否可以改变对象属性值？如果属性值不能改变怎么做？
14、变量提升的理解？
15、异步任务 js 是怎么处理的？引出了 event loop 的流程及宏任务与微任务的介绍
16、如何判断一个元素是否在视口范围？
17、css postion fixed absolute 的区别；他们是怎么定位的，有参考对象吗？
19、vue data 为什么不能是个对象；引出为什么不能是箭头函数？
20、dom diff 的原理及时间复杂度
21、通过多叉树的广度优先遍历，找到值为 xxx 的节点
【二面】1hour
自我介绍
判断数组的方法？说一下 instanceof 的原理？
说一下下面结果输出什么？
var length = 10;
function fn() {
return this.length+1;
}
var obj = {
length: 5,
test1: function() {
return fn();
}
};
obj.test2=fn;
//下面代码输出是什么
console.log(obj.test1())
console.log(fn()===obj.test2())
手写寄生组合式继承
假设有 n 个人，标号为 1 到 n。
从第一个人开始计数，到第 k 个人则出列，随后从第 k+1 个人重新计数，到第 k 再出列....。直至剩下最后一个人。问最后剩下的人的编号？
标题：输入电话号码时自动推荐出下一位合法的数字集
描述信息
公司有 10 万名员工，每名员工都有一个座机号码。现在要在网页上实现一个“自动补位推荐” 的功能，问如何实现？

解释：

“自动补位推荐” 功能：有一个输入框，用户每输入一个数字，立马推荐出下一位合法的数字集合。
比如只有 5789234、5623786、5633678 三个电话号码，当第一位输入 5 时，立马推荐下一位有效数字集合[ 7, 6 ]，
如果第二位输入 6 时，下一位有效数字集合为[2，3]....
补充：
数字转换为千分位有哪几种方式？都说一下是如何实现的
说一下实现一个 SPA 应用统计 pv 的 SDK 的思路
说一下扫码登录的实现流程
说一下为什么不能客户端生成二维码 ID？
说一下以下题的思路
实现一个 repeat 方法
// 需要实现的函数
function repeat (func, times, wait) {}，

// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");//会输出 4 次 hello world, 每次间隔 3 秒
用链表实现约瑟夫环算法
【三面】1hour
项目特点介绍
讲一下项目是如何进行优化的？
手写一个 compose 的方法
a(b(c(d('xxxx'))))
const func = compose(a, b, c, d)
func('xxx')
说一下 vue 组件的通信的实现方式？eventbus 的设计模式是什么？
补充：
如何对兼容性代码进行处理？
脚手架的代码被修改后，别的使用到这个脚手架的项目也需要进行更新，那么这时候怎么处理会比较好？
你是如何去规范别人写的代码的？eslint 的表现是怎么样的？如何保证别人提交到 github 的代码是正确的？
grunt、gulp 了解吗，他们和 webpack 有什么区别？之间的优势和差别是在哪？
如果让你实现一个脚手架，你应该需要考虑什么点？
你是强制要求模块化划分吗，还是说有什么标准？
场景题：手写一个组件，组件实现内列表之间的状态管理
对于前端之外的技术你还有哪些感兴趣的？
【四面】0.5hour
简单的自我介绍
项目特点详细介绍，从页面、架构设计分析
一个多商铺商城的完整介绍（从用户、产品的角度去分析介绍），C 端、商家 B 端、平台端
介绍一下你在前公司的定位，职责，干的事情
介绍前公司的项目报价、客单价、人天、项目成员分配
【hr 面】
因为我在大学期间有过创业经历，所以主要是问我创业以及各方面综合素质的问题~
最后
面试交流群持续开放，分享了近 许多 个面经。
加我微信: DayDay2021，备注面试，拉你进群。
我是 TianTian，我们下篇见~
图片
如何在 React 中写出更好的代码
React 17 中新的 JSX 增强功能
2021 年保护 JavaScript 的 7 个步骤
阅读原文
阅读 139
分享
收藏
赞 1
在看
