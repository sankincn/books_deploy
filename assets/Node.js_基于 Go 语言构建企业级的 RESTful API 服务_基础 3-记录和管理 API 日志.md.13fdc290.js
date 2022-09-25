import{_ as s,c as a,o as n,d as l}from"./app.e0e4ea3a.js";const C=JSON.parse('{"title":"\u57FA\u7840 3-\u8BB0\u5F55\u548C\u7BA1\u7406 API \u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","slug":"\u672C\u8282\u6838\u5FC3\u5185\u5BB9","link":"#\u672C\u8282\u6838\u5FC3\u5185\u5BB9","children":[]},{"level":2,"title":"\u65E5\u5FD7\u5305\u4ECB\u7ECD","slug":"\u65E5\u5FD7\u5305\u4ECB\u7ECD","link":"#\u65E5\u5FD7\u5305\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u521D\u59CB\u5316\u65E5\u5FD7\u5305","slug":"\u521D\u59CB\u5316\u65E5\u5FD7\u5305","link":"#\u521D\u59CB\u5316\u65E5\u5FD7\u5305","children":[]},{"level":2,"title":"\u8C03\u7528\u65E5\u5FD7\u5305","slug":"\u8C03\u7528\u65E5\u5FD7\u5305","link":"#\u8C03\u7528\u65E5\u5FD7\u5305","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5E76\u8FD0\u884C","slug":"\u7F16\u8BD1\u5E76\u8FD0\u884C","link":"#\u7F16\u8BD1\u5E76\u8FD0\u884C","children":[]},{"level":2,"title":"\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6","slug":"\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6","link":"#\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u57FA\u7840 3-\u8BB0\u5F55\u548C\u7BA1\u7406 API \u65E5\u5FD7.md"}'),o={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u57FA\u7840 3-\u8BB0\u5F55\u548C\u7BA1\u7406 API \u65E5\u5FD7.md"},p=l(`<h1 id="\u57FA\u7840-3-\u8BB0\u5F55\u548C\u7BA1\u7406-api-\u65E5\u5FD7" tabindex="-1">\u57FA\u7840 3-\u8BB0\u5F55\u548C\u7BA1\u7406 API \u65E5\u5FD7 <a class="header-anchor" href="#\u57FA\u7840-3-\u8BB0\u5F55\u548C\u7BA1\u7406-api-\u65E5\u5FD7" aria-hidden="true">#</a></h1><hr><h1 id="\u8BB0\u5F55\u548C\u7BA1\u7406-api-\u65E5\u5FD7" tabindex="-1">\u8BB0\u5F55\u548C\u7BA1\u7406 API \u65E5\u5FD7 <a class="header-anchor" href="#\u8BB0\u5F55\u548C\u7BA1\u7406-api-\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="\u672C\u8282\u6838\u5FC3\u5185\u5BB9" tabindex="-1">\u672C\u8282\u6838\u5FC3\u5185\u5BB9 <a class="header-anchor" href="#\u672C\u8282\u6838\u5FC3\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li>Go \u65E5\u5FD7\u5305\u6570\u91CF\u4F17\u591A\uFF0C\u529F\u80FD\u4E0D\u540C\u3001\u6027\u80FD\u4E0D\u540C\uFF0C\u672C\u5C0F\u518C\u4ECB\u7ECD\u4E00\u4E2A\u7B14\u8005\u8BA4\u4E3A\u6BD4\u8F83\u597D\u7684\u65E5\u5FD7\u5E93\uFF0C\u5E76\u7ED9\u51FA\u539F\u56E0</li><li>\u4ECB\u7ECD\u5982\u4F55\u521D\u59CB\u5316\u65E5\u5FD7\u5305</li><li>\u4ECB\u7ECD\u5982\u4F55\u8C03\u7528\u65E5\u5FD7\u5305</li><li>\u4ECB\u7ECD\u5982\u4F55\u8F6C\u5B58\uFF08rotate\uFF09\u65E5\u5FD7\u6587\u4EF6</li></ul><blockquote><p>\u672C\u5C0F\u8282\u6E90\u7801\u4E0B\u8F7D\u8DEF\u5F84\uFF1A<a href="https://github.com/lexkong/apiserver_demos/tree/master/demo03" target="_blank" rel="noreferrer">demo03</a></p><p>\u53EF\u5148\u4E0B\u8F7D\u6E90\u7801\u5230\u672C\u5730\uFF0C\u7ED3\u5408\u6E90\u7801\u7406\u89E3\u540E\u7EED\u5185\u5BB9\uFF0C\u8FB9\u5B66\u8FB9\u7EC3\u3002</p><p>\u672C\u5C0F\u8282\u7684\u4EE3\u7801\u662F\u57FA\u4E8E <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo02" target="_blank" rel="noreferrer">demo02</a> \u6765\u5F00\u53D1\u7684\u3002</p></blockquote><h2 id="\u65E5\u5FD7\u5305\u4ECB\u7ECD" tabindex="-1">\u65E5\u5FD7\u5305\u4ECB\u7ECD <a class="header-anchor" href="#\u65E5\u5FD7\u5305\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>apiserver \u6240\u91C7\u7528\u7684\u65E5\u5FD7\u5305 <a href="https://github.com/lexkong/log" target="_blank" rel="noreferrer">lexkong/log</a> \u662F\u7B14\u8005\u6839\u636E\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u5E76\u8C03\u7814 GitHub \u4E0A\u7684 \u5F00\u6E90log \u5305\u540E\u5C01\u88C5\u7684\u4E00\u4E2A\u65E5\u5FD7\u5305\uFF0C\u4E5F\u662F\u7B14\u8005\u6240\u5728\u9879\u76EE\u4F7F\u7528\u7684\u65E5\u5FD7\u5305\u3002\u5B83\u53C2\u8003\u534E\u4E3A <a href="https://github.com/ServiceComb/paas-lager" target="_blank" rel="noreferrer">paas-lager</a>\uFF0C\u505A\u4E86\u4E00\u4E9B\u4FBF\u6377\u6027\u7684\u6539\u52A8\uFF0C\u529F\u80FD\u5B8C\u5168\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u66F4\u4E3A\u4FBF\u6377\u3002\u76F8\u8F83\u4E8E Go \u7684\u5176\u4ED6\u65E5\u5FD7\u5305\uFF0C\u8BE5\u65E5\u5FD7\u5305\u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u652F\u6301\u65E5\u5FD7\u8F93\u51FA\u6D41\u914D\u7F6E\uFF0C\u53EF\u4EE5\u8F93\u51FA\u5230 stdout \u6216 file\uFF0C\u4E5F\u53EF\u4EE5\u540C\u65F6\u8F93\u51FA\u5230 stdout \u548C file</li><li>\u652F\u6301\u8F93\u51FA\u4E3A JSON \u6216 plaintext \u683C\u5F0F</li><li>\u652F\u6301\u5F69\u8272\u8F93\u51FA</li><li>\u652F\u6301 log rotate \u529F\u80FD</li><li>\u9AD8\u6027\u80FD</li></ul><h2 id="\u521D\u59CB\u5316\u65E5\u5FD7\u5305" tabindex="-1">\u521D\u59CB\u5316\u65E5\u5FD7\u5305 <a class="header-anchor" href="#\u521D\u59CB\u5316\u65E5\u5FD7\u5305" aria-hidden="true">#</a></h2><p><strong>\u5728 <code>conf/config.yaml</code> \u4E2D\u6DFB\u52A0 log \u914D\u7F6E</strong></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/31/163b436f7649e2e7~tplv-t2oaga2asx-image.image" alt=""></p><p><strong>\u5728 <code>config/config.go</code> \u4E2D\u6DFB\u52A0\u65E5\u5FD7\u521D\u59CB\u5316\u4EE3\u7801</strong></p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    ....</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">github.com/lexkong/log</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ....</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Init</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cfg </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initConfig</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> err</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521D\u59CB\u5316\u65E5\u5FD7\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">    c</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">initLog</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initConfig</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initLog</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    passLagerCfg </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> log</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PassLagerCfg </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Writers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">        viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.writers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LoggerLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.logger_level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LoggerFile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.logger_file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LogFormatText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetBool</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.log_format_text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        RollingPolicy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.rollingPolicy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LogRotateDate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetInt</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.log_rotate_date</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LogRotateSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">  viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetInt</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.log_rotate_size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        LogBackupCount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> viper</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetInt</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log.log_backup_count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    log</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InitWithConfig</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">passLagerCfg</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u76D1\u63A7\u914D\u7F6E\u6587\u4EF6\u53D8\u5316\u5E76\u70ED\u52A0\u8F7D\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">Config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">watchConfig</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">....</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u8981\u6CE8\u610F\uFF0C\u65E5\u5FD7\u521D\u59CB\u5316\u51FD\u6570 <code>c.initLog()</code> \u8981\u653E\u5728\u914D\u7F6E\u521D\u59CB\u5316\u51FD\u6570 <code>c.initConfig()</code> \u4E4B\u540E\uFF0C\u56E0\u4E3A\u65E5\u5FD7\u521D\u59CB\u5316\u51FD\u6570\u8981\u8BFB\u53D6\u65E5\u5FD7\u76F8\u5173\u7684\u914D\u7F6E\u3002<code>func (c *Config) initLog()</code> \u662F\u65E5\u5FD7\u521D\u59CB\u5316\u51FD\u6570\uFF0C\u4F1A\u8BBE\u7F6E\u65E5\u5FD7\u5305\u7684\u5404\u9879\u53C2\u6570\uFF0C\u53C2\u6570\u4E3A\uFF1A</p><ul><li><code>writers</code>\uFF1A\u8F93\u51FA\u4F4D\u7F6E\uFF0C\u6709\u4E24\u4E2A\u53EF\u9009\u9879 \u2014\u2014 file \u548C stdout\u3002\u9009\u62E9 file \u4F1A\u5C06\u65E5\u5FD7\u8BB0\u5F55\u5230 <code>logger_file</code> \u6307\u5B9A\u7684\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u9009\u62E9 stdout \u4F1A\u5C06\u65E5\u5FD7\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E24\u8005\u540C\u65F6\u9009\u62E9</li><li><code>logger_level</code>\uFF1A\u65E5\u5FD7\u7EA7\u522B\uFF0CDEBUG\u3001INFO\u3001WARN\u3001ERROR\u3001FATAL</li><li><code>logger_file</code>\uFF1A\u65E5\u5FD7\u6587\u4EF6</li><li><code>log_format_text</code>\uFF1A\u65E5\u5FD7\u7684\u8F93\u51FA\u683C\u5F0F\uFF0CJSON \u6216\u8005 plaintext\uFF0C<code>true</code> \u4F1A\u8F93\u51FA\u6210\u975E JSON \u683C\u5F0F\uFF0C<code>false</code> \u4F1A\u8F93\u51FA\u6210 JSON \u683C\u5F0F</li><li><code>rollingPolicy</code>\uFF1Arotate \u4F9D\u636E\uFF0C\u53EF\u9009\u7684\u6709 daily \u548C size\u3002\u5982\u679C\u9009 daily \u5219\u6839\u636E\u5929\u8FDB\u884C\u8F6C\u5B58\uFF0C\u5982\u679C\u662F size \u5219\u6839\u636E\u5927\u5C0F\u8FDB\u884C\u8F6C\u5B58</li><li><code>log_rotate_date</code>\uFF1Arotate \u8F6C\u5B58\u65F6\u95F4\uFF0C\u914D \u5408<code>rollingPolicy: daily</code> \u4F7F\u7528</li><li><code>log_rotate_size</code>\uFF1Arotate \u8F6C\u5B58\u5927\u5C0F\uFF0C\u914D\u5408 <code>rollingPolicy: size</code> \u4F7F\u7528</li><li><code>log_backup_count</code>\uFF1A\u5F53\u65E5\u5FD7\u6587\u4EF6\u8FBE\u5230\u8F6C\u5B58\u6807\u51C6\u65F6\uFF0Clog \u7CFB\u7EDF\u4F1A\u5C06\u8BE5\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u538B\u7F29\u5907\u4EFD\uFF0C\u8FD9\u91CC\u6307\u5B9A\u4E86\u5907\u4EFD\u6587\u4EF6\u7684\u6700\u5927\u4E2A\u6570</li></ul><h2 id="\u8C03\u7528\u65E5\u5FD7\u5305" tabindex="-1">\u8C03\u7528\u65E5\u5FD7\u5305 <a class="header-anchor" href="#\u8C03\u7528\u65E5\u5FD7\u5305" aria-hidden="true">#</a></h2><p>\u65E5\u5FD7\u521D\u59CB\u5316\u597D\u4E86\uFF0C\u5C06 <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo02" target="_blank" rel="noreferrer">demo02</a> \u4E2D\u7684 log \u7528 <a href="https://github.com/lexkong/log" target="_blank" rel="noreferrer">lexkong/log</a> \u5305\u6765\u66FF\u6362\u3002\u66FF\u6362\u524D\uFF08\u8FD9\u91CC grep \u51FA\u4E86\u9700\u8981\u66FF\u6362\u7684\u884C\uFF0C\u8BFB\u8005\u53EF\u81EA\u884C\u786E\u8BA4\u66FF\u6362\u540E\u7684\u6548\u679C\uFF09\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ grep log * -R</span></span>
<span class="line"><span style="color:#A6ACCD;">config/config.go:	&quot;log&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">config/config.go:		log.Printf(&quot;Config file changed: %s&quot;, e.Name)</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:	&quot;log&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:			log.Fatal(&quot;The router has no response, or it might took too long to start up.&quot;, err)</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:		log.Print(&quot;The router has been deployed successfully.&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:	log.Printf(&quot;Start to listening the incoming requests on http address: %s&quot;, viper.GetString(&quot;addr&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:	log.Printf(http.ListenAndServe(viper.GetString(&quot;addr&quot;), g).Error())</span></span>
<span class="line"><span style="color:#A6ACCD;">main.go:		log.Print(&quot;Waiting for the router, retry in 1 second.&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u66FF\u6362\u540E\u7684\u6E90\u7801\u6587\u4EF6\u89C1 <a href="https://github.com/lexkong/apiserver_demos/tree/master/demo03" target="_blank" rel="noreferrer">demo03</a>\u3002</p><h2 id="\u7F16\u8BD1\u5E76\u8FD0\u884C" tabindex="-1">\u7F16\u8BD1\u5E76\u8FD0\u884C <a class="header-anchor" href="#\u7F16\u8BD1\u5E76\u8FD0\u884C" aria-hidden="true">#</a></h2><ol><li><pre><code>\u4E0B\u8F7D apiserver\\_demos \u6E90\u7801\u5305\uFF08\u5982\u524D\u9762\u5DF2\u7ECF\u4E0B\u8F7D\u8FC7\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6B65\u9AA4\uFF09
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/apiserver_demos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u5C06 \`apiserver_demos/demo03\` \u590D\u5236\u4E3A \`$GOPATH/src/apiserver\`
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cp -a apiserver_demos/demo03/ $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><pre><code>\u5728 apiserver \u76EE\u5F55\u4E0B\u7F16\u8BD1\u6E90\u7801
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cd $GOPATH/src/apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gofmt -w .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go tool vet .</span></span>
<span class="line"><span style="color:#A6ACCD;">$ go build -v .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li><pre><code>\u542F\u52A8 apiserver
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./apiserver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u770B\u5230 apiserver \u6709 JSON \u683C\u5F0F\u7684\u65E5\u5FD7\u8F93\u51FA\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/7/163d94888f441a2e~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6" tabindex="-1">\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6 <a class="header-anchor" href="#\u7BA1\u7406\u65E5\u5FD7\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5C06\u65E5\u5FD7\u8F6C\u5B58\u7B56\u7565\u8BBE\u7F6E\u4E3A <code>size</code>\uFF0C\u8F6C\u5B58\u5927\u5C0F\u8BBE\u7F6E\u4E3A 1 MB</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rollingPolicy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">size</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">log_rotate_size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><p>\u5E76\u5728 <code>main</code> \u51FD\u6570\u4E2D\u52A0\u5165\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/31/163b4bc062cc4033~tplv-t2oaga2asx-image.image" alt=""></p><p>\u542F\u52A8 apiserver \u540E\u53D1\u73B0\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E86 log/apiserver.log \u65E5\u5FD7\u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ls log/</span></span>
<span class="line"><span style="color:#A6ACCD;">apiserver.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7A0B\u5E8F\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u53D1\u73B0\u53C8\u521B\u5EFA\u4E86 zip \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ls log/</span></span>
<span class="line"><span style="color:#A6ACCD;">apiserver.log  apiserver.log.20180531134509631.zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BE5 zip \u6587\u4EF6\u5C31\u662F\u5F53 apiserver.log \u5927\u5C0F\u8D85\u8FC7 1MB \u540E\uFF0C\u65E5\u5FD7\u7CFB\u7EDF\u5C06\u4E4B\u524D\u7684\u65E5\u5FD7\u538B\u7F29\u6210 zip \u6587\u4EF6\u540E\u7684\u6587\u4EF6\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u901A\u8FC7\u5177\u4F53\u5B9E\u4F8B\u8BB2\u89E3\u4E86\u5982\u4F55\u914D\u7F6E\u3001\u4F7F\u7528\u548C\u7BA1\u7406\u65E5\u5FD7\u3002</p>`,43),e=[p];function t(r,c,i,D,y,F){return n(),a("div",null,e)}const g=s(o,[["render",t]]);export{C as __pageData,g as default};
