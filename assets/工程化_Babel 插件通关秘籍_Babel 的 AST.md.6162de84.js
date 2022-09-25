import{_ as s,c as a,o as p,d as n}from"./app.e5528619.js";const C=JSON.parse('{"title":"Babel \u7684 AST","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u89C1\u7684 AST \u8282\u70B9","slug":"\u5E38\u89C1\u7684-ast-\u8282\u70B9","link":"#\u5E38\u89C1\u7684-ast-\u8282\u70B9","children":[{"level":3,"title":"Literal","slug":"literal","link":"#literal","children":[]},{"level":3,"title":"Identifier","slug":"identifier","link":"#identifier","children":[]},{"level":3,"title":"Statement","slug":"statement","link":"#statement","children":[]},{"level":3,"title":"Declaration","slug":"declaration","link":"#declaration","children":[]},{"level":3,"title":"Expression","slug":"expression","link":"#expression","children":[]},{"level":3,"title":"Class","slug":"class","link":"#class","children":[]},{"level":3,"title":"Modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"Program & Directive","slug":"program-directive","link":"#program-directive","children":[]},{"level":3,"title":"File & Comment","slug":"file-comment","link":"#file-comment","children":[]}]},{"level":2,"title":"AST \u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177","slug":"ast-\u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177","link":"#ast-\u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177","children":[]},{"level":2,"title":"AST \u7684\u516C\u5171\u5C5E\u6027","slug":"ast-\u7684\u516C\u5171\u5C5E\u6027","link":"#ast-\u7684\u516C\u5171\u5C5E\u6027","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Babel \u7684 AST.md"}'),l={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/Babel \u7684 AST.md"},e=n(`<h1 id="babel-\u7684-ast" tabindex="-1">Babel \u7684 AST <a class="header-anchor" href="#babel-\u7684-ast" aria-hidden="true">#</a></h1><hr><p>babel \u7F16\u8BD1\u7684\u7B2C\u4E00\u6B65\u662F\u628A\u6E90\u7801 parse \u6210\u62BD\u8C61\u8BED\u6CD5\u6811 AST \uFF08Abstract Syntax Tree\uFF09\uFF0C\u540E\u7EED\u5BF9\u8FD9\u4E2A AST \u8FDB\u884C\u8F6C\u6362\u3002\uFF08\u4E4B\u6240\u4EE5\u53EB\u62BD\u8C61\u8BED\u6CD5\u6811\u662F\u56E0\u4E3A\u7701\u7565\u6389\u4E86\u6E90\u7801\u4E2D\u7684\u5206\u9694\u7B26\u3001\u6CE8\u91CA\u7B49\u5185\u5BB9\uFF09</p><p>AST \u4E5F\u662F\u6709\u6807\u51C6\u7684\uFF0CJS parser \u7684 AST \u5927\u591A\u662F <a href="https://github.com/estree/estree" target="_blank" rel="noreferrer">estree \u6807\u51C6</a>\uFF0C\u8FD9\u4E2A\u540E\u9762\u4F1A\u6709\u5355\u72EC\u4E00\u8282\u6765\u8BB2\u3002</p><p>babel \u7684\u6574\u4E2A\u7F16\u8BD1\u6D41\u7A0B\u90FD\u662F\u56F4\u7ED5 AST \u6765\u7684\uFF0C\u8FD9\u4E00\u8282\u6211\u4EEC\u6765\u719F\u6089\u4E00\u4E0B AST\u3002</p><p>\u719F\u6089\u4E86 AST\uFF0C\u4E5F\u5C31\u662F\u77E5\u9053\u8F6C\u8BD1\u5668\u548C JS \u5F15\u64CE\u662F\u600E\u4E48\u7406\u89E3\u4EE3\u7801\u7684\uFF0C\u5BF9\u6DF1\u5165\u638C\u63E1 Javascript \u4E5F\u6709\u5F88\u5927\u7684\u597D\u5904\u3002</p><h2 id="\u5E38\u89C1\u7684-ast-\u8282\u70B9" tabindex="-1">\u5E38\u89C1\u7684 AST \u8282\u70B9 <a class="header-anchor" href="#\u5E38\u89C1\u7684-ast-\u8282\u70B9" aria-hidden="true">#</a></h2><p>AST \u662F\u5BF9\u6E90\u7801\u7684\u62BD\u8C61\uFF0C\u5B57\u9762\u91CF\u3001\u6807\u8BC6\u7B26\u3001\u8868\u8FBE\u5F0F\u3001\u8BED\u53E5\u3001\u6A21\u5757\u8BED\u6CD5\u3001class \u8BED\u6CD5\u90FD\u6709\u5404\u81EA\u7684 AST\u3002\u6211\u4EEC\u5206\u522B\u6765\u4E86\u89E3\u4E00\u4E0B\uFF1A</p><h3 id="literal" tabindex="-1">Literal <a class="header-anchor" href="#literal" aria-hidden="true">#</a></h3><p>Literal \u662F\u5B57\u9762\u91CF\u7684\u610F\u601D\uFF0C\u6BD4\u5982 <code>let name = &#39;guang&#39;</code>\u4E2D\uFF0C<code>&#39;guang&#39;</code>\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF StringLiteral\uFF0C\u76F8\u5E94\u7684\u8FD8\u6709\u6570\u5B57\u5B57\u9762\u91CF NumericLiteral\uFF0C\u5E03\u5C14\u5B57\u9762\u91CF BooleanLiteral\uFF0C\u5B57\u7B26\u4E32\u5B57\u9762\u91CF StringLiteral\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF RegExpLiteral \u7B49\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29185815036a4ea1878484ba773a3b6e~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u4EE3\u7801\u4E2D\u7684\u5B57\u9762\u91CF\u5F88\u591A\uFF0Cbabel \u5C31\u662F\u901A\u8FC7 xxLiteral \u6765\u62BD\u8C61\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u3002</p><h3 id="identifier" tabindex="-1">Identifier <a class="header-anchor" href="#identifier" aria-hidden="true">#</a></h3><p>Identifer \u662F\u6807\u8BC6\u7B26\u7684\u610F\u601D\uFF0C\u53D8\u91CF\u540D\u3001\u5C5E\u6027\u540D\u3001\u53C2\u6570\u540D\u7B49\u5404\u79CD\u58F0\u660E\u548C\u5F15\u7528\u7684\u540D\u5B57\uFF0C\u90FD\u662FIdentifer\u3002\u6211\u4EEC\u77E5\u9053\uFF0CJS \u4E2D\u7684\u6807\u8BC6\u7B26\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u6216\u6570\u5B57\u6216\u4E0B\u5212\u7EBF\uFF08\u201C_\u201D\uFF09\u6216\u7F8E\u5143\u7B26\u53F7\uFF08\u201C$\u201D\uFF09\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\u3002\u8FD9\u662F Identifier \u7684\u8BCD\u6CD5\u7279\u70B9\u3002</p><p>\u6765\u5C1D\u8BD5\u5206\u6790\u4E00\u4E0B\uFF0C\u4E0B\u9762\u8FD9\u4E00\u6BB5\u4EE3\u7801\u91CC\u9762\u6709\u591A\u5C11 Identifier \u5462\uFF1F</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guang</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7B54\u6848\u662F\u8FD9\u4E9B</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a4b54e6512a4da7ad5c99e7a61a62e9~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="statement" tabindex="-1">Statement <a class="header-anchor" href="#statement" aria-hidden="true">#</a></h3><p>statement \u662F\u8BED\u53E5\uFF0C\u5B83\u662F\u53EF\u4EE5\u72EC\u7ACB\u6267\u884C\u7684\u5355\u4F4D\uFF0C\u6BD4\u5982 break\u3001continue\u3001debugger\u3001return \u6216\u8005 if \u8BED\u53E5\u3001while \u8BED\u53E5\u3001for \u8BED\u53E5\uFF0C\u8FD8\u6709\u58F0\u660E\u8BED\u53E5\uFF0C\u8868\u8FBE\u5F0F\u8BED\u53E5\u7B49\u3002\u6211\u4EEC\u5199\u7684\u6BCF\u4E00\u6761\u53EF\u4EE5\u72EC\u7ACB\u6267\u884C\u7684\u4EE3\u7801\u90FD\u662F\u8BED\u53E5\u3002</p><p>\u8BED\u53E5\u672B\u5C3E\u4E00\u822C\u4F1A\u52A0\u4E00\u4E2A\u5206\u53F7\u5206\u9694\uFF0C\u6216\u8005\u7528\u6362\u884C\u5206\u9694\u3002</p><p>\u4E0B\u9762\u8FD9\u4E9B\u6211\u4EEC\u7ECF\u5E38\u5199\u7684\u4EE3\u7801\uFF0C\u6BCF\u4E00\u884C\u90FD\u662F\u4E00\u4E2A Statement\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">debugger</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">finally</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> obj) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">switch</span><span style="color:#A6ACCD;"> (v)</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">break</span><span style="color:#89DDFF;">;</span><span style="color:#89DDFF;">default</span><span style="color:#89DDFF;">:;}</span></span>
<span class="line"><span style="color:#FFCB6B;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> (a)</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u4EEC\u5BF9\u5E94\u7684 AST \u8282\u70B9\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d711045e21bb44b68495088df6a9a60b~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8BED\u53E5\u662F\u4EE3\u7801\u6267\u884C\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u53EF\u4EE5\u8BF4\uFF0C\u4EE3\u7801\u662F\u7531\u8BED\u53E5\uFF08Statement\uFF09\u6784\u6210\u7684\u3002</p><h3 id="declaration" tabindex="-1">Declaration <a class="header-anchor" href="#declaration" aria-hidden="true">#</a></h3><p>\u58F0\u660E\u8BED\u53E5\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8BED\u53E5\uFF0C\u5B83\u6267\u884C\u7684\u903B\u8F91\u662F\u5728\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u3001\u51FD\u6570\u3001class\u3001import\u3001export \u7B49\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E9B\u8BED\u53E5\u90FD\u662F\u58F0\u660E\u8BED\u53E5\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> e </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u4EEC\u5BF9\u5E94\u7684 AST \u8282\u70B9\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5303fa5530944a638d6b3d1af93f0e3f~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u58F0\u660E\u8BED\u53E5\u7528\u4E8E\u5B9A\u4E49\u53D8\u91CF\uFF0C\u8FD9\u4E5F\u662F\u4EE3\u7801\u4E2D\u4E00\u4E2A\u57FA\u7840\u7EC4\u6210\u90E8\u5206\u3002</p><h3 id="expression" tabindex="-1">Expression <a class="header-anchor" href="#expression" aria-hidden="true">#</a></h3><p>expression \u662F\u8868\u8FBE\u5F0F\uFF0C\u7279\u70B9\u662F\u6267\u884C\u5B8C\u4EE5\u540E\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD9\u662F\u548C\u8BED\u53E5 (statement) \u7684\u533A\u522B\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u8868\u8FBE\u5F0F</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){};</span></span>
<span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#A6ACCD;">super</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u4EEC\u5BF9\u5E94\u7684AST\u5982\u56FE\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/feabcb940982409b911dcbb6066e8aa7~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u7EC6\u5FC3\u7684\u540C\u5B66\u53EF\u80FD\u4F1A\u95EE identifier \u548C super \u600E\u4E48\u4E5F\u662F\u8868\u8FBE\u5F0F\u5462\uFF1F</p><p>\u56E0\u4E3A identifier\u3001super \u6709\u8FD4\u56DE\u503C\uFF0C\u7B26\u5408\u8868\u8FBE\u5F0F\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u4E5F\u662F expression\u3002</p><p>\u6211\u4EEC\u5224\u65AD AST \u8282\u70B9\u662F\u4E0D\u662F\u67D0\u79CD\u7C7B\u578B\u8981\u770B\u5B83\u662F\u4E0D\u662F\u7B26\u5408\u8BE5\u79CD\u7C7B\u578B\u7684\u7279\u70B9\uFF0C\u6BD4\u5982\u8BED\u53E5\u7684\u7279\u70B9\u662F\u80FD\u591F\u5355\u72EC\u6267\u884C\uFF0C\u8868\u8FBE\u5F0F\u7684\u7279\u70B9\u662F\u6709\u8FD4\u56DE\u503C\u3002</p><p>\u6709\u7684\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5355\u72EC\u6267\u884C\uFF0C\u7B26\u5408\u8BED\u53E5\u7684\u7279\u70B9\uFF0C\u6240\u4EE5\u4E5F\u662F\u8BED\u53E5\uFF0C\u6BD4\u5982\u8D4B\u503C\u8868\u8FBE\u5F0F\u3001\u6570\u7EC4\u8868\u8FBE\u5F0F\u7B49\uFF0C\u4F46\u6709\u7684\u8868\u8FBE\u5F0F\u4E0D\u80FD\u5355\u72EC\u6267\u884C\uFF0C\u9700\u8981\u548C\u5176\u4ED6\u7C7B\u578B\u7684\u8282\u70B9\u7EC4\u5408\u5728\u4E00\u8D77\u6784\u6210\u8BED\u53E5\u3002\u6BD4\u5982\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u548C\u533F\u540D class \u8868\u8FBE\u5F0F\u5355\u72EC\u6267\u884C\u4F1A\u62A5\u9519\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){};</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u548C\u5176\u4ED6\u90E8\u5206\u4E00\u8D77\u6784\u6210\u4E00\u6761\u8BED\u53E5\uFF0C\u6BD4\u5982\u7EC4\u6210\u8D4B\u503C\u8BED\u53E5</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8BED\u53E5\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F60\u4F1A\u53D1\u73B0\u89E3\u6790\u51FA\u7684 AST \u5305\u88F9\u4E86\u4E00\u5C42 ExpressionStatement \u8282\u70B9\uFF0C\u4EE3\u8868\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u662F\u88AB\u5F53\u6210\u8BED\u53E5\u6267\u884C\u7684\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07a3f1e392f649adb764ada46ee48602~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-hidden="true">#</a></h3><p>class \u7684\u8BED\u6CD5\u4E5F\u6709\u4E13\u95E8\u7684 AST \u8282\u70B9\u6765\u8868\u793A\u3002</p><p>\u6574\u4E2A class \u7684\u5185\u5BB9\u662F ClassBody\uFF0C\u5C5E\u6027\u662F ClassProperty\uFF0C\u65B9\u6CD5\u662FClassMethod\uFF08\u901A\u8FC7 kind \u5C5E\u6027\u6765\u533A\u5206\u662F constructor \u8FD8\u662F method\uFF09\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u7684\u4EE3\u7801</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Guang</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">eat</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u5E94\u7684AST\u662F\u8FD9\u6837\u7684</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c62ec375157488780e2beae39e7620d~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>class \u662F es next \u7684\u8BED\u6CD5\uFF0Cbabel \u4E2D\u6709\u4E13\u95E8\u7684 AST \u6765\u8868\u793A\u5B83\u7684\u5185\u5BB9\u3002</p><h3 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-hidden="true">#</a></h3><p>es module \u662F\u8BED\u6CD5\u7EA7\u522B\u7684\u6A21\u5757\u89C4\u8303\uFF0C\u6240\u4EE5\u4E5F\u6709\u4E13\u95E8\u7684 AST \u8282\u70B9\u3002</p><h4 id="import" tabindex="-1">import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h4><p>import \u6709 3 \u79CD\u8BED\u6CD5\uFF1A</p><p>named import\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>default import\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>namespaced import:</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9 3 \u79CD\u8BED\u6CD5\u90FD\u5BF9\u5E94 ImportDeclaration \u8282\u70B9\uFF0C\u4F46\u662F specifiers \u5C5E\u6027\u4E0D\u540C\uFF0C\u5206\u522B\u5BF9\u5E94 ImportSpicifier\u3001ImportDefaultSpecifier\u3001ImportNamespaceSpcifier\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e501a0dfcce043c184e6320e22a4211c~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u56FE\u4E2D\u9EC4\u6846\u6807\u51FA\u7684\u5C31\u662F specifier \u90E8\u5206\u3002\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u51FA\u6574\u4F53\u7ED3\u6784\u76F8\u540C\uFF0C\u53EA\u662F specifier \u90E8\u5206\u4E0D\u540C\uFF0C\u6240\u4EE5 import \u8BED\u6CD5\u7684 AST \u7684\u7ED3\u6784\u662F ImportDeclaration \u5305\u542B\u7740\u5404\u79CD import specifier\u3002</p><h4 id="export" tabindex="-1">export <a class="header-anchor" href="#export" aria-hidden="true">#</a></h4><p>export \u4E5F\u67093\u79CD\u8BED\u6CD5\uFF1A</p><p>named export\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>default export\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>all export\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export * from &#39;c&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5206\u522B\u5BF9\u5E94 ExportNamedDeclaration\u3001ExportDefaultDeclaration\u3001ExportAllDeclaration \u7684 AST\u3002</p><p>\u6BD4\u5982\u8FD9\u4E09\u79CD export</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u5E94\u7684 AST \u8282\u70B9\u4E3A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3ccde25491e42199088fe1f050469ab~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="program-directive" tabindex="-1">Program &amp; Directive <a class="header-anchor" href="#program-directive" aria-hidden="true">#</a></h3><p>program \u662F\u4EE3\u8868\u6574\u4E2A\u7A0B\u5E8F\u7684\u8282\u70B9\uFF0C\u5B83\u6709 body \u5C5E\u6027\u4EE3\u8868\u7A0B\u5E8F\u4F53\uFF0C\u5B58\u653E statement \u6570\u7EC4\uFF0C\u5C31\u662F\u5177\u4F53\u6267\u884C\u7684\u8BED\u53E5\u7684\u96C6\u5408\u3002\u8FD8\u6709 directives \u5C5E\u6027\uFF0C\u5B58\u653E Directive \u8282\u70B9\uFF0C\u6BD4\u5982<code>&quot;use strict&quot;</code> \u8FD9\u79CD\u6307\u4EE4\u4F1A\u4F7F\u7528 Directive \u8282\u70B9\u8868\u793A\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/154a6b04020047a0aa8eec9a29ae2d7f~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>Program \u662F\u5305\u88F9\u5177\u4F53\u6267\u884C\u8BED\u53E5\u7684\u8282\u70B9\uFF0C\u800C Directive \u5219\u662F\u4EE3\u7801\u4E2D\u7684\u6307\u4EE4\u90E8\u5206\u3002</p><h3 id="file-comment" tabindex="-1">File &amp; Comment <a class="header-anchor" href="#file-comment" aria-hidden="true">#</a></h3><p>babel \u7684 AST \u6700\u5916\u5C42\u8282\u70B9\u662F File\uFF0C\u5B83\u6709 program\u3001comments\u3001tokens \u7B49\u5C5E\u6027\uFF0C\u5206\u522B\u5B58\u653E Program \u7A0B\u5E8F\u4F53\u3001\u6CE8\u91CA\u3001token \u7B49\uFF0C\u662F\u6700\u5916\u5C42\u8282\u70B9\u3002</p><p>\u6CE8\u91CA\u5206\u4E3A\u5757\u6CE8\u91CA\u548C\u884C\u5185\u6CE8\u91CA\uFF0C\u5BF9\u5E94 CommentBlock \u548C CommentLine \u8282\u70B9\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54eb07649db14476a27d61b4265fe547~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u4E0A\u9762 6 \u79CD\u5C31\u662F\u5E38\u89C1\u7684\u4E00\u4E9B AST \u8282\u70B9\u7C7B\u578B\uFF0Cbabel \u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u8282\u70B9\u6765\u62BD\u8C61\u6E90\u7801\u4E2D\u4E0D\u540C\u7684\u90E8\u5206\u3002</p><h2 id="ast-\u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177" tabindex="-1">AST \u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177 <a class="header-anchor" href="#ast-\u53EF\u89C6\u5316\u67E5\u770B\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u8FD9\u4E48\u591A AST \u6211\u4EEC\u90FD\u8981\u8BB0\u4F4F\u4E48\uFF1F</p><p>\u4E0D\u9700\u8981\u3002\u53EF\u4EE5\u901A\u8FC7 <a href="https://astexplorer.net/" target="_blank" rel="noreferrer">axtexplorer.net</a> \u8FD9\u4E2A\u7F51\u7AD9\u6765\u53EF\u89C6\u5316\u7684\u67E5\u770B\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c26502def1b84a36a54ab09c7b071e73~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u8FD9\u4E2A\u7F51\u7AD9\u53EF\u4EE5\u67E5\u770B\u4EE3\u7801 parse \u4EE5\u540E\u7684 AST\uFF0C\u53EF\u4EE5\u5207\u6362 parse \u7684\u8BED\u8A00\u548C\u7528\u7684 parser\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539 parse options\u3002</p><p>\u70B9\u51FB\u8FD9\u91CC\u7684 save \u5C31\u53EF\u4EE5\u4FDD\u5B58\u4E0B\u6765\uFF0C\u7136\u540E\u628A url \u5206\u4EAB\u51FA\u53BB\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c634d8458ef4efdb07888da90a9dd99~tplv-k3u1fbpfcp-watermark.image?" alt=""></p><p>\u6BD4\u5982\u8FD9\u4E2A\u94FE\u63A5</p><p><a href="https://astexplorer.net/#/gist/7267e806bfec60b48b9d39d039f29313/c343ad5a76a8dd78c22d39ce89f4d0733c2b17e4" target="_blank" rel="noreferrer">https://astexplorer.net/#/gist/7267e806bfec60b48b9d39d039f29313/c343ad5a76a8dd78c22d39ce89f4d0733c2b17e4</a>\u3002</p><p>\u5982\u679C\u60F3\u67E5\u770B\u5168\u90E8\u7684 AST \u53EF\u4EE5\u5728<a href="https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md" target="_blank" rel="noreferrer">babel parser \u4ED3\u5E93\u91CC\u7684 AST \u6587\u6863</a>\u91CC\u67E5\uFF0C\u6216\u8005\u76F4\u63A5\u53BB\u770B @babel/types \u7684 <a href="https://github.com/babel/babel/blob/main/packages/babel-types/src/ast-types/generated/index.ts" target="_blank" rel="noreferrer">typescript \u7C7B\u578B\u5B9A\u4E49</a>\u3002</p><h2 id="ast-\u7684\u516C\u5171\u5C5E\u6027" tabindex="-1">AST \u7684\u516C\u5171\u5C5E\u6027 <a class="header-anchor" href="#ast-\u7684\u516C\u5171\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u6BCF\u79CD AST \u90FD\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\uFF0C\u4F46\u662F\u5B83\u4EEC\u4E5F\u6709\u4E00\u4E9B\u516C\u5171\u7684\u5C5E\u6027\uFF1A</p><ul><li><p><code>type</code>\uFF1A AST \u8282\u70B9\u7684\u7C7B\u578B</p></li><li><p><code>start\u3001end\u3001loc</code>\uFF1Astart \u548C end \u4EE3\u8868\u8BE5\u8282\u70B9\u5728\u6E90\u7801\u4E2D\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u4E0B\u6807\u3002\u800C loc \u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6709 line \u548C column \u5C5E\u6027\u5206\u522B\u8BB0\u5F55\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u884C\u5217\u53F7\u3002</p></li><li><p><code>leadingComments\u3001innerComments\u3001trailingComments</code>\uFF1A \u8868\u793A\u5F00\u59CB\u7684\u6CE8\u91CA\u3001\u4E2D\u95F4\u7684\u6CE8\u91CA\u3001\u7ED3\u5C3E\u7684\u6CE8\u91CA\uFF0C\u6BCF\u4E2A AST \u8282\u70B9\u4E2D\u90FD\u53EF\u80FD\u5B58\u5728\u6CE8\u91CA\uFF0C\u800C\u4E14\u53EF\u80FD\u5728\u5F00\u59CB\u3001\u4E2D\u95F4\u3001\u7ED3\u675F\u8FD9\u4E09\u79CD\u4F4D\u7F6E\uFF0C\u60F3\u62FF\u5230\u67D0\u4E2A AST \u7684\u6CE8\u91CA\u5C31\u901A\u8FC7\u8FD9\u4E09\u4E2A\u5C5E\u6027\u3002</p></li></ul><p>\u6BD4\u5982<a href="https://astexplorer.net/#/gist/7267e806bfec60b48b9d39d039f29313/c343ad5a76a8dd78c22d39ce89f4d0733c2b17e4" target="_blank" rel="noreferrer">\u8FD9\u6BB5\u6709\u6CE8\u91CA\u7684\u4EE3\u7801\u7684 AST</a>\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa8e759c78704bca848de3aa7f64d143~tplv-k3u1fbpfcp-watermark.image?" alt=""></p><ul><li><code>extra</code>\uFF1A\u8BB0\u5F55\u4E00\u4E9B\u989D\u5916\u7684\u4FE1\u606F\uFF0C\u7528\u4E8E\u5904\u7406\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u3002\u6BD4\u5982 StringLiteral \u7684 value \u53EA\u662F\u503C\u7684\u4FEE\u6539\uFF0C\u800C\u4FEE\u6539 extra.raw \u5219\u53EF\u4EE5\u8FDE\u540C\u5355\u53CC\u5F15\u53F7\u4E00\u8D77\u4FEE\u6539\u3002</li></ul><p>\u6BD4\u5982<a href="https://astexplorer.net/#/gist/84c587000fced891a2fcf6212418e67e/41636c5445957a4d83bbc9232689ddb02d3e2571" target="_blank" rel="noreferrer">\u8FD9\u6BB5\u4EE3\u7801\u7684 AST</a>\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02beb5ebce714637a12140c6221e7348~tplv-k3u1fbpfcp-watermark.image?" alt=""></p><p>\u4FEE\u6539 value \u53EA\u80FD\u4FEE\u6539\u503C\uFF0C\u4FEE\u6539 extra.raw \u53EF\u4EE5\u8FDE\u5F15\u53F7\u4E00\u8D77\u4FEE\u6539\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86\u4EE3\u7801\u4E2D\u5E38\u89C1\u7684\u8BED\u6CD5\u5728 babel \u7684 AST \u4E2D\u5BF9\u5E94\u7684\u8282\u70B9\u3002</p><p>\u6211\u4EEC\u5B66\u4E60\u4E86\uFF1A \u6807\u8BC6\u7B26 Identifer\u3001\u5404\u79CD\u5B57\u9762\u91CF xxLiteral\u3001\u5404\u79CD\u8BED\u53E5 xxStatement\uFF0C\u5404\u79CD\u58F0\u660E\u8BED\u53E5 xxDeclaration\uFF0C\u5404\u79CD\u8868\u8FBE\u5F0F xxExpression\uFF0C\u4EE5\u53CA Class\u3001Modules\u3001File\u3001Program\u3001Directive\u3001Comment \u8FD9\u4E9B AST \u8282\u70B9\u3002</p><p>\u4E86\u89E3\u4E86\u8FD9\u4E9B\u8282\u70B9\uFF0C\u5C31\u80FD\u77E5\u9053\u5E73\u65F6\u5199\u7684\u4EE3\u7801\u662F\u600E\u4E48\u7528 AST \u8868\u793A\u7684\u3002</p><p>\u5F53\u7136\u4E5F\u4E0D\u9700\u8981\u8BB0\uFF0C\u53EF\u4EE5\u7528 (<a href="https://astexplorer.net/" target="_blank" rel="noreferrer">astexpoler.net</a>) \u53EF\u89C6\u5316\u7684\u67E5\u770B\u3002</p><p>AST \u8282\u70B9\u53EF\u80FD\u540C\u65F6\u6709\u591A\u79CD\u7C7B\u578B\uFF0C\u786E\u5B9A\u4E00\u79CD AST \u8282\u70B9\u662F\u4EC0\u4E48\u7C7B\u578B\u4E3B\u8981\u770B\u5B83\u7684\u7279\u70B9\uFF0C\u6BD4\u5982 Statement \u7684\u7279\u70B9\u662F\u53EF\u4EE5\u5355\u72EC\u6267\u884C\uFF0CExpression \u7684\u7279\u70B9\u662F\u6709\u8FD4\u56DE\u503C\uFF0C\u6240\u4EE5\u4E00\u4E9B\u53EF\u4EE5\u5355\u72EC\u6267\u884C\u7684 Expression \u4F1A\u5305\u4E00\u5C42 ExpressionStatement\u3002</p><p>\u4E0D\u540C AST \u8282\u70B9\u6709\u4E0D\u540C\u7684\u5C5E\u6027\u6765\u5B58\u653E\u5BF9\u5E94\u7684\u6E90\u7801\u4FE1\u606F\uFF0C\u4F46\u662F\u90FD\u6709\u4E00\u4E9B\u516C\u5171\u5C5E\u6027\u5982 type\u3001xxComments\u3001loc \u7B49\u3002</p><p>\u5B66\u4F1A\u4E86 AST\uFF0C\u5C31\u53EF\u4EE5\u628A\u5BF9\u4EE3\u7801\u7684\u64CD\u4F5C\u8F6C\u4E3A\u5BF9 AST \u7684\u64CD\u4F5C\u4E86\uFF0C\u8FD9\u662F\u7F16\u8BD1\u3001\u9759\u6001\u5206\u6790\u7684\u7B2C\u4E00\u6B65\u3002</p>`,118),o=[e];function t(r,c,i,D,y,F){return p(),a("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
