module.exports = {
    base: '/dist/',
    title: '肉肉的博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '肉肉的前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            { rel: 'icon', href: '  ./logo.jpg' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    //下面涉及到的md文件和其他文件的路径
    themeConfig: {
        logo: './logo.jpg',  //网页顶端导航栏左上角的图标

        //顶部导航栏
        nav: [
            { text: '首页', link: '/' },

            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '博客',  //默认显示
                ariaLabel: '博客',   //用于识别的label
                items: [
                    { text: '文章', link: '/pages/javascript/JavaScript的历史.md' },
                    //点击标签会跳转至link的markdown文件生成的页面
                ]
            },
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/rourou1107' },
        ],
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: [
            {
                title: 'Javascript',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/javascript/JS基本语法.md', 'JS基本语法'],
                    ['/pages/javascript/JS类型转换.md', 'JS类型转换'],
                    ['/pages/javascript/内存图与JS世界.md', '内存图与JS世界'],
                    ['/pages/javascript/JS三座大山之原型.md', 'JS三座大山之原型'],
                    ['/pages/javascript/JS三座大山之AJAX.md', 'JS三座大山之AJAX'],
                    ['/pages/javascript/JS三座大山之this.md', 'JS三座大山之this'],
                    ['/pages/javascript/JS函数的执行时机.md', 'JS函数执行时机'],
                    ['/pages/javascript/JavaScript的历史.md', 'JavaScript的历史'],
                    ['/pages/javascript/JS创建对象的方式.md', 'JS创建对象的方式'],
                    ['/pages/javascript/JS基础题.md', 'JS基础题'],
                ]
            },
            {
                title: 'ES6',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/ES6/浅谈class.md', '浅谈class'],
                    ['/pages/ES6/ES6-模块化.md', 'ES6-模块化'],
                ]
            },
            {
                title: 'TypeScript基础',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/TypeScript/1.how-to-use.md', '1.how-to-use.md'],
                    ['/pages/TypeScript/2.ts的类型.md', '2.ts的类型.md'],
                    ['/pages/TypeScript/原始数据类型.md', '原始数据类型'],
                    ['/pages/TypeScript/任意值.md', '任意值'],
                    ['/pages/TypeScript/类型相关.md', '类型相关'],
                    ['/pages/TypeScript/类型断言.md', '类型断言'],
                ]
            },
            {
                title: '设计模式',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/设计模式/浅谈MVC.md', '浅谈MVC'],
                ]
            },
            {
                title: 'Vue',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/vue/vue完整版与非完整版的区别.md', 'vue完整版与非完整版的区别'],
                    ['/pages/vue/浅谈vue数据响应式.md', '浅谈vue数据响应式'],
                    ['/pages/vue/vue指令的修饰符.md', 'vue指令的修饰符'],
                    ['/pages/vue/vue构造选项之数据.md', 'vue构造选项之数据'],
                    ['/pages/vue/vuex的使用.md', 'vuex的使用'],
                    ['/pages/vue/插槽.md', '插槽'],
                    ['/pages/vue/$attrs.md', '$attrs']

                ]
            },
            {
                title: 'ElementUI',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/element-ui/one.md', '一'],

                ]
            },
            {
                title: 'React',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/react/how-to-import-react.md', '如何引用React'],
                    ['/pages/react/React初体验.md', 'React初体验'],
                    ['/pages/react/React语法.md', 'React语法'],
                    ['/pages/react/React之Class组件详解.md', 'React之Class组件详解'],
                    ['/pages/react/React之函数组件详解.md', 'React之函数组件详解'],
                    ['/pages/react/React之useState原理.md', 'React之useState原理'],
                    ['/pages/react/React之Hooks大全.md', 'React之Hooks大全'],
                ]
            },
            {
                title: 'React之小白',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/react之小白/1.React的诞生', '1.React的诞生'],
                    ['/pages/react之小白/2.任意组件之间的通信', '2.任意组件之间的通信'],
                    ['/pages/react之小白/3.Redux详解', '3.Redux详解'],
                    ['/pages/react之小白/4.React&redux结合', '4.React&redux结合'],
                    ['/pages/react之小白/5.React-Redux与Redux结合', '5.React-Redux与Redux结合'],
                    ['/pages/react之小白/6.简述Context的使用和实现', '6.简述Context的使用和实现'],
                    ['/pages/react之小白/7.React Hook Api', '7.React Hook Api'],
                    ['/pages/react之小白/8. React Router', '8. React Router']
                ]
            },
            {
                title: 'webpack',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/webpack/webpack初体验.md', 'webpack初体验'],
                    ['/pages/webpack/AST、Babel、依赖.md', 'AST、Babel、依赖'],
                    ['/pages/webpack/webpack的一些配置.md', 'webpack的一些配置'],
                ]
            },
            {
                title: 'HTTP',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/HTTP/浅谈url.md', '浅谈url'],
                    ['/pages/HTTP/http基础概念.md', 'http基础概念'],
                ]
            },
            {
                title: '其他',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/other/git的使用.md', 'git的使用'],
                    ['/pages/other/如何mock数据.md', '如何mock数据'],
                    ['/pages/other/cube-ui.md', 'cube-ui'],
                    ['/pages/other/better-scroll.md', 'better-scroll'],
                    ['/pages/other/seller.md', 'seller'],
                    ['/pages/other/webstorm快捷键.md', 'webstorm快捷键'],
                    ['/pages/other/npm命令.md', 'npm命令'],
                    ['/pages/other/scss.md', 'scss']
                ]
            },
            {
                title: '流水账',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/morney/流水账之项目搭建.md', '肉肉记账之项目搭建'],
                    ['/pages/morney/流水账之部分思路.md', '肉肉记账之部分思路'],
                    ['/pages/morney/流水账之vue知识点.md', '肉肉记账之vue知识点'],
                ]
            },
            {
                title: '自制 UI 框架',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/rourou-ui/构建篇.md', '构建篇'],
                    ['/pages/rourou-ui/1、Button组件单元测试.md', 'Button组件单元测试'],
                    ['/pages/rourou-ui/2、Input组件单元测试.md', 'Input组件单元测试'],
                    ['/pages/rourou-ui/Button组件.md', 'Button组件'],
                    ['/pages/rourou-ui/Input组件.md', 'Input组件'],
                    ['/pages/rourou-ui/Row&Col组件.md', 'Row&Col组件'],
                    ['/pages/rourou-ui/Toast组件.md', 'Toast组件'],
                    ['/pages/rourou-ui/Tabs组件.md', 'Tabs组件'],
                    ['/pages/rourou-ui/PopOver组件.md', 'PopOver组件'],
                ]
            },
            {
                title: 'vue3造轮子',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/vue3造轮子/1.安装的依赖.md', '1.安装的依赖'],
                    ['/pages/vue3造轮子/2.vue3和vue2的区别.md', 'vue3和vue2的区别'],
                    ['/pages/vue3造轮子/3.shims-vue.d.md', 'shims-vue.d的使用'],
                    ['/pages/vue3造轮子/4.router的使用.md', 'router的使用'],
                    ['/pages/vue3造轮子/5.官网搭建.md', '官网搭建'],
                    ['/pages/vue3造轮子/6.UI库css注意事项.md', 'UI库css注意事项']
                ]
            },
            {
                title: '可视化大屏',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/Visualize-large-screens/项目总结.md', '1.项目总结']
                ]
            },
            {
                title: 'nodejs',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/nodejs/1.浅谈nodejs.md', '1.浅谈nodejs'],
                    ['/pages/nodejs/2.创建Node.js命令行项目.md', '2.创建Node.js命令行项目'],
                    ['/pages/nodejs/3.文件模块.md', '3.文件模块'],
                    ['/pages/nodejs/4.上传到npm.md', '4.上传到npm'],
                    ['/pages/nodejs/5.使用ts写node.md', '5.使用ts写node'],
                    ['/pages/nodejs/6.静态服务器.md', '6.静态服务器']
                ]
            },
            {
                title: '单元测试',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/unit-test/自动化测试.md', '自动化测试'],
                    ['/pages/unit-test/npm上传.md', 'npm上传'],
                ]
            },
            // {
            //     title: '面试',
            //     collapsable: true,
            //     sidebarDepth: 1,
            //     children: [
            //         ['/pages/interview/1、html&css押题.md', '1、html&css押题'],
            //         ['/pages/interview/2、JS押题.md', '2、JS押题'],
            //         ['/pages/interview/3、DOM押题.md', '3、DOM押题'],
            //         ['/pages/interview/4、HTTP押题.md', '4、HTTP押题'],
            //         ['/pages/interview/5、vue押题.md', '5、vue押题'],
            //         ['/pages/interview/6、webpack面试题.md', '6、webpack面试题'],
            //         ['/pages/interview/DOM常见的面试题.md', 'DOM&&BOM常见的面试题'],
            //         ['/pages/interview/css常见面试题.md', 'css常见面试题'],
            //         ['/pages/interview/JS变量的类型判断.md', 'JS变量的类型判断'],
            //         ['/pages/interview/JS常见面试题.md', 'JS常见面试题'],
            //         ['/pages/interview/对象的深拷贝.md', '对象的深拷贝'],
            //         ['/pages/interview/跨域常见解决方案.md', '跨域常见解决方案'],
            //         ['/pages/interview/四种排序算法.md', '四种排序算法'],
            //         ['/pages/interview/cookie、session.md', 'cookie、session'],
            //         ['/pages/interview/http面试题.md', 'http面试题'],
            //         ['/pages/interview/vue常见的面试题.md', 'vue常见的面试题'],
            //         ['/pages/interview/虚拟DOM&diff算法.md', '虚拟DOM&diff算法'],
            //         ['/pages/interview/Web性能优化.md', 'Web性能优化'],
            //     ]
            // },
            {
                title: '项目经验',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/pages/experience/cache.md', '路由缓存'],
                    ['/pages/experience/formCheck.md', '表单校验'],
                    ['/pages/experience/print.md', '打印']
                ]
            },

        ]

            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
}
