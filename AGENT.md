# Simple H5 Page - 项目文档

这是一个现代化的H5页面项目，使用React、TypeScript和Tailwind CSS构建，具有响应式设计和美观的UI元素。

## 项目结构

```
/home/project/
├── src/
│   ├── components/
│   │   └── HomePage/
│   │       └── index.tsx          # 主页组件，包含所有页面内容
│   ├── App.tsx                    # 主路由/布局容器
│   ├── main.tsx                   # 应用入口
│   ├── index.css                  # 全局样式（含 Tailwind 指令）
│   └── mock.json                  # 模拟数据
│
├── package.json                   # 项目依赖和脚本配置
├── vite.config.ts                 # Vite 构建工具配置，已修改为生成传统script兼容的JS
├── tsconfig.json                  # TypeScript 主配置，允许emit输出
├── tsconfig.node.json             # TypeScript 节点配置
├── tailwind.config.js             # Tailwind CSS 配置
├── postcss.config.js              # PostCSS 配置
└── index.html                     # HTML 入口文件，已修改为引用构建后的JS文件
```

## 文件内容描述

### 根目录文件
- `package.json`: 包含项目基本信息、依赖（React、React DOM、React Router DOM、Lucide React）和开发依赖（Vite 6.4.1、TypeScript、Tailwind CSS等）
- `vite.config.ts`: Vite 构建工具配置，包含 react 插件和服务器配置（host: true, allowedHosts: true）以及构建输出配置，已修改为生成IIFE格式的JS文件，可在script标签中直接使用
- `tsconfig.json`: TypeScript 编译选项，支持 ES2020、JSX 等，已设置noEmit为false以允许输出编译文件
- `tsconfig.node.json`: 用于 Vite 配置文件的 TypeScript 编译选项
- `tailwind.config.js`: Tailwind CSS 配置，包含自定义颜色主题
- `postcss.config.js`: PostCSS 配置，集成 Tailwind CSS 和 Autoprefixer
- `index.html`: HTML 入口文件，已修改为引用构建后的/assets/main.js文件，使用传统script标签而非module类型

### 源代码文件
- `src/main.tsx`: React 应用入口点，渲染 App 组件
- `src/index.css`: 全局样式文件，包含 Tailwind 指令和自定义样式
- `src/App.tsx`: 主应用组件，设置路由和基本布局
- `src/components/HomePage/index.tsx`: 主页组件，包含标题、英雄区域、功能展示、统计数据、用户评价、CTA和页脚
- `src/mock.json`: 包含模拟数据，如功能列表和用户评价

## 功能特性

1. 响应式设计：适配各种屏幕尺寸
2. 深色/浅色模式切换：通过主题切换按钮
3. 交互元素：计数器按钮和其他交互功能
4. 美观UI：渐变背景、卡片阴影、悬停效果等
5. 移动优化：专为移动设备设计的布局和交互
6. Nginx兼容：已配置为生成可在Nginx直接运行的传统JS文件

## 技术栈

- React 18: 用于构建用户界面
- TypeScript: 类型安全
- Tailwind CSS: 实用优先的CSS框架
- Vite: 下一代前端构建工具
- Lucide React: SVG图标库
- React Router DOM: 路由管理（使用Hash路由）

## 自定义主题

项目在 tailwind.config.js 中定义了自定义颜色主题：
- Primary color palette (蓝色系)
- Secondary color palette (紫色系)

## 运行项目

执行 `npm run dev` 启动开发服务器，执行 `npm run build` 生成可在Nginx上直接运行的JS文件