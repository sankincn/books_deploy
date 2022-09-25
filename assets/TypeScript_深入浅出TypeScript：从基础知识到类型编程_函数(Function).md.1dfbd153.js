import{_ as s,c as a,o as n,d as e}from"./app.c4f45da1.js";const b=JSON.parse('{"title":"\u51FD\u6570(Function)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B","slug":"\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B","link":"#\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B","children":[]},{"level":2,"title":"\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3","slug":"\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3","link":"#\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3","children":[{"level":3,"title":"\u53EF\u9009\u53C2\u6570","slug":"\u53EF\u9009\u53C2\u6570","link":"#\u53EF\u9009\u53C2\u6570","children":[]},{"level":3,"title":"\u9ED8\u8BA4\u53C2\u6570","slug":"\u9ED8\u8BA4\u53C2\u6570","link":"#\u9ED8\u8BA4\u53C2\u6570","children":[]},{"level":3,"title":"\u5269\u4F59\u53C2\u6570","slug":"\u5269\u4F59\u53C2\u6570","link":"#\u5269\u4F59\u53C2\u6570","children":[]}]},{"level":2,"title":"\u91CD\u8F7D\uFF08Overload\uFF09","slug":"\u91CD\u8F7D\uFF08overload\uFF09","link":"#\u91CD\u8F7D\uFF08overload\uFF09","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u51FD\u6570(Function).md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u51FD\u6570(Function).md"},l=e(`<h1 id="\u51FD\u6570-function" tabindex="-1">\u51FD\u6570(Function) <a class="header-anchor" href="#\u51FD\u6570-function" aria-hidden="true">#</a></h1><hr><h1 id="\u51FD\u6570-function-1" tabindex="-1">\u51FD\u6570(Function) <a class="header-anchor" href="#\u51FD\u6570-function-1" aria-hidden="true">#</a></h1><p>\u51FD\u6570\u662F JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684\u57FA\u7840,\u5B83\u5E2E\u52A9\u4F60\u5B9E\u73B0\u62BD\u8C61\u5C42\u3001\u6A21\u62DF\u7C7B\u3001\u4FE1\u606F\u9690\u85CF\u548C\u6A21\u5757\u3002</p><p>\u5728 TypeScript \u91CC,\u867D\u7136\u5DF2\u7ECF\u652F\u6301\u7C7B\u3001\u547D\u540D\u7A7A\u95F4\u548C\u6A21\u5757,\u4F46\u51FD\u6570\u4ECD\u7136\u662F\u4E3B\u8981\u7684\u5B9A\u4E49\u884C\u4E3A\u7684\u5730\u65B9,TypeScript \u4E3A JavaScript \u51FD\u6570\u6DFB\u52A0\u4E86\u989D\u5916\u7684\u529F\u80FD\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u66F4\u5BB9\u6613\u5730\u4F7F\u7528\u3002</p><h2 id="\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B" tabindex="-1">\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B <a class="header-anchor" href="#\u5B9A\u4E49\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\b\u6211\u4EEC\u5728 TypeScript \u4E2D\u7684\u51FD\u6570\u5E76\u4E0D\u9700\u8981\u523B\u610F\u53BB\u5B9A\u4E49\uFF0C\u6BD4\u5982\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u52A0\u6CD5\u51FD\u6570:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const add = (a: number, b: number) =&gt; a + b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B9E\u9645\u4E0A\u6211\u4EEC\u53EA\u5B9A\u4E49\u4E86\u51FD\u6570\u7684\u4E24\u4E2A\u53C2\u6570\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6574\u4E2A\u51FD\u6570\u867D\u7136\u6CA1\u6709\u88AB\u663E\u5F0F\u5B9A\u4E49\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A TypeScript \u7F16\u8BD1\u5668\u662F\u80FD\u300E\u611F\u77E5\u300F\u5230\u8FD9\u4E2A\u51FD\u6570\u7684\u7C7B\u578B\u7684:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a11bb4c~tplv-t2oaga2asx-image.image" alt="2019-06-25-10-43-43"></p><p>\u6211\u4EEC\u901A\u8FC7 VS Code \u7684\u7C7B\u578B\u63D0\u793A\u770B\u5230\uFF0CTypeScript \u5DF2\u7ECF\u63A8\u65AD\u51FA\u4E86\u6574\u4E2A\u51FD\u6570\u7684\u7C7B\u578B\uFF0C\u867D\u7136\u6211\u4EEC\u5E76\u6CA1\u6709\u663E\u5F0F\u5B9A\u4E49\u51FA\u6765\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u300E\u7C7B\u578B\u63A8\u65AD\u300F\u3002</p><p>\u90A3\u4E48\u6211\u5E94\u8BE5\u5982\u4F55\u663E\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7684\u7C7B\u578B\u5462\uFF1F</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a4d9eff~tplv-t2oaga2asx-image.image" alt="2019-06-25-10-47-16"></p><p>\u62EC\u53F7\u91CC\u7684 <code>(a: number, b: number)</code> \u4E3A\u53C2\u6570\u7C7B\u578B,\u800C\u901A\u8FC7 <code>=&gt;</code> \u6765\u8FDE\u63A5\u53C2\u6570\u4E0E\u8FD4\u56DE\u503C, \u6700\u540E\u5219\u662F\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002</p><h2 id="\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3" tabindex="-1">\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3 <a class="header-anchor" href="#\u51FD\u6570\u7684\u53C2\u6570\u8BE6\u89E3" aria-hidden="true">#</a></h2><h3 id="\u53EF\u9009\u53C2\u6570" tabindex="-1">\u53EF\u9009\u53C2\u6570 <a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u53EF\u80FD\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u8FD9\u5C31\u9700\u8981\u6211\u4EEC\u4F7F\\\u7528\u53EF\u9009\u53C2\u6570\u6765\u5B9A\u4E49.</p><p>\u6211\u4EEC\u53EA\u9700\u8981\u5728\u53C2\u6570\u540E\u9762\u52A0\u4E0A <code>?</code> \u5373\u4EE3\u8868\u53C2\u6570\u53EF\u80FD\u4E0D\u5B58\u5728\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const add = (a: number, b?: number) =&gt; a + (b ? b : 0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53C2\u6570b\u6709<code>number</code>\u4E0E<code>undefined</code>\u4E24\u79CD\u53EF\u80FD\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a559f31~tplv-t2oaga2asx-image.image" alt="2019-06-25-10-53-47"></p><h3 id="\u9ED8\u8BA4\u53C2\u6570" tabindex="-1">\u9ED8\u8BA4\u53C2\u6570 <a class="header-anchor" href="#\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u53C2\u6570\u5728 JavaScript \u540C\u6837\u5B58\u5728\uFF0C\u5373\u5728\u53C2\u6570\u540E\u8D4B\u503C\u5373\u53EF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const add = (a: number, b = 10) =&gt; a + b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5269\u4F59\u53C2\u6570" tabindex="-1">\u5269\u4F59\u53C2\u6570 <a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u5269\u4F59\u53C2\u6570\u4E0EJavaScript\u79CD\u7684\u8BED\u6CD5\u7C7B\u4F3C\uFF0C\u9700\u8981\u7528 <code>...</code> \u6765\u8868\u793A\u5269\u4F59\u53C2\u6570\uFF0C\u800C\u5269\u4F59\u53C2\u6570 <code>rest</code> \u5219\u662F\u4E00\u4E2A\u7531number\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5728\u672C\u51FD\u6570\u4E2D\u7528 reduce \u8FDB\u884C\u4E86\u7D2F\u52A0\u6C42\u548C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const add = (a: number, ...rest: number[]) =&gt; rest.reduce(((a, b) =&gt; a + b), a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u91CD\u8F7D\uFF08overload\uFF09" tabindex="-1">\u91CD\u8F7D\uFF08Overload\uFF09 <a class="header-anchor" href="#\u91CD\u8F7D\uFF08overload\uFF09" aria-hidden="true">#</a></h2><p>\u91CD\u8F7D\u8FD9\u4E2A\u6982\u5FF5\u5728\u5F88\u591A\u4F20\u7EDF\u7F16\u8BD1\u8BED\u8A00\u4E2D\u90FD\u5B58\u5728\uFF0C\u5982\u679C\u4F60\u6709\u7C7B\u4F3C Java \u7684\u7ECF\u9A8C\u9759\u5F88\u5BB9\u6613\u7406\u89E3\u3002</p><p>\u90A3\u4E48\u5728 TypeScript \u4E2D\u5B83\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u5148\u770B\u4E00\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function assigned (a: number, b?: number, c?: number, d?: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (b === undefined &amp;&amp; c === undefined &amp;&amp; d === undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      b = c = d = a</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (c === undefined &amp;&amp; d === undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      c = a</span></span>
<span class="line"><span style="color:#A6ACCD;">      d = b</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      top: a,</span></span>
<span class="line"><span style="color:#A6ACCD;">      right: b,</span></span>
<span class="line"><span style="color:#A6ACCD;">      bottom: c,</span></span>
<span class="line"><span style="color:#A6ACCD;">      left: d</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4E0A\u8FF0\u4EE3\u7801\u662F\u6211\u7684\u540C\u4E8B\u5199\u7684\uFF0C\u6211\u53EA\u8D1F\u8D23\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\u6211\u5982\u679C\u4E0D\u770B\u5177\u4F53\u5B9E\u73B0\uFF0C\u53EA\u901A\u8FC7\u4EE3\u7801\u63D0\u793A\u80FD\u641E\u6E05\u695A\u9700\u8981\u4F20\u51E0\u4E2A\u53C2\u6570\u5417\uFF1F\u4F20\u4E0D\u540C\u7684\u53C2\u6570\u5176\u8FD4\u56DE\u503C\u662F\u4E00\u6837\u7684\u5417\uFF1F</p><p>\u5BF9\u4E8E\u6211\u800C\u8A00\uFF0C\u6211\u53EA\u80FD\u53BB\u770B\u8FD9\u4E2A\u51FD\u6570\u7684\u5B9E\u73B0\uFF0C\u6765\u51B3\u5B9A\u6211\u5982\u4F55\u4F20\u53C2\uFF0C\u90A3\u4E48\u4E0A\u8FF0\u51FD\u6570\u5B9E\u73B0\u7B97\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u5982\u679C\u662F\u4E2A\u590D\u6742\u51FD\u6570\u5462\uFF1F\u8FD9\u589E\u52A0\u4E86\u534F\u4F5C\u7684\u6210\u672C\u4E5F\u9020\u6210\u4E86\u7C7B\u578B\u7684\u4E0D\u5B89\u5168\u3002</p><p>\u6BD4\u5982\u4E0A\u9762\u7684\u51FD\u6570\u5B9E\u9645\u4E0A\u53EA\u63A5\u53D71\u30012\u30014\u4E2A\u53C2\u6570\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4F20\u5165\u4E09\u4E2A\uFF0C\u662F\u4E0D\u4F1A\u62A5\u9519\u7684\uFF0C\u8FD9\u5C31\u662F\u7C7B\u578B\u7684\u4E0D\u5B89\u5168\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a6633b1~tplv-t2oaga2asx-image.image" alt="2019-06-25-11-38-38"></p><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0C\u56E0\u6B64\u51FD\u6570\u91CD\u8F7D\u51FA\u73B0\u4E86\u3002</p><p>\u6211\u4EEC\u7528\u540C\u6837\u7684\u51FD\u6570\u540D\u58F0\u660E\u53C2\u6570\u5206\u522B\u4E3A1\u30012\u30014\u60C5\u51B5\u4E0B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u91CD\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">interface Direction {</span></span>
<span class="line"><span style="color:#A6ACCD;">  top: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  bottom?: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  left?: number,</span></span>
<span class="line"><span style="color:#A6ACCD;">  right?: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function assigned(all: number): Direction</span></span>
<span class="line"><span style="color:#A6ACCD;">function assigned(topAndBottom: number, leftAndRight: number): Direction</span></span>
<span class="line"><span style="color:#A6ACCD;">function assigned(top: number, right: number, bottom: number, left: number): Direction</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function assigned (a: number, b?: number, c?: number, d?: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (b === undefined &amp;&amp; c === undefined &amp;&amp; d === undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = c = d = a</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (c === undefined &amp;&amp; d === undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    c = a</span></span>
<span class="line"><span style="color:#A6ACCD;">    d = b</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    top: a,</span></span>
<span class="line"><span style="color:#A6ACCD;">    right: b,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bottom: c,</span></span>
<span class="line"><span style="color:#A6ACCD;">    left: d</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">assigned(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">assigned(1,2)</span></span>
<span class="line"><span style="color:#A6ACCD;">assigned(1,2,3)</span></span>
<span class="line"><span style="color:#A6ACCD;">assigned(1,2,3,4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u6211\u4EEC\u5206\u522B\u4F20\u5165\u4E0D\u540C\u6570\u91CF\u7684\u53C2\u6570\uFF0C\u53D1\u73B0\u53EA\u6709\u4E09\u4E2A\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\u62A5\u9519\u4E86.</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a792df6~tplv-t2oaga2asx-image.image" alt="2019-06-25-13-04-12"></p><p>\u51FD\u6570\u91CD\u8F7D\u5728\u591A\u4EBA\u534F\u4F5C\u9879\u76EE\u6216\u8005\u5F00\u6E90\u5E93\u4E2D\u4F7F\u7528\u975E\u5E38\u9891\u7E41\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u51FD\u6570\u53EF\u80FD\u4F1A\u88AB\u5927\u91CF\u7684\u5F00\u53D1\u8005\u8C03\u7528\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528\u51FD\u6570\u91CD\u8F7D\uFF0C\u90A3\u4E48\u4F1A\u9020\u6210\u989D\u5916\u7684\u9EBB\u70E6\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86\u51FD\u6570\u7C7B\u578B\u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u5176\u4E2D\u6700\u91CD\u8981\u7684\u83AB\u8FC7\u4E8E\u51FD\u6570\u91CD\u8F7D\uFF0C\u867D\u7136\u5728\u666E\u901A\u7684\u5F00\u53D1\u4E2D\u4F7F\u7528\u5230\u8FD9\u4E2A\u529F\u80FD\u7684\u51E0\u7387\u5E76\u4E0D\u5927\uFF0C\u4F46\u662F\u4E00\u65E6\u6D89\u53CA\u591A\u4EBA\u4F7F\u7528\u7684\u5E93\u76F8\u5173\u5F00\u53D1\uFF0C\u51FD\u6570\u91CD\u8F7D\u53EF\u8C13\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u5229\u5668\u3002</p><p>\u503C\u5F97\u4E00\u63D0\u7684\u662F,\u8457\u540D\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5E93 <code>Redux</code> \u7684<a href="https://github.com/reduxjs/redux/blob/26f216e066a2a679d3cae4fb1a5c4e5d15e9fac6/src/compose.ts#L16" target="_blank" rel="noreferrer">compose</a>\u5C31\u662F\u8FD0\u7528\u5927\u91CF\u51FD\u6570\u91CD\u8F7D\u7684\u5178\u578B\u6848\u4F8B,\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u9605\u8BFB\u4E00\u4E0B Redux \u7528 TypeScript \u91CD\u5199\u540E\u7684\u6E90\u7801:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1194a7ec2fd~tplv-t2oaga2asx-image.image" alt="2019-10-07-23-36-08"></p>`,46),c=[l];function t(o,i,r,d,A,C){return n(),a("div",null,c)}const g=s(p,[["render",t]]);export{b as __pageData,g as default};
