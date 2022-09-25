import{_ as e,c as a,o as c,d as o}from"./app.c4f45da1.js";const b=JSON.parse('{"title":"\u9AD8\u7EA7 10-branch \u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"reflog \uFF1A\u5F15\u7528\u7684 log","slug":"reflog-\uFF1A\u5F15\u7528\u7684-log","link":"#reflog-\uFF1A\u5F15\u7528\u7684-log","children":[]},{"level":2,"title":"\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684 reflog","slug":"\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684-reflog","link":"#\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684-reflog","children":[]}],"relativePath":"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 10-branch \u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F.md"}'),s={name:"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 10-branch \u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F.md"},n=o(`<h1 id="\u9AD8\u7EA7-10-branch-\u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F" tabindex="-1">\u9AD8\u7EA7 10-branch \u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-10-branch-\u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F" aria-hidden="true">#</a></h1><hr><h1 id="\u9AD8\u7EA7-10\uFF1Abranch-\u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F" tabindex="-1">\u9AD8\u7EA7 10\uFF1Abranch \u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-10\uFF1Abranch-\u5220\u8FC7\u4E86\u624D\u60F3\u8D77\u6765\u6709\u7528\uFF1F" aria-hidden="true">#</a></h1><p><code>branch</code> \u7528\u5B8C\u5C31\u5220\u662F\u597D\u4E60\u60EF\uFF0C\u4F46\u6709\u7684\u65F6\u5019\uFF0C\u4E0D\u5C0F\u5FC3\u624B\u6B8B\u5220\u4E86\u4E00\u4E2A\u8FD8\u6709\u7528\u7684 <code>branch</code> \uFF0C\u6216\u8005\u628A\u4E00\u4E2A <code>branch</code> \u5220\u6389\u4E86\u624D\u60F3\u8D77\u6765\u5B83\u8FD8\u6709\u7528\uFF0C\u600E\u4E48\u529E\uFF1F</p><h2 id="reflog-\uFF1A\u5F15\u7528\u7684-log" tabindex="-1">reflog \uFF1A\u5F15\u7528\u7684 log <a class="header-anchor" href="#reflog-\uFF1A\u5F15\u7528\u7684-log" aria-hidden="true">#</a></h2><p><code>reflog</code> \u662F &quot;reference log&quot; \u7684\u7F29\u5199\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u67E5\u770B Git \u4ED3\u5E93\u4E2D\u7684\u5F15\u7528\u7684\u79FB\u52A8\u8BB0\u5F55\u3002\u5982\u679C\u4E0D\u6307\u5B9A\u5F15\u7528\uFF0C\u5B83\u4F1A\u663E\u793A <code>HEAD</code> \u7684\u79FB\u52A8\u8BB0\u5F55\u3002\u5047\u5982\u4F60\u8BEF\u5220\u4E86 <code>branch1</code> \u8FD9\u4E2A <code>branch</code>\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u67E5\u770B\u4E00\u4E0B <code>HEAD</code> \u7684\u79FB\u52A8\u5386\u53F2\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fe3de05468c613~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C<code>HEAD</code> \u7684\u6700\u540E\u4E00\u6B21\u79FB\u52A8\u884C\u4E3A\u662F\u300C\u4ECE <code>branch1</code> \u79FB\u52A8\u5230 <code>master</code>\u300D\u3002\u800C\u5728\u8FD9\u4E4B\u540E\uFF0C<code>branch1</code> \u5C31\u88AB\u5220\u9664\u4E86\u3002\u6240\u4EE5\u5B83\u4E4B\u524D\u7684\u90A3\u4E2A <code>commit</code> \u5C31\u662F <code>branch1</code> \u88AB\u5220\u9664\u4E4B\u524D\u7684\u4F4D\u7F6E\u4E86\uFF0C\u4E5F\u5C31\u662F\u7B2C\u4E8C\u884C\u7684 <code>c08de9a</code>\u3002</p><p>\u6240\u4EE5\u73B0\u5728\u5C31\u53EF\u4EE5\u5207\u6362\u56DE <code>c08de9a</code>\uFF0C\u7136\u540E\u91CD\u65B0\u521B\u5EFA <code>branch1</code> \uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout c08de9a</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b branch1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u4F60\u521A\u5220\u9664\u7684 <code>branch1</code> \u5C31\u627E\u56DE\u6765\u4E86\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u4E0D\u518D\u88AB\u5F15\u7528\u76F4\u63A5\u6216\u95F4\u63A5\u6307\u5411\u7684 <code>commit</code>s \u4F1A\u5728\u4E00\u5B9A\u65F6\u95F4\u540E\u88AB Git \u56DE\u6536\uFF0C\u6240\u4EE5\u4F7F\u7528 <code>reflog</code> \u6765\u627E\u56DE\u5220\u9664\u7684 <code>branch</code> \u7684\u64CD\u4F5C\u4E00\u5B9A\u8981\u53CA\u65F6\uFF0C\u4E0D\u7136\u6709\u53EF\u80FD\u4F1A\u7531\u4E8E <code>commit</code> \u88AB\u56DE\u6536\u800C\u518D\u4E5F\u627E\u4E0D\u56DE\u6765\u3002</p></blockquote><h2 id="\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684-reflog" tabindex="-1">\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684 reflog <a class="header-anchor" href="#\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684-reflog" aria-hidden="true">#</a></h2><p><code>reflog</code> \u9ED8\u8BA4\u67E5\u770B <code>HEAD</code> \u7684\u79FB\u52A8\u5386\u53F2\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u52A0\u4E0A\u540D\u79F0\u6765\u67E5\u770B\u5176\u4ED6\u5F15\u7528\u7684\u79FB\u52A8\u5386\u53F2\uFF0C\u4F8B\u5982\u67D0\u4E2A <code>branch</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git reflog master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fe3de0548714c7~tplv-t2oaga2asx-image.image" alt=""></p>`,17),d=[n];function r(l,t,p,i,h,g){return c(),a("div",null,d)}const f=e(s,[["render",r]]);export{b as __pageData,f as default};
