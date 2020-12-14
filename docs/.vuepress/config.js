module.exports = {
  title: 'cgh_yc的博客',
  description: '专注前端技术栈分享',
  base: '/', // 这是部署到github相关的配置
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Html', link: '/html/' },
      { text: 'Css', link: '/css/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: '面试问题', 
        items: [
          { text: '笔试', link: '/interview/written_examination' },
          { text: '面试', link: '/interview/interview_examination' },
        ] 
      },
    ]
  }
}

