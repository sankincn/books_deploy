import{_ as s,c as n,o as a,d as l}from"./app.c4f45da1.js";const y=JSON.parse('{"title":"\u539F\u7406 2-\u4EA4\u5934\u63A5\u8033 \u2014\u2014 \u901A\u4FE1\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":2,"title":"RESP(Redis Serialization Protocol)","slug":"resp-redis-serialization-protocol","link":"#resp-redis-serialization-protocol","children":[]},{"level":2,"title":"\u5BA2\u6237\u7AEF -> \u670D\u52A1\u5668","slug":"\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668","link":"#\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668","children":[]},{"level":2,"title":"\u670D\u52A1\u5668 -> \u5BA2\u6237\u7AEF","slug":"\u670D\u52A1\u5668-\u5BA2\u6237\u7AEF","link":"#\u670D\u52A1\u5668-\u5BA2\u6237\u7AEF","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 2-\u4EA4\u5934\u63A5\u8033 \u2014\u2014 \u901A\u4FE1\u534F\u8BAE.md"}'),p={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 2-\u4EA4\u5934\u63A5\u8033 \u2014\u2014 \u901A\u4FE1\u534F\u8BAE.md"},e=l(`<h1 id="\u539F\u7406-2-\u4EA4\u5934\u63A5\u8033-\u2014\u2014-\u901A\u4FE1\u534F\u8BAE" tabindex="-1">\u539F\u7406 2-\u4EA4\u5934\u63A5\u8033 \u2014\u2014 \u901A\u4FE1\u534F\u8BAE <a class="header-anchor" href="#\u539F\u7406-2-\u4EA4\u5934\u63A5\u8033-\u2014\u2014-\u901A\u4FE1\u534F\u8BAE" aria-hidden="true">#</a></h1><hr><h1 id="\u539F\u7406-2\uFF1A\u4EA4\u5934\u63A5\u8033-\u2014\u2014-\u901A\u4FE1\u534F\u8BAE" tabindex="-1">\u539F\u7406 2\uFF1A\u4EA4\u5934\u63A5\u8033 \u2014\u2014 \u901A\u4FE1\u534F\u8BAE <a class="header-anchor" href="#\u539F\u7406-2\uFF1A\u4EA4\u5934\u63A5\u8033-\u2014\u2014-\u901A\u4FE1\u534F\u8BAE" aria-hidden="true">#</a></h1><p>Redis \u7684\u4F5C\u8005\u8BA4\u4E3A\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u74F6\u9888\u4E00\u822C\u4E0D\u5728\u4E8E\u7F51\u7EDC\u6D41\u91CF\uFF0C\u800C\u662F\u6570\u636E\u5E93\u81EA\u8EAB\u5185\u90E8\u903B\u8F91\u5904\u7406\u4E0A\u3002\u6240\u4EE5\u5373\u4F7F Redis \u4F7F\u7528\u4E86\u6D6A\u8D39\u6D41\u91CF\u7684\u6587\u672C\u534F\u8BAE\uFF0C\u4F9D\u7136\u53EF\u4EE5\u53D6\u5F97\u6781\u9AD8\u7684\u8BBF\u95EE\u6027\u80FD\u3002Redis \u5C06\u6240\u6709\u6570\u636E\u90FD\u653E\u5728\u5185\u5B58\uFF0C\u7528\u4E00\u4E2A\u5355\u7EBF\u7A0B\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u5355\u4E2A\u8282\u70B9\u5728\u8DD1\u6EE1\u4E00\u4E2A CPU \u6838\u5FC3\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8FBE\u5230\u4E86 10w/s \u7684\u8D85\u9AD8 QPS\u3002</p><h2 id="resp-redis-serialization-protocol" tabindex="-1">RESP(Redis Serialization Protocol) <a class="header-anchor" href="#resp-redis-serialization-protocol" aria-hidden="true">#</a></h2><p>RESP \u662F Redis \u5E8F\u5217\u5316\u534F\u8BAE\u7684\u7B80\u5199\u3002\u5B83\u662F\u4E00\u79CD\u76F4\u89C2\u7684\u6587\u672C\u534F\u8BAE\uFF0C\u4F18\u52BF\u5728\u4E8E\u5B9E\u73B0\u5F02\u5E38\u7B80\u5355\uFF0C\u89E3\u6790\u6027\u80FD\u6781\u597D\u3002</p><p>Redis \u534F\u8BAE\u5C06\u4F20\u8F93\u7684\u7ED3\u6784\u6570\u636E\u5206\u4E3A 5 \u79CD\u6700\u5C0F\u5355\u5143\u7C7B\u578B\uFF0C\u5355\u5143\u7ED3\u675F\u65F6\u7EDF\u4E00\u52A0\u4E0A\u56DE\u8F66\u6362\u884C\u7B26\u53F7<code>\\r\\n</code>\u3002</p><ol><li>\u5355\u884C\u5B57\u7B26\u4E32 \u4EE5 <code>+</code> \u7B26\u53F7\u5F00\u5934\u3002</li><li>\u591A\u884C\u5B57\u7B26\u4E32 \u4EE5 <code>$</code> \u7B26\u53F7\u5F00\u5934\uFF0C\u540E\u8DDF\u5B57\u7B26\u4E32\u957F\u5EA6\u3002</li><li>\u6574\u6570\u503C \u4EE5 <code>:</code> \u7B26\u53F7\u5F00\u5934\uFF0C\u540E\u8DDF\u6574\u6570\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</li><li>\u9519\u8BEF\u6D88\u606F \u4EE5 <code>-</code> \u7B26\u53F7\u5F00\u5934\u3002</li><li>\u6570\u7EC4 \u4EE5 <code>*</code> \u53F7\u5F00\u5934\uFF0C\u540E\u8DDF\u6570\u7EC4\u7684\u957F\u5EA6\u3002</li></ol><p><strong>\u5355\u884C\u5B57\u7B26\u4E32</strong> hello world</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">+hello world\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u591A\u884C\u5B57\u7B26\u4E32</strong> hello world</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$11\\r\\nhello world\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u591A\u884C\u5B57\u7B26\u4E32\u5F53\u7136\u4E5F\u53EF\u4EE5\u8868\u793A\u5355\u884C\u5B57\u7B26\u4E32\u3002</p><p><strong>\u6574\u6570</strong> 1024</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">:1024\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u9519\u8BEF</strong> \u53C2\u6570\u7C7B\u578B\u9519\u8BEF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-WRONGTYPE Operation against a key holding the wrong kind of value\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u6570\u7EC4</strong> [1,2,3]</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*3\\r\\n:1\\r\\n:2\\r\\n:3\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>NULL</strong> \u7528\u591A\u884C\u5B57\u7B26\u4E32\u8868\u793A\uFF0C\u4E0D\u8FC7\u957F\u5EA6\u8981\u5199\u6210-1\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$-1\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7A7A\u4E32</strong> \u7528\u591A\u884C\u5B57\u7B26\u4E32\u8868\u793A\uFF0C\u957F\u5EA6\u586B 0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$0\\r\\n\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\u8FD9\u91CC\u6709\u4E24\u4E2A<code>\\r\\n</code>\u3002\u4E3A\u4EC0\u4E48\u662F\u4E24\u4E2A?\u56E0\u4E3A\u4E24\u4E2A<code>\\r\\n</code>\u4E4B\u95F4,\u9694\u7684\u662F\u7A7A\u4E32\u3002</p><h2 id="\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668" tabindex="-1">\u5BA2\u6237\u7AEF -&gt; \u670D\u52A1\u5668 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u7684\u6307\u4EE4\u53EA\u6709\u4E00\u79CD\u683C\u5F0F\uFF0C\u591A\u884C\u5B57\u7B26\u4E32\u6570\u7EC4\u3002\u6BD4\u5982\u4E00\u4E2A\u7B80\u5355\u7684 set \u6307\u4EE4<code>set author codehole</code>\u4F1A\u88AB\u5E8F\u5217\u5316\u6210\u4E0B\u9762\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*3\\r\\n$3\\r\\nset\\r\\n$6\\r\\nauthor\\r\\n$8\\r\\ncodehole\\r\\n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u51FA\u8FD9\u662F\u5F88\u597D\u9605\u8BFB\u7684\u4E00\u79CD\u683C\u5F0F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*3</span></span>
<span class="line"><span style="color:#A6ACCD;">$3</span></span>
<span class="line"><span style="color:#A6ACCD;">set</span></span>
<span class="line"><span style="color:#A6ACCD;">$6</span></span>
<span class="line"><span style="color:#A6ACCD;">author</span></span>
<span class="line"><span style="color:#A6ACCD;">$8</span></span>
<span class="line"><span style="color:#A6ACCD;">codehole</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u670D\u52A1\u5668-\u5BA2\u6237\u7AEF" tabindex="-1">\u670D\u52A1\u5668 -&gt; \u5BA2\u6237\u7AEF <a class="header-anchor" href="#\u670D\u52A1\u5668-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u56DE\u590D\u7684\u54CD\u5E94\u8981\u652F\u6301\u591A\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u6D88\u606F\u54CD\u5E94\u5728\u7ED3\u6784\u4E0A\u8981\u590D\u6742\u4E0D\u5C11\u3002\u4E0D\u8FC7\u518D\u590D\u6742\u7684\u54CD\u5E94\u6D88\u606F\u4E5F\u662F\u4EE5\u4E0A 5 \u4E2D\u57FA\u672C\u7C7B\u578B\u7684\u7EC4\u5408\u3002</p><p><strong>\u5355\u884C\u5B57\u7B26\u4E32\u54CD\u5E94</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; set author codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684 OK \u5C31\u662F\u5355\u884C\u54CD\u5E94\uFF0C\u6CA1\u6709\u4F7F\u7528\u5F15\u53F7\u62EC\u8D77\u6765\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">+OK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u9519\u8BEF\u54CD\u5E94</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; incr author</span></span>
<span class="line"><span style="color:#A6ACCD;">(error) ERR value is not an integer or out of range</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BD5\u56FE\u5BF9\u4E00\u4E2A\u5B57\u7B26\u4E32\u8FDB\u884C\u81EA\u589E\uFF0C\u670D\u52A1\u5668\u629B\u51FA\u4E00\u4E2A\u901A\u7528\u7684\u9519\u8BEF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-ERR value is not an integer or out of range</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u6574\u6570\u54CD\u5E94</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; incr books</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684<code>1</code>\u5C31\u662F\u6574\u6570\u54CD\u5E94</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">:1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u591A\u884C\u5B57\u7B26\u4E32\u54CD\u5E94</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; get author</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;codehole&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u4F7F\u7528\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u5B57\u7B26\u4E32\u5C31\u662F\u591A\u884C\u5B57\u7B26\u4E32\u54CD\u5E94</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$8</span></span>
<span class="line"><span style="color:#A6ACCD;">codehole</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u6570\u7EC4\u54CD\u5E94</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; hset info name laoqian</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; hset info age 30</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; hset info sex male</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 1</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; hgetall info</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) &quot;laoqian&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">3) &quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">4) &quot;30&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">5) &quot;sex&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">6) &quot;male&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684 hgetall \u547D\u4EE4\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C 0|2|4 \u4F4D\u7F6E\u7684\u5B57\u7B26\u4E32\u662F hash \u8868\u7684 key\uFF0C\u7B2C 1|3|5 \u4F4D\u7F6E\u7684\u5B57\u7B26\u4E32\u662F value\uFF0C\u5BA2\u6237\u7AEF\u8D1F\u8D23\u5C06\u6570\u7EC4\u7EC4\u88C5\u6210\u5B57\u5178\u518D\u8FD4\u56DE\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*6</span></span>
<span class="line"><span style="color:#A6ACCD;">$4</span></span>
<span class="line"><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">$6</span></span>
<span class="line"><span style="color:#A6ACCD;">laoqian</span></span>
<span class="line"><span style="color:#A6ACCD;">$3</span></span>
<span class="line"><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#A6ACCD;">$2</span></span>
<span class="line"><span style="color:#A6ACCD;">30</span></span>
<span class="line"><span style="color:#A6ACCD;">$3</span></span>
<span class="line"><span style="color:#A6ACCD;">sex</span></span>
<span class="line"><span style="color:#A6ACCD;">$4</span></span>
<span class="line"><span style="color:#A6ACCD;">male</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u5D4C\u5957</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1:6379&gt; scan 0</span></span>
<span class="line"><span style="color:#A6ACCD;">1) &quot;0&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">2) 1) &quot;info&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   2) &quot;books&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   3) &quot;author&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>scan \u547D\u4EE4\u7528\u6765\u626B\u63CF\u670D\u52A1\u5668\u5305\u542B\u7684\u6240\u6709 key \u5217\u8868\uFF0C\u5B83\u662F\u4EE5\u6E38\u6807\u7684\u5F62\u5F0F\u83B7\u53D6\uFF0C\u4E00\u6B21\u53EA\u83B7\u53D6\u4E00\u90E8\u5206\u3002</p><p>scan \u547D\u4EE4\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5D4C\u5957\u6570\u7EC4\u3002\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u503C\u8868\u793A\u6E38\u6807\u7684\u503C\uFF0C\u5982\u679C\u8FD9\u4E2A\u503C\u4E3A\u96F6\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u904D\u5386\u5B8C\u6BD5\u3002\u5982\u679C\u4E0D\u4E3A\u96F6\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u503C\u4F5C\u4E3A scan \u547D\u4EE4\u7684\u53C2\u6570\u8FDB\u884C\u4E0B\u4E00\u6B21\u904D\u5386\u3002\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u503C\u53C8\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5C31\u662F key \u5217\u8868\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*2</span></span>
<span class="line"><span style="color:#A6ACCD;">$1</span></span>
<span class="line"><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">*3</span></span>
<span class="line"><span style="color:#A6ACCD;">$4</span></span>
<span class="line"><span style="color:#A6ACCD;">info</span></span>
<span class="line"><span style="color:#A6ACCD;">$5</span></span>
<span class="line"><span style="color:#A6ACCD;">books</span></span>
<span class="line"><span style="color:#A6ACCD;">$6</span></span>
<span class="line"><span style="color:#A6ACCD;">author</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>Redis \u534F\u8BAE\u91CC\u6709\u5927\u91CF\u5197\u4F59\u7684\u56DE\u8F66\u6362\u884C\u7B26\uFF0C\u4F46\u662F\u8FD9\u4E0D\u5F71\u54CD\u5B83\u6210\u4E3A\u4E92\u8054\u7F51\u6280\u672F\u9886\u57DF\u975E\u5E38\u53D7\u6B22\u8FCE\u7684\u4E00\u4E2A\u6587\u672C\u534F\u8BAE\u3002\u6709\u5F88\u591A\u5F00\u6E90\u9879\u76EE\u4F7F\u7528 RESP \u4F5C\u4E3A\u5B83\u7684\u901A\u8BAF\u534F\u8BAE\u3002\u5728\u6280\u672F\u9886\u57DF\u6027\u80FD\u5E76\u4E0D\u603B\u662F\u4E00\u5207\uFF0C\u8FD8\u6709\u7B80\u5355\u6027\u3001\u6613\u7406\u89E3\u6027\u548C\u6613\u5B9E\u73B0\u6027\uFF0C\u8FD9\u4E9B\u90FD\u9700\u8981\u8FDB\u884C\u9002\u5F53\u6743\u8861\u3002</p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u60F3\u81EA\u5DF1\u5B9E\u73B0\u4E00\u5957Redis\u534F\u8BAE\u7684\u89E3\u7801\u5668\uFF0C\u8BF7\u9605\u8BFB\u8001\u94B1\u7684\u53E6\u4E00\u7BC7\u6587\u7AE0<a href="https://juejin.cn/post/6844903577459113998" target="_blank" rel="noreferrer">\u300A\u57FA\u4E8ENetty\u5B9E\u73B0Redis\u534F\u8BAE\u7684\u7F16\u7801\u89E3\u7801\u5668\u300B</a></p>`,60),o=[e];function c(t,r,i,A,C,d){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{y as __pageData,u as default};
