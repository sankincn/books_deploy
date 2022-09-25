import{_ as e,c as a,o as s,d as t}from"./app.c4f45da1.js";const _=JSON.parse('{"title":"\u539F\u7406 4-\u96F7\u5389\u98CE\u884C \u2014\u2014 \u7BA1\u9053","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis \u7684\u6D88\u606F\u4EA4\u4E92","slug":"redis-\u7684\u6D88\u606F\u4EA4\u4E92","link":"#redis-\u7684\u6D88\u606F\u4EA4\u4E92","children":[]},{"level":2,"title":"\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5","slug":"\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5","link":"#\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5","children":[]},{"level":2,"title":"\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28","slug":"\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28","link":"#\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 4-\u96F7\u5389\u98CE\u884C \u2014\u2014 \u7BA1\u9053.md"}'),d={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 4-\u96F7\u5389\u98CE\u884C \u2014\u2014 \u7BA1\u9053.md"},c=t(`<h1 id="\u539F\u7406-4-\u96F7\u5389\u98CE\u884C-\u2014\u2014-\u7BA1\u9053" tabindex="-1">\u539F\u7406 4-\u96F7\u5389\u98CE\u884C \u2014\u2014 \u7BA1\u9053 <a class="header-anchor" href="#\u539F\u7406-4-\u96F7\u5389\u98CE\u884C-\u2014\u2014-\u7BA1\u9053" aria-hidden="true">#</a></h1><hr><h1 id="\u539F\u7406-4\uFF1A\u96F7\u5389\u98CE\u884C-\u2014\u2014-\u7BA1\u9053" tabindex="-1">\u539F\u7406 4\uFF1A\u96F7\u5389\u98CE\u884C \u2014\u2014 \u7BA1\u9053 <a class="header-anchor" href="#\u539F\u7406-4\uFF1A\u96F7\u5389\u98CE\u884C-\u2014\u2014-\u7BA1\u9053" aria-hidden="true">#</a></h1><p>\u5927\u591A\u6570\u540C\u5B66\u4E00\u76F4\u4EE5\u6765\u5BF9 Redis \u7BA1\u9053\u6709\u4E00\u4E2A\u8BEF\u89E3\uFF0C\u4ED6\u4EEC\u4EE5\u4E3A\u8FD9\u662F Redis \u670D\u52A1\u5668\u63D0\u4F9B\u7684\u4E00\u79CD\u7279\u522B\u7684\u6280\u672F\uFF0C\u6709\u4E86\u8FD9\u79CD\u6280\u672F\u5C31\u53EF\u4EE5\u52A0\u901F Redis \u7684\u5B58\u53D6\u6548\u7387\u3002\u4F46\u662F\u5B9E\u9645\u4E0A Redis \u7BA1\u9053 (Pipeline) \u672C\u8EAB\u5E76\u4E0D\u662F Redis \u670D\u52A1\u5668\u76F4\u63A5\u63D0\u4F9B\u7684\u6280\u672F\uFF0C\u8FD9\u4E2A\u6280\u672F\u672C\u8D28\u4E0A\u662F\u7531\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\uFF0C\u8DDF\u670D\u52A1\u5668\u6CA1\u6709\u4EC0\u4E48\u76F4\u63A5\u7684\u5173\u7CFB\u3002\u4E0B\u9762\u6211\u4EEC\u5BF9\u8FD9\u5757\u505A\u4E00\u4E2A\u6DF1\u5165\u63A2\u7A76\u3002</p><h2 id="redis-\u7684\u6D88\u606F\u4EA4\u4E92" tabindex="-1">Redis \u7684\u6D88\u606F\u4EA4\u4E92 <a class="header-anchor" href="#redis-\u7684\u6D88\u606F\u4EA4\u4E92" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u5BA2\u6237\u7AEF\u5BF9 Redis \u8FDB\u884C\u4E00\u6B21\u64CD\u4F5C\u65F6\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u5BA2\u6237\u7AEF\u5C06\u8BF7\u6C42\u4F20\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u5904\u7406\u5B8C\u6BD5\u540E\uFF0C\u518D\u5C06\u54CD\u5E94\u56DE\u590D\u7ED9\u5BA2\u6237\u7AEF\u3002\u8FD9\u8981\u82B1\u8D39\u4E00\u4E2A\u7F51\u7EDC\u6570\u636E\u5305\u6765\u56DE\u7684\u65F6\u95F4\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648204d4930cc08~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5982\u679C\u8FDE\u7EED\u6267\u884C\u591A\u6761\u6307\u4EE4\uFF0C\u90A3\u5C31\u4F1A\u82B1\u8D39\u591A\u4E2A\u7F51\u7EDC\u6570\u636E\u5305\u6765\u56DE\u7684\u65F6\u95F4\u3002\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648205b22725764~tplv-t2oaga2asx-image.image" alt=""></p><p>\u56DE\u5230\u5BA2\u6237\u7AEF\u4EE3\u7801\u5C42\u9762\uFF0C\u5BA2\u6237\u7AEF\u662F\u7ECF\u5386\u4E86\u5199-\u8BFB-\u5199-\u8BFB\u56DB\u4E2A\u64CD\u4F5C\u624D\u5B8C\u6574\u5730\u6267\u884C\u4E86\u4E24\u6761\u6307\u4EE4\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/164820734e963482~tplv-t2oaga2asx-image.image" alt=""></p><p>\u73B0\u5728\u5982\u679C\u6211\u4EEC\u8C03\u6574\u8BFB\u5199\u987A\u5E8F\uFF0C\u6539\u6210\u5199\u2014\u5199-\u8BFB-\u8BFB\uFF0C\u8FD9\u4E24\u4E2A\u6307\u4EE4\u540C\u6837\u53EF\u4EE5\u6B63\u5E38\u5B8C\u6210\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/16482078e3ea3ece~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E24\u4E2A\u8FDE\u7EED\u7684\u5199\u64CD\u4F5C\u548C\u4E24\u4E2A\u8FDE\u7EED\u7684\u8BFB\u64CD\u4F5C\u603B\u5171\u53EA\u4F1A\u82B1\u8D39\u4E00\u6B21\u7F51\u7EDC\u6765\u56DE\uFF0C\u5C31\u597D\u6BD4\u8FDE\u7EED\u7684 write \u64CD\u4F5C\u5408\u5E76\u4E86\uFF0C\u8FDE\u7EED\u7684 read \u64CD\u4F5C\u4E5F\u5408\u5E76\u4E86\u4E00\u6837\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648209937f6d508~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u4FBF\u662F\u7BA1\u9053\u64CD\u4F5C\u7684\u672C\u8D28\uFF0C\u670D\u52A1\u5668\u6839\u672C\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\u5BF9\u5F85\uFF0C\u8FD8\u662F\u6536\u5230\u4E00\u6761\u6D88\u606F\uFF0C\u6267\u884C\u4E00\u6761\u6D88\u606F\uFF0C\u56DE\u590D\u4E00\u6761\u6D88\u606F\u7684\u6B63\u5E38\u7684\u6D41\u7A0B\u3002\u5BA2\u6237\u7AEF\u901A\u8FC7\u5BF9\u7BA1\u9053\u4E2D\u7684\u6307\u4EE4\u5217\u8868\u6539\u53D8\u8BFB\u5199\u987A\u5E8F\u5C31\u53EF\u4EE5\u5927\u5E45\u8282\u7701 IO \u65F6\u95F4\u3002\u7BA1\u9053\u4E2D\u6307\u4EE4\u8D8A\u591A\uFF0C\u6548\u679C\u8D8A\u597D\u3002</p><h2 id="\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5" tabindex="-1">\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5 <a class="header-anchor" href="#\u7BA1\u9053\u538B\u529B\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5B9E\u8DF5\u4E00\u4E0B\u7BA1\u9053\u7684\u529B\u91CF\u3002</p><p>Redis \u81EA\u5E26\u4E86\u4E00\u4E2A\u538B\u529B\u6D4B\u8BD5\u5DE5\u5177<code>redis-benchmark</code>\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u5C31\u53EF\u4EE5\u8FDB\u884C\u7BA1\u9053\u6D4B\u8BD5\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5BF9\u4E00\u4E2A\u666E\u901A\u7684 set \u6307\u4EE4\u8FDB\u884C\u538B\u6D4B\uFF0CQPS \u5927\u7EA6 5w/s\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; redis-benchmark -t set -q</span></span>
<span class="line"><span style="color:#A6ACCD;">SET: 51975.05 requests per second</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u52A0\u5165\u7BA1\u9053\u9009\u9879<code>-P</code>\u53C2\u6570\uFF0C\u5B83\u8868\u793A\u5355\u4E2A\u7BA1\u9053\u5185\u5E76\u884C\u7684\u8BF7\u6C42\u6570\u91CF\uFF0C\u770B\u4E0B\u9762<code>P=2</code>\uFF0CQPS \u8FBE\u5230\u4E86 9w/s\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; redis-benchmark -t set -P 2 -q</span></span>
<span class="line"><span style="color:#A6ACCD;">SET: 91240.88 requests per second</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u770B\u770B<code>P=3</code>\uFF0CQPS \u8FBE\u5230\u4E86 10w/s\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">SET: 102354.15 requests per second</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F46\u5982\u679C\u518D\u7EE7\u7EED\u63D0\u5347 P \u53C2\u6570\uFF0C\u53D1\u73B0 QPS \u5DF2\u7ECF\u4E0A\u4E0D\u53BB\u4E86\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u56E0\u4E3A\u8FD9\u91CC CPU \u5904\u7406\u80FD\u529B\u5DF2\u7ECF\u8FBE\u5230\u4E86\u74F6\u9888\uFF0CRedis \u7684\u5355\u7EBF\u7A0B CPU \u5DF2\u7ECF\u98D9\u5230\u4E86 100%\uFF0C\u6240\u4EE5\u65E0\u6CD5\u518D\u7EE7\u7EED\u63D0\u5347\u4E86\u3002</p><h2 id="\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28" tabindex="-1">\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28 <a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3\u7BA1\u9053\u672C\u8D28" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6DF1\u5165\u5206\u6790\u4E00\u4E2A\u8BF7\u6C42\u4EA4\u4E92\u7684\u6D41\u7A0B\uFF0C\u771F\u5B9E\u7684\u60C5\u51B5\u662F\u5B83\u5F88\u590D\u6742\uFF0C\u56E0\u4E3A\u8981\u7ECF\u8FC7\u7F51\u7EDC\u534F\u8BAE\u6808\uFF0C\u8FD9\u4E2A\u5C31\u5F97\u6DF1\u5165\u5185\u6838\u4E86\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/28/1657e7a5a0a24ce3~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E0A\u56FE\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u8BF7\u6C42\u4EA4\u4E92\u6D41\u7A0B\u56FE\u3002\u6211\u7528\u6587\u5B57\u6765\u4ED4\u7EC6\u63CF\u8FF0\u4E00\u904D\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u8FDB\u7A0B\u8C03\u7528<code>write</code>\u5C06\u6D88\u606F\u5199\u5230\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u53D1\u9001\u7F13\u51B2<code>send buffer</code>\u3002</li><li>\u5BA2\u6237\u7AEF\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u5C06\u53D1\u9001\u7F13\u51B2\u7684\u5185\u5BB9\u53D1\u9001\u5230\u7F51\u5361\uFF0C\u7F51\u5361\u786C\u4EF6\u5C06\u6570\u636E\u901A\u8FC7\u300C\u7F51\u9645\u8DEF\u7531\u300D\u9001\u5230\u670D\u52A1\u5668\u7684\u7F51\u5361\u3002</li><li>\u670D\u52A1\u5668\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u5C06\u7F51\u5361\u7684\u6570\u636E\u653E\u5230\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u63A5\u6536\u7F13\u51B2<code>recv buffer</code>\u3002</li><li>\u670D\u52A1\u5668\u8FDB\u7A0B\u8C03\u7528<code>read</code>\u4ECE\u63A5\u6536\u7F13\u51B2\u4E2D\u53D6\u51FA\u6D88\u606F\u8FDB\u884C\u5904\u7406\u3002</li><li>\u670D\u52A1\u5668\u8FDB\u7A0B\u8C03\u7528<code>write</code>\u5C06\u54CD\u5E94\u6D88\u606F\u5199\u5230\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u53D1\u9001\u7F13\u51B2<code>send buffer</code>\u3002</li><li>\u670D\u52A1\u5668\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u5C06\u53D1\u9001\u7F13\u51B2\u7684\u5185\u5BB9\u53D1\u9001\u5230\u7F51\u5361\uFF0C\u7F51\u5361\u786C\u4EF6\u5C06\u6570\u636E\u901A\u8FC7\u300C\u7F51\u9645\u8DEF\u7531\u300D\u9001\u5230\u5BA2\u6237\u7AEF\u7684\u7F51\u5361\u3002</li><li>\u5BA2\u6237\u7AEF\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u5C06\u7F51\u5361\u7684\u6570\u636E\u653E\u5230\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u63A5\u6536\u7F13\u51B2<code>recv buffer</code>\u3002</li><li>\u5BA2\u6237\u7AEF\u8FDB\u7A0B\u8C03\u7528<code>read</code>\u4ECE\u63A5\u6536\u7F13\u51B2\u4E2D\u53D6\u51FA\u6D88\u606F\u8FD4\u56DE\u7ED9\u4E0A\u5C42\u4E1A\u52A1\u903B\u8F91\u8FDB\u884C\u5904\u7406\u3002</li><li>\u7ED3\u675F\u3002</li></ol><p>\u5176\u4E2D\u6B65\u9AA4 5~8 \u548C 1~4 \u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u8FC7\u65B9\u5411\u662F\u53CD\u8FC7\u6765\u7684\uFF0C\u4E00\u4E2A\u662F\u8BF7\u6C42\uFF0C\u4E00\u4E2A\u662F\u54CD\u5E94\u3002</p><p>\u6211\u4EEC\u5F00\u59CB\u4EE5\u4E3A <code>write</code> \u64CD\u4F5C\u662F\u8981\u7B49\u5230\u5BF9\u65B9\u6536\u5230\u6D88\u606F\u624D\u4F1A\u8FD4\u56DE\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4E0D\u662F\u8FD9\u6837\u7684\u3002<code>write</code> \u64CD\u4F5C\u53EA\u8D1F\u8D23\u5C06\u6570\u636E\u5199\u5230\u672C\u5730\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u7684\u53D1\u9001\u7F13\u51B2\u7136\u540E\u5C31\u8FD4\u56DE\u4E86\u3002\u5269\u4E0B\u7684\u4E8B\u4EA4\u7ED9\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u5F02\u6B65\u5C06\u6570\u636E\u9001\u5230\u76EE\u6807\u673A\u5668\u3002\u4F46\u662F\u5982\u679C\u53D1\u9001\u7F13\u51B2\u6EE1\u4E86\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u7B49\u5F85\u7F13\u51B2\u7A7A\u51FA\u7A7A\u95F2\u7A7A\u95F4\u6765\uFF0C\u8FD9\u4E2A\u5C31\u662F\u5199\u64CD\u4F5C IO \u64CD\u4F5C\u7684\u771F\u6B63\u8017\u65F6\u3002</p><p>\u6211\u4EEC\u5F00\u59CB\u4EE5\u4E3A <code>read</code> \u64CD\u4F5C\u662F\u4ECE\u76EE\u6807\u673A\u5668\u62C9\u53D6\u6570\u636E\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4E0D\u662F\u8FD9\u6837\u7684\u3002<code>read</code> \u64CD\u4F5C\u53EA\u8D1F\u8D23\u5C06\u6570\u636E\u4ECE\u672C\u5730\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u7684\u63A5\u6536\u7F13\u51B2\u4E2D\u53D6\u51FA\u6765\u5C31\u4E86\u4E8B\u4E86\u3002\u4F46\u662F\u5982\u679C\u7F13\u51B2\u662F\u7A7A\u7684\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u7B49\u5F85\u6570\u636E\u5230\u6765\uFF0C\u8FD9\u4E2A\u5C31\u662F\u8BFB\u64CD\u4F5C IO \u64CD\u4F5C\u7684\u771F\u6B63\u8017\u65F6\u3002</p><p>\u6240\u4EE5\u5BF9\u4E8E<code>value = redis.get(key)</code>\u8FD9\u6837\u4E00\u4E2A\u7B80\u5355\u7684\u8BF7\u6C42\u6765\u8BF4\uFF0C<code>write</code>\u64CD\u4F5C\u51E0\u4E4E\u6CA1\u6709\u8017\u65F6\uFF0C\u76F4\u63A5\u5199\u5230\u53D1\u9001\u7F13\u51B2\u5C31\u8FD4\u56DE\uFF0C\u800C<code>read</code>\u5C31\u4F1A\u6BD4\u8F83\u8017\u65F6\u4E86\uFF0C\u56E0\u4E3A\u5B83\u8981\u7B49\u5F85\u6D88\u606F\u7ECF\u8FC7\u7F51\u7EDC\u8DEF\u7531\u5230\u76EE\u6807\u673A\u5668\u5904\u7406\u540E\u7684\u54CD\u5E94\u6D88\u606F,\u518D\u56DE\u9001\u5230\u5F53\u524D\u7684\u5185\u6838\u8BFB\u7F13\u51B2\u624D\u53EF\u4EE5\u8FD4\u56DE\u3002<strong>\u8FD9\u624D\u662F\u4E00\u4E2A\u7F51\u7EDC\u6765\u56DE\u7684\u771F\u6B63\u5F00\u9500</strong>\u3002</p><p>\u800C\u5BF9\u4E8E\u7BA1\u9053\u6765\u8BF4\uFF0C\u8FDE\u7EED\u7684<code>write</code>\u64CD\u4F5C\u6839\u672C\u5C31\u6CA1\u6709\u8017\u65F6\uFF0C\u4E4B\u540E\u7B2C\u4E00\u4E2A<code>read</code>\u64CD\u4F5C\u4F1A\u7B49\u5F85\u4E00\u4E2A\u7F51\u7EDC\u7684\u6765\u56DE\u5F00\u9500\uFF0C\u7136\u540E\u6240\u6709\u7684\u54CD\u5E94\u6D88\u606F\u5C31\u90FD\u5DF2\u7ECF\u56DE\u9001\u5230\u5185\u6838\u7684\u8BFB\u7F13\u51B2\u4E86\uFF0C\u540E\u7EED\u7684 <code>read</code> \u64CD\u4F5C\u76F4\u63A5\u5C31\u53EF\u4EE5\u4ECE\u7F13\u51B2\u62FF\u5230\u7ED3\u679C\uFF0C\u77AC\u95F4\u5C31\u8FD4\u56DE\u4E86\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u5C31\u662F\u7BA1\u9053\u7684\u672C\u8D28\u4E86\uFF0C\u5B83\u5E76\u4E0D\u662F\u670D\u52A1\u5668\u7684\u4EC0\u4E48\u7279\u6027\uFF0C\u800C\u662F\u5BA2\u6237\u7AEF\u901A\u8FC7\u6539\u53D8\u4E86\u8BFB\u5199\u7684\u987A\u5E8F\u5E26\u6765\u7684\u6027\u80FD\u7684\u5DE8\u5927\u63D0\u5347\u3002</p>`,39),o=[c];function i(p,l,n,r,g,h){return s(),a("div",null,o)}const u=e(d,[["render",i]]);export{_ as __pageData,u as default};
