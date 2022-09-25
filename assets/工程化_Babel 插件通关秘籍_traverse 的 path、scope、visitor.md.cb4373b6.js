import{_ as s,c as a,o as n,d as p}from"./app.e5528619.js";const D=JSON.parse('{"title":"traverse \u7684 path\u3001scope\u3001visitor","description":"","frontmatter":{},"headers":[{"level":2,"title":"visitor \u6A21\u5F0F","slug":"visitor-\u6A21\u5F0F","link":"#visitor-\u6A21\u5F0F","children":[]},{"level":2,"title":"path \u548C scope","slug":"path-\u548C-scope","link":"#path-\u548C-scope","children":[{"level":3,"title":"path","slug":"path","link":"#path","children":[]},{"level":3,"title":"path \u7684\u65B9\u6CD5","slug":"path-\u7684\u65B9\u6CD5","link":"#path-\u7684\u65B9\u6CD5","children":[]},{"level":3,"title":"\u4F5C\u7528\u57DF path.scope","slug":"\u4F5C\u7528\u57DF-path-scope","link":"#\u4F5C\u7528\u57DF-path-scope","children":[]}]},{"level":2,"title":"state","slug":"state","link":"#state","children":[]},{"level":2,"title":"AST \u7684\u522B\u540D","slug":"ast-\u7684\u522B\u540D","link":"#ast-\u7684\u522B\u540D","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/traverse \u7684 path\u3001scope\u3001visitor.md"}'),l={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/traverse \u7684 path\u3001scope\u3001visitor.md"},e=p(`<h1 id="traverse-\u7684-path\u3001scope\u3001visitor" tabindex="-1">traverse \u7684 path\u3001scope\u3001visitor <a class="header-anchor" href="#traverse-\u7684-path\u3001scope\u3001visitor" aria-hidden="true">#</a></h1><hr><p>\u6E90\u7801 parse \u6210 AST \u4E4B\u540E\uFF0C\u9700\u8981\u8FDB\u884C AST \u7684\u904D\u5386\u548C\u589E\u5220\u6539\uFF08transform\uFF09\u3002\u90A3\u4E48 transform \u7684\u6D41\u7A0B\u662F\u4EC0\u4E48\u6837\u7684\uFF1F</p><p>babel \u4F1A\u9012\u5F52\u904D\u5386 AST\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u5904\u7406\u5230\u4E0D\u540C\u7684 AST \u4F1A\u8C03\u7528\u4E0D\u540C\u7684 visitor \u51FD\u6570\u6765\u5B9E\u73B0 transform\u3002\u8FD9\u5176\u5B9E\u662F\u4E00\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u53EB\u505A\u8BBF\u95EE\u8005\u6A21\u5F0F\uFF1A</p><h2 id="visitor-\u6A21\u5F0F" tabindex="-1">visitor \u6A21\u5F0F <a class="header-anchor" href="#visitor-\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>visitor \u6A21\u5F0F\uFF08\u8BBF\u95EE\u8005\u6A21\u5F0F\uFF09\u662F 23 \u79CD\u7ECF\u5178\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u7684\u4E00\u79CD\u3002visitor \u6A21\u5F0F\u7684\u601D\u60F3\u662F\uFF1A\u5F53\u88AB\u64CD\u4F5C\u7684\u5BF9\u8C61\u7ED3\u6784\u6BD4\u8F83\u7A33\u5B9A\uFF0C\u800C\u64CD\u4F5C\u5BF9\u8C61\u7684\u903B\u8F91\u7ECF\u5E38\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u5206\u79BB\u903B\u8F91\u548C\u5BF9\u8C61\u7ED3\u6784\uFF0C\u4F7F\u5F97\u4ED6\u4EEC\u80FD\u72EC\u7ACB\u6269\u5C55\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a89899432b549d198a98f404e791a97~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u5982\u56FE\uFF0CElement \u548C Visitor \u5206\u522B\u4EE3\u8868\u5BF9\u8C61\u7ED3\u6784\u548C\u64CD\u4F5C\u903B\u8F91\uFF0C\u4E24\u8005\u53EF\u4EE5\u72EC\u7ACB\u6269\u5C55\uFF0C\u5728 Client \u91CC\u9762\u6765\u7EC4\u5408\u4E24\u8005\uFF0C\u4F7F\u7528 visitor \u64CD\u4F5C element\u3002\u8FD9\u5C31\u662F visitor \u6A21\u5F0F\u3002</p><p>\u5BF9\u5E94\u5230 babel traverse \u7684\u5B9E\u73B0\uFF0C\u5C31\u662F AST \u548C visitor \u5206\u79BB\uFF0C\u5728 traverse\uFF08\u904D\u5386\uFF09AST \u7684\u65F6\u5019\uFF0C\u8C03\u7528\u6CE8\u518C\u7684 visitor \u6765\u5BF9\u5176\u8FDB\u884C\u5904\u7406\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c592dedef6ff429ebbcb350e0afa404d~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>\u8FD9\u6837 AST \u662F\u72EC\u7ACB\u7684\u6269\u5C55\u7684\uFF0Cvisitor \u662F\u72EC\u7ACB\u7684\u6269\u5C55\u7684\uFF0C\u4E24\u8005\u53EF\u4EE5\u5404\u81EA\u72EC\u7ACB\u6269\u5C55\u5355\u8FD8\u80FD\u8F7B\u6613\u5730\u7ED3\u5408\u5728\u4E00\u8D77\u3002</p><h2 id="path-\u548C-scope" tabindex="-1">path \u548C scope <a class="header-anchor" href="#path-\u548C-scope" aria-hidden="true">#</a></h2><p>path \u662F\u8BB0\u5F55\u904D\u5386\u8DEF\u5F84\u7684 api\uFF0C\u5B83\u8BB0\u5F55\u4E86\u7236\u5B50\u8282\u70B9\u7684\u5F15\u7528\uFF0C\u8FD8\u6709\u5F88\u591A\u589E\u5220\u6539\u67E5 AST \u7684 api\uFF1A</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/293327a616cc4c90b7fa40c7e28761a0~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u90A3 path \u5927\u6982\u6709\u54EA\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\u5462\uFF1F</p><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-hidden="true">#</a></h3><p>path \u5927\u6982\u6709\u8FD9\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E0D\u9700\u8981\u8BB0\uFF0C\u540E\u9762\u6848\u4F8B\u7528\u5230\u7684\u65F6\u5019\u77E5\u9053\u662F\u5565\u5C31\u884C\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">path </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5C5E\u6027\uFF1A</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">parent</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">parentPath</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scope</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">hub</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">container</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">listKey</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">inList</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getSibling</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getNextSibling</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getPrevSibling</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getAllPrevSiblings</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getAllNextSiblings</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">isXxx</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">assertXxx</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">find</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">findParent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">insertBefore</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nodes</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">insertAfter</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nodes</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">replaceWith</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">replacement</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">replaceWithMultiple</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nodes</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">replaceWithSourceString</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">replacement</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">traverse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">visitor</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">skip</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">stop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u4EEC\u5404\u81EA\u7684\u542B\u4E49\uFF1A</p><ul><li>path.node \u5F53\u524D AST \u8282\u70B9</li><li>path.parent \u7236 AST \u8282\u70B9</li><li>path.parentPath \u7236 AST \u8282\u70B9\u7684 path</li><li>path.scope \u4F5C\u7528\u57DF</li><li>path.hub \u53EF\u4EE5\u901A\u8FC7 path.hub.file \u62FF\u5230\u6700\u5916\u5C42 File \u5BF9\u8C61\uFF0C path.hub.getScope \u62FF\u5230\u6700\u5916\u5C42\u4F5C\u7528\u57DF\uFF0Cpath.hub.getCode \u62FF\u5230\u6E90\u7801\u5B57\u7B26\u4E32</li><li>path.container \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7684\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u503C</li><li>path.key \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u6216\u6240\u5728\u6570\u7EC4\u7684\u4E0B\u6807</li><li>path.listkey \u5F53\u524D AST \u8282\u70B9\u6240\u5728\u7236\u8282\u70B9\u5C5E\u6027\u7684\u5C5E\u6027\u503C\u4E3A\u6570\u7EC4\u65F6 listkey \u4E3A\u8BE5\u5C5E\u6027\u540D\uFF0C\u5426\u5219\u4E3A undefined</li></ul><h4 id="container\u3001listkey\u3001key" tabindex="-1">container\u3001listkey\u3001key <a class="header-anchor" href="#container\u3001listkey\u3001key" aria-hidden="true">#</a></h4><p>\u8FD9\u51E0\u4E2A\u5C5E\u6027\u4E0D\u592A\u5E38\u7528\uFF0C\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u3002</p><p>\u56E0\u4E3A AST \u8282\u70B9\u8981\u6302\u5728\u7236 AST \u8282\u70B9\u7684\u67D0\u4E2A\u5C5E\u6027\u4E0A\uFF0C\u90A3\u4E2A\u5C5E\u6027\u7684\u5C5E\u6027\u503C\u5C31\u662F\u8FD9\u4E2A AST \u8282\u70B9\u7684 container\u3002</p><p>\u6BD4\u5982 CallExpression \u6709 callee \u548C arguments \u5C5E\u6027\uFF0C\u90A3\u4E48\u5BF9\u4E8E callee \u7684 AST \u8282\u70B9\u6765\u8BF4\uFF0Ccallee \u7684\u5C5E\u6027\u503C\u5C31\u662F\u5B83\u7684 container\uFF0C\u800C callee \u5C31\u662F\u5B83\u7684 key\u3002</p><p>\u56E0\u4E3A\u4E0D\u662F\u4E00\u4E2A\u5217\u8868\uFF0C\u6240\u4EE5 listkey \u662F undefined\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ce55f6c749d4e35ad6460de6f5be71a~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u800C BlockStatement \u6709 body \u5C5E\u6027\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A AST \u6765\u8BF4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u5C31\u662F\u5B83\u4EEC\u7684 container\uFF0C\u800C listKey \u662F body\uFF0Ckey \u5219\u662F\u4E0B\u6807\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48a0cdddb4344d1b9343e04818460ad~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="path-\u7684\u65B9\u6CD5" tabindex="-1">path \u7684\u65B9\u6CD5 <a class="header-anchor" href="#path-\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>path \u6709\u5982\u4E0B\u65B9\u6CD5\uFF0C\u540C\u6837\u4E5F\u4E0D\u9700\u8981\u8BB0\uFF1A</p><ul><li>get(key) \u83B7\u53D6\u67D0\u4E2A\u5C5E\u6027\u7684 path</li><li>set(key, node) \u8BBE\u7F6E\u67D0\u4E2A\u5C5E\u6027\u7684\u503C</li><li>getSibling(key) \u83B7\u53D6\u67D0\u4E2A\u4E0B\u6807\u7684\u5144\u5F1F\u8282\u70B9</li><li>getNextSibling() \u83B7\u53D6\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</li><li>getPrevSibling() \u83B7\u53D6\u4E0A\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9</li><li>getAllPrevSiblings() \u83B7\u53D6\u4E4B\u524D\u7684\u6240\u6709\u5144\u5F1F\u8282\u70B9</li><li>getAllNextSiblings() \u83B7\u53D6\u4E4B\u540E\u7684\u6240\u6709\u5144\u5F1F\u8282\u70B9</li><li>find(callback) \u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6839\u8282\u70B9\u6765\u67E5\u627E\u8282\u70B9\uFF08\u5305\u62EC\u5F53\u524D\u8282\u70B9\uFF09\uFF0C\u8C03\u7528 callback\uFF08\u4F20\u5165 path\uFF09\u6765\u51B3\u5B9A\u662F\u5426\u7EC8\u6B62\u67E5\u627E</li><li>findParent(callback) \u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6839\u8282\u70B9\u6765\u67E5\u627E\u8282\u70B9\uFF08\u4E0D\u5305\u62EC\u5F53\u524D\u8282\u70B9\uFF09\uFF0C\u8C03\u7528 callback\uFF08\u4F20\u5165 path\uFF09\u6765\u51B3\u5B9A\u662F\u5426\u7EC8\u6B62\u67E5\u627E</li><li>inList() \u5224\u65AD\u8282\u70B9\u662F\u5426\u5728\u6570\u7EC4\u4E2D\uFF0C\u5982\u679C container \u4E3A\u6570\u7EC4\uFF0C\u4E5F\u5C31\u662F\u6709 listkey \u7684\u65F6\u5019\uFF0C\u8FD4\u56DE true</li><li>isXxx(opts) \u5224\u65AD\u5F53\u524D\u8282\u70B9\u662F\u5426\u662F\u67D0\u4E2A\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F20\u5165\u5C5E\u6027\u548C\u5C5E\u6027\u503C\u8FDB\u4E00\u6B65\u5224\u65AD\uFF0C\u6BD4\u5982path.isIdentifier({name: &#39;a&#39;})</li><li>assertXxx(opts) \u540C isXxx\uFF0C\u4F46\u662F\u4E0D\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u800C\u662F\u629B\u51FA\u5F02\u5E38</li><li>insertBefore(nodes) \u5728\u4E4B\u524D\u63D2\u5165\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u5355\u4E2A\u8282\u70B9\u6216\u8005\u8282\u70B9\u6570\u7EC4</li><li>insertAfter(nodes) \u5728\u4E4B\u540E\u63D2\u5165\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u5355\u4E2A\u8282\u70B9\u6216\u8005\u8282\u70B9\u6570\u7EC4</li><li>replaceWith(replacement) \u7528\u67D0\u4E2A\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9</li><li>replaceWithMultiple(nodes) \u7528\u591A\u4E2A\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9</li><li>replaceWithSourceString(replacement) \u89E3\u6790\u6E90\u7801\u6210 AST\uFF0C\u7136\u540E\u66FF\u6362\u5F53\u524D\u8282\u70B9</li><li>remove() \u5220\u9664\u5F53\u524D\u8282\u70B9</li><li>traverse(visitor, state) \u904D\u5386\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u4F20\u5165 visitor \u548C state\uFF08state \u662F\u4E0D\u540C\u8282\u70B9\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\uFF09</li><li>skip() \u8DF3\u8FC7\u5F53\u524D\u8282\u70B9\u7684\u5B50\u8282\u70B9\u7684\u904D\u5386</li><li>stop() \u7ED3\u675F\u6240\u6709\u904D\u5386</li></ul><h3 id="\u4F5C\u7528\u57DF-path-scope" tabindex="-1">\u4F5C\u7528\u57DF path.scope <a class="header-anchor" href="#\u4F5C\u7528\u57DF-path-scope" aria-hidden="true">#</a></h3><p>scope \u662F\u4F5C\u7528\u57DF\u4FE1\u606F\uFF0Cjavascript \u4E2D\u80FD\u751F\u6210\u4F5C\u7528\u57DF\u7684\u5C31\u662F\u6A21\u5757\u3001\u51FD\u6570\u3001\u5757\u7B49\uFF0C\u800C\u4E14\u4F5C\u7528\u57DF\u4E4B\u95F4\u4F1A\u5F62\u6210\u5D4C\u5957\u5173\u7CFB\uFF0C\u4E5F\u5C31\u662F\u4F5C\u7528\u57DF\u94FE\u3002babel \u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u6210\u4F5C\u7528\u57DF\u94FE\u4FDD\u5B58\u5728 path.scope \u4E2D\u3002</p><p>\u5C5E\u6027\u548C\u65B9\u6CD5\u5927\u6982\u6709\u8FD9\u4E9B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">path.scope {</span></span>
<span class="line"><span style="color:#A6ACCD;">    bindings</span></span>
<span class="line"><span style="color:#A6ACCD;">    block</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentBlock</span></span>
<span class="line"><span style="color:#A6ACCD;">    path</span></span>
<span class="line"><span style="color:#A6ACCD;">    references</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    dump()</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentBlock()</span></span>
<span class="line"><span style="color:#A6ACCD;">    getAllBindings()</span></span>
<span class="line"><span style="color:#A6ACCD;">    getBinding(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    hasBinding(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    getOwnBinding(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentHasBinding(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeBinding(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    moveBindingTo(name, scope)</span></span>
<span class="line"><span style="color:#A6ACCD;">    generateUid(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5404\u81EA\u7684\u542B\u4E49\uFF1A</p><ul><li>scope.bindings \u5F53\u524D\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u7684\u6240\u6709\u53D8\u91CF</li><li>scope.block \u751F\u6210\u4F5C\u7528\u57DF\u7684 block\uFF0C\u8BE6\u89C1\u4E0B\u6587</li><li>scope.path \u751F\u6210\u4F5C\u7528\u57DF\u7684\u8282\u70B9\u5BF9\u5E94\u7684 path</li><li>scope.references \u6240\u6709 binding \u7684\u5F15\u7528\u5BF9\u5E94\u7684 path\uFF0C\u8BE6\u89C1\u4E0B\u6587</li><li>scope.dump() \u6253\u5370\u4F5C\u7528\u57DF\u94FE\u7684\u6240\u6709 binding \u5230\u63A7\u5236\u53F0</li><li>scope.parentBlock() \u7236\u7EA7\u4F5C\u7528\u57DF\u7684 block</li><li>getAllBindings() \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u5230\u6839\u4F5C\u7528\u57DF\u7684\u6240\u6709 binding \u7684\u5408\u5E76</li><li>getBinding(name) \u67E5\u627E\u67D0\u4E2A binding\uFF0C\u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u4E00\u76F4\u67E5\u627E\u5230\u6839\u4F5C\u7528\u57DF</li><li>getOwnBinding(name) \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E binding</li><li>parentHasBinding(name, noGlobals) \u67E5\u627E\u67D0\u4E2A binding\uFF0C\u4ECE\u7236\u4F5C\u7528\u57DF\u67E5\u5230\u6839\u4F5C\u7528\u57DF\uFF0C\u4E0D\u5305\u62EC\u5F53\u524D\u4F5C\u7528\u57DF\u3002\u53EF\u4EE5\u901A\u8FC7 noGlobals \u53C2\u6570\u6307\u5B9A\u662F\u5426\u7B97\u4E0A\u5168\u5C40\u53D8\u91CF\uFF08\u6BD4\u5982console\uFF0C\u4E0D\u9700\u8981\u58F0\u660E\u5C31\u53EF\u7528\uFF09\uFF0C\u9ED8\u8BA4\u662F false</li><li>removeBinding(name) \u5220\u9664\u67D0\u4E2A binding</li><li>hasBinding(name, noGlobals) \u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u67E5\u627E binding\uFF0C\u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u7B97\u4E0A\u5168\u5C40\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u662F false</li><li>moveBindingTo(name, scope) \u628A\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u7684\u67D0\u4E2A binding \u79FB\u52A8\u5230\u5176\u4ED6\u4F5C\u7528\u57DF</li><li>generateUid(name) \u751F\u6210\u4F5C\u7528\u57DF\u5185\u552F\u4E00\u7684\u540D\u5B57\uFF0C\u6839\u636E name \u6DFB\u52A0\u4E0B\u5212\u7EBF\uFF0C\u6BD4\u5982 name \u4E3A a\uFF0C\u4F1A\u5C1D\u8BD5\u751F\u6210 _a\uFF0C\u5982\u679C\u88AB\u5360\u7528\u5C31\u4F1A\u751F\u6210 __a\uFF0C\u76F4\u5230\u751F\u6210\u6CA1\u6709\u88AB\u4F7F\u7528\u7684\u540D\u5B57\u3002</li></ul><h4 id="scope-block" tabindex="-1">scope.block <a class="header-anchor" href="#scope-block" aria-hidden="true">#</a></h4><p>\u80FD\u5F62\u6210 scope \u7684\u6709\u8FD9\u4E9B\u8282\u70B9\uFF0C\u8FD9\u4E9B\u8282\u70B9\u4E5F\u53EB block \u8282\u70B9\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scopable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BlockStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CatchClause</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DoWhileStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ForInStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ForStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionDeclaration</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionExpression</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ObjectMethod</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SwitchStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WhileStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ArrowFunctionExpression</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassExpression</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassDeclaration</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ForOfStatement</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassMethod</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassPrivateMethod</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StaticBlock</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TSModuleBlock</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 path.scope.block \u6765\u62FF\u5230\u6240\u5728\u7684\u5757\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u901A\u8FC7 path.scope.parentBlock \u62FF\u5230\u7236\u4F5C\u7528\u57DF\u5BF9\u5E94\u7684\u5757\u8282\u70B9\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u4E0D\u9700\u8981\u62FF\u5230\u751F\u6210\u4F5C\u7528\u57DF\u7684\u5757\u8282\u70B9\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 path.scope \u62FF\u5230\u4F5C\u7528\u57DF\u7684\u4FE1\u606F\uFF0C\u901A\u8FC7 path.scope.parent \u62FF\u5230\u7236\u4F5C\u7528\u57DF\u7684\u4FE1\u606F\u3002</p><h4 id="scope-bindings\u3001scope-references\uFF08\u91CD\u70B9\uFF09" tabindex="-1">scope.bindings\u3001scope.references\uFF08\u91CD\u70B9\uFF09 <a class="header-anchor" href="#scope-bindings\u3001scope-references\uFF08\u91CD\u70B9\uFF09" aria-hidden="true">#</a></h4><p>\u4F5C\u7528\u57DF\u4E2D\u4FDD\u5B58\u7684\u662F\u58F0\u660E\u7684\u53D8\u91CF\u548C\u5BF9\u5E94\u7684\u503C\uFF0C<strong>\u6BCF\u4E00\u4E2A\u58F0\u660E\u53EB\u505A\u4E00\u4E2Abinding</strong>\u3002</p><p>\u6BD4\u5982\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5B83\u7684 path.scope.bindings \u662F\u8FD9\u6837\u7684</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FFCB6B;">bindings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">constant</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">constantViolations</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">identifier</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Identifier</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">kind</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">const</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">,...}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">referenced</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">referencePaths</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">references</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">scope</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u4E3A\u6211\u4EEC\u5728\u5F53\u524D scope \u4E2D\u58F0\u660E\u4E86 a \u8FD9\u4E2A\u53D8\u91CF\uFF0C\u6240\u4EE5 bindings \u4E2D\u6709 a \u7684 binding\uFF0C\u6BCF\u4E00\u4E2A binding \u90FD\u6709 kind\uFF0C\u8FD9\u4EE3\u8868\u7ED1\u5B9A\u7684\u7C7B\u578B\uFF1A</p><ul><li>var\u3001let\u3001const \u5206\u522B\u4EE3\u8868 var\u3001let\u3001const \u5F62\u5F0F\u58F0\u660E\u7684\u53D8\u91CF</li><li>param \u4EE3\u8868\u53C2\u6570\u7684\u58F0\u660E</li><li>module \u4EE3\u8868 import \u7684\u53D8\u91CF\u7684\u58F0\u660E</li></ul><p>binding \u6709\u591A\u79CD kind\uFF0C\u4EE3\u8868\u53D8\u91CF\u662F\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u58F0\u660E\u7684\u3002</p><p>binding.identifier \u548C binding.path\uFF0C\u5206\u522B\u4EE3\u8868\u6807\u8BC6\u7B26\u3001\u6574\u4E2A\u58F0\u660E\u8BED\u53E5\u3002</p><p>\u58F0\u660E\u4E4B\u540E\u7684\u53D8\u91CF\u4F1A\u88AB\u5F15\u7528\u548C\u4FEE\u6539\uFF0Cbinding.referenced \u4EE3\u8868\u58F0\u660E\u7684\u53D8\u91CF\u662F\u5426\u88AB\u5F15\u7528\uFF0Cbinding.constant \u4EE3\u8868\u53D8\u91CF\u662F\u5426\u88AB\u4FEE\u6539\u8FC7\u3002\u5982\u679C\u88AB\u5F15\u7528\u4E86\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7 binding.referencePaths \u62FF\u5230\u6240\u6709\u5F15\u7528\u7684\u8BED\u53E5\u7684 path\u3002\u5982\u679C\u88AB\u4FEE\u6539\u4E86\uFF0C\u53EF\u4EE5\u901A\u8FC7 binding.constViolations \u62FF\u5230\u6240\u6709\u4FEE\u6539\u7684\u8BED\u53E5\u7684 path\u3002</p><p>path \u7684 api \u8FD8\u662F\u6BD4\u8F83\u591A\u7684\uFF0C\u8FD9\u4E5F\u662F babel \u6700\u5F3A\u5927\u7684\u5730\u65B9\u3002\u4E3B\u8981\u662F\u64CD\u4F5C\u5F53\u524D\u8282\u70B9\u3001\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9\u3001\u5144\u5F1F\u8282\u70B9\uFF0C\u4F5C\u7528\u57DF\uFF0C\u4EE5\u53CA\u589E\u5220\u6539\u7684\u65B9\u6CD5\u3002</p><h2 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h2><p>state \u662F\u904D\u5386\u8FC7\u7A0B\u4E2D AST \u8282\u70B9\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u7684\u65B9\u5F0F\u3002\u63D2\u4EF6\u7684 visitor \u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F path\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C31\u662F state\u3002</p><p>\u63D2\u4EF6\u53EF\u4EE5\u4ECE state \u4E2D\u62FF\u5230 opts\uFF0C\u4E5F\u5C31\u662F\u63D2\u4EF6\u7684\u914D\u7F6E\u9879\uFF0C\u4E5F\u53EF\u4EE5\u62FF\u5230 file \u5BF9\u8C61\uFF0Cfile \u4E2D\u6709\u4E00\u4E9B\u6587\u4EF6\u7EA7\u522B\u7684\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u4E5F\u53EF\u4EE5\u4ECE path.hub.file \u4E2D\u62FF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">state {</span></span>
<span class="line"><span style="color:#A6ACCD;">    file</span></span>
<span class="line"><span style="color:#A6ACCD;">    opts</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u5728 state \u4E2D\u5B58\u4E00\u4E9B\u72B6\u6001\u4FE1\u606F\uFF0C\u7528\u4E8E\u540E\u7EED\u7684 AST \u5904\u7406\u3002</p><h2 id="ast-\u7684\u522B\u540D" tabindex="-1">AST \u7684\u522B\u540D <a class="header-anchor" href="#ast-\u7684\u522B\u540D" aria-hidden="true">#</a></h2><p>\u904D\u5386\u7684\u65F6\u5019\u8981\u6307\u5B9A visitor \u5904\u7406\u7684 AST\uFF0C\u6709\u7684\u65F6\u5019\u9700\u8981\u5BF9\u591A\u4E2A\u8282\u70B9\u505A\u540C\u6837\u7684\u5904\u7406\uFF0Cbabel \u652F\u6301\u6307\u5B9A\u591A\u4E2A AST \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u522B\u540D\u6307\u5B9A\u4E00\u7CFB\u5217\u7C7B\u578B\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5355\u4E2A AST \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">FunctionDeclaration</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state) </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u591A\u4E2A AST \u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FunctionDeclaration|VariableDeclaration</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> state) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// AST \u7C7B\u578B\u522B\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Declaration</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u5728<a href="https://babeljs.io/docs/en/babel-types" target="_blank" rel="noreferrer">\u6587\u6863\u4E2D</a>\u67E5\u5230\u67D0\u4E2A AST \u7C7B\u578B\u7684\u522B\u540D\u662F\u5565\uFF0C\u67D0\u4E2A\u522B\u540D\u90FD\u5305\u542B\u54EA\u4E9B AST \u7C7B\u578B\u53EF\u4EE5\u5728<a href="https://github.com/babel/babel/blob/main/packages/babel-types/src/ast-types/generated/index.ts#L2489-L2535" target="_blank" rel="noreferrer">babel-types\u7684\u7C7B\u578B\u5B9A\u4E49</a>\u5904\u67E5\u3002</p><p>\u53EF\u4EE5\u628A @babel/types \u6E90\u7801\u4E0B\u8F7D\u4E0B\u6765\u770B\uFF0C\u7C7B\u578B\u5B9A\u4E49\u5728 src/ast-types/generated \u76EE\u5F55\u4E0B\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5229\u7528 ide \u7684\u529F\u80FD\u65B9\u4FBF\u7684\u67E5\u770B\u6BCF\u79CD alias \u7684\u5177\u4F53 AST \u7C7B\u578B\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ce124c18bd4e5c95760212e5e16078~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u6240\u6709\u7684 AST \u76F8\u5173\u7684\u4FE1\u606F\u90FD\u53EF\u4EE5\u5728<a href="https://github.com/babel/babel/blob/main/packages/babel-types/src/definitions/core.ts" target="_blank" rel="noreferrer">babel-types</a>\u91CC\u67E5\u770B\uFF0C\u6BCF\u4E00\u4E2A AST \u8282\u70B9\u600E\u4E48\u521B\u5EFA\u3001\u600E\u4E48\u6821\u9A8C\u3001\u600E\u4E48\u904D\u5386\uFF0C\u5176\u5B9E\u90FD\u4E0E AST \u7684\u7ED3\u6784\u6709\u5173\u7CFB\uFF0C\u8FD9\u4E9B\u90FD\u5728 babel-types \u91CC\u9762\u5B9A\u4E49\u3002</p><p>\u6BD4\u5982 if \u5C31\u5B9A\u4E49\u4E86\u6709\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u904D\u5386\u3001\u522B\u540D\u662F\u4EC0\u4E48\uFF0C\u6BCF\u4E00\u4E2A\u5C5E\u6027\u600E\u4E48\u6821\u9A8C\uFF0C\u7136\u540E\u4F1A\u6839\u636E\u8FD9\u4E9B\u89C4\u5219\u751F\u6210xxx\uFF0CisXxx\uFF0CassertXxx\u7B49api\u7528\u4E8E\u521B\u5EFA\u3001\u5224\u65ADAST\u8282\u70B9\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/004cb659aeaa4c749cfff6b2187383a4~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8282\u6211\u4EEC\u5B66\u4E60\u4E86 visitor \u6A21\u5F0F\uFF0C\u901A\u8FC7\u5BF9\u8C61\u548C\u64CD\u4F5C\u5206\u79BB\u7684\u65B9\u5F0F\u4F7F\u5F97 AST \u548C visitor \u53EF\u4EE5\u72EC\u7ACB\u6269\u5C55\uFF0C\u8FD8\u53EF\u4EE5\u8F7B\u6613\u7684\u7ED3\u5408\u5728\u4E00\u8D77\u3002</p><p>\u7136\u540E\u5B66\u4E60\u4E86 babel \u5F3A\u5927\u7684 path\uFF0C\u5305\u62EC\u5B83\u7684\u5C5E\u6027\u548C\u64CD\u4F5C AST \u7684 api\uFF0C\u4EE5\u53CA\u4F5C\u7528\u57DF scope \u7684\u4E00\u4E9B\u6982\u5FF5\u548C api\u3002</p><p>path \u7684 api \u6BD4\u8F83\u591A\uFF0C\u9A6C\u4E0A\u6D88\u5316\u4E0D\u592A\u73B0\u5B9E\uFF0C\u4E0D\u7528\u7740\u6025\uFF0C\u540E\u9762\u5B9E\u6218\u4F1A\u5927\u91CF\u7528\u5230\u3002</p>`,72),o=[e];function t(c,r,i,y,F,A){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{D as __pageData,d as default};
