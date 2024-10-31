# SnowAdmin
 

### 先行预览

![登录页](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E7%99%BB%E5%BD%95%E9%A1%B5.jpg)

![首页](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E9%A6%96%E9%A1%B5.jpg)

![文件库](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E6%96%87%E4%BB%B6%E5%BA%93.jpg)

![国际化](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E5%9B%BD%E9%99%85%E5%8C%96.jpg)

![横向布局](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E6%A8%AA%E5%90%91%E5%B8%83%E5%B1%80.jpg)

![混合布局](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E6%B7%B7%E5%90%88%E5%B8%83%E5%B1%80.jpg)

![主题配置](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.jpg)

![黑暗模式-1](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E9%BB%91%E6%9A%97%E6%A8%A1%E5%BC%8F.jpg)

![黑暗模式-2](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E9%BB%91%E6%9A%97%E6%A8%A1%E5%BC%8F-2.jpg)

![黑暗模式-3](https://gitee.com/wang_fan_w/snow-image/raw/main/introduce/%E9%BB%91%E6%9A%97%E6%A8%A1%E5%BC%8F-3.jpg)

### 项目功能 🔨

- 清晰的项目架构：结构清晰，优雅易懂，代码全注释。
- 前沿技术应用：采用 Vue3, Vite5, TypeScript等最新流行的技术栈。
- 使用 Pinia 替代 Vuex，轻量、简单、易用，集成 Pinia 持久化插件
- 支持 Arco-Design 组件大小切换、多主题布局、暗黑模式、i18n 国际化
- 使用 VueRouter 配置动态路由权限拦截、路由懒加载，支持页面按钮权限控制
- 使用 KeepAlive 对页面进行缓存，支持多级嵌套路由缓存
- 使用 Prettier 统一格式化代码，集成 ESLint、Stylelint 代码校验规范
- 使用 husky、lint-staged、commitlint等插件，规范提交信息
- 丰富的页面组件：内置多样页面和组件，包括 401、404、500 页面，以及布局组件、标签组件、主题配置组件等。

### 环境准备 🏝️

确保你的环境满足以下要求：

- **git**: 你需要 git 来克隆和管理项目版本。
- **NodeJS**: >=18.12.0，推荐 20.12.0 或更高。
- **pnpm**: >= 8.7.0，推荐最新版本。

### 安装使用步骤 📔

### 从 GitHub 获取代码 🔗

```bash
# 克隆代码
git clone https://github.com/WANG-Fan0912/SnowAdmin.git
```

### 从 Gitee 获取代码 🔗

```bash
# 克隆代码
git clone https://gitee.com/wang_fan_w/SnowAdmin.git
```

### 安装依赖 📌

安装项目依赖

```bash
pnpm install
```

### 插件配置 🛠️

安装 Vue - Official，禁用 Vetur

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 服务插件

### 项目启动 🚀

```json
{
  // 开发环境启动
  "dev": "vite",
  // 开发环境构建
  "build:dev": "vue-tsc && vite build --mode development",
  // 生产环境构建
  "build:prod": "vue-tsc && vite build --mode production",
  // 测试环境构建
  "build:test": "vue-tsc && vite build --mode test",
  // 预览环境启动
  "preview": "vite preview"
}
```

### 文件资源目录 📚

```text
SnowAdmin
├─ .husky                 # husky 配置文件
├─ .vscode                # VSCode 推荐配置
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ lang                # 语言国际化 i18n
│  ├─ layout              # 框架布局模块
│  ├─ router              # 路由管理
│  ├─ store               # pinia store
│  ├─ style               # 全局样式文件
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.cjs        # Prettier 格式化配置
├─ commitlint.config.cjs  # git 提交规范配置
├─ index.html             # 入口 html
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件
```
   