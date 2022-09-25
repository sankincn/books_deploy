import{_ as e,c,o,d}from"./app.e5528619.js";const m=JSON.parse('{"title":"\u8FDB\u9636 2-push \u7684\u672C\u8D28","description":"","frontmatter":{},"headers":[{"level":2,"title":"push\uFF1A\u628A branch \u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93","slug":"push\uFF1A\u628A-branch-\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93","link":"#push\uFF1A\u628A-branch-\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u8FDB\u9636 2-push \u7684\u672C\u8D28.md"}'),s={name:"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u8FDB\u9636 2-push \u7684\u672C\u8D28.md"},a=d(`<h1 id="\u8FDB\u9636-2-push-\u7684\u672C\u8D28" tabindex="-1">\u8FDB\u9636 2-push \u7684\u672C\u8D28 <a class="header-anchor" href="#\u8FDB\u9636-2-push-\u7684\u672C\u8D28" aria-hidden="true">#</a></h1><hr><h1 id="\u8FDB\u9636-2\uFF1Apush-\u7684\u672C\u8D28" tabindex="-1">\u8FDB\u9636 2\uFF1Apush \u7684\u672C\u8D28 <a class="header-anchor" href="#\u8FDB\u9636-2\uFF1Apush-\u7684\u672C\u8D28" aria-hidden="true">#</a></h1><p>\u5728\u4E4B\u524D\u7684\u5185\u5BB9\u91CC\uFF0C\u6211\u7C97\u7565\u5730\u8BF4\u8FC7\uFF0C<code>push</code> \u6307\u4EE4\u505A\u7684\u4E8B\u662F\u628A\u4F60\u7684\u672C\u5730\u63D0\u4EA4\u4E0A\u4F20\u5230\u4E2D\u592E\u4ED3\u5E93\u53BB\uFF0C\u7528\u672C\u5730\u7684\u5185\u5BB9\u6765\u8986\u76D6\u6389\u8FDC\u7AEF\u7684\u5185\u5BB9\u3002\u8FD9\u4E2A\u8BF4\u6CD5\u5176\u5B9E\u662F\u4E0D\u591F\u51C6\u786E\u7684\uFF0C\u4F46 Git \u7684\u77E5\u8BC6\u7CFB\u7EDF\u6BD4\u8F83\u5E9E\u5927\uFF0C\u5728\u4F60\u5BF9 Git \u4E86\u89E3\u6BD4\u8F83\u5C11\u7684\u65F6\u5019\uFF0C\u7528\u300C\u4E0A\u4F20\u672C\u5730\u63D0\u4EA4\u300D\u6765\u89E3\u91CA\u4F1A\u6BD4\u8F83\u597D\u7406\u89E3\uFF1B\u800C\u5728\u4F60\u77E5\u9053\u4E86 <code>branch</code>\uFF0C\u5E76\u4E14\u660E\u767D\u4E86 <code>branch</code> \u7684\u5177\u4F53\u542B\u4E49\u4EE5\u540E\uFF0C\u6211\u5C31\u53EF\u4EE5\u544A\u8BC9\u4F60 <code>push</code> \u5230\u5E95\u662F\u4EC0\u4E48\u4E86\u3002</p><h2 id="push\uFF1A\u628A-branch-\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93" tabindex="-1">push\uFF1A\u628A branch \u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93 <a class="header-anchor" href="#push\uFF1A\u628A-branch-\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93" aria-hidden="true">#</a></h2><p>\u5B9E\u8D28\u4E0A\uFF0C<code>push</code> \u505A\u7684\u4E8B\u662F\uFF1A\u628A\u5F53\u524D <code>branch</code> \u7684\u4F4D\u7F6E\uFF08\u5373\u5B83\u6307\u5411\u54EA\u4E2A <code>commit</code>\uFF09\u4E0A\u4F20\u5230\u8FDC\u7AEF\u4ED3\u5E93\uFF0C\u5E76\u628A\u5B83\u7684\u8DEF\u5F84\u4E0A\u7684 <code>commit</code>s \u4E00\u5E76\u4E0A\u4F20\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u73B0\u5728\u7684\u672C\u5730\u4ED3\u5E93\u6709\u4E00\u4E2A <code>master</code> \uFF0C\u5B83\u8D85\u524D\u4E86\u8FDC\u7A0B\u4ED3\u5E93\u4E24\u4E2A\u63D0\u4EA4\uFF1B\u53E6\u5916\u8FD8\u6709\u4E00\u4E2A\u65B0\u5EFA\u7684 <code>branch</code> \u53EB <code>feature1</code>\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u8FD8\u6CA1\u6709\u8BB0\u8F7D\u8FC7\u5B83\u3002\u5177\u4F53\u5927\u6982\u50CF\u8FD9\u6837\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/29/160071880ab72f00~tplv-t2oaga2asx-image.image" alt="\u672C\u5730\u4ED3\u5E93\u8D85\u524D\u4E8E\u8FDC\u7A0B\u4ED3\u5E93"></p><p>\u8FD9\u65F6\u6211\u6267\u884C <code>git push</code>\uFF0C\u5C31\u4F1A\u628A <code>master</code> \u7684\u6700\u65B0\u4F4D\u7F6E\u66F4\u65B0\u5230\u8FDC\u7AEF\uFF0C\u5E76\u4E14\u628A\u5B83\u7684\u8DEF\u5F84\u4E0A\u7684 <code>5</code> <code>6</code> \u4E24\u4E2A <code>commit</code>s \u4E0A\u4F20\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/29/1600725e9973f71d~tplv-t2oaga2asx-image.image" alt="\u628A master push \u5230\u8FDC\u7A0B\u4ED3\u5E93"></p><p>\u800C\u5982\u679C\u8FD9\u65F6\u5019\u6211\u518D\u5207\u5230 <code>feature1</code> \u53BB\u540E\u518D\u6267\u884C\u4E00\u6B21 <code>push</code>\uFF0C\u5C31\u4F1A\u628A <code>feature1</code> \u4EE5\u53CA\u5B83\u7684 <code>commit</code> <code>4</code> \u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout feature1</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin feature1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u8FD9\u91CC\u7684 <code>git push</code> \u548C\u4E4B\u524D\u6709\u70B9\u4E0D\u540C\uFF1A\u591A\u4E86 <code>origin feature1</code> \u8FD9\u4E24\u4E2A\u53C2\u6570\u3002\u5176\u4E2D <code>origin</code> \u662F\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D\uFF0C\u662F\u4F60\u5728 <code>git clone</code> \u7684\u65F6\u5019 Git \u81EA\u52A8\u5E2E\u4F60\u8D77\u7684\uFF1B<code>feature1</code> \u662F\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u76EE\u6807 <code>branch</code> \u7684\u540D\u5B57\u3002\u8FD9\u4E24\u4E2A\u53C2\u6570\u5408\u8D77\u6765\u6307\u5B9A\u4E86\u4F60\u8981 <code>push</code> \u5230\u7684\u76EE\u6807\u4ED3\u5E93\u548C\u76EE\u6807\u5206\u652F\uFF0C\u610F\u601D\u662F\u300C\u6211\u8981 push \u5230 <code>origin</code> \u8FD9\u4E2A\u4ED3\u5E93\u7684 <code>feature1</code> \u5206\u652F\u300D\u3002</p><p>\u5728 Git \u4E2D\uFF082.0 \u53CA\u5B83\u4E4B\u540E\u7684\u7248\u672C\uFF09\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F60\u7528\u4E0D\u52A0\u53C2\u6570\u7684 <code>git push</code> \u53EA\u80FD\u4E0A\u4F20\u90A3\u4E9B\u4E4B\u524D\u4ECE\u8FDC\u7AEF <code>clone</code> \u4E0B\u6765\u6216\u8005 <code>pull</code> \u4E0B\u6765\u7684\u5206\u652F\uFF0C\u800C\u5982\u679C\u9700\u8981 <code>push</code> \u4F60\u672C\u5730\u7684\u81EA\u5DF1\u521B\u5EFA\u7684\u5206\u652F\uFF0C\u5219\u9700\u8981\u624B\u52A8\u6307\u5B9A\u76EE\u6807\u4ED3\u5E93\u548C\u76EE\u6807\u5206\u652F\uFF08\u5E76\u4E14\u76EE\u6807\u5206\u652F\u7684\u540D\u79F0\u5FC5\u987B\u548C\u672C\u5730\u5206\u652F\u5B8C\u5168\u76F8\u540C\uFF09\uFF0C\u5C31\u50CF\u4E0A\u9762\u8FD9\u6837\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>git config</code> \u6307\u4EE4\u6765\u8BBE\u7F6E <code>push.default</code> \u7684\u503C\u6765\u6539\u53D8 <code>push</code> \u7684\u884C\u4E3A\u903B\u8F91\uFF0C\u4F8B\u5982\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u300C\u6240\u6709\u5206\u652F\u90FD\u53EF\u4EE5\u7528 <code>git push</code> \u6765\u76F4\u63A5 push\uFF0C\u76EE\u6807\u81EA\u52A8\u6307\u5411 <code>origin</code> \u4ED3\u5E93\u7684\u540C\u540D\u5206\u652F\u300D\uFF08\u5BF9\u5E94\u7684 <code>push.default</code> \u503C\uFF1A<code>current</code>\uFF09\uFF0C\u6216\u8005\u522B\u7684\u4EC0\u4E48\u884C\u4E3A\u903B\u8F91\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u6BCF\u6B21\u6267\u884C <code>git push</code> \u65F6\u5C31\u81EA\u52A8\u628A\u6240\u6709\u672C\u5730\u5206\u652F\u5168\u90E8\u540C\u6B65\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF08\u867D\u7136\u8FD9\u53EF\u80FD\u6709\u70B9\u8017\u65F6\u548C\u5371\u9669\uFF09\u3002\u5982\u679C\u5E0C\u671B\u8BE6\u7EC6\u4E86\u89E3\uFF0C\u4F60\u53EF\u4EE5\u5230<a href="https://git-scm.com/docs/git-config#git-config-pushdefault" target="_blank" rel="noreferrer">\u8FD9\u91CC</a>\u770B\u770B\u3002</p></blockquote><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/29/160073ccda56ef07~tplv-t2oaga2asx-image.image" alt="push feature1 \u5230\u8FDC\u7A0B\u4ED3\u5E93"></p><p>\u7EC6\u5FC3\u7684\u4EBA\u53EF\u80FD\u4F1A\u53D1\u73B0\uFF0C\u5728 <code>feature1</code> \u88AB <code>push</code> \u65F6\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u7684 <code>HEAD</code> \u5E76\u6CA1\u6709\u548C\u672C\u5730\u4ED3\u5E93\u7684 <code>HEAD</code> \u4E00\u6837\u6307\u5411 <code>feature1</code>\u3002\u8FD9\u662F\u56E0\u4E3A\uFF0C<code>push</code> \u7684\u65F6\u5019\u53EA\u4F1A\u4E0A\u4F20\u5F53\u524D\u7684 <code>branch</code> \u7684\u6307\u5411\uFF0C\u5E76\u4E0D\u4F1A\u628A\u672C\u5730\u7684 <code>HEAD</code> \u7684\u6307\u5411\u4E5F\u4E00\u8D77\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u7684 <code>HEAD</code> \u662F\u6C38\u8FDC\u6307\u5411\u5B83\u7684\u9ED8\u8BA4\u5206\u652F\uFF08\u5373 master\uFF0C\u5982\u679C\u4E0D\u4FEE\u6539\u5B83\u7684\u540D\u79F0\u7684\u8BDD\uFF09\uFF0C\u5E76\u4F1A\u968F\u7740\u9ED8\u8BA4\u5206\u652F\u7684\u79FB\u52A8\u800C\u79FB\u52A8\u7684\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u4ECB\u7ECD\u4E86 <code>push</code> \u8FD9\u4E2A\u6307\u4EE4\u7684\u672C\u8D28\u3002\u603B\u7ED3\u4E00\u4E0B\u5173\u952E\u70B9\uFF1A</p><ol><li><code>push</code> \u662F\u628A\u5F53\u524D\u7684\u5206\u652F\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u628A\u8FD9\u4E2A <code>branch</code> \u7684\u8DEF\u5F84\u4E0A\u7684\u6240\u6709 <code>commit</code>s \u4E5F\u4E00\u5E76\u4E0A\u4F20\u3002</li><li><code>push</code> \u7684\u65F6\u5019\uFF0C\u5982\u679C\u5F53\u524D\u5206\u652F\u662F\u4E00\u4E2A\u672C\u5730\u521B\u5EFA\u7684\u5206\u652F\uFF0C\u9700\u8981\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u540D\u548C\u5206\u652F\u540D\uFF0C\u7528 <code>git push origin branch_name</code> \u7684\u683C\u5F0F\uFF0C\u800C\u4E0D\u80FD\u53EA\u7528 <code>git push</code>\uFF1B\u6216\u8005\u53EF\u4EE5\u901A\u8FC7 <code>git config</code> \u4FEE\u6539 <code>push.default</code> \u6765\u6539\u53D8 <code>push</code> \u65F6\u7684\u884C\u4E3A\u903B\u8F91\u3002</li><li><code>push</code> \u7684\u65F6\u5019\u4E4B\u540E\u4E0A\u4F20\u5F53\u524D\u5206\u652F\uFF0C\u5E76\u4E0D\u4F1A\u4E0A\u4F20 <code>HEAD</code>\uFF1B\u8FDC\u7A0B\u4ED3\u5E93\u7684 <code>HEAD</code> \u662F\u6C38\u8FDC\u6307\u5411\u9ED8\u8BA4\u5206\u652F\uFF08\u5373 <code>master</code>\uFF09\u7684\u3002</li></ol>`,19),t=[a];function p(i,n,r,h,u,l){return o(),c("div",null,t)}const _=e(s,[["render",p]]);export{m as __pageData,_ as default};
