import{_ as s,c as a,o as n,d as p}from"./app.c4f45da1.js";const d=JSON.parse('{"title":"\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u6D41\u7A0B","slug":"\u6D41\u7A0B","link":"#\u6D41\u7A0B","children":[{"level":3,"title":"1. \u7EAF\u4E91\u7AEF\u5316","slug":"_1-\u7EAF\u4E91\u7AEF\u5316","link":"#_1-\u7EAF\u4E91\u7AEF\u5316","children":[]},{"level":3,"title":"2. electron-updater","slug":"_2-electron-updater","link":"#_2-electron-updater","children":[]}]},{"level":2,"title":"\u672C\u5730\u5316+\u4E91\u7AEF\u5316\u7ED3\u5408","slug":"\u672C\u5730\u5316-\u4E91\u7AEF\u5316\u7ED3\u5408","link":"#\u672C\u5730\u5316-\u4E91\u7AEF\u5316\u7ED3\u5408","children":[]},{"level":2,"title":"\u6700\u540E","slug":"\u6700\u540E","link":"#\u6700\u540E","children":[]}],"relativePath":"React.js/Electron and React \u4ECE 0 \u5230 1 \u5B9E\u73B0\u7B80\u5386\u5E73\u53F0\u5B9E\u6218/\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03.md"}'),l={name:"React.js/Electron and React \u4ECE 0 \u5230 1 \u5B9E\u73B0\u7B80\u5386\u5E73\u53F0\u5B9E\u6218/\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03.md"},o=p(`<h1 id="\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03" tabindex="-1">\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03 <a class="header-anchor" href="#\u5230\u8FBE\u76EE\u7684\u5730-\u5E94\u7528\u7A0B\u5E8F\u53D1\u5E03" aria-hidden="true">#</a></h1><hr><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684\u5DE5\u4F5C\u5DF2\u7ECF\u5B8C\u6210\u4E86 <code>100%</code>\uFF0C\u53EA\u8981\u4F60\u4FDD\u8BC1\u4E0D\u505A\u66F4\u6539\uFF0C\u90A3\u4E48\u81EA\u52A8\u66F4\u65B0\u5C31\u6CA1\u5FC5\u8981\u3002\u4F46\uFF0C\u4F60\u80FD\u786E\u4FDD\u771F\u4E0D\u505A\u4EFB\u4F55\u4FEE\u6539\u5417\uFF1F</p><p>\u5982\u679C\u6709\u4E00\u5929\uFF0C\u4F60\u671F\u671B\u5982\u4E0B\u56FE\u4E00\u6837\uFF0C\u53D1\u5E03\u4E86\u6700\u65B0\u7248\u672C\uFF0C\u7528\u6237\u80FD\u6536\u5230\u66F4\u65B0\u63D0\u793A\uFF0C\u90A3\u81EA\u52A8\u66F4\u65B0\u5C31\u5FC5\u987B\u5F97\u6574\u4E86\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/850461dbfdd64eeebf5bafff9156500a~tplv-k3u1fbpfcp-watermark.image?" alt="\u4F01\u4E1A\u5FAE\u4FE1\u622A\u56FE_080a4572-001b-4240-b96a-a75b01523317.png"></p><h2 id="\u6D41\u7A0B" tabindex="-1">\u6D41\u7A0B <a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u6309\u7167\u6211\u7684\u7406\u89E3\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u88C5\u5305\u5B58\u653E\u5728\u67D0\u53F0\u4E91\u670D\u52A1\u5668\u4E0A\uFF0C\u91CC\u9762\u5B58\u653E\u7684\u662F\u65B0\u7248\u672C\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u5F53\u6211\u5B89\u88C5\u7684\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u65F6\uFF0C\u4F1A\u8FDB\u884C\u81EA\u52A8\u68C0\u6D4B\uFF0C\u68C0\u6D4B\u5230\u672C\u5730\u7684\u5E94\u7528\u7A0B\u5E8F\u4E0E\u7EBF\u4E0A\u670D\u52A1\u5668\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7248\u672C\u4E0D\u4E00\u81F4\u65F6\uFF0C\u53D1\u73B0\u6709\u65B0\u7248\u672C\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u63D0\u793A\uFF0C\u544A\u77E5\u6709\u65B0\u7248\u672C\uFF0C\u662F\u5426\u8FDB\u884C\u66F4\u65B0\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/620ceadab4c84b629bb128b88233c713~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u81EA\u52A8\u66F4\u65B0\u5462\uFF1F</p><h3 id="_1-\u7EAF\u4E91\u7AEF\u5316" tabindex="-1">1. \u7EAF\u4E91\u7AEF\u5316 <a class="header-anchor" href="#_1-\u7EAF\u4E91\u7AEF\u5316" aria-hidden="true">#</a></h3><p>\u53EF\u80FD\u6709\u4EBA\u4E0D\u592A\u7406\u89E3\uFF0C\u6211\u6765\u7EC6\u8BF4\u4E00\u54C8\uFF5E</p><p>\u6211\u8BF4 electron \u5C31\u662F\u5957\u4E2A\u58F3\uFF0C\u5E94\u8BE5\u6CA1\u4EBA\u53CD\u9A73\u6211\u5427\uFF1F\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u4E0D\u9700\u8981\u7528\u5230\u4EFB\u4F55\u539F\u751F\u80FD\u529B\uFF0C\u5C31\u7EAF\u7CB9\u7684\u4F7F\u7528 electron \u5957\u4E2A\u58F3\uFF0C\u901A\u8FC7 <code>webview</code> \u7684\u65B9\u5F0F\u52A0\u8F7D\u4E00\u4E2A\u4E91\u7AEF\u94FE\u63A5\u3002\u5982\u679C\u4F60\u60F3\u5B9E\u73B0\u5185\u5BB9\u6700\u65B0\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u4FDD\u8BC1\u4E91\u7AEF\u670D\u52A1\u5668\u4E0A\u7684\u4EE3\u7801\u662F\u6700\u65B0\u7684\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u5E94\u7528\u53D1\u7248\u3002</p><p>\u8BF4\u7684\u901A\u4FD7\u70B9\uFF0C\u6211\u5728 electron \u4E2D\u901A\u8FC7 webview \u7684\u65B9\u5F0F\u52A0\u8F7D <code>https://juejin.cn</code>\uFF0C\u8FD9\u65F6\u5019\u6392\u7248\u6709\u4E9B\u95EE\u9898\uFF0C\u66F4\u6539\u4E86\u4E00\u5C0F\u90E8\u5206\u4EE3\u7801\uFF0C\u8BB2\u9053\u7406\u6211\u9700\u8981\u5E94\u7528\u7A0B\u5E8F\u53D1\u7248\u5417\uFF1F\u4E0D\u9700\u8981\uFF01</p><h3 id="_2-electron-updater" tabindex="-1">2. electron-updater <a class="header-anchor" href="#_2-electron-updater" aria-hidden="true">#</a></h3><p>\u7F51\u4E0A\u5F88\u591A\u81EA\u52A8\u66F4\u65B0\u914D\u7F6E\u7684\u6587\u7AE0\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u524D\u5F80\u67E5\u8BE2\u4E00\u4E0B\uFF0C\u4E0B\u9762\u7ED9\u5927\u5BB6\u6458\u6284\u4E00\u90E8\u5206\u7EC4\u5185\u9879\u76EE\u7684\u81EA\u52A8\u66F4\u65B0\u7684\u4EE3\u7801\uFF08\u8131\u654F\u8FC7\u7684\uFF09\uFF0C\u6216\u8005\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u770B\u770B <a href="https://www.electron.build/auto-update" target="_blank" rel="noreferrer">electron-builder</a> \u6587\u6863</p><p>\u5728 package.json \u4E2D\uFF0C\u6211\u4EEC\u914D\u7F6E\u4E00\u4E0B <code>publish</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;build&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;publish&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;provider&quot;: &quot;generic&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;url&quot;: &quot;http://xxxxxx/download/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53BB\u5E94\u7528\u7A0B\u5E8F\u4E3B\u8FDB\u7A0B\u4EE3\u7801\u4E2D\uFF0C\u8C03\u7528 <code>electron-updater</code> \u6A21\u5757\u68C0\u6D4B\u66F4\u65B0</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> autoUpdater </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">electron-updater</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkVersionUpdate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">autoDownload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u5C06\u81EA\u52A8\u4E0B\u8F7D\u5305\u8BBE\u7F6E\u4E3Afalse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//\u68C0\u6D4B\u66F4\u65B0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">checkForUpdates</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//\u76D1\u542C&#39;error&#39;\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u68C0\u67E5\u66F4\u65B0\u662F\u5426\u5DF2\u5F00\u59CB\u65F6\u53D1\u51FA</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checking-for-update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u68C0\u6D4B\u6709\u53EF\u66F4\u65B0\u7684\u5E94\u7528\u5305</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-available</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u68C0\u6D4B\u6CA1\u6709\u53EF\u7528\u66F4\u65B0\u65F6\u53D1\u51FA</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-not-available</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E0B\u8F7D\u53EF\u66F4\u65B0\u7684\u5B89\u88C5\u5305</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-downloaded</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u76D1\u542C\u4E0B\u8F7D\u8FDB\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">download-progress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">info</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">checkVersionUpdate</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5E94\u7528\u66F4\u65B0\u7684\u4F9D\u636E\u662F <code>.yml</code> \u6587\u4EF6\uFF0C\u7531\u4E8E <code>autoUpdater</code> \u7684\u4E00\u4E9B\u65B9\u6CD5\u662F\u53EA\u80FD\u5728\u6253\u5305 release \u65F6\u624D\u4F1A\u89E6\u53D1\uFF0C\u4E5F\u5C31\u662F\u4F60\u60F3\u8C03\u8BD5\u4E00\u4E0B\u6837\u5F0F\u6216\u8005\u81EA\u6D4B\uFF0C\u4F60\u6BCF\u6B21\u6539\u5B8C\u4EE3\u7801\u90FD\u9700\u8981 <code>build</code> \u4E00\u4E0B\uFF0C\u6781\u5EA6\u86CB\u75BC\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u672C\u5730\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u7528\u7684 <code>.yml</code>\u3002</p><p>\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F60\u5E38\u4F1A\u770B\u5230\u8FD9\u6837\u7684\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isDev</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">isDev</span><span style="color:#F07178;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">autoUpdater</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">updateConfigPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../dev-update.yml</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">checkVersionUpdate</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u7684 <code>dev-update.yml</code> \u5C31\u662F\u6211\u4EEC\u9ED8\u8BA4\u521B\u5EFA\u7528\u4E8E\u8C03\u8BD5\u7684 <code>.yml</code></p><p>\u81EA\u52A8\u66F4\u65B0\u7684\u65B9\u5F0F\u6709\u8BB8\u591A\u79CD\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u642D\u4E00\u4E2A\u670D\u52A1\u5668\u653E\u5B89\u88C5\u5305\uFF0C\u4E5F\u53EF\u4EE5\u57FA\u4E8E github \u65B9\u6848\u5B9E\u73B0\uFF0C\u5C0F\u4F19\u4F34\u53EF\u4EE5\u79C1\u4E0B\u7814\u7A76\u4E00\u6CE2\uFF0C\u6709\u95EE\u9898\u53EF\u5728\u7FA4\u91CC\u63D0\u95EE\uFF5E</p><h2 id="\u672C\u5730\u5316-\u4E91\u7AEF\u5316\u7ED3\u5408" tabindex="-1">\u672C\u5730\u5316+\u4E91\u7AEF\u5316\u7ED3\u5408 <a class="header-anchor" href="#\u672C\u5730\u5316-\u4E91\u7AEF\u5316\u7ED3\u5408" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u6765\u8BB2\uFF0C\u6211\u4EEC\u7684\u5E94\u7528\u5F88\u590D\u6742\uFF0C\u6A21\u5757\u5F88\u591A\uFF0C\u90A3\u4E48\u52BF\u5FC5\u4F1A\u5B58\u5728\u4E00\u4E9B\u6A21\u5757\u4E0D\u5E38\u66F4\u65B0\uFF0C\u4E00\u4E9B\u6A21\u5757\u7ECF\u5E38\u66F4\u65B0\u3002</p><p>\u600E\u4E48\u7406\u89E3\u5462\uFF0C\u6211\u4E3E\u4E2A\u5C0F\u4F8B\u5B50\uFF0C\u4F60\u73B0\u5728\u5728\u505A\u4E00\u4E2A\u97F3\u4E50\u64AD\u653E\u5668\u5E94\u7528\u3002\u4F60\u7684\u7528\u6237\u6A21\u5757\u4E0D\u5E38\u53D8\u5316\uFF0C\u800C\u6B4C\u5355\u6A21\u5757\u7ECF\u5E38\u8FED\u4EE3\u66F4\u65B0\u3002\u6BCF\u6B21\u66F4\u65B0\uFF0C\u610F\u5473\u7740\u8981\u53D1\u7248\u672C\uFF0C\u53D1\u7248\u672C\u610F\u5473\u7740\u7528\u6237\u53C8\u8981\u66F4\u65B0\uFF0C\u7528\u6237\u9891\u7E41\u66F4\u65B0\u5E94\u7528\uFF0C\u5C31\u4F1A\u5410\u69FD\uFF0C\u5410\u69FD\u591A\u4E86\uFF0C\u4F60\u5C31\u88AB\u9A82\uFF0C\u88AB\u9A82\u591A\u4E86\uFF0C\u4F60\u4E0A\u73ED\u5C31\u4E0D\u5FEB\u4E50\uFF0C\u4E0A\u73ED\u4E0D\u5FEB\u4E50\u4F60\u5C31\u6CA1\u5FC3\u601D\u6253\u5DE5...</p><p>\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u5462\uFF1F\u5176\u5B9E\u53EF\u4EE5\u91C7\u7528\u672C\u5730\u5316+\u4E91\u7AEF\u5316\u7684\u65B9\u5F0F\uFF0C\u5C06\u9891\u7E41\u66F4\u6539\u8FED\u4EE3\u7684\u6A21\u5757\u627E\u51FA\u6765\uFF0C\u505A\u6210\u4E91\u7AEF\u5316\uFF0C\u4E5F\u5C31\u662F\u5C06\u6B4C\u5355\u6A21\u5757\uFF0C\u505A\u6210 web \u7AEF\uFF0C\u90E8\u7F72\u5728\u4E91\u7AEF\uFF0C\u5728 electron \u4E2D\uFF0C\u901A\u8FC7 iframe / webview \u7684\u5F62\u5F0F\u52A0\u8F7D\u6B4C\u5355\u6A21\u5757\u7684\u94FE\u63A5\u3002\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fd77c55abc74d22b256a595acf15742~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>A\u3001B\u3001C\u3001\u7528\u6237\u6A21\u5757\u90FD\u662F\u4E0D\u5E38\u53D8\u7684\uFF0C\u800C\u6B4C\u5355\u6A21\u5757\u662F\u9891\u7E41\u8FED\u4EE3\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u5B83\u62BD\u79BB\u51FA\u53BB\uFF0C\u53D8\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E94\u7528\uFF0C\u5F00\u53D1\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u90E8\u7F72\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u6211\u4EEC\u5728\u5E94\u7528\u4E2D\u901A\u8FC7 iframe / webview \u7684\u5F62\u5F0F\u52A0\u8F7D\u8FDB\u6765\u3002</p><p>\u5728\u4E0B\u6B21\u8FED\u4EE3\u66F4\u65B0\u65F6\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5F00\u53D1\u6B4C\u5355\u6A21\u5757\uFF0C\u7136\u540E\u90E8\u7F72\u7EBF\u4E0A\u5373\u53EF\uFF0C\u5E94\u7528\u52A0\u8F7D\u7684\u59CB\u7EC8\u662F\u7EBF\u4E0A\u94FE\u63A5\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u53D1\u7248\u4E86\u3002</p><p>\u4F60\u53EF\u80FD\u4F1A\u7591\u60D1\uFF0C\u5982\u679C\u6B4C\u5355\u6A21\u5757\u9700\u8981\u7528\u5230 electron \u672C\u5730\u539F\u751F\u80FD\u529B\u5462\uFF1F\u6BD4\u5982\u4F60\u7528\u7684\u662F iframe\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u901A\u8FC7 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer">postMessage</a> \u8FDB\u884C\u901A\u4FE1\u3002\u603B\u4E4B\u90FD\u6709\u65B9\u6CD5\u80FD\u591F\u89E3\u51B3\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/893678d208134d31933d0dad82e4af11~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="\u6700\u540E" tabindex="-1">\u6700\u540E <a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u8282\u66F4\u591A\u7684\u662F\u8BB2\u89E3\u81EA\u52A8\u66F4\u65B0\u7684\u601D\u8DEF\u548C\u6838\u5FC3\u6B65\u9AA4\uFF0C\u8FD8\u662F\u5E0C\u671B\u5C0F\u4F19\u4F34\u4EEC\u80FD\u7ED3\u5408\u6587\u6863\u548C\u81EA\u884C\u67E5\u8BE2\u6587\u7AE0\u53BB\u52A8\u624B\u64CD\u4F5C\u3002</p><p>\u5982\u679C\u5BF9\u672C\u7AE0\u8282\u5B58\u5728\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u7559\u8A00\u3002\u5982\u679C\u89C9\u5F97\u963F\u5BBD\u54EA\u91CC\u8868\u8FBE\u9519\u8BEF\uFF0C\u53EF\u6307\u51FA\uFF0C\u865A\u5FC3\u8BF7\u6559\uFF5E</p>`,38),e=[o];function t(c,r,F,D,y,i){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};
