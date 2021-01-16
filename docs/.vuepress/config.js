module.exports = {
  title: '前端知识博客',
  description: '前端进阶',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/favorite.jpg' }],
    ['link', { rel: 'manifest', href: '/images/favorite.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/favorite.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'Home', link: '/home/' },
      {text: '前端知识', link: '/feknowledge/'},
      {text: '源码', link: '/source/'},
      {text: '算法', link: '/algorithm/'},
      {text: '工具', link: '/tools/'},
      {text: '技术之外', link: '/others/'},
      {text: 'GitHub', link: 'https://github.com/haizhixin/myblog'}      
    ],
    sidebar:{
      '/feknowledge/': [
          {
            title: '前端知识',
            children: [
              '/feknowledge/1.html',
              '/feknowledge/2.html',
              '/feknowledge/3.html',
              '/feknowledge/4.html',
              '/feknowledge/5.html',
              '/feknowledge/6.html',
              '/feknowledge/7.html',
              '/feknowledge/8.html',
              '/feknowledge/9.html',
              '/feknowledge/10.html',
              '/feknowledge/11.html',
            ]
          }
        ],
        '/algorithm/': [
          '/algorithm/', 
          {
            title: '第二组侧边栏下拉框的标题1',
            children: [
              '/algorithm/' 
            ]
          }
        ]
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};