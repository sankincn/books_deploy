import{_ as s,c as a,o as n,d as e}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"TypeScript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u91CA\u7684\u5999\u7528","slug":"\u6CE8\u91CA\u7684\u5999\u7528","link":"#\u6CE8\u91CA\u7684\u5999\u7528","children":[]},{"level":2,"title":"\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC","slug":"\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC","link":"#\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC","children":[]},{"level":2,"title":"\u5DE7\u7528\u5143\u7EC4","slug":"\u5DE7\u7528\u5143\u7EC4","link":"#\u5DE7\u7528\u5143\u7EC4","children":[]},{"level":2,"title":"\u5DE7\u7528Omit","slug":"\u5DE7\u7528omit","link":"#\u5DE7\u7528omit","children":[]},{"level":2,"title":"\u8FD0\u7528Record","slug":"\u8FD0\u7528record","link":"#\u8FD0\u7528record","children":[]},{"level":2,"title":"\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F","slug":"\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F","link":"#\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7.md"}'),p={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7.md"},l=e(`<h1 id="typescript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7" tabindex="-1">TypeScript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7 <a class="header-anchor" href="#typescript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7" aria-hidden="true">#</a></h1><hr><h1 id="typescript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7-1" tabindex="-1">TypeScript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7 <a class="header-anchor" href="#typescript\u51E0\u4E2A\u5B9E\u7528\u6280\u5DE7-1" aria-hidden="true">#</a></h1><h2 id="\u6CE8\u91CA\u7684\u5999\u7528" tabindex="-1">\u6CE8\u91CA\u7684\u5999\u7528 <a class="header-anchor" href="#\u6CE8\u91CA\u7684\u5999\u7528" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>/** */</code>\u6765\u6CE8\u91CA TypeScript \u7684\u7C7B\u578B\uFF0C\u5F53\u6211\u4EEC\u5728\u4F7F\u7528\u76F8\u5173\u7C7B\u578B\u7684\u65F6\u5019\u5C31\u4F1A\u6709\u6CE8\u91CA\u7684\u63D0\u793A\uFF0C\u8FD9\u4E2A\u6280\u5DE7\u5728\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\u7684\u65F6\u5019\u5341\u5206\u6709\u7528\uFF0C\u6211\u4EEC\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4E0D\u7528\u53BB\u82B1\u65F6\u95F4\u7FFB\u6587\u6863\u6216\u8005\u8DF3\u9875\u53BB\u770B\u6CE8\u91CA\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb148376ae827~tplv-t2oaga2asx-image.image" alt="2019-06-26-14-47-37"></p><h2 id="\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC" tabindex="-1">\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC <a class="header-anchor" href="#\u5DE7\u7528\u7C7B\u578B\u63A8\u5BFC" aria-hidden="true">#</a></h2><p>TypeScript \u80FD\u6839\u636E\u4E00\u4E9B\u7B80\u5355\u7684\u89C4\u5219\u63A8\u65AD\uFF08\u68C0\u67E5\uFF09\u53D8\u91CF\u7684\u7C7B\u578B\u3002</p><p>\u6BD4\u5982\u4E00\u4E2A\u7B80\u5355\u7684 add \u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function add(a: number, b: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>TypeScript \u5C31\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u4E0E return \u7684\u8FD0\u7B97\u7B26\u63A8\u5BFC\u51FA\u51FD\u6570\u7684\u8FD4\u56DE\u503C</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb14837abf150~tplv-t2oaga2asx-image.image" alt="2019-06-26-15-21-14"></p><p>\u5982\u679C\u60F3\u83B7\u53D6\u51FD\u6570\u6574\u4F53\u7684\u7C7B\u578B\u90A3\u4E48\u53EF\u4EE5\u501F\u52A9 <code>typeof</code></p><blockquote><p>\u6CE8\u610F\u4E0E JavaScript \u4E2D\u7684 typeof \u533A\u5206\u5F00</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type AddFn = typeof add</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136\u4E0A\u8FF0\u60C5\u51B5\u7B97\u662F\u6BD4\u8F83\u7B80\u5355\u7684\u60C5\u51B5\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u5176\u5B9E\u6BD4\u8F83\u590D\u6742\uFF0C\u8FD9\u4E2A\u65F6\u5019\u501F\u52A9\u7C7B\u578B\u63A8\u5BFC\u548C <code>ReturnType</code> \u5C31\u53EF\u4EE5\u5F88\u8F7B\u677E\u5730\u83B7\u53D6\u8FD4\u56DE\u503C\u7C7B\u578B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type returnType = ReturnType&lt;typeof add&gt; // number</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u8FF0\u6280\u5DE7\u5728\u5BF9 redux \u8FDB\u884C\u7F16\u7801\u7684\u65F6\u5019\u975E\u5E38\u9002\u7528\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7701\u7565\u6211\u4EEC\u5927\u91CF\u7684\u91CD\u590D\u4EE3\u7801\uFF0C\u6BD5\u7ADF redux \u7684\u7F16\u7801\u5DE5\u4F5C\u662F\u975E\u5E38\u7E41\u7410\u7684\u3002</p><h2 id="\u5DE7\u7528\u5143\u7EC4" tabindex="-1">\u5DE7\u7528\u5143\u7EC4 <a class="header-anchor" href="#\u5DE7\u7528\u5143\u7EC4" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u6279\u91CF\u7684\u6765\u83B7\u53D6\u53C2\u6570\uFF0C\u5E76\u4E14\u6BCF\u4E00\u4E2A\u53C2\u6570\u7684\u7C7B\u578B\u8FD8\u4E0D\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u58F0\u660E\u4E00\u4E2A\u5143\u7EC4\u5982\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function query(...args:[string, number, boolean]){</span></span>
<span class="line"><span style="color:#A6ACCD;">  const d: string = args[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">  const n: number = args[1];</span></span>
<span class="line"><span style="color:#A6ACCD;">  const b: boolean = args[2];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5DE7\u7528omit" tabindex="-1">\u5DE7\u7528Omit <a class="header-anchor" href="#\u5DE7\u7528omit" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u590D\u7528\u4E00\u4E2A\u7C7B\u578B\uFF0C\u4F46\u662F\u53C8\u4E0D\u9700\u8981\u6B64\u7C7B\u578B\u5185\u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u56E0\u6B64\u9700\u8981\u5254\u9664\u67D0\u4E9B\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u65F6\u5019 <code>Omit</code> \u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface User {</span></span>
<span class="line"><span style="color:#A6ACCD;">    username: string</span></span>
<span class="line"><span style="color:#A6ACCD;">    id: number</span></span>
<span class="line"><span style="color:#A6ACCD;">    token: string</span></span>
<span class="line"><span style="color:#A6ACCD;">    avatar: string</span></span>
<span class="line"><span style="color:#A6ACCD;">    role: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type UserWithoutToken = Omit&lt;User, &#39;token&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5728 React \u4E2D\u7ECF\u5E38\u7528\u5230\uFF0C\u5F53\u7236\u7EC4\u4EF6\u901A\u8FC7 props \u5411\u4E0B\u4F20\u9012\u6570\u636E\u7684\u65F6\u5019\uFF0C\u901A\u5E38\u9700\u8981\u590D\u7528\u7236\u7EC4\u4EF6\u7684 props \u7C7B\u578B\uFF0C\u4F46\u662F\u53C8\u9700\u8981\u5254\u9664\u4E00\u4E9B\u65E0\u7528\u7684\u7C7B\u578B\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb14837a31a2a~tplv-t2oaga2asx-image.image" alt="2019-06-26-16-00-56"></p><h2 id="\u8FD0\u7528record" tabindex="-1">\u8FD0\u7528Record <a class="header-anchor" href="#\u8FD0\u7528record" aria-hidden="true">#</a></h2><p><code>Record</code> \u662F TypeScript \u7684\u4E00\u4E2A\u9AD8\u7EA7\u7C7B\u578B\uFF0C\u4F46\u662F\u76F8\u5173\u7684\u6587\u6863\u5E76\u4E0D\u591A\uFF0C\u6240\u4EE5\u7ECF\u5E38\u88AB\u4EBA\u5FFD\u7565\uFF0C\u4F46\u662F\u662F\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u7684\u9AD8\u7EA7\u7C7B\u578B\u3002</p><p>Record \u5141\u8BB8\u4ECE Union \u7C7B\u578B\u4E2D\u521B\u5EFA\u65B0\u7C7B\u578B\uFF0CUnion \u7C7B\u578B\u4E2D\u7684\u503C\u7528\u4F5C\u65B0\u7C7B\u578B\u7684\u5C5E\u6027\u3002</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u6C7D\u8F66\u54C1\u724C\u5E74\u9F84\u8868\uFF0C\u4E00\u4E0B\u5199\u6CD5\u8C8C\u4F3C\u6CA1\u6709\u95EE\u9898\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Car = &#39;Audi&#39; | &#39;BMW&#39; | &#39;MercedesBenz&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const cars = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Audi: { age: 119 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    BMW: { age: 113 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    MercedesBenz: { age: 133 },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u867D\u7136\u8FD9\u4E2A\u5199\u6CD5\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u6709\u6CA1\u6709\u8003\u8651\u8FC7\u7C7B\u578B\u5B89\u5168\u7684\u95EE\u9898\uFF1F</p><p>\u6BD4\u5982\uFF1A</p><ul><li>\u6211\u4EEC\u5FD8\u8BB0\u5199\u4E86\u4E00\u4E2A\u6C7D\u8F66\u54C1\u724C\uFF0C\u4ED6\u4F1A\u62A5\u9519\u5417\uFF1F</li><li>\u6211\u4EEC\u62FC\u5199\u5C5E\u6027\u540D\u9519\u8BEF\u4E86\uFF0C\u5B83\u4F1A\u62A5\u9519\u5417\uFF1F</li><li>\u6211\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E2A\u975E\u4E0A\u8FF0\u4E09\u4E2A\u54C1\u724C\u7684\u54C1\u724C\u8FDB\u53BB\uFF0C\u4ED6\u4F1A\u62A5\u9519\u5417\uFF1F</li><li>\u6211\u4EEC\u66F4\u6539\u4E86\u5176\u4E2D\u4E00\u4E2A\u54C1\u724C\u7684\u540D\u5B57\uFF0C\u4ED6\u4F1A\u6709\u62A5\u9519\u63D0\u9192\u5417\uFF1F</li></ul><p>\u4E0A\u8FF0\u8FD9\u79CD\u5199\u6CD5\u7EDF\u7EDF\u4E0D\u4F1A\uFF0C\u8FD9\u5C31\u9700\u8981 Record \u7684\u5E2E\u52A9\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">type Car = &#39;Audi&#39; | &#39;BMW&#39; | &#39;MercedesBenz&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">type CarList = Record&lt;Car, {age: number}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const cars: CarList = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Audi: { age: 119 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    BMW: { age: 113 },</span></span>
<span class="line"><span style="color:#A6ACCD;">    MercedesBenz: { age: 133 },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u6211\u4EEC\u62FC\u5199\u9519\u8BEF:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb14837d333b3~tplv-t2oaga2asx-image.image" alt="2019-06-26-17-21-45"></p><p>\u5F53\u6211\u4EEC\u5C11\u4E9B\u4E00\u4E2A\u54C1\u724C:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb148380cc7e6~tplv-t2oaga2asx-image.image" alt="2019-06-26-17-22-18"></p><p>\u5F53\u6211\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E2A\u975E\u7EA6\u5B9A\u597D\u7684\u54C1\u724C\u8FDB\u53BB:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb14838368006~tplv-t2oaga2asx-image.image" alt="2019-06-26-17-23-47"></p><p>\u5728\u5B9E\u6218\u9879\u76EE\u4E2D\u5C3D\u91CF\u591A\u7528 Record\uFF0C\u5B83\u4F1A\u5E2E\u52A9\u4F60\u89C4\u907F\u5F88\u591A\u9519\u8BEF\uFF0C\u5728 vue \u6216\u8005 react \u4E2D\u6709\u5F88\u591A\u573A\u666F\u9009\u62E9 Record \u662F\u66F4\u4F18\u89E3\u3002</p><h2 id="\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F" tabindex="-1">\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F <a class="header-anchor" href="#\u5DE7\u7528\u7C7B\u578B\u7EA6\u675F" aria-hidden="true">#</a></h2><p>\u5728 .tsx \u6587\u4EF6\u91CC\uFF0C\u6CDB\u578B\u53EF\u80FD\u4F1A\u88AB\u5F53\u505A jsx \u6807\u7B7E</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const toArray = &lt;T&gt;(element: T) =&gt; [element]; // Error in .tsx file.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u52A0 extends \u53EF\u7834</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const toArray = &lt;T extends {}&gt;(element: T) =&gt; [element]; // No errors.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u8282\u4ECB\u7ECD\u4E86\u51E0\u4E2A\u5728\u5B9E\u6218\u4E2D\u5B9E\u7528\u7684\u6280\u5DE7\uFF0C\u5F53\u7136\u6211\u4EEC\u7684\u6280\u5DE7\u4E0D\u6B62\u4E0A\u9762\u8FD9\u4E9B\uFF0CTypeScript \u7684\u6280\u5DE7\u5F88\u591A\uFF0C\u6211\u4EEC\u53EA\u662F\u4ECB\u7ECD\u4E86\u6700\u5E38\u7528\u7684\u51E0\u79CD\uFF0C\u5305\u62EC\u4E0A\u4E00\u8282\u7684\u7C7B\u578B\u6620\u5C04\u3001\u6761\u4EF6\u7C7B\u578B\u3001\u7D22\u5F15\u7C7B\u578B\u548C\u51E0\u4E2A\u7C7B\u578B\u64CD\u4F5C\u7B26\u90FD\u662F\u975E\u5E38\u5E38\u7528\u7684\u624B\u6BB5\uFF0C\u5728\u4E86\u89E3\u4E86\u8FD9\u4E9B\u6280\u5DE7\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u5B9E\u6218\u4E2D\u5C0F\u8BD5\u725B\u5200\u4E86\u3002</p>`,50),t=[l];function c(o,r,i,d,g,A){return n(),a("div",null,t)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
