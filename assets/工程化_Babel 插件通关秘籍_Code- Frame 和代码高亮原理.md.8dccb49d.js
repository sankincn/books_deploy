import{_ as s,c as a,o as p,d as n}from"./app.c4f45da1.js";const i=JSON.parse('{"title":"Code- Frame \u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u6253\u5370 code frame","slug":"\u5982\u4F55\u6253\u5370-code-frame","link":"#\u5982\u4F55\u6253\u5370-code-frame","children":[]},{"level":2,"title":"\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE","slug":"\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE","link":"#\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE","children":[]},{"level":2,"title":"\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272","slug":"\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272","link":"#\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Code- Frame \u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406.md"}'),l={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Code- Frame \u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406.md"},o=n(`<h1 id="code-frame-\u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406" tabindex="-1">Code- Frame \u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406 <a class="header-anchor" href="#code-frame-\u548C\u4EE3\u7801\u9AD8\u4EAE\u539F\u7406" aria-hidden="true">#</a></h1><hr><p>\u5F53\u4EE3\u7801\u8FD0\u884C\u62A5\u9519\u65F6\uFF0C\u6211\u4EEC\u4F1A\u6253\u5370\u9519\u8BEF\uFF0C\u9519\u8BEF\u4E2D\u6709\u5806\u6808\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5B9A\u4F4D\u5230\u5BF9\u5E94\u7684\u4EE3\u7801\u4F4D\u7F6E\u3002\u4F46\u6709\u7684\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u80FD\u591F\u66F4\u76F4\u63A5\u51C6\u786E\u7684\u6253\u5370\u62A5\u9519\u4F4D\u7F6E\u7684\u4EE3\u7801\u3002\u6BD4\u5982\u8FD9\u6837\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d3c6b350af041d680b429a5f0cc55f2~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8FD9\u4E2A\u53EF\u4EE5\u4F7F\u7528 @babel/code-frames \u6765\u505A\u5230\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> codeFrameColumns </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/code-frame</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">codeFrameColumns</span><span style="color:#A6ACCD;">(code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">column</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">column</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">highlightCode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8FD9\u91CC\u51FA\u9519\u4E86</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>path.buildCodeFrameError(path, options)</code> \u6765\u521B\u5EFA\u8FD9\u79CD\u9519\u8BEF\u4FE1\u606F\u3002</p><p>\u90A3\u4E48\u5B83\u662F\u600E\u4E48\u505A\u5230\u7684\u6253\u5370\u51FA\u4E0A\u9762\u7684 code frame \u7684\u4EE3\u7801\u683C\u5F0F\u7684\u5462\uFF1F</p><p>\u8FD9\u8282\u6211\u4EEC\u5C31\u6765\u63A2\u7A76\u4E0B\u539F\u7406\u3002</p><p>\u4E3B\u8981\u4F1A\u89E3\u7B54\u4E09\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u5982\u4F55\u6253\u5370\u51FA\u6807\u8BB0\u76F8\u5E94\u4F4D\u7F6E\u4EE3\u7801\u7684 code frame\uFF08\u5C31\u662F\u4E0A\u56FE\u7684\u6253\u5370\u683C\u5F0F\uFF09</li><li>\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE</li><li>\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272</li></ul><h2 id="\u5982\u4F55\u6253\u5370-code-frame" tabindex="-1">\u5982\u4F55\u6253\u5370 code frame <a class="header-anchor" href="#\u5982\u4F55\u6253\u5370-code-frame" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u4E0D\u7BA1\u9AD8\u4EAE\uFF0C\u5B9E\u73B0\u8FD9\u6837\u7684\u683C\u5F0F\u7684\u6253\u5370\uFF1A</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8ac279789904a669148430c7089f184~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u62FC\u63A5\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\u3002</p><p>\u4F20\u5165\u4E86\u6E90\u4EE3\u7801\u3001\u6807\u8BB0\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u884C\u5217\u53F7\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u80FD\u591F\u8BA1\u7B97\u51FA\u663E\u793A\u6807\u8BB0\uFF08marker <code>\u201C&gt;\u201D</code>\uFF09\u7684\u884C\u662F\u54EA\u4E9B\uFF0C\u4EE5\u53CA\u8FD9\u4E9B\u884C\u7684\u54EA\u4E9B\u5217\uFF0C\u7136\u540E\u4F9D\u6B21\u5BF9\u6BCF\u4E00\u884C\u4EE3\u7801\u505A\u5904\u7406\uFF0C\u5982\u679C\u672C\u884C\u6CA1\u6709\u6807\u8BB0\u5219\u4FDD\u6301\u539F\u6837\uFF0C\u5982\u679C\u672C\u884C\u6709\u6807\u8BB0\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u5728\u5F00\u59CB\u6253\u5370\u4E00\u4E2A marker <code>\u201C&gt;\u201D</code>\uFF0C\u5E76\u4E14\u5728\u4E0B\u9762\u6253\u5370\u4E00\u884C marker <code>&quot;^&quot;</code>\uFF0C\u6700\u540E\u4E00\u4E2A\u6807\u8BB0\u884C\u8FD8\u8981\u6253\u5370\u9519\u8BEF\u4FE1\u606F\u3002</p><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0B @babel/code-frame \u7684\u5B9E\u73B0\uFF1A</p><p>\u9996\u5148\uFF0C\u5206\u5272\u5B57\u7B26\u4E32\u6210\u6BCF\u4E00\u884C\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u6839\u636E\u4F20\u5165\u7684\u4F4D\u7F6E\u8BA1\u7B97\u51FA marker\uFF08&gt;\uFF09 \u6240\u5728\u7684\u4F4D\u7F6E\u3002</p><p>\u6BD4\u5982\u56FE\u4E2D\u7B2C\u4E8C\u884C\u7684\u7B2C 1 \u5230 12 \u5217\uFF0C\u7B2C\u4E09\u884C\u7684 0 \u5230 5 \u5217\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dda49d8bf08549458b2266a912b37042~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u7136\u540E\u5BF9\u6BCF\u4E00\u884C\u505A\u5904\u7406\uFF0C\u5982\u679C\u672C\u884C\u6709\u6807\u8BB0\uFF0C\u5219\u62FC\u6210 marker + gutter\uFF08\u884C\u53F7\uFF09 + \u4EE3\u7801\u7684\u683C\u5F0F\uFF0C\u4E0B\u9762\u518D\u6253\u5370\u4E00\u884C marker\uFF0C\u6700\u540E\u7684 marker \u884C\u6253\u5370 message\u3002\u6CA1\u6709\u6807\u8BB0\u4E0D\u5904\u7406\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc7dcce653e5479382e6f697008c96aa~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u8FD9\u6837\u6700\u7EC8\u62FC\u51FA\u7684\u5C31\u662F\u8FD9\u6837\u7684 code frame\uFF1A</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8ac279789904a669148430c7089f184~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6211\u4EEC\u5B9E\u73B0\u4E86 code frame \u7684\u62FC\u63A5\uFF0C\u6682\u65F6\u5FFD\u7565\u4E86\u9AD8\u4EAE\uFF0C\u90A3\u4E48\u600E\u4E48\u505A\u8BED\u6CD5\u9AD8\u4EAE\u5462\uFF1F</p><h2 id="\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE" tabindex="-1">\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE <a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u8BCD\u6CD5\u5206\u6790\u5C31\u8DB3\u591F\u4E86\uFF0Cbabel \u4E5F\u662F\u8FD9\u4E48\u505A\u7684\uFF0C@babel/highlight \u5305\u91CC\u9762\u5B8C\u6210\u4E86\u9AD8\u4EAE\u4EE3\u7801\u7684\u903B\u8F91\u3002</p><p>\u5148\u770B\u6548\u679C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a + b);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684\u6E90\u7801\u88AB\u5206\u6210\u4E86 token \u6570\u7EC4\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keyword</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">const</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keyword</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">const</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">        [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">      [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">console</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bracket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">     [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bracket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">     [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">punctuator</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">whitespace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>token \u600E\u4E48\u5206\u7684\u5462\uFF1F</p><p>\u4E00\u822C\u6765\u8BF4\u8BCD\u6CD5\u5206\u6790\u5C31\u662F\u6709\u9650\u72B6\u6001\u81EA\u52A8\u673A\uFF08DFA\uFF09\uFF0C\u4F46\u662F\u8FD9\u91CC\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u662F\u901A\u8FC7\u6B63\u5219\u5339\u914D\u7684\uFF1A</p><p>js-tokens \u8FD9\u4E2A\u5305\u66B4\u9732\u51FA\u6765\u4E00\u4E2A\u6B63\u5219\uFF0C\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B63\u5219\u662F\u7528\u6765\u8BC6\u522B token \u7684\uFF0C\u5176\u4E2D\u6709\u5F88\u591A\u4E2A\u5206\u7EC4\uFF0C\u800C\u51FD\u6570\u91CC\u9762\u662F\u5BF9\u4E0D\u540C\u7684\u5206\u7EC4\u4E0B\u6807\u8FD4\u56DE\u4E86\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u8FD9\u6837\u5C31\u80FD\u5B8C\u6210 token \u7684\u8BC6\u522B\u548C\u5206\u7C7B\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/807b2110f764402fae59a952053acb26~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u5728 @babel/highlight \u5305\u91CC\u57FA\u4E8E\u8FD9\u4E2A\u6B63\u5219\u6765\u5339\u914D token\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d30814b33d804996836b3eece6a67154~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u6709\u4E86\u5206\u7C7B\u4E4B\u540E\uFF0C\u4E0D\u540C token \u663E\u793A\u4E0D\u540C\u989C\u8272\uFF0C\u5EFA\u7ACB\u4E2A map \u5C31\u884C\u4E86\u3002</p><p>@babel/highlight \u91CC\u7684\u5B9E\u73B0\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d6accf8c55c426dbf8b7d44df45f1e2~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6211\u4EEC\u77E5\u9053\u4E86\u600E\u4E48\u505A\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u4F7F\u7528 chalk \u7684 api \u5C31\u53EF\u4EE5\u6253\u5370\u989C\u8272\uFF0C\u90A3\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272\u7684\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F</p><h2 id="\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272" tabindex="-1">\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272 <a class="header-anchor" href="#\u5982\u4F55\u5728\u63A7\u5236\u53F0\u6253\u5370\u989C\u8272" aria-hidden="true">#</a></h2><p>\u63A7\u5236\u53F0\u6253\u5370\u7684\u662F <a href="https://tool.oschina.net/commons?type=4" target="_blank" rel="noreferrer">ASCII \u7801</a>\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u7F16\u7801\u90FD\u5BF9\u5E94\u53EF\u89C1\u5B57\u7B26\uFF0CASCII \u7801\u6709\u4E00\u90E8\u5206\u5B57\u7B26\u662F\u5BF9\u5E94\u63A7\u5236\u5B57\u7B26\u7684\uFF0C\u6BD4\u5982 27 \u662F ESC\uFF0C\u5C31\u662F\u6211\u4EEC\u952E\u76D8\u4E0A\u7684 ESC \u952E\uFF0C\u662F escape \u7684\u7F29\u5199\uFF0C\u6309\u4E0B\u5B83\u53EF\u4EE5\u5B8C\u6210\u4E00\u4E9B\u63A7\u5236\u529F\u80FD\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6253\u5370 ESC \u7684 ASCII \u7801\u6765\u8FDB\u5165\u63A7\u5236\u6253\u5370\u989C\u8272\u7684\u72B6\u6001\u3002</p><p>\u683C\u5F0F\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e7d7a92f6c0459f83bcb9a9ce779a81~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6253\u5370\u4E00\u4E2A <code>ESC</code> \u7684 ASCII \u7801\uFF0C\u4E4B\u540E\u662F <code>[</code> \u4EE3\u8868\u5F00\u59CB\uFF0C<code>m</code> \u4EE3\u8868\u7ED3\u675F\uFF0C\u4E2D\u95F4\u662F\u7528 <code>;</code> \u5206\u9694\u7684 n \u4E2A\u63A7\u5236\u5B57\u7B26\uFF0C\u53EF\u4EE5\u63A7\u5236\u5F88\u591A\u6837\u5F0F\uFF0C\u6BD4\u5982\u524D\u666F\u8272\u3001\u80CC\u666F\u8272\u3001\u52A0\u7C97\u3001\u4E0B\u5212\u7EBF\u7B49\u7B49\u3002</p><p>ESC \u7684 ASCII \u7801\u662F 27\uFF0C\u6709\u597D\u51E0\u79CD\u5199\u6CD5\uFF1A\u4E00\u79CD\u662F\u5B57\u7B26\u8868\u793A\u7684 <code>\\e</code> \uFF0C\u4E00\u79CD\u662F 16 \u8FDB\u5236\u7684 <code>\\0x1b</code>\uFF0827 \u5BF9\u5E94\u7684 16\u8FDB\u5236\uFF09\uFF0C\u4E00\u79CD\u662F 8 \u8FDB\u5236\u7684 <code>\\033</code>\uFF0C\u8FD9\u4E09\u79CD\u90FD\u8868\u793A ESC\u3002</p><p>\u6211\u4EEC\u6765\u8BD5\u9A8C\u4E00\u4E0B\uFF1A 1 \u8868\u793A\u52A0\u7C97\u300136 \u8868\u793A\u524D\u666F\u8272\u4E3A\u9752\u8272\u30014 \u8868\u793A\u4E0B\u5212\u7EBF\uFF0C\u4E0B\u9762\u4E09\u79CD\u5199\u6CD5\u7B49\u4EF7\uFF1A</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">\\e</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">36</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">4m</span></span>
<span class="line"><span style="color:#A6ACCD;">\\033</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">36</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">4m</span></span>
<span class="line"><span style="color:#A6ACCD;">\\0x1b</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">36</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">4m</span></span>
<span class="line"></span></code></pre></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eca9c62870414489890c9570b889636b~tplv-k3u1fbpfcp-watermark.image" alt=""> \u90FD\u6253\u5370\u4E86\u6B63\u786E\u7684\u6837\u5F0F\uFF01</p><p>\u5F53\u7136\uFF0C\u52A0\u4E86\u6837\u5F0F\u8FD8\u8981\u53BB\u6389\uFF0C\u53EF\u4EE5\u52A0\u4E00\u4E2A <code>\\e[0m</code> \u5C31\u53EF\u4EE5\u4E86\uFF08<code>\\033[0m</code>,<code>\\0x1b[0m</code> \u7B49\u4EF7\uFF09\u3002</p><p>chalk\uFF08nodejs \u7684\u5728\u7EC8\u7AEF\u6253\u5370\u989C\u8272\u7684\u5E93\uFF09\u7684\u4E0D\u540C\u65B9\u6CD5\u5C31\u662F\u5C01\u88C5\u4E86\u8FD9\u4E9B ASCII \u7801\u7684\u989C\u8272\u63A7\u5236\u5B57\u7B26\u3002</p><p>\u4E0A\u9762\u6BCF\u884C\u4EE3\u7801\u88AB\u9AD8\u4EAE\u8FC7\u4EE5\u540E\u7684\u4EE3\u7801\u662F\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d91383b4f5854e178c16be243a09a851~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u8FD9\u6837\u4E5F\u5C31\u5B9E\u73B0\u4E86\u4E0D\u540C\u989C\u8272\u7684\u6253\u5370\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u80FD\u5B9E\u73B0\u5F00\u5934\u7684\u6548\u679C\u4E86\uFF1A\u652F\u6301 code frame \u7684\u6253\u5370\uFF0C\u652F\u6301\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u80FD\u591F\u6253\u5370\u989C\u8272</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d3c6b350af041d680b429a5f0cc55f2~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8FD9\u8282\u6211\u4EEC\u63A2\u7A76\u4E86\u8FD9\u79CD\u6548\u679C\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5148\u662F code frame \u7684\u5B57\u7B26\u4E32\u662F\u600E\u4E48\u62FC\u63A5\u7684\uFF0C\u7136\u540E\u6BCF\u4E00\u884C\u7684\u4EE3\u7801\u662F\u600E\u4E48\u505A\u9AD8\u4EAE\u7684\uFF0C\u4E4B\u540E\u662F\u9AD8\u4EAE\u5177\u4F53\u662F\u600E\u4E48\u6253\u5370\u989C\u8272\u7684\u3002</p><p>@babel/code-frame \u5305\u662F babel \u7528\u6765\u6253\u5370\u9519\u8BEF\u4FE1\u606F\u7684\uFF0C\u522B\u7684\u5DE5\u5177\uFF08\u6BD4\u5982 eslint\u3001tsc\uFF09\u4E5F\u4F1A\u6253\u5370 code frame \u7684\u683C\u5F0F\uFF0C\u539F\u7406\u4E00\u6837\u3002</p>`,60),e=[o];function c(t,D,r,F,y,C){return p(),a("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
