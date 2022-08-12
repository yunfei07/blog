const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing", // 使用npm包主题
  title: "blog",
  description: "vdoing博客主题模板",
  base: "/blog/", // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "7cd737500b29dd133494",
        clientSecret: "2a96f58ed27e67c14a5796fa3fd23190fff05780",
        owner: "yunfei07",
        repo: "blog",
      },
    ],
    // 增强 markdown
    [
      "md-enhance",
      {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
};