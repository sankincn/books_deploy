import{_ as s,c as a,o as n,d as l}from"./app.e5528619.js";const i=JSON.parse('{"title":"\u57FA\u7840 5-\u521D\u59CB\u5316 MySQL \u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","slug":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","link":"#\u672C\u8282\u6838\u5FC3\u5185\u5BB9","children":[]},{"level":2,"title":"\u521D\u59CB\u5316\u6570\u636E\u5E93","slug":"\u521D\u59CB\u5316\u6570\u636E\u5E93","link":"#\u521D\u59CB\u5316\u6570\u636E\u5E93","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5E76\u8FD0\u884C","slug":"\u7F16\u8BD1\u5E76\u8FD0\u884C","link":"#\u7F16\u8BD1\u5E76\u8FD0\u884C","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u57FA\u7840 5-\u521D\u59CB\u5316 MySQL \u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5.md"}'),p={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u57FA\u7840 5-\u521D\u59CB\u5316 MySQL \u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5.md"},o=l(`<h1 id="\u57FA\u7840-5-\u521D\u59CB\u5316-mysql-\u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5" tabindex="-1">\u57FA\u7840 5-\u521D\u59CB\u5316 MySQL \u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5 <a class="header-anchor" href="#\u57FA\u7840-5-\u521D\u59CB\u5316-mysql-\u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5" aria-hidden="true">#</a></h1><hr><h1 id="\u521D\u59CB\u5316-mysql-\u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5" tabindex="-1">\u521D\u59CB\u5316 MySQL \u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5 <a class="header-anchor" href="#\u521D\u59CB\u5316-mysql-\u6570\u636E\u5E93\u5E76\u5EFA\u7ACB\u8FDE\u63A5" aria-hidden="true">#</a></h1><h2 id="\u672C\u8282\u6838\u5FC3\u5185\u5BB9" tabindex="-1">\u672C\u8282\u6838\u5FC3\u5185\u5BB9 <a class="header-anchor" href="#\u672C\u8282\u6838\u5FC3\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li>Go ORM \u6570\u91CF\u4F17\u591A\uFF0C\u672C\u5C0F\u518C\u4ECB\u7ECD\u4E00\u4E2A\u7B14\u8005\u8BA4\u4E3A\u6BD4\u8F83\u597D\u7684 ORM \u5305\uFF0C\u5E76\u7ED9\u51FA\u539F\u56E0</li><li>\u4ECB\u7ECD\u5982\u4F55\u521D\u59CB\u5316\u6570\u636E\u5E93</li><li>\u4ECB\u7ECD\u5982\u4F55\u8FDE\u63A5\u6570\u636E\u5E93</li></ul><blockquote><p>\u672C\u5C0F\u8282\u6E90\u7801\u4E0B\u8F7D\u8DEF\u5F84\uFF1A<a href="https://github.com/lexkong/apiserver_demos/tree/master/demo04" target="_blank" rel="noreferrer">demo04</a></p><p>\u53EF\u5148\u4E0B\u8F7D\u6E90\u7801\u5230\u672C\u5730\uFF0C\u7ED3\u5408\u6E90\u7801\u7406\u89E3\u540E\u7EED\u5185\u5BB9\uFF0C\u8FB9\u5B66\u8FB9\u7EC3\u3002</p><p>\u672C\u5C0F\u8282\u7684\u4EE3\u7801\u662F\u57FA\u4E8E <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo03" target="_blank" rel="noreferrer">demo03</a> \u6765\u5F00\u53D1\u7684\u3002</p><p>apiserver \u7528\u7684 ORM \u662F GitHub \u4E0A star \u6570\u6700\u591A\u7684 <a href="https://github.com/jinzhu/gorm" target="_blank" rel="noreferrer">gorm</a>\uFF0C\u76F8\u8F83\u4E8E\u5176\u4ED6 ORM\uFF0C\u5B83\u7528\u8D77\u6765\u66F4\u65B9\u4FBF\uFF0C\u66F4\u7A33\u5B9A\uFF0C\u793E\u533A\u4E5F\u66F4\u6D3B\u8DC3\u3002</p></blockquote><h2 id="\u521D\u59CB\u5316\u6570\u636E\u5E93" tabindex="-1">\u521D\u59CB\u5316\u6570\u636E\u5E93 <a class="header-anchor" href="#\u521D\u59CB\u5316\u6570\u636E\u5E93" aria-hidden="true">#</a></h2><p><strong>\u5728 <code>model/init.go</code> \u4E2D\u6DFB\u52A0\u6570\u636E\u521D\u59CB\u5316\u4EE3\u7801</strong></p><p>\u56E0\u4E3A\u4E00\u4E2A API \u670D\u52A1\u5668\u53EF\u80FD\u9700\u8981\u540C\u65F6\u8BBF\u95EE\u591A\u4E2A\u6570\u636E\u5E93\uFF0C\u4E3A\u4E86\u5BF9\u591A\u4E2A\u6570\u636E\u5E93\u8FDB\u884C\u521D\u59CB\u5316\u548C\u8FDE\u63A5\u7BA1\u7406\uFF0C\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53EB <code>Database</code> \u7684 struct\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Database</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Self   </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span></span>
<span class="line"><span style="color:#A6ACCD;">    Docker </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p><code>Database</code> \u7ED3\u6784\u4F53\u6709\u4E2A <code>Init()</code> \u65B9\u6CD5\u7528\u6765\u521D\u59CB\u5316\u8FDE\u63A5\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Database</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    DB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">Database </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Self</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">   </span><span style="color:#82AAFF;">GetSelfDB</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        Docker</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetDockerDB</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p><code>Init()</code> \u51FD\u6570\u4F1A\u8C03\u7528 <code>GetSelfDB()</code> \u548C <code>GetDockerDB()</code> \u65B9\u6CD5\u6765\u540C\u65F6\u521B\u5EFA\u4E24\u4E2A <code>Database</code> \u7684\u6570\u636E\u5E93\u5BF9\u8C61\u3002\u8FD9\u4E24\u4E2A Get \u65B9\u6CD5\u6700\u7EC8\u90FD\u4F1A\u8C03\u7528 <code>func openDB(username, password, addr, name string) *gorm.DB</code> \u65B9\u6CD5\u6765\u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u4E0D\u540C\u6570\u636E\u5E93\u5B9E\u4F8B\u4F20\u5165\u4E0D\u540C\u7684 username\u3001password\u3001addr \u548C\u540D\u5B57\u4FE1\u606F\uFF0C\u4ECE\u800C\u5EFA\u7ACB\u4E0D\u540C\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002<code>openDB</code> \u51FD\u6570\u4E3A\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openDB</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> password</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> addr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gorm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    config </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sprintf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%s:%s@tcp(%s)/%s?charset=utf8&amp;parseTime=%t&amp;loc=%s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        username</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">        password</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">        addr</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">//&quot;Asia/Shanghai&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Local</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    db</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> gorm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mysql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Errorf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Database connection failed. Database name: %s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// set for db connection</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setupDB</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> db</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>openDB()</code> \u6700\u7EC8\u8C03\u7528 <code>gorm.Open()</code> \u6765\u5EFA\u7ACB\u4E00\u4E2A\u6570\u636E\u5E93\u8FDE\u63A5\u3002</p><p>\u5B8C\u6574\u7684 model/init.go \u6E90\u7801\u6587\u4EF6\u8BF7\u53C2\u8003 <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo04" target="_blank" rel="noreferrer">demo04/model/init.go</a>\u3002</p><p><strong>\u4E3B\u51FD\u6570\u4E2D\u589E\u52A0\u6570\u636E\u5E93\u521D\u59CB\u5316\u5165\u53E3</strong></p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">apiserver/model</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// init db</span></span>
<span class="line"><span style="color:#A6ACCD;">    model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Init</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">defer</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 <code>model.DB.Init()</code> \u6765\u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u901A\u8FC7 <code>defer model.DB.Close()</code> \u6765\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\u3002</p><h2 id="\u7F16\u8BD1\u5E76\u8FD0\u884C" tabindex="-1">\u7F16\u8BD1\u5E76\u8FD0\u884C <a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u8FD0\u884C" aria-hidden="true">#</a></h2><ol><li><pre><code>\u4E0B\u8F7D apiserver\\_demos \u6E90\u7801\u5305\uFF08\u5982\u524D\u9762\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6B65\u9AA4\uFF09
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/apiserver_demos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u5C06\`apiserver_demos/demo04\`\u590D\u5236\u4E3A\`$GOPATH/src/apiserver\`
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cp -a apiserver_demos/demo04/ $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><pre><code>\u5728 apiserver \u76EE\u5F55\u4E0B\u7F16\u8BD1\u6E90\u7801
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cd $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gofmt -w .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go tool vet .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go build -v .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u7ED3\u4ECB\u7ECD\u4E86\u5982\u4F55\u7528 <code>gorm</code> \u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u4E3A\u4E4B\u540E\u7684\u4E1A\u52A1\u903B\u8F91\u5904\u7406\u4F5C\u51C6\u5907\u3002\u81F3\u4E8E\u5177\u4F53\u600E\u4E48\u4F7F\u7528 <code>gorm</code> \u6765\u8FDB\u884C\u589E\u5220\u6539\u67E5\u7B49\u64CD\u4F5C\uFF0C\u8BF7\u53C2\u8003 <a href="http://gorm.io/zh_CN/docs/index.html" target="_blank" rel="noreferrer">GORM \u6307\u5357</a>\u3002</p><blockquote><p>\u672C\u5C0F\u8282\u53EA\u662F\u4ECB\u7ECD\u4E86\u5982\u4F55\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u81F3\u4E8E\u600E\u4E48\u5BF9\u6570\u636E\u5E93\u505A CURD \u64CD\u4F5C\uFF0C\u8BF7\u53C2\u8003\u7B2C 12 \u8282\uFF1A\u7528\u6237\u4E1A\u52A1\u903B\u8F91\u5904\u7406\u3002</p></blockquote>`,29),e=[o];function c(r,t,D,A,y,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
