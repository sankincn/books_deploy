import{_ as e,c as a,o as s,d as i}from"./app.e5528619.js";const y=JSON.parse('{"title":"\u62D3\u5C55 4-\u671D\u751F\u66AE\u6B7B \u2014\u2014 \u8FC7\u671F\u7B56\u7565","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FC7\u671F\u7684 key \u96C6\u5408","slug":"\u8FC7\u671F\u7684-key-\u96C6\u5408","link":"#\u8FC7\u671F\u7684-key-\u96C6\u5408","children":[]},{"level":2,"title":"\u5B9A\u65F6\u626B\u63CF\u7B56\u7565","slug":"\u5B9A\u65F6\u626B\u63CF\u7B56\u7565","link":"#\u5B9A\u65F6\u626B\u63CF\u7B56\u7565","children":[]},{"level":2,"title":"\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565","slug":"\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565","link":"#\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565","children":[]}],"relativePath":"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 4-\u671D\u751F\u66AE\u6B7B \u2014\u2014 \u8FC7\u671F\u7B56\u7565.md"}'),d={name:"\u5176\u4ED6/Redis \u6DF1\u5EA6\u5386\u9669\uFF1A\u6838\u5FC3\u539F\u7406\u4E0E\u5E94\u7528\u5B9E\u8DF5/\u62D3\u5C55 4-\u671D\u751F\u66AE\u6B7B \u2014\u2014 \u8FC7\u671F\u7B56\u7565.md"},n=i(`<h1 id="\u62D3\u5C55-4-\u671D\u751F\u66AE\u6B7B-\u2014\u2014-\u8FC7\u671F\u7B56\u7565" tabindex="-1">\u62D3\u5C55 4-\u671D\u751F\u66AE\u6B7B \u2014\u2014 \u8FC7\u671F\u7B56\u7565 <a class="header-anchor" href="#\u62D3\u5C55-4-\u671D\u751F\u66AE\u6B7B-\u2014\u2014-\u8FC7\u671F\u7B56\u7565" aria-hidden="true">#</a></h1><hr><h1 id="\u62D3\u5C55-4\uFF1A\u671D\u751F\u66AE\u6B7B-\u2014\u2014-\u8FC7\u671F\u7B56\u7565" tabindex="-1">\u62D3\u5C55 4\uFF1A\u671D\u751F\u66AE\u6B7B \u2014\u2014 \u8FC7\u671F\u7B56\u7565 <a class="header-anchor" href="#\u62D3\u5C55-4\uFF1A\u671D\u751F\u66AE\u6B7B-\u2014\u2014-\u8FC7\u671F\u7B56\u7565" aria-hidden="true">#</a></h1><p>Redis \u6240\u6709\u7684\u6570\u636E\u7ED3\u6784\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u65F6\u95F4\u4E00\u5230\uFF0C\u5C31\u4F1A\u81EA\u52A8\u5220\u9664\u3002\u4F60\u53EF\u4EE5\u60F3\u8C61 Redis \u5185\u90E8\u6709\u4E00\u4E2A\u6B7B\u795E\uFF0C\u65F6\u523B\u76EF\u7740\u6240\u6709\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684 key\uFF0C\u5BFF\u547D\u4E00\u5230\u5C31\u4F1A\u7ACB\u5373\u6536\u5272\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/19/164b156918d00bbd~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4F60\u8FD8\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7AD9\u5728\u6B7B\u795E\u7684\u89D2\u5EA6\u601D\u8003\uFF0C\u4F1A\u4E0D\u4F1A\u56E0\u4E3A\u540C\u4E00\u65F6\u95F4\u592A\u591A\u7684 key \u8FC7\u671F\uFF0C\u4EE5\u81F3\u4E8E\u5FD9\u4E0D\u8FC7\u6765\u3002\u540C\u65F6\u56E0\u4E3A Redis \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u6536\u5272\u7684\u65F6\u95F4\u4E5F\u4F1A\u5360\u7528\u7EBF\u7A0B\u7684\u5904\u7406\u65F6\u95F4\uFF0C\u5982\u679C\u6536\u5272\u7684\u592A\u8FC7\u4E8E\u7E41\u5FD9\uFF0C\u4F1A\u4E0D\u4F1A\u5BFC\u81F4\u7EBF\u4E0A\u8BFB\u5199\u6307\u4EE4\u51FA\u73B0\u5361\u987F\u3002</p><p>\u8FD9\u4E9B\u95EE\u9898 Antirez \u65E9\u5C31\u60F3\u5230\u4E86\uFF0C\u6240\u6709\u5728\u8FC7\u671F\u8FD9\u4EF6\u4E8B\u4E0A\uFF0CRedis \u975E\u5E38\u5C0F\u5FC3\u3002</p><h2 id="\u8FC7\u671F\u7684-key-\u96C6\u5408" tabindex="-1">\u8FC7\u671F\u7684 key \u96C6\u5408 <a class="header-anchor" href="#\u8FC7\u671F\u7684-key-\u96C6\u5408" aria-hidden="true">#</a></h2><p>redis \u4F1A\u5C06\u6BCF\u4E2A\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684 key \u653E\u5165\u5230\u4E00\u4E2A\u72EC\u7ACB\u7684\u5B57\u5178\u4E2D\uFF0C\u4EE5\u540E\u4F1A\u5B9A\u65F6\u904D\u5386\u8FD9\u4E2A\u5B57\u5178\u6765\u5220\u9664\u5230\u671F\u7684 key\u3002\u9664\u4E86\u5B9A\u65F6\u904D\u5386\u4E4B\u5916\uFF0C\u5B83\u8FD8\u4F1A\u4F7F\u7528\u60F0\u6027\u7B56\u7565\u6765\u5220\u9664\u8FC7\u671F\u7684 key\uFF0C\u6240\u8C13\u60F0\u6027\u7B56\u7565\u5C31\u662F\u5728\u5BA2\u6237\u7AEF\u8BBF\u95EE\u8FD9\u4E2A key \u7684\u65F6\u5019\uFF0Credis \u5BF9 key \u7684\u8FC7\u671F\u65F6\u95F4\u8FDB\u884C\u68C0\u67E5\uFF0C\u5982\u679C\u8FC7\u671F\u4E86\u5C31\u7ACB\u5373\u5220\u9664\u3002\u5B9A\u65F6\u5220\u9664\u662F\u96C6\u4E2D\u5904\u7406\uFF0C\u60F0\u6027\u5220\u9664\u662F\u96F6\u6563\u5904\u7406\u3002</p><h2 id="\u5B9A\u65F6\u626B\u63CF\u7B56\u7565" tabindex="-1">\u5B9A\u65F6\u626B\u63CF\u7B56\u7565 <a class="header-anchor" href="#\u5B9A\u65F6\u626B\u63CF\u7B56\u7565" aria-hidden="true">#</a></h2><p>Redis \u9ED8\u8BA4\u4F1A\u6BCF\u79D2\u8FDB\u884C\u5341\u6B21\u8FC7\u671F\u626B\u63CF\uFF0C\u8FC7\u671F\u626B\u63CF\u4E0D\u4F1A\u904D\u5386\u8FC7\u671F\u5B57\u5178\u4E2D\u6240\u6709\u7684 key\uFF0C\u800C\u662F\u91C7\u7528\u4E86\u4E00\u79CD\u7B80\u5355\u7684\u8D2A\u5FC3\u7B56\u7565\u3002</p><ol><li>\u4ECE\u8FC7\u671F\u5B57\u5178\u4E2D\u968F\u673A 20 \u4E2A key\uFF1B</li><li>\u5220\u9664\u8FD9 20 \u4E2A key \u4E2D\u5DF2\u7ECF\u8FC7\u671F\u7684 key\uFF1B</li><li>\u5982\u679C\u8FC7\u671F\u7684 key \u6BD4\u7387\u8D85\u8FC7 1/4\uFF0C\u90A3\u5C31\u91CD\u590D\u6B65\u9AA4 1\uFF1B</li></ol><p>\u540C\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u8FC7\u671F\u626B\u63CF\u4E0D\u4F1A\u51FA\u73B0\u5FAA\u73AF\u8FC7\u5EA6\uFF0C\u5BFC\u81F4\u7EBF\u7A0B\u5361\u6B7B\u73B0\u8C61\uFF0C\u7B97\u6CD5\u8FD8\u589E\u52A0\u4E86\u626B\u63CF\u65F6\u95F4\u7684\u4E0A\u9650\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u8D85\u8FC7 25ms\u3002</p><p>\u8BBE\u60F3\u4E00\u4E2A\u5927\u578B\u7684 Redis \u5B9E\u4F8B\u4E2D\u6240\u6709\u7684 key \u5728\u540C\u4E00\u65F6\u95F4\u8FC7\u671F\u4E86\uFF0C\u4F1A\u51FA\u73B0\u600E\u6837\u7684\u7ED3\u679C\uFF1F</p><p>\u6BEB\u65E0\u7591\u95EE\uFF0CRedis \u4F1A\u6301\u7EED\u626B\u63CF\u8FC7\u671F\u5B57\u5178 (\u5FAA\u73AF\u591A\u6B21)\uFF0C\u76F4\u5230\u8FC7\u671F\u5B57\u5178\u4E2D\u8FC7\u671F\u7684 key \u53D8\u5F97\u7A00\u758F\uFF0C\u624D\u4F1A\u505C\u6B62 (\u5FAA\u73AF\u6B21\u6570\u660E\u663E\u4E0B\u964D)\u3002\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u7EBF\u4E0A\u8BFB\u5199\u8BF7\u6C42\u51FA\u73B0\u660E\u663E\u7684\u5361\u987F\u73B0\u8C61\u3002\u5BFC\u81F4\u8FD9\u79CD\u5361\u987F\u7684\u53E6\u5916\u4E00\u79CD\u539F\u56E0\u662F\u5185\u5B58\u7BA1\u7406\u5668\u9700\u8981\u9891\u7E41\u56DE\u6536\u5185\u5B58\u9875\uFF0C\u8FD9\u4E5F\u4F1A\u4EA7\u751F\u4E00\u5B9A\u7684 CPU \u6D88\u8017\u3002</p><p>\u5F53\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u670D\u52A1\u5668\u5982\u679C\u6B63\u597D\u8FDB\u5165\u8FC7\u671F\u626B\u63CF\u72B6\u6001\uFF0C\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5C06\u4F1A\u7B49\u5F85\u81F3\u5C11 25ms \u540E\u624D\u4F1A\u8FDB\u884C\u5904\u7406\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u5C06\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\u7684\u6BD4\u8F83\u77ED\uFF0C\u6BD4\u5982 10ms\uFF0C\u90A3\u4E48\u5C31\u4F1A\u51FA\u73B0\u5927\u91CF\u7684\u94FE\u63A5\u56E0\u4E3A\u8D85\u65F6\u800C\u5173\u95ED\uFF0C\u4E1A\u52A1\u7AEF\u5C31\u4F1A\u51FA\u73B0\u5F88\u591A\u5F02\u5E38\u3002\u800C\u4E14\u8FD9\u65F6\u4F60\u8FD8\u65E0\u6CD5\u4ECE Redis \u7684 slowlog \u4E2D\u770B\u5230\u6162\u67E5\u8BE2\u8BB0\u5F55\uFF0C\u56E0\u4E3A\u6162\u67E5\u8BE2\u6307\u7684\u662F\u903B\u8F91\u5904\u7406\u8FC7\u7A0B\u6162\uFF0C\u4E0D\u5305\u542B\u7B49\u5F85\u65F6\u95F4\u3002</p><p>\u6240\u4EE5\u4E1A\u52A1\u5F00\u53D1\u4EBA\u5458\u4E00\u5B9A\u8981\u6CE8\u610F\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u6709\u5927\u6279\u91CF\u7684 key \u8FC7\u671F\uFF0C\u8981\u7ED9\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E00\u4E2A\u968F\u673A\u8303\u56F4\uFF0C\u800C\u4E0D\u5B9C\u5168\u90E8\u5728\u540C\u4E00\u65F6\u95F4\u8FC7\u671F\uFF0C\u5206\u6563\u8FC7\u671F\u5904\u7406\u7684\u538B\u529B\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5728\u76EE\u6807\u8FC7\u671F\u65F6\u95F4\u4E0A\u589E\u52A0\u4E00\u5929\u7684\u968F\u673A\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">redis.expire_at(key, random.randint(86400) + expire_ts)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728\u4E00\u4E9B\u6D3B\u52A8\u7CFB\u7EDF\u4E2D\uFF0C\u56E0\u4E3A\u6D3B\u52A8\u662F\u4E00\u671F\u4E00\u4F1A\uFF0C\u4E0B\u4E00\u671F\u6D3B\u52A8\u4E3E\u529E\u65F6\uFF0C\u524D\u9762\u51E0\u671F\u7684\u5F88\u591A\u6570\u636E\u90FD\u53EF\u4EE5\u4E22\u5F03\u4E86\uFF0C\u6240\u4EE5\u9700\u8981\u7ED9\u76F8\u5173\u7684\u6D3B\u52A8\u6570\u636E\u8BBE\u7F6E\u4E00\u4E2A\u8FC7\u671F\u65F6\u95F4\uFF0C\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684 Redis \u5185\u5B58\u5360\u7528\u3002\u5982\u679C\u4E0D\u52A0\u6CE8\u610F\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5C06\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4\u518D\u589E\u52A0\u4E00\u4E2A\u5E38\u91CF\u7684\u5197\u4F59\u65F6\u95F4\uFF0C\u5982\u679C\u53C2\u4E0E\u6D3B\u52A8\u7684\u4EBA\u6570\u592A\u591A\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684 key \u540C\u65F6\u8FC7\u671F\u3002</p><p>\u638C\u9605\u670D\u52A1\u7AEF\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5C31\u66FE\u51FA\u73B0\u8FC7\u591A\u6B21\u56E0\u4E3A\u5927\u91CF key \u540C\u65F6\u8FC7\u671F\u5BFC\u81F4\u7684\u5361\u987F\u62A5\u8B66\u73B0\u8C61\uFF0C\u901A\u8FC7\u5C06\u8FC7\u671F\u65F6\u95F4\u968F\u673A\u5316\u603B\u662F\u80FD\u5F88\u597D\u5730\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5E0C\u671B\u8BFB\u8005\u4EEC\u4ECA\u540E\u80FD\u5C11\u72AF\u8FD9\u6837\u7684\u9519\u8BEF\u3002</p><h2 id="\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565" tabindex="-1">\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565 <a class="header-anchor" href="#\u4ECE\u5E93\u7684\u8FC7\u671F\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u4ECE\u5E93\u4E0D\u4F1A\u8FDB\u884C\u8FC7\u671F\u626B\u63CF\uFF0C\u4ECE\u5E93\u5BF9\u8FC7\u671F\u7684\u5904\u7406\u662F\u88AB\u52A8\u7684\u3002\u4E3B\u5E93\u5728 key \u5230\u671F\u65F6\uFF0C\u4F1A\u5728 AOF \u6587\u4EF6\u91CC\u589E\u52A0\u4E00\u6761 <code>del</code> \u6307\u4EE4\uFF0C\u540C\u6B65\u5230\u6240\u6709\u7684\u4ECE\u5E93\uFF0C\u4ECE\u5E93\u901A\u8FC7\u6267\u884C\u8FD9\u6761 <code>del</code> \u6307\u4EE4\u6765\u5220\u9664\u8FC7\u671F\u7684 key\u3002</p><p>\u56E0\u4E3A\u6307\u4EE4\u540C\u6B65\u662F\u5F02\u6B65\u8FDB\u884C\u7684\uFF0C\u6240\u4EE5\u4E3B\u5E93\u8FC7\u671F\u7684 key \u7684 <code>del</code> \u6307\u4EE4\u6CA1\u6709\u53CA\u65F6\u540C\u6B65\u5230\u4ECE\u5E93\u7684\u8BDD\uFF0C\u4F1A\u51FA\u73B0\u4E3B\u4ECE\u6570\u636E\u7684\u4E0D\u4E00\u81F4\uFF0C\u4E3B\u5E93\u6CA1\u6709\u7684\u6570\u636E\u5728\u4ECE\u5E93\u91CC\u8FD8\u5B58\u5728\uFF0C\u6BD4\u5982\u4E0A\u4E00\u8282\u7684\u96C6\u7FA4\u73AF\u5883\u5206\u5E03\u5F0F\u9501\u7684\u7B97\u6CD5\u6F0F\u6D1E\u5C31\u662F\u56E0\u4E3A\u8FD9\u4E2A\u540C\u6B65\u5EF6\u8FDF\u4EA7\u751F\u7684\u3002</p>`,23),t=[n];function l(p,r,o,c,_,h){return s(),a("div",null,t)}const m=e(d,[["render",l]]);export{y as __pageData,m as default};
