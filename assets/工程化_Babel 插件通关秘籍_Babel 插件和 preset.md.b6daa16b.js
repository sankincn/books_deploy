import{_ as s,c as a,o as n,d as p}from"./app.e5528619.js";const A=JSON.parse('{"title":"Babel \u63D2\u4EF6\u548C preset","description":"","frontmatter":{},"headers":[{"level":2,"title":"plugin \u7684\u4F7F\u7528","slug":"plugin-\u7684\u4F7F\u7528","link":"#plugin-\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"plugin\u7684\u683C\u5F0F","slug":"plugin\u7684\u683C\u5F0F","link":"#plugin\u7684\u683C\u5F0F","children":[{"level":3,"title":"\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570","slug":"\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570","link":"#\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570","children":[]},{"level":3,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61","link":"#\u5BF9\u8C61","children":[]}]},{"level":2,"title":"preset","slug":"preset","link":"#preset","children":[]},{"level":2,"title":"ConfigItem","slug":"configitem","link":"#configitem","children":[]},{"level":2,"title":"\u987A\u5E8F","slug":"\u987A\u5E8F","link":"#\u987A\u5E8F","children":[]},{"level":2,"title":"\u540D\u5B57","slug":"\u540D\u5B57","link":"#\u540D\u5B57","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Babel \u63D2\u4EF6\u548C preset.md"}'),l={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Babel \u63D2\u4EF6\u548C preset.md"},e=p(`<h1 id="babel-\u63D2\u4EF6\u548C-preset" tabindex="-1">Babel \u63D2\u4EF6\u548C preset <a class="header-anchor" href="#babel-\u63D2\u4EF6\u548C-preset" aria-hidden="true">#</a></h1><hr><p>\u524D\u9762\u7684\u7AE0\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u7684\u7F16\u8BD1\u6D41\u7A0B\uFF0C\u4E5F\u6DF1\u5165\u4E86\u4E0B\u539F\u7406\uFF0C\u77E5\u9053\u4E86\u600E\u4E48\u7528 babel \u7684 api \u6765\u5B8C\u6210\u4E00\u4E9B\u4EE3\u7801\u8F6C\u6362\u529F\u80FD\u3002\u4F46\u5E73\u65F6\u6211\u4EEC\u5F88\u5C11\u5355\u72EC\u4F7F\u7528 babel \u7684 api\uFF0C\u66F4\u591A\u662F\u5C01\u88C5\u6210\u63D2\u4EF6\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u4E0A\u4F20\u5230 npm \u4ED3\u5E93\u6765\u590D\u7528\u3002</p><p>\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E00\u4E0B babel \u63D2\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA preset\u3002</p><h2 id="plugin-\u7684\u4F7F\u7528" tabindex="-1">plugin \u7684\u4F7F\u7528 <a class="header-anchor" href="#plugin-\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B plugin \u7684\u4F7F\u7528\uFF0Cbabel \u7684 plugin \u662F\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u9762\u901A\u8FC7 plugins \u9009\u9879\u914D\u7F6E\uFF0C\u503C\u4E3A\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pluginA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pluginB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pluginC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">/* options */</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u9700\u8981\u4F20\u53C2\u5C31\u7528\u6570\u7EC4\u683C\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A\u53C2\u6570\u3002</p><h2 id="plugin\u7684\u683C\u5F0F" tabindex="-1">plugin\u7684\u683C\u5F0F <a class="header-anchor" href="#plugin\u7684\u683C\u5F0F" aria-hidden="true">#</a></h2><p>babel plugin \u6709\u4E24\u79CD\u683C\u5F0F\uFF1A</p><h3 id="\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570" tabindex="-1">\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570 <a class="header-anchor" href="#\u8FD4\u56DE\u5BF9\u8C61\u7684\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u7B2C\u4E00\u79CD\u662F\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u683C\u5F0F\uFF0C\u5BF9\u8C61\u91CC\u6709 visitor\u3001pre\u3001post\u3001inherits\u3001manipulateOptions \u7B49\u5C5E\u6027\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">dirname</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    inherits</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentPlugin</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    manipulateOptions</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parserOptions</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    pre</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    visitor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      StringLiteral</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    post</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>\u9996\u5148\uFF0C\u63D2\u4EF6\u51FD\u6570\u6709 3 \u4E2A\u53C2\u6570\uFF0Capi\u3001options\u3001dirname\u3002</p><ul><li>api \u91CC\u5305\u542B\u4E86\u5404\u79CD babel \u7684 api\uFF0C\u6BD4\u5982 types\u3001template \u7B49\uFF0C\u8FD9\u4E9B\u5305\u5C31\u4E0D\u7528\u5728\u63D2\u4EF6\u91CC\u5355\u72EC\u5355\u72EC\u5F15\u5165\u4E86\uFF0C\u76F4\u63A5\u53D6\u6765\u7528\u5C31\u884C\u3002</li><li>options \u5C31\u662F\u5916\u9762\u4F20\u5165\u7684\u53C2\u6570</li><li>dirname \u662F\u76EE\u5F55\u540D\uFF08\u4E0D\u5E38\u7528\uFF09</li></ul><p>\u8FD4\u56DE\u7684\u5BF9\u8C61\u6709 inherits\u3001manipulateOptions\u3001pre\u3001visitor\u3001post \u7B49\u5C5E\u6027\u3002</p><ul><li>inherits \u6307\u5B9A\u7EE7\u627F\u67D0\u4E2A\u63D2\u4EF6\uFF0C\u548C\u5F53\u524D\u63D2\u4EF6\u7684 options \u5408\u5E76\uFF0C\u901A\u8FC7 Object.assign \u7684\u65B9\u5F0F\u3002</li><li>visitor \u6307\u5B9A traverse \u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002</li><li>pre \u548C post \u5206\u522B\u5728\u904D\u5386\u524D\u540E\u8C03\u7528\uFF0C\u53EF\u4EE5\u505A\u4E00\u4E9B\u63D2\u4EF6\u8C03\u7528\u524D\u540E\u7684\u903B\u8F91\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5F80 file\uFF08\u8868\u793A\u6587\u4EF6\u7684\u5BF9\u8C61\uFF0C\u5728\u63D2\u4EF6\u91CC\u9762\u901A\u8FC7 state.file \u62FF\u5230\uFF09\u4E2D\u653E\u4E00\u4E9B\u4E1C\u897F\uFF0C\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u53D6\u51FA\u6765\u3002</li><li>manipulateOptions \u7528\u4E8E\u4FEE\u6539 options\uFF0C\u662F\u5728\u63D2\u4EF6\u91CC\u9762\u4FEE\u6539\u914D\u7F6E\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982 syntaxt plugin\u4E00\u822C\u90FD\u4F1A\u4FEE\u6539 parser options\uFF1A</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2512f37b312a4c1a8ddb4c59c4a8f09f~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u63D2\u4EF6\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u901A\u8FC7 api \u62FF\u5230 types\u3001template \u7B49\uFF0C\u901A\u8FC7 state.opts \u62FF\u5230\u53C2\u6570\uFF0C\u7136\u540E\u901A\u8FC7 path \u6765\u4FEE\u6539 AST\u3002\u53EF\u4EE5\u901A\u8FC7 state \u653E\u4E00\u4E9B\u904D\u5386\u8FC7\u7A0B\u4E2D\u5171\u4EAB\u7684\u6570\u636E\uFF0C\u901A\u8FC7 file \u653E\u4E00\u4E9B\u6574\u4E2A\u63D2\u4EF6\u90FD\u80FD\u8BBF\u95EE\u5230\u7684\u4E00\u4E9B\u6570\u636E\uFF0C\u9664\u4E86\u8FD9\u4E24\u79CD\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 this \u6765\u4F20\u9012\u672C\u5BF9\u8C61\u5171\u4EAB\u7684\u6570\u636E\u3002</p><h3 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>\u63D2\u4EF6\u7684\u7B2C\u4E8C\u79CD\u683C\u5F0F\u5C31\u662F\u76F4\u63A5\u5199\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u7528\u51FD\u6570\u5305\u88F9\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u7528\u4E8E\u4E0D\u9700\u8981\u5904\u7406\u53C2\u6570\u7684\u60C5\u51B5\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">visitor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">StringLiteral</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">post</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="preset" tabindex="-1">preset <a class="header-anchor" href="#preset" aria-hidden="true">#</a></h2><p>plugin \u662F\u5355\u4E2A\u8F6C\u6362\u529F\u80FD\u7684\u5B9E\u73B0\uFF0C\u5F53 plugin \u6BD4\u8F83\u591A\u6216\u8005 plugin \u7684 options \u6BD4\u8F83\u591A\u7684\u65F6\u5019\u5C31\u4F1A\u5BFC\u81F4\u4F7F\u7528\u6210\u672C\u5347\u9AD8\u3002\u8FD9\u65F6\u5019\u53EF\u4EE5\u5C01\u88C5\u6210\u4E00\u4E2A preset\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 preset \u6765\u6279\u91CF\u5F15\u5165 plugin \u5E76\u8FDB\u884C\u4E00\u4E9B\u914D\u7F6E\u3002preset \u5C31\u662F\u5BF9 babel \u914D\u7F6E\u7684\u4E00\u5C42\u5C01\u88C5\u3002</p><p>\u6BD4\u5982\u5982\u679C\u4F7F\u7528 plugin \u662F\u8FD9\u6837\u7684\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u4E86\u89E3\u6BCF\u4E2A\u63D2\u4EF6\u662F\u5E72\u4EC0\u4E48\u7684\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f54caa8803e484c92d2c2809ce05ce5~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u800C\u6709\u4E86 preset \u4E4B\u540E\u5C31\u4E0D\u518D\u9700\u8981\u77E5\u9053\u7528\u5230\u4E86\u4EC0\u4E48\u63D2\u4EF6\uFF0C\u53EA\u9700\u8981\u9009\u62E9\u5408\u9002\u7684 preset\uFF0C\u7136\u540E\u914D\u7F6E\u4E00\u4E0B\uFF0C\u5C31\u4F1A\u5F15\u5165\u9700\u8981\u7684\u63D2\u4EF6\uFF0C\u8FD9\u5C31\u662F preset \u7684\u610F\u4E49\u3002\u6211\u4EEC\u5B66 babel \u7684\u5185\u7F6E\u529F\u80FD\uFF0C\u4E3B\u8981\u5C31\u662F\u5B66 preset \u7684\u914D\u7F6E\uFF0C\u6BD4\u5982 preset-env\u3001preset-typescript \u7B49\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/112d501d641b4e509bd37d821489d72c~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>preset \u683C\u5F0F\u548C plugin \u4E00\u6837\uFF0C\u4E5F\u662F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u4E5F\u662F\u4E00\u6837\u7684 api \u548C options\uFF0C\u533A\u522B\u53EA\u662F preset \u8FD4\u56DE\u7684\u662F\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5305\u542B plugins\u3001presets \u7B49\u914D\u7F6E\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      plugins</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pluginA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      presets</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">presetsB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pluginA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">presetsB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bbb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="configitem" tabindex="-1">ConfigItem <a class="header-anchor" href="#configitem" aria-hidden="true">#</a></h2><p>@babel/core \u7684\u5305\u63D0\u4F9B\u4E86 createConfigItem \u7684 api\uFF0C\u7528\u4E8E\u521B\u5EFA\u914D\u7F6E\u9879\u3002\u6211\u4EEC\u4E4B\u524D\u90FD\u662F\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u7684\uFF0C\u5F53\u9700\u8981\u628A\u914D\u7F6E\u62BD\u79BB\u51FA\u53BB\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 createConfigItem\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const pluginA = createConfigItem(&#39;pluginA);</span></span>
<span class="line"><span style="color:#A6ACCD;">const presetB = createConfigItem(&#39;presetsB&#39;, { options: &#39;bbb&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      plugins: [ pluginA ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      presets: [ presetB ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u987A\u5E8F" tabindex="-1">\u987A\u5E8F <a class="header-anchor" href="#\u987A\u5E8F" aria-hidden="true">#</a></h2><p>preset \u548C plugin \u4ECE\u5F62\u5F0F\u4E0A\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u5E94\u7528\u987A\u5E8F\u4E0D\u540C\u3002</p><p>babel \u4F1A\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u5904\u7406\u63D2\u4EF6\u548C preset\uFF1A</p><ol><li>\u5148\u5E94\u7528 plugin\uFF0C\u518D\u5E94\u7528 preset</li><li>plugin \u4ECE\u524D\u5230\u540E\uFF0Cpreset \u4ECE\u540E\u5230\u524D</li></ol><p>\u8FD9\u4E2A\u987A\u5E8F\u662F babel \u7684\u89C4\u5B9A\u3002</p><h2 id="\u540D\u5B57" tabindex="-1">\u540D\u5B57 <a class="header-anchor" href="#\u540D\u5B57" aria-hidden="true">#</a></h2><p>babel \u5BF9\u63D2\u4EF6\u540D\u5B57\u7684\u683C\u5F0F\u6709\u4E00\u5B9A\u7684\u8981\u6C42\uFF0C\u6BD4\u5982\u6700\u597D\u5305\u542B babel-plugin\uFF0C\u5982\u679C\u4E0D\u5305\u542B\u7684\u8BDD\u4E5F\u4F1A\u81EA\u52A8\u8865\u5145\u3002</p><p>babel plugin \u540D\u5B57\u7684\u8865\u5168\u6709\u8FD9\u4E9B\u89C4\u5219\uFF1A</p><ul><li>\u5982\u679C\u662F ./ \u5F00\u5934\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 ./dir/plugin.js</li><li>\u5982\u679C\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 /dir/plugin.js</li><li>\u5982\u679C\u662F\u5355\u72EC\u7684\u540D\u5B57 aa\uFF0C\u4F1A\u6DFB\u52A0\u4E3A babel-plugin-aa\uFF0C\u6240\u4EE5\u63D2\u4EF6\u540D\u5B57\u53EF\u4EE5\u7B80\u5199\u4E3A aa</li><li>\u5982\u679C\u662F\u5355\u72EC\u7684\u540D\u5B57 aa\uFF0C\u4F46\u4EE5 module \u5F00\u5934\uFF0C\u5219\u4E0D\u6DFB\u52A0 babel plugin\uFF0C\u6BD4\u5982 module:aa</li><li>\u5982\u679C @scope \u5F00\u5934\uFF0C\u4E0D\u5305\u542B plugin\uFF0C\u5219\u4F1A\u6DFB\u52A0 babel-plugin\uFF0C\u6BD4\u5982 @scope/mod \u4F1A\u53D8\u4E3A @scope/babel-plugin-mod</li><li>babel \u81EA\u5DF1\u7684 @babel \u5F00\u5934\u7684\u5305\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0 plugin\uFF0C\u6BD4\u5982 @babel/aa \u4F1A\u53D8\u6210 @babel/plugin-aa</li></ul><p>\uFF08preset\u4E5F\u662F\u4E00\u6837\uFF09</p><p>\u89C4\u5219\u6BD4\u8F83\u591A\uFF0C\u603B\u7ED3\u4E00\u4E0B\u5C31\u662F babel \u5E0C\u671B\u63D2\u4EF6\u540D\u5B57\u4E2D\u80FD\u5305\u542B babel plugin\uFF0C\u8FD9\u6837\u5199 plugin \u7684\u540D\u5B57\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u7B80\u5316\uFF0C\u7136\u540E babel \u81EA\u52A8\u53BB\u8865\u5145\u3002\u6240\u4EE5\u6211\u4EEC\u5199\u7684 babel \u63D2\u4EF6\u6700\u597D\u662F babel-plugin-xx \u548C @scope/babel-plugin-xx \u8FD9\u4E24\u79CD\uFF0C\u5C31\u53EF\u4EE5\u7B80\u5355\u5199\u4E3A xx \u548C @scope/xx\u3002</p><p>\u5199 babel \u5185\u7F6E\u7684 plugin \u548C preset \u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u7B80\u5316\uFF0C\u6BD4\u5982 @babel/preset-env \u53EF\u4EE5\u76F4\u63A5\u5199@babel/env\uFF0Cbabel \u4F1A\u81EA\u52A8\u8865\u5145\u4E3A @babel/preset-env\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 babel \u7684 plugin \u548C preset \u7684\u683C\u5F0F\uFF0C\u4E24\u8005\u57FA\u672C\u4E00\u6837\uFF0C\u90FD\u662F\u53EF\u4EE5\u5BF9\u8C61\u548C\u51FD\u6570\u4E24\u79CD\u5F62\u5F0F\u3002</p><p>\u51FD\u6570\u7684\u5F62\u5F0F\u63A5\u6536 api \u548C options \u53C2\u6570\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 @babel/core \u5305\u91CC\u7684 createConfigItem \u6765\u521B\u5EFA\u914D\u7F6E\u9879\uFF0C\u65B9\u4FBF\u62BD\u79BB\u51FA\u53BB\u3002</p><p>plugin \u548C preset \u662F\u6709\u987A\u5E8F\u7684\uFF0C\u5148 plugin \u518D preset\uFF0Cplugin \u4ECE\u5DE6\u5230\u53F3\uFF0Cpreset \u4ECE\u53F3\u5230\u5DE6\u3002</p><p>plugin \u548C preset \u8FD8\u6709\u540D\u5B57\u7684\u89C4\u8303\uFF0C\u7B26\u5408\u89C4\u8303\u7684\u540D\u5B57\u53EF\u4EE5\u7B80\u5199\uFF0C\u8FD9\u6837 babel \u4F1A\u81EA\u52A8\u8865\u5145\u4E0A babel plugin \u6216 babel preset\u3002</p><p>\u8FD9\u4E00\u8282\u4E3B\u8981\u5B66\u4E60\u63D2\u4EF6\u7684\u7684\u683C\u5F0F\u548C\u89C4\u5219\uFF0C\u5177\u4F53\u8F6C\u6362\u903B\u8F91\u8FD8\u662F\u4E4B\u524D\u7684\u65B9\u5F0F\uFF0C\u7ED3\u5408\u4E4B\u524D\u5B66\u7684 babel api\uFF0C\u5C31\u53EF\u4EE5\u5F00\u53D1\u63D2\u4EF6\u4E86\u3002</p>`,53),o=[e];function t(c,r,F,D,i,y){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
