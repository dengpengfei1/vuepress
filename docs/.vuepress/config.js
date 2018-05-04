module.exports = {
  title: 'FUI',
  evergreen: true,
  // base: '/fui/',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    // search: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '起步', link: '/guide/gui' },
      { text: '版本更新', link: '/version/version-2' }
    ],
    sidebar: [
      {
        title: 'version-2',
        collapsable: false,
        children: [
          '/version/version-2'
        ]
      },
      {
        title: 'version-1',
        children: [
          '/version/version-1'
        ]
      }
    ]
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] }
  }
}
