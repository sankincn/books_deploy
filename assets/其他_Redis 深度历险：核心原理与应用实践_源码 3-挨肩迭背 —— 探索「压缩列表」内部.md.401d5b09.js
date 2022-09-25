import{_ as s,c as n,o as a,d as e}from"./app.e5528619.js";const h=JSON.parse('{"title":"\u6E90\u7801 3-\u6328\u80A9\u8FED\u80CC \u2014\u2014 \u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u589E\u52A0\u5143\u7D20","slug":"\u589E\u52A0\u5143\u7D20","link":"#\u589E\u52A0\u5143\u7D20","children":[]},{"level":2,"title":"\u7EA7\u8054\u66F4\u65B0","slug":"\u7EA7\u8054\u66F4\u65B0","link":"#\u7EA7\u8054\u66F4\u65B0","children":[]},{"level":2,"title":"IntSet \u5C0F\u6574\u6570\u96C6\u5408","slug":"intset-\u5C0F\u6574\u6570\u96C6\u5408","link":"#intset-\u5C0F\u6574\u6570\u96C6\u5408","children":[]},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 3-\u6328\u80A9\u8FED\u80CC \u2014\u2014 \u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8.md"}'),l={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 3-\u6328\u80A9\u8FED\u80CC \u2014\u2014 \u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8.md"},p=e(`<h1 id="\u6E90\u7801-3-\u6328\u80A9\u8FED\u80CC-\u2014\u2014-\u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 3-\u6328\u80A9\u8FED\u80CC \u2014\u2014 \u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-3-\u6328\u80A9\u8FED\u80CC-\u2014\u2014-\u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><hr><h1 id="\u6E90\u7801-3\uFF1A\u6328\u80A9\u8FED\u80CC-\u2014\u2014-\u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 3\uFF1A\u6328\u80A9\u8FED\u80CC \u2014\u2014 \u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-3\uFF1A\u6328\u80A9\u8FED\u80CC-\u2014\u2014-\u63A2\u7D22\u300C\u538B\u7F29\u5217\u8868\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><p>Redis \u4E3A\u4E86\u8282\u7EA6\u5185\u5B58\u7A7A\u95F4\u4F7F\u7528\uFF0Czset \u548C hash \u5BB9\u5668\u5BF9\u8C61\u5728\u5143\u7D20\u4E2A\u6570\u8F83\u5C11\u7684\u65F6\u5019\uFF0C\u91C7\u7528\u538B\u7F29\u5217\u8868 (ziplist) \u8FDB\u884C\u5B58\u50A8\u3002\u538B\u7F29\u5217\u8868\u662F\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u5143\u7D20\u4E4B\u95F4\u7D27\u6328\u7740\u5B58\u50A8\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5197\u4F59\u7A7A\u9699\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; zadd programmings 1.0 go 2.0 python 3.0 java</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object programmings</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2de00020 refcount:1 encoding:ziplist serializedlength:36 lru:6022374 lru_seconds_idle:6</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; hmset books go fast python slow java fast</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object books</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2de000c0 refcount:1 encoding:ziplist serializedlength:48 lru:6022478 lru_seconds_idle:1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\uFF0C\u6CE8\u610F\u89C2\u5BDF debug object \u8F93\u51FA\u7684 encoding \u5B57\u6BB5\u90FD\u662F ziplist\uFF0C\u8FD9\u5C31\u8868\u793A\u5185\u90E8\u91C7\u7528\u538B\u7F29\u5217\u8868\u7ED3\u6784\u8FDB\u884C\u5B58\u50A8\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct ziplist&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 zlbytes; // \u6574\u4E2A\u538B\u7F29\u5217\u8868\u5360\u7528\u5B57\u8282\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 zltail_offset; // \u6700\u540E\u4E00\u4E2A\u5143\u7D20\u8DDD\u79BB\u538B\u7F29\u5217\u8868\u8D77\u59CB\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF\uFF0C\u7528\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    int16 zllength; // \u5143\u7D20\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    T[] entries; // \u5143\u7D20\u5185\u5BB9\u5217\u8868\uFF0C\u6328\u4E2A\u6328\u4E2A\u7D27\u51D1\u5B58\u50A8</span></span>
<span class="line"><span style="color:#A6ACCD;">    int8 zlend; // \u6807\u5FD7\u538B\u7F29\u5217\u8868\u7684\u7ED3\u675F\uFF0C\u503C\u6052\u4E3A 0xFF</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/28/164df01c1c7579e7~tplv-t2oaga2asx-image.image" alt=""></p><p>\u538B\u7F29\u5217\u8868\u4E3A\u4E86\u652F\u6301\u53CC\u5411\u904D\u5386\uFF0C\u6240\u4EE5\u624D\u4F1A\u6709 <code>ztail_offset</code> \u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u7528\u6765\u5FEB\u901F\u5B9A\u4F4D\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u5012\u7740\u904D\u5386\u3002</p><p>entry \u5757\u968F\u7740\u5BB9\u7EB3\u7684\u5143\u7D20\u7C7B\u578B\u4E0D\u540C\uFF0C\u4E5F\u4F1A\u6709\u4E0D\u4E00\u6837\u7684\u7ED3\u6784\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct entry {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int&lt;var&gt; prevlen; // \u524D\u4E00\u4E2A entry \u7684\u5B57\u8282\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    int&lt;var&gt; encoding; // \u5143\u7D20\u7C7B\u578B\u7F16\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    optional byte[] content; // \u5143\u7D20\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B83\u7684 <code>prevlen</code> \u5B57\u6BB5\u8868\u793A\u524D\u4E00\u4E2A entry \u7684\u5B57\u8282\u957F\u5EA6\uFF0C\u5F53\u538B\u7F29\u5217\u8868\u5012\u7740\u904D\u5386\u65F6\uFF0C\u9700\u8981\u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u6765\u5FEB\u901F\u5B9A\u4F4D\u5230\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\u3002\u5B83\u662F\u4E00\u4E2A\u53D8\u957F\u7684\u6574\u6570\uFF0C\u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E 254(0xFE) \u65F6\uFF0C\u4F7F\u7528\u4E00\u4E2A\u5B57\u8282\u8868\u793A\uFF1B\u5982\u679C\u8FBE\u5230\u6216\u8D85\u51FA 254(0xFE) \u90A3\u5C31\u4F7F\u7528 5 \u4E2A\u5B57\u8282\u6765\u8868\u793A\u3002\u7B2C\u4E00\u4E2A\u5B57\u8282\u662F 0xFE(254)\uFF0C\u5269\u4F59\u56DB\u4E2A\u5B57\u8282\u8868\u793A\u5B57\u7B26\u4E32\u957F\u5EA6\u3002\u4F60\u53EF\u80FD\u4F1A\u89C9\u5F97\u7528 5 \u4E2A\u5B57\u8282\u6765\u8868\u793A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u662F\u4E0D\u662F\u592A\u6D6A\u8D39\u4E86\u3002\u6211\u4EEC\u53EF\u4EE5\u7B97\u4E00\u4E0B\uFF0C\u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u5176\u5B9E 5 \u4E2A\u5B57\u8282\u4E5F\u53EA\u5360\u7528\u4E86\u4E0D\u5230<code>(5/(254+5))&lt;2%</code>\u7684\u7A7A\u95F4\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/30/164ea7e76014e30c~tplv-t2oaga2asx-image.image" alt=""></p><p><code>encoding</code>\u5B57\u6BB5\u5B58\u50A8\u4E86\u5143\u7D20\u5185\u5BB9\u7684\u7F16\u7801\u7C7B\u578B\u4FE1\u606F\uFF0Cziplist \u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u6765\u51B3\u5B9A\u540E\u9762\u7684 content \u5185\u5BB9\u7684\u5F62\u5F0F\u3002</p><p>Redis \u4E3A\u4E86\u8282\u7EA6\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5BF9 encoding \u5B57\u6BB5\u8FDB\u884C\u4E86\u76F8\u5F53\u590D\u6742\u7684\u8BBE\u8BA1\u3002Redis \u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u7684\u524D\u7F00\u4F4D\u6765\u8BC6\u522B\u5177\u4F53\u5B58\u50A8\u7684\u6570\u636E\u5F62\u5F0F\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u770B Redis \u662F\u5982\u4F55\u6839\u636E<code>encoding</code>\u7684\u524D\u7F00\u4F4D\u6765\u533A\u5206\u5185\u5BB9\u7684\uFF1A</p><ol><li><code>00xxxxxx</code> \u6700\u5927\u957F\u5EA6\u4F4D 63 \u7684\u77ED\u5B57\u7B26\u4E32\uFF0C\u540E\u9762\u7684 6 \u4E2A\u4F4D\u5B58\u50A8\u5B57\u7B26\u4E32\u7684\u4F4D\u6570\uFF0C\u5269\u4F59\u7684\u5B57\u8282\u5C31\u662F\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u3002</li><li><code>01xxxxxx xxxxxxxx</code> \u4E2D\u7B49\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\uFF0C\u540E\u9762 14 \u4E2A\u4F4D\u6765\u8868\u793A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5269\u4F59\u7684\u5B57\u8282\u5C31\u662F\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u3002</li><li><code>10000000 aaaaaaaa bbbbbbbb cccccccc dddddddd</code> \u7279\u5927\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u4F7F\u7528\u989D\u5916 4 \u4E2A\u5B57\u8282\u6765\u8868\u793A\u957F\u5EA6\u3002\u7B2C\u4E00\u4E2A\u5B57\u8282\u524D\u7F00\u662F<code>10</code>\uFF0C\u5269\u4F59 6 \u4F4D\u6CA1\u6709\u4F7F\u7528\uFF0C\u7EDF\u4E00\u7F6E\u4E3A\u96F6\u3002\u540E\u9762\u8DDF\u7740\u5B57\u7B26\u4E32\u5185\u5BB9\u3002\u4E0D\u8FC7\u8FD9\u6837\u7684\u5927\u5B57\u7B26\u4E32\u662F\u6CA1\u6709\u673A\u4F1A\u4F7F\u7528\u7684\uFF0C\u538B\u7F29\u5217\u8868\u901A\u5E38\u53EA\u662F\u7528\u6765\u5B58\u50A8\u5C0F\u6570\u636E\u7684\u3002</li><li><code>11000000</code> \u8868\u793A int16\uFF0C\u540E\u8DDF\u4E24\u4E2A\u5B57\u8282\u8868\u793A\u6574\u6570\u3002</li><li><code>11010000</code> \u8868\u793A int32\uFF0C\u540E\u8DDF\u56DB\u4E2A\u5B57\u8282\u8868\u793A\u6574\u6570\u3002</li><li><code>11100000</code> \u8868\u793A int64\uFF0C\u540E\u8DDF\u516B\u4E2A\u5B57\u8282\u8868\u793A\u6574\u6570\u3002</li><li><code>11110000</code> \u8868\u793A int24\uFF0C\u540E\u8DDF\u4E09\u4E2A\u5B57\u8282\u8868\u793A\u6574\u6570\u3002</li><li><code>11111110</code> \u8868\u793A int8\uFF0C\u540E\u8DDF\u4E00\u4E2A\u5B57\u8282\u8868\u793A\u6574\u6570\u3002</li><li><code>11111111</code> \u8868\u793A ziplist \u7684\u7ED3\u675F\uFF0C\u4E5F\u5C31\u662F zlend \u7684\u503C 0xFF\u3002</li><li><code>1111xxxx</code> \u8868\u793A\u6781\u5C0F\u6574\u6570\uFF0Cxxxx \u7684\u8303\u56F4\u53EA\u80FD\u662F (<code>0001~1101</code>), \u4E5F\u5C31\u662F<code>1~13</code>\uFF0C\u56E0\u4E3A<code>0000\u30011110\u30011111</code>\u90FD\u88AB\u5360\u7528\u4E86\u3002\u8BFB\u53D6\u5230\u7684 value \u9700\u8981\u5C06 xxxx \u51CF 1\uFF0C\u4E5F\u5C31\u662F\u6574\u6570<code>0~12</code>\u5C31\u662F\u6700\u7EC8\u7684 value\u3002</li></ol><p>\u6CE8\u610F\u5230 <code>content</code> \u5B57\u6BB5\u5728\u7ED3\u6784\u4F53\u4E2D\u5B9A\u4E49\u4E3A optional \u7C7B\u578B\uFF0C\u8868\u793A\u8FD9\u4E2A\u5B57\u6BB5\u662F\u53EF\u9009\u7684\uFF0C\u5BF9\u4E8E\u5F88\u5C0F\u7684\u6574\u6570\u800C\u8A00\uFF0C\u5B83\u7684\u5185\u5BB9\u5DF2\u7ECF\u5185\u8054\u5230 encoding \u5B57\u6BB5\u7684\u5C3E\u90E8\u4E86\u3002</p><h2 id="\u589E\u52A0\u5143\u7D20" tabindex="-1">\u589E\u52A0\u5143\u7D20 <a class="header-anchor" href="#\u589E\u52A0\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A ziplist \u90FD\u662F\u7D27\u51D1\u5B58\u50A8\uFF0C\u6CA1\u6709\u5197\u4F59\u7A7A\u95F4 (\u5BF9\u6BD4\u4E00\u4E0B Redis \u7684\u5B57\u7B26\u4E32\u7ED3\u6784)\u3002\u610F\u5473\u7740\u63D2\u5165\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u5C31\u9700\u8981\u8C03\u7528 realloc \u6269\u5C55\u5185\u5B58\u3002\u53D6\u51B3\u4E8E\u5185\u5B58\u5206\u914D\u5668\u7B97\u6CD5\u548C\u5F53\u524D\u7684 ziplist \u5185\u5B58\u5927\u5C0F\uFF0Crealloc \u53EF\u80FD\u4F1A\u91CD\u65B0\u5206\u914D\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u5E76\u5C06\u4E4B\u524D\u7684\u5185\u5BB9\u4E00\u6B21\u6027\u62F7\u8D1D\u5230\u65B0\u7684\u5730\u5740\uFF0C\u4E5F\u53EF\u80FD\u5728\u539F\u6709\u7684\u5730\u5740\u4E0A\u8FDB\u884C\u6269\u5C55\uFF0C\u8FD9\u65F6\u5C31\u4E0D\u9700\u8981\u8FDB\u884C\u65E7\u5185\u5BB9\u7684\u5185\u5B58\u62F7\u8D1D\u3002</p><p>\u5982\u679C ziplist \u5360\u636E\u5185\u5B58\u592A\u5927\uFF0C\u91CD\u65B0\u5206\u914D\u5185\u5B58\u548C\u62F7\u8D1D\u5185\u5B58\u5C31\u4F1A\u6709\u5F88\u5927\u7684\u6D88\u8017\u3002\u6240\u4EE5 ziplist \u4E0D\u9002\u5408\u5B58\u50A8\u5927\u578B\u5B57\u7B26\u4E32\uFF0C\u5B58\u50A8\u7684\u5143\u7D20\u4E5F\u4E0D\u5B9C\u8FC7\u591A\u3002</p><h2 id="\u7EA7\u8054\u66F4\u65B0" tabindex="-1">\u7EA7\u8054\u66F4\u65B0 <a class="header-anchor" href="#\u7EA7\u8054\u66F4\u65B0" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* When an entry is inserted, we need to set the prevlen field of the next</span></span>
<span class="line"><span style="color:#A6ACCD;"> * entry to equal the length of the inserted entry. It can occur that this</span></span>
<span class="line"><span style="color:#A6ACCD;"> * length cannot be encoded in 1 byte and the next entry needs to be grow</span></span>
<span class="line"><span style="color:#A6ACCD;"> * a bit larger to hold the 5-byte encoded prevlen. This can be done for free,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * because this only happens when an entry is already being inserted (which</span></span>
<span class="line"><span style="color:#A6ACCD;"> * causes a realloc and memmove). However, encoding the prevlen may require</span></span>
<span class="line"><span style="color:#A6ACCD;"> * that this entry is grown as well. This effect may cascade throughout</span></span>
<span class="line"><span style="color:#A6ACCD;"> * the ziplist when there are consecutive entries with a size close to</span></span>
<span class="line"><span style="color:#A6ACCD;"> * ZIP_BIG_PREVLEN, so we need to check that the prevlen can be encoded in</span></span>
<span class="line"><span style="color:#A6ACCD;"> * every consecutive entry.</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Note that this effect can also happen in reverse, where the bytes required</span></span>
<span class="line"><span style="color:#A6ACCD;"> * to encode the prevlen field can shrink. This effect is deliberately ignored,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * because it can cause a &quot;flapping&quot; effect where a chain prevlen fields is</span></span>
<span class="line"><span style="color:#A6ACCD;"> * first grown and then shrunk again after consecutive inserts. Rather, the</span></span>
<span class="line"><span style="color:#A6ACCD;"> * field is allowed to stay larger than necessary, because a large prevlen</span></span>
<span class="line"><span style="color:#A6ACCD;"> * field implies the ziplist is holding large entries anyway.</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * The pointer &quot;p&quot; points to the first entry that does NOT need to be</span></span>
<span class="line"><span style="color:#A6ACCD;"> * updated, i.e. consecutive fields MAY need an update. */</span></span>
<span class="line"><span style="color:#A6ACCD;">unsigned char *__ziplistCascadeUpdate(unsigned char *zl, unsigned char *p) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    size_t curlen = intrev32ifbe(ZIPLIST_BYTES(zl)), rawlen, rawlensize;</span></span>
<span class="line"><span style="color:#A6ACCD;">    size_t offset, noffset, extra;</span></span>
<span class="line"><span style="color:#A6ACCD;">    unsigned char *np;</span></span>
<span class="line"><span style="color:#A6ACCD;">    zlentry cur, next;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (p[0] != ZIP_END) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        zipEntry(p, &amp;cur);</span></span>
<span class="line"><span style="color:#A6ACCD;">        rawlen = cur.headersize + cur.len;</span></span>
<span class="line"><span style="color:#A6ACCD;">        rawlensize = zipStorePrevEntryLength(NULL,rawlen);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /* Abort if there is no next entry. */</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (p[rawlen] == ZIP_END) break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        zipEntry(p+rawlen, &amp;next);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        /* Abort when &quot;prevlen&quot; has not changed. */</span></span>
<span class="line"><span style="color:#A6ACCD;">        // prevlen \u7684\u957F\u5EA6\u6CA1\u6709\u53D8\uFF0C\u4E2D\u65AD\u7EA7\u8054\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (next.prevrawlen == rawlen) break;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (next.prevrawlensize &lt; rawlensize) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* The &quot;prevlen&quot; field of &quot;next&quot; needs more bytes to hold</span></span>
<span class="line"><span style="color:#A6ACCD;">             * the raw length of &quot;cur&quot;. */</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u7EA7\u8054\u6269\u5C55</span></span>
<span class="line"><span style="color:#A6ACCD;">            offset = p-zl;</span></span>
<span class="line"><span style="color:#A6ACCD;">            extra = rawlensize-next.prevrawlensize;</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6269\u5927\u5185\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">            zl = ziplistResize(zl,curlen+extra);</span></span>
<span class="line"><span style="color:#A6ACCD;">            p = zl+offset;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /* Current pointer and offset for next element. */</span></span>
<span class="line"><span style="color:#A6ACCD;">            np = p+rawlen;</span></span>
<span class="line"><span style="color:#A6ACCD;">            noffset = np-zl;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /* Update tail offset when next element is not the tail element. */</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u66F4\u65B0 zltail_offset \u6307\u9488</span></span>
<span class="line"><span style="color:#A6ACCD;">            if ((zl+intrev32ifbe(ZIPLIST_TAIL_OFFSET(zl))) != np) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                ZIPLIST_TAIL_OFFSET(zl) =</span></span>
<span class="line"><span style="color:#A6ACCD;">                    intrev32ifbe(intrev32ifbe(ZIPLIST_TAIL_OFFSET(zl))+extra);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /* Move the tail to the back. */</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u79FB\u52A8\u5185\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">            memmove(np+rawlensize,</span></span>
<span class="line"><span style="color:#A6ACCD;">                np+next.prevrawlensize,</span></span>
<span class="line"><span style="color:#A6ACCD;">                curlen-noffset-next.prevrawlensize-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            zipStorePrevEntryLength(np,rawlen);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /* Advance the cursor */</span></span>
<span class="line"><span style="color:#A6ACCD;">            p += rawlen;</span></span>
<span class="line"><span style="color:#A6ACCD;">            curlen += extra;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (next.prevrawlensize &gt; rawlensize) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /* This would result in shrinking, which we want to avoid.</span></span>
<span class="line"><span style="color:#A6ACCD;">                 * So, set &quot;rawlen&quot; in the available bytes. */</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u7EA7\u8054\u6536\u7F29\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u53EF\u4EE5\u4E0D\u7528\u6536\u7F29\u4E86\uFF0C\u56E0\u4E3A 5 \u4E2A\u5B57\u8282\u4E5F\u662F\u53EF\u4EE5\u5B58\u50A8 1 \u4E2A\u5B57\u8282\u7684\u5185\u5BB9\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u867D\u7136\u6709\u70B9\u6D6A\u8D39\uFF0C\u4F46\u662F\u7EA7\u8054\u66F4\u65B0\u5B9E\u5728\u662F\u592A\u53EF\u6015\u4E86\uFF0C\u6240\u4EE5\u6D6A\u8D39\u5C31\u6D6A\u8D39\u5427</span></span>
<span class="line"><span style="color:#A6ACCD;">                zipStorePrevEntryLengthLarge(p+rawlen,rawlen);</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u5927\u5C0F\u6CA1\u53D8\uFF0C\u6539\u4E2A\u957F\u5EA6\u503C\u5C31\u5B8C\u4E8B\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">                zipStorePrevEntryLength(p+rawlen,rawlen);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            /* Stop here, as the raw length of &quot;next&quot; has not changed. */</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return zl;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u524D\u9762\u63D0\u5230\u6BCF\u4E2A entry \u90FD\u4F1A\u6709\u4E00\u4E2A <code>prevlen</code> \u5B57\u6BB5\u5B58\u50A8\u524D\u4E00\u4E2A entry \u7684\u957F\u5EA6\u3002\u5982\u679C\u5185\u5BB9\u5C0F\u4E8E 254 \u5B57\u8282\uFF0C<code>prevlen</code> \u7528 1 \u5B57\u8282\u5B58\u50A8\uFF0C\u5426\u5219\u5C31\u662F 5 \u5B57\u8282\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u67D0\u4E2A entry \u7ECF\u8FC7\u4E86\u4FEE\u6539\u64CD\u4F5C\u4ECE 253 \u5B57\u8282\u53D8\u6210\u4E86 254 \u5B57\u8282\uFF0C\u90A3\u4E48\u5B83\u7684\u4E0B\u4E00\u4E2A entry \u7684 <code>prevlen</code> \u5B57\u6BB5\u5C31\u8981\u66F4\u65B0\uFF0C\u4ECE 1 \u4E2A\u5B57\u8282\u6269\u5C55\u5230 5 \u4E2A\u5B57\u8282\uFF1B\u5982\u679C\u8FD9\u4E2A entry \u7684\u957F\u5EA6\u672C\u6765\u4E5F\u662F 253 \u5B57\u8282\uFF0C\u90A3\u4E48\u540E\u9762 entry \u7684 <code>prevlen</code> \u5B57\u6BB5\u8FD8\u5F97\u7EE7\u7EED\u66F4\u65B0\u3002</p><p>\u5982\u679C ziplist \u91CC\u9762\u6BCF\u4E2A entry \u6070\u597D\u90FD\u5B58\u50A8\u4E86 253 \u5B57\u8282\u7684\u5185\u5BB9\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A entry \u5185\u5BB9\u7684\u4FEE\u6539\u5C31\u4F1A\u5BFC\u81F4\u540E\u7EED\u6240\u6709 entry \u7684\u7EA7\u8054\u66F4\u65B0\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u6BD4\u8F83\u8017\u8D39\u8BA1\u7B97\u8D44\u6E90\u7684\u64CD\u4F5C\u3002</p><p>\u5220\u9664\u4E2D\u95F4\u7684\u67D0\u4E2A\u8282\u70B9\u4E5F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7EA7\u8054\u66F4\u65B0\uFF0C\u8BFB\u8005\u53EF\u4EE5\u601D\u8003\u4E00\u4E0B\u4E3A\u4EC0\u4E48\uFF1F</p><h2 id="intset-\u5C0F\u6574\u6570\u96C6\u5408" tabindex="-1">IntSet \u5C0F\u6574\u6570\u96C6\u5408 <a class="header-anchor" href="#intset-\u5C0F\u6574\u6570\u96C6\u5408" aria-hidden="true">#</a></h2><p>\u5F53 set \u96C6\u5408\u5BB9\u7EB3\u7684\u5143\u7D20\u90FD\u662F\u6574\u6570\u5E76\u4E14\u5143\u7D20\u4E2A\u6570\u8F83\u5C0F\u65F6\uFF0CRedis \u4F1A\u4F7F\u7528 <code>intset</code> \u6765\u5B58\u50A8\u7ED3\u5408\u5143\u7D20\u3002<code>intset</code> \u662F\u7D27\u51D1\u7684\u6570\u7EC4\u7ED3\u6784\uFF0C\u540C\u65F6\u652F\u6301 16 \u4F4D\u300132 \u4F4D\u548C 64 \u4F4D\u6574\u6570\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct intset&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 encoding; // \u51B3\u5B9A\u6574\u6570\u4F4D\u5BBD\u662F 16 \u4F4D\u300132 \u4F4D\u8FD8\u662F 64 \u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 length; // \u5143\u7D20\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    int&lt;T&gt; contents; // \u6574\u6570\u6570\u7EC4\uFF0C\u53EF\u4EE5\u662F 16 \u4F4D\u300132 \u4F4D\u548C 64 \u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/29/164e1a049ea6ea41~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8001\u94B1\u4E5F\u4E0D\u662F\u5F88\u80FD\u7406\u89E3\u4E3A\u4EC0\u4E48 intset \u7684 encoding \u5B57\u6BB5\u548C length \u5B57\u6BB5\u4F7F\u7528 32 \u4F4D\u6574\u6570\u5B58\u50A8\u3002\u6BD5\u7ADF\u5B83\u53EA\u662F\u7528\u6765\u5B58\u50A8\u5C0F\u6574\u6570\u7684\uFF0C\u957F\u5EA6\u4E0D\u5E94\u8BE5\u5F88\u957F\uFF0C\u800C\u4E14 encoding \u53EA\u6709 16 \u4F4D\u300132 \u4F4D\u548C 64 \u4F4D\u4E09\u4E2A\u7C7B\u578B\uFF0C\u7528\u4E00\u4E2A\u5B57\u8282\u5B58\u50A8\u5C31\u7EF0\u7EF0\u6709\u4F59\u3002\u5173\u4E8E\u8FD9\u70B9\uFF0C\u8BFB\u8005\u4EEC\u53EF\u4EE5\u8FDB\u4E00\u6B65\u8BA8\u8BBA\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; sadd codehole 1 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2dc2bde0 refcount:1 encoding:intset serializedlength:15 lru:6065795 lru_seconds_idle:4</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; sadd codehole go java python</span></span>
<span class="line"><span style="color:#A6ACCD;">(integer) 3</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2dc2bde0 refcount:1 encoding:hashtable serializedlength:22 lru:6065810 lru_seconds_idle:5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\u89C2\u5BDF debug object \u7684\u8F93\u51FA\u5B57\u6BB5 encoding \u7684\u503C\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5F53 set \u91CC\u9762\u653E\u8FDB\u53BB\u4E86\u975E\u6574\u6570\u503C\u65F6\uFF0C\u5B58\u50A8\u5F62\u5F0F\u7ACB\u5373\u4ECE intset \u8F6C\u53D8\u6210\u4E86 hash \u7ED3\u6784\u3002</p><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><ol><li>\u4E3A\u4EC0\u4E48 set \u96C6\u5408\u5728\u6570\u91CF\u5F88\u5C0F\u7684\u65F6\u5019\u4E0D\u4F7F\u7528 ziplist \u6765\u5B58\u50A8\uFF1F</li><li>\u6267\u884C<code>rpush codehole 1 2 3</code>\u547D\u4EE4\u540E\uFF0C\u8BF7\u5199\u51FA\u5217\u8868\u5185\u5BB9\u7684 16 \u8FDB\u5236\u5F62\u5F0F\u3002</li></ol>`,34),t=[p];function o(c,i,r,A,C,d){return a(),n("div",null,t)}const D=s(l,[["render",o]]);export{h as __pageData,D as default};
