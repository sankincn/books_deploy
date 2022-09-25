import{_ as e,c,o,d as a}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u9AD8\u7EA7 6-\u4EE3\u7801\u5DF2\u7ECF push \u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684 branch","slug":"_1-\u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684-branch","link":"#_1-\u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684-branch","children":[]},{"level":2,"title":"2. \u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230 master","slug":"_2-\u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230-master","link":"#_2-\u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230-master","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 6-\u4EE3\u7801\u5DF2\u7ECF push \u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F.md"}'),d={name:"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 6-\u4EE3\u7801\u5DF2\u7ECF push \u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F.md"},s=a(`<h1 id="\u9AD8\u7EA7-6-\u4EE3\u7801\u5DF2\u7ECF-push-\u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F" tabindex="-1">\u9AD8\u7EA7 6-\u4EE3\u7801\u5DF2\u7ECF push \u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-6-\u4EE3\u7801\u5DF2\u7ECF-push-\u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F" aria-hidden="true">#</a></h1><hr><h1 id="\u9AD8\u7EA7-6\uFF1A\u4EE3\u7801\u5DF2\u7ECF-push-\u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F" tabindex="-1">\u9AD8\u7EA7 6\uFF1A\u4EE3\u7801\u5DF2\u7ECF push \u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-6\uFF1A\u4EE3\u7801\u5DF2\u7ECF-push-\u4E0A\u53BB\u4E86\u624D\u53D1\u73B0\u5199\u9519\uFF1F" aria-hidden="true">#</a></h1><p>\u6709\u7684\u65F6\u5019\uFF0C\u4EE3\u7801 <code>push</code> \u5230\u4E86\u4E2D\u592E\u4ED3\u5E93\uFF0C\u624D\u53D1\u73B0\u6709\u4E2A <code>commit</code> \u5199\u9519\u4E86\u3002\u8FD9\u79CD\u95EE\u9898\u7684\u5904\u7406\u5206\u4E24\u79CD\u60C5\u51B5\uFF1A</p><h2 id="_1-\u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684-branch" tabindex="-1">1. \u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684 branch <a class="header-anchor" href="#_1-\u51FA\u9519\u7684\u5185\u5BB9\u5728\u4F60\u81EA\u5DF1\u7684-branch" aria-hidden="true">#</a></h2><p>\u5047\u5982\u662F\u67D0\u4E2A\u4F60\u81EA\u5DF1\u72EC\u7ACB\u5F00\u53D1\u7684 <code>branch</code> \u51FA\u9519\u4E86\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4EBA\uFF0C\u90A3\u6CA1\u5173\u7CFB\u7528\u524D\u9762\u51E0\u8282\u8BB2\u7684\u65B9\u6CD5\u628A\u5199\u9519\u7684 <code>commit</code> \u4FEE\u6539\u6216\u8005\u5220\u9664\u6389\uFF0C\u7136\u540E\u518D <code>push</code> \u4E0A\u53BB\u5C31\u597D\u4E86\u3002\u4E0D\u8FC7\u2026\u2026</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fe2638ac5c1dd0~tplv-t2oaga2asx-image.image" alt=""></p><p>\u7531\u4E8E\u4F60\u5728\u672C\u5730\u5BF9\u5DF2\u6709\u7684 <code>commit</code> \u505A\u4E86\u4FEE\u6539\uFF0C\u8FD9\u65F6\u4F60\u518D <code>push</code> \u5C31\u4F1A\u5931\u8D25\uFF0C\u56E0\u4E3A\u4E2D\u592E\u4ED3\u5E93\u5305\u542B\u672C\u5730\u6CA1\u6709\u7684 <code>commit</code>s\u3002\u4F46\u8FD9\u4E2A\u548C\u524D\u9762\u8BB2\u8FC7\u7684\u60C5\u51B5\u4E0D\u540C\uFF0C\u8FD9\u6B21\u7684\u51B2\u7A81\u4E0D\u662F\u56E0\u4E3A\u540C\u4E8B <code>push</code> \u4E86\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u56E0\u4E3A\u4F60\u523B\u610F\u4FEE\u6539\u4E86\u4E00\u4E9B\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u51B2\u7A81\u662F\u4F60\u9884\u6599\u5230\u7684\uFF0C\u4F60\u672C\u6765\u5C31\u5E0C\u671B\u7528\u672C\u5730\u7684\u5185\u5BB9\u8986\u76D6\u6389\u4E2D\u592E\u4ED3\u5E93\u7684\u5185\u5BB9\u3002\u90A3\u4E48\u8FD9\u65F6\u5C31\u4E0D\u8981\u4E56\u4E56\u542C\u8BDD\uFF0C\u6309\u7167\u63D0\u793A\u53BB\u5148 <code>pull</code> \u4E00\u4E0B\u518D <code>push</code> \u4E86\uFF0C\u800C\u662F\u8981\u9009\u62E9\u300C\u5F3A\u884C\u300D<code>push</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git push origin branch1 -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>-f</code> \u662F <code>--force</code> \u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u300C\u5FFD\u7565\u51B2\u7A81\uFF0C\u5F3A\u5236 <code>push</code>\u300D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fe2638ab7b7e6d~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u6837\uFF0C\u5728\u672C\u5730\u4FEE\u6539\u4E86\u9519\u8BEF\u7684 <code>commit</code>s\uFF0C\u7136\u540E\u5F3A\u5236 <code>push</code> \u4E0A\u53BB\uFF0C\u95EE\u9898\u5C31\u89E3\u51B3\u4E86\u3002</p><h2 id="_2-\u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230-master" tabindex="-1">2. \u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230 master <a class="header-anchor" href="#_2-\u51FA\u9519\u7684\u5185\u5BB9\u5DF2\u7ECF\u5408\u5E76\u5230-master" aria-hidden="true">#</a></h2><p>\u8FD9\u5C31\u4E0D\u80FD\u7528\u4E0A\u9762\u90A3\u62DB\u4E86\u3002\u540C\u4E8B\u7684\u5DE5\u4F5C\u90FD\u5728 <code>master</code> \u4E0A\uFF0C\u4F60\u6C38\u8FDC\u4E0D\u77E5\u9053\u4F60\u7684\u4E00\u6B21\u5F3A\u5236 <code>push</code> \u4F1A\u4E0D\u4F1A\u6D17\u6389\u540C\u4E8B\u521A\u53D1\u4E0A\u53BB\u7684\u65B0\u63D0\u4EA4\u3002\u6240\u4EE5\u9664\u975E\u4F60\u662F\u4EBA\u5458\u6570\u91CF\u548C\u884C\u4E3A\u90FD\u5B8C\u5168\u53EF\u63A7\u7684\u8D85\u5C0F\u56E2\u961F\uFF0C\u53EF\u4EE5\u548C\u540C\u4E8B\u505A\u5230\u65E0\u6B7B\u89D2\u7684\u5B8C\u7F8E\u6C9F\u901A\uFF0C\u4E0D\u7136\u4E00\u5B9A\u522B\u5728 <code>master</code> \u4E0A\u5F3A\u5236 <code>push</code>\u3002</p><p>\u5728\u8FD9\u79CD\u65F6\u5019\uFF0C\u4F60\u53EA\u80FD\u9000\u4E00\u6B65\uFF0C\u9009\u7528\u53E6\u4E00\u79CD\u7B56\u7565\uFF1A\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0C\u628A\u4E4B\u524D\u63D0\u4EA4\u7684\u5185\u5BB9\u62B9\u6389\u3002\u4F8B\u5982\u4E4B\u524D\u4F60\u589E\u52A0\u4E86\u4E00\u884C\u4EE3\u7801\uFF0C\u4F60\u5E0C\u671B\u64A4\u9500\u5B83\uFF0C\u90A3\u4E48\u4F60\u5C31\u505A\u4E00\u4E2A\u5220\u6389\u8FD9\u884C\u4EE3\u7801\u7684\u63D0\u4EA4\uFF1B\u5982\u679C\u4F60\u5220\u6389\u4E86\u4E00\u884C\u4EE3\u7801\uFF0C\u4F60\u5E0C\u671B\u64A4\u9500\u5B83\uFF0C\u90A3\u4E48\u4F60\u5C31\u505A\u4E00\u4E2A\u628A\u8FD9\u884C\u4EE3\u7801\u8FD8\u539F\u56DE\u6765\u7684\u63D0\u4EA4\u3002\u8FD9\u79CD\u4E8B\u505A\u8D77\u6765\u4E5F\u4E0D\u7B97\u9EBB\u70E6\uFF0C\u56E0\u4E3A Git \u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u6307\u4EE4\uFF1A<code>revert</code>\u3002</p><p>\u5B83\u7684\u7528\u6CD5\u5F88\u7B80\u5355\uFF0C\u4F60\u5E0C\u671B\u64A4\u9500\u54EA\u4E2A <code>commit</code>\uFF0C\u5C31\u628A\u5B83\u586B\u5728\u540E\u9762\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git revert HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0A\u9762\u8FD9\u884C\u4EE3\u7801\u5C31\u4F1A\u589E\u52A0\u4E00\u6761\u65B0\u7684 <code>commit</code>\uFF0C\u5B83\u7684\u5185\u5BB9\u548C\u5012\u6570\u7B2C\u4E8C\u4E2A <code>commit</code> \u662F\u76F8\u53CD\u7684\uFF0C\u4ECE\u800C\u548C\u5012\u6570\u7B2C\u4E8C\u4E2A <code>commit</code> \u76F8\u4E92\u62B5\u6D88\uFF0C\u8FBE\u5230\u64A4\u9500\u7684\u6548\u679C\u3002</p><p>\u5728 <code>revert</code> \u5B8C\u6210\u4E4B\u540E\uFF0C\u628A\u65B0\u7684 <code>commit</code> \u518D <code>push</code> \u4E0A\u53BB\uFF0C\u8FD9\u4E2A <code>commit</code> \u7684\u5185\u5BB9\u5C31\u88AB\u64A4\u9500\u4E86\u3002\u5B83\u548C\u524D\u9762\u6240\u4ECB\u7ECD\u7684\u64A4\u9500\u65B9\u5F0F\u76F8\u6BD4\uFF0C\u6700\u4E3B\u8981\u7684\u533A\u522B\u662F\uFF0C\u8FD9\u6B21\u6539\u52A8\u53EA\u662F\u88AB\u300C\u53CD\u8F6C\u300D\u4E86\uFF0C\u5E76\u6CA1\u6709\u5728\u5386\u53F2\u4E2D\u6D88\u5931\u6389\uFF0C\u4F60\u7684\u5386\u53F2\u4E2D\u4F1A\u5B58\u5728\u4E24\u6761 <code>commit</code> \uFF1A\u4E00\u4E2A\u539F\u59CB <code>commit</code> \uFF0C\u4E00\u4E2A\u5BF9\u5B83\u7684\u53CD\u8F6C <code>commit</code>\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u8282\u7684\u5185\u5BB9\u662F\u8BB2\u5F53\u9519\u8BEF\u7684 <code>commit</code> \u5DF2\u7ECF\u88AB <code>push</code> \u4E0A\u53BB\u65F6\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5177\u4F53\u7684\u65B9\u6848\u6709\u4E24\u7C7B\uFF1A</p><ol><li>\u5982\u679C\u51FA\u9519\u5185\u5BB9\u5728\u79C1\u6709 <code>branch</code>\uFF1A\u5728\u672C\u5730\u628A\u5185\u5BB9\u4FEE\u6B63\u540E\uFF0C\u5F3A\u5236 <code>push</code> (<code>push -f</code>\uFF09\u4E00\u6B21\u5C31\u53EF\u4EE5\u89E3\u51B3\uFF1B</li><li>\u5982\u679C\u51FA\u9519\u5185\u5BB9\u5728 <code>master</code>\uFF1A\u4E0D\u8981\u5F3A\u5236 <code>push</code>\uFF0C\u800C\u8981\u7528 <code>revert</code> \u628A\u5199\u9519\u7684 <code>commit</code> \u64A4\u9500\u3002</li></ol>`,22),t=[s];function p(r,i,n,h,l,m){return o(),c("div",null,t)}const g=e(d,[["render",p]]);export{u as __pageData,g as default};
