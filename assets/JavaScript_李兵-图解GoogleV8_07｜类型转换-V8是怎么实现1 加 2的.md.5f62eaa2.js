import{_ as a,c as s,o as n,d as p}from"./app.c4f45da1.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \u674E\u5175-\u56FE\u89E3GoogleV8","slug":"title-\u674E\u5175-\u56FE\u89E3googlev8","link":"#title-\u674E\u5175-\u56FE\u89E3googlev8","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF(Type System)\uFF1F","slug":"\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF-type-system-\uFF1F","link":"#\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF-type-system-\uFF1F","children":[]},{"level":2,"title":"V8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F","slug":"v8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F","link":"#v8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u601D\u8003\u9898","slug":"\u601D\u8003\u9898","link":"#\u601D\u8003\u9898","children":[]}],"relativePath":"JavaScript/\u674E\u5175-\u56FE\u89E3GoogleV8/07\uFF5C\u7C7B\u578B\u8F6C\u6362-V8\u662F\u600E\u4E48\u5B9E\u73B01 \u52A0 2\u7684.md"}'),l={name:"JavaScript/\u674E\u5175-\u56FE\u89E3GoogleV8/07\uFF5C\u7C7B\u578B\u8F6C\u6362-V8\u662F\u600E\u4E48\u5B9E\u73B01 \u52A0 2\u7684.md"},e=p(`<hr><h2 id="title-\u674E\u5175-\u56FE\u89E3googlev8" tabindex="-1">title: \u674E\u5175-\u56FE\u89E3GoogleV8 <a class="header-anchor" href="#title-\u674E\u5175-\u56FE\u89E3googlev8" aria-hidden="true">#</a></h2><p>07\uFF5C\u7C7B\u578B\u8F6C\u6362\uFF1AV8\u662F\u600E\u4E48\u5B9E\u73B01+\u201C2\u201D\u7684\uFF1F</p><p>\u4F60\u597D\uFF0C\u6211\u662F\u674E\u5175\u3002</p><p>\u524D\u9762\u6211\u4EEC\u82B1\u4E86\u5F88\u591A\u7BC7\u5E45\u804A\u4E86JavaScript\u4E2D\u6700\u57FA\u7840\u5374\u5F88\u5BB9\u6613\u88AB\u5FFD\u7565\u7684\u201C\u5BF9\u8C61\u201D\uFF0C\u4EE5\u53CAV8\u662F\u600E\u4E48\u5904\u7406\u201C\u5BF9\u8C61\u201D\u7684\uFF0C\u4ECA\u5929\u6211\u4EEC\u7EE7\u7EED\u6765\u804A\u53E6\u4E00\u4E2A\u975E\u5E38\u57FA\u7840\uFF0C\u540C\u65F6\u4E5F\u662F\u5F88\u5BB9\u6613\u88AB\u5927\u5BB6\u5FFD\u7565\u7684\u95EE\u9898\uFF0C\u90A3\u5C31\u662FJavaScript\u4E2D\u7684\u201C\u7C7B\u578B\u7CFB\u7EDF\u201D\u3002</p><p>\u5728\u7406\u89E3\u8FD9\u4E2A\u6982\u5FF5\u4E4B\u524D\uFF0C\u4F60\u53EF\u4EE5\u5148\u601D\u8003\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u8FBE\u5F0F\uFF0C\u90A3\u5C31\u662F\u5728JavaScript\u4E2D\uFF0C\u201C1+\u20182\u2019\u7B49\u4E8E\u591A\u5C11\uFF1F\u201D</p><p>\u5176\u5B9E\u8FD9\u76F8\u5F53\u4E8E\u662F\u5728\u95EE\uFF0C\u5728JavaScript\u4E2D\uFF0C\u8BA9\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u76F8\u52A0\u662F\u4F1A\u62A5\u9519\uFF0C\u8FD8\u662F\u53EF\u4EE5\u6B63\u786E\u6267\u884C\u3002\u5982\u679C\u80FD\u6B63\u786E\u6267\u884C\uFF0C\u90A3\u4E48\u7ED3\u679C\u662F\u7B49\u4E8E\u6570\u5B573\uFF0C\u8FD8\u662F\u5B57\u7B26\u4E32\u201C3\u201D\uFF0C\u8FD8\u662F\u5B57\u7B26\u4E32\u201C12\u201D\u5462\uFF1F</p><p>\u5982\u679C\u4F60\u5C1D\u8BD5\u5728Python\u4E2D\u4F7F\u7528\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u8FDB\u884C\u76F8\u52A0\u64CD\u4F5C\uFF0C\u90A3\u4E48Python\u865A\u62DF\u673A\u4F1A\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u6267\u884C\u9519\u8BEF\uFF0C\u9519\u8BEF\u63D0\u793A\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; 1+&#39;2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Traceback (most recent call last):</span></span>
<span class="line"><span style="color:#A6ACCD;">  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">TypeError: unsupported operand type(s) for +: &#39;int&#39; and &#39;str&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6BB5\u9519\u8BEF\u4EE3\u7801\u63D0\u793A\u4E86\u8FD9\u662F\u4E2A\u7C7B\u578B\u9519\u8BEF\uFF0C\u8868\u660EPython\u5E76\u4E0D\u652F\u6301\u6570\u5B57\u7C7B\u578B\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u76F8\u52A0\u7684\u64CD\u4F5C\u3002</p><p>\u4E0D\u8FC7\u5728JavaScript\u4E2D\u6267\u884C\u8FD9\u6BB5\u8868\u8FBE\u5F0F\uFF0C\u662F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\u7684\uFF0C\u6700\u7EC8\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u5B57\u7B26\u4E32\u201C12\u201D\u3002</p><p>\u6700\u7EC8\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; 1+&#39;2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; &quot;12&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E3A\u4EC0\u4E48\u540C\u6837\u4E00\u6761\u7684\u8868\u8FBE\u5F0F\uFF0C\u5728Python\u548CJavaScript\u4E2D\u6267\u884C\u4F1A\u6709\u4E0D\u540C\u7684\u7ED3\u679C\uFF1F\u4E3A\u4EC0\u4E48\u5728JavaScript\u4E2D\u6267\u884C\uFF0C\u8F93\u51FA\u7684\u662F\u5B57\u7B26\u4E32\u201C12\u201D\uFF0C\u4E0D\u662F\u6570\u5B573\u6216\u8005\u5B57\u7B26\u4E32\u201C3\u201D\u5462\uFF1F</p><h2 id="\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF-type-system-\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF(Type System)\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7C7B\u578B\u7CFB\u7EDF-type-system-\uFF1F" aria-hidden="true">#</a></h2><p>\u5728\u8FD9\u4E2A\u7B80\u5355\u7684\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u6D89\u53CA\u5230\u4E86\u4E24\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u7684\u76F8\u52A0\u3002\u8981\u60F3\u7406\u6E05\u4EE5\u4E0A\u4E24\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u77E5\u9053\u7C7B\u578B\u7684\u6982\u5FF5\uFF0C\u4EE5\u53CAJavaScript\u64CD\u4F5C\u7C7B\u578B\u7684\u7B56\u7565\u3002</p><p>\u5BF9\u673A\u5668\u8BED\u8A00\u6765\u8BF4\uFF0C\u6240\u6709\u7684\u6570\u636E\u90FD\u662F\u4E00\u5806\u4E8C\u8FDB\u5236\u4EE3\u7801\uFF0CCPU\u5904\u7406\u8FD9\u4E9B\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5E76\u6CA1\u6709\u7C7B\u578B\u7684\u6982\u5FF5\uFF0CCPU\u6240\u505A\u7684\u4EC5\u4EC5\u662F\u79FB\u52A8\u6570\u636E\uFF0C\u6BD4\u5982\u5BF9\u5176\u8FDB\u884C\u79FB\u4F4D\uFF0C\u76F8\u52A0\u6216\u76F8\u4E58\u3002</p><p>\u800C\u5728\u9AD8\u7EA7\u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u90FD\u4F1A\u4E3A\u64CD\u4F5C\u7684\u6570\u636E\u8D4B\u4E88\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u7C7B\u578B\u53EF\u4EE5\u786E\u8BA4\u4E00\u4E2A\u503C\u6216\u8005\u4E00\u7EC4\u503C\u5177\u6709\u7279\u5B9A\u7684\u610F\u4E49\u548C\u76EE\u7684\u3002\u6240\u4EE5\uFF0C\u7C7B\u578B\u662F\u9AD8\u7EA7\u8BED\u8A00\u4E2D\u7684\u6982\u5FF5\u3002</p><p><img src="https://static001.geekbang.org/resource/image/e0/3f/e0dfa246212ec1070ac8aac6bc0f1a3f.jpg" alt=""></p><p>\u6BD4\u5982\u5728C/C++\u4E2D\uFF0C\u4F60\u9700\u8981\u4E3A\u8981\u5904\u7406\u7684\u6BCF\u6761\u6570\u636E\u6307\u5B9A\u7C7B\u578B\uFF0C\u8FD9\u6837\u5B9A\u4E49\u53D8\u91CF\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">int counter = 100 # \u8D4B\u503C\u6574\u578B\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">float miles = 1000.0 # \u6D6E\u70B9\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">char* name = &quot;John&quot; # \u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>C/C++\u7F16\u8BD1\u5668\u8D1F\u8D23\u5C06\u8FD9\u4E9B\u6570\u636E\u7247\u6BB5\u8F6C\u6362\u4E3A\u4F9BCPU\u5904\u7406\u7684\u6B63\u786E\u547D\u4EE4\uFF0C\u901A\u5E38\u662F\u4E8C\u8FDB\u5236\u7684\u673A\u5668\u4EE3\u7801\u3002</p><p>\u5728\u67D0\u4E9B\u66F4\u9AD8\u7EA7\u7684\u8BED\u8A00\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u6570\u636E\u63A8\u65AD\u51FA\u7C7B\u578B\uFF0C\u6BD4\u5982\u5728Python\u6216JavaScript\u4E2D\uFF0C\u4F60\u5C31\u4E0D\u5FC5\u4E3A\u6570\u636E\u6307\u5B9A\u4E13\u95E8\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5728Python\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\u53D8\u91CF\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">counter = 100 # \u8D4B\u503C\u6574\u578B\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">miles = 1000.0 # \u6D6E\u70B9\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">name = &quot;John&quot; # \u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728JavaScript\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49\u53D8\u91CF\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var counter = 100 # \u8D4B\u503C\u6574\u578B\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">let miles = 1000.0 # \u6D6E\u70B9\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">const name = &quot;John&quot; # \u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u867D\u7136Python\u548CJavaScript\u5B9A\u4E49\u53D8\u91CF\u7684\u65B9\u5F0F\u4E0D\u540C\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u4E0D\u9700\u8981\u76F4\u63A5\u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u56E0\u4E3A\u865A\u62DF\u673A\u4F1A\u6839\u636E\u6570\u636E\u81EA\u52A8\u63A8\u5BFC\u51FA\u7C7B\u578B\u3002</p><p>\u901A\u7528\u7684\u7C7B\u578B\u6709\u6570\u5B57\u7C7B\u578B\u3001\u5B57\u7B26\u4E32\u3001Boolean\u7C7B\u578B\u7B49\u7B49\uFF0C\u5F15\u5165\u4E86\u8FD9\u4E9B\u7C7B\u578B\u4E4B\u540E\uFF0C\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u5C31\u53EF\u4EE5\u6839\u636E\u7C7B\u578B\u6765\u9650\u5236\u4E00\u4E9B\u6709\u5BB3\u7684\u6216\u8005\u6CA1\u6709\u610F\u4E49\u7684\u64CD\u4F5C\u3002</p><p>\u6BD4\u5982\u5728Python\u8BED\u8A00\u4E2D\uFF0C\u5982\u679C\u4F7F\u7528\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u76F8\u52A0\u5C31\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3APython\u89C9\u5F97\u8FD9\u662F\u6CA1\u6709\u610F\u4E49\u7684\u3002\u800C\u5728JavaScript\u4E2D\uFF0C\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u76F8\u52A0\u662F\u6709\u610F\u4E49\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u8FDB\u884C\u76F8\u52A0\u7684\u3002\u518D\u6BD4\u5982\uFF0C\u4F60\u8BA9\u4E00\u4E2A\u5B57\u7B26\u4E32\u548C\u4E00\u4E2A\u5B57\u7B26\u4E32\u76F8\u4E58\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u6240\u6709\u8BED\u8A00\u51E0\u4E4E\u90FD\u4F1A\u7981\u6B62\u8BE5\u64CD\u4F5C\u3002</p><p>\u6BCF\u79CD\u8BED\u8A00\u90FD\u5B9A\u4E49\u4E86\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u8FD8\u5B9A\u4E49\u4E86\u5982\u4F55\u64CD\u4F5C\u8FD9\u4E9B\u7C7B\u578B\uFF0C\u53E6\u5916\u8FD8\u5B9A\u4E49\u4E86\u8FD9\u4E9B\u7C7B\u578B\u5E94\u8BE5\u5982\u4F55\u76F8\u4E92\u4F5C\u7528\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u79F0\u4E3A<strong>\u7C7B\u578B\u7CFB\u7EDF</strong>\u3002</p><p>\u5173\u4E8E\u7C7B\u578B\u7CFB\u7EDF\uFF0C<a href="https://zh.wikipedia.org/zh-cn/%E9%A1%9E%E5%9E%8B%E7%B3%BB%E7%B5%B1" target="_blank" rel="noreferrer">wiki\u767E\u79D1</a>\u4E0A\u662F\u8FD9\u6837\u89E3\u91CA\u7684\uFF1A</p><blockquote><p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u7C7B\u578B\u7CFB\u7EDF\uFF08type system\uFF09\u7528\u4E8E\u5B9A\u4E49\u5982\u4F55\u5C06\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u6570\u503C\u548C\u8868\u8FBE\u5F0F\u5F52\u7C7B\u4E3A\u8BB8\u591A\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u5982\u4F55\u64CD\u4F5C\u8FD9\u4E9B\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u7C7B\u578B\u5982\u4F55\u4E92\u76F8\u4F5C\u7528\u3002</p></blockquote><p>\u76F4\u89C2\u5730\u7406\u89E3\uFF0C\u4E00\u95E8\u8BED\u8A00\u7684\u7C7B\u578B\u7CFB\u7EDF\u5B9A\u4E49\u4E86\u5404\u79CD\u7C7B\u578B\u4E4B\u95F4\u5E94\u8BE5\u5982\u4F55\u76F8\u4E92\u64CD\u4F5C\uFF0C\u6BD4\u5982\uFF0C\u4E24\u79CD\u4E0D\u540C\u7C7B\u578B\u76F8\u52A0\u5E94\u8BE5\u5982\u4F55\u5904\u7406\uFF0C\u4E24\u79CD\u76F8\u540C\u7684\u7C7B\u578B\u76F8\u52A0\u53C8\u5E94\u8BE5\u5982\u4F55\u5904\u7406\u7B49\u3002\u8FD8\u89C4\u5B9A\u4E86\u5404\u79CD\u4E0D\u540C\u7C7B\u578B\u5E94\u8BE5\u5982\u4F55\u76F8\u4E92\u8F6C\u6362\uFF0C\u6BD4\u5982\u5B57\u7B26\u4E32\u7C7B\u578B\u5982\u4F55\u8F6C\u6362\u4E3A\u6570\u5B57\u7C7B\u578B\u3002</p><p>\u4E00\u4E2A\u8BED\u8A00\u7684\u7C7B\u578B\u7CFB\u7EDF\u8D8A\u5F3A\u5927\uFF0C\u90A3\u7F16\u8BD1\u5668\u80FD\u5E2E\u7A0B\u5E8F\u5458\u68C0\u67E5\u7684\u4E1C\u897F\u5C31\u8D8A\u591A\uFF0C\u7A0B\u5E8F\u5458\u5B9A\u4E49\u201C\u68C0\u67E5\u89C4\u5219\u201D\u7684\u65B9\u5F0F\u5C31\u8D8A\u7075\u6D3B\u3002</p><h2 id="v8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F" tabindex="-1">V8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F <a class="header-anchor" href="#v8\u662F\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\uFF1F" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u4E86JavaScript\u4E2D\u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u6765\u770B\u770BV8\u662F\u600E\u4E48\u5904\u74061+\u201C2\u201D\u7684\u4E86\u3002</p><p>\u5F53\u6709\u4E24\u4E2A\u503C\u76F8\u52A0\u7684\u65F6\u5019\uFF0C\u6BD4\u5982:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">a+b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>V8\u4F1A\u4E25\u683C\u6839\u636EECMAScript\u89C4\u8303\u6765\u6267\u884C\u64CD\u4F5C\u3002ECMAScript\u662F\u4E00\u4E2A\u8BED\u8A00\u6807\u51C6\uFF0CJavaScript\u5C31\u662FECMAScript\u7684\u4E00\u4E2A\u5B9E\u73B0\uFF0C\u6BD4\u5982\u5728ECMAScript\u5C31\u5B9A\u4E49\u4E86\u600E\u4E48\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/2d/98/2d483835d08d2a9d5143d26e09ad4a98.png" alt="" title="ECMAScript\u5B9A\u4E49\u52A0\u6CD5\u8BED\u4E49"></p><p>\u5177\u4F53\u7EC6\u8282\u4F60\u4E5F\u53EF\u4EE5<a href="https://www.ecma-international.org/ecma-262/6.0/index.html#sec-addition-operator-plus-runtime-semantics-evaluation" target="_blank" rel="noreferrer">\u53C2\u8003\u89C4\u8303</a>\uFF0C\u6211\u5C06\u6807\u51C6\u5B9A\u4E49\u7684\u5185\u5BB9\u7FFB\u8BD1\u5982\u4E0B\uFF1A</p><blockquote><p>AdditiveExpression : AdditiveExpression + MultiplicativeExpression</p></blockquote><ol><li>\u628A\u7B2C\u4E00\u4E2A\u8868\u8FBE\u5F0F(AdditiveExpression)\u7684\u503C\u8D4B\u503C\u7ED9\u5DE6\u5F15\u7528(lref)\u3002</li><li>\u4F7F\u7528GetValue(lref)\u83B7\u53D6\u5DE6\u5F15\u7528(lref)\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u8D4B\u503C\u7ED9\u5DE6\u503C\u3002</li><li>\u4F7F\u7528<a href="https://www.ecma-international.org/ecma-262/6.0/index.html#sec-returnifabrupt" target="_blank" rel="noreferrer">ReturnIfAbrupt</a>(lval)\u5982\u679C\u62A5\u9519\u5C31\u8FD4\u56DE\u9519\u8BEF\u3002</li><li>\u628A\u7B2C\u4E8C\u4E2A\u8868\u8FBE\u5F0F(MultiplicativeExpression)\u7684\u503C\u8D4B\u503C\u7ED9\u53F3\u5F15\u7528(rref)\u3002</li><li>\u4F7F\u7528GetValue(rref)\u83B7\u53D6\u53F3\u5F15\u7528(rref)\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u8D4B\u503C\u7ED9rval\u3002</li><li>\u4F7F\u7528<a href="https://www.ecma-international.org/ecma-262/6.0/index.html#sec-returnifabrupt" target="_blank" rel="noreferrer">ReturnIfAbrupt</a>(rval)\u5982\u679C\u62A5\u9519\u5C31\u8FD4\u56DE\u9519\u8BEF\u3002</li><li>\u4F7F\u7528ToPrimitive(lval)\u83B7\u53D6\u5DE6\u503C(lval)\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u5C06\u5176\u8D4B\u503C\u7ED9\u5DE6\u539F\u751F\u503C(lprim)\u3002</li><li>\u4F7F\u7528ToPrimitive(rval)\u83B7\u53D6\u53F3\u503C(rval)\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u5E76\u5C06\u5176\u8D4B\u503C\u7ED9\u53F3\u539F\u751F\u503C(rprim)\u3002</li><li>\u5982\u679CType(lprim)\u548CType(rprim)\u4E2D\u6709\u4E00\u4E2A\u662FString\uFF0C\u5219\uFF1A<br> a. \u628AToString(lprim)\u7684\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u5B57\u7B26\u4E32(lstr)\uFF1B<br> b. \u628AToString(rprim)\u7684\u7ED3\u679C\u8D4B\u7ED9\u53F3\u5B57\u7B26\u4E32(rstr)\uFF1B<br> c. \u8FD4\u56DE\u5DE6\u5B57\u7B26\u4E32(lstr)\u548C\u53F3\u5B57\u7B26\u4E32(rstr)\u62FC\u63A5\u7684\u5B57\u7B26\u4E32\u3002</li><li>\u628AToNumber(lprim)\u7684\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u6570\u5B57(lnum)\u3002</li><li>\u628AToNumber(rprim)\u7684\u7ED3\u679C\u8D4B\u7ED9\u53F3\u6570\u5B57(rnum)\u3002</li><li>\u8FD4\u56DE\u5DE6\u6570\u5B57(lnum)\u548C\u53F3\u6570\u5B57(rnum)\u76F8\u52A0\u7684\u6570\u503C\u3002</li></ol><p>\u901A\u4FD7\u5730\u7406\u89E3\uFF0CV8\u4F1A\u63D0\u4F9B\u4E86\u4E00\u4E2AToPrimitive\u65B9\u6CD5\uFF0C\u5176\u4F5C\u7528\u662F\u5C06a\u548Cb\u8F6C\u6362\u4E3A\u539F\u751F\u6570\u636E\u7C7B\u578B\uFF0C\u5176\u8F6C\u6362\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u5148\u68C0\u6D4B\u8BE5\u5BF9\u8C61\u4E2D\u662F\u5426\u5B58\u5728valueOf\u65B9\u6CD5\uFF0C\u5982\u679C\u6709\u5E76\u8FD4\u56DE\u4E86\u539F\u59CB\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u8BE5\u503C\u8FDB\u884C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF1B</li><li>\u5982\u679CvalueOf\u6CA1\u6709\u8FD4\u56DE\u539F\u59CB\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528toString\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\uFF1B</li><li>\u5982\u679CvauleOf\u548CtoString\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4E0D\u8FD4\u56DE\u57FA\u672C\u7C7B\u578B\u503C\uFF0C\u4FBF\u4F1A\u89E6\u53D1\u4E00\u4E2ATypeError\u7684\u9519\u8BEF\u3002</li></ul><p>\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u751F\u7C7B\u578B\u7684\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/d1/aa/d150309b74f2c06e66011cf3e177dbaa.jpg" alt=""></p><p>\u5F53V8\u6267\u884C1+\u201C2\u201D\u65F6\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E24\u4E2A\u539F\u59CB\u503C\u76F8\u52A0\uFF0C\u539F\u59CB\u503C\u76F8\u52A0\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u9879\u662F\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48V8\u4F1A\u9ED8\u8BA4\u5C06\u53E6\u5916\u4E00\u4E2A\u503C\u4E5F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F8\u5F53\u4E8E\u6267\u884C\u4E86\u4E0B\u9762\u7684\u64CD\u4F5C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Number(1).toString() + &quot;2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\uFF0C\u628A\u6570\u5B571\u5077\u5077\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u201C1\u201D\u7684\u8FC7\u7A0B\u4E5F\u79F0\u4E3A\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u8F6C\u6362\u662F\u9690\u5F0F\u7684\uFF0C\u6240\u4EE5\u5982\u679C\u6211\u4EEC\u4E0D\u719F\u6089\u8BED\u4E49\uFF0C\u90A3\u4E48\u5C31\u5F88\u5BB9\u6613\u5224\u65AD\u9519\u8BEF\u3002</p><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u518D\u770B\u4E00\u4E2A\u4F8B\u5B50\u6765\u9A8C\u8BC1\u4E0A\u9762\u6D41\u7A0B\uFF0C\u4F60\u53EF\u4EE5\u770B\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var Obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    toString() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return &#39;200&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, </span></span>
<span class="line"><span style="color:#A6ACCD;">    valueOf() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return 100</span></span>
<span class="line"><span style="color:#A6ACCD;">    }   </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Obj+3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6267\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u89C9\u5F97\u5E94\u8BE5\u8FD4\u56DE\u4EC0\u4E48\u5185\u5BB9\u5462\uFF1F</p><p>\u4E0A\u9762\u6211\u4EEC\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u7531\u4E8E\u9700\u8981\u5148\u4F7F\u7528ToPrimitive\u65B9\u6CD5\u5C06Obj\u8F6C\u6362\u4E3A\u539F\u751F\u7C7B\u578B\uFF0C\u800CToPrimitive\u4F1A\u4F18\u5148\u8C03\u7528\u5BF9\u8C61\u4E2D\u7684valueOf\u65B9\u6CD5\uFF0C\u7531\u4E8EvalueOf\u8FD4\u56DE\u4E86100\uFF0C\u90A3\u4E48Obj\u5C31\u4F1A\u88AB\u8F6C\u6362\u4E3A\u6570\u5B57100\uFF0C\u90A3\u4E48\u6570\u5B57100\u52A0\u6570\u5B573\uFF0C\u90A3\u4E48\u7ED3\u679C\u5F53\u7136\u662F103\u4E86\u3002</p><p>\u5982\u679C\u6211\u6539\u9020\u4E0B\u4EE3\u7801\uFF0C\u8BA9valueOf\u65B9\u6CD5\u548CtoString\u65B9\u6CD5\u90FD\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u5176\u6539\u9020\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var Obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    toString() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Object()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, </span></span>
<span class="line"><span style="color:#A6ACCD;">    valueOf() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Object()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }   </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Obj+3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u6267\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u89C9\u5F97\u5E94\u8BE5\u8FD4\u56DE\u4EC0\u4E48\u5185\u5BB9\u5462\uFF1F</p><p>\u56E0\u4E3AToPrimitive\u4F1A\u5148\u8C03\u7528valueOf\u65B9\u6CD5\uFF0C\u53D1\u73B0\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u4E0D\u662F\u539F\u751F\u7C7B\u578B\uFF0C\u5F53ToPrimitive\u7EE7\u7EED\u8C03\u7528toString\u65B9\u6CD5\u65F6\uFF0C\u53D1\u73B0toString\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90FD\u662F\u5BF9\u8C61\uFF0C\u5C31\u65E0\u6CD5\u6267\u884C\u76F8\u52A0\u8FD0\u7B97\u4E86\uFF0C\u8FD9\u65F6\u5019\u865A\u62DF\u673A\u5C31\u4F1A\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38\uFF0C\u5F02\u5E38\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">VM263:9 Uncaught TypeError: Cannot convert object to primitive value</span></span>
<span class="line"><span style="color:#A6ACCD;">    at &lt;anonymous&gt;:9:6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63D0\u793A\u7684\u662F\u7C7B\u578B\u9519\u8BEF\uFF0C\u9519\u8BEF\u539F\u56E0\u662F\u65E0\u6CD5\u5C06\u5BF9\u8C61\u7C7B\u578B\u8F6C\u6362\u4E3A\u539F\u751F\u7C7B\u578B\u3002</p><p>\u6240\u4EE5\u8BF4\uFF0C\u5728\u6267\u884C\u52A0\u6CD5\u64CD\u4F5C\u7684\u65F6\u5019\uFF0CV8\u4F1A\u901A\u8FC7ToPrimitive\u65B9\u6CD5\u5C06\u5BF9\u8C61\u7C7B\u578B\u8F6C\u6362\u4E3A\u539F\u751F\u7C7B\u578B\uFF0C\u6700\u540E\u5C31\u662F\u4E24\u4E2A\u539F\u751F\u7C7B\u578B\u76F8\u52A0\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\u662F\u5B57\u7B26\u4E32\u65F6\uFF0C\u5219\u53E6\u4E00\u4E2A\u503C\u4E5F\u9700\u8981\u5F3A\u5236\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u505A\u5B57\u7B26\u4E32\u7684\u8FDE\u63A5\u8FD0\u7B97\u3002\u5728\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u6240\u6709\u7684\u503C\u90FD\u4F1A\u8F6C\u6362\u4E3A\u6570\u5B57\u7C7B\u578B\u503C\uFF0C\u7136\u540E\u505A\u6570\u5B57\u7684\u76F8\u52A0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4ECA\u5929\u6211\u4EEC\u4E3B\u8981\u5B66\u4E60\u4E86JavaScript\u4E2D\u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u600E\u4E48\u5DE5\u4F5C\u7684\u3002\u7C7B\u578B\u7CFB\u7EDF\u5B9A\u4E49\u4E86\u8BED\u8A00\u5E94\u5F53\u5982\u4F55\u64CD\u4F5C\u7C7B\u578B\uFF0C\u4EE5\u53CA\u8FD9\u4E9B\u7C7B\u578B\u5982\u4F55\u4E92\u76F8\u4F5C\u7528\u3002\u56E0\u4E3APython\u548CJavaScript\u7684\u7C7B\u578B\u7CFB\u7EDF\u5DEE\u5F02\uFF0C\u6240\u4EE5\u5F53\u5904\u7406\u540C\u6837\u7684\u8868\u8FBE\u5F0F\u65F6\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E0D\u540C\u7684\u3002</p><p>\u5728Python\u4E2D\uFF0C\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u76F8\u52A0\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u8FD9\u662F\u56E0\u4E3APython\u8BA4\u4E3A\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u76F8\u52A0\u662F\u65E0\u610F\u4E49\u7684\uFF0C\u6240\u4EE5\u9650\u5236\u5176\u64CD\u4F5C\u3002</p><p>\u5728JavaScript\u4E2D\uFF0C\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u76F8\u52A0\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD9\u662F\u56E0\u4E3AJavaScript\u8BA4\u4E3A\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u76F8\u52A0\u662F\u6709\u610F\u4E49\u7684\uFF0CV8\u4F1A\u5C06\u5176\u4E2D\u7684\u6570\u5B57\u8F6C\u6362\u4E3A\u5B57\u7B26\uFF0C\u7136\u540E\u6267\u884C\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u76F8\u52A0\u64CD\u4F5C\uFF0C\u6700\u7EC8\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u5728JavaScript\u4E2D\uFF0C\u7C7B\u578B\u7CFB\u7EDF\u662F\u4F9D\u636EECMAScript\u6807\u51C6\u6765\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5V8\u4F1A\u4E25\u683C\u6839\u636EECMAScript\u6807\u51C6\u6765\u6267\u884C\u3002\u5728\u6267\u884C\u52A0\u6CD5\u8FC7\u7A0B\u4E2D\uFF0CV8\u4F1A\u5148\u901A\u8FC7ToPrimitive\u51FD\u6570\uFF0C\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A\u539F\u751F\u7684\u5B57\u7B26\u4E32\u6216\u8005\u662F\u6570\u5B57\u7C7B\u578B\uFF0C\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\uFF0CToPrimitive\u4F1A\u5148\u8C03\u7528\u5BF9\u8C61\u7684valueOf\u65B9\u6CD5\uFF0C\u5982\u679C\u6CA1\u6709valueOf\u65B9\u6CD5\uFF0C\u5219\u8C03\u7528toString\u65B9\u6CD5\uFF0C\u5982\u679CvauleOf\u548CtoString\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4E0D\u8FD4\u56DE\u57FA\u672C\u7C7B\u578B\u503C\uFF0C\u4FBF\u4F1A\u89E6\u53D1\u4E00\u4E2ATypeError\u7684\u9519\u8BEF\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1">\u601D\u8003\u9898 <a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E00\u8D77\u6765\u5206\u6790\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var Obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    toString() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return &quot;200&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, </span></span>
<span class="line"><span style="color:#A6ACCD;">    valueOf() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return 100</span></span>
<span class="line"><span style="color:#A6ACCD;">    }   </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Obj+&quot;3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F60\u89C9\u5F97\u6267\u884C\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u6253\u5370\u51FA\u4EC0\u4E48\u5185\u5BB9\u5462\uFF1F\u6B22\u8FCE\u4F60\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u8BA8\u8BBA\u3002</p><p>\u611F\u8C22\u4F60\u7684\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u4E00\u8BB2\u7684\u5185\u5BB9\u5BF9\u4F60\u6709\u6240\u542F\u53D1\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u4F60\u7684\u670B\u53CB\u3002</p>`,71),t=[e];function o(r,i,c,C,A,u){return n(),s("div",null,t)}const y=a(l,[["render",o]]);export{g as __pageData,y as default};
