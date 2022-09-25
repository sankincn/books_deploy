import{_ as e,c as s,o as a,d}from"./app.c4f45da1.js";const u=JSON.parse('{"title":"\u539F\u7406 1-\u97AD\u8F9F\u5165\u91CC \u2014\u2014 \u7EBF\u7A0B IO \u6A21\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u975E\u963B\u585E IO","slug":"\u975E\u963B\u585E-io","link":"#\u975E\u963B\u585E-io","children":[]},{"level":2,"title":"\u4E8B\u4EF6\u8F6E\u8BE2 (\u591A\u8DEF\u590D\u7528)","slug":"\u4E8B\u4EF6\u8F6E\u8BE2-\u591A\u8DEF\u590D\u7528","link":"#\u4E8B\u4EF6\u8F6E\u8BE2-\u591A\u8DEF\u590D\u7528","children":[]},{"level":2,"title":"\u6307\u4EE4\u961F\u5217","slug":"\u6307\u4EE4\u961F\u5217","link":"#\u6307\u4EE4\u961F\u5217","children":[]},{"level":2,"title":"\u54CD\u5E94\u961F\u5217","slug":"\u54CD\u5E94\u961F\u5217","link":"#\u54CD\u5E94\u961F\u5217","children":[]},{"level":2,"title":"\u5B9A\u65F6\u4EFB\u52A1","slug":"\u5B9A\u65F6\u4EFB\u52A1","link":"#\u5B9A\u65F6\u4EFB\u52A1","children":[]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 1-\u97AD\u8F9F\u5165\u91CC \u2014\u2014 \u7EBF\u7A0B IO \u6A21\u578B.md"}'),o={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u539F\u7406 1-\u97AD\u8F9F\u5165\u91CC \u2014\u2014 \u7EBF\u7A0B IO \u6A21\u578B.md"},t=d(`<h1 id="\u539F\u7406-1-\u97AD\u8F9F\u5165\u91CC-\u2014\u2014-\u7EBF\u7A0B-io-\u6A21\u578B" tabindex="-1">\u539F\u7406 1-\u97AD\u8F9F\u5165\u91CC \u2014\u2014 \u7EBF\u7A0B IO \u6A21\u578B <a class="header-anchor" href="#\u539F\u7406-1-\u97AD\u8F9F\u5165\u91CC-\u2014\u2014-\u7EBF\u7A0B-io-\u6A21\u578B" aria-hidden="true">#</a></h1><hr><h1 id="\u539F\u7406-1\uFF1A\u97AD\u8F9F\u5165\u91CC-\u2014\u2014-\u7EBF\u7A0B-io-\u6A21\u578B" tabindex="-1">\u539F\u7406 1\uFF1A\u97AD\u8F9F\u5165\u91CC \u2014\u2014 \u7EBF\u7A0B IO \u6A21\u578B <a class="header-anchor" href="#\u539F\u7406-1\uFF1A\u97AD\u8F9F\u5165\u91CC-\u2014\u2014-\u7EBF\u7A0B-io-\u6A21\u578B" aria-hidden="true">#</a></h1><p><strong>Redis \u662F\u4E2A\u5355\u7EBF\u7A0B\u7A0B\u5E8F</strong>\uFF01\u8FD9\u70B9\u5FC5\u987B\u94ED\u8BB0\u3002</p><p>\u4E5F\u8BB8\u4F60\u4F1A\u6000\u7591\u9AD8\u5E76\u53D1\u7684 Redis \u4E2D\u95F4\u4EF6\u600E\u4E48\u53EF\u80FD\u662F\u5355\u7EBF\u7A0B\u3002\u5F88\u62B1\u6B49\uFF0C\u5B83\u5C31\u662F\u5355\u7EBF\u7A0B\uFF0C\u4F60\u7684\u6000\u7591\u66B4\u9732\u4E86\u4F60\u57FA\u7840\u77E5\u8BC6\u7684\u4E0D\u8DB3\u3002\u83AB\u8981\u77A7\u4E0D\u8D77\u5355\u7EBF\u7A0B\uFF0C\u9664\u4E86 Redis \u4E4B\u5916\uFF0CNode.js \u4E5F\u662F\u5355\u7EBF\u7A0B\uFF0CNginx \u4E5F\u662F\u5355\u7EBF\u7A0B\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u662F\u670D\u52A1\u5668\u9AD8\u6027\u80FD\u7684\u5178\u8303\u3002</p><p><strong>Redis \u5355\u7EBF\u7A0B\u4E3A\u4EC0\u4E48\u8FD8\u80FD\u8FD9\u4E48\u5FEB\uFF1F</strong></p><p>\u56E0\u4E3A\u5B83\u6240\u6709\u7684\u6570\u636E\u90FD\u5728\u5185\u5B58\u4E2D\uFF0C\u6240\u6709\u7684\u8FD0\u7B97\u90FD\u662F\u5185\u5B58\u7EA7\u522B\u7684\u8FD0\u7B97\u3002\u6B63\u56E0\u4E3A Redis \u662F\u5355\u7EBF\u7A0B\uFF0C\u6240\u4EE5\u8981\u5C0F\u5FC3\u4F7F\u7528 Redis \u6307\u4EE4\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n) \u7EA7\u522B\u7684\u6307\u4EE4\uFF0C\u4E00\u5B9A\u8981\u8C28\u614E\u4F7F\u7528\uFF0C\u4E00\u4E0D\u5C0F\u5FC3\u5C31\u53EF\u80FD\u4F1A\u5BFC\u81F4 Redis \u5361\u987F\u3002</p><p><strong>Redis \u5355\u7EBF\u7A0B\u5982\u4F55\u5904\u7406\u90A3\u4E48\u591A\u7684\u5E76\u53D1\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF1F</strong></p><p>\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6709\u5F88\u591A\u4E2D\u9AD8\u7EA7\u7A0B\u5E8F\u5458\u90FD\u65E0\u6CD5\u56DE\u7B54\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u6CA1\u542C\u8FC7<strong>\u591A\u8DEF\u590D\u7528</strong>\u8FD9\u4E2A\u8BCD\u6C47\uFF0C\u4E0D\u77E5\u9053 select \u7CFB\u5217\u7684\u4E8B\u4EF6\u8F6E\u8BE2 API\uFF0C\u6CA1\u7528\u8FC7\u975E\u963B\u585E IO\u3002</p><h2 id="\u975E\u963B\u585E-io" tabindex="-1">\u975E\u963B\u585E IO <a class="header-anchor" href="#\u975E\u963B\u585E-io" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u8C03\u7528\u5957\u63A5\u5B57\u7684\u8BFB\u5199\u65B9\u6CD5\uFF0C\u9ED8\u8BA4\u5B83\u4EEC\u662F\u963B\u585E\u7684\uFF0C\u6BD4\u5982<code>read</code>\u65B9\u6CD5\u8981\u4F20\u9012\u8FDB\u53BB\u4E00\u4E2A\u53C2\u6570<code>n</code>\uFF0C\u8868\u793A\u6700\u591A\u8BFB\u53D6\u8FD9\u4E48\u591A\u5B57\u8282\u540E\u518D\u8FD4\u56DE\uFF0C\u5982\u679C\u4E00\u4E2A\u5B57\u8282\u90FD\u6CA1\u6709\uFF0C\u90A3\u4E48\u7EBF\u7A0B\u5C31\u4F1A\u5361\u5728\u90A3\u91CC\uFF0C\u76F4\u5230\u65B0\u7684\u6570\u636E\u5230\u6765\u6216\u8005\u8FDE\u63A5\u5173\u95ED\u4E86\uFF0C<code>read</code>\u65B9\u6CD5\u624D\u53EF\u4EE5\u8FD4\u56DE\uFF0C\u7EBF\u7A0B\u624D\u80FD\u7EE7\u7EED\u5904\u7406\u3002\u800C<code>write</code>\u65B9\u6CD5\u4E00\u822C\u6765\u8BF4\u4E0D\u4F1A\u963B\u585E\uFF0C\u9664\u975E\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u5199\u7F13\u51B2\u533A\u5DF2\u7ECF\u6EE1\u4E86\uFF0C<code>write</code>\u65B9\u6CD5\u5C31\u4F1A\u963B\u585E\uFF0C\u76F4\u5230\u7F13\u5B58\u533A\u4E2D\u6709\u7A7A\u95F2\u7A7A\u95F4\u632A\u51FA\u6765\u4E86\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/8/26/165739c849e21857~tplv-t2oaga2asx-image.image" alt=""></p><p>\u975E\u963B\u585E IO \u5728\u5957\u63A5\u5B57\u5BF9\u8C61\u4E0A\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9009\u9879<code>Non_Blocking</code>\uFF0C\u5F53\u8FD9\u4E2A\u9009\u9879\u6253\u5F00\u65F6\uFF0C\u8BFB\u5199\u65B9\u6CD5\u4E0D\u4F1A\u963B\u585E\uFF0C\u800C\u662F\u80FD\u8BFB\u591A\u5C11\u8BFB\u591A\u5C11\uFF0C\u80FD\u5199\u591A\u5C11\u5199\u591A\u5C11\u3002\u80FD\u8BFB\u591A\u5C11\u53D6\u51B3\u4E8E\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u8BFB\u7F13\u51B2\u533A\u5185\u90E8\u7684\u6570\u636E\u5B57\u8282\u6570\uFF0C\u80FD\u5199\u591A\u5C11\u53D6\u51B3\u4E8E\u5185\u6838\u4E3A\u5957\u63A5\u5B57\u5206\u914D\u7684\u5199\u7F13\u51B2\u533A\u7684\u7A7A\u95F2\u7A7A\u95F4\u5B57\u8282\u6570\u3002\u8BFB\u65B9\u6CD5\u548C\u5199\u65B9\u6CD5\u90FD\u4F1A\u901A\u8FC7\u8FD4\u56DE\u503C\u6765\u544A\u77E5\u7A0B\u5E8F\u5B9E\u9645\u8BFB\u5199\u4E86\u591A\u5C11\u5B57\u8282\u3002</p><p>\u6709\u4E86\u975E\u963B\u585E IO \u610F\u5473\u7740\u7EBF\u7A0B\u5728\u8BFB\u5199 IO \u65F6\u53EF\u4EE5\u4E0D\u5FC5\u518D\u963B\u585E\u4E86\uFF0C\u8BFB\u5199\u53EF\u4EE5\u77AC\u95F4\u5B8C\u6210\u7136\u540E\u7EBF\u7A0B\u53EF\u4EE5\u7EE7\u7EED\u5E72\u522B\u7684\u4E8B\u4E86\u3002</p><h2 id="\u4E8B\u4EF6\u8F6E\u8BE2-\u591A\u8DEF\u590D\u7528" tabindex="-1">\u4E8B\u4EF6\u8F6E\u8BE2 (\u591A\u8DEF\u590D\u7528) <a class="header-anchor" href="#\u4E8B\u4EF6\u8F6E\u8BE2-\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h2><p>\u975E\u963B\u585E IO \u6709\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u7EBF\u7A0B\u8981\u8BFB\u6570\u636E\uFF0C\u7ED3\u679C\u8BFB\u4E86\u4E00\u90E8\u5206\u5C31\u8FD4\u56DE\u4E86\uFF0C\u7EBF\u7A0B\u5982\u4F55\u77E5\u9053\u4F55\u65F6\u624D\u5E94\u8BE5\u7EE7\u7EED\u8BFB\u3002\u4E5F\u5C31\u662F\u5F53\u6570\u636E\u5230\u6765\u65F6\uFF0C\u7EBF\u7A0B\u5982\u4F55\u5F97\u5230\u901A\u77E5\u3002\u5199\u4E5F\u662F\u4E00\u6837\uFF0C\u5982\u679C\u7F13\u51B2\u533A\u6EE1\u4E86\uFF0C\u5199\u4E0D\u5B8C\uFF0C\u5269\u4E0B\u7684\u6570\u636E\u4F55\u65F6\u624D\u5E94\u8BE5\u7EE7\u7EED\u5199\uFF0C\u7EBF\u7A0B\u4E5F\u5E94\u8BE5\u5F97\u5230\u901A\u77E5\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/164821ee63cfc36f~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E8B\u4EF6\u8F6E\u8BE2 API \u5C31\u662F\u7528\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\uFF0C\u6700\u7B80\u5355\u7684\u4E8B\u4EF6\u8F6E\u8BE2 API \u662F<code>select</code>\u51FD\u6570\uFF0C\u5B83\u662F\u64CD\u4F5C\u7CFB\u7EDF\u63D0\u4F9B\u7ED9\u7528\u6237\u7A0B\u5E8F\u7684 API\u3002\u8F93\u5165\u662F\u8BFB\u5199\u63CF\u8FF0\u7B26\u5217\u8868<code>read_fds &amp; write_fds</code>\uFF0C\u8F93\u51FA\u662F\u4E0E\u4E4B\u5BF9\u5E94\u7684\u53EF\u8BFB\u53EF\u5199\u4E8B\u4EF6\u3002\u540C\u65F6\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>timeout</code>\u53C2\u6570\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u4E8B\u4EF6\u5230\u6765\uFF0C\u90A3\u4E48\u5C31\u6700\u591A\u7B49\u5F85<code>timeout</code>\u65F6\u95F4\uFF0C\u7EBF\u7A0B\u5904\u4E8E\u963B\u585E\u72B6\u6001\u3002\u4E00\u65E6\u671F\u95F4\u6709\u4EFB\u4F55\u4E8B\u4EF6\u5230\u6765\uFF0C\u5C31\u53EF\u4EE5\u7ACB\u5373\u8FD4\u56DE\u3002\u65F6\u95F4\u8FC7\u4E86\u4E4B\u540E\u8FD8\u662F\u6CA1\u6709\u4EFB\u4F55\u4E8B\u4EF6\u5230\u6765\uFF0C\u4E5F\u4F1A\u7ACB\u5373\u8FD4\u56DE\u3002\u62FF\u5230\u4E8B\u4EF6\u540E\uFF0C\u7EBF\u7A0B\u5C31\u53EF\u4EE5\u7EE7\u7EED\u6328\u4E2A\u5904\u7406\u76F8\u5E94\u7684\u4E8B\u4EF6\u3002\u5904\u7406\u5B8C\u4E86\u7EE7\u7EED\u8FC7\u6765\u8F6E\u8BE2\u3002\u4E8E\u662F\u7EBF\u7A0B\u5C31\u8FDB\u5165\u4E86\u4E00\u4E2A\u6B7B\u5FAA\u73AF\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u6B7B\u5FAA\u73AF\u79F0\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u4E00\u4E2A\u5FAA\u73AF\u4E3A\u4E00\u4E2A\u5468\u671F\u3002</p><p>\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u5957\u63A5\u5B57<code>socket</code>\u90FD\u6709\u5BF9\u5E94\u7684\u8BFB\u5199\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">read_events, write_events = select(read_fds, write_fds, timeout)</span></span>
<span class="line"><span style="color:#A6ACCD;">for event in read_events:</span></span>
<span class="line"><span style="color:#A6ACCD;">    handle_read(event.fd)</span></span>
<span class="line"><span style="color:#A6ACCD;">for event in write_events:</span></span>
<span class="line"><span style="color:#A6ACCD;">    handle_write(event.fd)</span></span>
<span class="line"><span style="color:#A6ACCD;">handle_others()  # \u5904\u7406\u5176\u5B83\u4E8B\u60C5\uFF0C\u5982\u5B9A\u65F6\u4EFB\u52A1\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3A\u6211\u4EEC\u901A\u8FC7<code>select</code>\u7CFB\u7EDF\u8C03\u7528\u540C\u65F6\u5904\u7406\u591A\u4E2A\u901A\u9053\u63CF\u8FF0\u7B26\u7684\u8BFB\u5199\u4E8B\u4EF6\uFF0C\u56E0\u6B64\u6211\u4EEC\u5C06\u8FD9\u7C7B\u7CFB\u7EDF\u8C03\u7528\u79F0\u4E3A\u591A\u8DEF\u590D\u7528 API\u3002\u73B0\u4EE3\u64CD\u4F5C\u7CFB\u7EDF\u7684\u591A\u8DEF\u590D\u7528 API \u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528<code>select</code>\u7CFB\u7EDF\u8C03\u7528\uFF0C\u800C\u6539\u7528<code>epoll(linux)</code>\u548C<code>kqueue(freebsd &amp; macosx)</code>\uFF0C\u56E0\u4E3A select \u7CFB\u7EDF\u8C03\u7528\u7684\u6027\u80FD\u5728\u63CF\u8FF0\u7B26\u7279\u522B\u591A\u65F6\u6027\u80FD\u4F1A\u975E\u5E38\u5DEE\u3002\u5B83\u4EEC\u4F7F\u7528\u8D77\u6765\u53EF\u80FD\u5728\u5F62\u5F0F\u4E0A\u7565\u6709\u5DEE\u5F02\uFF0C\u4F46\u662F\u672C\u8D28\u4E0A\u90FD\u662F\u5DEE\u4E0D\u591A\u7684\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u7684\u4F2A\u4EE3\u7801\u903B\u8F91\u8FDB\u884C\u7406\u89E3\u3002</p><p>\u670D\u52A1\u5668\u5957\u63A5\u5B57<code>serversocket</code>\u5BF9\u8C61\u7684\u8BFB\u64CD\u4F5C\u662F\u6307\u8C03\u7528<code>accept</code>\u63A5\u53D7\u5BA2\u6237\u7AEF\u65B0\u8FDE\u63A5\u3002\u4F55\u65F6\u6709\u65B0\u8FDE\u63A5\u5230\u6765\uFF0C\u4E5F\u662F\u901A\u8FC7<code>select</code>\u7CFB\u7EDF\u8C03\u7528\u7684\u8BFB\u4E8B\u4EF6\u6765\u5F97\u5230\u901A\u77E5\u7684\u3002</p><p><strong>\u4E8B\u4EF6\u8F6E\u8BE2 API \u5C31\u662F Java \u8BED\u8A00\u91CC\u9762\u7684 NIO \u6280\u672F</strong></p><p>Java \u7684 NIO \u5E76\u4E0D\u662F Java \u7279\u6709\u7684\u6280\u672F\uFF0C\u5176\u5B83\u8BA1\u7B97\u673A\u8BED\u8A00\u90FD\u6709\u8FD9\u4E2A\u6280\u672F\uFF0C\u53EA\u4E0D\u8FC7\u6362\u4E86\u4E00\u4E2A\u8BCD\u6C47\uFF0C\u4E0D\u53EB NIO \u800C\u5DF2\u3002</p><h2 id="\u6307\u4EE4\u961F\u5217" tabindex="-1">\u6307\u4EE4\u961F\u5217 <a class="header-anchor" href="#\u6307\u4EE4\u961F\u5217" aria-hidden="true">#</a></h2><p>Redis \u4F1A\u5C06\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u5957\u63A5\u5B57\u90FD\u5173\u8054\u4E00\u4E2A\u6307\u4EE4\u961F\u5217\u3002\u5BA2\u6237\u7AEF\u7684\u6307\u4EE4\u901A\u8FC7\u961F\u5217\u6765\u6392\u961F\u8FDB\u884C\u987A\u5E8F\u5904\u7406\uFF0C\u5148\u5230\u5148\u670D\u52A1\u3002</p><h2 id="\u54CD\u5E94\u961F\u5217" tabindex="-1">\u54CD\u5E94\u961F\u5217 <a class="header-anchor" href="#\u54CD\u5E94\u961F\u5217" aria-hidden="true">#</a></h2><p>Redis \u540C\u6837\u4E5F\u4F1A\u4E3A\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u5957\u63A5\u5B57\u5173\u8054\u4E00\u4E2A\u54CD\u5E94\u961F\u5217\u3002Redis \u670D\u52A1\u5668\u901A\u8FC7\u54CD\u5E94\u961F\u5217\u6765\u5C06\u6307\u4EE4\u7684\u8FD4\u56DE\u7ED3\u679C\u56DE\u590D\u7ED9\u5BA2\u6237\u7AEF\u3002 \u5982\u679C\u961F\u5217\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u610F\u5473\u7740\u8FDE\u63A5\u6682\u65F6\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u53BB\u83B7\u53D6\u5199\u4E8B\u4EF6\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u5C06\u5F53\u524D\u7684\u5BA2\u6237\u7AEF\u63CF\u8FF0\u7B26\u4ECE<code>write_fds</code>\u91CC\u9762\u79FB\u51FA\u6765\u3002\u7B49\u5230\u961F\u5217\u6709\u6570\u636E\u4E86\uFF0C\u518D\u5C06\u63CF\u8FF0\u7B26\u653E\u8FDB\u53BB\u3002\u907F\u514D<code>select</code>\u7CFB\u7EDF\u8C03\u7528\u7ACB\u5373\u8FD4\u56DE\u5199\u4E8B\u4EF6\uFF0C\u7ED3\u679C\u53D1\u73B0\u6CA1\u4EC0\u4E48\u6570\u636E\u53EF\u4EE5\u5199\u3002\u51FA\u8FD9\u79CD\u60C5\u51B5\u7684\u7EBF\u7A0B\u4F1A\u98D9\u9AD8 CPU\u3002</p><h2 id="\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1">\u5B9A\u65F6\u4EFB\u52A1 <a class="header-anchor" href="#\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5668\u5904\u7406\u8981\u54CD\u5E94 IO \u4E8B\u4EF6\u5916\uFF0C\u8FD8\u8981\u5904\u7406\u5176\u5B83\u4E8B\u60C5\u3002\u6BD4\u5982\u5B9A\u65F6\u4EFB\u52A1\u5C31\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\u3002\u5982\u679C\u7EBF\u7A0B\u963B\u585E\u5728 select \u7CFB\u7EDF\u8C03\u7528\u4E0A\uFF0C\u5B9A\u65F6\u4EFB\u52A1\u5C06\u65E0\u6CD5\u5F97\u5230\u51C6\u65F6\u8C03\u5EA6\u3002\u90A3 Redis \u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u5462\uFF1F</p><p>Redis \u7684\u5B9A\u65F6\u4EFB\u52A1\u4F1A\u8BB0\u5F55\u5728\u4E00\u4E2A\u79F0\u4E3A<code>\u6700\u5C0F\u5806</code>\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u3002\u8FD9\u4E2A\u5806\u4E2D\uFF0C\u6700\u5FEB\u8981\u6267\u884C\u7684\u4EFB\u52A1\u6392\u5728\u5806\u7684\u6700\u4E0A\u65B9\u3002\u5728\u6BCF\u4E2A\u5FAA\u73AF\u5468\u671F\uFF0CRedis \u90FD\u4F1A\u5C06\u6700\u5C0F\u5806\u91CC\u9762\u5DF2\u7ECF\u5230\u70B9\u7684\u4EFB\u52A1\u7ACB\u5373\u8FDB\u884C\u5904\u7406\u3002\u5904\u7406\u5B8C\u6BD5\u540E\uFF0C\u5C06\u6700\u5FEB\u8981\u6267\u884C\u7684\u4EFB\u52A1\u8FD8\u9700\u8981\u7684\u65F6\u95F4\u8BB0\u5F55\u4E0B\u6765\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u5C31\u662F<code>select</code>\u7CFB\u7EDF\u8C03\u7528\u7684<code>timeout</code>\u53C2\u6570\u3002\u56E0\u4E3A Redis \u77E5\u9053\u672A\u6765<code>timeout</code>\u65F6\u95F4\u5185\uFF0C\u6CA1\u6709\u5176\u5B83\u5B9A\u65F6\u4EFB\u52A1\u9700\u8981\u5904\u7406\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B89\u5FC3\u7761\u7720<code>timeout</code>\u7684\u65F6\u95F4\u3002</p><p><strong>Nginx \u548C Node \u7684\u4E8B\u4EF6\u5904\u7406\u539F\u7406\u548C Redis \u4E5F\u662F\u7C7B\u4F3C\u7684</strong></p><h2 id="\u6269\u5C55\u9605\u8BFB" tabindex="-1">\u6269\u5C55\u9605\u8BFB <a class="header-anchor" href="#\u6269\u5C55\u9605\u8BFB" aria-hidden="true">#</a></h2><p>\u8BF7\u9605\u8BFB\u8001\u94B1\u7684\u53E6\u4E00\u7BC7\u706B\u7206\u7684\u6587\u7AE0<a href="https://juejin.cn/post/6844903625513238541" target="_blank" rel="noreferrer">\u300A\u8DDF\u7740\u52A8\u753B\u6765\u5B66\u4E60TCP\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\u300B</a></p>`,34),n=[t];function c(i,r,l,p,h,_){return a(),s("div",null,n)}const f=e(o,[["render",c]]);export{u as __pageData,f as default};
