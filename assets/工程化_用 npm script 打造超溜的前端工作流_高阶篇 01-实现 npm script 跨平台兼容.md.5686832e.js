import{_ as s,c as a,o as n,d as e}from"./app.e0e4ea3a.js";const _=JSON.parse('{"title":"\u9AD8\u9636\u7BC7 01-\u5B9E\u73B0 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9","slug":"\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9","link":"#\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9","children":[]},{"level":2,"title":"\u7528 cross-var \u5F15\u7528\u53D8\u91CF","slug":"\u7528-cross-var-\u5F15\u7528\u53D8\u91CF","link":"#\u7528-cross-var-\u5F15\u7528\u53D8\u91CF","children":[]},{"level":2,"title":"\u7528 cross-env \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF","slug":"\u7528-cross-env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF","link":"#\u7528-cross-env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF","children":[]},{"level":2,"title":"\u518D\u591A\u8BF4\u51E0\u53E5","slug":"\u518D\u591A\u8BF4\u51E0\u53E5","link":"#\u518D\u591A\u8BF4\u51E0\u53E5","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/\u7528 npm script \u6253\u9020\u8D85\u6E9C\u7684\u524D\u7AEF\u5DE5\u4F5C\u6D41/\u9AD8\u9636\u7BC7 01-\u5B9E\u73B0 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9.md"}'),o={name:"\u5DE5\u7A0B\u5316/\u7528 npm script \u6253\u9020\u8D85\u6E9C\u7684\u524D\u7AEF\u5DE5\u4F5C\u6D41/\u9AD8\u9636\u7BC7 01-\u5B9E\u73B0 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9.md"},p=e(`<h1 id="\u9AD8\u9636\u7BC7-01-\u5B9E\u73B0-npm-script-\u8DE8\u5E73\u53F0\u517C\u5BB9" tabindex="-1">\u9AD8\u9636\u7BC7 01-\u5B9E\u73B0 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9 <a class="header-anchor" href="#\u9AD8\u9636\u7BC7-01-\u5B9E\u73B0-npm-script-\u8DE8\u5E73\u53F0\u517C\u5BB9" aria-hidden="true">#</a></h1><hr><h1 id="_3-1-\u5B9E\u73B0-npm-script-\u8DE8\u5E73\u53F0\u517C\u5BB9" tabindex="-1">3.1 \u5B9E\u73B0 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9 <a class="header-anchor" href="#_3-1-\u5B9E\u73B0-npm-script-\u8DE8\u5E73\u53F0\u517C\u5BB9" aria-hidden="true">#</a></h1><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u5982\u679C\u4F60\u5728 Linux\u3001Mac \u5E73\u53F0\u505A\u5F00\u53D1\uFF0C\u6240\u6709\u7684 npm script \u90FD\u4F1A\u987A\u5229\u8FD0\u884C\uFF0C\u4F46\u662F Windows \u4E0B\u9762\u7684\u540C\u5B66\u53EF\u80FD\u5C31\u6BD4\u8F83\u75DB\u82E6\u4E86\uFF0C\u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u7684 shell \u547D\u4EE4\u90FD\u662F\u8DE8\u5E73\u53F0\u517C\u5BB9\u7684\uFF0C\u751A\u81F3\u5404\u79CD\u5E38\u89C1\u7684\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u4E5F\u662F\u4E0D\u517C\u5BB9\u7684\u3002</p><p>\u53EF\u80FD\u6709\u90E8\u5206\u540C\u5B66\u5904\u7406\u8FC7 npm script \u8DE8\u5E73\u53F0\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u7C97\u66B4\u7684\u4E3A\u4E24\u79CD\u5E73\u53F0\u5404\u5199\u4E00\u4EFD npm script\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;hello-npm-script&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;bash-script&quot;: &quot;echo Hello $npm_package_name&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;win-script&quot;: &quot;echo Hello %npm_package_name%&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6709\u6280\u672F\u8FFD\u6C42\u7684\u5DE5\u7A0B\u5E08\u80AF\u5B9A\u4E0D\u4F1A\u6EE1\u8DB3\u4E0A\u9762\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B9E\u9645\u4E0A\u793E\u533A\u4E2D\u5DF2\u7ECF\u6709\u975E\u5E38\u591A\u7684\u5C0F\u5DE5\u5177\u53EF\u4EE5\u5E2E\u6211\u4EEC\u4F18\u96C5\u7684\u5B9E\u73B0\u8DE8\u5E73\u53F0\u7684 npm script\uFF0C\u4E0B\u9762\u6211\u4EEC\u63A2\u7D22\u4E0B\u5982\u4F55\u5B9E\u73B0\u8DE8\u5E73\u53F0\u7684\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u3001\u53D8\u91CF\u5F15\u7528\u3001\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u3002</p><p><strong>\u7279\u522B\u8BF4\u660E\uFF0Cwindows \u73AF\u5883\u7684\u540C\u5B66\u5EFA\u8BAE\u4F7F\u7528 git bash \u6765\u8FD0\u884C npm script\uFF0C\u4F7F\u7528 windows \u81EA\u5E26\u7684 cmd \u53EF\u80FD\u4F1A\u9047\u5230\u6BD4\u8F83\u591A\u7684\u95EE\u9898</strong></p><h2 id="\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9" tabindex="-1">\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9 <a class="header-anchor" href="#\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9" aria-hidden="true">#</a></h2><p>npm script \u4E2D\u6D89\u53CA\u5230\u7684\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u5305\u62EC\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u521B\u5EFA\u3001\u5220\u9664\u3001\u79FB\u52A8\u3001\u590D\u5236\u7B49\u64CD\u4F5C\uFF0C\u800C\u793E\u533A\u4E3A\u8FD9\u4E9B\u57FA\u672C\u64CD\u4F5C\u4E5F\u63D0\u4F9B\u4E86\u8DE8\u5E73\u53F0\u517C\u5BB9\u7684\u5305\uFF0C\u5217\u4E3E\u5982\u4E0B\uFF1A</p><ul><li><a href="https://github.com/isaacs/rimraf" target="_blank" rel="noreferrer">rimraf</a> \u6216 <a href="https://www.npmjs.com/package/del-cli" target="_blank" rel="noreferrer">del-cli</a>\uFF0C\u7528\u6765\u5220\u9664\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u5B9E\u73B0\u7C7B\u4F3C\u4E8E <code>rm -rf</code> \u7684\u529F\u80FD\uFF1B</li><li><a href="https://www.npmjs.com/package/cpr" target="_blank" rel="noreferrer">cpr</a>\uFF0C\u7528\u4E8E\u62F7\u8D1D\u3001\u590D\u5236\u6587\u4EF6\u548C\u76EE\u5F55\uFF0C\u5B9E\u73B0\u7C7B\u4F3C\u4E8E <code>cp -r</code> \u7684\u529F\u80FD\uFF1B</li><li><a href="https://www.npmjs.com/package/make-dir-cli" target="_blank" rel="noreferrer">make-dir-cli</a>\uFF0C\u7528\u4E8E\u521B\u5EFA\u76EE\u5F55\uFF0C\u5B9E\u73B0\u7C7B\u4F3C\u4E8E <code>mkdir -p</code> \u7684\u529F\u80FD\uFF1B</li></ul><p>\u4F7F\u7528\u4E0A\u9762\u8FD9\u51E0\u4E2A\u5C0F\u5DE5\u5177\u6539\u9020 npm script \u7684\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>\u7B2C 1 \u6B65\uFF0C\u6DFB\u52A0\u5F00\u53D1\u4F9D\u8D56\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i rimraf cpr make-dir-cli -D</span></span>
<span class="line"><span style="color:#A6ACCD;"># npm install rimraf cpr make-dir-cli --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn add rimraf cpr make-dir-cli -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C 2 \u6B65\uFF0C\u6539\u9020\u6D89\u53CA\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u7684 npm script\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;cover:cleanup&quot;: &quot;rm -rf coverage &amp;&amp; rm -rf .nyc_output&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;cover:archive&quot;: &quot;cross-var \\&quot;mkdir -p coverage_archive/$npm_package_version &amp;&amp; cp -r coverage/* coverage_archive/$npm_package_version\\&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;cover:cleanup&quot;: &quot;rimraf coverage &amp;&amp; rimraf .nyc_output&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;cover:archive&quot;: &quot;cross-var \\&quot;make-dir coverage_archive/$npm_package_version &amp;&amp; cpr coverage/* coverage_archive/$npm_package_version -o\\&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;cover:serve&quot;: &quot;cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;cover:open&quot;: &quot;cross-var opn http://localhost:$npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;postcover&quot;: &quot;npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;precover&quot;: &quot;npm run cover:cleanup&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;postcover&quot;: &quot;npm-run-all cover:archive --parallel cover:serve cover:open&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u6539\u52A8\u7684\u51E0\u70B9\u8BF4\u660E\uFF1A</p><ul><li><code>rm -rf</code> \u76F4\u63A5\u66FF\u6362\u6210 <code>rimraf</code>\uFF1B</li><li><code>mkdir -p</code> \u76F4\u63A5\u66FF\u6362\u6210 <code>make-dir</code>\uFF1B</li><li><code>cp -r</code> \u7684\u66FF\u6362\u9700\u7279\u522B\u8BF4\u660E\u4E0B\uFF0C<code>cpr</code> \u9ED8\u8BA4\u662F\u4E0D\u8986\u76D6\u7684\uFF0C\u9700\u8981\u663E\u793A\u4F20\u5165 <code>-o</code> \u914D\u7F6E\u9879\uFF0C\u5E76\u4E14\u53C2\u6570\u5FC5\u987B\u4E25\u683C\u662F <code>cpr &lt;source&gt; &lt;destination&gt; [options]</code> \u7684\u683C\u5F0F\uFF0C\u5373\u914D\u7F6E\u9879\u653E\u5728\u6700\u540E\u9762\uFF1B</li><li>\u628A <code>cover:cleanup</code> \u4ECE <code>postcover</code> \u632A\u5230 <code>precover</code> \u91CC\u9762\u53BB\u6267\u884C\uFF0C\u89C4\u907F <code>cpr</code> \u6CA1\u5F52\u6863\u5B8C\u6BD5\u8986\u76D6\u7387\u62A5\u544A\u5C31\u88AB\u6E05\u7A7A\u7684\u95EE\u9898\uFF1B</li></ul><blockquote><p><strong>TIP#13</strong>\uFF1A\u4EFB\u4F55\u6539\u52A8\u4E4B\u540E\u8BB0\u5F97\u91CD\u65B0\u8FD0\u884C npm run cover\uFF0C\u786E\u4FDD\u6240\u6709\u7684 npm script \u8FD8\u662F\u6309\u9884\u671F\u5DE5\u4F5C\u7684</p></blockquote><h2 id="\u7528-cross-var-\u5F15\u7528\u53D8\u91CF" tabindex="-1">\u7528 cross-var \u5F15\u7528\u53D8\u91CF <a class="header-anchor" href="#\u7528-cross-var-\u5F15\u7528\u53D8\u91CF" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/book/6844723718749421582/section/6844723718938181639" target="_blank" rel="noreferrer">2.2 \u5728 npm script \u4E2D\u4F7F\u7528\u53D8\u91CF</a> \u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528\u5185\u7F6E\u548C\u9884\u5B9A\u4E49\u53D8\u91CF\u51CF\u5C11\u4EE3\u7801\u91CD\u590D\u7684\u6280\u5DE7\uFF0C\u5982\u672C\u8282\u5F00\u5934\u7684\u4F8B\u5B50\uFF0CLinux \u548C Windows \u4E0B\u5F15\u7528\u53D8\u91CF\u7684\u65B9\u5F0F\u662F\u4E0D\u540C\u7684\uFF0CLinux \u4E0B\u76F4\u63A5\u53EF\u4EE5\u7528 <code>$npm_package_name</code>\uFF0C\u800C Windows \u4E0B\u5FC5\u987B\u4F7F\u7528 <code>%npm_package_name%</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <a href="https://www.npmjs.com/package/cross-var" target="_blank" rel="noreferrer">cross-var</a> \u5B9E\u73B0\u8DE8\u5E73\u53F0\u7684\u53D8\u91CF\u5F15\u7528\uFF0C\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>\u7B2C 1 \u6B65\uFF0C\u5B89\u88C5 cross-var \u4E3A\u5F00\u53D1\u4F9D\u8D56\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i cross-var -D</span></span>
<span class="line"><span style="color:#A6ACCD;"># npm install cross-var --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn add cross-var -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C 2 \u6B65\uFF0C\u6539\u5199\u5F15\u7528\u53D8\u91CF npm script\uFF0C\u5177\u4F53 diff \u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;cover:cleanup&quot;: &quot;rm -rf coverage &amp;&amp; rm -rf .nyc_output&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;cover:archive&quot;: &quot;mkdir -p coverage_archive/$npm_package_version &amp;&amp; cp -r coverage/* coverage_archive/$npm_package_version&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;cover:serve&quot;: &quot;http-server coverage_archive/$npm_package_version -p $npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;cover:open&quot;: &quot;opn http://localhost:$npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;cover:archive&quot;: &quot;cross-var \\&quot;mkdir -p coverage_archive/$npm_package_version &amp;&amp; cp -r coverage/* coverage_archive/$npm_package_version\\&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;cover:serve&quot;: &quot;cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;cover:open&quot;: &quot;cross-var opn http://localhost:$npm_package_config_port&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;postcover&quot;: &quot;npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3A cover:serve \u548C cover:open \u547D\u4EE4\u90FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u76F4\u63A5\u5728\u539F\u59CB\u547D\u4EE4\u524D\u589E\u52A0 cross-var \u547D\u4EE4\u5373\u53EF\uFF0C\u800C cover:archive \u5185\u542B\u4E86\u4E24\u6761\u5B50\u547D\u4EE4\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5F15\u53F7\u628A\u6574\u4E2A\u547D\u4EE4\u5305\u8D77\u6765\uFF08\u6CE8\u610F\u8FD9\u91CC\u662F\u7528\u7684\u53CC\u5F15\u53F7\uFF0C\u4E14\u5FC5\u987B\u8F6C\u4E49\uFF09\uFF0C\u7136\u540E\u5728\u524D\u9762\u52A0\u4E0A cross-var\u3002</p><p>\u6B64\u5916\uFF0C\u7EC6\u5FC3\u7684\u540C\u5B66\u53EF\u80FD\u53D1\u73B0\u5F15\u5165 cross-var \u4E4B\u540E\uFF0C\u5B83\u7ADF\u7136\u7ED9\u6211\u4EEC\u5B89\u88C5\u4E86 babel\uFF0C\u5982\u679C\u60F3\u4FDD\u6301\u4F9D\u8D56\u66F4\u8F7B\u91CF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <a href="https://www.npmjs.com/package/cross-var-no-babel" target="_blank" rel="noreferrer">cross-var-no-babel</a>\u3002</p><h2 id="\u7528-cross-env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u7528 cross-env \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u7528-cross-env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u5728 node.js \u811A\u672C\u548C npm script \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u4E5F\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\uFF0C\u6BD4\u5982\u6211\u4EEC\u5728\u8FD0\u884C\u6D4B\u8BD5\u65F6\uFF0C\u9700\u8981\u52A0\u4E0A <code>NODE_ENV=test</code>\uFF0C\u6216\u8005\u5728\u542F\u52A8\u9759\u6001\u8D44\u6E90\u670D\u52A1\u5668\u65F6\u81EA\u5B9A\u4E49\u7AEF\u53E3\u53F7\u3002\u56E0\u4E3A\u4E0D\u540C\u5E73\u53F0\u7684\u73AF\u5883\u53D8\u91CF\u8BED\u6CD5\u4E0D\u540C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <a href="https://www.npmjs.com/package/cross-env" target="_blank" rel="noreferrer">cross-env</a> \u6765\u5B9E\u73B0 npm script \u7684\u8DE8\u5E73\u53F0\u517C\u5BB9\uFF0C\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p>\u7B2C 1 \u6B65\uFF0C\u6DFB\u52A0 cross-env \u5230\u5F00\u53D1\u4F9D\u8D56\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i cross-env -D</span></span>
<span class="line"><span style="color:#A6ACCD;"># npm install cross-env --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn add cross-env -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B2C 2 \u6B65\uFF0C\u6539\u5199\u4F7F\u7528\u4E86\u73AF\u5883\u53D8\u91CF\u7684 npm script\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">-    &quot;test&quot;: &quot;NODE_ENV=test mocha tests/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">+    &quot;test&quot;: &quot;cross-env NODE_ENV=test mocha tests/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u6539\u52A8\u66F4\u7B80\u5355\uFF0C\u76F4\u63A5\u5728\u8BBE\u7F6E\u4E86\u73AF\u5883\u53D8\u91CF\u7684\u547D\u4EE4\u524D\u9762\u52A0\u4E0A cross-env \u5373\u53EF\u3002</p><h2 id="\u518D\u591A\u8BF4\u51E0\u53E5" tabindex="-1">\u518D\u591A\u8BF4\u51E0\u53E5 <a class="header-anchor" href="#\u518D\u591A\u8BF4\u51E0\u53E5" aria-hidden="true">#</a></h2><p>\u5173\u4E8E npm script \u7684\u8DE8\u5E73\u53F0\u517C\u5BB9\uFF0C\u8FD8\u6709\u51E0\u70B9\u9700\u8981\u5927\u5BB6\u6CE8\u610F\uFF1A</p><ul><li>\u6240\u6709\u4F7F\u7528\u5F15\u53F7\u7684\u5730\u65B9\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0C\u5E76\u4E14\u52A0\u4E0A\u8F6C\u4E49\uFF1B</li><li>\u6CA1\u505A\u7279\u6B8A\u5904\u7406\u7684\u547D\u4EE4\u6BD4\u5982 eslint\u3001stylelint\u3001mocha\u3001opn \u7B49\u5DE5\u5177\u672C\u8EAB\u90FD\u662F\u8DE8\u5E73\u53F0\u517C\u5BB9\u7684\uFF1B</li><li>\u8FD8\u662F\u5F3A\u70C8\u5EFA\u8BAE\u6709\u80FD\u529B\u7684\u540C\u5B66\u80FD\u4F7F\u7528 Linux \u505A\u5F00\u53D1\uFF0C\u53EA\u8981\u4F60\u5165\u95E8\u5E76\u4E14\u719F\u7EC3\u4E86\uFF0C\u6548\u7387\u63D0\u5347\u4F1A\u60CA\u4EBA\uFF1B</li><li>\u77ED\u65F6\u95F4\u5185\u7EE7\u7EED\u62E5\u62B1 Windows \u7684\u540C\u5B66\uFF0C\u53EF\u4EE5\u8003\u8651\u770B\u770B Windows 10 \u91CC\u9762\u5F15\u5165\u7684 <a href="https://msdn.microsoft.com/en-us/commandline/wsl/about" target="_blank" rel="noreferrer">Subsystem</a>\uFF0C\u8BA9\u4F60\u4E0D\u7528\u865A\u62DF\u673A\u5373\u53EF\u5728 Windows \u4E0B\u4F7F\u7528\u5927\u591A\u6570 Linux \u547D\u4EE4\u3002</li></ul><blockquote><p><strong>TIP#14</strong>\uFF1A\u5982\u679C\u4F60\u5728\u7F16\u5199 npm script \u8FC7\u7A0B\u4E2D\u6709\u66F4\u591A\u7684\u8DE8\u5E73\u53F0\u517C\u5BB9\u9700\u6C42\uFF0C\u57FA\u672C\u601D\u8DEF\u662F\u53BB <a href="https://www.npmjs.com/search?q=cross%20platform" target="_blank" rel="noreferrer">npmjs.com</a> \u4E0A\u627E\u5BF9\u5E94\u7684\u5305\uFF0C\u5173\u952E\u8BCD\u81EA\u7136\u5C11\u4E0D\u4E86 <code>cross platform</code>\uFF0C\u4F60\u9047\u5230\u7684\u95EE\u9898\uFF0C\u80AF\u5B9A\u5F88\u591A\u5176\u4ED6\u4EBA\u9047\u5230\u8FC7\uFF0C\u76F8\u4FE1\u6211\uFF0C\u4F60\u5E76\u4E0D\u5B64\u72EC\uFF01</p></blockquote><hr><blockquote><p>\u672C\u8282\u7528\u5230\u7684\u4EE3\u7801\u89C1 <a href="https://github.com/wangshijun/automated-workflow-with-npm-script/tree/06-add-cross-platform-support" target="_blank" rel="noreferrer">GitHub</a>\uFF0C\u60F3\u8FB9\u770B\u8FB9\u52A8\u624B\u7EC3\u4E60\u7684\u540C\u5B66\u53EF\u4EE5\u62C9\u4E0B\u6765\u81EA\u5DF1\u6539\uFF0C\u6CE8\u610F\u5207\u6362\u5230\u6B63\u786E\u7684\u5206\u652F <code>06-add-cross-platform-support</code>\u3002</p></blockquote><hr>`,41),r=[p];function c(t,l,i,u,v,d){return n(),a("div",null,r)}const h=s(o,[["render",c]]);export{_ as __pageData,h as default};
