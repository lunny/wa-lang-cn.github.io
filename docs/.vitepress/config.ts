import { defineConfig } from 'vitepress'
import { WA_DESC, WA_NAME } from './constants'
import HighlightedExt from './plugins/highlightedExt'

export default async () => defineConfig({
  lang: 'zh-CN',
  title: WA_NAME,
  description: WA_DESC,
  appearance: true,

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/wa-lang/wa-lang.github.io/edit/main/docs/:path',
      text: '为此页提供修改建议'
    },

    // TODO：上线后进行爬取
    // algolia: {
    //   appId: '70KN18OOKV',
    //   apiKey: '8e276c9c1e442e23ad6f922e8ffbb90e',
    //   indexName: 'dev_wa',
    // },

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '日常', link: '/daily/', activeMatch: '/daily/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' },
      { text: '版本日志', link: '/changelog/', activeMatch: '/changelog/' },
      { text: 'Play', link: 'https://wa-lang.org/playground/' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/wayuyan' },
      { icon: 'github', link: 'https://github.com/wa-lang/wa/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '项目目标', link: '/guide/goals' },
          ]
        },
        {
          text: '社区',
          items: [
            { text: '如何贡献代码', link: '/guide/contribute' },
            { text: '凹语言贡献者协议', link: '/guide/wca' },
            { text: '版权信息', link: '/guide/license' }
          ]
        }
      ],
      '/daily/': [
        {
          text: '碎碎念',
          collapsible: true,
          items: [
            { text: '凹语言 由来和寓意', link: '/daily/' },
            { text: '凹语言 开源十日小计—兼路线图', link: '/daily/smalltalk/st0001' },
            { text: '凹语言 讨论群日常(2022/08/06)', link: '/daily/smalltalk/st0002' },
            { text: '凹语言 支持脚本模式执行', link: '/daily/smalltalk/st0003' },
            { text: '凹语言 IDE 插件指南', link: '/daily/smalltalk/st0004' },
            { text: '祝大家中秋快乐！', link: '/daily/smalltalk/st0005' },
            { text: '凹语言 支持浏览器环境构建', link: '/daily/smalltalk/st0006' },
            { text: '凹语言 Windows 增加 exe 图标', link: '/daily/smalltalk/st0007' },
            { text: '凹语言 VIM 语法高亮', link: '/daily/smalltalk/st0008' },
            { text: '凹语言 JetBrains Fleet 语法高亮', link: '/daily/smalltalk/st0009' },
            { text: '凹语言 新官网', link: '/daily/smalltalk/st0010' },
            { text: '爱好者的碎碎念 栏目投稿规则', link: '/daily/smalltalk/submission_rules' },
          ]
        },
        {
          text: '开发组会议',
          collapsible: true,
          items: [
            { text: '会议安排', link: '/daily/conference/c0001' },
            { text: '2022-08-07', link: '/daily/conference/c0002' },
            { text: '2022-08-21', link: '/daily/conference/c0003' },
            { text: '2022-09-04', link: '/daily/conference/c0004' },
            { text: '2022-10-02', link: '/daily/conference/c0005' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'APIs',
          items: [
            { text: '快速入门', link: '/api/' },
            { text: '语言规范', link: '/api/spec' },
          ]
        }
      ],
      '/changelog/': [
        {
          text: '历史版本',
          items: []
        }
      ],
    }
  },

  markdown: {
    highlight: await HighlightedExt()
  },
  
})