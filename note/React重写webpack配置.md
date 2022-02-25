# React项目重新webpack配置文件

当我们使用create-react-app 初始化一个react脚手架时，webpack相关的配置都是隐藏了的，我们总会需要去修改webpack配置。

这时，我们应该怎么办呢？

1. 运行npm run eject 这个不可逆操作，将webpack相关的配置全部暴露出来，这个操作显然并不优雅。

2. 使用react-app-rewired，这个是社区最早出现的一个解决方案，用来重写webpack配置文件。但是当CRA2.0出现后，react-app-rewired已无法更好的带来开发体验了。

3. 使用craco

4. 使用@rescripts/cli