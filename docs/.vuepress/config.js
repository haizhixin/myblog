module.exports = {
  title: '前端知识博客',
  description: '前端进阶',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/logo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.jpg' }],
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
    // sidebar:{
    //   '/accumulate/': [
    //       {
    //         title: '前端积累',
    //         children: [
    //           '/accumulate/1.html',
    //           '/accumulate/2.html',
    //           '/accumulate/3.html',
    //           '/accumulate/4.html',
    //           '/accumulate/5.html',
    //           '/accumulate/6.html',
    //           '/accumulate/7.html',
    //           '/accumulate/8.html',
    //           '/accumulate/9.html',
    //           '/accumulate/10.html',
    //           '/accumulate/11.html',
    //         ]
    //       }
    //     ],
    //     '/algorithm/': [
    //       '/algorithm/', 
    //       {
    //         title: '第二组侧边栏下拉框的标题1',
    //         children: [
    //           '/algorithm/' 
    //         ]
    //       }
    //     ]
    // },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};