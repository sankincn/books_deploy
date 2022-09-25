import{_ as s,c as a,o as n,d as e}from"./app.e5528619.js";const d=JSON.parse('{"title":"\u5E94\u7528 9-\u5927\u6D77\u635E\u9488 \u2014\u2014 Scan","description":"","frontmatter":{},"headers":[{"level":2,"title":"scan \u57FA\u7840\u4F7F\u7528","slug":"scan-\u57FA\u7840\u4F7F\u7528","link":"#scan-\u57FA\u7840\u4F7F\u7528","children":[]},{"level":2,"title":"\u5B57\u5178\u7684\u7ED3\u6784","slug":"\u5B57\u5178\u7684\u7ED3\u6784","link":"#\u5B57\u5178\u7684\u7ED3\u6784","children":[]},{"level":2,"title":"scan \u904D\u5386\u987A\u5E8F","slug":"scan-\u904D\u5386\u987A\u5E8F","link":"#scan-\u904D\u5386\u987A\u5E8F","children":[]},{"level":2,"title":"\u5B57\u5178\u6269\u5BB9","slug":"\u5B57\u5178\u6269\u5BB9","link":"#\u5B57\u5178\u6269\u5BB9","children":[]},{"level":2,"title":"\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F","slug":"\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F","link":"#\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F","children":[]},{"level":2,"title":"\u6E10\u8FDB\u5F0F rehash","slug":"\u6E10\u8FDB\u5F0F-rehash","link":"#\u6E10\u8FDB\u5F0F-rehash","children":[]},{"level":2,"title":"\u66F4\u591A\u7684 scan \u6307\u4EE4","slug":"\u66F4\u591A\u7684-scan-\u6307\u4EE4","link":"#\u66F4\u591A\u7684-scan-\u6307\u4EE4","children":[]},{"level":2,"title":"\u5927 key \u626B\u63CF","slug":"\u5927-key-\u626B\u63CF","link":"#\u5927-key-\u626B\u63CF","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 9-\u5927\u6D77\u635E\u9488 \u2014\u2014 Scan.md"}'),l={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u5E94\u7528 9-\u5927\u6D77\u635E\u9488 \u2014\u2014 Scan.md"},p=e(`<h1 id="\u5E94\u7528-9-\u5927\u6D77\u635E\u9488-\u2014\u2014-scan" tabindex="-1">\u5E94\u7528 9-\u5927\u6D77\u635E\u9488 \u2014\u2014 Scan <a class="header-anchor" href="#\u5E94\u7528-9-\u5927\u6D77\u635E\u9488-\u2014\u2014-scan" aria-hidden="true">#</a></h1><hr><h1 id="\u5E94\u7528-9\uFF1A\u5927\u6D77\u635E\u9488-\u2014\u2014-scan" tabindex="-1">\u5E94\u7528 9\uFF1A\u5927\u6D77\u635E\u9488 \u2014\u2014 Scan <a class="header-anchor" href="#\u5E94\u7528-9\uFF1A\u5927\u6D77\u635E\u9488-\u2014\u2014-scan" aria-hidden="true">#</a></h1><p>\u5728\u5E73\u65F6\u7EBF\u4E0A Redis \u7EF4\u62A4\u5DE5\u4F5C\u4E2D\uFF0C\u6709\u65F6\u5019\u9700\u8981\u4ECE Redis \u5B9E\u4F8B\u6210\u5343\u4E0A\u4E07\u7684 key \u4E2D\u627E\u51FA\u7279\u5B9A\u524D\u7F00\u7684 key \u5217\u8868\u6765\u624B\u52A8\u5904\u7406\u6570\u636E\uFF0C\u53EF\u80FD\u662F\u4FEE\u6539\u5B83\u7684\u503C\uFF0C\u4E5F\u53EF\u80FD\u662F\u5220\u9664 key\u3002\u8FD9\u91CC\u5C31\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u4F55\u4ECE\u6D77\u91CF\u7684 key \u4E2D\u627E\u51FA\u6EE1\u8DB3\u7279\u5B9A\u524D\u7F00\u7684 key \u5217\u8868\u6765\uFF1F</p><p>Redis \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u66B4\u529B\u7684\u6307\u4EE4 <code>keys</code> \u7528\u6765\u5217\u51FA\u6240\u6709\u6EE1\u8DB3\u7279\u5B9A\u6B63\u5219\u5B57\u7B26\u4E32\u89C4\u5219\u7684 key\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set codehole1 a</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set codehole2 b</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set codehole3 c</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set code1hole a</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set code2hole b</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set code3hole b</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; keys *</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;codehole1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) &quot;code3hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">3) &quot;codehole3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">4) &quot;code2hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">5) &quot;codehole2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">6) &quot;code1hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; keys codehole*</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;codehole1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) &quot;codehole3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">3) &quot;codehole2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; keys code*hole</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;code3hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) &quot;code2hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">3) &quot;code1hole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u6307\u4EE4\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u7B80\u5355\u7684\u6B63\u5219\u5B57\u7B26\u4E32\u5373\u53EF\uFF0C\u4F46\u662F\u6709\u5F88\u660E\u663E\u7684\u4E24\u4E2A<strong>\u7F3A\u70B9</strong>\u3002</p><ol><li>\u6CA1\u6709 offset\u3001limit \u53C2\u6570\uFF0C\u4E00\u6B21\u6027\u5410\u51FA\u6240\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684 key\uFF0C\u4E07\u4E00\u5B9E\u4F8B\u4E2D\u6709\u51E0\u767E w \u4E2A key \u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5F53\u4F60\u770B\u5230\u6EE1\u5C4F\u7684\u5B57\u7B26\u4E32\u5237\u7684\u6CA1\u6709\u5C3D\u5934\u65F6\uFF0C\u4F60\u5C31\u77E5\u9053\u96BE\u53D7\u4E86\u3002</li><li>keys \u7B97\u6CD5\u662F\u904D\u5386\u7B97\u6CD5\uFF0C\u590D\u6742\u5EA6\u662F O(n)\uFF0C\u5982\u679C\u5B9E\u4F8B\u4E2D\u6709\u5343\u4E07\u7EA7\u4EE5\u4E0A\u7684 key\uFF0C\u8FD9\u4E2A\u6307\u4EE4\u5C31\u4F1A\u5BFC\u81F4 Redis \u670D\u52A1\u5361\u987F\uFF0C\u6240\u6709\u8BFB\u5199 Redis \u7684\u5176\u5B83\u7684\u6307\u4EE4\u90FD\u4F1A\u88AB\u5EF6\u540E\u751A\u81F3\u4F1A\u8D85\u65F6\u62A5\u9519\uFF0C\u56E0\u4E3A Redis \u662F\u5355\u7EBF\u7A0B\u7A0B\u5E8F\uFF0C\u987A\u5E8F\u6267\u884C\u6240\u6709\u6307\u4EE4\uFF0C\u5176\u5B83\u6307\u4EE4\u5FC5\u987B\u7B49\u5230\u5F53\u524D\u7684 keys \u6307\u4EE4\u6267\u884C\u5B8C\u4E86\u624D\u53EF\u4EE5\u7EE7\u7EED\u3002</li></ol><p>\u9762\u5BF9\u8FD9\u4E24\u4E2A\u663E\u8457\u7684\u7F3A\u70B9\u8BE5\u600E\u4E48\u529E\u5462\uFF1F</p><p>Redis \u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u5728 2.8 \u7248\u672C\u4E2D\u52A0\u5165\u4E86\u5927\u6D77\u635E\u9488\u7684\u6307\u4EE4\u2014\u2014<code>scan</code>\u3002<code>scan</code> \u76F8\u6BD4 <code>keys</code> \u5177\u5907\u6709\u4EE5\u4E0B\u7279\u70B9:</p><ol><li>\u590D\u6742\u5EA6\u867D\u7136\u4E5F\u662F O(n)\uFF0C\u4F46\u662F\u5B83\u662F\u901A\u8FC7\u6E38\u6807\u5206\u6B65\u8FDB\u884C\u7684\uFF0C\u4E0D\u4F1A\u963B\u585E\u7EBF\u7A0B;</li><li>\u63D0\u4F9B limit \u53C2\u6570\uFF0C\u53EF\u4EE5\u63A7\u5236\u6BCF\u6B21\u8FD4\u56DE\u7ED3\u679C\u7684\u6700\u5927\u6761\u6570\uFF0Climit \u53EA\u662F\u4E00\u4E2A hint\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u53EF\u591A\u53EF\u5C11;</li><li>\u540C keys \u4E00\u6837\uFF0C\u5B83\u4E5F\u63D0\u4F9B\u6A21\u5F0F\u5339\u914D\u529F\u80FD;</li><li>\u670D\u52A1\u5668\u4E0D\u9700\u8981\u4E3A\u6E38\u6807\u4FDD\u5B58\u72B6\u6001\uFF0C\u6E38\u6807\u7684\u552F\u4E00\u72B6\u6001\u5C31\u662F scan \u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u6E38\u6807\u6574\u6570;</li><li>\u8FD4\u56DE\u7684\u7ED3\u679C\u53EF\u80FD\u4F1A\u6709\u91CD\u590D\uFF0C\u9700\u8981\u5BA2\u6237\u7AEF\u53BB\u91CD\u590D\uFF0C\u8FD9\u70B9\u975E\u5E38\u91CD\u8981;</li><li>\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u6709\u6570\u636E\u4FEE\u6539\uFF0C\u6539\u52A8\u540E\u7684\u6570\u636E\u80FD\u4E0D\u80FD\u904D\u5386\u5230\u662F\u4E0D\u786E\u5B9A\u7684;</li><li>\u5355\u6B21\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u7A7A\u7684\u5E76\u4E0D\u610F\u5473\u7740\u904D\u5386\u7ED3\u675F\uFF0C\u800C\u8981\u770B\u8FD4\u56DE\u7684\u6E38\u6807\u503C\u662F\u5426\u4E3A\u96F6;</li></ol><h2 id="scan-\u57FA\u7840\u4F7F\u7528" tabindex="-1">scan \u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#scan-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728\u4F7F\u7528\u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u5F80 Redis \u91CC\u63D2\u5165 10000 \u6761\u6570\u636E\u6765\u8FDB\u884C\u6D4B\u8BD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client = redis.StrictRedis()</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(10000):</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.set(&quot;key%d&quot; % i, i)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u597D\uFF0CRedis \u4E2D\u73B0\u5728\u6709\u4E86 10000 \u6761\u6570\u636E\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u627E\u51FA\u4EE5 key99 \u5F00\u5934 key \u5217\u8868\u3002</p><p>scan \u53C2\u6570\u63D0\u4F9B\u4E86\u4E09\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F <code>cursor \u6574\u6570\u503C</code>\uFF0C\u7B2C\u4E8C\u4E2A\u662F <code>key \u7684\u6B63\u5219\u6A21\u5F0F</code>\uFF0C\u7B2C\u4E09\u4E2A\u662F<code>\u904D\u5386\u7684 limit hint</code>\u3002\u7B2C\u4E00\u6B21\u904D\u5386\u65F6\uFF0Ccursor \u503C\u4E3A 0\uFF0C\u7136\u540E\u5C06\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7B2C\u4E00\u4E2A\u6574\u6570\u503C\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u904D\u5386\u7684 cursor\u3002\u4E00\u76F4\u904D\u5386\u5230\u8FD4\u56DE\u7684 cursor \u503C\u4E3A 0 \u65F6\u7ED3\u675F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 0 match key99* count 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;13976&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2)  1) &quot;key9911&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    2) &quot;key9974&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    3) &quot;key9994&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    4) &quot;key9910&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    5) &quot;key9907&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    6) &quot;key9989&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    7) &quot;key9971&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    8) &quot;key99&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    9) &quot;key9966&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   10) &quot;key992&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   11) &quot;key9903&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   12) &quot;key9905&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 13976 match key99* count 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;1996&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2)  1) &quot;key9982&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    2) &quot;key9997&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    3) &quot;key9963&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    4) &quot;key996&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    5) &quot;key9912&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    6) &quot;key9999&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    7) &quot;key9921&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    8) &quot;key994&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    9) &quot;key9956&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   10) &quot;key9919&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 1996 match key99* count 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;12594&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) &quot;key9939&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;key9941&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) &quot;key9967&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   4) &quot;key9938&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   5) &quot;key9906&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   6) &quot;key999&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   7) &quot;key9909&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   8) &quot;key9933&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   9) &quot;key9992&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">......</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 11687 match key99* count 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;0&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2)  1) &quot;key9969&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    2) &quot;key998&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    3) &quot;key9986&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    4) &quot;key9968&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    5) &quot;key9965&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    6) &quot;key9990&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    7) &quot;key9915&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    8) &quot;key9928&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    9) &quot;key9908&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   10) &quot;key9929&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   11) &quot;key9944&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u8FC7\u7A0B\u53EF\u4EE5\u770B\u5230\u867D\u7136\u63D0\u4F9B\u7684 limit \u662F 1000\uFF0C\u4F46\u662F\u8FD4\u56DE\u7684\u7ED3\u679C\u53EA\u6709 10 \u4E2A\u5DE6\u53F3\u3002\u56E0\u4E3A\u8FD9\u4E2A limit \u4E0D\u662F\u9650\u5B9A\u8FD4\u56DE\u7ED3\u679C\u7684\u6570\u91CF\uFF0C\u800C\u662F\u9650\u5B9A\u670D\u52A1\u5668\u5355\u6B21\u904D\u5386\u7684\u5B57\u5178\u69FD\u4F4D\u6570\u91CF(\u7EA6\u7B49\u4E8E)\u3002\u5982\u679C\u5C06 limit \u8BBE\u7F6E\u4E3A 10\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8FD4\u56DE\u7ED3\u679C\u662F\u7A7A\u7684\uFF0C\u4F46\u662F\u6E38\u6807\u503C\u4E0D\u4E3A\u96F6\uFF0C\u610F\u5473\u7740\u904D\u5386\u8FD8\u6CA1\u7ED3\u675F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 0 match key99* count 10</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;3072&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) (empty list or set)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B57\u5178\u7684\u7ED3\u6784" tabindex="-1">\u5B57\u5178\u7684\u7ED3\u6784 <a class="header-anchor" href="#\u5B57\u5178\u7684\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5728 Redis \u4E2D\u6240\u6709\u7684 key \u90FD\u5B58\u50A8\u5728\u4E00\u4E2A\u5F88\u5927\u7684\u5B57\u5178\u4E2D\uFF0C\u8FD9\u4E2A\u5B57\u5178\u7684\u7ED3\u6784\u548C Java \u4E2D\u7684 HashMap \u4E00\u6837\uFF0C\u662F\u4E00\u7EF4\u6570\u7EC4 + \u4E8C\u7EF4\u94FE\u8868\u7ED3\u6784\uFF0C\u7B2C\u4E00\u7EF4\u6570\u7EC4\u7684\u5927\u5C0F\u603B\u662F 2^n(n&gt;=0)\uFF0C\u6269\u5BB9\u4E00\u6B21\u6570\u7EC4\u5927\u5C0F\u7A7A\u95F4\u52A0\u500D\uFF0C\u4E5F\u5C31\u662F n++\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/5/164695b9f06c757e~tplv-t2oaga2asx-image.image" alt=""></p><p>scan \u6307\u4EE4\u8FD4\u56DE\u7684\u6E38\u6807\u5C31\u662F\u7B2C\u4E00\u7EF4\u6570\u7EC4\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u6211\u4EEC\u5C06\u8FD9\u4E2A\u4F4D\u7F6E\u7D22\u5F15\u79F0\u4E3A\u69FD (slot)\u3002\u5982\u679C\u4E0D\u8003\u8651\u5B57\u5178\u7684\u6269\u5BB9\u7F29\u5BB9\uFF0C\u76F4\u63A5\u6309\u6570\u7EC4\u4E0B\u6807\u6328\u4E2A\u904D\u5386\u5C31\u884C\u4E86\u3002limit \u53C2\u6570\u5C31\u8868\u793A\u9700\u8981\u904D\u5386\u7684\u69FD\u4F4D\u6570\uFF0C\u4E4B\u6240\u4EE5\u8FD4\u56DE\u7684\u7ED3\u679C\u53EF\u80FD\u591A\u53EF\u80FD\u5C11\uFF0C\u662F\u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u7684\u69FD\u4F4D\u4E0A\u90FD\u4F1A\u6302\u63A5\u94FE\u8868\uFF0C\u6709\u4E9B\u69FD\u4F4D\u53EF\u80FD\u662F\u7A7A\u7684\uFF0C\u8FD8\u6709\u4E9B\u69FD\u4F4D\u4E0A\u6302\u63A5\u7684\u94FE\u8868\u4E0A\u7684\u5143\u7D20\u53EF\u80FD\u4F1A\u6709\u591A\u4E2A\u3002\u6BCF\u4E00\u6B21\u904D\u5386\u90FD\u4F1A\u5C06 limit \u6570\u91CF\u7684\u69FD\u4F4D\u4E0A\u6302\u63A5\u7684\u6240\u6709\u94FE\u8868\u5143\u7D20\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\u8FC7\u6EE4\u540E\uFF0C\u4E00\u6B21\u6027\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><h2 id="scan-\u904D\u5386\u987A\u5E8F" tabindex="-1">scan \u904D\u5386\u987A\u5E8F <a class="header-anchor" href="#scan-\u904D\u5386\u987A\u5E8F" aria-hidden="true">#</a></h2><p>scan \u7684\u904D\u5386\u987A\u5E8F\u975E\u5E38\u7279\u522B\u3002\u5B83\u4E0D\u662F\u4ECE\u7B2C\u4E00\u7EF4\u6570\u7EC4\u7684\u7B2C 0 \u4F4D\u4E00\u76F4\u904D\u5386\u5230\u672B\u5C3E\uFF0C\u800C\u662F\u91C7\u7528\u4E86\u9AD8\u4F4D\u8FDB\u4F4D\u52A0\u6CD5\u6765\u904D\u5386\u3002\u4E4B\u6240\u4EE5\u4F7F\u7528\u8FD9\u6837\u7279\u6B8A\u7684\u65B9\u5F0F\u8FDB\u884C\u904D\u5386\uFF0C\u662F\u8003\u8651\u5230\u5B57\u5178\u7684\u6269\u5BB9\u548C\u7F29\u5BB9\u65F6\u907F\u514D\u69FD\u4F4D\u7684\u904D\u5386\u91CD\u590D\u548C\u9057\u6F0F\u3002</p><p>\u9996\u5148\u6211\u4EEC\u7528\u52A8\u753B\u6F14\u793A\u4E00\u4E0B\u666E\u901A\u52A0\u6CD5\u548C\u9AD8\u4F4D\u8FDB\u4F4D\u52A0\u6CD5\u7684\u533A\u522B\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/5/16469760d12e0cbd~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4ECE\u52A8\u753B\u4E2D\u53EF\u4EE5\u770B\u51FA\u9AD8\u4F4D\u8FDB\u4F4D\u6CD5\u4ECE\u5DE6\u8FB9\u52A0\uFF0C\u8FDB\u4F4D\u5F80\u53F3\u8FB9\u79FB\u52A8\uFF0C\u540C\u666E\u901A\u52A0\u6CD5\u6B63\u597D\u76F8\u53CD\u3002\u4F46\u662F\u6700\u7EC8\u5B83\u4EEC\u90FD\u4F1A\u904D\u5386\u6240\u6709\u7684\u69FD\u4F4D\u5E76\u4E14\u6CA1\u6709\u91CD\u590D\u3002</p><h2 id="\u5B57\u5178\u6269\u5BB9" tabindex="-1">\u5B57\u5178\u6269\u5BB9 <a class="header-anchor" href="#\u5B57\u5178\u6269\u5BB9" aria-hidden="true">#</a></h2><p>Java \u4E2D\u7684 HashMap \u6709\u6269\u5BB9\u7684\u6982\u5FF5\uFF0C\u5F53 loadFactor \u8FBE\u5230\u9608\u503C\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u65B0\u7684 2 \u500D\u5927\u5C0F\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u5C06\u6240\u6709\u7684\u5143\u7D20\u5168\u90E8 rehash \u6302\u5230\u65B0\u7684\u6570\u7EC4\u4E0B\u9762\u3002rehash \u5C31\u662F\u5C06\u5143\u7D20\u7684 hash \u503C\u5BF9\u6570\u7EC4\u957F\u5EA6\u8FDB\u884C\u53D6\u6A21\u8FD0\u7B97\uFF0C\u56E0\u4E3A\u957F\u5EA6\u53D8\u4E86\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u5143\u7D20\u6302\u63A5\u7684\u69FD\u4F4D\u53EF\u80FD\u4E5F\u53D1\u751F\u4E86\u53D8\u5316\u3002\u53C8\u56E0\u4E3A\u6570\u7EC4\u7684\u957F\u5EA6\u662F 2^n \u6B21\u65B9\uFF0C\u6240\u4EE5\u53D6\u6A21\u8FD0\u7B97\u7B49\u4EF7\u4E8E\u4F4D\u4E0E\u64CD\u4F5C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">a mod 8 = a &amp; (8-1) = a &amp; 7</span></span>
<span class="line"><span style="color:#A6ACCD;">a mod 16 = a &amp; (16-1) = a &amp; 15</span></span>
<span class="line"><span style="color:#A6ACCD;">a mod 32 = a &amp; (32-1) = a &amp; 31</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684 7, 15, 31 \u79F0\u4E4B\u4E3A\u5B57\u5178\u7684 mask \u503C\uFF0Cmask \u7684\u4F5C\u7528\u5C31\u662F\u4FDD\u7559 hash \u503C\u7684\u4F4E\u4F4D\uFF0C\u9AD8\u4F4D\u90FD\u88AB\u8BBE\u7F6E\u4E3A 0\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B rehash \u524D\u540E\u5143\u7D20\u69FD\u4F4D\u7684\u53D8\u5316\u3002</p><p>\u5047\u8BBE\u5F53\u524D\u7684\u5B57\u5178\u7684\u6570\u7EC4\u957F\u5EA6\u7531 8 \u4F4D\u6269\u5BB9\u5230 16 \u4F4D\uFF0C\u90A3\u4E48 3 \u53F7\u69FD\u4F4D 011 \u5C06\u4F1A\u88AB rehash \u5230 3 \u53F7\u69FD\u4F4D\u548C 11 \u53F7\u69FD\u4F4D\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8BE5\u69FD\u4F4D\u94FE\u8868\u4E2D\u5927\u7EA6\u6709\u4E00\u534A\u7684\u5143\u7D20\u8FD8\u662F 3 \u53F7\u69FD\u4F4D\uFF0C\u5176\u5B83\u7684\u5143\u7D20\u4F1A\u653E\u5230 11 \u53F7\u69FD\u4F4D\uFF0C11 \u8FD9\u4E2A\u6570\u5B57\u7684\u4E8C\u8FDB\u5236\u662F 1011\uFF0C\u5C31\u662F\u5BF9 3 \u7684\u4E8C\u8FDB\u5236 011 \u589E\u52A0\u4E86\u4E00\u4E2A\u9AD8\u4F4D 1\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/5/164698cd0d3eec33~tplv-t2oaga2asx-image.image" alt=""></p><p>\u62BD\u8C61\u4E00\u70B9\u8BF4\uFF0C\u5047\u8BBE\u5F00\u59CB\u69FD\u4F4D\u7684\u4E8C\u8FDB\u5236\u6570\u662F xxx\uFF0C\u90A3\u4E48\u8BE5\u69FD\u4F4D\u4E2D\u7684\u5143\u7D20\u5C06\u88AB rehash \u5230 0xxx \u548C 1xxx(xxx+8) \u4E2D\u3002 \u5982\u679C\u5B57\u5178\u957F\u5EA6\u7531 16 \u4F4D\u6269\u5BB9\u5230 32 \u4F4D\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u4E8C\u8FDB\u5236\u69FD\u4F4D xxxx \u4E2D\u7684\u5143\u7D20\u5C06\u88AB rehash \u5230 0xxxx \u548C 1xxxx(xxxx+16) \u4E2D\u3002</p><h2 id="\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F" tabindex="-1">\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F <a class="header-anchor" href="#\u5BF9\u6BD4\u6269\u5BB9\u7F29\u5BB9\u524D\u540E\u7684\u904D\u5386\u987A\u5E8F" aria-hidden="true">#</a></h2><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/5/164699dae277cc19~tplv-t2oaga2asx-image.image" alt=""></p><p>\u89C2\u5BDF\u8FD9\u5F20\u56FE\uFF0C\u6211\u4EEC\u53D1\u73B0\u91C7\u7528\u9AD8\u4F4D\u8FDB\u4F4D\u52A0\u6CD5\u7684\u904D\u5386\u987A\u5E8F\uFF0Crehash \u540E\u7684\u69FD\u4F4D\u5728\u904D\u5386\u987A\u5E8F\u4E0A\u662F\u76F8\u90BB\u7684\u3002</p><p>\u5047\u8BBE\u5F53\u524D\u8981\u5373\u5C06\u904D\u5386 110 \u8FD9\u4E2A\u4F4D\u7F6E (\u6A59\u8272)\uFF0C\u90A3\u4E48\u6269\u5BB9\u540E\uFF0C\u5F53\u524D\u69FD\u4F4D\u4E0A\u6240\u6709\u7684\u5143\u7D20\u5BF9\u5E94\u7684\u65B0\u69FD\u4F4D\u662F 0110 \u548C 1110(\u6DF1\u7EFF\u8272)\uFF0C\u4E5F\u5C31\u662F\u5728\u69FD\u4F4D\u7684\u4E8C\u8FDB\u5236\u6570\u589E\u52A0\u4E00\u4E2A\u9AD8\u4F4D 0 \u6216 1\u3002\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECE 0110 \u8FD9\u4E2A\u69FD\u4F4D\u5F00\u59CB\u5F80\u540E\u7EE7\u7EED\u904D\u5386\uFF0C0110 \u69FD\u4F4D\u4E4B\u524D\u7684\u6240\u6709\u69FD\u4F4D\u90FD\u662F\u5DF2\u7ECF\u904D\u5386\u8FC7\u7684\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u907F\u514D\u6269\u5BB9\u540E\u5BF9\u5DF2\u7ECF\u904D\u5386\u8FC7\u7684\u69FD\u4F4D\u8FDB\u884C\u91CD\u590D\u904D\u5386\u3002</p><p>\u518D\u8003\u8651\u7F29\u5BB9\uFF0C\u5047\u8BBE\u5F53\u524D\u5373\u5C06\u904D\u5386 110 \u8FD9\u4E2A\u4F4D\u7F6E (\u6A59\u8272)\uFF0C\u90A3\u4E48\u7F29\u5BB9\u540E\uFF0C\u5F53\u524D\u69FD\u4F4D\u6240\u6709\u7684\u5143\u7D20\u5BF9\u5E94\u7684\u65B0\u69FD\u4F4D\u662F 10(\u6DF1\u7EFF\u8272)\uFF0C\u4E5F\u5C31\u662F\u53BB\u6389\u69FD\u4F4D\u4E8C\u8FDB\u5236\u6700\u9AD8\u4F4D\u3002\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECE 10 \u8FD9\u4E2A\u69FD\u4F4D\u7EE7\u7EED\u5F80\u540E\u904D\u5386\uFF0C10 \u69FD\u4F4D\u4E4B\u524D\u7684\u6240\u6709\u69FD\u4F4D\u90FD\u662F\u5DF2\u7ECF\u904D\u5386\u8FC7\u7684\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u907F\u514D\u7F29\u5BB9\u7684\u91CD\u590D\u904D\u5386\u3002\u4E0D\u8FC7\u7F29\u5BB9\u8FD8\u662F\u4E0D\u592A\u4E00\u6837\uFF0C\u5B83\u4F1A\u5BF9\u56FE\u4E2D 010 \u8FD9\u4E2A\u69FD\u4F4D\u4E0A\u7684\u5143\u7D20\u8FDB\u884C\u91CD\u590D\u904D\u5386\uFF0C\u56E0\u4E3A\u7F29\u878D\u540E 10 \u69FD\u4F4D\u7684\u5143\u7D20\u662F 010 \u548C 110 \u4E0A\u6302\u63A5\u7684\u5143\u7D20\u7684\u878D\u5408\u3002</p><h2 id="\u6E10\u8FDB\u5F0F-rehash" tabindex="-1">\u6E10\u8FDB\u5F0F rehash <a class="header-anchor" href="#\u6E10\u8FDB\u5F0F-rehash" aria-hidden="true">#</a></h2><p>Java \u7684 HashMap \u5728\u6269\u5BB9\u65F6\u4F1A\u4E00\u6B21\u6027\u5C06\u65E7\u6570\u7EC4\u4E0B\u6302\u63A5\u7684\u5143\u7D20\u5168\u90E8\u8F6C\u79FB\u5230\u65B0\u6570\u7EC4\u4E0B\u9762\u3002\u5982\u679C HashMap \u4E2D\u5143\u7D20\u7279\u522B\u591A\uFF0C\u7EBF\u7A0B\u5C31\u4F1A\u51FA\u73B0\u5361\u987F\u73B0\u8C61\u3002Redis \u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u91C7\u7528<strong>\u6E10\u8FDB\u5F0F rehash</strong>\u3002</p><p>\u5B83\u4F1A\u540C\u65F6\u4FDD\u7559\u65E7\u6570\u7EC4\u548C\u65B0\u6570\u7EC4\uFF0C\u7136\u540E\u5728\u5B9A\u65F6\u4EFB\u52A1\u4E2D\u4EE5\u53CA\u540E\u7EED\u5BF9 hash \u7684\u6307\u4EE4\u64CD\u4F5C\u4E2D\u6E10\u6E10\u5730\u5C06\u65E7\u6570\u7EC4\u4E2D\u6302\u63A5\u7684\u5143\u7D20\u8FC1\u79FB\u5230\u65B0\u6570\u7EC4\u4E0A\u3002\u8FD9\u610F\u5473\u7740\u8981\u64CD\u4F5C\u5904\u4E8E rehash \u4E2D\u7684\u5B57\u5178\uFF0C\u9700\u8981\u540C\u65F6\u8BBF\u95EE\u65B0\u65E7\u4E24\u4E2A\u6570\u7EC4\u7ED3\u6784\u3002\u5982\u679C\u5728\u65E7\u6570\u7EC4\u4E0B\u9762\u627E\u4E0D\u5230\u5143\u7D20\uFF0C\u8FD8\u9700\u8981\u53BB\u65B0\u6570\u7EC4\u4E0B\u9762\u53BB\u5BFB\u627E\u3002</p><p>scan \u4E5F\u9700\u8981\u8003\u8651\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5BF9\u4E0E rehash \u4E2D\u7684\u5B57\u5178\uFF0C\u5B83\u9700\u8981\u540C\u65F6\u626B\u63CF\u65B0\u65E7\u69FD\u4F4D\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u878D\u5408\u540E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><h2 id="\u66F4\u591A\u7684-scan-\u6307\u4EE4" tabindex="-1">\u66F4\u591A\u7684 scan \u6307\u4EE4 <a class="header-anchor" href="#\u66F4\u591A\u7684-scan-\u6307\u4EE4" aria-hidden="true">#</a></h2><p>scan \u6307\u4EE4\u662F\u4E00\u7CFB\u5217\u6307\u4EE4\uFF0C\u9664\u4E86\u53EF\u4EE5\u904D\u5386\u6240\u6709\u7684 key \u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u6307\u5B9A\u7684\u5BB9\u5668\u96C6\u5408\u8FDB\u884C\u904D\u5386\u3002\u6BD4\u5982 zscan \u904D\u5386 zset \u96C6\u5408\u5143\u7D20\uFF0Chscan \u904D\u5386 hash \u5B57\u5178\u7684\u5143\u7D20\u3001sscan \u904D\u5386 set \u96C6\u5408\u7684\u5143\u7D20\u3002</p><p>\u5B83\u4EEC\u7684\u539F\u7406\u540C scan \u90FD\u4F1A\u7C7B\u4F3C\u7684\uFF0C\u56E0\u4E3A hash \u5E95\u5C42\u5C31\u662F\u5B57\u5178\uFF0Cset \u4E5F\u662F\u4E00\u4E2A\u7279\u6B8A\u7684 hash(\u6240\u6709\u7684 value \u6307\u5411\u540C\u4E00\u4E2A\u5143\u7D20)\uFF0Czset \u5185\u90E8\u4E5F\u4F7F\u7528\u4E86\u5B57\u5178\u6765\u5B58\u50A8\u6240\u6709\u7684\u5143\u7D20\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002</p><h2 id="\u5927-key-\u626B\u63CF" tabindex="-1">\u5927 key \u626B\u63CF <a class="header-anchor" href="#\u5927-key-\u626B\u63CF" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u4F1A\u56E0\u4E3A\u4E1A\u52A1\u4EBA\u5458\u4F7F\u7528\u4E0D\u5F53\uFF0C\u5728 Redis \u5B9E\u4F8B\u4E2D\u4F1A\u5F62\u6210\u5F88\u5927\u7684\u5BF9\u8C61\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5F88\u5927\u7684 hash\uFF0C\u4E00\u4E2A\u5F88\u5927\u7684 zset \u8FD9\u90FD\u662F\u7ECF\u5E38\u51FA\u73B0\u7684\u3002\u8FD9\u6837\u7684\u5BF9\u8C61\u5BF9 Redis \u7684\u96C6\u7FA4\u6570\u636E\u8FC1\u79FB\u5E26\u6765\u4E86\u5F88\u5927\u7684\u95EE\u9898\uFF0C\u56E0\u4E3A\u5728\u96C6\u7FA4\u73AF\u5883\u4E0B\uFF0C\u5982\u679C\u67D0\u4E2A key \u592A\u5927\uFF0C\u4F1A\u6570\u636E\u5BFC\u81F4\u8FC1\u79FB\u5361\u987F\u3002\u53E6\u5916\u5728\u5185\u5B58\u5206\u914D\u4E0A\uFF0C\u5982\u679C\u4E00\u4E2A key \u592A\u5927\uFF0C\u90A3\u4E48\u5F53\u5B83\u9700\u8981\u6269\u5BB9\u65F6\uFF0C\u4F1A\u4E00\u6B21\u6027\u7533\u8BF7\u66F4\u5927\u7684\u4E00\u5757\u5185\u5B58\uFF0C\u8FD9\u4E5F\u4F1A\u5BFC\u81F4\u5361\u987F\u3002\u5982\u679C\u8FD9\u4E2A\u5927 key \u88AB\u5220\u9664\uFF0C\u5185\u5B58\u4F1A\u4E00\u6B21\u6027\u56DE\u6536\uFF0C\u5361\u987F\u73B0\u8C61\u4F1A\u518D\u4E00\u6B21\u4EA7\u751F\u3002</p><p><strong>\u5728\u5E73\u65F6\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u8981\u5C3D\u91CF\u907F\u514D\u5927 key \u7684\u4EA7\u751F</strong>\u3002</p><p>\u5982\u679C\u4F60\u89C2\u5BDF\u5230 Redis \u7684\u5185\u5B58\u5927\u8D77\u5927\u843D\uFF0C\u8FD9\u6781\u6709\u53EF\u80FD\u662F\u56E0\u4E3A\u5927 key \u5BFC\u81F4\u7684\uFF0C\u8FD9\u65F6\u5019\u4F60\u5C31\u9700\u8981\u5B9A\u4F4D\u51FA\u5177\u4F53\u662F\u90A3\u4E2A key\uFF0C\u8FDB\u4E00\u6B65\u5B9A\u4F4D\u51FA\u5177\u4F53\u7684\u4E1A\u52A1\u6765\u6E90\uFF0C\u7136\u540E\u518D\u6539\u8FDB\u76F8\u5173\u4E1A\u52A1\u4EE3\u7801\u8BBE\u8BA1\u3002</p><p><strong>\u90A3\u5982\u4F55\u5B9A\u4F4D\u5927 key \u5462\uFF1F</strong></p><p>\u4E3A\u4E86\u907F\u514D\u5BF9\u7EBF\u4E0A Redis \u5E26\u6765\u5361\u987F\uFF0C\u8FD9\u5C31\u8981\u7528\u5230 scan \u6307\u4EE4\uFF0C\u5BF9\u4E8E\u626B\u63CF\u51FA\u6765\u7684\u6BCF\u4E00\u4E2A key\uFF0C\u4F7F\u7528 type \u6307\u4EE4\u83B7\u5F97 key \u7684\u7C7B\u578B\uFF0C\u7136\u540E\u4F7F\u7528\u76F8\u5E94\u6570\u636E\u7ED3\u6784\u7684 size \u6216\u8005 len \u65B9\u6CD5\u6765\u5F97\u5230\u5B83\u7684\u5927\u5C0F\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u79CD\u7C7B\u578B\uFF0C\u4FDD\u7559\u5927\u5C0F\u7684\u524D N \u540D\u4F5C\u4E3A\u626B\u63CF\u7ED3\u679C\u5C55\u793A\u51FA\u6765\u3002</p><p>\u4E0A\u9762\u8FD9\u6837\u7684\u8FC7\u7A0B\u9700\u8981\u7F16\u5199\u811A\u672C\uFF0C\u6BD4\u8F83\u7E41\u7410\uFF0C\u4E0D\u8FC7 Redis \u5B98\u65B9\u5DF2\u7ECF\u5728 redis-cli \u6307\u4EE4\u4E2D\u63D0\u4F9B\u4E86\u8FD9\u6837\u7684\u626B\u63CF\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u5373\u7528\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-cli -h 127.0.0.1 -p 7001 \u2013-bigkeys</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4F60\u62C5\u5FC3\u8FD9\u4E2A\u6307\u4EE4\u4F1A\u5927\u5E45\u62AC\u5347 Redis \u7684 ops \u5BFC\u81F4\u7EBF\u4E0A\u62A5\u8B66\uFF0C\u8FD8\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u4F11\u7720\u53C2\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-cli -h 127.0.0.1 -p 7001 \u2013-bigkeys -i 0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u4E2A\u6307\u4EE4\u6BCF\u9694 100 \u6761 scan \u6307\u4EE4\u5C31\u4F1A\u4F11\u7720 0.1s\uFF0Cops \u5C31\u4E0D\u4F1A\u5267\u70C8\u62AC\u5347\uFF0C\u4F46\u662F\u626B\u63CF\u7684\u65F6\u95F4\u4F1A\u53D8\u957F\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><p>\u611F\u5174\u8DA3\u53EF\u4EE5\u7EE7\u7EED\u6DF1\u5165\u9605\u8BFB <a href="https://mp.weixin.qq.com/s/ufoLJiXE0wU4Bc7ZbE9cDQ" target="_blank" rel="noreferrer">\u7F8E\u56E2\u8FD1\u671F\u4FEE\u590D\u7684Scan\u7684\u4E00\u4E2Abug</a></p>`,61),o=[p];function t(c,i,r,A,y,C){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
