module.exports = {
  title: 'XXX的博客',
  description: 'YYY',
  therm: 'reco',
  themeConfig: {
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{title: "博客简介", path: "/"}],
      },
      /*{
        title: "基础篇",
        path: "/blogs/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/blogs/1" },
          { title: "第二篇", path: "/blogs/2" },
        ]
      }*/
    ]
  }
}
