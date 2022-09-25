import{_ as s,c as n,o as a,d as l}from"./app.c4f45da1.js";const i=JSON.parse('{"title":"\u5E94\u7528\u7BC7 2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28","slug":"\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28","link":"#\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28","children":[]},{"level":2,"title":"Throttle\uFF1A \u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","slug":"throttle\uFF1A-\u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","link":"#throttle\uFF1A-\u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","children":[]},{"level":2,"title":"Debounce\uFF1A \u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","slug":"debounce\uFF1A-\u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","link":"#debounce\uFF1A-\u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97","children":[]},{"level":2,"title":"\u7528 Throttle \u6765\u4F18\u5316 Debounce","slug":"\u7528-throttle-\u6765\u4F18\u5316-debounce","link":"#\u7528-throttle-\u6765\u4F18\u5316-debounce","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u9762\u8BD5/\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u539F\u7406\u4E0E\u5B9E\u8DF5/\u5E94\u7528\u7BC7 2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09.md"}'),p={name:"\u9762\u8BD5/\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u539F\u7406\u4E0E\u5B9E\u8DF5/\u5E94\u7528\u7BC7 2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09.md"},o=l(`<h1 id="\u5E94\u7528\u7BC7-2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" tabindex="-1">\u5E94\u7528\u7BC7 2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09 <a class="header-anchor" href="#\u5E94\u7528\u7BC7-2-\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" aria-hidden="true">#</a></h1><hr><h1 id="\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" tabindex="-1">\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09 <a class="header-anchor" href="#\u4E8B\u4EF6\u7684\u8282\u6D41\uFF08throttle\uFF09\u4E0E\u9632\u6296\uFF08debounce\uFF09" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u4E00\u8D77\u901A\u8FC7\u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u5B9E\u73B0\u4E86\u5404\u5927\u7F51\u7AD9\u559C\u95FB\u4E50\u89C1\u7684\u61D2\u52A0\u8F7D\u6548\u679C\u3002\u4F46\u6211\u4EEC\u63D0\u5230\uFF0Cscroll \u4E8B\u4EF6\u662F\u4E00\u4E2A\u975E\u5E38\u5BB9\u6613\u88AB\u53CD\u590D\u89E6\u53D1\u7684\u4E8B\u4EF6\u3002\u5176\u5B9E\u4E0D\u6B62 scroll \u4E8B\u4EF6\uFF0Cresize \u4E8B\u4EF6\u3001\u9F20\u6807\u4E8B\u4EF6\uFF08\u6BD4\u5982 mousemove\u3001mouseover \u7B49\uFF09\u3001\u952E\u76D8\u4E8B\u4EF6\uFF08keyup\u3001keydown \u7B49\uFF09\u90FD\u5B58\u5728\u88AB\u9891\u7E41\u89E6\u53D1\u7684\u98CE\u9669\u3002</p><p>\u9891\u7E41\u89E6\u53D1\u56DE\u8C03\u5BFC\u81F4\u7684\u5927\u91CF\u8BA1\u7B97\u4F1A\u5F15\u53D1\u9875\u9762\u7684\u6296\u52A8\u751A\u81F3\u5361\u987F\u3002\u4E3A\u4E86\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E9B\u624B\u6BB5\u6765\u63A7\u5236\u4E8B\u4EF6\u88AB\u89E6\u53D1\u7684\u9891\u7387\u3002\u5C31\u662F\u5728\u8FD9\u6837\u7684\u80CC\u666F\u4E0B\uFF0Cthrottle\uFF08\u4E8B\u4EF6\u8282\u6D41\uFF09\u548C debounce\uFF08\u4E8B\u4EF6\u9632\u6296\uFF09\u51FA\u73B0\u4E86\u3002</p><h2 id="\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28" tabindex="-1">\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28 <a class="header-anchor" href="#\u201C\u8282\u6D41\u201D\u4E0E\u201C\u9632\u6296\u201D\u7684\u672C\u8D28" aria-hidden="true">#</a></h2><p>\u8FD9\u4E24\u4E2A\u4E1C\u897F\u90FD\u4EE5<strong>\u95ED\u5305</strong>\u7684\u5F62\u5F0F\u5B58\u5728\u3002</p><p>\u5B83\u4EEC\u901A\u8FC7\u5BF9\u4E8B\u4EF6\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u5305\u88F9\u3001\u4EE5\u81EA\u7531\u53D8\u91CF\u7684\u5F62\u5F0F\u7F13\u5B58\u65F6\u95F4\u4FE1\u606F\uFF0C\u6700\u540E\u7528 setTimeout \u6765\u63A7\u5236\u4E8B\u4EF6\u7684\u89E6\u53D1\u9891\u7387\u3002</p><h2 id="throttle\uFF1A-\u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97" tabindex="-1">Throttle\uFF1A \u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97 <a class="header-anchor" href="#throttle\uFF1A-\u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97" aria-hidden="true">#</a></h2><p>throttle \u7684\u4E2D\u5FC3\u601D\u60F3\u5728\u4E8E\uFF1A\u5728\u67D0\u6BB5\u65F6\u95F4\u5185\uFF0C\u4E0D\u7BA1\u4F60\u89E6\u53D1\u4E86\u591A\u5C11\u6B21\u56DE\u8C03\uFF0C\u6211\u90FD\u53EA\u8BA4\u7B2C\u4E00\u6B21\uFF0C\u5E76\u5728\u8BA1\u65F6\u7ED3\u675F\u65F6\u7ED9\u4E88\u54CD\u5E94\u3002</p><p>\u5148\u7ED9\u5927\u5BB6\u8BB2\u4E2A\u5C0F\u6545\u4E8B\uFF1A\u73B0\u5728\u6709\u4E00\u4E2A\u65C5\u5BA2\u521A\u4E0B\u4E86\u98DE\u673A\uFF0C\u9700\u8981\u7528\u8F66\uFF0C\u4E8E\u662F\u6253\u7535\u8BDD\u53EB\u4E86\u8BE5\u673A\u573A\u552F\u4E00\u7684\u4E00\u8F86\u673A\u573A\u5927\u5DF4\u6765\u63A5\u3002\u53F8\u673A\u5F00\u5230\u673A\u573A\uFF0C\u5FC3\u60F3\u6765\u90FD\u6765\u4E86\uFF0C\u591A\u63A5\u51E0\u4E2A\u4EBA\u4E00\u8D77\u8D70\u5427\uFF0C\u8FD9\u6837\u8FD9\u8D9F\u624D\u8DD1\u5F97\u503C\u2014\u2014\u6211\u7B49\u4E2A\u5341\u5206\u949F\u770B\u770B\u3002\u4E8E\u662F\u53F8\u673A\u4E00\u8FB9\u6253\u5F00\u4E86\u8BA1\u65F6\u5668\uFF0C\u4E00\u8FB9\u62DB\u547C\u540E\u9762\u7684\u5BA2\u4EBA\u9646\u9646\u7EED\u7EED\u4E0A\u8F66\u3002\u5728\u8FD9\u5341\u5206\u949F\u5185\uFF0C\u540E\u9762\u4E0B\u98DE\u673A\u7684\u4E58\u5BA2\u90FD\u53EA\u80FD\u4E58\u8FD9\u4E00\u8F86\u5927\u5DF4\uFF0C\u5341\u5206\u949F\u8FC7\u53BB\u540E\uFF0C\u4E0D\u7BA1\u540E\u9762\u8FD8\u6709\u591A\u5C11\u6CA1\u6324\u4E0A\u8F66\u7684\u4E58\u5BA2\uFF0C\u8FD9\u73ED\u8F66\u90FD\u5FC5\u987B\u53D1\u8D70\u3002</p><p>\u5728\u8FD9\u4E2A\u6545\u4E8B\u91CC\uFF0C\u201C\u53F8\u673A\u201D \u5C31\u662F\u6211\u4EEC\u7684\u8282\u6D41\u9600\uFF0C\u4ED6\u63A7\u5236\u53D1\u8F66\u7684\u65F6\u673A\uFF1B\u201C\u4E58\u5BA2\u201D\u5C31\u662F\u56E0\u4E3A\u6211\u4EEC\u9891\u7E41\u64CD\u4F5C\u4E8B\u4EF6\u800C\u4E0D\u65AD\u6D8C\u5165\u7684\u56DE\u8C03\u4EFB\u52A1\uFF0C\u5B83\u9700\u8981\u63A5\u53D7\u201C\u53F8\u673A\u201D\u7684\u5B89\u6392\uFF1B\u800C\u201C\u8BA1\u65F6\u5668\u201D\uFF0C\u5C31\u662F\u6211\u4EEC\u4E0A\u6587\u63D0\u5230\u7684\u4EE5\u81EA\u7531\u53D8\u91CF\u5F62\u5F0F\u5B58\u5728\u7684\u65F6\u95F4\u4FE1\u606F\uFF0C\u5B83\u662F\u201C\u53F8\u673A\u201D\u51B3\u5B9A\u53D1\u8F66\u7684\u4F9D\u636E\uFF1B\u6700\u540E\u201C\u53D1\u8F66\u201D\u8FD9\u4E2A\u52A8\u4F5C\uFF0C\u5C31\u5BF9\u5E94\u5230\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u3002</p><p>\u603B\u7ED3\u4E0B\u6765\uFF0C\u6240\u8C13\u7684\u201C\u8282\u6D41\u201D\uFF0C\u662F\u901A\u8FC7\u5728\u4E00\u6BB5\u65F6\u95F4\u5185<strong>\u65E0\u89C6\u540E\u6765\u4EA7\u751F\u7684\u56DE\u8C03\u8BF7\u6C42</strong>\u6765\u5B9E\u73B0\u7684\u3002\u53EA\u8981\u4E00\u4F4D\u5BA2\u4EBA\u53EB\u4E86\u8F66\uFF0C\u53F8\u673A\u5C31\u4F1A\u4E3A\u4ED6\u5F00\u542F\u8BA1\u65F6\u5668\uFF0C\u4E00\u5B9A\u7684\u65F6\u95F4\u5185\uFF0C\u540E\u9762\u9700\u8981\u4E58\u8F66\u7684\u5BA2\u4EBA\u90FD\u5F97\u6392\u961F\u4E0A\u8FD9\u4E00\u8F86\u8F66\uFF0C\u8C01\u4E5F\u65E0\u6CD5\u53EB\u5230\u66F4\u591A\u7684\u8F66\u3002</p><p>\u5BF9\u5E94\u5230\u5B9E\u9645\u7684\u4EA4\u4E92\u4E0A\u662F\u4E00\u6837\u4E00\u6837\u7684\uFF1A\u6BCF\u5F53\u7528\u6237\u89E6\u53D1\u4E86\u4E00\u6B21 scroll \u4E8B\u4EF6\uFF0C\u6211\u4EEC\u5C31\u4E3A\u8FD9\u4E2A\u89E6\u53D1\u64CD\u4F5C\u5F00\u542F\u8BA1\u65F6\u5668\u3002\u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u540E\u7EED\u6240\u6709\u7684 scroll \u4E8B\u4EF6\u90FD\u4F1A\u88AB\u5F53\u4F5C\u201C\u4E00\u8F86\u8F66\u7684\u4E58\u5BA2\u201D\u2014\u2014\u5B83\u4EEC\u65E0\u6CD5\u89E6\u53D1\u65B0\u7684 scroll \u56DE\u8C03\u3002\u76F4\u5230\u201C\u4E00\u6BB5\u65F6\u95F4\u201D\u5230\u4E86\uFF0C\u7B2C\u4E00\u6B21\u89E6\u53D1\u7684 scroll \u4E8B\u4EF6\u5BF9\u5E94\u7684\u56DE\u8C03\u624D\u4F1A\u6267\u884C\uFF0C\u800C\u201C\u4E00\u6BB5\u65F6\u95F4\u5185\u201D\u89E6\u53D1\u7684\u540E\u7EED\u7684 scroll \u56DE\u8C03\u90FD\u4F1A\u88AB\u8282\u6D41\u9600\u65E0\u89C6\u6389\u3002</p><p>\u7406\u89E3\u4E86\u5927\u81F4\u7684\u601D\u8DEF\uFF0C\u6211\u4EEC\u73B0\u5728\u4E00\u8D77\u5B9E\u73B0\u4E00\u4E2A throttle\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// fn\u662F\u6211\u4EEC\u9700\u8981\u5305\u88C5\u7684\u4E8B\u4EF6\u56DE\u8C03, interval\u662F\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">interval</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// last\u4E3A\u4E0A\u4E00\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5C06throttle\u5904\u7406\u7ED3\u679C\u5F53\u4F5C\u51FD\u6570\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u8BB0\u5F55\u672C\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u5224\u65AD\u4E0A\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u548C\u672C\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u5DEE\u662F\u5426\u5C0F\u4E8E\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">interval</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u5982\u679C\u65F6\u95F4\u95F4\u9694\u5927\u4E8E\u6211\u4EEC\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u9608\u503C\uFF0C\u5219\u6267\u884C\u56DE\u8C03</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7528throttle\u6765\u5305\u88C5scroll\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> better_scroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u89E6\u53D1\u4E86\u6EDA\u52A8\u4E8B\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scroll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> better_scroll)</span></span>
<span class="line"></span></code></pre></div><h2 id="debounce\uFF1A-\u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97" tabindex="-1">Debounce\uFF1A \u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97 <a class="header-anchor" href="#debounce\uFF1A-\u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97" aria-hidden="true">#</a></h2><p>\u9632\u6296\u7684\u4E2D\u5FC3\u601D\u60F3\u5728\u4E8E\uFF1A\u6211\u4F1A\u7B49\u4F60\u5230\u5E95\u3002\u5728\u67D0\u6BB5\u65F6\u95F4\u5185\uFF0C\u4E0D\u7BA1\u4F60\u89E6\u53D1\u4E86\u591A\u5C11\u6B21\u56DE\u8C03\uFF0C\u6211\u90FD\u53EA\u8BA4\u6700\u540E\u4E00\u6B21\u3002</p><p>\u7EE7\u7EED\u8BB2\u53F8\u673A\u5F00\u8F66\u7684\u6545\u4E8B\u3002\u8FD9\u6B21\u7684\u53F8\u673A\u6BD4\u8F83\u6709\u8010\u5FC3\u3002\u7B2C\u4E00\u4E2A\u4E58\u5BA2\u4E0A\u8F66\u540E\uFF0C\u53F8\u673A\u5F00\u59CB\u8BA1\u65F6\uFF08\u6BD4\u5982\u8BF4\u5341\u5206\u949F\uFF09\u3002\u5341\u5206\u949F\u4E4B\u5185\uFF0C\u5982\u679C\u53C8\u4E0A\u6765\u4E86\u4E00\u4E2A\u4E58\u5BA2\uFF0C\u53F8\u673A\u4F1A\u628A\u8BA1\u65F6\u5668\u6E05\u96F6\uFF0C\u91CD\u65B0\u5F00\u59CB\u7B49\u53E6\u4E00\u4E2A\u5341\u5206\u949F\uFF08\u5EF6\u8FDF\u4E86\u7B49\u5F85\uFF09\u3002\u76F4\u5230\u6709\u8FD9\u4E48\u4E00\u4F4D\u4E58\u5BA2\uFF0C\u4ECE\u4ED6\u4E0A\u8F66\u5F00\u59CB\uFF0C\u540E\u7EED\u5341\u5206\u949F\u90FD\u6CA1\u6709\u65B0\u4E58\u5BA2\u4E0A\u8F66\uFF0C\u53F8\u673A\u4F1A\u8BA4\u4E3A\u786E\u5B9E\u6CA1\u6709\u4EBA\u9700\u8981\u642D\u8FD9\u8D9F\u8F66\u4E86\uFF0C\u624D\u4F1A\u628A\u8F66\u5F00\u8D70\u3002</p><p>\u6211\u4EEC\u5BF9\u6BD4 throttle \u6765\u7406\u89E3 debounce\uFF1A\u5728throttle\u7684\u903B\u8F91\u91CC\uFF0C\u201C\u7B2C\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97\u201D\uFF0C\u5B83\u53EA\u4E3A\u7B2C\u4E00\u4E2A\u4E58\u5BA2\u8BA1\u65F6\uFF0C\u65F6\u95F4\u5230\u4E86\u5C31\u6267\u884C\u56DE\u8C03\u3002\u800C debounce \u8BA4\u4E3A\uFF0C\u201C\u6700\u540E\u4E00\u4E2A\u4EBA\u8BF4\u4E86\u7B97\u201D\uFF0Cdebounce \u4F1A\u4E3A\u6BCF\u4E00\u4E2A\u65B0\u4E58\u5BA2\u8BBE\u5B9A\u65B0\u7684\u5B9A\u65F6\u5668\u3002</p><p>\u6211\u4EEC\u57FA\u4E8E\u4E0A\u9762\u7684\u7406\u89E3\uFF0C\u4E00\u8D77\u6765\u5199\u4E00\u4E2A debounce\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// fn\u662F\u6211\u4EEC\u9700\u8981\u5305\u88C5\u7684\u4E8B\u4EF6\u56DE\u8C03, delay\u662F\u6BCF\u6B21\u63A8\u8FDF\u6267\u884C\u7684\u7B49\u5F85\u65F6\u95F4</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5C06debounce\u5904\u7406\u7ED3\u679C\u5F53\u4F5C\u51FD\u6570\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6BCF\u6B21\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u90FD\u53BB\u6E05\u9664\u4E4B\u524D\u7684\u65E7\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8BBE\u7ACB\u65B0\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7528debounce\u6765\u5305\u88C5scroll\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> better_scroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u89E6\u53D1\u4E86\u6EDA\u52A8\u4E8B\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scroll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> better_scroll)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7528-throttle-\u6765\u4F18\u5316-debounce" tabindex="-1">\u7528 Throttle \u6765\u4F18\u5316 Debounce <a class="header-anchor" href="#\u7528-throttle-\u6765\u4F18\u5316-debounce" aria-hidden="true">#</a></h2><p>debounce \u7684\u95EE\u9898\u5728\u4E8E\u5B83\u201C\u592A\u6709\u8010\u5FC3\u4E86\u201D\u3002\u8BD5\u60F3\uFF0C\u5982\u679C\u7528\u6237\u7684\u64CD\u4F5C\u5341\u5206\u9891\u7E41\u2014\u2014\u4ED6\u6BCF\u6B21\u90FD\u4E0D\u7B49 debounce \u8BBE\u7F6E\u7684 delay \u65F6\u95F4\u7ED3\u675F\u5C31\u8FDB\u884C\u4E0B\u4E00\u6B21\u64CD\u4F5C\uFF0C\u4E8E\u662F\u6BCF\u6B21 debounce \u90FD\u4E3A\u8BE5\u7528\u6237\u91CD\u65B0\u751F\u6210\u5B9A\u65F6\u5668\uFF0C\u56DE\u8C03\u51FD\u6570\u88AB\u5EF6\u8FDF\u4E86\u4E0D\u8BA1\u5176\u6570\u6B21\u3002\u9891\u7E41\u7684\u5EF6\u8FDF\u4F1A\u5BFC\u81F4\u7528\u6237\u8FDF\u8FDF\u5F97\u4E0D\u5230\u54CD\u5E94\uFF0C\u7528\u6237\u540C\u6837\u4F1A\u4EA7\u751F\u201C\u8FD9\u4E2A\u9875\u9762\u5361\u6B7B\u4E86\u201D\u7684\u89C2\u611F\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u5F04\u5DE7\u6210\u62D9\uFF0C\u6211\u4EEC\u9700\u8981\u501F\u529B throttle \u7684\u601D\u60F3\uFF0C\u6253\u9020\u4E00\u4E2A\u201C\u6709\u5E95\u7EBF\u201D\u7684 debounce\u2014\u2014\u7B49\u4F60\u53EF\u4EE5\uFF0C\u4F46\u6211\u6709\u6211\u7684\u539F\u5219\uFF1Adelay \u65F6\u95F4\u5185\uFF0C\u6211\u53EF\u4EE5\u4E3A\u4F60\u91CD\u65B0\u751F\u6210\u5B9A\u65F6\u5668\uFF1B\u4F46\u53EA\u8981delay\u7684\u65F6\u95F4\u5230\u4E86\uFF0C\u6211\u5FC5\u987B\u8981\u7ED9\u7528\u6237\u4E00\u4E2A\u54CD\u5E94\u3002\u8FD9\u4E2A throttle \u4E0E debounce \u201C\u5408\u4F53\u201D\u601D\u8DEF\uFF0C\u5DF2\u7ECF\u88AB\u5F88\u591A\u6210\u719F\u7684\u524D\u7AEF\u5E93\u5E94\u7528\u5230\u4E86\u5B83\u4EEC\u7684\u52A0\u5F3A\u7248 throttle \u51FD\u6570\u7684\u5B9E\u73B0\u4E2D\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// fn\u662F\u6211\u4EEC\u9700\u8981\u5305\u88C5\u7684\u4E8B\u4EF6\u56DE\u8C03, delay\u662F\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// last\u4E3A\u4E0A\u4E00\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4, timer\u662F\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5C06throttle\u5904\u7406\u7ED3\u679C\u5F53\u4F5C\u51FD\u6570\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u7684this\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4FDD\u7559\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8BB0\u5F55\u672C\u6B21\u89E6\u53D1\u56DE\u8C03\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5224\u65AD\u4E0A\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u548C\u672C\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\u5DEE\u662F\u5426\u5C0F\u4E8E\u65F6\u95F4\u95F4\u9694\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5982\u679C\u65F6\u95F4\u95F4\u9694\u5C0F\u4E8E\u6211\u4EEC\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u9608\u503C\uFF0C\u5219\u4E3A\u672C\u6B21\u89E6\u53D1\u64CD\u4F5C\u8BBE\u7ACB\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5982\u679C\u65F6\u95F4\u95F4\u9694\u8D85\u51FA\u4E86\u6211\u4EEC\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u9608\u503C\uFF0C\u90A3\u5C31\u4E0D\u7B49\u4E86\uFF0C\u65E0\u8BBA\u5982\u4F55\u8981\u53CD\u9988\u7ED9\u7528\u6237\u4E00\u6B21\u54CD\u5E94</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7528\u65B0\u7684throttle\u5305\u88C5scroll\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> better_scroll </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u89E6\u53D1\u4E86\u6EDA\u52A8\u4E8B\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scroll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> better_scroll)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>throttle \u548C debounce \u4E0D\u4EC5\u662F\u6211\u4EEC\u65E5\u5E38\u5F00\u53D1\u4E2D\u7684\u5E38\u7528\u4F18\u8D28\u4EE3\u7801\u7247\u6BB5\uFF0C\u66F4\u662F\u524D\u7AEF\u9762\u8BD5\u4E2D\u4E0D\u53EF\u4E0D\u77E5\u7684\u9AD8\u9891\u8003\u70B9\u3002\u201C\u770B\u61C2\u4E86\u4EE3\u7801\u201D\u3001\u201C\u7406\u89E3\u4E86\u8FC7\u7A0B\u201D\u5728\u672C\u8282\u90FD\u662F\u4E0D\u591F\u7684\uFF0C\u91CD\u8981\u7684\u662F\u628A\u5B83\u5199\u5230\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u53BB\uFF0C\u4EB2\u81EA\u4F53\u9A8C\u4E00\u628A\u8282\u6D41\u548C\u9632\u6296\u5E26\u6765\u7684\u6027\u80FD\u63D0\u5347\u3002</p><p>\uFF08\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u6709\u4EFB\u4F55\u60F3\u6CD5\u6216\u7591\u95EE\uFF0C\u6216\u8005\u5355\u7EAF\u5E0C\u671B\u548C\u7B14\u8005\u4EA4\u4E2A\u670B\u53CB\u5565\u7684\uFF0C\u6B22\u8FCE\u5927\u5BB6\u6DFB\u52A0\u6211\u7684\u5FAE\u4FE1xyalinode\u4E0E\u6211\u4EA4\u6D41\u54C8~\uFF09</p>`,29),e=[o];function t(c,r,y,F,D,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
