const navConfig = require('./configs/nav')
const pluginConfig = require('./configs/plugin')
const markdown = require('./configs/markdownConfig'); // 导入markdownConfig配置,如显示代码块行号,额外拓展支持h1~h6标签,不仅限于h2,h3标题

module.exports = {
  title: 'amap-upper',
  themeConfig: {
    sidebar: 'auto',
    nav: navConfig,
  },
  markdown,
  plugins: pluginConfig
}