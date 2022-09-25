import{_ as s,c as a,o as e,d as n}from"./app.e5528619.js";const h=JSON.parse('{"title":"\u8FDB\u9636 1-\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","slug":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","link":"#\u672C\u8282\u6838\u5FC3\u5185\u5BB9","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F HTTPS","slug":"\u4EC0\u4E48\u662F-https","link":"#\u4EC0\u4E48\u662F-https","children":[]},{"level":2,"title":"HTTPS \u7684\u5B9E\u73B0\u539F\u7406","slug":"https-\u7684\u5B9E\u73B0\u539F\u7406","link":"#https-\u7684\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"Go \u8BED\u8A00 HTTPS \u652F\u6301","slug":"go-\u8BED\u8A00-https-\u652F\u6301","link":"#go-\u8BED\u8A00-https-\u652F\u6301","children":[]},{"level":2,"title":"API Server \u6DFB\u52A0 HTTPS \u652F\u6301","slug":"api-server-\u6DFB\u52A0-https-\u652F\u6301","link":"#api-server-\u6DFB\u52A0-https-\u652F\u6301","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5E76\u6D4B\u8BD5","slug":"\u7F16\u8BD1\u5E76\u6D4B\u8BD5","link":"#\u7F16\u8BD1\u5E76\u6D4B\u8BD5","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 1-\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42.md"}'),l={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 1-\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42.md"},p=n(`<h1 id="\u8FDB\u9636-1-\u7528-https-\u52A0\u5BC6-api-\u8BF7\u6C42" tabindex="-1">\u8FDB\u9636 1-\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42 <a class="header-anchor" href="#\u8FDB\u9636-1-\u7528-https-\u52A0\u5BC6-api-\u8BF7\u6C42" aria-hidden="true">#</a></h1><hr><h1 id="\u7528-https-\u52A0\u5BC6-api-\u8BF7\u6C42" tabindex="-1">\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42 <a class="header-anchor" href="#\u7528-https-\u52A0\u5BC6-api-\u8BF7\u6C42" aria-hidden="true">#</a></h1><h2 id="\u672C\u8282\u6838\u5FC3\u5185\u5BB9" tabindex="-1">\u672C\u8282\u6838\u5FC3\u5185\u5BB9 <a class="header-anchor" href="#\u672C\u8282\u6838\u5FC3\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li>\u4ECB\u7ECD HTTPS \u57FA\u672C\u539F\u7406</li><li>\u4ECB\u7ECD\u5982\u4F55\u7528 HTTPS \u52A0\u5BC6 API \u8BF7\u6C42\uFF0C\u5E76\u6D4B\u8BD5\u52A0\u5BC6\u6548\u679C</li></ul><blockquote><p>\u672C\u5C0F\u8282\u6E90\u7801\u4E0B\u8F7D\u8DEF\u5F84\uFF1A<a href="https://github.com/lexkong/apiserver_demos/tree/master/demo10" target="_blank" rel="noreferrer">demo10</a></p><p>\u53EF\u5148\u4E0B\u8F7D\u6E90\u7801\u5230\u672C\u5730\uFF0C\u7ED3\u5408\u6E90\u7801\u7406\u89E3\u540E\u7EED\u5185\u5BB9\uFF0C\u8FB9\u5B66\u8FB9\u7EC3\u3002</p><p>\u672C\u5C0F\u8282\u7684\u4EE3\u7801\u662F\u57FA\u4E8E <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo09" target="_blank" rel="noreferrer">demo09</a> \u6765\u5F00\u53D1\u7684\u3002</p></blockquote><h2 id="\u4EC0\u4E48\u662F-https" tabindex="-1">\u4EC0\u4E48\u662F HTTPS <a class="header-anchor" href="#\u4EC0\u4E48\u662F-https" aria-hidden="true">#</a></h2><p>\u5728\u524D\u9762\u7684\u5C0F\u8282\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u4E0E API \u670D\u52A1\u5668\u8BF7\u6C42\u54CD\u5E94\u7528\u7684\u662F HTTP\uFF0C\u4E0D\u8FC7 HTTP \u662F\u660E\u6587\u7684\uFF0C\u5728\u7F51\u7EDC\u4E0A\u8FDB\u884C\u4F20\u8F93\u53EF\u80FD\u4F1A\u88AB\u7A83\u542C\u3001\u7BE1\u6539\u751A\u81F3\u5192\u5145\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u7684 API \u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u901A\u5E38\u9700\u8981\u91C7\u7528\u66F4\u5B89\u5168\u7684 HTTPS \u534F\u8BAE\u3002</p><p>HTTPS\uFF08\u5168\u79F0 Hyper Text Transfer Protocol over Secure Socket Layer\uFF09\uFF0C\u662F\u4EE5\u5B89\u5168\u4E3A\u76EE\u6807\u7684 HTTP \u901A\u9053\uFF0C\u7B80\u5355\u8BB2\u662F HTTP \u7684\u5B89\u5168\u7248\u3002\u5373 HTTP \u4E0B\u52A0\u5165 SSL \u5C42\uFF0CHTTPS \u7684\u5B89\u5168\u57FA\u7840\u662F SSL\uFF0C\u56E0\u6B64\u52A0\u5BC6\u7684\u8BE6\u7EC6\u5185\u5BB9\u5C31\u9700\u8981 SSL\u3002</p><blockquote><p>SSL\uFF1A\u5B89\u5168\u5957\u63A5\u5C42\uFF0C\u662F Netscape \u516C\u53F8\u8BBE\u8BA1\u7684\u4E3B\u8981\u7528\u4E8E Web \u7684\u5B89\u5168\u4F20\u8F93\u534F\u8BAE\u3002\u8FD9\u79CD\u534F\u8BAE\u5728 Web \u4E0A\u83B7\u5F97\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\u3002\u901A\u8FC7\u8BC1\u4E66\u8BA4\u8BC1\u6765\u786E\u4FDD\u5BA2\u6237\u7AEF\u548C\u7F51\u7AD9\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u901A\u4FE1\u6570\u636E\u662F\u52A0\u5BC6\u5B89\u5168\u7684\u3002</p><p>TLS \u662F SSL \u7684\u5347\u7EA7\u7248\uFF0C\u4F7F\u7528\u5C42\u9762\uFF0C\u8BFB\u8005\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E8C\u8005\u65E0\u533A\u522B\u3002</p></blockquote><h2 id="https-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1">HTTPS \u7684\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#https-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><p>HTTPS \u5728\u4F20\u8F93\u6570\u636E\u4E4B\u524D\u9700\u8981\u5BA2\u6237\u7AEF\uFF08\u6D4F\u89C8\u5668\uFF09\u4E0E\u670D\u52A1\u7AEF\uFF08\u7F51\u7AD9\uFF09\u4E4B\u95F4\u8FDB\u884C\u4E00\u6B21\u63E1\u624B\uFF0C\u5728\u63E1\u624B\u8FC7\u7A0B\u4E2D\u5C06\u786E\u7ACB\u53CC\u65B9\u52A0\u5BC6\u4F20\u8F93\u6570\u636E\u7684\u5BC6\u7801\u4FE1\u606F\u3002</p><p>\u6709\u4E24\u79CD\u57FA\u672C\u7684\u52A0\u89E3\u5BC6\u7B97\u6CD5\u7C7B\u578B\uFF1A</p><ol><li><p>\u5BF9\u79F0\u52A0\u5BC6\uFF1A\u5BC6\u94A5\u53EA\u6709\u4E00\u4E2A\uFF0C\u52A0\u5BC6\u89E3\u5BC6\u4E3A\u540C\u4E00\u4E2A\u5BC6\u7801\uFF0C\u4E14\u52A0\u89E3\u5BC6\u901F\u5EA6\u5FEB\uFF0C\u5178\u578B\u7684\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u6709 DES\u3001AES \u7B49\u3002</p></li><li><p>\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF1A\u5BC6\u94A5\u6210\u5BF9\u51FA\u73B0\uFF08\u4E14\u6839\u636E\u516C\u94A5\u65E0\u6CD5\u63A8\u77E5\u79C1\u94A5\uFF0C\u6839\u636E\u79C1\u94A5\u4E5F\u65E0\u6CD5\u63A8\u77E5\u516C\u94A5\uFF09\uFF0C\u52A0\u5BC6\u89E3\u5BC6\u4F7F\u7528\u4E0D\u540C\u5BC6\u94A5\uFF08\u516C\u94A5\u52A0\u5BC6\u9700\u8981\u79C1\u94A5\u89E3\u5BC6\uFF0C\u79C1\u94A5\u52A0\u5BC6\u9700\u8981\u516C\u94A5\u89E3\u5BC6\uFF09\uFF0C\u76F8\u5BF9\u5BF9\u79F0\u52A0\u5BC6\u901F\u5EA6\u8F83\u6162\uFF0C\u5178\u578B\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u6709 RSA\u3001DSA \u7B49\u3002</p></li></ol><p>\u4E0B\u56FE\u662F HTTPS \u7684\u901A\u4FE1\u8FC7\u7A0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/7/163dae1f30eba0a6~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6D41\u7A0B\u5927\u6982\u662F\u8FD9\u6837\u7684\uFF1A</p><ol><li><p>SSL \u5BA2\u6237\u7AEF\u901A\u8FC7 TCP \u548C\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u4E4B\u540E\uFF08443 \u7AEF\u53E3\uFF09\uFF0C\u5E76\u4E14\u5728\u4E00\u822C\u7684 TCP \u8FDE\u63A5\u534F\u5546\uFF08\u63E1\u624B\uFF09\u8FC7\u7A0B\u4E2D\u8BF7\u6C42\u8BC1\u4E66\u3002</p><p>\u5373\u5BA2\u6237\u7AEF\u53D1\u51FA\u4E00\u4E2A\u6D88\u606F\u7ED9\u670D\u52A1\u5668\uFF0C\u8FD9\u4E2A\u6D88\u606F\u91CC\u9762\u5305\u542B\u4E86\u81EA\u5DF1\u53EF\u5B9E\u73B0\u7684\u7B97\u6CD5\u5217\u8868\u548C\u5176\u5B83\u4E00\u4E9B\u9700\u8981\u7684\u6D88\u606F\uFF0CSSL \u7684\u670D\u52A1\u5668\u7AEF\u4F1A\u56DE\u5E94\u4E00\u4E2A\u6570\u636E\u5305\uFF0C\u8FD9\u91CC\u9762\u786E\u5B9A\u4E86\u8FD9\u6B21\u901A\u4FE1\u6240\u9700\u8981\u7684\u7B97\u6CD5\uFF0C\u7136\u540E\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u8BC1\u4E66\u3002\uFF08\u8BC1\u4E66\u91CC\u9762\u5305\u542B\u4E86\u670D\u52A1\u5668\u4FE1\u606F \u2014\u2014 \u57DF\u540D\u3001\u7533\u8BF7\u8BC1\u4E66\u7684\u516C\u53F8\u3001\u516C\u5171\u79D8\u94A5\u3002\uFF09</p></li><li><p>\u5BA2\u6237\u7AEF\u5728\u6536\u5230\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u8BC1\u4E66\u540E\uFF0C\u5224\u65AD\u7B7E\u53D1\u8FD9\u4E2A\u8BC1\u4E66\u7684\u516C\u5171\u7B7E\u53D1\u673A\u6784\uFF0C\u5E76\u4F7F\u7528\u8FD9\u4E2A\u673A\u6784\u7684\u516C\u5171\u79D8\u94A5\u786E\u8BA4\u7B7E\u540D\u662F\u5426\u6709\u6548\uFF0C\u5BA2\u6237\u7AEF\u8FD8\u4F1A\u786E\u4FDD\u8BC1\u4E66\u4E2D\u5217\u51FA\u7684\u57DF\u540D\u5C31\u662F\u5B83\u6B63\u5728\u8FDE\u63A5\u7684\u57DF\u540D\u3002</p></li><li><p>\u5982\u679C\u786E\u8BA4\u8BC1\u4E66\u6709\u6548\uFF0C\u90A3\u4E48\u751F\u6210\u5BF9\u79F0\u79D8\u94A5\u5E76\u4F7F\u7528\u670D\u52A1\u5668\u7684\u516C\u5171\u79D8\u94A5\u8FDB\u884C\u52A0\u5BC6\u3002\u7136\u540E\u628A\u5B83\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u4F7F\u7528\u5B83\u7684\u79C1\u94A5\u89E3\u5BC6\u51FA\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u7136\u540E\u628A\u5185\u5BB9\u901A\u8FC7\u4F1A\u8BDD\u5BC6\u94A5\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u8FD9\u6837\u4E24\u53F0\u8BA1\u7B97\u673A\u53EF\u4EE5\u5F00\u59CB\u8FDB\u884C\u5BF9\u79F0\u52A0\u5BC6\u8FDB\u884C\u901A\u4FE1\u3002</p></li></ol><p>HTTPS \u901A\u4FE1\u7684\u4F18\u70B9\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u4EA7\u751F\u7684\u5BC6\u94A5\u53EA\u6709\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u80FD\u5F97\u5230\uFF1B</li><li>\u52A0\u5BC6\u7684\u6570\u636E\u53EA\u6709\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u624D\u80FD\u5F97\u5230\u660E\u6587\uFF1B</li><li>\u5BA2\u6237\u7AEF\u5230\u670D\u52A1\u7AEF\u7684\u901A\u4FE1\u662F\u5B89\u5168\u7684\u3002</li></ol><h2 id="go-\u8BED\u8A00-https-\u652F\u6301" tabindex="-1">Go \u8BED\u8A00 HTTPS \u652F\u6301 <a class="header-anchor" href="#go-\u8BED\u8A00-https-\u652F\u6301" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u7684 <code>net/http</code> \u5305\u4E2D\u7684 <code>ListenAndServeTLS()</code> \u51FD\u6570\u63D0\u4F9B\u4E86\u5BF9 HTTPS \u7684\u652F\u6301\u3002<code>ListenAndServeTLS()</code> \u51FD\u6570\u7684\u539F\u578B\u4E3A\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListenAndServeTLS</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">addr </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> certFile </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> keyFile </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler Handler</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u4E2A\u51FD\u6570\u539F\u578B\u5176\u5B9E\u548C HTTP \u65B9\u5F0F\u7684\u5DEE\u522B\u5C31\u5728\u4E8E\uFF0C\u9700\u8981\u63D0\u4F9B\u6570\u5B57\u8BC1\u4E66 certFile \u548C\u79C1\u94A5\u6587\u4EF6 keyFile\u3002\u5728\u6D4B\u8BD5\u73AF\u5883\uFF0C\u6211\u4EEC\u6CA1\u6709\u5FC5\u8981\u82B1\u94B1\u53BB\u8D2D\u4E70\u4EC0\u4E48\u8BC1\u4E66\uFF0C\u5229\u7528 OpenSSL \u5DE5\u5177\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u751F\u6210\u79C1\u94A5\u6587\u4EF6\u548C\u81EA\u7B7E\u53D1\u7684\u6570\u5B57\u8BC1\u4E66\u3002</p><h2 id="api-server-\u6DFB\u52A0-https-\u652F\u6301" tabindex="-1">API Server \u6DFB\u52A0 HTTPS \u652F\u6301 <a class="header-anchor" href="#api-server-\u6DFB\u52A0-https-\u652F\u6301" aria-hidden="true">#</a></h2><p>\u5728 apiserver \u4E2D\u6DFB\u52A0 HTTPS \u529F\u80FD\uFF0C\u6B65\u9AA4\u5F88\u7B80\u5355\uFF0C\u5927\u6982\u5206\u4E3A\u4EE5\u4E0B\u4E09\u6B65\u3002</p><ol><li><pre><code>\u751F\u6210\u79C1\u94A5\u6587\u4EF6\uFF08server.key\uFF09\u548C\u81EA\u7B7E\u53D1\u7684\u6570\u5B57\u8BC1\u4E66\uFF08server.crt\uFF09\uFF1A
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ openssl req -new -nodes -x509 -out conf/server.crt -keyout conf/server.key -days 3650 -subj &quot;/C=DE/ST=NRW/L=Earth/O=Random Company/OU=IT/CN=127.0.0.1/emailAddress=xxxxx@qq.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/5/163cf724c4b040d0~tplv-t2oaga2asx-image.image" alt=""></p><ol start="2"><li>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u79C1\u94A5\u6587\u4EF6\u3001\u6570\u5B57\u8BC1\u4E66\u6587\u4EF6\u7684\u8DEF\u5F84\u548C HTTPS \u7AEF\u53E3\uFF0C\u4F9B <code>ListenAndServeTLS()</code> \u51FD\u6570\u8C03\u7528\uFF1A</li></ol><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/5/163cf71f93559335~tplv-t2oaga2asx-image.image" alt=""></p><ol start="3"><li>\u5728 <code>main</code> \u51FD\u6570\u4E2D\u589E\u52A0 <code>ListenAndServeTLS()</code> \u8C03\u7528\uFF0C\u542F\u52A8 HTTPS \u7AEF\u53E3\uFF1A</li></ol><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/5/163cf74236089563~tplv-t2oaga2asx-image.image" alt=""></p><p><code>main</code> \u51FD\u6570\u7684\u903B\u8F91\u662F\uFF1A\u5982\u679C\u63D0\u4F9B\u4E86 TLS \u8BC1\u4E66\u548C\u79C1\u94A5\u5219\u542F\u52A8 HTTPS \u7AEF\u53E3\u3002</p><blockquote><p>\u521B\u5EFA\u8BC1\u4E66\u548C\u5BC6\u94A5\u9700\u8981 Linux \u5B89\u88C5 <code>openssl</code> \u5DE5\u5177\uFF0C\u5927\u90E8\u5206 Linux \u53D1\u884C\u7248\u5DF2\u7ECF\u9ED8\u8BA4\u5B89\u88C5\uFF0C\u5982\u679C\u6CA1\u6709\u5B89\u88C5\u8BF7\u5B89\u88C5\u3002</p></blockquote><h2 id="\u7F16\u8BD1\u5E76\u6D4B\u8BD5" tabindex="-1">\u7F16\u8BD1\u5E76\u6D4B\u8BD5 <a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u6D4B\u8BD5" aria-hidden="true">#</a></h2><ol><li><pre><code>\u4E0B\u8F7D apiserver\\_demos \u6E90\u7801\u5305\uFF08\u5982\u524D\u9762\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6B65\u9AA4\uFF09
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/apiserver_demos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u5C06 \`apiserver_demos/demo10\` \u590D\u5236\u4E3A \`$GOPATH/src/apiserver\`
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cp -a apiserver_demos/demo10/ $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><pre><code>\u5728 apiserver \u76EE\u5F55\u4E0B\u7F16\u8BD1\u6E90\u7801
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cd $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gofmt -w .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go tool vet .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go build -v .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u8BF7\u6C42\u65F6\u4E0D\u643A\u5E26 CA \u8BC1\u4E66\u548C\u79C1\u94A5</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl -XGET -H &quot;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjgwMTY5MjIsImlkIjowLCJuYmYiOjE1MjgwMTY5MjIsInVzZXJuYW1lIjoiYWRtaW4ifQ.LjxrK9DuAwAzUD8-9v43NzWBN7HXsSLfebw92DKd1JQ&quot; -H &quot;Content-Type: application/json&quot; https://127.0.0.1:8081/v1/user</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">curl: (60) Peer certificate cannot be authenticated with known CA certificates</span></span>
<span class="line"><span style="color:#A6ACCD;">More details here: http://curl.haxx.se/docs/sslcerts.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">curl performs SSL certificate verification by default, using a &quot;bundle&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> of Certificate Authority (CA) public keys (CA certs). If the default</span></span>
<span class="line"><span style="color:#A6ACCD;"> bundle file isn&#39;t adequate, you can specify an alternate file</span></span>
<span class="line"><span style="color:#A6ACCD;"> using the --cacert option.</span></span>
<span class="line"><span style="color:#A6ACCD;">If this HTTPS server uses a certificate signed by a CA represented in</span></span>
<span class="line"><span style="color:#A6ACCD;"> the bundle, the certificate verification probably failed due to a</span></span>
<span class="line"><span style="color:#A6ACCD;"> problem with the certificate (it might be expired, or the name might</span></span>
<span class="line"><span style="color:#A6ACCD;"> not match the domain name in the URL).</span></span>
<span class="line"><span style="color:#A6ACCD;">If you&#39;d like to turn off curl&#39;s verification of the certificate, use</span></span>
<span class="line"><span style="color:#A6ACCD;"> the -k (or --insecure) option.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u8BA4\u8BC1\u5931\u8D25\u3002</p><blockquote><p>\u8BF7\u6C42\u534F\u8BAE\u9700\u8981\u662F HTTPS\uFF0C\u8BF7\u6C42\u7684\u7AEF\u53E3\u9700\u8981\u662F HTTPS \u7684 8081 \u7AEF\u53E3\u3002</p></blockquote><p><strong>\u8BF7\u6C42\u65F6\u643A\u5E26 CA \u8BC1\u4E66\u548C\u79C1\u94A5</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl -XGET -H &quot;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjgwMTY5MjIsImlkIjowLCJuYmYiOjE1MjgwMTY5MjIsInVzZXJuYW1lIjoiYWRtaW4ifQ.LjxrK9DuAwAzUD8-9v43NzWBN7HXsSLfebw92DKd1JQ&quot; -H &quot;Content-Type: application/json&quot; https://127.0.0.1:8081/v1/user --cacert conf/server.crt --cert conf/server.crt --key conf/server.key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;code&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;message&quot;: &quot;OK&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;totalCount&quot;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;userList&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;id&quot;: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;username&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;sayHello&quot;: &quot;Hello qybyTdSmg&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;password&quot;: &quot;$2a$10$veGcArz47VGj7l9xN7g2iuT9TF21jLI1YGXarGzvARNdnt4inC9PG&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;createdAt&quot;: &quot;2018-05-28 00:25:33&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;updatedAt&quot;: &quot;2018-05-28 00:25:33&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6210\u529F\u8BF7\u6C42\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u662F API \u5F00\u53D1\u7684\u8FDB\u9636\u5185\u5BB9\uFF0C\u8BB2\u89E3\u4E86\u5982\u4F55\u7ED9 HTTP \u8BF7\u6C42\u8FDB\u884C\u6570\u636E\u52A0\u5BC6\u3002\u5728\u4F01\u4E1A\u7EA7\u7684 API \u670D\u52A1\u5668\u4E2D\uFF0C\u901A\u5E38\u4F1A\u8FDB\u884C HTTPS \u52A0\u5BC6\u3002</p>`,51),t=[p];function o(r,c,i,d,A,u){return e(),a("div",null,t)}const T=s(l,[["render",o]]);export{h as __pageData,T as default};
