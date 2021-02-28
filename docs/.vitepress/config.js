const { resolve } = require('path');

module.exports = {
  title: 'temp',
  description: 'vue demo',
  alias: {
  },
  outDir: '../dist',
  base: '/',
  themeConfig: {
    lang: 'zh-CN',
    lastUpdated: '最近更新',
    repo: 'lhlyu/temp',
    repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'temp',
        description: 'vue temp',
        label: '中文',
        selectText: '语言',
        nav: [
        ],
        sidebar: [
          {
            text: "例子",
            link: `/case/`,
          }
        ],
      },
    },
  },
};
