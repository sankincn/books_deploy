import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u5F00\u59CB\u4F7F\u7528 TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 TypeScript","slug":"\u5B89\u88C5-typescript","link":"#\u5B89\u88C5-typescript","children":[]},{"level":2,"title":"\u521B\u5EFA\u73AF\u5883","slug":"\u521B\u5EFA\u73AF\u5883","link":"#\u521B\u5EFA\u73AF\u5883","children":[]},{"level":2,"title":"\u7F16\u5199\u7B2C\u4E00\u4E2A TypeScript \u7A0B\u5E8F","slug":"\u7F16\u5199\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F","link":"#\u7F16\u5199\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u5F00\u59CB\u4F7F\u7528 TypeScript.md"}'),t={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u5F00\u59CB\u4F7F\u7528 TypeScript.md"},e=p(`<h1 id="\u5F00\u59CB\u4F7F\u7528-typescript" tabindex="-1">\u5F00\u59CB\u4F7F\u7528 TypeScript <a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528-typescript" aria-hidden="true">#</a></h1><hr><h1 id="\u5F00\u59CB\u4F7F\u7528-typescript-1" tabindex="-1">\u5F00\u59CB\u4F7F\u7528 TypeScript <a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528-typescript-1" aria-hidden="true">#</a></h1><p>\u5728\u5F00\u59CB\u4F7F\u7528 TypeScript \u524D\u4F60\u6700\u597D\u6709\u4EE5\u4E0B\u51C6\u5907\uFF1A</p><ul><li>Node.js &gt; 8.0\uFF0C\u6700\u597D\u662F\u6700\u65B0\u7684\u7A33\u5B9A\u7248\uFF08\u76EE\u524D\u662FV10.16.3 \uFF09</li><li>\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177 npm \u6216\u8005 yarn</li><li>\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6216\u8005 IDE (\u7B14\u8005\u7684\u662F vscode)</li></ul><blockquote><p>\u76F8\u5173\u7684 shell \u547D\u4EE4\u4EC5\u9002\u7528\u4E8E *nix \u7CFB\u7EDF\uFF0Cwindows \u7CFB\u7EDF\u4E0D\u9002\u7528</p></blockquote><h2 id="\u5B89\u88C5-typescript" tabindex="-1">\u5B89\u88C5 TypeScript <a class="header-anchor" href="#\u5B89\u88C5-typescript" aria-hidden="true">#</a></h2><p>TypeScript \u7684\u5B89\u88C5\u5F88\u7B80\u5355\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7npm\u76F4\u63A5\u5728\u5168\u5C40\u5B89\u88C5 TypeScript\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; npm install -g typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521B\u5EFA\u73AF\u5883" tabindex="-1">\u521B\u5EFA\u73AF\u5883 <a class="header-anchor" href="#\u521B\u5EFA\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u968F\u540E\u6211\u4EEC\u8981\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir ts-study &amp;&amp; cd ts-study</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u521B\u5EFA src \u76EE\u5F55\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir src &amp;&amp; touch src/index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u6211\u4EEC\u7528npm\u5C06\u76EE\u5F55\u521D\u59CB\u5316\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6211\u4EEC\u8981\u4F7F\u7528 TypeScript \u7684\u8BDD\u901A\u5E38\u4E5F\u9700\u8981\u521D\u59CB\u5316\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tsc --init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\u76EE\u5F55\u4E0B\u591A\u4E86\u4E00\u4E2A<code>tsconfig.json</code>\u6587\u4EF6.</p><p>\u8FD9\u662F TypeScript \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CC\u9762\u5DF2\u7ECF\u5305\u542B\u5B98\u65B9\u521D\u59CB\u5316\u7684\u4E00\u4E9B\u914D\u7F6E\u4EE5\u53CA\u6CE8\u91CA\uFF0C\u6211\u4EEC\u73B0\u5728\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u914D\u7F6E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;es5&quot;,                            // \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES5&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;commonjs&quot;,                       // \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39; or &#39;es2015&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;moduleResolution&quot;: &quot;node&quot;,                 // \u9009\u62E9\u6A21\u5757\u89E3\u6790\u7B56\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;experimentalDecorators&quot;: true,             // \u542F\u7528\u5B9E\u9A8C\u6027\u7684ES\u88C5\u9970\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;allowSyntheticDefaultImports&quot;: true,       // \u5141\u8BB8\u4ECE\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sourceMap&quot;: true,                          // \u628A ts \u6587\u4EF6\u7F16\u8BD1\u6210 js \u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u540C\u65F6\u751F\u6210\u5BF9\u5E94\u7684 map \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;strict&quot;: true,                             // \u542F\u7528\u6240\u6709\u4E25\u683C\u7C7B\u578B\u68C0\u67E5\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitAny&quot;: true,                      // \u5728\u8868\u8FBE\u5F0F\u548C\u58F0\u660E\u4E0A\u6709\u9690\u542B\u7684 any\u7C7B\u578B\u65F6\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;alwaysStrict&quot;: true,                       // \u4EE5\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u6A21\u5757\uFF0C\u5E76\u5728\u6BCF\u4E2A\u6587\u4EF6\u91CC\u52A0\u5165 &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;declaration&quot;: true,                        // \u751F\u6210\u76F8\u5E94\u7684.d.ts\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;removeComments&quot;: true,                     // \u5220\u9664\u7F16\u8BD1\u540E\u7684\u6240\u6709\u7684\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitReturns&quot;: true,                  // \u4E0D\u662F\u51FD\u6570\u7684\u6240\u6709\u8FD4\u56DE\u8DEF\u5F84\u90FD\u6709\u8FD4\u56DE\u503C\u65F6\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;importHelpers&quot;: true,                      // \u4ECE tslib \u5BFC\u5165\u8F85\u52A9\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lib&quot;: [&quot;es6&quot;, &quot;dom&quot;],                      // \u6307\u5B9A\u8981\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u7684\u5E93\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;typeRoots&quot;: [&quot;node_modules/@types&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;outDir&quot;: &quot;./dist&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;rootDir&quot;: &quot;./src&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;include&quot;: [                                  // \u9700\u8981\u7F16\u8BD1\u7684ts\u6587\u4EF6\u4E00\u4E2A*\u8868\u793A\u6587\u4EF6\u5339\u914D**\u8868\u793A\u5FFD\u7565\u6587\u4EF6\u7684\u6DF1\u5EA6\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;./src/**/*.ts&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;exclude&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;node_modules&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dist&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;**/*.test.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u5728package.json\u4E2D\u52A0\u5165\u6211\u4EEC\u7684script\u547D\u4EE4\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;ts-study&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;src/index.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;build&quot;: &quot;tsc&quot;, // \u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;build:w&quot;: &quot;tsc -w&quot; // \u76D1\u542C\u6587\u4EF6\uFF0C\u6709\u53D8\u52A8\u5373\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;typescript &quot;: &quot;^3.6.4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u5199\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F" tabindex="-1">\u7F16\u5199\u7B2C\u4E00\u4E2A TypeScript \u7A0B\u5E8F <a class="header-anchor" href="#\u7F16\u5199\u7B2C\u4E00\u4E2A-typescript-\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>\u5728<code>src/index.ts</code>\u4E2D\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function greeter(person) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;Hello, &quot; + person</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const user = &quot;Jane User&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u4F60\u4F1A\u770B\u5230\u4E00\u4E2A\u8B66\u544A,\u8FD9\u4E2A\u8B66\u544A\u5728\u5B98\u65B9\u9ED8\u8BA4\u914D\u7F6E\u4E2D\u662F\u4E0D\u4F1A\u51FA\u73B0\u7684,\u6B63\u662F\u7531\u4E8E\u6211\u4EEC\u5F00\u542F\u4E86 <code>noImplicitAny</code> \u9009\u9879,\u5BF9\u4E8E\u9690\u5F0F\u542B\u6709 <code>any</code> \u7C7B\u578B\u7684\u53C2\u6570\u6216\u8005\u53D8\u91CF\u8FDB\u884C\u8B66\u544A\u26A0\uFE0F.</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daeeff39fac105~tplv-t2oaga2asx-image.image" alt="2019-06-25-00-57-51"></p><p>\u4E4B\u6240\u4EE5\u4E00\u5F00\u59CB\u5C31\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u662F\u56E0\u4E3A\u4E00\u65E6\u4F60\u5F00\u59CB\u653E\u4EFB<code>any</code>\u7C7B\u578B\u7684\u6CDB\u6EE5\uFF0C\u5C31\u4F1A\u628A TypeScript \u53D8\u6210 AnyScript \uFF0C\u4F1A\u5F88\u96BE\u6539\u6389\u8FD9\u4E2A\u6076\u4E60\uFF0C\u6240\u4EE5\u4ECE\u4E00\u5F00\u59CB\u5C31\u8981\u7528\u89C4\u8303\u7684 TypeScript \u7F16\u7801\u4E60\u60EF\u3002</p><p>\u6211\u4EEC\u8FDB\u884C\u4FEE\u6539\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function greeter(person: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;Hello, &quot; + person</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C<code>greeter</code>\u51FD\u6570\u81EA\u52A8\u52A0\u4E0A\u4E86\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u8FD9\u662F TypeScript \u81EA\u5E26\u7684_\u7C7B\u578B\u63A8\u5BFC_\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/9/16daeeff3a16d8fa~tplv-t2oaga2asx-image.image" alt="2019-06-25-01-08-12"></p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u603B\u7ED3\u4E00\u4E0B\u521D\u59CB\u5316 TypeScript \u5DE5\u4F5C\u73AF\u5883\u7684\u7B80\u6613\u6B65\u9AA4\uFF1A</p><ol><li>\u5B89\u88C5 TypeScript</li><li>\u7528 <code>tsc --init</code> \u521D\u59CB\u5316\u914D\u7F6E</li><li>\u7F16\u8F91 <code>tsconfig.json</code> \u914D\u7F6E TypeScript \u9009\u9879</li></ol><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u642D\u5EFA TypeScript \u7684\u521D\u59CB\u73AF\u5883\uFF0C\u5F53\u7136\u8FD9\u53EA\u662F\u4E00\u4E2A TypeScript \u73AF\u5883\u642D\u5EFA\u7684\u7B2C\u4E00\u6B65\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5728\u540E\u9762\u7684\u7AE0\u8282\u91CC\u60A8\u7ED3\u5408\u5185\u5BB9\u8FDB\u884C\u7F16\u7801\u7EC3\u4E60\uFF0C\u7EC3\u4E60\u73AF\u5883\u5C31\u5728\u5F53\u524D\u6211\u4EEC\u642D\u5EFA\u7684\u73AF\u5883\u91CC\u3002</p><p>\u6211\u5C06\u672C\u8282\u7684\u4EE3\u7801\u505A\u4E86\u4E00\u5B9A\u62D3\u5C55\uFF08\u52A0\u4E86\u6D4B\u8BD5\u548Ceslint\u7B49\u7B49\uFF09\u540E\uFF0C\u53D1\u5E03\u5230\u4E86<a href="https://github.com/xiaomuzhu/ts-start" target="_blank" rel="noreferrer">github</a>\u4E0A\uFF0C\u4F60\u53EF\u4EE5\u81EA\u884C\u4E0B\u8F7D\u3002</p>`,38),l=[e];function o(c,r,i,u,A,C){return a(),n("div",null,l)}const q=s(t,[["render",o]]);export{y as __pageData,q as default};
