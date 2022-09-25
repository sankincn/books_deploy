import{_ as t,c as r,o as e,d as o}from"./app.e5528619.js";const m=JSON.parse('{"title":"\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u7269\u6599\u7CFB\u7EDF","slug":"\u7269\u6599\u7CFB\u7EDF","link":"#\u7269\u6599\u7CFB\u7EDF","children":[]},{"level":2,"title":"\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1","slug":"\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1","link":"#\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1","children":[]},{"level":2,"title":"\u5199\u5728\u6700\u540E","slug":"\u5199\u5728\u6700\u540E","link":"#\u5199\u5728\u6700\u540E","children":[]}],"relativePath":"Node.js/NestJS \u9879\u76EE\u5B9E\u6218/\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1.md"}'),n={name:"Node.js/NestJS \u9879\u76EE\u5B9E\u6218/\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1.md"},s=o('<h1 id="\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1" tabindex="-1">\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1 <a class="header-anchor" href="#\u7269\u6599\u7BC7-\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1" aria-hidden="true">#</a></h1><hr><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u7AE0\u4ECB\u7ECD\u4E86 <strong>RBAC</strong> \u6743\u9650\u6A21\u578B\u7684\u8BBE\u8BA1\uFF0C\u540E\u7EED\u4F1A\u5C06\u57FA\u4E8E <strong>RBAC</strong> \u7684\u7528\u6237\u4E2D\u5FC3\u4EE3\u7801\u653E\u5728 <strong>GitHub</strong> \u4E0A\uFF0C\u5927\u5BB6\u53EF\u4EE5\u8FDB\u7FA4\u83B7\u53D6\u6700\u65B0\u7684\u4EE3\u7801\u8FDB\u5EA6\u3002</p><p>\u5728\u9700\u6C42\u5206\u6790\u4E2D\uFF0C\u6211\u4EEC\u63D0\u5230\u4E86\u5728\u7F51\u5173\u57FA\u7840\u670D\u52A1\u4E2D\u9700\u8981\u4EE3\u7406\u8F6C\u53D1\u9759\u6001\u8D44\u6E90\uFF0C\u6B63\u5E38\u6765\u8BF4\u8FD9\u4E2A\u529F\u80FD\u4E00\u822C\u662F <code>DevOps</code> \u6216\u8005\u642D\u5EFA\u7CFB\u7EDF\u6765\u5B8C\u6210\u7684\uFF0C\u4F46\u7531\u4E8E <code>DevOps</code> \u4E0E\u642D\u5EFA\u7CFB\u7EDF\u81EA\u8EAB\u5C31\u662F\u4E00\u4E2A\u975E\u5E38\u5E9E\u5927\u7684\u4F53\u7CFB\uFF0C\u4E3A\u4E86\u4E13\u6CE8\u4E8E\u7F51\u5173\u7CFB\u7EDF\u529F\u80FD\u4E0D\u6269\u6563\u8303\u56F4\uFF0C\u6240\u4EE5\u6211\u4EEC\u6311\u9009\u4E86\u4E00\u4E2A\u6BD4\u8F83\u57FA\u7840\u7684\u7269\u6599\u670D\u52A1\u6765\u8FDB\u884C<strong>\u9875\u9762\u8D44\u6E90\u7684\u7BA1\u7406</strong>\u3002</p><p>\u672C\u7AE0\u6211\u4EEC\u5C06\u4ECB\u7ECD\u7269\u6599\u7684\u4E00\u4E9B\u76F8\u5173\u77E5\u8BC6\u4EE5\u53CA\u7269\u6599\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u3002</p><h2 id="\u7269\u6599\u7CFB\u7EDF" tabindex="-1">\u7269\u6599\u7CFB\u7EDF <a class="header-anchor" href="#\u7269\u6599\u7CFB\u7EDF" aria-hidden="true">#</a></h2><h4 id="\u4EC0\u4E48\u662F\u7269\u6599" tabindex="-1">\u4EC0\u4E48\u662F\u7269\u6599? <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7269\u6599" aria-hidden="true">#</a></h4><p>\u7269\u6599\u8FD9\u4E2A\u6982\u5FF5\u4E5F\u7B97\u662F\u4E00\u4E2A\u6BD4\u8F83\u65B0\u7684\u540D\u8BCD\uFF0C\u6709\u4E9B\u540C\u5B66\u53EF\u80FD\u6CA1\u6709\u542C\u8BF4\u8FC7\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4F60\u4E0D\u4EC5\u63A5\u89E6\u8FC7\u7269\u6599\u800C\u4E14\u5DF2\u7ECF\u5728\u4F7F\u7528\u751A\u81F3\u662F\u5F00\u53D1\u4E86\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u6765\u5256\u6790\u4E00\u4E2A\u524D\u7AEF\u7684\u9879\u76EE\u6784\u6210\uFF1A<strong>\u5E94\u7528 -&gt; \u9875\u9762 -&gt; \u533A\u5757 -&gt; \u4E1A\u52A1\u7EC4\u4EF6 -&gt; \u57FA\u7840\u7EC4\u4EF6</strong>\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u6210\u719F\u7684\u56E2\u961F\u4F1A\u7528\u4EC0\u4E48\u6765\u5FEB\u901F\u5B8C\u6210\u6574\u4E2A\u5DE5\u7A0B\u5462\uFF1F</p><ol><li>\u4E00\u5957\u57FA\u4E8E\u56E2\u961F\u6807\u51C6\u89C4\u8303\u7684<strong>\u57FA\u7840\u7EC4\u4EF6\u5E93</strong>\uFF0C\u5305\u542B <strong>PC</strong> \u4E0E <strong>H5</strong> \u751A\u81F3\u591A\u7AEF\u7EC4\u4EF6\u5E93\uFF1B</li><li>\u591A\u5957\u7B26\u5408\u4E1A\u52A1\u5E38\u89C1\u7684<strong>\u4E1A\u52A1\u7EC4\u4EF6\u5E93</strong>\uFF0C\u4F8B\u5982\u7535\u5546\u7EC4\u4EF6\u5E93\uFF08\u8D2D\u7269\u8F66\u3001\u5546\u54C1\u5E93\u3001\u91D1\u521A\u4F4D\u3001\u5E7F\u544A\u4F4D\u7B49\uFF09\uFF1B</li><li>\u591A\u79CD<strong>\u533A\u5757</strong>\u7EC4\u5408\uFF0C\u4F8B\u5982\u91D1\u521A\u4F4D\u4E0E\u5E7F\u544A\u4F4D\u7684\u591A\u79CD\u7EC4\u5408\u6A21\u5F0F\uFF0C\u9700\u8981\u5FAE\u8C03\u6574\u7684\u6A21\u5757\uFF1B</li><li>\u591A\u5957<strong>\u6A21\u677F</strong>\uFF0C\u4F8B\u5982\u7535\u5546\u4E2D\u7684\u5404\u79CD\u8425\u9500\u6A21\u677F\uFF08\u780D\u4E00\u5200\u3001\u5927\u8F6C\u76D8\u3001\u62BD\u5956\u673A\u7B49\uFF09\u3002</li></ol><p>\u4E0A\u9762\u8FD9\u4E9B\u6A21\u5757\u5728\u4E00\u4E2A\u7A0D\u5177\u89C4\u6A21\u7684\u56E2\u961F\u4E2D\uFF0C\u81F3\u5C11\u5177\u5907 <strong>1</strong> \u8DDF <strong>2</strong> \u6216\u8005\u66F4\u591A\uFF0C\u53EA\u4E0D\u8FC7\u4E0D\u5C11\u7684\u56E2\u961F\u6CA1\u6709\u5C06\u5B83\u4EEC\u5F52\u7C7B\u5E76\u505A\u6210\u4E00\u5957\u901A\u7528\u7684\u7269\u6599\u7CFB\u7EDF\u800C\u5DF2\u3002</p><p>\u6240\u4EE5\u7269\u6599\u7684\u6982\u5FF5\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A<strong>\u6240\u6709\u80FD\u76F4\u63A5\u642D\u5EFA\u51FA\u9875\u9762\u7EA7\u522B\u7684\u57FA\u7840\u6A21\u5757\u90FD\u53EF\u4EE5\u7EB3\u5165\u7269\u6599\u7684\u7EDF\u7B79</strong>\u3002</p><h4 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u7269\u6599\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u7269\u6599\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u7269\u6599\uFF1F" aria-hidden="true">#</a></h4><p>\u524D\u9762\u63D0\u5230\u4E86\uFF0C\u4E00\u4E2A\u6210\u719F\u7684\u56E2\u961F\u5E94\u8BE5\u600E\u6837<strong>\u5FEB\u901F</strong>\u5B8C\u6210\u4E00\u4E2A\u65B0\u7684\u5DE5\u7A0B\uFF0C\u4EE5\u53CA\u5982\u4F55\u5BF9\u65E7\u5DE5\u7A0B\u8FDB\u884C\u8FED\u4EE3\u3001\u4F18\u5316\u5347\u7EA7\u3002</p><p>\u5F53\u4E00\u4E2A\u56E2\u961F\u8D1F\u8D23\u4E1A\u52A1\u8D8A\u6765\u8D8A\u591A\uFF0C\u7814\u53D1\u6210\u5458\u9010\u6B65\u589E\u52A0\uFF0C\u9879\u76EE\u4E0A\u4E0B\u6E38\u534F\u4F5C\u94FE\u8DEF\u8D8A\u6765\u8D8A\u957F\uFF08<strong>\u8BBE\u8BA1 -&gt; \u7814\u53D1 -&gt; \u6D4B\u8BD5 -&gt; \u4EA7\u54C1\u9A8C\u6536</strong>\uFF09\uFF0C\u5982\u679C\u6BCF\u4E00\u6B21\u65B0\u7684\u9700\u6C42\u6216\u8005\u65B0\u7684\u9879\u76EE\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u90FD\u6CA1\u6709\u4EFB\u4F55\u5F00\u53D1\u3001\u6837\u5F0F\u7684\u89C4\u8303\uFF0C\u4E5F\u6CA1\u6709\u4EFB\u4F55\u7684\u8D44\u6E90\u3001\u7EC4\u4EF6\u6216\u8005\u4EE3\u7801\u7684\u590D\u7528\u7387\uFF0C\u5F88\u5BB9\u6613\u5BFC\u81F4\u9879\u76EE\u8FED\u4EE3\u3001\u7EF4\u62A4\u56F0\u96BE\uFF0C\u4E1A\u52A1\u4E0E\u6837\u5F0F\u8D28\u91CF\u5DEE\u3002\u6700\u91CD\u8981\u7684\u662F\u4F1A\u6709\u5F88\u591A\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\u4E0E\u4EBA\u5DE5\u6210\u672C\u589E\u52A0\u3002</p><p>\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5F53\u4E00\u4E2A\u56E2\u961F\u7684\u4E1A\u52A1\u9010\u6B65\u7A33\u5B9A\u4E4B\u540E\uFF0C\u5C31\u4F1A\u5F00\u59CB\u5236\u5B9A<strong>\u8BBE\u8BA1\u89C4\u8303\u3001\u5F00\u53D1\u89C4\u8303</strong>\uFF0C\u589E\u52A0\u4EE3\u7801\u3001\u7EC4\u4EF6\u7684\u590D\u7528\u7387\uFF0C\u63D0\u9AD8\u4E2A\u4EBA\u5F00\u53D1\u6548\u7387\u3002\u5F53\u89C4\u8303\u8FBE\u5230\u4E00\u5B9A\u7684\u6807\u51C6\uFF0C\u76F8\u5BF9\u5E94\u4E5F\u4F1A\u51CF\u5C11\u8BBE\u8BA1\u3001\u6D4B\u8BD5\u7684\u6295\u5165\uFF0C\u6574\u4F53\u7684\u6548\u80FD\u4E5F\u4F1A\u6709\u6240\u63D0\u9AD8\u3002</p><h4 id="\u5982\u4F55\u53BB\u5F00\u542F\u7B2C\u4E00\u6B65\uFF1F" tabindex="-1">\u5982\u4F55\u53BB\u5F00\u542F\u7B2C\u4E00\u6B65\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u53BB\u5F00\u542F\u7B2C\u4E00\u6B65\uFF1F" aria-hidden="true">#</a></h4><p>\u8DDF\u5DE5\u5382\u6D41\u6C34\u7EBF\u4E00\u6837\uFF0C\u9996\u5148\u4ECE<strong>\u5F00\u53D1\u8BED\u8A00</strong>\u3001<strong>\u811A\u624B\u67B6</strong>\u5165\u624B\uFF0C\u4ECE\u6E90\u5934\u5C06\u6700\u57FA\u7840\u7684\u5730\u57FA\u7EDF\u4E00\u4E86\uFF0C\u624D\u6709\u673A\u4F1A\u5B8C\u6210\u540E\u9762\u7684\u89C4\u8303\u3002\u4E0D\u7136\u56E2\u961F\u4E2D\u6BCF\u4E2A\u4EBA\u90FD\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u9009\u62E9 <code>Vue</code>\u3001<code>React</code>\u3001<code>Angular</code> \u6216\u8005\u5176\u4ED6\u5C0F\u4F17\u4E00\u70B9\u7684\u6846\u67B6\u6765\u5F00\u53D1\u7684\u8BDD\uFF0C\u8FD9\u4E2A\u6807\u51C6\u7684\u843D\u5730\u5C31\u4F1A\u975E\u5E38\u56F0\u96BE\u3002</p><p>\u5728\u5B8C\u6210\u4E86\u57FA\u7840\u5F00\u53D1\u8BED\u8A00\u4E0E\u6846\u67B6\u7684\u7EDF\u4E00\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u8054\u5408\u4EA7\u54C1\u4E0E\u8BBE\u8BA1\u5236\u5B9A\u76F8\u5173\u7684\u57FA\u7840 <code>UI</code> \u7EA7\u522B\u7684\u89C4\u8303\uFF0C\u4EA7\u51FA\u901A\u7528\u7684\u7EC4\u4EF6\u5E93\u4EE3\u7801\u3002</p><p>\u6700\u540E\uFF0C\u518D\u6839\u636E\u81EA\u8EAB\u7684\u4E1A\u52A1\u4E0D\u65AD\u7CBE\u70BC\u4EE3\u7801\uFF0C\u62BD\u53D6\u901A\u7528\u903B\u8F91\u4E0E\u7EC4\u4EF6\uFF0C\u5B8C\u6210\u7B2C\u4E00\u6279\u4E1A\u52A1\u7EC4\u4EF6\u7684\u79EF\u7D2F\u3002</p><h4 id="\u4F55\u4E3A\u7EC4\u4EF6\u3001\u533A\u5757\u4E0E\u6A21\u677F\uFF1F" tabindex="-1">\u4F55\u4E3A\u7EC4\u4EF6\u3001\u533A\u5757\u4E0E\u6A21\u677F\uFF1F <a class="header-anchor" href="#\u4F55\u4E3A\u7EC4\u4EF6\u3001\u533A\u5757\u4E0E\u6A21\u677F\uFF1F" aria-hidden="true">#</a></h4><p>\u57FA\u7840\u7EC4\u4EF6\u7684\u6982\u5FF5\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u5C06\u6240\u6709\u4E1A\u52A1\u5254\u9664\uFF0C\u80FD\u591F\u4FDD\u6301\u6700\u5C0F\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u4F5C\u4E3A\u57FA\u7840\u7EC4\u4EF6\uFF0C\u5B83\u662F\u53EF\u679A\u4E3E\u3001\u53EF\u62BD\u8C61\u4EE5\u53CA\u901A\u7528\u7684\uFF0C\u4F8B\u5982\u5E38\u89C1\u7684 <strong>table</strong> \u4EE5\u53CA <strong>form</strong> \u4E00\u5957\u7EC4\u4EF6\u3002</p><blockquote><p>\u76EE\u524D\u4E1A\u5185\u505A\u7684\u6BD4\u8F83\u597D\u7684 <code>React</code> \u6280\u672F\u6808\u7684\u7EC4\u4EF6\u5E93\u6709 <a href="https://ant.design/docs/react/introduce-cn" target="_blank" rel="noreferrer">Antd</a>\uFF0C<code>Vue</code> \u6280\u672F\u6808\u7684\u7EC4\u4EF6\u5E93\u6709 <a href="https://element-plus.org/zh-CN/#/zh-CN" target="_blank" rel="noreferrer">Element</a> \u4E0E <a href="https://iview.github.io/" target="_blank" rel="noreferrer">iView</a>\u3002\u4E2A\u4EBA\u5E76\u4E0D\u5EFA\u8BAE\u6BCF\u4E2A\u56E2\u961F\u90FD\u4ECE\u5934\u5F00\u59CB\u9020\u8F6E\u5B50\uFF0C\u53EF\u4EE5\u4EE5\u76EE\u524D\u4E3B\u6D41\u6210\u719F\u7684\u5F00\u6E90\u7EC4\u4EF6\u5E93\u4E3A\u57FA\u7840\u505A\u4E8C\u6B21\u5F00\u53D1\u5B9A\u5236\uFF0C\u8FD9\u4E5F\u5E94\u4E86\u5C0F\u518C\u7B2C\u4E00\u7AE0\u6240\u8BF4\u7684\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u8F6E\u5B50\u90FD\u6709\u5FC5\u8981\u9020\u3002</p></blockquote><p>\u57FA\u7840\u7EC4\u4EF6\u4F5C\u4E3A\u6700\u5C0F\u5355\u4F4D\u7684\u6784\u6210\u5143\u7D20\uFF0C\u901A\u7528\u6027\u975E\u5E38\u9AD8\uFF0C\u8986\u76D6\u9762\u975E\u5E38\u5E7F\uFF0C\u4F46\u662F\u4ECD\u7136\u6CA1\u529E\u6CD5\u6EE1\u8DB3\u5B9E\u9645\u4E1A\u52A1\u7EBF\u5FEB\u901F\u5F00\u53D1\u7684\u9700\u6C42\uFF0C\u4E1A\u52A1\u7EC4\u4EF6\u4E5F\u5C31\u7531\u6B64\u8BDE\u751F\u3002</p><p>\u4E1A\u52A1\u7EC4\u4EF6\u662F\u57FA\u4E8E\u57FA\u7840\u7EC4\u4EF6\u4F46\u9644\u5E26\u4E86<strong>\u4E1A\u52A1\u5C5E\u6027</strong>\u7684\u7EC4\u4EF6\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4E1A\u52A1\u7EC4\u4EF6\u53D7\u5782\u76F4\u4E1A\u52A1\u9886\u57DF\u7684\u5F71\u54CD\uFF0C\u5FC5\u7136\u662F\u6709\u9886\u57DF\u58C1\u5792\u7684\uFF0C\u6BD4\u5982\u7535\u5546\u7EC4\u4EF6\u5E93\u4E0E <strong>SCM</strong> \u7EC4\u4EF6\u5E93\u5C31\u6709\u5F88\u5927\u7684\u5DEE\u8DDD\u3002</p><p>\u65E0\u8BBA\u662F\u4E1A\u52A1\u7EC4\u4EF6\u8FD8\u662F\u57FA\u7840\u7EC4\u4EF6\uFF0C\u90FD\u5C5E\u4E8E\u7EC4\u4EF6\u7684\u8303\u7574\uFF0C\u6700\u7EC8\u7684\u4EA7\u7269\u5927\u591A\u6570\u90FD\u662F\u4EE5 <strong>Props</strong> \u8FD9\u79CD\u53EF\u914D\u7F6E\u7684\u4F20\u53C2\u6A21\u5F0F\u6765\u4F7F\u7528\u3002</p><p>\u533A\u5757\u5219\u662F\u878D\u5408\u4E86\u57FA\u7840\u4E0E\u4E1A\u52A1\u7EC4\u4EF6\u4E4B\u540E\u7684\u4EA7\u7269\uFF0C<strong>\u4E0E\u7EC4\u4EF6\u4E0D\u540C\u7684\u662F\uFF0C\u533A\u5757\u662F\u4EE5\u590D\u5236\u4EE3\u7801\u7684\u6A21\u5F0F\u76F4\u63A5\u6DFB\u52A0\u5230\u5DE5\u7A0B\u5316\u5F53\u4E2D</strong>\u3002</p><p>\u5F53\u4F60\u7684\u4E1A\u52A1\u9700\u8981\u5927\u91CF\u7684\u91CD\u590D\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u6A21\u5757\u7684\u4EE3\u7801\u5728\u6BCF\u4E00\u5904\u90FD\u4F1A\u6709\u4E0D\u540C\u7684\u4E1A\u52A1\u5904\u7406\u65B9\u5F0F\uFF0C\u65E0\u6CD5\u901A\u8FC7\u914D\u7F6E\u6765\u5B8C\u6210\u6240\u6709\u7684\u529F\u80FD\u65F6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u533A\u5757\u6765\u5E2E\u4F60\u5B8C\u6210\u4E86\u3002</p><p>\u6A21\u677F\u53EF\u4EE5\u770B\u4F5C\u5927\u53F7\u533A\u5757\uFF0C\u4F46\u66F4\u52A0\u6210\u719F\uFF0C\u4EE5\u9875\u9762\u7EA7\u522B\u4E3A\u5355\u4F4D\uFF0C\u7531\u524D\u4E09\u79CD\u5B50\u6A21\u5757\u7EC4\u88C5\u800C\u6210\uFF0C\u540C\u6837\u4E5F\u662F\u4EE5\u4EE3\u7801\u7684\u6A21\u677F\u52A0\u5165\u5230\u5DE5\u7A0B\u4E2D\u3002</p><h4 id="\u4EA7\u7269\u7BA1\u7406" tabindex="-1">\u4EA7\u7269\u7BA1\u7406 <a class="header-anchor" href="#\u4EA7\u7269\u7BA1\u7406" aria-hidden="true">#</a></h4><p>\u7EC4\u4EF6\u4E00\u822C\u90FD\u662F\u4EE5\u914D\u7F6E\u6A21\u5F0F\u4F7F\u7528\uFF0C\u6240\u4EE5\u901A\u5E38\u90FD\u9700\u8981\u7ECF\u8FC7\u6784\u5EFA\u624D\u80FD\u88AB\u5DE5\u7A0B\u6240\u5F15\u7528\uFF0C\u5E38\u89C4\u7684\u7EC4\u4EF6\u4EA7\u7269\u6709\u4E24\u79CD\u5F62\u6001\uFF1A<strong>NPM</strong> \u5305\u4E0E <strong>CDN</strong> \u8D44\u6E90\u3002\u8FD9\u79CD\u6A21\u5F0F\u975E\u5E38\u5229\u4E8E\u7EC4\u4EF6\u6A21\u5757\u5FEB\u901F\u88AB\u5DE5\u7A0B\u5F15\u5165\uFF0C\u800C\u4E14\u901A\u8FC7\u6784\u5EFA\u4E4B\u540E\u975E\u5E38\u65B9\u4FBF\u7248\u672C\u7BA1\u7406\u3002</p><p>\u81F3\u4E8E\u533A\u5757\u4E0E\u6A21\u677F\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u662F\u7EAF <strong>Code</strong> \u7684\u6A21\u5F0F\uFF0C\u6240\u4EE5\u53D1\u5E03 <strong>NPM</strong> \u4E0E <strong>CDN</strong> \u90FD\u4E0D\u592A\u5408\u9002\uFF0C\u4E00\u822C\u662F\u76F4\u63A5\u4F7F\u7528 <strong>Git</strong> \u4ED3\u5E93\u6E90\u7801\u6A21\u5F0F\u6765\u7BA1\u7406\u3002\u4F46\u662F\u901A\u8FC7\u4ED3\u5E93\u6E90\u7801\u76F4\u63A5\u7BA1\u7406\u7684\u8BDD\uFF0C\u4F9D\u8D56\u5F15\u5165\uFF08\u9700\u8981\u624B\u52A8\u5F15\u5165\u6216\u8005\u5168\u5C40\u5F15\u5165\u4E00\u5957\u5168\u7EC4\u4EF6\u4F9D\u8D56\uFF09\u4E0E\u7248\u672C\u7BA1\u7406\u90FD\u4F1A\u6709\u95EE\u9898\u3002</p><p>\u6B64\u65F6\uFF0C\u5C31\u9700\u8981\u501F\u52A9\u4E00\u4E2A\u7269\u6599\u7CFB\u7EDF\u6765\u5E2E\u6211\u4EEC\u5C06\u8FD9\u4E9B\u96F6\u788E\u7684\u6A21\u5757\u7EDF\u4E00\u7BA1\u7406\u8D77\u6765\uFF0C\u65B9\u4FBF\u4E1A\u52A1\u540C\u5B66\u4F7F\u7528\u3002</p><h2 id="\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1" tabindex="-1">\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1 <a class="header-anchor" href="#\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6521f34d998148b3857244458245ca63~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u57FA\u4E8E\u4E0A\u8FF0\u7684\u5206\u6790\u4E0E\u8BA8\u8BBA\uFF0C\u6700\u7EC8\u6211\u4EEC\u7684\u7269\u6599\u7CFB\u7EDF\u9700\u8981\u4FDD\u5B58\u7684\u6570\u636E\u7C7B\u578B\u6709\u4E0A\u8FF0\u51E0\u79CD:</p><ol><li>\u57FA\u7840\u7EC4\u4EF6</li><li>\u7269\u6599\u7EC4\u4EF6</li><li>\u533A\u5757</li><li>\u6A21\u677F</li><li>\u9875\u9762</li></ol><blockquote><p>\u5176\u4E2D\uFF0C\u9875\u9762\u7684\u4EA7\u7269\u7C7B\u578B\u662F\u989D\u5916\u9644\u52A0\u4E0A\u53BB\uFF0C\u4E00\u822C\u5C5E\u4E8E<strong>\u642D\u5EFA\u7CFB\u7EDF</strong>\u624D\u4F1A\u4FDD\u5B58\u7684\u4EA7\u7269\u7C7B\u578B\uFF0C\u4F46\u7531\u4E8E\u6211\u4EEC\u7684\u7F51\u5173\u7CFB\u7EDF\u4E2D\u9700\u8981\u8FD9\u79CD\u4EA7\u7269\uFF0C\u6240\u4EE5\u624D\u4F1A\u653E\u8FDB\u6765\u3002</p></blockquote><p>\u5728\u4EA7\u7269\u7BA1\u7406\u4E2D\u63D0\u5230\u4E86\uFF0C\u7EC4\u4EF6\u4E0E\u533A\u5757\u3001\u6A21\u677F\u5728\u5B58\u50A8\u65B9\u9762\u662F\u6709\u4E00\u4E9B\u533A\u522B\u7684\uFF0C\u6240\u4EE5\u5728\u7269\u6599\u4F53\u7CFB\u8BBE\u8BA1\u4E2D\uFF0C\u9700\u8981\u5BF9\u8FD9\u4E24\u79CD\u7C7B\u578B\u7684\u4EA7\u7269\u505A\u4E00\u4E9B\u517C\u5BB9\u6027\u7684\u5408\u5E76\u3002</p><p>\u9996\u5148\u8003\u8651\u63A5\u5165\u7269\u6599\u7CFB\u7EDF\u4E2D\u7684\u4EE3\u7801\u4ED3\u5E93\u7BA1\u7406\u6A21\u5F0F\u91C7\u7528 <strong>monorepo</strong> \u8FD8\u662F <strong>multirepo</strong>\u3002</p><p>\u5BF9\u4E8E\u4E0A\u8FF0\u4E24\u79CD\u4EE3\u7801\u4ED3\u5E93\u7BA1\u7406\u6A21\u5F0F\u5404\u6709\u5343\u79CB\uFF0C\u5E38\u89C4\u7684\u7269\u6599\u7CFB\u7EDF\u4E00\u822C\u90FD\u662F\u91C7\u7528 <strong>multirepo</strong> \u7BA1\u7406\u4EA7\u7269\uFF0C\u8FD9\u6837\u65B9\u4FBF\u6570\u636E\u7BA1\u7406\u4EA7\u7269\u7684\u6784\u5EFA\u4E0E\u7248\u672C\u3002\u5BF9\u4E8E<strong>\u4E1A\u52A1\u7EC4\u4EF6\u5E93</strong>\u8FD9\u79CD\u672C\u8EAB\u5C31\u6709\u9886\u57DF\u58C1\u5792\u7684\u7C7B\u578B\u4EA7\u7269\uFF0C\u4EE5 <strong>multirepo</strong> \u7684\u6A21\u5F0F\u6765\u7BA1\u7406\u975E\u5E38\u65B9\u4FBF\uFF0C\u4E5F\u80FD\u591F\u8BA9\u5927\u90E8\u5206\u7684\u5F00\u53D1\u6240\u63A5\u53D7\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u91C7\u7528 <strong>multirepo</strong> \u6765\u7BA1\u7406<strong>\u57FA\u7840\u7EC4\u4EF6\u5E93</strong>\uFF0C\u5BF9\u5F00\u53D1\u6765\u8BF4\u5C31\u975E\u5E38\u96BE\u53D7\u3002\u56E0\u4E3A\u57FA\u7840\u7EC4\u4EF6\u5E93\u672C\u8EAB\u6709\u4E0D\u5C11\u7684\u903B\u8F91\u4E0E\u57FA\u7840\u80FD\u529B\u53EF\u4EE5\u590D\u7528\uFF0C\u4F46 <strong>multirepo</strong> \u6A21\u5F0F\u4F1A\u628A\u5B83\u62C6\u5F97\u6BD4\u8F83\u96F6\u788E\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u57FA\u7840\u7EC4\u4EF6\u5E93\u5E38\u89C1\u7684\u7BA1\u7406\u6A21\u5F0F\u662F <strong>monorepo</strong>\u3002</p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C<strong>multirepo</strong> \u7684\u7BA1\u7406\u6A21\u5F0F\u5728\u7269\u6599\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u6709\u552F\u4E00\u7684\u6620\u5C04\uFF0C\u6BCF\u4E00\u6B21\u7684\u9879\u76EE\u6784\u5EFA\u7684\u4EA7\u7269\u7ED3\u679C\u90FD\u5177\u5907\u552F\u4E00\u6027\uFF0C\u4F46\u662F <strong>monorepo</strong> \u7684\u6784\u5EFA\u4EA7\u7269\u4E0D\u5177\u5907\u552F\u4E00\u6027\uFF0C\u6BCF\u6B21\u7684\u6784\u5EFA\u4EA7\u7269\u7ED3\u679C\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728\u6211\u4EEC\u7684\u7269\u6599\u7CFB\u7EDF\u4E2D\uFF0C\u5F15\u5165<strong>\u865A\u62DF\u7269\u6599\u7684\u6982\u5FF5</strong>\uFF0C\u4E5F\u5C31\u662F <strong>monorepo</strong> \u6A21\u5F0F\u7BA1\u7406\u7684\u5DE5\u7A0B\uFF0C\u53EF\u4EE5\u624B\u52A8\u5728\u7CFB\u7EDF\u4E2D\u7533\u660E\uFF0C\u5728\u6784\u5EFA\u73AF\u5883\u4E0D\u518D\u5173\u6CE8\u6784\u5EFA\u4EA7\u7269\u7684\u5177\u4F53\u7ED3\u679C\uFF0C\u6839\u636E\u6784\u5EFA\u7684\u7248\u672C\u7EDF\u4E00\u5347\u7EA7\u6240\u6709\u865A\u62DF\u7269\u6599\u7684\u7248\u672C\u5373\u53EF\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ffade5dde0447ae9176e9db832e34cd~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u4E0B\u56FE\u5206\u522B\u662F\u771F\u5B9E\u7269\u6599\u4E0E\u865A\u62DF\u7269\u6599\u6DFB\u52A0\u7684\u754C\u9762\uFF0C\u865A\u62DF\u7269\u6599\u7684\u4EA7\u7269\u7ED3\u679C\u662F\u901A\u8FC7\u4EBA\u5DE5\u6DFB\u52A0\u8FDB\u53BB\u7BA1\u7406\u7684\uFF0C\u800C\u771F\u5B9E\u7269\u6599\u5219\u662F\u6BCF\u4E00\u4E2A\u4ED3\u5E93\u5C31\u5BF9\u5E94\u4E00\u4E2A\u7269\u6599\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9300bd5b71294080a0b9cfd2f1de3399~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3347cc973b7441a492f7fb17c6310078~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u4E0B\u56FE\u662F\u7269\u6599\u7CFB\u7EDF\u4E00\u4E2A\u5355\u4ED3\u7684\u7BA1\u7406\u4E0E\u53D1\u5E03\u754C\u9762\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0c2f4d1f6ff4d95b549d9802ce5c722~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3ca28bca02c4adaa615054859abb945~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u5BF9\u4E8E\u533A\u5757\u3001\u6A21\u677F\u4EE5\u53CA\u9875\u9762\u8FD9\u79CD\u7C7B\u578B\u7684\u7269\u6599\uFF0C\u5728\u53D1\u5E03\u7684\u65F6\u5019\u9664\u4E86\u7248\u672C\u7BA1\u7406\u4E4B\u5916\uFF0C\u6700\u597D\u4E5F\u5C06 <strong>Code</strong> \u5185\u5BB9\u5B8C\u6574\u5730\u5B58\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u8FD9\u6837\u65B9\u4FBF\u5176\u4ED6\u7684\u7CFB\u7EDF\u6D88\u8D39\uFF0C\u4F8B\u5982\u4F7F\u7528 <strong>Snapshot</strong> \u505A\u6210\u4EE3\u7801\u63D2\u5165\u63D2\u4EF6\uFF0C\u5728 <strong>VS Code</strong> \u4E2D\u5F00\u53D1\u65F6\u76F4\u63A5\u6D88\u8D39\u533A\u5757\u3001\u6A21\u677F\u7B49\u7269\u6599\u3002</p><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1">\u5199\u5728\u6700\u540E <a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u4ECB\u7ECD\u4E86\u7269\u6599\u7684\u7279\u6027\u4EE5\u53CA\u7269\u6599\u7CFB\u7EDF\u8BE5\u600E\u4E48\u8BBE\u8BA1\uFF0C\u5177\u4F53\u7684\u5F00\u53D1\u7EC6\u8282\u4EE5\u53CA\u6570\u636E\u8868\u7ED3\u6784\u8BBE\u8BA1\u5C06\u4F1A\u5728\u4E0B\u4E00\u7AE0\u8BE6\u7EC6\u8BB2\u8FF0\u3002</p><p>\u5728\u7269\u6599\u7CFB\u7EDF\u8BBE\u8BA1\u4E2D\u51FA\u73B0\u7684\u622A\u56FE\u662F\u5DF2\u7ECF\u6295\u5165\u4F7F\u7528\u7684\u5B8C\u6574\u7248\u672C\uFF0C\u5B83\u5305\u542B\u4E86 <code>DevOps</code> \u4E0E\u642D\u5EFA\u4F53\u7CFB\uFF0C\u4F46\u5C0F\u518C\u7684\u7269\u6599\u5B9E\u6218\u5E76\u4E0D\u4F1A\u5C55\u793A\u5B8C\u6574\u7684\u4F53\u7CFB\uFF0C\u800C\u662F\u805A\u7126\u5728\u7269\u6599\u7BA1\u7406\u63A7\u5236\u8FD9\u4E2A\u6D41\u7A0B\u4E0A\u3002\u6709\u5174\u8DA3\u7684\u540C\u5B66\u5728\u8DDF\u7740\u5B8C\u6210\u7269\u6599\u5B9E\u6218\u4E4B\u540E\uFF0C\u53EF\u4EE5\u7ED3\u5408\u81EA\u5DF1\u516C\u53F8\u7684 <code>CICD</code> \u4F53\u7CFB\u5B8C\u5584\u8D77\u6765\u3002</p><p>\u5982\u679C\u4F60\u6709\u4EC0\u4E48\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u63D0\u51FA\u6216\u8005\u52A0\u7FA4\u6C9F\u901A\u3002 \u{1F44F}</p>',58),p=[s];function a(g,i,c,d,l,h){return e(),r("div",null,p)}const u=t(n,[["render",a]]);export{m as __pageData,u as default};
