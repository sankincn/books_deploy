import{_ as s,c as n,o as a,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 \u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61","slug":"_3-1-\u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61","link":"#_3-1-\u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61","children":[]},{"level":2,"title":"3.2 \u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C","slug":"_3-2-\u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C","link":"#_3-2-\u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C","children":[{"level":3,"title":"3.2.1 \u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6","slug":"_3-2-1-\u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6","link":"#_3-2-1-\u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6","children":[]},{"level":3,"title":"3.2.2 \u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9","slug":"_3-2-2-\u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9","link":"#_3-2-2-\u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[{"level":3,"title":"\u4E60\u9898","slug":"\u4E60\u9898","link":"#\u4E60\u9898","children":[]}]}],"relativePath":"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF.md"}'),p={name:"JavaScript/\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528/\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF.md"},e=l(`<h1 id="\u57FA\u672C\u6570\u636E\u5904\u7406-\xB7-\u5BF9\u8C61\u5B57\u9762\u91CF" tabindex="-1">\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF <a class="header-anchor" href="#\u57FA\u672C\u6570\u636E\u5904\u7406-\xB7-\u5BF9\u8C61\u5B57\u9762\u91CF" aria-hidden="true">#</a></h1><hr><h1 id="\u7B2C-3-\u8282-\u57FA\u672C\u6570\u636E\u5904\u7406-\xB7-\u5BF9\u8C61\u5B57\u9762\u91CF" tabindex="-1">\u7B2C 3 \u8282 \u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF <a class="header-anchor" href="#\u7B2C-3-\u8282-\u57FA\u672C\u6570\u636E\u5904\u7406-\xB7-\u5BF9\u8C61\u5B57\u9762\u91CF" aria-hidden="true">#</a></h1><blockquote><p>\u201C\u90FD\u8FD9\u4E48\u5927\u4E86\uFF0C\u8FD8\u627E\u4E0D\u5230\u5BF9\u8C61\u5417\uFF1F\u201D<br> \u201C\u4E0D\u7528\u627E\uFF0C\u6211\u53EF\u4EE5 new \u4E00\u4E2A\u3002\u201D</p></blockquote><p>\u5BF9\u8C61\u662F JavaScript \u4E2D\u7684\u57FA\u7840\uFF0C\u5B83\u53EF\u4EE5\u7528\u4E8E\u8868\u8FBE\u5177\u8C61\u7684\u4E8B\u7269\uFF0C\u53EF\u4EE5\u8868\u8FBE\u62BD\u8C61\u7684\u4E8B\u7269\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u5177\u8C61\u4E8B\u7269\u62BD\u8C61\u8868\u8FBE\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p><h2 id="_3-1-\u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61" tabindex="-1">3.1 \u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61 <a class="header-anchor" href="#_3-1-\u63CF\u8FF0\u4E07\u7269\u7684\u5BF9\u8C61" aria-hidden="true">#</a></h2><blockquote><p>\u6211\u662F\u5C0F\u95EE\uFF0C\u591A\u9886\u57DF\u5F00\u53D1\u8005\uFF0C\u4E3B\u8981\u4E3A Web \u5F00\u53D1\u4E0E\u5927\u6570\u636E\u3001\u673A\u5668\u5B66\u4E60\u9886\u57DF\u3002</p></blockquote><p>\u82E5\u8981\u6839\u636E\u8FD9\u6BB5\u4E2A\u4EBA\u4ECB\u7ECD\uFF0C\u5C06\u7B14\u8005\u4F7F\u7528 JavaScript \u8FDB\u884C\u62BD\u8C61\u5316\u8868\u8FBE\uFF0C\u4FBF\u53EF\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u6765\u5B9E\u73B0\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const author = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;\u5C0F\u95EE&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;\u591A\u9886\u57DF\u5F00\u53D1\u8005&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  domains: [ &#39;Web \u5F00\u53D1&#39;, &#39;\u5927\u6570\u636E&#39;, &#39;\u673A\u5668\u5B66\u4E60&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const someone = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;Ben&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 25,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;Web Developer&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  skills: [ &#39;JavaScript&#39;, &#39;TypeScript&#39;, &#39;HTML&#39;, &#39;CSS&#39;, &#39;React&#39;, &#39;MobX&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u8C61\u5B57\u9762\u91CF\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5177\u8C61\u7684\u4E8B\u7269\u5728\u8BA1\u7B97\u673A\u7A0B\u5E8F\u4E2D\u62BD\u8C61\u5316\u8868\u8FBE\uFF0C\u4F46\u540C\u65F6\u4E5F\u53EF\u4EE5\u5C06\u4E00\u4E2A\u62BD\u8C61\u7684\u4E8B\u7269\u53D8\u5F97\u66F4\u4E3A\u5177\u8C61\uFF0C\u5C31\u597D\u6BD4\u8FD9\u4E00\u7BC7\u6587\u7AE0\u539F\u672C\u662F\u4E00\u4E2A\u62BD\u8C61\u7684\u4E8B\u7269\uFF0C\u800C\u5728\u7A0B\u5E8F\u4E2D\u5374\u53EF\u4EE5\u5C06\u5176\u5177\u8C61\u5316\u8868\u8FBE\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const post = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  serialNo: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  parentBook: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;\u5C0F\u95EE&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: &#39;\u591A\u9886\u57DF\u5F00\u53D1\u8005&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      domains: [ &#39;Web \u5F00\u53D1&#39;, &#39;\u5927\u6570\u636E&#39;, &#39;\u673A\u5668\u5B66\u4E60&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &#39;......&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136\u5BF9\u8C61\u7684\u5C5E\u6027\u952E\uFF08Key\uFF09\u4E5F\u5E76\u975E\u53EA\u80FD\u7528\u8FD9\u6837\u7684\u65B9\u5F0F\u5B9A\u4E49\uFF0C\u5982\u679C\u8BF4\u9700\u8981\u4E3A\u4E00\u4E2A\u6570\u503C\u5B9A\u4E49\u4E00\u4E9B\u6570\u5B66\u7279\u5F81\u503C\uFF0C\u5305\u62EC\u5E95\u6570\u4E3A 2 \u7684\u5BF9\u6570\u3001\u5E95\u6570\u4E3A\u81EA\u7136\u5BF9\u6570 <img src="https://juejin.cn/equation?tex=e" alt="e"> \u7684\u5BF9\u6570\u4EE5\u53CA\u5E95\u6570\u4E3A 10 \u7684\u5BF9\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const x = 1024</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getBaseLog(base, x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Math.log(x) / Math.log(base)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const baseLog = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  2: getBaseLog(2, x),</span></span>
<span class="line"><span style="color:#A6ACCD;">  e: getBaseLog(Math.E, x),</span></span>
<span class="line"><span style="color:#A6ACCD;">  10: getBaseLog(10, x)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(baseLog) //=&gt; {2: 10, 10: 3.0102999566398116, e: 6.931471805599453}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u9700\u8981\u63CF\u8FF0\u7684\u4E8B\u7269\u66F4\u52A0\u62BD\u8C61\u65F6\uFF0C\u53EF\u80FD\u8FDE\u5C5E\u6027\u952E\u90FD\u4F1A\u662F\u52A8\u6001\u751F\u6210\u7684\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u66F4\u9AD8\u7EA7\u7684\u8BED\u6CD5\u6765\u5B9E\u73B0\u8FD9\u6837\u7684\u9700\u6C42\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const prefix = &#39;MK&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const sourceVersion = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const latestVersion = 47</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const ironMan = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [prefix + sourceVersion]: &#39;2008&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [prefix + latestVersion]: &#39;2017&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(ironMan.MK47) //=&gt; 2017</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728 <code>{ [&lt;expression&gt;]: value }</code> \u4E2D\u7684 <code>expression</code> \u4E3A\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u5373\u53EF\u4EE5\u8BA1\u7B97\u51FA\u7ED3\u679C\u7684\u4EE3\u7801\uFF0C\u5982\u4E0A\u9762\u4E00\u6BB5\u4EE3\u7801\u7684 <code>prefix + sourceVersion</code>\u3002</p><h2 id="_3-2-\u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C" tabindex="-1">3.2 \u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C <a class="header-anchor" href="#_3-2-\u5BF9\u8C61\u5185\u5BB9\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u5BF9\u8C61\u88AB\u5B9A\u4E49\u4EE5\u540E\uFF0C\u81EA\u7136\u5C31\u662F\u5BF9\u5176\u7684\u4F7F\u7528\uFF0C\u800C\u6700\u76F4\u63A5\u7684\u4FBF\u662F\u5BF9\u5BF9\u8C61\u5185\u5BB9\u7684\u8BFB\u53D6\u548C\u5199\u5165\u3002</p><h3 id="_3-2-1-\u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6" tabindex="-1">3.2.1 \u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6 <a class="header-anchor" href="#_3-2-1-\u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6" aria-hidden="true">#</a></h3><p>JavaScript \u4E2D\u5BF9\u8C61\u5185\u5BB9\u8BFB\u53D6\u5341\u5206\u7684\u7B80\u5355\uFF0C\u5982\u679C\u5C5E\u6027\u952E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E14\u8BE5\u5B57\u7B26\u4E32\u4E2D\u53EA\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u4E0B\u5212\u7EBF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528 <code>&lt;obj&gt;.&lt;key&gt;</code> \u6765\u8BFB\u53D6\u5C5E\u6027\u503C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const post = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;\u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  serialNo: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  parentBook: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;\u57FA\u4E8E JavaScript \u5F00\u53D1\u7075\u6D3B\u7684\u6570\u636E\u5E94\u7528&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    author: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;\u5C0F\u95EE&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: &#39;\u591A\u9886\u57DF\u5F00\u53D1\u8005&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      domains: [ &#39;Web \u5F00\u53D1&#39;, &#39;\u5927\u6570\u636E&#39;, &#39;\u673A\u5668\u5B66\u4E60&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  content: &#39;......&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(post.title) //=&gt; \u57FA\u672C\u6570\u636E\u5904\u7406 \xB7 \u5BF9\u8C61\u5B57\u9762\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(post.parentBook.author.name) //=&gt; \u5C0F\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u800C\u5F53\u5BF9\u8C61\u4E2D\u6240\u9700\u8981\u8BFB\u53D6\u7684\u76EE\u6807\u5C5E\u6027\u952E\u4E3A\u6570\u5B57\u3001\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u4E0B\u5212\u7EBF\u4EE5\u5916\u7684\u5B57\u7B26\u4E32\u751A\u81F3\u662F <code>Symbol</code> \u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u4F7F\u7528 <code>obj[key]</code> \u7684\u5F62\u5F0F\u6765\u8BFB\u53D6\u5C5E\u6027\u503C\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  1: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;a b c&#39;: &#39;d e f&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [Symbol.for(&#39;foo&#39;)]: &#39;bar&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj[1]) //=&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj[&#39;a b c&#39;]) //=&gt; d e f</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj[Symbol.for(&#39;foo&#39;)]) //=&gt; bar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_3-2-2-\u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9" tabindex="-1">3.2.2 \u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9 <a class="header-anchor" href="#_3-2-2-\u4FEE\u6539\u5BF9\u8C61\u5185\u5BB9" aria-hidden="true">#</a></h3><p>\u867D\u7136\u4F7F\u7528 <code>const</code> \u8BED\u53E5\u6240\u5B9A\u4E49\u7684\u5BF9\u8C61\u662F\u4E0D\u80FD\u76F4\u63A5\u88AB\u66FF\u6362\u7684\uFF0C\u4F46\u662F\u5176\u4E2D\u7684\u5185\u5BB9\u4F9D\u7136\u80FD\u88AB\u4FEE\u6539\u3002</p><blockquote><p>\u5173\u4E8E <code>const</code>\u3001<code>let</code> \u548C <code>var</code> \u7684\u6545\u4E8B\uFF0C\u53EF\u4EE5\u81EA\u884C\u641C\u7D22\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u8003\u7B14\u8005\u7684<a href="https://item.jd.com/11995765.html" target="_blank" rel="noreferrer">\u300A\u5B9E\u6218 ES2015\u300B</a>\uFF0C\u5176\u4E2D\u6709\u5F88\u8BE6\u7EC6\u7684\u8BB2\u89E3\u3002</p></blockquote><p>\u5728 JavaScript \u4E2D\u5B58\u5728\u7740\u201C\u5F15\u7528\u201D\u548C\u201C\u503C\u201D\u7684\u6982\u5FF5\u533A\u522B\uFF0C\u5F53\u7136\u8FD9\u540C\u6837\u4E0D\u662F\u672C\u4E66\u7684\u8BA8\u8BBA\u8303\u56F4\u3002\u7B80\u5355\u5730\u89E3\u91CA\uFF0C\u5C31\u662F\u5BF9\u5BF9\u8C61\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u8DDF\u8FDB\u884C\u8BFB\u53D6\u7C7B\u4F3C\uFF0C\u53EA\u662F\u5728\u8BFB\u53D6\u8BED\u53E5\u540E\u9762\u52A0\u4E0A <code>= &lt;new value&gt;</code> \u5373\u53EF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  foo: &#39;bar&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  1: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;a b c&#39;: &#39;d e f&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [Symbol.for(&#39;foo&#39;)]: &#39;bar&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.foo = &#39;rab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[1] = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.foo) //=&gt; rab</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj[1]) //=&gt; 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136\uFF0C\u5F53\u4F60\u9700\u8981\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u65F6\uFF0C\u4E5F\u662F\u901A\u8FC7\u540C\u6837\u7684\u65B9\u5F0F\u6DFB\u52A0\u5C5E\u6027\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.foo = &#39;bar&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[1] = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u8981\u975E\u5E38\u6CE8\u610F\u7684\u662F\uFF0C\u5728<strong>\u4E00\u822C\u60C5\u51B5</strong>\u4E0B\uFF0C\u65E0\u8BBA\u662F\u5BF9\u5BF9\u8C61\u8FDB\u884C\u6DFB\u52A0\u3001\u8BFB\u53D6\u8FD8\u662F\u4FEE\u6539\u5C5E\u6027\uFF0C\u90FD\u9075\u5FAA\u7740\u5D4C\u5957\u94FE\u5B8C\u6574\u7684\u539F\u5219\uFF0C\u5177\u4F53\u5982\u4E0B\u4F8B\u6240\u793A\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const outer = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  inner: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">outer.inner.foo = &#39;bar&#39; // OK</span></span>
<span class="line"><span style="color:#A6ACCD;">outer.something.bar = 1 // Error!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u5BF9\u8C61\u53EF\u4EE5\u8BF4\u662F\u5728 JavaScript \u7F16\u7A0B\u5F00\u53D1\u4E2D\u6700\u6700\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u61C2\u5F97\u5982\u4F55\u5728\u6700\u57FA\u7840\u7684\u77E5\u8BC6\u4E0A\u5B66\u4F1A\u7075\u6D3B\u4F7F\u7528\uFF0C\u5728\u540E\u9762\u7684\u5B66\u4E60\u548C\u5F00\u53D1\u4E2D\u4F60\u4F1A\u53D8\u5F97\u4E8B\u534A\u529F\u500D\u3002</p><h3 id="\u4E60\u9898" tabindex="-1">\u4E60\u9898 <a class="header-anchor" href="#\u4E60\u9898" aria-hidden="true">#</a></h3><p>\u8BF7\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u63CF\u8FF0\u81EA\u5DF1\uFF0C\u5C3D\u53EF\u80FD\u591A\u5730\u4E30\u5BCC\u5BF9\u8C61\u5C5E\u6027\u5185\u5BB9\uFF0C\u5E76\u6CE8\u610F\u5176\u4E2D\u7684\u5C42\u7EA7\u5D4C\u5957\u5173\u7CFB\u3002</p>`,36),o=[e];function c(t,r,i,A,C,d){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{D as __pageData,b as default};
