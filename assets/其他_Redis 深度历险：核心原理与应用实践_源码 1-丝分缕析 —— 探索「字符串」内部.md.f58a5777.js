import{_ as s,c as e,o as a,d as n}from"./app.e0e4ea3a.js";const b=JSON.parse('{"title":"\u6E90\u7801 1-\u4E1D\u5206\u7F15\u6790 \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"embstr vs raw","slug":"embstr-vs-raw","link":"#embstr-vs-raw","children":[]},{"level":2,"title":"\u6269\u5BB9\u7B56\u7565","slug":"\u6269\u5BB9\u7B56\u7565","link":"#\u6269\u5BB9\u7B56\u7565","children":[]},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 1-\u4E1D\u5206\u7F15\u6790 \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8.md"}'),c={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 1-\u4E1D\u5206\u7F15\u6790 \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8.md"},l=n(`<h1 id="\u6E90\u7801-1-\u4E1D\u5206\u7F15\u6790-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 1-\u4E1D\u5206\u7F15\u6790 \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-1-\u4E1D\u5206\u7F15\u6790-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><hr><h1 id="\u6E90\u7801-1\uFF1A\u4E1D\u5206\u7F15\u6790-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8\u7ED3\u6784" tabindex="-1">\u6E90\u7801 1\uFF1A\u4E1D\u5206\u7F15\u6790 \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8\u7ED3\u6784 <a class="header-anchor" href="#\u6E90\u7801-1\uFF1A\u4E1D\u5206\u7F15\u6790-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u7B26\u4E32\u300D\u5185\u90E8\u7ED3\u6784" aria-hidden="true">#</a></h1><p>Redis \u4E2D\u7684\u5B57\u7B26\u4E32\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\u5B57\u7B26\u4E32\uFF0C\u5728\u5185\u5B58\u4E2D\u5B83\u662F\u4EE5\u5B57\u8282\u6570\u7EC4\u7684\u5F62\u5F0F\u5B58\u5728\u7684\u3002\u6211\u4EEC\u77E5\u9053 C \u8BED\u8A00\u91CC\u9762\u7684\u5B57\u7B26\u4E32\u6807\u51C6\u5F62\u5F0F\u662F\u4EE5 NULL \u4F5C\u4E3A\u7ED3\u675F\u7B26\uFF0C\u4F46\u662F\u5728 Redis \u91CC\u9762\u5B57\u7B26\u4E32\u4E0D\u662F\u8FD9\u4E48\u8868\u793A\u7684\u3002\u56E0\u4E3A\u8981\u83B7\u53D6 NULL \u7ED3\u5C3E\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u4F7F\u7528\u7684\u662F <code>strlen</code> \u6807\u51C6\u5E93\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u7B97\u6CD5\u590D\u6742\u5EA6\u662F O(n)\uFF0C\u5B83\u9700\u8981\u5BF9\u5B57\u8282\u6570\u7EC4\u8FDB\u884C\u904D\u5386\u626B\u63CF\uFF0C\u4F5C\u4E3A\u5355\u7EBF\u7A0B\u7684 Redis \u8868\u793A\u627F\u53D7\u4E0D\u8D77\u3002</p><p>Redis \u7684\u5B57\u7B26\u4E32\u53EB\u7740\u300CSDS\u300D\uFF0C\u4E5F\u5C31\u662F<code>Simple Dynamic String</code>\u3002\u5B83\u7684\u7ED3\u6784\u662F\u4E00\u4E2A\u5E26\u957F\u5EA6\u4FE1\u606F\u7684\u5B57\u8282\u6570\u7EC4\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct SDS&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  T capacity; // \u6570\u7EC4\u5BB9\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">  T len; // \u6570\u7EC4\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">  byte flags; // \u7279\u6B8A\u6807\u8BC6\u4F4D\uFF0C\u4E0D\u7406\u776C\u5B83</span></span>
<span class="line"><span style="color:#A6ACCD;">  byte[] content; // \u6570\u7EC4\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/27/164db13445631ab4~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5982\u4EE3\u7801\u6240\u793A\uFF0C<code>content</code> \u91CC\u9762\u5B58\u50A8\u4E86\u771F\u6B63\u7684\u5B57\u7B26\u4E32\u5185\u5BB9\uFF0C\u90A3 <code>capacity</code> \u548C <code>len</code> \u8868\u793A\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u5B83\u6709\u70B9\u7C7B\u4F3C\u4E8E Java \u8BED\u8A00\u7684 ArrayList \u7ED3\u6784\uFF0C\u9700\u8981\u6BD4\u5B9E\u9645\u7684\u5185\u5BB9\u957F\u5EA6\u591A\u5206\u914D\u4E00\u4E9B\u5197\u4F59\u7A7A\u95F4\u3002<code>capacity</code> \u8868\u793A\u6240\u5206\u914D\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C<code>len</code> \u8868\u793A\u5B57\u7B26\u4E32\u7684\u5B9E\u9645\u957F\u5EA6\u3002\u524D\u9762\u6211\u4EEC\u63D0\u5230\u5B57\u7B26\u4E32\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\u5B57\u7B26\u4E32\uFF0C\u5B83\u8981\u652F\u6301 <code>append</code> \u64CD\u4F5C\u3002\u5982\u679C\u6570\u7EC4\u6CA1\u6709\u5197\u4F59\u7A7A\u95F4\uFF0C\u90A3\u4E48\u8FFD\u52A0\u64CD\u4F5C\u5FC5\u7136\u6D89\u53CA\u5230\u5206\u914D\u65B0\u6570\u7EC4\uFF0C\u7136\u540E\u5C06\u65E7\u5185\u5BB9\u590D\u5236\u8FC7\u6765\uFF0C\u518D <code>append</code> \u65B0\u5185\u5BB9\u3002\u5982\u679C\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u975E\u5E38\u957F\uFF0C\u8FD9\u6837\u7684\u5185\u5B58\u5206\u914D\u548C\u590D\u5236\u5F00\u9500\u5C31\u4F1A\u975E\u5E38\u5927\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* Append the specified binary-safe string pointed by &#39;t&#39; of &#39;len&#39; bytes to the</span></span>
<span class="line"><span style="color:#A6ACCD;"> * end of the specified sds string &#39;s&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * After the call, the passed sds string is no longer valid and all the</span></span>
<span class="line"><span style="color:#A6ACCD;"> * references must be substituted with the new pointer returned by the call. */</span></span>
<span class="line"><span style="color:#A6ACCD;">sds sdscatlen(sds s, const void *t, size_t len) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    size_t curlen = sdslen(s);  // \u539F\u5B57\u7B26\u4E32\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6309\u9700\u8C03\u6574\u7A7A\u95F4\uFF0C\u5982\u679C capacity \u4E0D\u591F\u5BB9\u7EB3\u8FFD\u52A0\u7684\u5185\u5BB9\uFF0C\u5C31\u4F1A\u91CD\u65B0\u5206\u914D\u5B57\u8282\u6570\u7EC4\u5E76\u590D\u5236\u539F\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u5230\u65B0\u6570\u7EC4\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    s = sdsMakeRoomFor(s,len);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (s == NULL) return NULL; // \u5185\u5B58\u4E0D\u8DB3</span></span>
<span class="line"><span style="color:#A6ACCD;">    memcpy(s+curlen, t, len);  // \u8FFD\u52A0\u76EE\u6807\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u5230\u5B57\u8282\u6570\u7EC4\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    sdssetlen(s, curlen+len); // \u8BBE\u7F6E\u8FFD\u52A0\u540E\u7684\u957F\u5EA6\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    s[curlen+len] = &#39;\\0&#39;; // \u8BA9\u5B57\u7B26\u4E32\u4EE5\\0 \u7ED3\u5C3E\uFF0C\u4FBF\u4E8E\u8C03\u8BD5\u6253\u5370\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 glibc \u7684\u5B57\u7B26\u4E32\u51FD\u6570\u8FDB\u884C\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">    return s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u7684 SDS \u7ED3\u6784\u4F7F\u7528\u4E86\u8303\u578B <code>T</code>\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u7528 <code>int</code> \u5462\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5F53\u5B57\u7B26\u4E32\u6BD4\u8F83\u77ED\u65F6\uFF0C<code>len</code> \u548C <code>capacity</code> \u53EF\u4EE5\u4F7F\u7528 <code>byte</code> \u548C <code>short</code> \u6765\u8868\u793A\uFF0CRedis \u4E3A\u4E86\u5BF9\u5185\u5B58\u505A\u6781\u81F4\u7684\u4F18\u5316\uFF0C\u4E0D\u540C\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u4F7F\u7528\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\u6765\u8868\u793A\u3002</p><p>Redis \u89C4\u5B9A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u4E0D\u5F97\u8D85\u8FC7 512M \u5B57\u8282\u3002\u521B\u5EFA\u5B57\u7B26\u4E32\u65F6 <code>len</code> \u548C <code>capacity</code> \u4E00\u6837\u957F\uFF0C\u4E0D\u4F1A\u591A\u5206\u914D\u5197\u4F59\u7A7A\u95F4\uFF0C\u8FD9\u662F\u56E0\u4E3A\u7EDD\u5927\u591A\u6570\u573A\u666F\u4E0B\u6211\u4EEC\u4E0D\u4F1A\u4F7F\u7528 <code>append</code> \u64CD\u4F5C\u6765\u4FEE\u6539\u5B57\u7B26\u4E32\u3002</p><h2 id="embstr-vs-raw" tabindex="-1">embstr vs raw <a class="header-anchor" href="#embstr-vs-raw" aria-hidden="true">#</a></h2><p>Redis \u7684\u5B57\u7B26\u4E32\u6709\u4E24\u79CD\u5B58\u50A8\u65B9\u5F0F\uFF0C\u5728\u957F\u5EA6\u7279\u522B\u77ED\u65F6\uFF0C\u4F7F\u7528 <code>emb</code> \u5F62\u5F0F\u5B58\u50A8 (embeded)\uFF0C\u5F53\u957F\u5EA6\u8D85\u8FC7 44 \u65F6\uFF0C\u4F7F\u7528 <code>raw</code> \u5F62\u5F0F\u5B58\u50A8\u3002</p><p>\u8FD9\u4E24\u79CD\u7C7B\u578B\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F\u4E3A\u4EC0\u4E48\u5206\u754C\u7EBF\u662F 44 \u5462\uFF1F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; set codehole abcdefghijklmnopqrstuvwxyz012345678912345678</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2de00370 refcount:1 encoding:embstr serializedlength:45 lru:5958906 lru_seconds_idle:1</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; set codehole abcdefghijklmnopqrstuvwxyz0123456789123456789</span></span>
<span class="line"><span style="color:#A6ACCD;">OK</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; debug object codehole</span></span>
<span class="line"><span style="color:#A6ACCD;">Value at:0x7fec2dd0b750 refcount:1 encoding:raw serializedlength:46 lru:5958911 lru_seconds_idle:1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\u4E0A\u9762 <code>debug object</code> \u8F93\u51FA\u4E2D\u6709\u4E2A <code>encoding</code> \u5B57\u6BB5\uFF0C\u4E00\u4E2A\u5B57\u7B26\u7684\u5DEE\u522B\uFF0C\u5B58\u50A8\u5F62\u5F0F\u5C31\u53D1\u751F\u4E86\u53D8\u5316\u3002\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u4E3A\u4E86\u89E3\u91CA\u8FD9\u79CD\u73B0\u8C61\uFF0C\u6211\u4EEC\u9996\u5148\u6765\u4E86\u89E3\u4E00\u4E0B Redis \u5BF9\u8C61\u5934\u7ED3\u6784\u4F53\uFF0C\u6240\u6709\u7684 Redis \u5BF9\u8C61\u90FD\u6709\u4E0B\u9762\u7684\u8FD9\u4E2A\u7ED3\u6784\u5934:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct RedisObject {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int4 type; // 4bits</span></span>
<span class="line"><span style="color:#A6ACCD;">    int4 encoding; // 4bits</span></span>
<span class="line"><span style="color:#A6ACCD;">    int24 lru; // 24bits</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32 refcount; // 4bytes</span></span>
<span class="line"><span style="color:#A6ACCD;">    void *ptr; // 8bytes\uFF0C64-bit system</span></span>
<span class="line"><span style="color:#A6ACCD;">} robj;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0D\u540C\u7684\u5BF9\u8C61\u5177\u6709\u4E0D\u540C\u7684\u7C7B\u578B <code>type(4bit)</code>\uFF0C\u540C\u4E00\u4E2A\u7C7B\u578B\u7684 type \u4F1A\u6709\u4E0D\u540C\u7684\u5B58\u50A8\u5F62\u5F0F <code>encoding(4bit)</code>\uFF0C\u4E3A\u4E86\u8BB0\u5F55\u5BF9\u8C61\u7684 LRU \u4FE1\u606F\uFF0C\u4F7F\u7528\u4E86 24 \u4E2A bit \u6765\u8BB0\u5F55 LRU \u4FE1\u606F\u3002\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E2A\u5F15\u7528\u8BA1\u6570\uFF0C\u5F53\u5F15\u7528\u8BA1\u6570\u4E3A\u96F6\u65F6\uFF0C\u5BF9\u8C61\u5C31\u4F1A\u88AB\u9500\u6BC1\uFF0C\u5185\u5B58\u88AB\u56DE\u6536\u3002<code>ptr</code> \u6307\u9488\u5C06\u6307\u5411\u5BF9\u8C61\u5185\u5BB9 (body) \u7684\u5177\u4F53\u5B58\u50A8\u4F4D\u7F6E\u3002\u8FD9\u6837\u4E00\u4E2A RedisObject \u5BF9\u8C61\u5934\u9700\u8981\u5360\u636E 16 \u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>\u63A5\u7740\u6211\u4EEC\u518D\u770B SDS \u7ED3\u6784\u4F53\u7684\u5927\u5C0F\uFF0C\u5728\u5B57\u7B26\u4E32\u6BD4\u8F83\u5C0F\u65F6\uFF0CSDS \u5BF9\u8C61\u5934\u7684\u5927\u5C0F\u662F<code>capacity+3</code>\uFF0C\u81F3\u5C11\u662F 3\u3002\u610F\u5473\u7740\u5206\u914D\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u7A7A\u95F4\u5360\u7528\u4E3A 19 \u5B57\u8282 (16+3)\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct SDS {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int8 capacity; // 1byte</span></span>
<span class="line"><span style="color:#A6ACCD;">    int8 len; // 1byte</span></span>
<span class="line"><span style="color:#A6ACCD;">    int8 flags; // 1byte</span></span>
<span class="line"><span style="color:#A6ACCD;">    byte[] content; // \u5185\u8054\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A capacity</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/27/164db4dcdac7e7f9~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5982\u56FE\u6240\u793A\uFF0C<code>embstr</code> \u5B58\u50A8\u5F62\u5F0F\u662F\u8FD9\u6837\u4E00\u79CD\u5B58\u50A8\u5F62\u5F0F\uFF0C\u5B83\u5C06 RedisObject \u5BF9\u8C61\u5934\u548C SDS \u5BF9\u8C61\u8FDE\u7EED\u5B58\u5728\u4E00\u8D77\uFF0C\u4F7F\u7528 <code>malloc</code> \u65B9\u6CD5\u4E00\u6B21\u5206\u914D\u3002\u800C <code>raw</code> \u5B58\u50A8\u5F62\u5F0F\u4E0D\u4E00\u6837\uFF0C\u5B83\u9700\u8981\u4E24\u6B21 <code>malloc</code>\uFF0C\u4E24\u4E2A\u5BF9\u8C61\u5934\u5728\u5185\u5B58\u5730\u5740\u4E0A\u4E00\u822C\u662F\u4E0D\u8FDE\u7EED\u7684\u3002</p><p>\u800C\u5185\u5B58\u5206\u914D\u5668 jemalloc/tcmalloc \u7B49\u5206\u914D\u5185\u5B58\u5927\u5C0F\u7684\u5355\u4F4D\u90FD\u662F 2\u30014\u30018\u300116\u300132\u300164 \u7B49\u7B49\uFF0C\u4E3A\u4E86\u80FD\u5BB9\u7EB3\u4E00\u4E2A\u5B8C\u6574\u7684 <code>embstr</code> \u5BF9\u8C61\uFF0C<code>jemalloc</code> \u6700\u5C11\u4F1A\u5206\u914D 32 \u5B57\u8282\u7684\u7A7A\u95F4\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u518D\u7A0D\u5FAE\u957F\u4E00\u70B9\uFF0C\u90A3\u5C31\u662F 64 \u5B57\u8282\u7684\u7A7A\u95F4\u3002\u5982\u679C\u603B\u4F53\u8D85\u51FA\u4E86 64 \u5B57\u8282\uFF0CRedis \u8BA4\u4E3A\u5B83\u662F\u4E00\u4E2A\u5927\u5B57\u7B26\u4E32\uFF0C\u4E0D\u518D\u4F7F\u7528 <code>emdstr</code> \u5F62\u5F0F\u5B58\u50A8\uFF0C\u800C\u8BE5\u7528 <code>raw</code> \u5F62\u5F0F\u3002</p><p>\u5F53\u5185\u5B58\u5206\u914D\u5668\u5206\u914D\u4E86 64 \u7A7A\u95F4\u65F6\uFF0C\u90A3\u8FD9\u4E2A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u6700\u5927\u53EF\u4EE5\u662F\u591A\u5C11\u5462\uFF1F\u8FD9\u4E2A\u957F\u5EA6\u5C31\u662F 44\u3002\u90A3\u4E3A\u4EC0\u4E48\u662F 44 \u5462\uFF1F</p><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230 SDS \u7ED3\u6784\u4F53\u4E2D\u7684 <code>content</code> \u4E2D\u7684\u5B57\u7B26\u4E32\u662F\u4EE5\u5B57\u8282<code>\\0</code>\u7ED3\u5C3E\u7684\u5B57\u7B26\u4E32\uFF0C\u4E4B\u6240\u4EE5\u591A\u51FA\u8FD9\u6837\u4E00\u4E2A\u5B57\u8282\uFF0C\u662F\u4E3A\u4E86\u4FBF\u4E8E\u76F4\u63A5\u4F7F\u7528 <code>glibc</code> \u7684\u5B57\u7B26\u4E32\u5904\u7406\u51FD\u6570\uFF0C\u4EE5\u53CA\u4E3A\u4E86\u4FBF\u4E8E\u5B57\u7B26\u4E32\u7684\u8C03\u8BD5\u6253\u5370\u8F93\u51FA\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/27/164db590af5e8551~tplv-t2oaga2asx-image.image" alt=""></p><p>\u770B\u4E0A\u9762\u8FD9\u5F20\u56FE\u53EF\u4EE5\u7B97\u51FA\uFF0C\u7559\u7ED9 <code>content</code> \u7684\u957F\u5EA6\u6700\u591A\u53EA\u6709 45(64-19) \u5B57\u8282\u4E86\u3002\u5B57\u7B26\u4E32\u53C8\u662F\u4EE5<code>\\0</code>\u7ED3\u5C3E\uFF0C\u6240\u4EE5 <code>embstr</code> \u6700\u5927\u80FD\u5BB9\u7EB3\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u5C31\u662F 44\u3002</p><h2 id="\u6269\u5BB9\u7B56\u7565" tabindex="-1">\u6269\u5BB9\u7B56\u7565 <a class="header-anchor" href="#\u6269\u5BB9\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u5728\u957F\u5EA6\u5C0F\u4E8E 1M \u4E4B\u524D\uFF0C\u6269\u5BB9\u7A7A\u95F4\u91C7\u7528\u52A0\u500D\u7B56\u7565\uFF0C\u4E5F\u5C31\u662F\u4FDD\u7559 100% \u7684\u5197\u4F59\u7A7A\u95F4\u3002\u5F53\u957F\u5EA6\u8D85\u8FC7 1M \u4E4B\u540E\uFF0C\u4E3A\u4E86\u907F\u514D\u52A0\u500D\u540E\u7684\u5197\u4F59\u7A7A\u95F4\u8FC7\u5927\u800C\u5BFC\u81F4\u6D6A\u8D39\uFF0C\u6BCF\u6B21\u6269\u5BB9\u53EA\u4F1A\u591A\u5206\u914D 1M \u5927\u5C0F\u7684\u5197\u4F59\u7A7A\u95F4\u3002</p><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u573A\u5408\u4E0B\u4F1A\u7528\u5230\u5B57\u7B26\u4E32\u7684 <code>append</code> \u65B9\u6CD5\uFF1F</p>`,32),p=[l];function o(t,d,i,r,A,C){return a(),e("div",null,p)}const g=s(c,[["render",o]]);export{b as __pageData,g as default};
