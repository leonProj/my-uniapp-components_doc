module.exports = {
    base:'/my-uniapp-components_doc/',
    title: '通用逻辑hook，uniapp组件',
    description: '一些通用逻辑和组件',
    theme: 'reco',
    themeConfig: {
        /* vuepress默认主题配置 */
        plugins: ['@vuepress/last-updated'],
        lastUpdated: '最后更新时间',
        logo: '/logo.png',
        nav: [
            {text: '指南', link:  '/pages/guide/start'},
            {text: 'hook', link:  '/pages/hook/'},
            {text: 'hook组件', link: '/pages/hookComponents/'},
            {
                text: '相关链接',
                items: [
                    {text: 'uview组件库', link: 'https://www.uviewui.com/'},
                    {text: 'vuepress主题reco', link: 'https://vuepress-theme-reco.recoluan.com/'},
                    {text: 'vuepress官方文档', link: 'https://v1.vuepress.vuejs.org/zh/'}
                ]
            },
            { text: 'github', link: 'https://github.com/leonProj/my-uniapp-components', icon: 'reco-github' },
            { text: 'gitee', link: 'https://gitee.com/leonProj/my-uniapp-components', icon: 'reco-mayun' }

        ],
        sidebar: {
            '/pages/guide/': [
                'start',
            ],
            '/pages/hook/': [
                '',
                'useRequest'
            ],

            '/pages/hookComponents/': [
                '',
                'TlaStateManager'
            ],
        },
        /* reco配置  */
        modePicker: true,
        noFoundPageByTencent: false,
        author: 'tttleon',
        startYear: '2022',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        /*自定义的配置*/
        simulatorUrl: {
            '/pages/hook/useRequest':true,
            '/pages/hookComponents/TlaStateManager':true,
        }
    }
}
