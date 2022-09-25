import{_ as s,c as n,o as a,d as l}from"./app.e0e4ea3a.js";const C=JSON.parse('{"title":"\u62D3\u5C55 2-Go \u89C4\u8303\u6307\u5357","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E","link":"#\u8BF4\u660E","children":[]},{"level":2,"title":"Go \u89C4\u8303\u6307\u5357","slug":"go-\u89C4\u8303\u6307\u5357-1","link":"#go-\u89C4\u8303\u6307\u5357-1","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u62D3\u5C55 2-Go \u89C4\u8303\u6307\u5357.md"}'),p={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u62D3\u5C55 2-Go \u89C4\u8303\u6307\u5357.md"},o=l(`<h1 id="\u62D3\u5C55-2-go-\u89C4\u8303\u6307\u5357" tabindex="-1">\u62D3\u5C55 2-Go \u89C4\u8303\u6307\u5357 <a class="header-anchor" href="#\u62D3\u5C55-2-go-\u89C4\u8303\u6307\u5357" aria-hidden="true">#</a></h1><hr><h1 id="go-\u89C4\u8303\u6307\u5357" tabindex="-1">Go \u89C4\u8303\u6307\u5357 <a class="header-anchor" href="#go-\u89C4\u8303\u6307\u5357" aria-hidden="true">#</a></h1><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u662F\u62D3\u5C55\u5185\u5BB9\uFF0C\u7B14\u8005\u4F1A\u4E0D\u5B9A\u671F\u66F4\u65B0 Go \u89C4\u8303\u6307\u5357\uFF0C\u4F7F\u8BE5\u6307\u5357\u7684\u5185\u5BB9\u5C3D\u53EF\u80FD\u5168\uFF0C\u5E76\u4FDD\u8BC1\u89C4\u8303\u7684\u5B9E\u7528\u6027\u3002</p><blockquote><p>\u8BF4\u660E\uFF1A\u672C\u6307\u5357\u53C2\u8003\u4E86\u7F51\u7EDC\u4E0A\u5404\u79CD REST \u6700\u4F73\u5B9E\u8DF5\uFF0C\u7ED3\u5408\u7B14\u8005\u7684\u5B9E\u9645\u7ECF\u9A8C\u6C47\u603B\u800C\u6765\u3002</p></blockquote><h2 id="go-\u89C4\u8303\u6307\u5357-1" tabindex="-1">Go \u89C4\u8303\u6307\u5357 <a class="header-anchor" href="#go-\u89C4\u8303\u6307\u5357-1" aria-hidden="true">#</a></h2><ol><li>\u5199\u5B8C\u4EE3\u7801\u90FD\u5FC5\u987B\u683C\u5F0F\u5316\uFF0C\u4FDD\u8BC1\u4EE3\u7801\u4F18\u96C5\uFF1Agofmt goimports</li><li>\u7F16\u8BD1\u524D\u5148\u6267\u884C\u4EE3\u7801\u9759\u6001\u5206\u6790\uFF1Ago vet pathxxx/</li><li>package \u540D\u5B57\uFF1A\u5305\u540D\u4E0E\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4\uFF0C\u5C3D\u91CF\u6709\u610F\u4E49\uFF0C\u7B80\u77ED\uFF0C\u4E0D\u548C\u6807\u51C6\u5E93\u51B2\u7A81\uFF0C \u5168\u5C0F\u5199\uFF0C\u4E0D\u8981\u6709\u4E0B\u5212\u7EBF</li><li>\u7ADE\u6001\u68C0\u6D4B\uFF1Ago build \u2013race (\u6D4B\u8BD5\u73AF\u5883\u7F16\u8BD1\u65F6\u52A0\u4E0A -race \u9009\u9879\uFF0C\u751F\u4EA7\u73AF\u5883\u5FC5\u987B\u53BB\u6389\uFF0C\u56E0\u4E3A race \u9650\u5236\u6700\u591A goroutine \u6570\u91CF\u4E3A 8192 \u4E2A)</li><li>\u6BCF\u884C\u957F\u5EA6\u7EA6\u5B9A\uFF1A\u4E00\u884C\u4E0D\u8981\u592A\u957F\uFF0C\u8D85\u8FC7\u8BF7\u4F7F\u7528\u6362\u884C\u5C55\u793A\uFF0C\u5C3D\u91CF\u4FDD\u6301\u683C\u5F0F\u4F18\u96C5\uFF1B\u5355\u4E2A\u6587\u4EF6\u4E5F\u4E0D\u8981\u592A\u5927\uFF0C\u6700\u597D\u4E0D\u8981\u8D85\u8FC7 500 \u884C</li><li>\u591A\u8FD4\u56DE\u503C\u6700\u591A\u8FD4\u56DE\u4E09\u4E2A\uFF0C\u8D85\u8FC7\u4E09\u4E2A\u8BF7\u4F7F\u7528 struct</li><li>\u53D8\u91CF\u540D\u91C7\u7528\u9A7C\u5CF0\u6CD5\uFF0C\u4E0D\u8981\u6709\u4E0B\u5212\u7EBF\uFF0C\u4E0D\u8981\u5168\u90E8\u5927\u5199</li><li>\u5728\u903B\u8F91\u5904\u7406\u4E2D\u7981\u7528 panic\uFF0C\u9664\u975E\u4F60\u77E5\u9053\u4F60\u5728\u505A\u4EC0\u4E48</li><li>\u9519\u8BEF\u5904\u7406\u7684\u539F\u5219\u5C31\u662F\u4E0D\u80FD\u4E22\u5F03\u4EFB\u4F55\u6709\u8FD4\u56DE err \u7684\u8C03\u7528\uFF0C\u4E0D\u8981\u91C7\u7528_\u4E22\u5F03\uFF0C\u5FC5\u987B\u5168\u90E8\u5904\u7406\u3002\u63A5\u6536\u5230\u9519\u8BEF\uFF0C\u8981\u4E48\u8FD4\u56DE err\uFF0C\u8981\u4E48\u5B9E\u5728\u4E0D\u884C\u5C31 panic\uFF0C\u6216\u8005\u4F7F\u7528 log \u8BB0\u5F55\u4E0B\u6765\u3002</li></ol><p>\u4E0D\u8981\u8FD9\u6837\u5199:</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// error handling</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// normal code</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u800C\u5E94\u8BE5\u662F:</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// error handling</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// or continue, etc.</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// normal code</span></span>
<span class="line"></span></code></pre></div><ol start="10"><li>\u5E38\u7528\u7684\u9996\u5B57\u6BCD\u7F29\u5199\u540D\u8BCD\uFF0C\u4F7F\u7528\u5168\u5C0F\u5199\u6216\u8005\u5168\u5927\u5199\uFF0C\u5982 UIN URL HTTP ID IP OK</li><li>Receiver:\uFF1A\u7528\u4E00\u4E24\u4E2A\u5B57\u7B26\uFF0C\u80FD\u591F\u8868\u793A\u51FA\u7C7B\u578B\uFF0C\u4E0D\u8981\u4F7F\u7528 me self this</li><li>\u53C2\u6570\u4F20\u9012:</li></ol><ul><li>\u5BF9\u4E8E\u5C11\u91CF\u6570\u636E\uFF0C\u4E0D\u8981\u4F20\u9012\u6307\u9488</li><li>\u5BF9\u4E8E\u5927\u91CF\u6570\u636E\u7684 struct \u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u6307\u9488</li><li>\u4F20\u5165\u53C2\u6570\u662F map\uFF0Cslice\uFF0Cchan\uFF0Cinterface\uFF0Cstring \u4E0D\u8981\u4F20\u9012\u6307\u9488</li></ul><ol start="13"><li><pre><code>\u6BCF\u4E2A\u57FA\u7840\u5E93\u90FD\u5FC5\u987B\u6709\u5B9E\u9645\u53EF\u8FD0\u884C\u7684\u4F8B\u5B50, \u57FA\u7840\u5E93\u7684\u63A5\u53E3\u90FD\u8981\u6709\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B
</code></pre></li><li><pre><code>\u4E0D\u8981\u5728 for \u5FAA\u73AF\u91CC\u9762\u4F7F\u7528 defer\uFF0Cdefer\u53EA\u6709\u5728\u51FD\u6570\u9000\u51FA\u65F6\u624D\u4F1A\u6267\u884C
</code></pre></li><li><pre><code>panic \u6355\u83B7\u53EA\u80FD\u5230goroutine\u6700\u9876\u5C42\uFF0C\u6BCF\u4E2A\u81EA\u5DF1\u542F\u52A8\u7684 goroutine\uFF0C\u5FC5\u987B\u5728\u5165\u53E3\u5904\u5C31\u6355\u83B7panic\uFF0C\u5E76\u6253\u5370\u51FA\u8BE6\u7EC6\u7684\u5806\u6808\u4FE1\u606F
</code></pre></li><li><pre><code>Go \u7684\u5185\u7F6E\u7C7B\u578Bslice\u3001map\u3001chan\u90FD\u662F\u5F15\u7528\uFF0C\u521D\u6B21\u4F7F\u7528\u524D\uFF0C\u90FD\u5FC5\u987B\u5148\u7528 make \u5206\u914D\u597D\u5BF9\u8C61\uFF0C\u4E0D\u7136\u4F1A\u6709\u7A7A\u6307\u9488\u5F02\u5E38
</code></pre></li><li><pre><code>\u4F7F\u7528 map \u65F6\u9700\u8981\u6CE8\u610F\uFF1Amap \u521D\u6B21\u4F7F\u7528\uFF0C\u5FC5\u987B\u7528 make \u521D\u59CB\u5316\uFF1Bmap \u662F\u5F15\u7528\uFF0C\u4E0D\u7528\u62C5\u5FC3\u8D4B\u503C\u5185\u5B58\u62F7\u8D1D\uFF1B\u5E76\u53D1\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981\u52A0\u9501\uFF1Brange \u904D\u5386\u65F6\u987A\u5E8F\u4E0D\u786E\u5B9A\uFF0C\u4E0D\u53EF\u4F9D\u8D56\uFF1B\u4E0D\u80FD\u4F7F\u7528 slice\u3001map \u548C func \u4F5C\u4E3A key
</code></pre></li><li><pre><code>import \u5728\u591A\u884C\u7684\u60C5\u51B5\u4E0B\uFF0Cgoimports \u4F1A\u81EA\u52A8\u5E2E\u4F60\u683C\u5F0F\u5316\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD9\u91CC\u8FD8\u662F\u89C4\u8303\u4E00\u4E0B import \u7684\u4E00\u4E9B\u89C4\u8303\uFF0C\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\u5F15\u5165\u4E86\u4E00\u4E2A package\uFF0C\u8FD8\u662F\u5EFA\u8BAE\u91C7\u7528\u5982\u4E0B\u683C\u5F0F\uFF1A
</code></pre></li></ol><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u7684\u5305\u5F15\u5165\u4E86\u4E09\u79CD\u7C7B\u578B\u7684\u5305\uFF0C\u6807\u51C6\u5E93\u5305\uFF0C\u7A0B\u5E8F\u5185\u90E8\u5305\uFF0C\u7B2C\u4E09\u65B9\u5305\uFF0C\u5EFA\u8BAE\u91C7\u7528\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u7EC4\u7EC7\u4F60\u7684\u5305\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">encoding/json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strings</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">myproject/models</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">myproject/controller</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">myproject/utils</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">github.com/astaxie/beego</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">github.com/go-sql-driver/mysql</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"></span></code></pre></div><p>\u6709\u987A\u5E8F\u7684\u5F15\u5165\u5305\uFF0C\u4E0D\u540C\u7684\u7C7B\u578B\u91C7\u7528\u7A7A\u683C\u5206\u79BB\uFF0C\u7B2C\u4E00\u79CD\u5B9E\u6807\u51C6\u5E93\uFF0C\u7B2C\u4E8C\u662F\u9879\u76EE\u5305\uFF0C\u7B2C\u4E09\u662F\u7B2C\u4E09\u65B9\u5305\u3002</p><ol start="19"><li>\u5982\u679C\u4F60\u7684\u51FD\u6570\u5F88\u77ED\u5C0F\uFF0C\u5C11\u4E8E 10 \u884C\u4EE3\u7801\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4E0D\u7136\u8BF7\u76F4\u63A5\u4F7F\u7528\u7C7B\u578B\uFF0C\u56E0\u4E3A\u5982\u679C\u4F7F\u7528\u547D\u540D\u53D8\u91CF\u5F88\u5BB9\u6613\u5F15\u8D77\u9690\u85CF\u7684 bug\u3002</li></ol><p>\u5F53\u7136\u5982\u679C\u662F\u6709\u591A\u4E2A\u76F8\u540C\u7C7B\u578B\u7684\u53C2\u6570\u8FD4\u56DE\uFF0C\u90A3\u4E48\u547D\u540D\u53C2\u6570\u53EF\u80FD\u66F4\u6E05\u6670\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Foo</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Location</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><ol start="20"><li>\u957F\u53E5\u5B50\u6253\u5370\u6216\u8005\u8C03\u7528\uFF0C\u4F7F\u7528\u53C2\u6570\u8FDB\u884C\u683C\u5F0F\u5316\u5206\u884C</li></ol><p>\u6211\u4EEC\u5728\u8C03\u7528 <code>fmt.Sprint</code> \u6216\u8005 <code>log.Sprint</code> \u4E4B\u7C7B\u7684\u51FD\u6570\u65F6\uFF0C\u6709\u65F6\u5019\u4F1A\u9047\u5230\u5F88\u957F\u7684\u53E5\u5B50\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u53C2\u6570\u8C03\u7528\u5904\u8FDB\u884C\u591A\u884C\u5206\u5272\uFF1A</p><p>\u4E0B\u9762\u662F\u9519\u8BEF\u7684\u65B9\u5F0F\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u201CA long format </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s\u201D</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> myStringParameter</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    expected</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Size</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defrobnicate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u201CAnotherlongstringparameter\u201D</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        expected</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Growth</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Nanoseconds</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">1e6</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div><p>\u5E94\u8BE5\u662F\u5982\u4E0B\u7684\u65B9\u5F0F\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u201CA long format </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">s\u201D</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    myStringParameter</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    expected</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Size</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">defrobnicate</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u201CAnotherlongstringparameter\u201D</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        expected</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Growth</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Nanoseconds</span><span style="color:#89DDFF;">()/</span><span style="color:#F78C6C;">1e6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">\uFF09   </span></span>
<span class="line"></span></code></pre></div><ol start="21"><li>\u6CE8\u610F\u95ED\u5305\u7684\u8C03\u7528</li></ol><p>\u5728\u5FAA\u73AF\u4E2D\u8C03\u7528\u51FD\u6570\u6216\u8005 goroutine \u65B9\u6CD5\uFF0C\u4E00\u5B9A\u8981\u91C7\u7528\u663E\u793A\u7684\u53D8\u91CF\u8C03\u7528\uFF0C\u4E0D\u8981\u5728\u95ED\u5305\u51FD\u6570\u91CC\u8C03\u7528\u5FAA\u73AF\u7684\u53C2\u6570</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">fori</span><span style="color:#89DDFF;">:=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">limit</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(){</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DoSomething</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u9519\u8BEF\u7684\u505A\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">i </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DoSomething</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;">//\u6B63\u786E\u7684\u505A\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="22"><li>recieved \u662F\u503C\u7C7B\u578B\u8FD8\u662F\u6307\u9488\u7C7B\u578B</li></ol><p>\u5230\u5E95\u662F\u91C7\u7528\u503C\u7C7B\u578B\u8FD8\u662F\u6307\u9488\u7C7B\u578B\u4E3B\u8981\u53C2\u8003\u5982\u4E0B\u539F\u5219\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w Win</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tally</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">playerPlayer</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//w\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u53D8 </span></span>
<span class="line"><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">w </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Win</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tally</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">playerPlayer</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//w\u4F1A\u6539\u53D8\u6570\u636E</span></span>
<span class="line"></span></code></pre></div><ol start="23"><li>struct \u58F0\u660E\u548C\u521D\u59CB\u5316\u683C\u5F0F\u91C7\u7528\u591A\u884C\uFF1A</li></ol><p>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Username  </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    Email     </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u521D\u59CB\u5316\u5982\u4E0B\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#A6ACCD;">u </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> User</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">astaxie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    Email</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">astaxie@gmail.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="24"><li>\u53D8\u91CF\u547D\u540D</li></ol><ul><li>\u548C\u7ED3\u6784\u4F53\u7C7B\u4F3C\uFF0C\u53D8\u91CF\u540D\u79F0\u4E00\u822C\u9075\u5FAA\u9A7C\u5CF0\u6CD5\uFF0C\u9996\u5B57\u6BCD\u6839\u636E\u8BBF\u95EE\u63A7\u5236\u539F\u5219\u5927\u5199\u6216\u8005\u5C0F\u5199\uFF0C\u4F46\u9047\u5230\u7279\u6709\u540D\u8BCD\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A</li><li>\u5982\u679C\u53D8\u91CF\u4E3A\u79C1\u6709\uFF0C\u4E14\u7279\u6709\u540D\u8BCD\u4E3A\u9996\u4E2A\u5355\u8BCD\uFF0C\u5219\u4F7F\u7528\u5C0F\u5199\uFF0C\u5982 apiClient</li><li>\u5176\u5B83\u60C5\u51B5\u90FD\u5E94\u5F53\u4F7F\u7528\u8BE5\u540D\u8BCD\u539F\u6709\u7684\u5199\u6CD5\uFF0C\u5982 APIClient\u3001repoID\u3001UserID</li><li>\u9519\u8BEF\u793A\u4F8B\uFF1AUrlArray\uFF0C\u5E94\u8BE5\u5199\u6210 urlArray \u6216\u8005 URLArray</li><li>\u82E5\u53D8\u91CF\u7C7B\u578B\u4E3A bool \u7C7B\u578B\uFF0C\u5219\u540D\u79F0\u5E94\u4EE5 Has\u3001Is\u3001Can \u6216 Allow \u5F00\u5934</li></ul><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> isExist </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> hasConflict </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> canManage </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> allowGitHook </span><span style="color:#C792EA;">bool</span></span>
<span class="line"></span></code></pre></div><ol start="25"><li>\u5E38\u91CF\u547D\u540D</li></ol><p>\u5E38\u91CF\u5747\u9700\u4F7F\u7528\u5168\u90E8\u5927\u5199\u5B57\u6BCD\u7EC4\u6210\uFF0C\u5E76\u4F7F\u7528\u4E0B\u5212\u7EBF\u5206\u8BCD</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">const</span><span style="color:#A6ACCD;"> APP_VER </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,45),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
