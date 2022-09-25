import{_ as s,c as a,o as n,d as e}from"./app.e0e4ea3a.js";const y=JSON.parse('{"title":"\u6E90\u7801 2-\u5FAA\u5E8F\u6E10\u8FDB \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"dict \u5185\u90E8\u7ED3\u6784","slug":"dict-\u5185\u90E8\u7ED3\u6784","link":"#dict-\u5185\u90E8\u7ED3\u6784","children":[]},{"level":2,"title":"\u6E10\u8FDB\u5F0Frehash","slug":"\u6E10\u8FDB\u5F0Frehash","link":"#\u6E10\u8FDB\u5F0Frehash","children":[]},{"level":2,"title":"\u67E5\u627E\u8FC7\u7A0B","slug":"\u67E5\u627E\u8FC7\u7A0B","link":"#\u67E5\u627E\u8FC7\u7A0B","children":[]},{"level":2,"title":"hash \u51FD\u6570","slug":"hash-\u51FD\u6570","link":"#hash-\u51FD\u6570","children":[]},{"level":2,"title":"hash \u653B\u51FB","slug":"hash-\u653B\u51FB","link":"#hash-\u653B\u51FB","children":[]},{"level":2,"title":"\u6269\u5BB9\u6761\u4EF6","slug":"\u6269\u5BB9\u6761\u4EF6","link":"#\u6269\u5BB9\u6761\u4EF6","children":[]},{"level":2,"title":"\u7F29\u5BB9\u6761\u4EF6","slug":"\u7F29\u5BB9\u6761\u4EF6","link":"#\u7F29\u5BB9\u6761\u4EF6","children":[]},{"level":2,"title":"set \u7684\u7ED3\u6784","slug":"set-\u7684\u7ED3\u6784","link":"#set-\u7684\u7ED3\u6784","children":[]},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 2-\u5FAA\u5E8F\u6E10\u8FDB \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8.md"}'),l={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u6E90\u7801 2-\u5FAA\u5E8F\u6E10\u8FDB \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8.md"},p=e(`<h1 id="\u6E90\u7801-2-\u5FAA\u5E8F\u6E10\u8FDB-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 2-\u5FAA\u5E8F\u6E10\u8FDB \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-2-\u5FAA\u5E8F\u6E10\u8FDB-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><hr><h1 id="\u6E90\u7801-2\uFF1A\u5FAA\u5E8F\u6E10\u8FDB-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8" tabindex="-1">\u6E90\u7801 2\uFF1A\u5FAA\u5E8F\u6E10\u8FDB \u2014\u2014 \u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8 <a class="header-anchor" href="#\u6E90\u7801-2\uFF1A\u5FAA\u5E8F\u6E10\u8FDB-\u2014\u2014-\u63A2\u7D22\u300C\u5B57\u5178\u300D\u5185\u90E8" aria-hidden="true">#</a></h1><p>dict \u662F Redis \u670D\u52A1\u5668\u4E2D\u51FA\u73B0\u6700\u4E3A\u9891\u7E41\u7684\u590D\u5408\u578B\u6570\u636E\u7ED3\u6784\uFF0C\u9664\u4E86 hash \u7ED3\u6784\u7684\u6570\u636E\u4F1A\u7528\u5230\u5B57\u5178\u5916\uFF0C\u6574\u4E2A Redis \u6570\u636E\u5E93\u7684\u6240\u6709 key \u548C value \u4E5F\u7EC4\u6210\u4E86\u4E00\u4E2A\u5168\u5C40\u5B57\u5178\uFF0C\u8FD8\u6709\u5E26\u8FC7\u671F\u65F6\u95F4\u7684 key \u96C6\u5408\u4E5F\u662F\u4E00\u4E2A\u5B57\u5178\u3002zset \u96C6\u5408\u4E2D\u5B58\u50A8 value \u548C score \u503C\u7684\u6620\u5C04\u5173\u7CFB\u4E5F\u662F\u901A\u8FC7 dict \u7ED3\u6784\u5B9E\u73B0\u7684\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct RedisDb {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dict* dict; // all keys  key=&gt;value</span></span>
<span class="line"><span style="color:#A6ACCD;">    dict* expires; // all expired keys key=&gt;long(timestamp)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">struct zset {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dict *dict; // all values  value=&gt;score</span></span>
<span class="line"><span style="color:#A6ACCD;">    zskiplist *zsl;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="dict-\u5185\u90E8\u7ED3\u6784" tabindex="-1">dict \u5185\u90E8\u7ED3\u6784 <a class="header-anchor" href="#dict-\u5185\u90E8\u7ED3\u6784" aria-hidden="true">#</a></h2><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/28/164dc873b2a899a8~tplv-t2oaga2asx-image.image" alt=""></p><p>dict \u7ED3\u6784\u5185\u90E8\u5305\u542B\u4E24\u4E2A hashtable\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u53EA\u6709\u4E00\u4E2A hashtable \u662F\u6709\u503C\u7684\u3002\u4F46\u662F\u5728 dict \u6269\u5BB9\u7F29\u5BB9\u65F6\uFF0C\u9700\u8981\u5206\u914D\u65B0\u7684 hashtable\uFF0C\u7136\u540E\u8FDB\u884C\u6E10\u8FDB\u5F0F\u642C\u8FC1\uFF0C\u8FD9\u65F6\u5019\u4E24\u4E2A hashtable \u5B58\u50A8\u7684\u5206\u522B\u662F\u65E7\u7684 hashtable \u548C\u65B0\u7684 hashtable\u3002\u5F85\u642C\u8FC1\u7ED3\u675F\u540E\uFF0C\u65E7\u7684 hashtable \u88AB\u5220\u9664\uFF0C\u65B0\u7684 hashtable \u53D6\u800C\u4EE3\u4E4B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct dict {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictht ht[2];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/28/164dcaac6cec3483~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6240\u4EE5\uFF0C\u5B57\u5178\u6570\u636E\u7ED3\u6784\u7684\u7CBE\u534E\u5C31\u843D\u5728\u4E86 hashtable \u7ED3\u6784\u4E0A\u4E86\u3002hashtable \u7684\u7ED3\u6784\u548C Java \u7684 HashMap \u51E0\u4E4E\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u901A\u8FC7\u5206\u6876\u7684\u65B9\u5F0F\u89E3\u51B3 hash \u51B2\u7A81\u3002\u7B2C\u4E00\u7EF4\u662F\u6570\u7EC4\uFF0C\u7B2C\u4E8C\u7EF4\u662F\u94FE\u8868\u3002\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u662F\u7B2C\u4E8C\u7EF4\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u6307\u9488\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">struct dictEntry {</span></span>
<span class="line"><span style="color:#A6ACCD;">    void* key;</span></span>
<span class="line"><span style="color:#A6ACCD;">    void* val;</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictEntry* next; // \u94FE\u63A5\u4E0B\u4E00\u4E2A entry</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">struct dictht {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictEntry** table; // \u4E8C\u7EF4</span></span>
<span class="line"><span style="color:#A6ACCD;">    long size; // \u7B2C\u4E00\u7EF4\u6570\u7EC4\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    long used; // hash \u8868\u4E2D\u7684\u5143\u7D20\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6E10\u8FDB\u5F0Frehash" tabindex="-1">\u6E10\u8FDB\u5F0Frehash <a class="header-anchor" href="#\u6E10\u8FDB\u5F0Frehash" aria-hidden="true">#</a></h2><p>\u5927\u5B57\u5178\u7684\u6269\u5BB9\u662F\u6BD4\u8F83\u8017\u65F6\u95F4\u7684\uFF0C\u9700\u8981\u91CD\u65B0\u7533\u8BF7\u65B0\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u5C06\u65E7\u5B57\u5178\u6240\u6709\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u91CD\u65B0\u6302\u63A5\u5230\u65B0\u7684\u6570\u7EC4\u4E0B\u9762\uFF0C\u8FD9\u662F\u4E00\u4E2AO(n)\u7EA7\u522B\u7684\u64CD\u4F5C\uFF0C\u4F5C\u4E3A\u5355\u7EBF\u7A0B\u7684Redis\u8868\u793A\u5F88\u96BE\u627F\u53D7\u8FD9\u6837\u8017\u65F6\u7684\u8FC7\u7A0B\u3002\u6B65\u5B50\u8FC8\u5927\u4E86\u4F1A\u626F\u7740\u86CB\uFF0C\u6240\u4EE5Redis\u4F7F\u7528\u6E10\u8FDB\u5F0Frehash\u5C0F\u6B65\u642C\u8FC1\u3002\u867D\u7136\u6162\u4E00\u70B9\uFF0C\u4F46\u662F\u80AF\u5B9A\u53EF\u4EE5\u642C\u5B8C\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">dictEntry *dictAddRaw(dict *d, void *key, dictEntry **existing)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    long index;</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictEntry *entry;</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictht *ht;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u8FDB\u884C\u5C0F\u6B65\u642C\u8FC1</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (dictIsRehashing(d)) _dictRehashStep(d);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* Get the index of the new element, or -1 if</span></span>
<span class="line"><span style="color:#A6ACCD;">     * the element already exists. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ((index = _dictKeyIndex(d, key, dictHashKey(d,key), existing)) == -1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* Allocate the memory and store the new entry.</span></span>
<span class="line"><span style="color:#A6ACCD;">     * Insert the element in top, with the assumption that in a database</span></span>
<span class="line"><span style="color:#A6ACCD;">     * system it is more likely that recently added entries are accessed</span></span>
<span class="line"><span style="color:#A6ACCD;">     * more frequently. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u5B57\u5178\u5904\u4E8E\u642C\u8FC1\u8FC7\u7A0B\u4E2D\uFF0C\u8981\u5C06\u65B0\u7684\u5143\u7D20\u6302\u63A5\u5230\u65B0\u7684\u6570\u7EC4\u4E0B\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">    ht = dictIsRehashing(d) ? &amp;d-&gt;ht[1] : &amp;d-&gt;ht[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    entry = zmalloc(sizeof(*entry));</span></span>
<span class="line"><span style="color:#A6ACCD;">    entry-&gt;next = ht-&gt;table[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">    ht-&gt;table[index] = entry;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ht-&gt;used++;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* Set the hash entry fields. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictSetKey(d, entry, key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return entry;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u642C\u8FC1\u64CD\u4F5C\u57CB\u4F0F\u5728\u5F53\u524D\u5B57\u5178\u7684\u540E\u7EED\u6307\u4EE4\u4E2D(\u6765\u81EA\u5BA2\u6237\u7AEF\u7684hset/hdel\u6307\u4EE4\u7B49)\uFF0C\u4F46\u662F\u6709\u53EF\u80FD\u5BA2\u6237\u7AEF\u95F2\u4E0B\u6765\u4E86\uFF0C\u6CA1\u6709\u4E86\u540E\u7EED\u6307\u4EE4\u6765\u89E6\u53D1\u8FD9\u4E2A\u642C\u8FC1\uFF0C\u90A3\u4E48Redis\u5C31\u7F6E\u4E4B\u4E0D\u7406\u4E86\u4E48\uFF1F\u5F53\u7136\u4E0D\u4F1A\uFF0C\u4F18\u96C5\u7684Redis\u600E\u4E48\u53EF\u80FD\u8BBE\u8BA1\u7684\u8FD9\u6837\u6F66\u8349\u3002Redis\u8FD8\u4F1A\u5728\u5B9A\u65F6\u4EFB\u52A1\u4E2D\u5BF9\u5B57\u5178\u8FDB\u884C\u4E3B\u52A8\u642C\u8FC1\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u670D\u52A1\u5668\u5B9A\u65F6\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">void databaseCron() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (server.activerehashing) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (j = 0; j &lt; dbs_per_call; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            int work_done = incrementallyRehash(rehash_db);</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (work_done) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /* If the function did some work, stop here, we&#39;ll do</span></span>
<span class="line"><span style="color:#A6ACCD;">                 * more at the next cron loop. */</span></span>
<span class="line"><span style="color:#A6ACCD;">                break;</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                /* If this db didn&#39;t need rehash, we&#39;ll try the next one. */</span></span>
<span class="line"><span style="color:#A6ACCD;">                rehash_db++;</span></span>
<span class="line"><span style="color:#A6ACCD;">                rehash_db %= server.dbnum;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u627E\u8FC7\u7A0B" tabindex="-1">\u67E5\u627E\u8FC7\u7A0B <a class="header-anchor" href="#\u67E5\u627E\u8FC7\u7A0B" aria-hidden="true">#</a></h2><p>\u63D2\u5165\u548C\u5220\u9664\u64CD\u4F5C\u90FD\u4F9D\u8D56\u4E8E\u67E5\u627E\uFF0C\u5148\u5FC5\u987B\u628A\u5143\u7D20\u627E\u5230\uFF0C\u624D\u53EF\u4EE5\u8FDB\u884C\u6570\u636E\u7ED3\u6784\u7684\u4FEE\u6539\u64CD\u4F5C\u3002hashtable \u7684\u5143\u7D20\u662F\u5728\u7B2C\u4E8C\u7EF4\u7684\u94FE\u8868\u4E0A\uFF0C\u6240\u4EE5\u9996\u5148\u6211\u4EEC\u5F97\u60F3\u529E\u6CD5\u5B9A\u4F4D\u51FA\u5143\u7D20\u5728\u54EA\u4E2A\u94FE\u8868\u4E0A\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func get(key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let index = hash_func(key) % size;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let entry = table[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">    while(entry != NULL) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if entry.key == target {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return entry.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        entry = entry.next;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\u4EE3\u7801\u4E2D\u7684<code>hash_func</code>\uFF0C\u5B83\u4F1A\u5C06 key \u6620\u5C04\u4E3A\u4E00\u4E2A\u6574\u6570\uFF0C\u4E0D\u540C\u7684 key \u4F1A\u88AB\u6620\u5C04\u6210\u5206\u5E03\u6BD4\u8F83\u5747\u5300\u6563\u4E71\u7684\u6574\u6570\u3002\u53EA\u6709 hash \u503C\u5747\u5300\u4E86\uFF0C\u6574\u4E2A hashtable \u624D\u662F\u5E73\u8861\u7684\uFF0C\u6240\u6709\u7684\u4E8C\u7EF4\u94FE\u8868\u7684\u957F\u5EA6\u5C31\u4E0D\u4F1A\u5DEE\u8DDD\u5F88\u8FDC\uFF0C\u67E5\u627E\u7B97\u6CD5\u7684\u6027\u80FD\u4E5F\u5C31\u6BD4\u8F83\u7A33\u5B9A\u3002</p><h2 id="hash-\u51FD\u6570" tabindex="-1">hash \u51FD\u6570 <a class="header-anchor" href="#hash-\u51FD\u6570" aria-hidden="true">#</a></h2><p>hashtable \u7684\u6027\u80FD\u597D\u4E0D\u597D\u5B8C\u5168\u53D6\u51B3\u4E8E hash \u51FD\u6570\u7684\u8D28\u91CF\u3002hash \u51FD\u6570\u5982\u679C\u53EF\u4EE5\u5C06 key \u6253\u6563\u7684\u6BD4\u8F83\u5747\u5300\uFF0C\u90A3\u4E48\u8FD9\u4E2A hash \u51FD\u6570\u5C31\u662F\u4E2A\u597D\u51FD\u6570\u3002Redis \u7684\u5B57\u5178\u9ED8\u8BA4\u7684 hash \u51FD\u6570\u662F siphash\u3002siphash \u7B97\u6CD5\u5373\u4F7F\u5728\u8F93\u5165 key \u5F88\u5C0F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u4EA7\u751F\u968F\u673A\u6027\u7279\u522B\u597D\u7684\u8F93\u51FA\uFF0C\u800C\u4E14\u5B83\u7684\u6027\u80FD\u4E5F\u975E\u5E38\u7A81\u51FA\u3002\u5BF9\u4E8E Redis \u8FD9\u6837\u7684\u5355\u7EBF\u7A0B\u6765\u8BF4\uFF0C\u5B57\u5178\u6570\u636E\u7ED3\u6784\u5982\u6B64\u666E\u904D\uFF0C\u5B57\u5178\u64CD\u4F5C\u4E5F\u4F1A\u975E\u5E38\u9891\u7E41\uFF0Chash \u51FD\u6570\u81EA\u7136\u4E5F\u662F\u8D8A\u5FEB\u8D8A\u597D\u3002</p><h2 id="hash-\u653B\u51FB" tabindex="-1">hash \u653B\u51FB <a class="header-anchor" href="#hash-\u653B\u51FB" aria-hidden="true">#</a></h2><p>\u5982\u679C hash \u51FD\u6570\u5B58\u5728\u504F\u5411\u6027\uFF0C\u9ED1\u5BA2\u5C31\u53EF\u80FD\u5229\u7528\u8FD9\u79CD\u504F\u5411\u6027\u5BF9\u670D\u52A1\u5668\u8FDB\u884C\u653B\u51FB\u3002\u5B58\u5728\u504F\u5411\u6027\u7684 hash \u51FD\u6570\u5728\u7279\u5B9A\u6A21\u5F0F\u4E0B\u7684\u8F93\u5165\u4F1A\u5BFC\u81F4 hash \u7B2C\u4E8C\u7EF4\u94FE\u8868\u957F\u5EA6\u6781\u4E3A\u4E0D\u5747\u5300\uFF0C\u751A\u81F3\u6240\u6709\u7684\u5143\u7D20\u90FD\u96C6\u4E2D\u5230\u4E2A\u522B\u94FE\u8868\u4E2D\uFF0C\u76F4\u63A5\u5BFC\u81F4\u67E5\u627E\u6548\u7387\u6025\u5267\u4E0B\u964D\uFF0C\u4ECE<code>O(1)</code>\u9000\u5316\u5230<code>O(n)</code>\u3002\u6709\u9650\u7684\u670D\u52A1\u5668\u8BA1\u7B97\u80FD\u529B\u5C06\u4F1A\u88AB hashtable \u7684\u67E5\u627E\u6548\u7387\u5F7B\u5E95\u62D6\u57AE\u3002\u8FD9\u5C31\u662F\u6240\u8C13 hash \u653B\u51FB\u3002</p><h2 id="\u6269\u5BB9\u6761\u4EF6" tabindex="-1">\u6269\u5BB9\u6761\u4EF6 <a class="header-anchor" href="#\u6269\u5BB9\u6761\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/* Expand the hash table if needed */</span></span>
<span class="line"><span style="color:#A6ACCD;">static int _dictExpandIfNeeded(dict *d)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* Incremental rehashing already in progress. Return. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (dictIsRehashing(d)) return DICT_OK;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* If the hash table is empty expand it to the initial size. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (d-&gt;ht[0].size == 0) return dictExpand(d, DICT_HT_INITIAL_SIZE);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* If we reached the 1:1 ratio, and we are allowed to resize the hash</span></span>
<span class="line"><span style="color:#A6ACCD;">     * table (global setting) or we should avoid it but the ratio between</span></span>
<span class="line"><span style="color:#A6ACCD;">     * elements/buckets is over the &quot;safe&quot; threshold, we resize doubling</span></span>
<span class="line"><span style="color:#A6ACCD;">     * the number of buckets. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (d-&gt;ht[0].used &gt;= d-&gt;ht[0].size &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        (dict_can_resize ||</span></span>
<span class="line"><span style="color:#A6ACCD;">         d-&gt;ht[0].used/d-&gt;ht[0].size &gt; dict_force_resize_ratio))</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return dictExpand(d, d-&gt;ht[0].used*2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return DICT_OK;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5F53 hash \u8868\u4E2D\u5143\u7D20\u7684\u4E2A\u6570\u7B49\u4E8E\u7B2C\u4E00\u7EF4\u6570\u7EC4\u7684\u957F\u5EA6\u65F6\uFF0C\u5C31\u4F1A\u5F00\u59CB\u6269\u5BB9\uFF0C\u6269\u5BB9\u7684\u65B0\u6570\u7EC4\u662F\u539F\u6570\u7EC4\u5927\u5C0F\u7684 2 \u500D\u3002\u4E0D\u8FC7\u5982\u679C Redis \u6B63\u5728\u505A bgsave\uFF0C\u4E3A\u4E86\u51CF\u5C11\u5185\u5B58\u9875\u7684\u8FC7\u591A\u5206\u79BB (Copy On Write)\uFF0CRedis \u5C3D\u91CF\u4E0D\u53BB\u6269\u5BB9 (<code>dict_can_resize</code>)\uFF0C\u4F46\u662F\u5982\u679C hash \u8868\u5DF2\u7ECF\u975E\u5E38\u6EE1\u4E86\uFF0C\u5143\u7D20\u7684\u4E2A\u6570\u5DF2\u7ECF\u8FBE\u5230\u4E86\u7B2C\u4E00\u7EF4\u6570\u7EC4\u957F\u5EA6\u7684 5 \u500D (<code>dict_force_resize_ratio</code>)\uFF0C\u8BF4\u660E hash \u8868\u5DF2\u7ECF\u8FC7\u4E8E\u62E5\u6324\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u5F3A\u5236\u6269\u5BB9\u3002</p><h2 id="\u7F29\u5BB9\u6761\u4EF6" tabindex="-1">\u7F29\u5BB9\u6761\u4EF6 <a class="header-anchor" href="#\u7F29\u5BB9\u6761\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">int htNeedsResize(dict *dict) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    long long size, used;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    size = dictSlots(dict);</span></span>
<span class="line"><span style="color:#A6ACCD;">    used = dictSize(dict);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (size &gt; DICT_HT_INITIAL_SIZE &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">            (used*100/size &lt; HASHTABLE_MIN_FILL));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53 hash \u8868\u56E0\u4E3A\u5143\u7D20\u7684\u9010\u6E10\u5220\u9664\u53D8\u5F97\u8D8A\u6765\u8D8A\u7A00\u758F\u65F6\uFF0CRedis \u4F1A\u5BF9 hash \u8868\u8FDB\u884C\u7F29\u5BB9\u6765\u51CF\u5C11 hash \u8868\u7684\u7B2C\u4E00\u7EF4\u6570\u7EC4\u7A7A\u95F4\u5360\u7528\u3002\u7F29\u5BB9\u7684\u6761\u4EF6\u662F\u5143\u7D20\u4E2A\u6570\u4F4E\u4E8E\u6570\u7EC4\u957F\u5EA6\u7684 10%\u3002\u7F29\u5BB9\u4E0D\u4F1A\u8003\u8651 Redis \u662F\u5426\u6B63\u5728\u505A bgsave\u3002</p><h2 id="set-\u7684\u7ED3\u6784" tabindex="-1">set \u7684\u7ED3\u6784 <a class="header-anchor" href="#set-\u7684\u7ED3\u6784" aria-hidden="true">#</a></h2><p>Redis \u91CC\u9762 set \u7684\u7ED3\u6784\u5E95\u5C42\u5B9E\u73B0\u4E5F\u662F\u5B57\u5178\uFF0C\u53EA\u4E0D\u8FC7\u6240\u6709\u7684 value \u90FD\u662F NULL\uFF0C\u5176\u5B83\u7684\u7279\u6027\u548C\u5B57\u5178\u4E00\u6A21\u4E00\u6837\u3002</p><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><ol><li>\u4E3A\u4EC0\u4E48\u7F29\u5BB9\u4E0D\u7528\u8003\u8651 bgsave\uFF1F</li><li>Java \u8BED\u8A00\u548C Python \u8BED\u8A00\u5185\u7F6E\u7684 set \u5BB9\u5668\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</li></ol>`,35),t=[p];function c(o,i,r,h,d,A){return n(),a("div",null,t)}const D=s(l,[["render",c]]);export{y as __pageData,D as default};
