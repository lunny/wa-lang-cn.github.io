---
title: 版本日志
---

# 版本日志

::: info v0.7.0 (2023-05-27)
  - 2023纪念胸章发行
  - 完成接口功能
  - 单元测试支持标准库
  - 去掉外部工具依赖
:::

::: info v0.6.0 (2023-04-13)
  - 增加凹语言中文语法
  - 初步支持接口方法调用
  - 包支持混入汇编代码
  - 删除 testing 实验性的包, 单元测试增加内置的 assert 测试函数
  - 在“国产语言论坛”开板: https://zh-lang.osanswer.net/c/walang
:::

::: info v0.5.1 (2023-03-25)
  - 凹禁止 package 语法, 仅作为一个保留关键字
  - wasi: 支持 命令行参数后环境变量(基于 `os` 包)
  - 命令行增加实验性单元测试功能
  - 完善空参数函数格式化
:::

::: info v0.5.0 (2023-03-06)
  - 根据 [5号提案](https://wa-lang.org/community/proposal/p0005.html) 将 `fn` 改成 `func`，`#` 作为特殊指令而非注释
  - 支持 wasi 规范, 输出的 [支持 Docker 环境运行](https://wa-lang.org/smalltalk/st0020.html)
  - 支持 build-tag 条件编译
  - [主页](https://wa-lang.org/) 增加检索功能
  - 增加 [yacc](https://wa-lang.org/smalltalk/st0021.html) 子命令
:::

::: info v0.4.1 (2023-01-08)
  - 完善内存管理
  - [完成贪吃蛇游戏](https://wa-lang.org/smalltalk/st0018.html)
:::

::: info v0.4.0 (2022-12-03)
  - 开通 [开源中国机构号](https://my.oschina.net/walang) 和 [微信公众号](https://wa-lang.org/community/), 主仓库迁到 Gitee
  - 包路径调整为 wa-lang.org/wa
  - 改进类型方法语法, 支持平台特定源文件
  - WAT 后端支持多返回值, 支持闭包和方法值, [支持 Arduino Nano 33](https://wa-lang.org/smalltalk/st0015.html)
  - LLVM 后端支持多返回值, [点亮 Arduino 单片机](https://wa-lang.org/smalltalk/st0014.html)
  - 已经初步 [图灵完备](https://wa-lang.org/smalltalk/st0013.html)
:::

::: info v0.3.1 (2022-11-16)
  - 完善 WAT 后端, 支持多包
  - LLVM 后端支持基本数值运算 (依赖 clang 和 llc)
:::

::: info v0.3.0 (2022-10-28)
  - 启用 AGPLv3 开源协议
  - 增加 如何贡献代码 机制
  - 语言: 实现字符串类型
  - 启动 LLVM 后端
:::

::: info v0.2.3 (2022-10-18)
  - 支持 [JetBrains Fleet](https://github.com/wa-lang/fleet-wa) 语法高亮
  - Wat 后端改善对 [Slice](https://github.com/wa-lang/wa/blob/master/slice.wa) 支持
:::

::: info v0.2.2 (2022-10-11)
  - Windows 增加 exe 图标
  - Playground 改进异步加载wasm资源, 支持多个例子
  - Wat 后端改善全局变量支持
  - 增加 `#wa:xxx` 模式注释, 支持通过凹语言实现底层的 runtime 函数
  - 实验特性: 简化无参数和返回值函数定义
:::

::: info v0.2.1 (2022-09-16)
  - 支持纯浏览器编译执行: [https://wa-lang.org/playground](https://wa-lang.org/playground)
  - 命令行增加打印 logo 子命令
  - 本地支持被嵌入脚本模式执行
  - 修复格式化问题
:::

::: info v0.2.0 (2022-09-07)
  - 全面切换到 WAT 后端, 支持 Linux/macOS/Windows 平台
  - 简化命令行字命令, 不依赖任何第三方工具
  - 暂时去掉对字符串和浮点数的例子
:::

::: info v0.1.3 (2022-08-27)
  - 去掉 CGO 依赖
  - 去掉 `opa/wasm` 依赖
  - `#` 改为单行注释 
  - 简化命令行, 命令行支持执行单个文件
:::

::: info v0.1.2 (2022-08-15)
  - 增加 `#` 作为空格等价字符
:::

::: info v0.1.1 (2022-08-12)
  - LET 改成 VAR
:::

::: info v0.1.0 (2022-07-24)
  - 开源, 包含 LLVM 后端, 可运行简单例子
:::

::: info v0.0.0 (2018-00-00)
  - 凹名字诞生
:::