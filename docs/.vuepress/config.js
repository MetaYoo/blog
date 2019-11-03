module.exports = {
    title: '个人主页',
    description: 'aracwong的博客',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '面试', link: '/interview/' },
            // 下拉列表的配置 vuepress-theme-yubisaki
            {
                text: '项目',
                items: [
                    { text: '点餐系统', link: '/project/diancan/' }
                ]
            },
            {
                text: '笔记',
                items: [
                    { text: '算法', link: '/note/algorithm/' },
                    { text: 'Java', link: '/note/java/' },
                    // { text: 'Python', link: '/note/python/' },
                    // { text: '物联网', link: '/note/iot/' },
                ]
            },
            { text: '51CTO', link: 'https://blog.51cto.com/skyarac' },
            { text: 'Github', link: 'https://www.github.com/aracwong' },
        ],
    }
}