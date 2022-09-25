import{_ as s,c as a,o as n,d as p}from"./app.c4f45da1.js";const C=JSON.parse('{"title":"Generator \u548C SourceMap \u7684\u5965\u79D8","description":"","frontmatter":{},"headers":[{"level":2,"title":"generate","slug":"generate","link":"#generate","children":[]},{"level":2,"title":"sourcemap","slug":"sourcemap","link":"#sourcemap","children":[]},{"level":2,"title":"soruce-map","slug":"soruce-map","link":"#soruce-map","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Generator \u548C SourceMap \u7684\u5965\u79D8.md"}'),o={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Generator \u548C SourceMap \u7684\u5965\u79D8.md"},l=p(`<h1 id="generator-\u548C-sourcemap-\u7684\u5965\u79D8" tabindex="-1">Generator \u548C SourceMap \u7684\u5965\u79D8 <a class="header-anchor" href="#generator-\u548C-sourcemap-\u7684\u5965\u79D8" aria-hidden="true">#</a></h1><hr><p>AST \u8F6C\u6362\u5B8C\u4E4B\u540E\u5C31\u5230\u4E86 generate \u9636\u6BB5\uFF0Cgenenrate \u662F\u600E\u4E48\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sourcemap \u7684\u5462\uFF1Fsourcemap \u6709\u5565\u4F5C\u7528\u5462\uFF1F</p><p>\u672C\u8282\u5C31\u6765\u63A2\u7D22\u4E00\u4E0B generate \u7684\u5965\u79D8\u3002</p><h2 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-hidden="true">#</a></h2><p>generate \u662F\u628A AST \u6253\u5370\u6210\u5B57\u7B26\u4E32\uFF0C\u662F\u4E00\u4E2A\u4ECE\u6839\u8282\u70B9\u9012\u5F52\u6253\u5370\u7684\u8FC7\u7A0B\uFF0C\u5BF9\u4E0D\u540C\u7684 AST \u8282\u70B9\u505A\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u628A\u62BD\u8C61\u8BED\u6CD5\u6811\u4E2D\u7701\u7565\u6389\u7684\u4E00\u4E9B\u5206\u9694\u7B26\u91CD\u65B0\u52A0\u56DE\u6765\u3002</p><p>\u6BD4\u5982 while \u8BED\u53E5 WhileStatement \u5C31\u662F\u5148\u6253\u5370 while\uFF0C\u7136\u540E\u6253\u5370\u4E00\u4E2A\u7A7A\u683C\u548C &#39;(&#39;\uFF0C\u7136\u540E\u6253\u5370 node.test \u5C5E\u6027\u7684\u8282\u70B9\uFF0C\u7136\u540E\u6253\u5370 &#39;)&#39;\uFF0C\u4E4B\u540E\u6253\u5370 block \u90E8\u5206</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04d9befc0ad54eb2822d3fb086a50cd7~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6BD4\u5982\u6761\u4EF6\u8868\u8FBE\u5F0F ConditionExpression \u5C31\u662F\u5206\u522B\u6253\u5370 node.test\u3001node.consequent\u3001node.alternate \u5C5E\u6027\uFF0C\u4E2D\u95F4\u63D2\u5165 <code>?</code> <code>:</code> \u548C\u7A7A\u683C\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47676f74a3a944c190fd51ecedbee9d4~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\u9012\u5F52\u6253\u5370\u6574\u4E2A AST\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u76EE\u6807\u4EE3\u7801\u3002</p><p>@babel/generator \u7684 <a href="https://github.com/babel/babel/tree/main/packages/babel-generator/src/generators" target="_blank" rel="noreferrer">src/generators</a> \u4E0B\u5B9A\u4E49\u4E86\u6BCF\u4E00\u79CDAST\u8282\u70B9\u7684\u6253\u5370\u65B9\u5F0F\uFF0C\u611F\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u770B\u4E00\u4E0B\u6BCF\u79CD AST \u90FD\u662F\u600E\u4E48\u6253\u5370\u7684\u3002</p><h2 id="sourcemap" tabindex="-1">sourcemap <a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053\u53EF\u4EE5\u5728 generate \u7684\u65F6\u5019\u9009\u62E9\u662F\u5426\u751F\u6210 sourcemap\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u8981\u751F\u6210 sourcemap \u5462\uFF1F</p><h4 id="sourcemap-\u7684\u4F5C\u7528" tabindex="-1">sourcemap \u7684\u4F5C\u7528 <a class="header-anchor" href="#sourcemap-\u7684\u4F5C\u7528" aria-hidden="true">#</a></h4><p>babel \u5BF9\u6E90\u7801\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u751F\u6210\u7684\u76EE\u6807\u4EE3\u7801\u53EF\u80FD\u6539\u52A8\u5F88\u5927\uFF0C\u5982\u679C\u76F4\u63A5\u8C03\u8BD5\u76EE\u6807\u4EE3\u7801\uFF0C\u90A3\u4E48\u53EF\u80FD\u5F88\u96BE\u5BF9\u5E94\u5230\u6E90\u7801\u91CC\u3002\u6240\u4EE5\u9700\u8981\u4E00\u79CD\u81EA\u52A8\u5173\u8054\u6E90\u7801\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F sourcemap\u3002</p><p>\u6211\u4EEC\u5E73\u65F6\u7528 sourcemap \u4E3B\u8981\u7528\u4E24\u4E2A\u76EE\u7684\uFF1A</p><h5 id="\u8C03\u8BD5\u4EE3\u7801\u65F6\u5B9A\u4F4D\u5230\u6E90\u7801" tabindex="-1">\u8C03\u8BD5\u4EE3\u7801\u65F6\u5B9A\u4F4D\u5230\u6E90\u7801 <a class="header-anchor" href="#\u8C03\u8BD5\u4EE3\u7801\u65F6\u5B9A\u4F4D\u5230\u6E90\u7801" aria-hidden="true">#</a></h5><p>chrome\u3001firefox \u7B49\u6D4F\u89C8\u5668\u652F\u6301\u5728\u6587\u4EF6\u672B\u5C3E\u52A0\u4E0A<a href="https://developer.mozilla.org/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map" target="_blank" rel="noreferrer">\u4E00\u884C\u6CE8\u91CA</a></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u901A\u8FC7 url \u7684\u65B9\u5F0F\u6216\u8005\u8F6C\u6210 base64 \u5185\u8054\u7684\u65B9\u5F0F\u6765\u5173\u8054 sourcemap\u3002\u8C03\u8BD5\u5DE5\u5177\uFF08\u6D4F\u89C8\u5668\u3001vscode \u7B49\u4F1A\u81EA\u52A8\u89E3\u6790 sourcemap\uFF0C\u5173\u8054\u5230\u6E90\u7801\u3002\u8FD9\u6837\u6253\u65AD\u70B9\u3001\u9519\u8BEF\u5806\u6808\u7B49\u90FD\u4F1A\u5BF9\u5E94\u5230\u76F8\u5E94\u6E90\u7801\u3002</p><h5 id="\u7EBF\u4E0A\u62A5\u9519\u5B9A\u4F4D\u5230\u6E90\u7801" tabindex="-1">\u7EBF\u4E0A\u62A5\u9519\u5B9A\u4F4D\u5230\u6E90\u7801 <a class="header-anchor" href="#\u7EBF\u4E0A\u62A5\u9519\u5B9A\u4F4D\u5230\u6E90\u7801" aria-hidden="true">#</a></h5><p>\u5F00\u53D1\u65F6\u4F1A\u4F7F\u7528 sourcemap \u6765\u8C03\u8BD5\uFF0C\u4F46\u662F\u751F\u4EA7\u53EF\u4E0D\u4F1A\uFF0C\u8981\u662F\u628A sourcemap \u4F20\u5230\u751F\u4EA7\u7B97\u662F\u5927\u4E8B\u6545\u4E86\u3002\u4F46\u662F\u7EBF\u4E0A\u62A5\u9519\u7684\u65F6\u5019\u786E\u5B9E\u4E5F\u9700\u8981\u5B9A\u4F4D\u5230\u6E90\u7801\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E00\u822C\u90FD\u662F\u5355\u72EC\u4E0A\u4F20 sourcemap \u5230\u9519\u8BEF\u6536\u96C6\u5E73\u53F0\u3002</p><p>\u6BD4\u5982 sentry \u5C31\u63D0\u4F9B\u4E86\u4E00\u4E2A <a href="https://www.npmjs.com/package/@sentry/webpack-plugin" target="_blank" rel="noreferrer">@sentry/webpack-plugin</a> \u652F\u6301\u5728\u6253\u5305\u5B8C\u6210\u540E\u628A sourcemap \u81EA\u52A8\u4E0A\u4F20\u5230 sentry \u540E\u53F0\uFF0C\u7136\u540E\u628A\u672C\u5730 sourcemap \u5220\u6389\u3002\u8FD8\u63D0\u4F9B\u4E86 <a href="https://www.npmjs.com/package/@sentry/cli" target="_blank" rel="noreferrer">@sentry/cli</a> \u8BA9\u7528\u6237\u53EF\u4EE5\u624B\u52A8\u4E0A\u4F20\u3002</p><p>\u5E73\u65F6\u6211\u4EEC\u81F3\u5C11\u5728\u8FD9\u4E24\u4E2A\u573A\u666F\uFF08\u5F00\u53D1\u65F6\u8C03\u8BD5\u6E90\u7801\uFF0C\u751F\u4EA7\u65F6\u5B9A\u4F4D\u9519\u8BEF\uFF09\u4E0B\u4F1A\u7528\u5230 sourcemap\u3002</p><h4 id="sourcemap\u7684\u683C\u5F0F" tabindex="-1">sourcemap\u7684\u683C\u5F0F <a class="header-anchor" href="#sourcemap\u7684\u683C\u5F0F" aria-hidden="true">#</a></h4><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">\u3000\u3000</span><span style="color:#FFCB6B;">version</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">out.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">sourceRoot</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">sources</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">names</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">maps</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">are</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fun</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#FFCB6B;">mappings</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AAgBC,SAAQ,CAAEA</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6BD4\u5982\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A sourcemap \u6587\u4EF6\uFF0C\u5BF9\u5E94\u5B57\u6BB5\u7684\u542B\u4E49\u5982\u4E0B\uFF1A</p><ul><li><p>version\uFF1Asource map\u7684\u7248\u672C\uFF0C\u76EE\u524D\u4E3A3\u3002</p></li><li><p>file\uFF1A\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u540D\u3002</p></li><li><p>sourceRoot\uFF1A\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u3002\u5982\u679C\u4E0E\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u5728\u540C\u4E00\u76EE\u5F55\uFF0C\u8BE5\u9879\u4E3A\u7A7A\u3002</p></li><li><p>sources\uFF1A\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u3002\u8BE5\u9879\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u4E3A\u53EF\u80FD\u662F\u591A\u4E2A\u6E90\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A\u76EE\u6807\u6587\u4EF6\u3002</p></li><li><p>names\uFF1A\u8F6C\u6362\u524D\u7684\u6240\u6709\u53D8\u91CF\u540D\u548C\u5C5E\u6027\u540D\uFF0C\u628A\u6240\u6709\u53D8\u91CF\u540D\u63D0\u53D6\u51FA\u6765\uFF0C\u4E0B\u9762\u7684 mapping \u76F4\u63A5\u4F7F\u7528\u4E0B\u6807\u5F15\u7528\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4F53\u79EF\u3002</p></li><li><p>mappings\uFF1A\u8F6C\u6362\u524D\u4EE3\u7801\u548C\u8F6C\u6362\u540E\u4EE3\u7801\u7684\u6620\u5C04\u5173\u7CFB\u7684\u96C6\u5408\uFF0C\u7528\u5206\u53F7\u4EE3\u8868\u4E00\u884C\uFF0C\u6BCF\u884C\u7684 mapping \u7528\u9017\u53F7\u5206\u9694\u3002</p></li></ul><p>\u91CD\u70B9\u770B mappping \u90E8\u5206</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u3000\u3000</span><span style="color:#FFCB6B;">mappings</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">AAAAA,BBBBB;;;;CCCCC,DDDDD</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6BCF\u4E00\u4E2A\u5206\u53F7 <code>;</code> \u8868\u793A\u4E00\u884C\uFF0C\u591A\u4E2A\u7A7A\u884C\u5C31\u662F\u591A\u4E2A <code>;</code>\uFF0Cmapping \u901A\u8FC7 <code>,</code> \u5206\u5272\u3002</p><p>mapping\u6709\u4E94\u4F4D\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> \u7B2C\u4E00\u4F4D\u662F\u76EE\u6807\u4EE3\u7801\u4E2D\u7684\u5217\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u7B2C\u4E8C\u4F4D\u662F\u6E90\u7801\u6240\u5728\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u7B2C\u4E09\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u7B2C\u56DB\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684\u5217\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u7B2C\u4E94\u4F4D\u662F\u6E90\u7801\u5BF9\u5E94\u7684 names\uFF0C\u4E0D\u4E00\u5B9A\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u4E00\u4F4D\u662F\u901A\u8FC7 VLQ \u7F16\u7801\u7684\uFF0C\u4E00\u4E2A\u5B57\u7B26\u5C31\u80FD\u8868\u793A\u884C\u5217\u6570\uFF0C\u5177\u4F53 VLQ \u7684\u7F16\u7801\u7684\u5B9E\u73B0\u5C31\u4E0D\u5C55\u5F00\u4E86\uFF0C\u611F\u5174\u8DA3\u53EF\u4EE5\u67E5\u4E00\u4E0B\u76F8\u5173\u8D44\u6599\u3002</p><p>sourcemap \u901A\u8FC7 <code>names</code> \u548C <code>;</code> \u7684\u8BBE\u8BA1\u7701\u7565\u6389\u4E86\u4E00\u4E9B\u53D8\u91CF\u540D\u548C\u884C\u6570\u6240\u5360\u7684\u7A7A\u95F4\uFF0C\u53C8\u901A\u8FC7 VLQ \u7F16\u7801\u4F7F\u5F97\u4E00\u4E2A\u5B57\u7B26\u5C31\u53EF\u4EE5\u8868\u793A\u884C\u5217\u6570\u7B49\u4FE1\u606F\u3002\u901A\u8FC7\u4E0D\u5927\u7684\u7A7A\u95F4\u5360\u7528\u5B8C\u6210\u4E86\u6E90\u7801\u5230\u76EE\u6807\u4EE3\u7801\u7684\u6620\u5C04\u3002</p><p><strong>\u90A3\u4E48 sourcemap \u7684\u6E90\u7801\u548C\u76EE\u6807\u4EE3\u7801\u7684\u884C\u5217\u6570\u662F\u600E\u4E48\u6765\u7684\u5462\uFF1F</strong></p><p>\u5176\u5B9E\u6211\u4EEC\u5728 parse \u7684\u65F6\u5019\u5C31\u5728 AST \u8282\u70B9\u4E2D\u4FDD\u5B58\u4E86 loc \u5C5E\u6027\uFF0C\u8FD9\u5C31\u662F\u6E90\u7801\u4E2D\u7684\u884C\u5217\u53F7\uFF0C\u5728\u540E\u9762 transform \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5E76\u4E0D\u4F1A\u53BB\u4FEE\u6539\u5B83\uFF0C\u6240\u4EE5\u8F6C\u6362\u5B8C\u4EE5\u540E\u8282\u70B9\u4E2D\u4ECD\u7136\u4FDD\u7559\u6709\u6E90\u7801\u4E2D\u7684\u884C\u5217\u53F7\u4FE1\u606F\uFF0C\u5728 generate \u6253\u5370\u6210\u76EE\u6807\u4EE3\u7801\u7684\u65F6\u5019\u4F1A\u8BA1\u7B97\u51FA\u65B0\u7684\u884C\u5217\u53F7\uFF0C\u8FD9\u6837\u4E24\u8005\u5173\u8054\u5C31\u53EF\u4EE5\u751F\u6210 sourcemap\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1f09b8512db4269ab9fdad56cfeb36b~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u5177\u4F53\u751F\u6210 sourcemap \u7684\u8FC7\u7A0B\u662F\u7528 mozilla \u7EF4\u62A4\u7684 <a href="https://www.npmjs.com/package/source-map" target="_blank" rel="noreferrer">source-map</a> \u8FD9\u4E2A\u5305\uFF0C\u5176\u4ED6\u5DE5\u5177\u505A sourcemap \u7684\u89E3\u6790\u548C\u751F\u6210\u4E5F\u662F\u57FA\u4E8E\u8FD9\u4E2A\u5305\u3002</p><h2 id="soruce-map" tabindex="-1">soruce-map <a class="header-anchor" href="#soruce-map" aria-hidden="true">#</a></h2><p><a href="https://www.npmjs.com/package/source-map" target="_blank" rel="noreferrer">source-map</a> \u53EF\u4EE5\u7528\u4E8E\u751F\u6210\u548C\u89E3\u6790 sourcemap\uFF0C\u9700\u8981\u624B\u52A8\u64CD\u4F5C sourcemap \u7684\u65F6\u5019\u53EF\u4EE5\u7528\u3002\u6211\u4EEC\u901A\u8FC7\u5B83\u7684 api \u6765\u611F\u53D7\u4E0B babel \u662F\u600E\u4E48\u751F\u6210 sourcemap \u7684\u3002</p><p>source-map \u66B4\u9732\u4E86 SourceMapConsumer\u3001SourceMapGenerator\u3001SourceNode 3\u4E2A\u7C7B\uFF0C\u5206\u522B\u7528\u4E8E\u6D88\u8D39 sourcemap\u3001\u751F\u6210 sourcemap\u3001\u521B\u5EFA\u6E90\u7801\u8282\u70B9\u3002</p><h5 id="\u751F\u6210-sourcemap" tabindex="-1">\u751F\u6210 sourcemap <a class="header-anchor" href="#\u751F\u6210-sourcemap" aria-hidden="true">#</a></h5><p>\u751F\u6210 sourcemap \u7684\u6D41\u7A0B\u662F\uFF1A</p><ol><li><pre><code>\u521B\u5EFA\u4E00\u4E2A SourceMapGenerator \u5BF9\u8C61
</code></pre></li><li><pre><code>\u901A\u8FC7 addMapping \u65B9\u6CD5\u6DFB\u52A0\u4E00\u4E2A\u6620\u5C04
</code></pre></li><li><pre><code>\u901A\u8FC7 toString \u8F6C\u4E3A sourcemap \u5B57\u7B26\u4E32
</code></pre></li></ol><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SourceMapGenerator</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source-mapped.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addMapping</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">generated</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">column</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">original</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">line</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">column</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">christopher</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;{&quot;version&quot;:3,&quot;file&quot;:&quot;source-mapped.js&quot;,</span></span>
<span class="line"><span style="color:#676E95;">//   &quot;sources&quot;:[&quot;foo.js&quot;],&quot;names&quot;:[&quot;christopher&quot;],&quot;mappings&quot;:&quot;;;;;;;;;;mCAgCEA&quot;}&#39;</span></span>
<span class="line"></span></code></pre></div><h5 id="\u6D88\u8D39sourcemap" tabindex="-1">\u6D88\u8D39sourcemap <a class="header-anchor" href="#\u6D88\u8D39sourcemap" aria-hidden="true">#</a></h5><p>SourceMapConsumer.with \u7684\u56DE\u8C03\u91CC\u9762\u53EF\u4EE5\u62FF\u5230 consumer \u7684 api\uFF0C\u8C03\u7528 originalPositionFor \u548C generatedPositionFor \u53EF\u4EE5\u5206\u522B\u7528\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u67E5\u6E90\u7801\u4F4D\u7F6E\u548C\u7528\u6E90\u7801\u4F4D\u7F6E\u67E5\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 eachMapping \u904D\u5386\u6240\u6709 mapping\uFF0C\u5BF9\u6BCF\u4E2A\u8FDB\u884C\u5904\u7406\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rawSourceMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">names</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sources</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">one.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">two.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sourceRoot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://example.com/www/js/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mappings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> whatever </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> SourceMapConsumer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">with</span><span style="color:#A6ACCD;">(rawSourceMap</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">consumer</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;">// \u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E\u67E5\u8BE2\u6E90\u7801\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">consumer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">originalPositionFor</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    line</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    column</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">28</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// { source: &#39;http://example.com/www/js/two.js&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//   line: 2,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//   column: 10,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//   name: &#39;n&#39; }</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6E90\u7801\u4F4D\u7F6E\u67E5\u8BE2\u76EE\u6807\u4EE3\u7801\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">consumer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generatedPositionFor</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    source</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://example.com/www/js/two.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    line</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    column</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// { line: 2, column: 28 }</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u904D\u5386 mapping</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">consumer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eachMapping</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">computeWhatever</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>babel \u5C31\u662F\u7528\u8FD9\u4E9B api \u6765\u751F\u6210 sourcemap \u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u63A2\u7D22\u4E86\u4E0B generator \u548C sourcemap \u7684\u539F\u7406\uFF0Cgenerate \u5C31\u662F\u9012\u5F52\u6253\u5370 AST \u6210\u5B57\u7B26\u4E32\uFF0C\u5728\u9012\u5F52\u6253\u5370\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6839\u636E\u6E90\u7801\u4F4D\u7F6E\u548C\u8BA1\u7B97\u51FA\u7684\u76EE\u6807\u4EE3\u7801\u7684\u4F4D\u7F6E\u6765\u751F\u6210 mapping\uFF0C\u52A0\u5230 sourcemap \u4E2D\u3002 sourcemap \u662F\u6E90\u7801\u548C\u76EE\u6807\u4EE3\u7801\u7684\u6620\u5C04\uFF0C\u7528\u4E8E\u5F00\u53D1\u65F6\u8C03\u8BD5\u6E90\u7801\u548C\u751F\u4EA7\u65F6\u5B9A\u4F4D\u7EBF\u4E0A\u9519\u8BEF\u3002 babel \u901A\u8FC7 source-map \u8FD9\u4E2A\u5305\u6765\u751F\u6210\u7684 sourcemap\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E0B source-map \u5305\u7684 api\uFF0C\u5BF9 sourcemap \u7684\u751F\u6210\u548C\u6D88\u8D39\u6709\u4E86\u4E00\u4E2A\u76F4\u89C2\u7684\u8BA4\u8BC6\u3002</p><p>\u5B66\u5B8C\u8FD9\u4E00\u8282\u4E4B\u540E\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86 AST \u662F\u600E\u4E48\u751F\u6210\u76EE\u6807\u4EE3\u7801\u548C sourcemap\u7684\uFF0C\u52A0\u4E0A\u524D\u4E24\u8282\u7684\u5185\u5BB9\uFF0C\u628A\u6574\u4E2A babel \u7684\u7F16\u8BD1\u6D41\u7A0B\u4E32\u8054\u4E86\u8D77\u6765\u3002</p>`,54),e=[l];function r(c,t,F,D,y,i){return n(),a("div",null,e)}const A=s(o,[["render",r]]);export{C as __pageData,A as default};
