// Plop工作的入口文件，需要导出一个函数
// 此函数接收一个 plop 对象，用于创建生成器任务
export default function (plop) {
    // setGenerator方法接受两个参数，第一个参数作为生成器的名字，第二个参数是生成器的一些配置选项
    plop.setGenerator('main', {
        description: '创建新的路由以及组件',
        // 在命令行看到交互信息
        prompts: [
            {
                type: 'input',
                name: 'pathName',
                message: 'component path:',
            },
            {
                type: 'input',
                name: 'urlName',
                message: 'url:',
            },
            {
                type: 'input',
                name: 'componentName',
                message: 'component name:',
            },
        ],
        // 在命令行中执行的动作，数组中的每一个对象表示一个任务
        actions: [
            {
                // type 为 add 表示添加文件
                type: 'add',
                path: 'src/views/main/{{pathName}}/{{componentName}}.vue',
                templateFile: 'plop-templates/main/vue.hbs',
            },
            {
                type: 'add',
                path: 'src/router/main/{{urlName}}/index.ts',
                // 指定模板文件
                templateFile: 'plop-templates/main/router.hbs',
            },
        ],
    })
}

