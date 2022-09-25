import{_ as e,c as s,o as a,d as o}from"./app.e0e4ea3a.js";const m=JSON.parse('{"title":"\u5728 Babel \u4E2D\u4F7F\u7528 Polyfill","description":"","frontmatter":{},"headers":[{"level":2,"title":"core-js","slug":"core-js","link":"#core-js","children":[{"level":3,"title":"core-js@3\u7684\u91CD\u8981\u6539\u53D8","slug":"core-js-3\u7684\u91CD\u8981\u6539\u53D8","link":"#core-js-3\u7684\u91CD\u8981\u6539\u53D8","children":[]}]},{"level":2,"title":"\u4F7F\u7528\u59FF\u52BF","slug":"\u4F7F\u7528\u59FF\u52BF","link":"#\u4F7F\u7528\u59FF\u52BF","children":[{"level":3,"title":"\u5355\u72EC\u4F7F\u7528","slug":"\u5355\u72EC\u4F7F\u7528","link":"#\u5355\u72EC\u4F7F\u7528","children":[]},{"level":3,"title":"\u5728 webpack \u4E2D\u4F7F\u7528","slug":"\u5728-webpack-\u4E2D\u4F7F\u7528","link":"#\u5728-webpack-\u4E2D\u4F7F\u7528","children":[]}]},{"level":2,"title":"targets","slug":"targets","link":"#targets","children":[]},{"level":2,"title":"useBuiltIns","slug":"usebuiltins","link":"#usebuiltins","children":[{"level":3,"title":"false","slug":"false","link":"#false","children":[]},{"level":3,"title":"entry","slug":"entry","link":"#entry","children":[]},{"level":3,"title":"usage","slug":"usage","link":"#usage","children":[]}]},{"level":2,"title":"core-js","slug":"core-js-1","link":"#core-js-1","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/\u521D\u63A2\u524D\u7AEF\u5DE5\u7A0B\u5316/\u5728 Babel \u4E2D\u4F7F\u7528 Polyfill.md"}'),l={name:"\u5DE5\u7A0B\u5316/\u521D\u63A2\u524D\u7AEF\u5DE5\u7A0B\u5316/\u5728 Babel \u4E2D\u4F7F\u7528 Polyfill.md"},c=o(`<h1 id="\u5728-babel-\u4E2D\u4F7F\u7528-polyfill" tabindex="-1">\u5728 Babel \u4E2D\u4F7F\u7528 Polyfill <a class="header-anchor" href="#\u5728-babel-\u4E2D\u4F7F\u7528-polyfill" aria-hidden="true">#</a></h1><hr><p>\u5728\u524D\u9762\u4E24\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5206\u522B\u4ECB\u7ECD\u4E86 Polyfill \u548C Babel\uFF0C\u90A3\u4E48\u672C\u7BC7\u6587\u7AE0\uFF0C\u6211\u4EEC\u5C31\u5C06\u4E24\u8005\u7ED3\u5408\u8D77\u6765\uFF0C\u4ECB\u7ECD\u4E0B Babel \u4E2D polyfill \u7684\u89E3\u51B3\u65B9\u6848\u3002\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u7B80\u5355\u4ECB\u7ECD\u4E86 babel \u8F6C\u4E49\u7684\u8FC7\u7A0B\uFF0C\u5148\u5C06\u6E90\u7801\u89E3\u6790\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811 AST\uFF0C\u7136\u540E\u6839\u636E\u914D\u7F6E\u4F7F\u7528\u4E0D\u540C\u7684\u63D2\u4EF6\u5BF9 AST \u8FDB\u884C\u8F6C\u6362\uFF0C\u7136\u540E\u518D\u5C06\u8F6C\u6362\u540E\u7684 AST \u8F93\u51FA\u4E3A\u53EF\u7F16\u8BD1\u7684\u4EE3\u7801\u3002</p><p>Babel \u9ED8\u8BA4\u5728\u7F16\u8BD1\u65F6\u53EA\u4F1A\u8F6C\u6362\u65B0\u7684 JavaScript \u8BED\u6CD5\uFF08syntax\uFF09\uFF0C\u4F46\u4E0D\u4F1A\u8F6C\u6362 API\uFF0C\u6BD4\u5982 Set\u3001Maps\u3001Generator\u3001Proxy\u3001Promise \u7B49\u5168\u5C40\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5B9A\u4E49\u5728\u5168\u5C40\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982Array.from\u3001Object.assign\uFF09\u90FD\u4E0D\u4F1A\u88AB\u8F6C\u8BD1\u3002</p><h1 id="babel-polyfill" tabindex="-1">@babel/polyfill <a class="header-anchor" href="#babel-polyfill" aria-hidden="true">#</a></h1><p>\u5173\u4E8E babel \u8F6C\u6362 API \u8FD9\u4E2A\u95EE\u9898\uFF0CBabel \u5B98\u65B9\u7684\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\u662F\u63A8\u51FA <code>@babel/polyfill</code> \u5E93\u3002\u5176\u6838\u5FC3\u4F9D\u8D56\u662F <code>core-js@2</code> \u548C <code>regenerater-runtime/runtime</code>\u3002<code>core-js</code> \u662F JS \u6807\u51C6\u5E93\u7684 <code>polyfill</code>\uFF0C\u4E3A\u5176\u63D0\u4F9B\u57AB\u7247\u80FD\u529B\uFF0C<code>regenerater-runtime/runtime</code> \u7528\u6765\u8F6C\u8BD1 <code>generators</code> \u548C <code>async</code> \u51FD\u6570\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u5206\u522B\u6765\u4ECB\u7ECD\u4E00\u4E0B <code>core-js</code> \u548C <code>regenerator-runtime/runtime</code>\u3002</p><h2 id="core-js" tabindex="-1">core-js <a class="header-anchor" href="#core-js" aria-hidden="true">#</a></h2><p><code>core-js</code> \u662F\u4E00\u4E2A JavaScript \u6807\u51C6\u5E93\uFF0C\u91CC\u9762\u5305\u542B\u4E86 <code>ESCAScreipt 2020</code> \u5728\u5185\u7684\u591A\u9879\u7279\u6027\u7684 <code>polyfill</code>\u3002\u5176\u4F5C\u7528\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u70B9</p><ul><li>\u652F\u6301\u6700\u65B0\u7684 ECMAScript \u6807\u51C6\uFF1B</li><li>ECMAScript \u6807\u51C6\u5E93\u63D0\u6848\uFF1B</li><li>\u4E00\u4E9B <a href="https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWHATWG" target="_blank" rel="noreferrer">WHATGW</a> / <a href="https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWorld_Wide_Web_Consortium" target="_blank" rel="noreferrer">W3C</a> \u6807\u51C6\uFF08\u8DE8\u5E73\u53F0\u6216\u8005 ECMAScript \u76F8\u5173\uFF09\uFF1B</li><li>\u548C babel \u5BC6\u5207\u96C6\u6210\u3002</li></ul><p>\u5728 <code>core-js3</code> \u51FA\u6765\u4E4B\u524D\uFF0C\u6700\u5E38\u7528\u7684\u7248\u672C\u662F <code>core-js@2</code>\uFF0C\u4F46\u662F <code>core-js@2</code> \u7684\u4E00\u4E2A\u6700\u5927\u95EE\u9898\u5C31\u662F\u5305\u7684\u4F53\u79EF\u592A\u5927(\u5927\u7EA6\u67092M)\uFF0C\u56E0\u4E3A\u5176\u6709\u5F88\u591A\u88AB\u91CD\u590D\u5F15\u7528\u7684\u6587\u4EF6\u3002</p><h3 id="core-js-3\u7684\u91CD\u8981\u6539\u53D8" tabindex="-1">core-js@3\u7684\u91CD\u8981\u6539\u53D8 <a class="header-anchor" href="#core-js-3\u7684\u91CD\u8981\u6539\u53D8" aria-hidden="true">#</a></h3><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0 <code>core-js2</code> \u7684\u95EE\u9898\uFF0C<code>core-js@3</code> \u4F7F\u7528 <code>Monorepo</code> \u8FDB\u884C\u62C6\u5305\uFF0C\u62C6\u6210\u4E86 5 \u4E2A\u76F8\u5173\u7684\u5305\uFF0C\u5206\u522B\u5982\u4E0B\uFF1A</p><ul><li>core-js\uFF1A\u662F\u6574\u4E2A <code>core-js</code> \u7684\u6838\u5FC3\uFF0C\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u57AB\u7247\u80FD\u529B\uFF0C\u4F46\u662F\u76F4\u63A5\u4F7F\u7528 <code>core-js</code> \u4F1A\u6C61\u67D3\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u548C\u5BF9\u8C61\u539F\u578B\uFF1B</li><li>core-js-pure\uFF1A<code>core-js-pure</code> \u63D0\u4F9B\u4E86\u72EC\u7ACB\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4E0D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\uFF1B</li><li>core-js-compact\uFF1A\u6839\u636E <code>Browserslist</code> \u7EF4\u62A4\u4E86\u4E0D\u540C\u5BBF\u4E3B\u73AF\u5883\u3001\u4E0D\u540C\u7248\u672C\u4E0B\u5BF9\u5E94\u9700\u8981\u652F\u6301\u7279\u6027\u7684\u96C6\u5408\uFF1B</li><li>core-js-builder\uFF1A\u7ED3\u5408 <code>core-js-compact</code> \u4EE5\u53CA <code>core-js</code>\uFF0C\u5E76\u5229\u7528 <code>webpack</code> \u80FD\u529B\uFF0C\u6839\u636E\u9700\u6C42\u6253\u5305\u51FA <code>core-js</code></li><li>core-js-bundle</li></ul><p>\u5BF9\u4E8E ECMAScript \u4E2D\u5DF2\u7ECF\u7A33\u5B9A\u7684\u529F\u80FD\uFF0C<code>core-js</code> \u5DF2\u7ECF\u51E0\u4E4E\u5B8C\u5168\u652F\u6301\uFF0C\u5E76\u5728 <code>core-js@3</code> \u4E2D\u5F15\u5165\u4E86\u4E00\u4E9B\u65B0\u7684\u529F\u80FD</p><ul><li>\u5BF9\u4E8E\u4E00\u4E9B\u5DF2\u7ECF\u52A0\u5165\u5230 <code>ES2016-ES2019</code> \u4E2D\u7684\u63D0\u6848\uFF0C\u73B0\u5728\u5DF2\u7ECF\u88AB\u6807\u8BB0\u4E3A\u7A33\u5B9A\u529F\u80FD\uFF1B</li><li>\u589E\u52A0\u4E86 <code>proposals</code> \u914D\u7F6E\u9879\uFF0C\u5BF9\u5904\u5728\u63D0\u6848\u9636\u6BB5\u7684 api \u63D0\u4F9B\u652F\u6301\uFF0C\u4F46\u662F\u56E0\u4E3A\u63D0\u6848\u9636\u6BB5\u5E76\u4E0D\u7A33\u5B9A\uFF0C\u5728\u6B63\u5F0F\u52A0\u5165\u6807\u51C6\u4E4B\u524D\uFF0C\u53EF\u80FD\u4F1A\u6709\u5927\u7684\u6539\u52A8\uFF0C\u9700\u8981\u8C28\u614E\u4F7F\u7528\uFF1B\u5BF9\u4E8E\u4E00\u4E9B\u6539\u53D8\u5DE8\u5927\u7684\u63D0\u6848\uFF0C\u4E5F\u8FDB\u884C\u4E86\u5BF9\u5E94\u7684\u66F4\u65B0\uFF1B</li><li>\u589E\u52A0\u4E86\u5BF9\u4E00\u4E9B web \u6807\u51C6\u7684\u652F\u6301\uFF0C\u6BD4\u5982 URL \u548C <code>URLSearchParams</code>\uFF1B</li><li>\u5220\u9664\u4E86\u4E00\u4E9B\u8FC7\u65F6\u7684\u7279\u6027\uFF1B</li></ul><p>\u4F46\u662F <code>babel/polyfill</code> \u5E76\u6CA1\u6709\u63D0\u4F9B\u4ECE <code>core-js@2</code> \u5230 <code>core-js@3</code> \u7684\u5E73\u6ED1\u5347\u7EA7\uFF0C\u6240\u4EE5 <strong>\u5F53 core-js \u5347\u7EA7\u52303.0\u7684\u7248\u672C\u540E\uFF0C\u5B89\u88C5 babel@2 \u7684 @babel/polyfill \u5C06\u88AB\u5F03\u7528\u3002</strong></p><p>\u5728 <code>babel7.4.0</code> \u4E4B\u524D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5 <code>@babel/polyfill</code> \u6765\u8F6C\u6362 API\uFF0C\u4F46\u662F\u5728 <code>7.4.0</code> \u4E4B\u540E\u7684 <code>Babel</code> \u7248\u672C\uFF0C\u5C31\u4F1A\u63D0\u793A\u8BA9\u6211\u4EEC\u5206\u5F00\u5F15\u5165 <code>core-js/stable</code>(\u9ED8\u8BA4\u5B89\u88C53.x)\u548C <code>regenerator-runtime/runtime</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">warning @babel/polyfill@7.4.4: \uFFFD As of Babel 7.4.0, this</span></span>
<span class="line"><span style="color:#A6ACCD;">package has been deprecated in favor of directly</span></span>
<span class="line"><span style="color:#A6ACCD;">including core-js/stable (to polyfill ECMAScript</span></span>
<span class="line"><span style="color:#A6ACCD;">features) and regenerator-runtime/runtime</span></span>
<span class="line"><span style="color:#A6ACCD;">(needed to use transpiled generator functions):</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; import &quot;core-js/stable&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt; import &quot;regenerator-runtime/runtime&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F7F\u7528\u59FF\u52BF" tabindex="-1">\u4F7F\u7528\u59FF\u52BF <a class="header-anchor" href="#\u4F7F\u7528\u59FF\u52BF" aria-hidden="true">#</a></h2><p>\u6839\u636E\u4E0A\u8FF0\u7684\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\uFF0C<code>@babel/polyfill</code> \u5E93\u5DF2\u7ECF\u662F\u65F6\u4EE3\u7684\u4EA7\u7269\u4E86\u3002\u4F46\u662F\u6211\u4EEC\u4ECD\u7136\u770B\u4E0B\u8981\u5982\u4F55\u4F7F\u7528 <code>babel/polyfill</code>\uFF08\u5982\u4E0A\u4ECB\u7ECD\uFF0C\u73B0\u5728\u5DF2\u7ECF\u63A8\u8350\u4F7F\u7528 <code>core-js/stable</code> \u548C <code>regenerator-runtime/runtime</code>\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\uFF0C\u8FD9\u4E24\u4E2A\u5305\u662F <code>babel/polyfill</code> \u7684\u5B50\u5305\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u540C\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF09\u8F6C\u8BD1 API\u3002</p><h3 id="\u5355\u72EC\u4F7F\u7528" tabindex="-1">\u5355\u72EC\u4F7F\u7528 <a class="header-anchor" href="#\u5355\u72EC\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4E0D\u4F9D\u8D56\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u5355\u72EC\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F7F\u7528\u59FF\u52BF\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5B89\u88C5\u4F9D\u8D56 <code>npm install \\--save core-js regenerator-runtime</code>\uFF0C\u7136\u540E\u9700\u8981\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u9700\u8981\u8FDB\u884C\u5F15\u5165\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import &quot;core-js/stable&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;regenerator-runtime/runtime&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u662F\u8981\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u4E0D\u80FD\u5B89\u88C5 <code>@babel/polyfill</code> \u8FD9\u4E2A\u5305\u4E86\uFF0C\u56E0\u4E3A <code>@bable/polyfill</code> \u4E5F\u662F\u4F9D\u8D56 <code>core-js</code> \u5E76\u4E14\u4F1A\u9501\u6B7B <code>2.x</code> \u7248\u672C\uFF0C<code>core-js 2.x</code> \u7684\u7248\u672C\u4E2D\u662F\u6CA1\u6709 stable \u6587\u4EF6\u76EE\u5F55\u7684\uFF0C\u6240\u4EE5 <code>import &quot;core-js/stable&quot;</code> \u8FD9\u4E2A\u5F15\u7528\u5C31\u4F1A\u62A5\u9519\u3002</p><h3 id="\u5728-webpack-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 webpack \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-webpack-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u90A3\u4E48\u5982\u679C\u6211\u4EEC\u4F9D\u8D56\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u6BD4\u5982 <code>webpack</code> \u7684\u8BDD\uFF0C\u6211\u4EEC\u9700\u8981\u600E\u4E48\u4F7F\u7528\u5462\uFF1F\u5B89\u88C5\u4F9D\u8D56\u7684\u8FC7\u7A0B\u4E0D\u4F1A\u53D8\uFF0C\u4ECD\u7136\u662F\u9700\u8981\u5B89\u88C5 <code>npm install \\--save core-js regenerator-runtime</code>\u8FD9\u4E24\u4E2A\u4F9D\u8D56\u3002</p><p>\u5B89\u88C5\u5B8C\u4F9D\u8D56\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u66F4\u6539 <code>webpack</code> \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 <code>entry</code> \u914D\u7F6E\uFF0Cwebpack \u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// webpack.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: [&#39;core-js/stable&#39;, &#39;regenerator-runtime/runtime&#39;, &#39;./main.js&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;dist.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: path.resolve(__dirname, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="babel-preset-env" tabindex="-1">@babel/preset-env <a class="header-anchor" href="#babel-preset-env" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u8FF0 <code>@babel/polyfill</code> \u7684\u89E3\u51B3\u65B9\u6848\u4E2D\uFF0C\u662F\u5C06\u57AB\u7247\u5168\u91CF\u8FDB\u884C\u5F15\u5165\u7684\uFF0C\u5B8C\u6574\u7684 <code>polyfills</code> \u6587\u4EF6\u975E\u5E38\u5927\uFF0C\u53CA\u5176\u4E0D\u5229\u4E8E\u6211\u4EEC\u6253\u5305\u51FA\u6765\u7684\u4F53\u79EF\u548C\u9875\u9762\u7684\u6027\u80FD\u3002</p><p>\u9664\u4E86\u4E0A\u8FF0\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>Babel</code> \u7684\u9884\u8BBE\u6216\u8005\u63D2\u4EF6\u505A\u5230\u6309\u9700\u4F7F\u7528\u3002</p><p>\u5728\u4E0A\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u7B80\u5355\u4ECB\u7ECD\u4E86 <code>@babel/preset-env</code> \u8FD9\u4E2A\u9884\u8BBE\u3002<code>@babel/preset-env</code> \u9884\u8BBE\u5305\u542B\u6240\u6709\u6807\u51C6\u7684\u6700\u65B0\u7279\u6027\uFF0C\u8F6C\u6362\u90A3\u4E9B\u5DF2\u7ECF\u88AB\u6B63\u5F0F\u7EB3\u5165 TC39 \u4E2D\u7684\u8BED\u6CD5\uFF1B\u8BE5\u9884\u8BBE\u5728 <code>Babel6</code> \u7684\u65F6\u5019\u7684\u540D\u5B57\u662F <code>babel-preset-env</code> \u5728 <code>Babel7</code> \u540E\uFF0C\u66F4\u540D\u4E3A <code>@babel/preset-env</code>\uFF0C\u8BE5\u9884\u8BBE\u4E0D\u53EA\u53EF\u4EE5\u5728\u7F16\u8BD1\u65F6\u901A\u8FC7\u8F6C\u6362 AST \u6765\u8FDB\u884C\u8BED\u6CD5\u8F6C\u6362\uFF0C\u8FD8\u6709\u4E00\u4E2A\u91CD\u8981\u529F\u80FD\u5C31\u662F\u6839\u636E\u8BBE\u7F6E\u7684\u53C2\u6570\u9488\u5BF9\u6027\u5904\u7406 polyfill\u3002</p><p>\u4F8B\u5982\uFF0C\u5728\u4E0D\u8BBE\u7F6E\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u6700\u57FA\u7840\u7684\u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [&quot;@babel/preset-env&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u9762\u6211\u4EEC\u4ECB\u7ECD\u51E0\u4E2A <code>@babel/preset-env</code> \u5E38\u7528\u7684\u914D\u7F6E\u9879\u3002</p><h2 id="targets" tabindex="-1">targets <a class="header-anchor" href="#targets" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E targets \u914D\u7F6E\u9879\uFF0C\u6765\u6307\u5B9A\u9879\u76EE\u7684\u8FD0\u884C\u73AF\u5883\u3002<code>@babel/preset-env</code> \u4F1A\u81EA\u52A8\u6839\u636E\u8BBE\u7F6E\u7684\u76EE\u6807\u73AF\u5883\u6765\u5224\u65AD\u9700\u8981\u8F6C\u8BD1\u54EA\u4E9B\u8BED\u6CD5\u548C API\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E targets\uFF0C\u90A3\u4E48 <code>@babel/preset-env</code> \u4F1A\u63A5\u7740\u5BFB\u627E\u9879\u76EE\u4E2D\u7684 <code>browserslist</code> \u914D\u7F6E\uFF0C<code>browserslist</code> \u914D\u7F6E\u53EA\u4F1A\u63A7\u5236\u8BED\u6CD5\u7684\u76EE\u6807\u73AF\u5883\u3002\u5982\u679C <code>targets</code> \u548C <code>browserslist</code> \u90FD\u6CA1\u6709\uFF0C\u90A3\u4E48 <code>@babel/preset-env</code> \u5C31\u4F1A\u5168\u91CF\u5904\u7406\u8BED\u6CD5\u548C API\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u5C06\u6211\u4EEC\u7684\u76EE\u6807\u73AF\u5883\u8BBE\u7F6E\u4E3A\u6700\u8FD1 3\u4E2A \u7248\u672C\u7684\u6D4F\u89C8\u5668\u548C \u5B89\u53534.4 \u4EE5\u4E0A\u7684\u7CFB\u7EDF\u4EE5\u53CA iOS 9.0 \u4EE5\u4E0A\u7684\u7CFB\u7EDF\uFF0C\u90A3\u4E48 babel \u53EA\u4F1A\u517C\u5BB9\u8BE5\u76EE\u6807\u73AF\u5883\u7684\u4EE3\u7801\u3002\u5BF9\u5E94\u7684\u914D\u7F6E\u5982\u4E0B\uFF08\u8C8C\u4F3C\u8FD9\u4E2A\u5DF2\u7ECF\u51FA\u73B0\u4E86\u597D\u51E0\u6B21\u4E86\uFF09\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [[&quot;@babel/preset-env&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	targets: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      browsers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;last 3 versions&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Android &gt;= 4.4&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;iOS &gt;= 9.0&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="usebuiltins" tabindex="-1">useBuiltIns <a class="header-anchor" href="#usebuiltins" aria-hidden="true">#</a></h2><p><code>useBuiltIns</code> \u914D\u7F6E\u51B3\u5B9A\u4E86 <code>@babel/preset-env</code> \u8BE5\u5982\u4F55\u5904\u7406 <code>polyfill</code>\u3002\u5176\u9009\u9879\u6709\u51E0\u4E2A\u51E0\u4E2A\u503C\uFF1A&quot;usage&quot; \u3001&quot;entry&quot; \u3001\u548C false, \u9ED8\u8BA4\u4E3A false\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u4E00\u4E00\u4ECB\u7ECD\u4E0B\uFF1A</p><h3 id="false" tabindex="-1">false <a class="header-anchor" href="#false" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u7684 false\uFF0C<code>polyfill</code> \u5C31\u4E0D\u4F1A\u88AB\u6309\u9700\u5904\u7406\u4F1A\u88AB\u5168\u90E8\u5F15\u5165\u3002</p><h3 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-hidden="true">#</a></h3><p>\u5982\u679C <code>useBuiltIn</code> \u8BBE\u7F6E\u4E3A <code>entry</code>\uFF0C\u9700\u8981\u624B\u52A8\u5BFC\u5165 <code>@babel/polyfill</code>\uFF0C\u5176\u4F7F\u7528\u59FF\u52BF\u5728\u4E0A\u4E00\u8282\u4E2D\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165 <code>core-js</code> \u548C <code>regenerator-runtime</code> \u4E5F\u53EF\u4EE5\u5728 <code>webpack</code> \u7684 <code>entry</code> \u4E2D\u8BBE\u7F6E\u3002<code>useBuiltIn: entry</code> \u7684\u4F5C\u7528\u5C31\u662F\u4F1A\u81EA\u52A8\u5C06<code>import &quot;core-js/stable&quot;</code> \u548C <code>import &quot;regenerator-runtime/runtime&quot;</code> \u8F6C\u6362\u4E3A\u76EE\u6807\u73AF\u5883\u7684\u6309\u9700\u5F15\u5165\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [[&quot;@babel/preset-env&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	useBuiltIns: &quot;entry&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>entry</code>\u914D\u7F6E\u53EA\u9488\u5BF9\u76EE\u6807\u73AF\u5883\uFF0C\u800C\u4E0D\u662F\u5177\u4F53\u4EE3\u7801\uFF0C\u6240\u4EE5 <code>Babel</code> \u4F1A\u9488\u5BF9\u76EE\u6807\u73AF\u5883\u5F15\u5165\u6240\u6709\u7684 <code>polyfill</code> \u6269\u5C55\u5305\uFF0C\u7528\u4E0D\u5230\u7684polyfill\u4E5F\u53EF\u80FD\u4F1A\u5F15\u5165\u8FDB\u6765\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u8003\u8651\u6253\u5305\u4EA7\u7269\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u914D\u7F6E\u3002</p><h3 id="usage" tabindex="-1">usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u5982\u679C <code>useBuiltIns</code> \u8BBE\u7F6E\u4E3A <code>usage</code>\uFF0C\u5219\u4E0D\u9700\u8981\u624B\u52A8\u5BFC\u5165 <code>polyfill</code>\uFF0C<code>babel</code> \u68C0\u6D4B\u51FA\u6B64\u914D\u7F6E\u4F1A\u81EA\u52A8\u8FDB\u884C <code>polyfill</code> \u7684\u5F15\u5165\u3002\u5176\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [[&quot;@babel/preset-env&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	useBuiltIns: &quot;usage&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: []</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>usage</code> \u6A21\u5F0F\u4E0B\uFF0CBabel \u9664\u4E86\u4F1A\u9488\u5BF9\u76EE\u6807\u73AF\u5883\u5F15\u5165 <code>polyfill</code> \u7684\u540C\u65F6\u4E5F\u4F1A\u8003\u8651\u9879\u76EE\u4EE3\u7801\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86\u54EA\u4E9B ES6+ \u7684\u65B0\u7279\u6027\uFF0C\u4E24\u8005\u53D6\u4E00\u4E2A\u6700\u5C0F\u7684\u96C6\u5408\u4F5C\u4E3A polyfill \u7684\u5BFC\u5165\u3002</p><p>\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u4EE3\u7801\u5C3D\u53EF\u80FD\u7684\u7CBE\u7B80\uFF0C\u90A3\u4E48 <code>usage</code> \u6A21\u5F0F\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\uFF0C\u5E76\u4E14\u8FD9\u4E5F\u662F\u5B98\u65B9\u63A8\u8350\u7684\u4F7F\u7528\u59FF\u52BF\u3002</p><h2 id="core-js-1" tabindex="-1">core-js <a class="header-anchor" href="#core-js-1" aria-hidden="true">#</a></h2><p><code>@babel/preset-env</code> \u9884\u8BBE\u4E5F\u53EF\u4EE5\u8BA9\u4F60\u81EA\u5DF1\u9009\u62E9\u9700\u8981\u4F7F\u7528 2 \u8FD8\u662F 3\u3002\u5E76\u4E14\u8FD9\u4E2A\u53C2\u6570\u53EA\u6709 <code>useBuiltIn</code> \u8BBE\u7F6E\u4E3A <code>usage</code> \u6216\u8005 <code>entry</code> \u65F6\u624D\u4F1A\u751F\u6548\u3002</p><p>\u8BE5\u914D\u7F6E\u9ED8\u8BA4\u503C\u4E3A 2\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u9700\u8981\u67D0\u4E9B\u6700\u65B0\u7684 API \u65F6\uFF0C\u9700\u8981\u5C06\u5176\u8BBE\u7F6E\u4E3A 3\u3002</p><h1 id="babel-runtime" tabindex="-1">@babel/runtime <a class="header-anchor" href="#babel-runtime" aria-hidden="true">#</a></h1><p><code>@babel/runtime</code> \u662F\u542B\u6709 babel \u7F16\u8BD1\u6240\u9700\u8981\u7684\u4E00\u4E9B <code>helpers</code> \u51FD\u6570\u3002\u540C\u65F6\u8FD8\u63D0\u4F9B\u4E86 <code>regenerator-runtime</code>\uFF0C\u5BF9 <code>generator</code> \u548C <code>async</code> \u51FD\u6570\u8FDB\u884C\u7F16\u8BD1\u964D\u7EA7\u3002</p><p>\u5177\u4F53\u7684\u4F7F\u7528\u6211\u4EEC\u5728\u4E0B\u9762\u7684 <code>@babel/plugin-transform-runtime</code> \u4E2D\u4F1A\u4ECB\u7ECD\u3002</p><h1 id="babel-plugin-transform-runtime" tabindex="-1">@babel/plugin-transform-runtime <a class="header-anchor" href="#babel-plugin-transform-runtime" aria-hidden="true">#</a></h1><blockquote><p>A plugin that enables the re-use of Babel&#39;s injected helper code to save on codesize.</p></blockquote><p>\u4E0B\u9762\u6211\u4EEC\u6765\u4ECB\u7ECD babel \u751F\u6001\u7684\u53E6\u4E00\u4E2A\u91CD\u8981\u7684\u63D2\u4EF6\uFF1A<code>@babel/plugin-transform-runtime</code> \u5176\u4F5C\u7528\u662F\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528 babel \u6CE8\u5165\u7684 helpers \u51FD\u6570\uFF0C\u4EE5\u8282\u7701\u4EE3\u7801\u4F53\u79EF\uFF08\u8FD9\u53E5\u8BDD\u5148\u8BB0\u4E0B\u6765\uFF0C\u7A0D\u540E\u4F1A\u7ED9\u5927\u5BB6\u89E3\u91CA\uFF09\u3002</p><p>Babel \u5728\u8F6C\u8BD1 syntax \u65F6\uFF0C\u6709\u65F6\u5019\u4F1A\u4F7F\u7528\u4E00\u4E9B\u8F85\u52A9\u7684\u51FD\u6570\u6765\u5E2E\u5FD9\uFF0C\u6BD4\u5982\u6211\u4EEC\u9700\u8981\u8F6C\u8BD1 class \u7C7B\uFF0C\u9ED8\u8BA4\u7684\u8F6C\u8BD1\u7ED3\u679C\u5982\u4E0B: [babel playground](&lt;<a href="https://www.babeljs.cn/repl#?browsers=ie" target="_blank" rel="noreferrer">https://www.babeljs.cn/repl#?browsers=ie</a> &lt;=11&amp;build=&amp;builtIns=usage&amp;corejs=3.6&amp;spec=false&amp;loose=false&amp;code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtCYAngBLwggoAUaYAtvAJRa57SLwAuArohgAalyKaABJMNegF8-LSdjkA3MImgAvABZg0AcwIYAvNDTwA7nCSo0lBtmDpUIeADoK2yhq26tTgiTIVKAHIQAEsIEMCGBgBuIA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=true&amp;timeTravel=false&amp;sourceType=script&amp;lineWrap=true&amp;presets=env,react,stage-0,stage-1,stage-2,stage-3,typescript,flow&amp;prettier=true&amp;targets=&amp;version=7.17.1&amp;externalPlugins=&amp;assumptions={}&gt;)</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43975758f1d445bf87a769ddffbf1e90~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5728 <code>class</code> \u8BED\u6CD5\u7684\u8F6C\u6362\u8FC7\u7A0B\u4E2D\uFF0C <code>@babel/preset-env</code> \u81EA\u5B9A\u4E49\u4E86 <code>_classCallCheck</code> \u8FD9\u4E2A\u51FD\u6570\u6765\u8F85\u52A9\u8F6C\u6362\u3002\u8FD9\u4E2A\u51FD\u6570\u5C31\u662F <code>helper</code> \u51FD\u6570\u3002\u8FD9\u662F <code>@babel/preset-env</code> \u5728\u505A\u8BED\u6CD5\u8F6C\u6362\u7684\u65F6\u5019\uFF0C\u6CE8\u5165\u4E86\u8FD9\u4E9B <code>helpers</code> \u51FD\u6570\u58F0\u660E\uFF0C\u4EE5\u4FBF\u8BED\u6CD5\u8F6C\u6362\u540E\u4F7F\u7528\u3002</p><p>\u4ECE\u4E0A\u56FE\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C<code>helper</code> \u51FD\u6570\u5728\u8F6C\u8BD1\u540E\u7684\u6587\u4EF6\u4E2D\u88AB\u5B9A\u4E49\u4E86\u4E00\u904D\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u9879\u76EE\u4E2D\u6709\u591A\u5C11\u4E2A\u6587\u4EF6\u4E2D\u5B58\u5728\u9700\u8981\u8F6C\u6362\u7684 class\uFF0C\u90A3\u4E48\u5728\u6253\u5305\u7684\u4EA7\u7269\u4E2D\u5C31\u4F1A\u6709\u591A\u5C11\u4E2A <code>_classCallCheck helper</code> \u51FD\u6570\uFF0C\u8FD9\u663E\u7136\u4E0D\u201C\u7A0B\u5E8F\u5458\u201D\u3002</p><p>\u6240\u4EE5\u89E3\u51B3\u601D\u8DEF\u662F\u5C06\u8FD9\u4E9B <code>helpers</code> \u51FD\u6570\u90FD\u653E\u5165\u5230\u67D0\u4E2A\u4F9D\u8D56\u5305\u4E2D\uFF0C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5\u4ECE\u8BE5\u5305\u4E2D\u5F15\u5165\u5373\u53EF\uFF0C\u8FD9\u6837\u6253\u5305\u51FA\u6765\u7684\u4EA7\u7269\u4E2D\uFF0C\u5C31\u53EA\u6709\u4E00\u4EFD <code>helpers</code> \u51FD\u6570\u3002\u4E0A\u9762\u63D0\u5230\u7684 <code>@babel/runtime</code> \u5C31\u662F\u8FD9\u4E2A\u4F9D\u8D56\u5305\u3002</p><p>\u90A3\u4E48 <code>@babel/plugin-transform-runtime</code> \u8FD9\u4E2A\u63D2\u4EF6\u662F\u5E72\u561B\u7684\u5462\uFF1F<code>@babel/plugin-transform-runtime</code> \u662F\u5E2E\u6211\u4EEC\u7528\u5DE5\u7A0B\u5316\u7684\u624B\u6BB5\u89E3\u51B3\u6765\u89E3\u51B3\u95EE\u9898\u7684\u3002\u6211\u4EEC\u4F7F\u7528 <code>@babel/plugin-transform-runtime</code> \u81EA\u52A8\u5C06\u9700\u8981\u5F15\u5165\u7684 <code>helpers</code> \u51FD\u6570\u66FF\u6362\u4E3A <code>@babel/runtime</code> \u4E2D\u7684\u5F15\u7528\u3002</p><p>\u6211\u4EEC\u5728 [babel-playground](&lt;<a href="https://www.babeljs.cn/repl#?browsers=ie" target="_blank" rel="noreferrer">https://www.babeljs.cn/repl#?browsers=ie</a> &lt;=11&amp;build=&amp;builtIns=usage&amp;corejs=3.6&amp;spec=false&amp;loose=false&amp;code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtCYAngBLwggoAUaYAtvAJRa57SLwAuArohgAalyKaABJMNegF8-LSdjkA3MImgAvABZg0AcwIYAvNDTwA7nCSo0lBtmDpUIeADoK2yhq26tTgiTIVKAHIQAEsIEMCGBgBuIA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=true&amp;timeTravel=false&amp;sourceType=script&amp;lineWrap=true&amp;presets=env,react,stage-0,stage-1,stage-2,stage-3,typescript,flow&amp;prettier=true&amp;targets=&amp;version=7.17.1&amp;externalPlugins=@babel/plugin-transform-runtime@7.17.0&amp;assumptions={}&gt;) \u4E0A\u52A0\u5165\u4E86 <code>@babel/plugin-transform-runtime</code> \u8FD9\u4E2A\u63D2\u4EF6\u4E4B\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u539F\u6765\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684 <code>_classCallCheck helper</code> \u51FD\u6570\u53D8\u6210\u4E86\u4ECE <code>&quot;@babel/runtime/helpers/classCallCheck&quot;</code> \u4E2D\u5F15\u5165\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10536d71a53f464a9a77d3feabca0fee~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p><code>@babel/plugin-transform-runtime</code> \u8FD8\u6709\u53E6\u4E00\u4E2A\u5173\u952E\u7684\u4F5C\u7528\u5C31\u662F\u5BF9 API \u8FDB\u884C\u8F6C\u6362\u7684\u65F6\u5019\uFF0C\u907F\u514D\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\u3002</p><p><code>babel/polyfill</code> \u7684\u5904\u7406\u673A\u5236\u662F\uFF0C\u5BF9\u4E8E\u4F8B\u5982 <code>Array.from</code> \u7B49\u9759\u6001\u65B9\u6CD5\uFF0C\u76F4\u63A5\u5728 <code>global.Array</code> \u4E0A\u6DFB\u52A0\uFF1B\u5BF9\u4E8E\u4F8B\u5982 <code>includes</code> \u7B49\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u76F4\u63A5\u5728 <code>global.Array.prototype</code> \u4E0A\u6DFB\u52A0\u3002</p><p>\u4F46\u662F\u8FD9\u6837\u76F4\u63A5\u4FEE\u6539\u4E86\u5168\u5C40\u53D8\u91CF\u7684\u539F\u578B\uFF0C\u6709\u53EF\u80FD\u4F1A\u5E26\u6765\u610F\u60F3\u4E0D\u5230\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u95EE\u9898\u5728\u5F00\u53D1\u7B2C\u4E09\u65B9\u5E93\u7684\u65F6\u5019\u5C24\u5176\u91CD\u8981\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5F00\u53D1\u7684\u7B2C\u4E09\u65B9\u5E93\u4FEE\u6539\u4E86\u5168\u5C40\u53D8\u91CF\uFF0C\u6709\u53EF\u80FD\u548C\u53E6\u4E00\u4E2A\u4E5F\u4FEE\u6539\u4E86\u5168\u5C40\u53D8\u91CF\u7684\u7B2C\u4E09\u65B9\u5E93\u53D1\u751F\u51B2\u7A81\uFF0C\u6216\u8005\u548C\u4F7F\u7528\u6211\u4EEC\u7684\u7B2C\u4E09\u65B9\u5E93\u7684\u4F7F\u7528\u8005\u53D1\u751F\u51B2\u7A81\u3002\u516C\u8BA4\u7684\u8F83\u597D\u7684\u7F16\u7A0B\u8303\u5F0F\u4E2D\uFF0C\u4E5F\u4E0D\u9F13\u52B1\u76F4\u63A5\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\u3001</p><p>\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C<code>polyfill</code> \u7684\u4F5C\u7528\u662F\u5BF9\u6D4F\u89C8\u5668\u7684\u5168\u5C40\u5BF9\u8C61\u91CD\u5199\u5176 API\uFF0C\u4EE5\u63D0\u4F9B\u57AB\u7247\u80FD\u529B\u3002\u6BD4\u5982 <code>promise</code>\uFF0C<code>polyfill</code> \u4F1A\u91CD\u5199 <code>window.promise</code>\uFF0C\u4E3A\u4E0D\u652F\u6301 <code>peomise</code> \u7684\u6D4F\u89C8\u5668\u63D0\u4F9B <code>promise</code> \u7684\u80FD\u529B\u3002\u4F46\u662F\u8FD9\u6837\u505A\u4F1A\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\uFF08\u8FD9\u4E5F\u662F <code>@babel/polyfill</code> \u7684\u4E00\u4E2A\u7F3A\u70B9\uFF09\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var _interopRequireDefault = require(&quot;@babel/runtime-corejs3/helpers/interopRequireDefault&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var _promise = _interopRequireDefault(require(&quot;@babel/runtime-corejs3/core-js-stable/promise&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = _promise[&quot;default&quot;].resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4ECE\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C<code>@babel/plugin-transform-runtime</code> \u5C06 <code>Promise</code> \u8F6C\u6362\u4E3A <code>_promise[&quot;default&quot;]</code>\uFF0C\u800C <code>_promise[&quot;default&quot;]</code> \u62E5\u6709ES\u6807\u51C6\u91CC <code>Promise</code> \u6240\u6709\u7684\u529F\u80FD\u3002\u73B0\u5728\uFF0C\u5373\u4F7F\u6D4F\u89C8\u5668\u6CA1\u6709 <code>Promise</code>\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u3002</p><p>\u6211\u4EEC\u6765\u603B\u7ED3\u4E0B\uFF0C<code>transform-runtime</code> \u63D2\u4EF6\u7684\u4E24\u4E2A\u4E3B\u8981\u4F5C\u7528\uFF1A</p><ul><li>\u53EF\u4EE5\u76F4\u63A5\u5C06 <code>helpers</code> \u4ECE\u6587\u4EF6\u4E2D\u5B9A\u4E49\u6539\u4E3A\u4ECE <code>@babel/runtime</code> \u4E2D\u5F15\u5165\uFF0C\u907F\u514D\u4E86\u591A\u6B21\u5F15\u5165 <code>helpers</code> \u8F85\u52A9\u51FD\u6570\u3002</li><li>\u53EF\u4EE5\u5C06 <code>@babel/ployfill</code> \u4E2D <code>API</code> \u7684 <code>polyfill</code> \u76F4\u63A5\u4FEE\u6539\u539F\u578B\u6539\u4E3A\u4ECE <code>@babel/runtime-corejs3/helpers</code> \u4E2D\u83B7\u53D6\uFF0C\u907F\u514D\u5BF9\u5168\u5C40\u53D8\u91CF\u548C\u539F\u578B\u7684\u6C61\u67D3\u3002</li></ul><h1 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h1><p>\u672C\u7BC7\u6587\u7AE0\u6211\u4EEC\u4ECB\u7ECD\u4E86 <code>polyfill</code> \u5728 <code>Babel</code> \u4E2D\u7684\u5B9E\u8DF5\uFF0C\u5E76\u4E14\u4ECB\u7ECD\u4E86 <code>Babel</code> \u5B98\u65B9\u63A8\u51FA\u7684 <code>polyfill</code> \u5E93 <code>@babel/polyfill</code>\uFF0C\u7136\u540E\u5206\u522B\u4ECB\u7ECD\u4E86 <code>@babel/polyfill</code> \u7684\u4F7F\u7528\u59FF\u52BF\u4EE5\u53CA\u5176\u4E24\u4E2A\u91CD\u8981\u4F9D\u8D56\uFF0C<code>core-js</code> \u548C <code>regenerator-runtime</code>\u3002\u5982\u679C\u76F4\u63A5\u4F7F\u7528 <code>@babel/polyfill</code> \u6709\u4E00\u4E2A\u5F0A\u7AEF\u5C31\u662F\u4E0D\u80FD\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u3002\u6240\u4EE5\u63A8\u8350\u4F7F\u7528 <code>@babel/preset-env</code> \u9884\u8BBE\u3002\u5C06 <code>useBuiltIns</code> \u8BBE\u7F6E\u4E3A <code>usage</code> \u5C31\u53EF\u4EE5\u6839\u636E\u8BBE\u7F6E\u7684 <code>targets</code> \u76EE\u6807\u73AF\u5883\u548C\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5B9E\u9645\u7528\u5230\u7684\u6700\u65B0 ES \u8BED\u6CD5\u548C API \u6765\u8FDB\u884C\u6309\u9700\u52A0\u8F7D\u3002</p><p>\u53EA\u662F\u4F7F\u7528 <code>@babel/preset-env</code> \u8FD8\u5B58\u5728\u95EE\u9898\u5C31\u662F\u4F1A\u6709\u91CD\u590D\u7684 <code>helpers</code> \u8F85\u52A9\u51FD\u6570\u5E76\u4E14\u5728\u8F6C\u6362\u7684\u65F6\u5019\u4F1A\u6C61\u67D3\u73AF\u5883\u53D8\u91CF\u548C\u539F\u578B\uFF0C\u4F7F\u7528<code>@babel/plugin-transform-runtime</code> \u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</p><p>\u901A\u8FC7\u672C\u7BC7\u4EE5\u53CA\u524D\u51E0\u7BC7\u6709\u5173 <code>polyfill</code> \u548C <code>Babel</code> \u7684\u4ECB\u7ECD\u6587\u7AE0\u4E4B\u540E\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u4E86\u89E3\u4E86 Babel \u662F\u600E\u4E48\u5C06 ES6+ \u65B0\u529F\u80FD\u8F6C\u6362\u4E3A ES5 \u7684\u4E86\uFF1F\uFF08\u4E0D\u4E86\u89E3\u7684\u518D\u597D\u597D\u770B\u6587\u7AE0\u5440 (\u3064\u0414\uFF40)\uFF65\uFF9F\uFF65</p><p>\u90A3\u4E48\u63A5\u4E0B\u6765\u5C06\u7EE7\u7EED\u7ED9\u5927\u5BB6\u7ED9\u4ECB\u7ECD\u5982\u4F55\u4F18\u5316 webpack \u914D\u7F6E\u9879 (\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727</p>`,83),n=[c];function p(r,t,d,i,b,u){return a(),s("div",null,n)}const h=e(l,[["render",p]]);export{m as __pageData,h as default};
