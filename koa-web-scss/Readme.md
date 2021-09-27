## 使用说明

- 使用基本步骤请参考: [koa-web](https://www.npmjs.com/package/koa-web)
- sass运用越来越广泛

#### 安装 koa-web-session

```
npm i koa-web
npm i koa-web-scss
```

#### 启动程序

```js
const Koa = require("koa");
const KoaWeb = require('koa-web');
const KoaWebScss = require('koa-web-scss');

const app = new Koa();

KoaWeb(KoaWebScss);

app.use(KoaWeb({
  path: __dirname,

  // 静态文件缓存时间，默认0毫秒
  staticMaxage: 0,
}));

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
```

---

## css文件实例

#### 创建html页面: /html/scss/test.css
```css
body {
  color: #FEE;
}
```

- 访问: http://localhost:3000/scss/test.css 效果如下:
  

```css
body {
  color: #FEE;
}
```

## scss文件实例

#### 创建html页面: /html/scss/my.scss
```scss
body {
  div {
    color: #F33;
  }
}
```

- 访问: http://localhost:3000/scss/my.css 效果如下:

```css
body div {
  color: #F33;
}
```

- 如果：/html/scss/my.scss 和 /html/scss/my.css 文件同时存在
- 则以：/html/scss/my.css 优先