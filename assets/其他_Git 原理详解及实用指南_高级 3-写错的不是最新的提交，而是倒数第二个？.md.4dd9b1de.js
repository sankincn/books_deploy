import{_ as e,c as o,o as c,d as a}from"./app.e5528619.js";const h=JSON.parse('{"title":"\u9AD8\u7EA7 3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"rebase -i\uFF1A\u4EA4\u4E92\u5F0F rebase","slug":"rebase-i\uFF1A\u4EA4\u4E92\u5F0F-rebase","link":"#rebase-i\uFF1A\u4EA4\u4E92\u5F0F-rebase","children":[{"level":3,"title":"\u5F00\u542F\u4EA4\u4E92\u5F0F rebase \u8FC7\u7A0B","slug":"\u5F00\u542F\u4EA4\u4E92\u5F0F-rebase-\u8FC7\u7A0B","link":"#\u5F00\u542F\u4EA4\u4E92\u5F0F-rebase-\u8FC7\u7A0B","children":[]},{"level":3,"title":"\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9 commit \u548C\u5BF9\u5E94\u7684\u64CD\u4F5C","slug":"\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9-commit-\u548C\u5BF9\u5E94\u7684\u64CD\u4F5C","link":"#\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9-commit-\u548C\u5BF9\u5E94\u7684\u64CD\u4F5C","children":[]},{"level":3,"title":"\u4FEE\u6539\u5199\u9519\u7684 commit","slug":"\u4FEE\u6539\u5199\u9519\u7684-commit","link":"#\u4FEE\u6539\u5199\u9519\u7684-commit","children":[]},{"level":3,"title":"\u7EE7\u7EED rebase \u8FC7\u7A0B","slug":"\u7EE7\u7EED-rebase-\u8FC7\u7A0B","link":"#\u7EE7\u7EED-rebase-\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F.md"}'),d={name:"\u5176\u4ED6/Git \u539F\u7406\u8BE6\u89E3\u53CA\u5B9E\u7528\u6307\u5357/\u9AD8\u7EA7 3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F.md"},s=a(`<h1 id="\u9AD8\u7EA7-3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F" tabindex="-1">\u9AD8\u7EA7 3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-3-\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F" aria-hidden="true">#</a></h1><hr><h1 id="\u9AD8\u7EA7-3\uFF1A\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F" tabindex="-1">\u9AD8\u7EA7 3\uFF1A\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F <a class="header-anchor" href="#\u9AD8\u7EA7-3\uFF1A\u5199\u9519\u7684\u4E0D\u662F\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\uFF1F" aria-hidden="true">#</a></h1><p><code>commit \\--amend</code> \u53EF\u4EE5\u4FEE\u590D\u6700\u65B0 <code>commit</code> \u7684\u9519\u8BEF\uFF0C\u4F46\u5982\u679C\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A <code>commit</code> \u5199\u9519\u4E86\uFF0C\u600E\u4E48\u529E\uFF1F</p><h2 id="rebase-i\uFF1A\u4EA4\u4E92\u5F0F-rebase" tabindex="-1">rebase -i\uFF1A\u4EA4\u4E92\u5F0F rebase <a class="header-anchor" href="#rebase-i\uFF1A\u4EA4\u4E92\u5F0F-rebase" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E0D\u662F\u6700\u65B0\u7684 <code>commit</code> \u5199\u9519\uFF0C\u5C31\u4E0D\u80FD\u7528 <code>commit \\--amend</code> \u6765\u4FEE\u590D\u4E86\uFF0C\u800C\u662F\u8981\u7528 <code>rebase</code>\u3002\u4E0D\u8FC7\u9700\u8981\u7ED9 <code>rebase</code> \u4E5F\u52A0\u4E00\u4E2A\u53C2\u6570\uFF1A<code>-i</code>\u3002</p><p><code>rebase \\-i</code> \u662F <code>rebase \\--interactive</code> \u7684\u7F29\u5199\u5F62\u5F0F\uFF0C\u610F\u4E3A\u300C\u4EA4\u4E92\u5F0F rebase\u300D\u3002</p><p>\u6240\u8C13\u300C\u4EA4\u4E92\u5F0F rebase\u300D\uFF0C\u5C31\u662F\u5728 <code>rebase</code> \u7684\u64CD\u4F5C\u6267\u884C\u4E4B\u524D\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A\u8981 <code>rebase</code> \u7684 <code>commit</code> \u94FE\u4E2D\u7684\u6BCF\u4E00\u4E2A <code>commit</code> \u662F\u5426\u9700\u8981\u8FDB\u4E00\u6B65\u4FEE\u6539\u3002</p><p>\u90A3\u4E48\u4F60\u5C31\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u7279\u70B9\uFF0C\u8FDB\u884C\u4E00\u6B21\u300C\u539F\u5730 rebase\u300D\u3002</p><p>\u4F8B\u5982\u4F60\u662F\u5728\u5199\u9519\u4E86 <code>commit</code> \u4E4B\u540E\uFF0C\u53C8\u63D0\u4EA4\u4E86\u4E00\u6B21\u624D\u53D1\u73B0\u4E4B\u524D\u5199\u9519\u4E86\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd00a27f45~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="\u5F00\u542F\u4EA4\u4E92\u5F0F-rebase-\u8FC7\u7A0B" tabindex="-1">\u5F00\u542F\u4EA4\u4E92\u5F0F rebase \u8FC7\u7A0B <a class="header-anchor" href="#\u5F00\u542F\u4EA4\u4E92\u5F0F-rebase-\u8FC7\u7A0B" aria-hidden="true">#</a></h3><p>\u73B0\u5728\u518D\u7528 <code>commit \\--amend</code> \u5DF2\u7ECF\u665A\u4E86\uFF0C\u4F46\u53EF\u4EE5\u7528 <code>rebase \\-i</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git rebase -i HEAD^^</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u8BF4\u660E\uFF1A\u5728 Git \u4E2D\uFF0C\u6709\u4E24\u4E2A\u300C\u504F\u79FB\u7B26\u53F7\u300D\uFF1A <code>^</code> \u548C <code>~</code>\u3002</p><p><code>^</code> \u7684\u7528\u6CD5\uFF1A\u5728 <code>commit</code> \u7684\u540E\u9762\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A <code>^</code> \u53F7\uFF0C\u53EF\u4EE5\u628A <code>commit</code> \u5F80\u56DE\u504F\u79FB\uFF0C\u504F\u79FB\u7684\u6570\u91CF\u662F <code>^</code> \u7684\u6570\u91CF\u3002\u4F8B\u5982\uFF1A<code>master^</code> \u8868\u793A <code>master</code> \u6307\u5411\u7684 <code>commit</code> \u4E4B\u524D\u7684\u90A3\u4E2A <code>commit</code>\uFF1B <code>HEAD^^</code> \u8868\u793A <code>HEAD</code> \u6240\u6307\u5411\u7684 <code>commit</code> \u5F80\u524D\u6570\u4E24\u4E2A <code>commit</code>\u3002</p><p><code>~</code> \u7684\u7528\u6CD5\uFF1A\u5728 <code>commit</code> \u7684\u540E\u9762\u52A0\u4E0A <code>~</code> \u53F7\u548C\u4E00\u4E2A\u6570\uFF0C\u53EF\u4EE5\u628A <code>commit</code> \u5F80\u56DE\u504F\u79FB\uFF0C\u504F\u79FB\u7684\u6570\u91CF\u662F <code>~</code> \u53F7\u540E\u9762\u7684\u6570\u3002\u4F8B\u5982\uFF1A<code>HEAD~5</code> \u8868\u793A <code>HEAD</code> \u6307\u5411\u7684 <code>commit</code>\u5F80\u524D\u6570 5 \u4E2A <code>commit</code>\u3002</p></blockquote><p>\u4E0A\u9762\u8FD9\u884C\u4EE3\u7801\u8868\u793A\uFF0C\u628A\u5F53\u524D <code>commit</code> \uFF08 <code>HEAD</code> \u6240\u6307\u5411\u7684 <code>commit</code>\uFF09 <code>rebase</code> \u5230 <code>HEAD</code> \u4E4B\u524D 2 \u4E2A\u7684 <code>commit</code> \u4E0A\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd00522381~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5982\u679C\u6CA1\u6709 <code>-i</code> \u53C2\u6570\u7684\u8BDD\uFF0C\u8FD9\u79CD\u300C\u539F\u5730 rebase\u300D\u76F8\u5F53\u4E8E\u7A7A\u64CD\u4F5C\uFF0C\u4F1A\u76F4\u63A5\u7ED3\u675F\u3002\u800C\u5728\u52A0\u4E86 <code>-i</code> \u540E\uFF0C\u5C31\u4F1A\u8DF3\u5230\u4E00\u4E2A\u65B0\u7684\u754C\u9762\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd04f46d6e~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9-commit-\u548C\u5BF9\u5E94\u7684\u64CD\u4F5C" tabindex="-1">\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9 commit \u548C\u5BF9\u5E94\u7684\u64CD\u4F5C <a class="header-anchor" href="#\u7F16\u8F91\u754C\u9762\uFF1A\u9009\u62E9-commit-\u548C\u5BF9\u5E94\u7684\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u7F16\u8F91\u754C\u9762\u7684\u6700\u9876\u90E8\uFF0C\u5217\u51FA\u4E86\u5C06\u8981\u300C\u88AB rebase\u300D\u7684\u6240\u6709 <code>commit</code>s\uFF0C\u4E5F\u5C31\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A <code>commit</code> \u300C\u589E\u52A0\u5E38\u89C1\u7B11\u58F0\u96C6\u5408\u300D\u548C\u6700\u65B0\u7684 <code>commit</code>\u300C\u589E\u52A0\u5E38\u89C1\u54ED\u58F0\u96C6\u5408\u300D\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u6392\u5217\u662F\u6B63\u5E8F\u7684\uFF0C\u65E7\u7684 <code>commit</code> \u4F1A\u6392\u5728\u4E0A\u9762\uFF0C\u65B0\u7684\u6392\u5728\u4E0B\u9762\u3002</p><p>\u8FD9\u4E24\u884C\u6307\u793A\u4E86\u4E24\u4E2A\u4FE1\u606F\uFF1A</p><ol><li>\u9700\u8981\u5904\u7406\u54EA\u4E9B <code>commit</code>s\uFF1B</li><li>\u600E\u4E48\u5904\u7406\u5B83\u4EEC\u3002</li></ol><p>\u4F60\u9700\u8981\u4FEE\u6539\u8FD9\u4E24\u884C\u7684\u5185\u5BB9\u6765\u6307\u5B9A\u4F60\u9700\u8981\u7684\u64CD\u4F5C\u3002\u6BCF\u4E2A <code>commit</code> \u9ED8\u8BA4\u7684\u64CD\u4F5C\u90FD\u662F <code>pick</code> \uFF08\u4ECE\u56FE\u4E2D\u4E5F\u53EF\u4EE5\u770B\u51FA\uFF09\uFF0C\u8868\u793A\u300C\u76F4\u63A5\u5E94\u7528\u8FD9\u4E2A <code>commit</code>\u300D\u3002\u6240\u4EE5\u5982\u679C\u4F60\u73B0\u5728\u76F4\u63A5\u9000\u51FA\u7F16\u8F91\u754C\u9762\uFF0C\u90A3\u4E48\u7ED3\u679C\u4ECD\u7136\u662F\u7A7A\u64CD\u4F5C\u3002</p><p>\u4F46\u4F60\u7684\u76EE\u6807\u662F\u4FEE\u6539\u5012\u6570\u7B2C\u4E8C\u4E2A <code>commit</code>\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u90A3\u4E2A\u300C\u589E\u52A0\u5E38\u89C1\u7B11\u58F0\u96C6\u5408\u300D\uFF0C\u6240\u4EE5\u4F60\u9700\u8981\u628A\u5B83\u7684\u64CD\u4F5C\u6307\u4EE4\u4ECE <code>pick</code> \u6539\u6210 <code>edit</code> \u3002 <code>edit</code> \u7684\u610F\u601D\u662F\u300C\u5E94\u7528\u8FD9\u4E2A commit\uFF0C\u7136\u540E\u505C\u4E0B\u6765\u7B49\u5F85\u7EE7\u7EED\u4FEE\u6B63\u300D\u3002\u5176\u4ED6\u7684\u64CD\u4F5C\u6307\u4EE4\uFF0C\u5728\u8FD9\u4E2A\u754C\u9762\u91CC\u90FD\u5DF2\u7ECF\u5217\u4E3E\u4E86\u51FA\u6765\uFF08\u4E0B\u9762\u7684 &quot;Commands\u2026&quot; \u90E8\u5206\u6587\u5B57\uFF09\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u7814\u7A76\u4E00\u4E0B\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd020c87f6~tplv-t2oaga2asx-image.image" alt=""></p><p>\u628A <code>pick</code> \u4FEE\u6539\u6210 <code>edit</code> \u540E\uFF0C\u5C31\u53EF\u4EE5\u9000\u51FA\u7F16\u8F91\u754C\u9762\u4E86\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd007159fa~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E0A\u56FE\u7684\u63D0\u793A\u4FE1\u606F\u8BF4\u660E\uFF0C<code>rebase</code> \u8FC7\u7A0B\u5DF2\u7ECF\u505C\u5728\u4E86\u7B2C\u4E8C\u4E2A <code>commit</code> \u7684\u4F4D\u7F6E\uFF0C\u90A3\u4E48\u73B0\u5728\u4F60\u5C31\u53EF\u4EE5\u53BB\u4FEE\u6539\u4F60\u60F3\u4FEE\u6539\u7684\u5185\u5BB9\u4E86\u3002</p><h3 id="\u4FEE\u6539\u5199\u9519\u7684-commit" tabindex="-1">\u4FEE\u6539\u5199\u9519\u7684 commit <a class="header-anchor" href="#\u4FEE\u6539\u5199\u9519\u7684-commit" aria-hidden="true">#</a></h3><p>\u4FEE\u6539\u5B8C\u6210\u4E4B\u540E\uFF0C\u548C\u4E0A\u8282\u91CC\u7684\u65B9\u6CD5\u4E00\u6837\uFF0C\u7528 <code>commit \\--amend</code> \u6765\u628A\u4FEE\u6B63\u5E94\u7528\u5230\u5F53\u524D\u6700\u65B0\u7684 <code>commit</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add \u7B11\u58F0</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd04de0d40~tplv-t2oaga2asx-image.image" alt=""></p><h3 id="\u7EE7\u7EED-rebase-\u8FC7\u7A0B" tabindex="-1">\u7EE7\u7EED rebase \u8FC7\u7A0B <a class="header-anchor" href="#\u7EE7\u7EED-rebase-\u8FC7\u7A0B" aria-hidden="true">#</a></h3><p>\u5728\u4FEE\u590D\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u7528 <code>rebase \\--continue</code> \u6765\u7EE7\u7EED <code>rebase</code> \u8FC7\u7A0B\uFF0C\u628A\u540E\u9762\u7684 <code>commit</code> \u76F4\u63A5\u5E94\u7528\u4E0A\u53BB\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git rebase --continue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd54455c29~tplv-t2oaga2asx-image.image" alt=""></p><p>\u7136\u540E\uFF0C\u8FD9\u6B21\u4EA4\u4E92\u5F0F <code>rebase</code> \u7684\u8FC7\u7A0B\u5C31\u5B8C\u7F8E\u7ED3\u675F\u4E86\uFF0C\u4F60\u7684\u90A3\u4E2A\u5012\u6570\u7B2C\u4E8C\u4E2A\u5199\u9519\u7684 <code>commit</code> \u5C31\u4E5F\u88AB\u4FEE\u6B63\u4E86\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/22/15fdf5fd4e7d5257~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5B9E\u8D28\u4E0A\uFF0C\u4EA4\u4E92\u5F0F <code>rebase</code> \u5E76\u4E0D\u662F\u5FC5\u987B\u5E94\u7528\u5728\u300C\u539F\u5730 rebase\u300D\u4E0A\u6765\u4FEE\u6539\u5199\u9519\u7684 <code>commit</code> \uFF0C\u8FD9\u53EA\u4E0D\u8FC7\u662F\u5B83\u6700\u5E38\u89C1\u7684\u7528\u6CD5\u3002\u4F60\u540C\u6837\u4E5F\u53EF\u4EE5\u628A\u5B83\u7528\u5728\u5206\u53C9\u7684 <code>commit</code> \u4E0A\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u4F60\u5C31\u53EF\u4EE5\u81EA\u5DF1\u53BB\u7814\u7A76\u4E00\u4E0B\u4E86\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u8282\u4ECB\u7ECD\u4E86\u4EA4\u4E92\u5F0F <code>rebase</code>\uFF0C\u5B83\u53EF\u4EE5\u5728 <code>rebase</code> \u5F00\u59CB\u4E4B\u524D\u6307\u5B9A\u4E00\u4E9B\u989D\u5916\u64CD\u4F5C\u3002\u4EA4\u4E92\u5F0F <code>rebase</code> \u6700\u5E38\u7528\u7684\u573A\u666F\u662F\u4FEE\u6539\u5199\u9519\u7684 <code>commit</code>\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u7528\u4F5C\u5176\u4ED6\u7528\u9014\u3002\u5B83\u7684\u5927\u81F4\u7528\u6CD5\uFF1A</p><ol><li>\u4F7F\u7528\u65B9\u5F0F\u662F <code>git rebase -i \u76EE\u6807commit</code>\uFF1B</li><li>\u5728\u7F16\u8F91\u754C\u9762\u4E2D\u6307\u5B9A\u9700\u8981\u64CD\u4F5C\u7684 <code>commit</code>s \u4EE5\u53CA\u64CD\u4F5C\u7C7B\u578B\uFF1B</li><li>\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\u7528 <code>git rebase --continue</code> \u6765\u7EE7\u7EED <code>rebase</code> \u8FC7\u7A0B\u3002</li></ol>`,44),t=[s];function i(m,p,r,l,n,g){return c(),o("div",null,t)}const _=e(d,[["render",i]]);export{h as __pageData,_ as default};
