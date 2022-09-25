import{_ as a,c as s,o as e,d as l}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u6E90\u7801 6-\u7834\u65E7\u7ACB\u65B0 \u2014\u2014 \u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EA7\u8054\u66F4\u65B0","slug":"\u7EA7\u8054\u66F4\u65B0","link":"#\u7EA7\u8054\u66F4\u65B0","children":[]},{"level":2,"title":"\u53D6\u4EE3 ziplist","slug":"\u53D6\u4EE3-ziplist","link":"#\u53D6\u4EE3-ziplist","children":[]},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 6-\u7834\u65E7\u7ACB\u65B0 \u2014\u2014 \u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8.md"}'),c={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 6-\u7834\u65E7\u7ACB\u65B0 \u2014\u2014 \u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8.md"},t=l(`<h1 id="\u6E90\u7801-6-\u7834\u65E7\u7ACB\u65B0-\u2014\u2014-\u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 6-\u7834\u65E7\u7ACB\u65B0 \u2014\u2014 \u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-6-\u7834\u65E7\u7ACB\u65B0-\u2014\u2014-\u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><hr><h1 id="\u6E90\u7801-6\uFF1A\u7834\u65E7\u7ACB\u65B0-\u2014\u2014-\u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 6\uFF1A\u7834\u65E7\u7ACB\u65B0 \u2014\u2014 \u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-6\uFF1A\u7834\u65E7\u7ACB\u65B0-\u2014\u2014-\u63A2\u7D22\u300C\u7D27\u51D1\u5217\u8868\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><p>Redis 5.0 \u53C8\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7ED3\u6784 listpack\uFF0C\u5B83\u662F\u5BF9 ziplist \u7ED3\u6784\u7684\u6539\u8FDB\uFF0C\u5728\u5B58\u50A8\u7A7A\u95F4\u4E0A\u4F1A\u66F4\u52A0\u8282\u7701\uFF0C\u800C\u4E14\u7ED3\u6784\u4E0A\u4E5F\u6BD4 ziplist \u8981\u7CBE\u7B80\u3002\u5B83\u7684\u6574\u4F53\u5F62\u5F0F\u548C ziplist \u8FD8\u662F\u6BD4\u8F83\u63A5\u8FD1\u7684\uFF0C\u5982\u679C\u4F60\u8BA4\u771F\u9605\u8BFB\u4E86 ziplist \u7684\u5185\u90E8\u7ED3\u6784\u5206\u6790\uFF0C\u90A3\u4E48 listpack \u4E5F\u662F\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct listpack&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 total_bytes; // \u5360\u7528\u7684\u603B\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    int16 size; // \u5143\u7D20\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    T[] entries; // \u7D27\u51D1\u6392\u5217\u7684\u5143\u7D20\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">    int8 end; // \u540C zlend \u4E00\u6837\uFF0C\u6052\u4E3A 0xFF</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/29/164e41fa97257519~tplv-t2oaga2asx-image.image" alt=""></p><p>\u9996\u5148\u8FD9\u4E2A listpack \u8DDF ziplist \u7684\u7ED3\u6784\u51E0\u4E4E\u4E00\u6478\u4E00\u6837\uFF0C\u53EA\u662F\u5C11\u4E86\u4E00\u4E2A<code>zltail_offset</code>\u5B57\u6BB5\u3002ziplist \u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u6765\u5B9A\u4F4D\u51FA\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u9006\u5E8F\u904D\u5386\u3002\u4E0D\u8FC7 listpack \u53EF\u4EE5\u901A\u8FC7\u5176\u5B83\u65B9\u5F0F\u6765\u5B9A\u4F4D\u51FA\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u6240\u4EE5<code>zltail_offset</code>\u5B57\u6BB5\u5C31\u7701\u6389\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct lpentry {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int&lt;var&gt; encoding;</span></span>
<span class="line"><span style="color:#A6ACCD;">    optional byte[] content;</span></span>
<span class="line"><span style="color:#A6ACCD;">    int&lt;var&gt; length;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5143\u7D20\u7684\u7ED3\u6784\u548C ziplist \u7684\u5143\u7D20\u7ED3\u6784\u4E5F\u5F88\u7C7B\u4F3C\uFF0C\u90FD\u662F\u5305\u542B\u4E09\u4E2A\u5B57\u6BB5\u3002\u4E0D\u540C\u7684\u662F\u957F\u5EA6\u5B57\u6BB5\u653E\u5728\u4E86\u5143\u7D20\u7684\u5C3E\u90E8\uFF0C\u800C\u4E14\u5B58\u50A8\u7684\u4E0D\u662F\u4E0A\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6\uFF0C\u662F\u5F53\u524D\u5143\u7D20\u7684\u957F\u5EA6\u3002\u6B63\u662F\u56E0\u4E3A\u957F\u5EA6\u653E\u5728\u4E86\u5C3E\u90E8\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7701\u53BB\u4E86<code>zltail_offset</code>\u5B57\u6BB5\u6765\u6807\u8BB0\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u8FD9\u4E2A\u4F4D\u7F6E\u53EF\u4EE5\u901A\u8FC7<code>total_bytes</code>\u5B57\u6BB5\u548C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6\u5B57\u6BB5\u8BA1\u7B97\u51FA\u6765\u3002</p><p>\u957F\u5EA6\u5B57\u6BB5\u4F7F\u7528 varint \u8FDB\u884C\u7F16\u7801\uFF0C\u4E0D\u540C\u4E8E skiplist \u5143\u7D20\u957F\u5EA6\u7684\u7F16\u7801\u4E3A 1 \u4E2A\u5B57\u8282\u6216\u8005 5 \u4E2A\u5B57\u8282\uFF0Clistpack \u5143\u7D20\u957F\u5EA6\u7684\u7F16\u7801\u53EF\u4EE5\u662F 1\u30012\u30013\u30014\u30015 \u4E2A\u5B57\u8282\u3002\u540C UTF8 \u7F16\u7801\u4E00\u6837\uFF0C\u5B83\u901A\u8FC7\u5B57\u8282\u7684\u6700\u9AD8\u4E3A\u662F\u5426\u4E3A 1 \u6765\u51B3\u5B9A\u7F16\u7801\u7684\u957F\u5EA6\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/29/164e4256399b6e4a~tplv-t2oaga2asx-image.image" alt=""></p><p>\u540C\u6837\uFF0CRedis \u4E3A\u4E86\u8BA9 listpack \u5143\u7D20\u652F\u6301\u5F88\u591A\u7C7B\u578B\uFF0C\u5B83\u5BF9 encoding \u5B57\u6BB5\u4E5F\u8FDB\u884C\u4E86\u8F83\u4E3A\u590D\u6742\u7684\u8BBE\u8BA1\u3002</p><ol><li><code>0xxxxxxx</code> \u8868\u793A\u975E\u8D1F\u5C0F\u6574\u6570\uFF0C\u53EF\u4EE5\u8868\u793A<code>0~127</code>\u3002</li><li><code>10xxxxxx</code> \u8868\u793A\u5C0F\u5B57\u7B26\u4E32\uFF0C\u957F\u5EA6\u8303\u56F4\u662F<code>0~63</code>\uFF0C<code>content</code>\u5B57\u6BB5\u4E3A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u3002</li><li><code>110xxxxx yyyyyyyy</code> \u8868\u793A\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u8303\u56F4\u662F<code>-2048~2047</code>\u3002</li><li><code>1110xxxx yyyyyyyy</code> \u8868\u793A\u4E2D\u7B49\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\uFF0C\u957F\u5EA6\u8303\u56F4\u662F<code>0~4095</code>\uFF0C<code>content</code>\u5B57\u6BB5\u4E3A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u3002</li><li><code>11110000 aaaaaaaa bbbbbbbb cccccccc dddddddd</code> \u8868\u793A\u5927\u5B57\u7B26\u4E32\uFF0C\u56DB\u4E2A\u5B57\u8282\u8868\u793A\u957F\u5EA6\uFF0C<code>content</code>\u5B57\u6BB5\u4E3A\u5B57\u7B26\u4E32\u5185\u5BB9\u3002</li><li><code>11110001 aaaaaaaa bbbbbbbb</code> \u8868\u793A 2 \u5B57\u8282\u6709\u7B26\u53F7\u6574\u6570\u3002</li><li><code>11110010 aaaaaaaa bbbbbbbb cccccccc</code> \u8868\u793A 3 \u5B57\u8282\u6709\u7B26\u53F7\u6574\u6570\u3002</li><li><code>11110011 aaaaaaaa bbbbbbbb cccccccc dddddddd</code> \u8868\u793A 4 \u5B57\u8282\u6709\u7B26\u53F7\u6574\u6570\u3002</li><li><code>11110011 aaaaaaaa ... hhhhhhhh</code> \u8868\u793A 8 \u5B57\u8282\u6709\u7B26\u53F7\u6574\u6570\u3002</li><li><code>11111111</code> \u8868\u793A listpack \u7684\u7ED3\u675F\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F<code>0xFF</code>\u3002</li></ol><h2 id="\u7EA7\u8054\u66F4\u65B0" tabindex="-1">\u7EA7\u8054\u66F4\u65B0 <a class="header-anchor" href="#\u7EA7\u8054\u66F4\u65B0" aria-hidden="true">#</a></h2><p>listpack \u7684\u8BBE\u8BA1\u5F7B\u5E95\u6D88\u706D\u4E86 ziplist \u5B58\u5728\u7684\u7EA7\u8054\u66F4\u65B0\u884C\u4E3A\uFF0C\u5143\u7D20\u4E0E\u5143\u7D20\u4E4B\u95F4\u5B8C\u5168\u72EC\u7ACB\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6\u53D8\u957F\u5C31\u5BFC\u81F4\u540E\u7EED\u7684\u5143\u7D20\u5185\u5BB9\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p><h2 id="\u53D6\u4EE3-ziplist" tabindex="-1">\u53D6\u4EE3 ziplist <a class="header-anchor" href="#\u53D6\u4EE3-ziplist" aria-hidden="true">#</a></h2><p>listpack \u7684\u8BBE\u8BA1\u7684\u76EE\u7684\u662F\u7528\u6765\u53D6\u4EE3 ziplist\uFF0C\u4E0D\u8FC7\u5F53\u4E0B\u8FD8\u6CA1\u6709\u505A\u597D\u66FF\u6362 ziplist \u7684\u51C6\u5907\uFF0C\u56E0\u4E3A\u6709\u5F88\u591A\u517C\u5BB9\u6027\u7684\u95EE\u9898\u9700\u8981\u8003\u8651\uFF0Cziplist \u5728 Redis \u6570\u636E\u7ED3\u6784\u4E2D\u4F7F\u7528\u592A\u5E7F\u6CDB\u4E86\uFF0C\u66FF\u6362\u8D77\u6765\u590D\u6742\u5EA6\u4F1A\u975E\u5E38\u4E4B\u9AD8\u3002\u5B83\u76EE\u524D\u53EA\u4F7F\u7528\u5728\u4E86\u65B0\u589E\u52A0\u7684 Stream \u6570\u636E\u7ED3\u6784\u4E2D\u3002</p><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><p>\u4E3A\u4EC0\u4E48 listpack \u6BD4 ziplist \u66F4\u52A0\u4F18\u79C0\uFF1F</p>`,19),i=[t];function n(o,p,d,r,_,h){return e(),s("div",null,i)}const x=a(c,[["render",n]]);export{y as __pageData,x as default};
