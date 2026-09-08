# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 页面路由

项目通过 `BrowserRouter` 管理跳转，在 `src/App.tsx` 中配置路由。

- `/`：关于我
- `/interests/:category?`：爱好，分类为 `photography`、`reading`、`sports`、`other`
- `/visual-design/:category?`：视觉设计，分类为 `information`、`illustration`、`web`
- `/ui-design/:category?`：UI 设计，分类为 `mobile`、`web`
- `/product-design/:category?`：产品设计，分类为 `museum`、`children`、`gift-box`、`cultural`、`coffee`、`jewelry`、`modeling`
- `/projects`：已落地项目
- `/projects/poster`：海报源文件详情

作品翻页使用 `?page=2`，插画作品使用 `?work=1`，建模翻页使用 `?model=2`。
分类未指定或无效时显示该栏目的默认页面；无效页码显示默认页。

部署时需要将非静态资源的页面请求回退到 `index.html`，以支持直接打开或刷新子路由。例如 Nginx：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

本地 Vite 开发服务器已支持此回退。
