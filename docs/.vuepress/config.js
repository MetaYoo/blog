module.exports = {
    title: '个人主页',
    description: 'aracwong的博客',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '见闻', link: '/see/' },
            { text: '笔记', link: '/notes/' },
            { text: '面试', link: '/interview/' },
            // 下拉列表的配置 vuepress-theme-yubisaki
            {
                text: '项目',
                items: [
                    { text: '点餐系统', link: '/project/diancan/' }
                ]
            },
            {
                text: '技术',
                items: [
                    { text: 'C', link: '/it/c/' },
                    { text: 'Java', link: '/it/java/' },
                    { text: 'Python', link: '/it/python/' },
                    { text: '物联网', link: '/it/iot/' },
                ]
            }
        ],
        sidebar: {
            '/project/diancan/': [
                '',
                'requirement',
                'design',
            ]
        }

    }
}