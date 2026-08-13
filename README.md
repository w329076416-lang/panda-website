# PANDA ALUMINIUM PRODUCTS 官网（panda-website）

三语官网（荷兰语 / 英语 / 中文），功能：
- 产品库：按**颜色**（白/黑/灰/棕）+ **类型**（A全封闭/B通风/C格栅/D镂空/铁门/窗户）筛选（47 张产品图）
- **样品展示**（SAMPLES，10 张实景/代表图）
- **配件展示**（ACCESSORIES，待你发配件图）
- **视频模块**（VIDEOS，待你发视频）
- **报价区间表**（参考价格 USD）
- **自动报价器**（输入类型/宽/高/开合方式/锁 → 自动算总价 USD+EUR+SRD，取整 0/5 结尾，可复制报价单）
- **维修与保养规则**（三语）

## 目录结构

```
panda-website/
├── index.html          # 页面骨架（三语占位由 JS 填充）
├── css/style.css       # 全部样式
├── js/data.js          # ★ 产品数据 + 视频数据（加素材改这里）
├── js/main.js          # i18n 切换 + 筛选 + 渲染逻辑
├── images/             # 产品图片（45 张，900px 压缩版）
└── videos/             # 视频目录（空，待放入 .mp4）
```

## ★ 怎么加新的产品图片（样品）

1. 把图片复制到 `images/` 目录（建议先压缩：`sips -Z 900 -s format jpeg -s formatOptions 80 原图 --out images/新图.jpg`）
2. 打开 `js/data.js`，在 `PRODUCTS` 数组**末尾**加一行：
   ```js
   { file: "新图.jpg", color: "black", type: "A", tag: "" }
   ```
   - `color`：`black`黑 / `white`白 / `gray`灰 / `brown`棕 / `iron`铁门 / `window`窗户
   - `type`：`A`全封闭 / `B`通风 / `C`格栅 / `D`镂空 / `iron`铁门 / `window`窗户
   - `tag`：实景图填 `"real"`（会显示"实景案例"角标），普通图留空

## ★ 怎么加视频

1. 把 .mp4 放到 `videos/` 目录
2. 在 `js/data.js` 里加（`VIDEOS` 数组）：
   ```js
   const VIDEOS = [
     { src: "videos/xxx.mp4", poster: "images/xxx.jpg",
       title: { nl: "Titel", en: "Title", zh: "标题" } }
   ];
   ```
   不加 `VIDEOS` 时页面显示"视频即将上线"占位卡片。

## ★ 怎么加配件图

1. 图片放到 `images/` 目录
2. `js/data.js` 里 `ACCESSORIES` 数组加一行：
   ```js
   { file: "配件图.jpg", title: {nl:"Motor", en:"Motor", zh:"电机"}, desc: {nl:"...", en:"...", zh:"..."} }
   ```
   不加时显示"配件图片即将上线"。

## ★ 报价器定价规则（老板口述 2026-08-01，改价格在这里改）

在 `js/main.js` 顶部 `RATE` 常量：
```js
const RATE = {
    door: { alu: 80, alu_open: 80, wood: 85, iron: 65, iron_open: 65 }, // USD/㎡ 单价
    motor_big: 250, motor_small: 290, manual: 200, biglock_manual: 250,
    side_lock: 50, install_pct: 0.05,
    eur: 1.1, srd: 38   // 汇率：USD→EUR ÷1.1；USD→SRD ×38
};
```
- 电机：面积 ≥10㎡ → $250；<10㎡ → $290
- 手动门：$200（含弹簧轴+底部十字锁）；勾选"两侧大圆锁" → $250
- 侧边圆锁：+$50/个
- 安装费：总价 +5%（可勾选）
- 总价最后统一四舍五入到 0/5 结尾整数

## 联系信息（改一次全站生效）

- 地址：Van 't Hogerhuysstraat 31, Paramaribo（`index.html` 联系区）
- 电话：+597 849-3613 / WhatsApp +597 887-9563（`index.html`）
- 邮箱：info@pandarolluiken.com（等域名邮箱配置后启用）
- 所有 WhatsApp 链接：`js/main.js` 里 `wa.me/5978879563`

## 部署

用 CloudStudio / Netlify / Vercel 部署整个 `panda-website/` 目录即可（静态站点，无需后端）。
域名实名通过后，把 `pandarolluiken.com` 解析指向部署平台，HTTPS 自动生效。
