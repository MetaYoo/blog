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
            { text: '人生', link: '/life/' },
            { text: '见闻', link: '/see/' },
            { text: '杂谈', link: '/notes/' },
            // 下拉列表的配置
            {
                text: '技术',
                items: [
                    { text: 'C', link: '/it/c' },
                    { text: 'Java', link: '/it/java' },
                    { text: 'Python', link: '/it/python' },
                    { text: '物联网', link: '/it/iot' },
                ]
            }
        ]
    }
}