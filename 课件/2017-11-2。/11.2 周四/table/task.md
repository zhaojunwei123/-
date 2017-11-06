1. react 运行原理
*2. 声明 react 的组件
    继承了 React.Component 的类就是一个组件
    至少有一个 render 方法
        这个方法应该 return 一份 jsx 的对象,
        这就是这个组件的样子
*3. jsx 语法
    回去复习今天的 jsx 的语法 , 写到下面
    begin here...
    
    自己声明的组件要大写，内置组件小写开头
    jsx本身可以是一个表达式
    在jsx里面使用{}表示表达式
    标签之间的内容就叫chlidren，如果是类的组件的标签，它的children
    通过实例的（this）的props.children拿到
    关键词要转成另外一种形式：class->className
    for->htmlFor，应该是驼峰式的
4. 把 jsx 渲染到页面
    reactDOM.render
5. virtual DOM 的概念 怎么来的
6. this.props.children

8. 关于 css-loader
引人 css文件的时候使用这个 loader 处理它
遇到 url或@import 帮你去引人里面的资源，引人资源的过程中，根据资源的类型再使用新的loader去处理

9. 关于 file-loader
处理资源（字体 图片 视频）
转换出一个路径，把资源搬到输出目录

10. props:react的属性
传递属性：<Content a="8"></Content>
拿到:this.props

11. state
组件有内部状态：this.state={}
通过 this.setState()来改变组件的内部状态，这个时候页面会更新，因为组件的 render 执行了，得到了一份新的 jsx 的结构
父组件的 render执行了 子组件render 也会执行
改变页面状态，应该通过setState 更新

setState 可以接收一个对象为参数，也可以接收一个回调函数为参数

关于 setState 的异步执行问题：
setState 更新状态的时候，是异步更新的。（render 在state合并之后执行一次）
如果把setStat放到异步函数里面执行，他是同步更新的（render马上执行，马上更新视图）
setState 如果是同步执行，只会更新一次视图（render 只会执行一次）
关于 webpack
    html-webpack-plugin 自动创建 html 文件
    clean-webpack-plugin 清理某一个文件夹在打包之前


预告
    react 更新视图
    react 组件之间的交流
    使用 webpack 打包图片
    使用 webpack 打包 css
