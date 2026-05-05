# AI OpsFlow

> 用 AI 重构你的运营流程 · Rebuild Your Operations with AI

AI OpsFlow 公司官网 —— 纯静态站点（HTML + CSS + JS），无构建步骤，无后端依赖。

## 项目结构

```
.
├── index.html      # 单页内容，包含全部 9 个区块
├── style.css       # 设计系统、响应式布局、动画
├── script.js       # 顶部导航、移动端菜单、滚动渐入
└── README.md       # 本文件
```

## 本地预览

**最简单的方法**：直接双击 `index.html`，浏览器即可打开。

如需更接近线上的环境（推荐用于检查相对路径、移动端适配等），可在项目根目录起一个静态服务器：

```bash
# Node.js
npx serve .

# Python 3
python -m http.server 8000
```

然后访问 `http://localhost:3000` / `http://localhost:8000`。

## 部署

把这三个文件（`index.html` / `style.css` / `script.js`）上传到任何静态主机即可：

| 主机 | 操作 |
|---|---|
| **Cloudflare Pages / Vercel / Netlify** | 连 GitHub 仓库自动部署，无需构建命令，发布目录留空（即根目录） |
| **GitHub Pages** | 仓库设置 → Pages → 选 `main` 分支根目录 |
| **阿里云 OSS / 腾讯云 COS / AWS S3** | 上传到桶里，开启静态网站托管，把域名 CNAME 过去 |
| **传统虚拟主机** | FTP 上传到网站根目录 |

## 自定义占位内容

部署前请替换以下占位值：

- `contact@aiopsflow.com` — 真实联系邮箱（出现在 CTA 区与 Footer）
- 公司名 / Slogan 如需调整：在 `index.html` 中检索并修改
- 主色调可在 `style.css` 顶部 `:root` 变量集中调整

## 主色

| 用途 | 色值 |
|---|---|
| 深底色 | `#0A1628` |
| 主蓝 | `#2563EB` |
| 强调紫 | `#7C3AED` |
| 浅底 | `#F8FAFC` |

## 浏览器支持

支持所有现代浏览器（Chrome / Edge / Firefox / Safari 近 2 年版本）。
低版本浏览器会优雅降级（无渐入动画但内容完整可读）。
