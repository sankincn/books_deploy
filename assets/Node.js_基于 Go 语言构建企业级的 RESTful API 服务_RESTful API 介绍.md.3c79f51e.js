import{_ as e,c as i,o as r,d as l}from"./app.c4f45da1.js";const T=JSON.parse('{"title":"RESTful API \u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F API","slug":"\u4EC0\u4E48\u662F-api","link":"#\u4EC0\u4E48\u662F-api","children":[]},{"level":2,"title":"REST \u7B80\u4ECB","slug":"rest-\u7B80\u4ECB","link":"#rest-\u7B80\u4ECB","children":[]},{"level":2,"title":"RPC \u7B80\u4ECB","slug":"rpc-\u7B80\u4ECB","link":"#rpc-\u7B80\u4ECB","children":[]},{"level":2,"title":"REST vs RPC","slug":"rest-vs-rpc","link":"#rest-vs-rpc","children":[]},{"level":2,"title":"\u5A92\u4F53\u7C7B\u578B\u9009\u62E9","slug":"\u5A92\u4F53\u7C7B\u578B\u9009\u62E9","link":"#\u5A92\u4F53\u7C7B\u578B\u9009\u62E9","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/RESTful API \u4ECB\u7ECD.md"}'),a={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/RESTful API \u4ECB\u7ECD.md"},t=l('<h1 id="restful-api-\u4ECB\u7ECD" tabindex="-1">RESTful API \u4ECB\u7ECD <a class="header-anchor" href="#restful-api-\u4ECB\u7ECD" aria-hidden="true">#</a></h1><hr><h1 id="restful-api-\u4ECB\u7ECD-1" tabindex="-1">RESTful API \u4ECB\u7ECD <a class="header-anchor" href="#restful-api-\u4ECB\u7ECD-1" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F-api" tabindex="-1">\u4EC0\u4E48\u662F API <a class="header-anchor" href="#\u4EC0\u4E48\u662F-api" aria-hidden="true">#</a></h2><p>API\uFF08Application Programming Interface\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7F16\u7A0B\u63A5\u53E3\uFF09\u662F\u4E00\u4E9B\u9884\u5148\u5B9A\u4E49\u7684\u51FD\u6570\u6216\u8005\u63A5\u53E3\uFF0C\u76EE\u7684\u662F\u63D0\u4F9B\u5E94\u7528\u7A0B\u5E8F\u4E0E\u5F00\u53D1\u4EBA\u5458\u57FA\u4E8E\u67D0\u8F6F\u4EF6\u6216\u786C\u4EF6\u5F97\u4EE5\u8BBF\u95EE\u4E00\u7EC4\u4F8B\u7A0B\u7684\u80FD\u529B\uFF0C\u800C\u53C8\u65E0\u987B\u8BBF\u95EE\u6E90\u7801\uFF0C\u6216\u7406\u89E3\u5185\u90E8\u5DE5\u4F5C\u673A\u5236\u7684\u7EC6\u8282\u3002</p><p>\u8981\u5B9E\u73B0\u4E00\u4E2A API \u670D\u52A1\u5668\uFF0C\u9996\u5148\u8981\u8003\u8651\u4E24\u4E2A\u65B9\u9762\uFF1AAPI \u98CE\u683C\u548C\u5A92\u4F53\u7C7B\u578B\u3002Go \u8BED\u8A00\u4E2D\u5E38\u7528\u7684 API \u98CE\u683C\u662F RPC \u548C REST\uFF0C\u5E38\u7528\u7684\u5A92\u4F53\u7C7B\u578B\u662F JSON\u3001XML \u548C Protobuf\u3002\u5728 Go API \u5F00\u53D1\u4E2D\u5E38\u7528\u7684\u7EC4\u5408\u662F gRPC+Protobuf \u548C REST+JSON\u3002</p><h2 id="rest-\u7B80\u4ECB" tabindex="-1">REST \u7B80\u4ECB <a class="header-anchor" href="#rest-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>REST \u4EE3\u8868\u8868\u73B0\u5C42\u72B6\u6001\u8F6C\u79FB\uFF08REpresentational State Transfer\uFF09\uFF0C\u7531 Roy Fielding \u5728\u4ED6\u7684 <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm" target="_blank" rel="noreferrer">\u8BBA\u6587</a> \u4E2D\u63D0\u51FA\u3002REST \u662F\u4E00\u79CD\u67B6\u6784\u98CE\u683C\uFF0C\u6307\u7684\u662F\u4E00\u7EC4\u67B6\u6784\u7EA6\u675F\u6761\u4EF6\u548C\u539F\u5219\u3002\u6EE1\u8DB3\u8FD9\u4E9B\u7EA6\u675F\u6761\u4EF6\u548C\u539F\u5219\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u8BBE\u8BA1\u5C31\u662F RESTful\u3002REST \u89C4\u8303\u628A\u6240\u6709\u5185\u5BB9\u90FD\u89C6\u4E3A\u8D44\u6E90\uFF0C\u7F51\u7EDC\u4E0A\u4E00\u5207\u7686\u8D44\u6E90\u3002REST \u67B6\u6784\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C\u5305\u62EC\u83B7\u53D6\u3001\u521B\u5EFA\u3001\u4FEE\u6539\u548C\u5220\u9664\uFF0C\u8D44\u6E90\u7684\u64CD\u4F5C\u6B63\u597D\u5BF9\u5E94 HTTP \u534F\u8BAE\u63D0\u4F9B\u7684 GET\u3001POST\u3001PUT \u548C DELETE \u65B9\u6CD5\u3002HTTP \u52A8\u8BCD\u4E0E REST \u98CE\u683C CRUD \u5BF9\u5E94\u5173\u7CFB\uFF1A</p><p><img src="//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a095d726d67a45dbae63a7d1480d6a27~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="rpc-\u7B80\u4ECB" tabindex="-1">RPC \u7B80\u4ECB <a class="header-anchor" href="#rpc-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>RPC \u5168\u79F0 Remote Procedure Call\uFF08\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\uFF09\uFF0C\u662F\u4E00\u79CD\u8FDB\u7A0B\u95F4\u901A\u4FE1\u65B9\u5F0F\u3002\u5B83\u5141\u8BB8\u7A0B\u5E8F\u8C03\u7528\u53E6\u4E00\u4E2A\u5730\u5740\u7A7A\u95F4\uFF08\u901A\u5E38\u662F\u5171\u4EAB\u7F51\u7EDC\u7684\u53E6\u4E00\u53F0\u673A\u5668\u4E0A\uFF09\u7684\u8FC7\u7A0B\u6216\u51FD\u6570\uFF0C\u800C\u4E0D\u7528\u7A0B\u5E8F\u5458\u663E\u5F0F\u7F16\u7801\u8FD9\u4E2A\u8FDC\u7A0B\u8C03\u7528\u7684\u7EC6\u8282\u3002\u5373\u7A0B\u5E8F\u5458\u65E0\u8BBA\u662F\u8C03\u7528\u672C\u5730\u7684\u8FD8\u662F\u8FDC\u7A0B\u7684\uFF0C\u672C\u8D28\u4E0A\u7F16\u5199\u7684\u8C03\u7528\u4EE3\u7801\u57FA\u672C\u76F8\u540C\u3002</p><p>RPC \u8FD9\u4E2A\u6982\u5FF5\u5728 20 \u4E16\u7EAA 80 \u5E74\u4EE3\u7531 Bruce Jay Nelson \u63D0\u51FA\u3002\u5728 Nelson \u7684\u8BBA\u6587 &quot;Implementing Remote Procedure Calls&quot; \u4E2D\u6211\u4EEC\u4E86\u89E3\u5230 RPC \u5177\u6709\u5982\u4E0B\u4F18\u70B9\uFF1A</p><ol><li>\u7B80\u5355\uFF1ARPC \u6982\u5FF5\u7684\u8BED\u4E49\u5341\u5206\u6E05\u6670\u548C\u7B80\u5355\uFF0C\u8FD9\u6837\u5EFA\u7ACB\u5206\u5E03\u5F0F\u8BA1\u7B97\u5C31\u66F4\u5BB9\u6613</li><li>\u9AD8\u6548\uFF1A\u8FC7\u7A0B\u8C03\u7528\u770B\u8D77\u6765\u5341\u5206\u7B80\u5355\u800C\u4E14\u9AD8\u6548</li><li>\u901A\u7528\uFF1A\u5728\u5355\u673A\u8BA1\u7B97\u4E2D\u8FC7\u7A0B\u5F80\u5F80\u662F\u4E0D\u540C\u7B97\u6CD5\u90E8\u5206\u95F4\u6700\u91CD\u8981\u7684\u901A\u4FE1\u673A\u5236</li></ol><p>\u7B80\u5355\u5730\u8BF4\uFF0C\u5C31\u662F\u4E00\u822C\u7A0B\u5E8F\u5458\u5BF9\u4E8E\u672C\u5730\u7684\u8FC7\u7A0B\u8C03\u7528\u5F88\u719F\u6089\uFF0C\u6211\u4EEC\u628A RPC \u505A\u6210\u548C\u672C\u5730\u8C03\u7528\u5B8C\u5168\u7C7B\u4F3C\uFF0C\u90A3\u4E48\u5C31\u66F4\u5BB9\u6613\u88AB\u63A5\u53D7\uFF0C\u4F7F\u7528\u8D77\u6765\u6BEB\u65E0\u969C\u788D\u3002</p><p><strong>RPC \u7ED3\u6784\uFF1A</strong></p><p>Nelson \u7684\u8BBA\u6587\u4E2D\u6307\u51FA\u5B9E\u73B0 RPC \u7684\u7A0B\u5E8F\u5305\u62EC 5 \u4E2A\u90E8\u5206\uFF1A</p><ol><li>User</li><li>User-stub</li><li>RPCRuntime</li><li>Server-stub</li><li>Server</li></ol><p><img src="//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78d54556e16845b7b7ceaf376eec9ceb~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>\u8FD9\u91CC User \u5C31\u662F client \u7AEF\uFF0C\u5F53 User \u60F3\u53D1\u8D77\u4E00\u4E2A\u8FDC\u7A0B\u8C03\u7528\u65F6\uFF0C\u5B83\u5B9E\u9645\u662F\u901A\u8FC7\u672C\u5730\u8C03\u7528 User-stub\u3002User-stub \u8D1F\u8D23\u5C06\u8C03\u7528\u7684\u63A5\u53E3\u3001\u65B9\u6CD5\u548C\u53C2\u6570\u901A\u8FC7\u7EA6\u5B9A\u7684\u534F\u8BAE\u89C4\u8303\u8FDB\u884C\u7F16\u7801\u5E76\u901A\u8FC7\u672C\u5730\u7684 RPCRuntime \u5B9E\u4F8B\u4F20\u8F93\u5230\u8FDC\u7AEF\u7684\u5B9E\u4F8B\u3002\u8FDC\u7AEF RPCRuntime \u5B9E\u4F8B\u6536\u5230\u8BF7\u6C42\u540E\u4EA4\u7ED9 Server-stub \u8FDB\u884C\u89E3\u7801\u540E\u53D1\u8D77\u672C\u5730\u7AEF\u8C03\u7528\uFF0C\u8C03\u7528\u7ED3\u679C\u518D\u8FD4\u56DE\u7ED9 User \u7AEF\u3002</p><h2 id="rest-vs-rpc" tabindex="-1">REST vs RPC <a class="header-anchor" href="#rest-vs-rpc" aria-hidden="true">#</a></h2><p>\u5728\u505A API \u670D\u52A1\u5668\u5F00\u53D1\u65F6\uFF0C\u5F88\u591A\u4EBA\u90FD\u4F1A\u9047\u5230\u8FD9\u4E2A\u95EE\u9898 \u2014\u2014 \u9009\u62E9 REST \u8FD8\u662F RPC\u3002RPC \u76F8\u6BD4 REST \u7684\u4F18\u70B9\u4E3B\u8981\u6709 3 \u70B9\uFF1A</p><ol><li>RPC+Protobuf \u91C7\u7528\u7684\u662F TCP \u505A\u4F20\u8F93\u534F\u8BAE\uFF0CREST \u76F4\u63A5\u4F7F\u7528 HTTP \u505A\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u8FD9\u79CD\u533A\u522B\u5BFC\u81F4 REST \u5728\u8C03\u7528\u6027\u80FD\u4E0A\u4F1A\u6BD4 RPC+Protobuf \u4F4E</li><li>RPC \u4E0D\u50CF REST \u90A3\u6837\uFF0C\u6BCF\u4E00\u4E2A\u64CD\u4F5C\u90FD\u8981\u62BD\u8C61\u6210\u5BF9\u8D44\u6E90\u7684\u589E\u5220\u6539\u67E5\uFF0C\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6709\u5F88\u591A\u64CD\u4F5C\u5F88\u96BE\u62BD\u8C61\u6210\u8D44\u6E90\uFF0C\u6BD4\u5982\u767B\u5F55\u64CD\u4F5C\u3002\u6240\u4EE5\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u5E76\u4E0D\u80FD\u4E25\u683C\u6309\u7167 REST \u89C4\u8303\u6765\u5199 API\uFF0CRPC \u5C31\u4E0D\u5B58\u5728\u8FD9\u4E2A\u95EE\u9898</li><li>RPC \u5C4F\u853D\u7F51\u7EDC\u7EC6\u8282\u3001\u6613\u7528\uFF0C\u548C\u672C\u5730\u8C03\u7528\u7C7B\u4F3C</li></ol><blockquote><p>\u8FD9\u91CC\u7684\u6613\u7528\u6307\u7684\u662F\u8C03\u7528\u65B9\u5F0F\u4E0A\u7684\u6613\u7528\u6027\u3002\u5728\u505A RPC \u5F00\u53D1\u65F6\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u5F88\u70E6\u7410\uFF0C\u9700\u8981\u5148\u5199\u4E00\u4E2A DSL \u63CF\u8FF0\u6587\u4EF6\uFF0C\u7136\u540E\u7528\u4EE3\u7801\u751F\u6210\u5668\u751F\u6210\u5404\u79CD\u8BED\u8A00\u4EE3\u7801\uFF0C\u5F53\u63CF\u8FF0\u6587\u4EF6\u6709\u66F4\u6539\u65F6\uFF0C\u5FC5\u987B\u91CD\u65B0\u5B9A\u4E49\u548C\u7F16\u8BD1\uFF0C\u7EF4\u62A4\u6027\u5DEE\u3002</p></blockquote><p>\u4F46\u662F REST \u76F8\u8F83 RPC \u4E5F\u6709\u5F88\u591A\u4F18\u52BF\uFF1A</p><ol><li>\u8F7B\u91CF\u7EA7\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u7EF4\u62A4\u6027\u548C\u6269\u5C55\u6027\u90FD\u6BD4\u8F83\u597D</li><li>REST \u76F8\u5BF9\u66F4\u89C4\u8303\uFF0C\u66F4\u6807\u51C6\uFF0C\u66F4\u901A\u7528\uFF0C\u65E0\u8BBA\u54EA\u79CD\u8BED\u8A00\u90FD\u652F\u6301 HTTP \u534F\u8BAE\uFF0C\u53EF\u4EE5\u5BF9\u63A5\u5916\u90E8\u5F88\u591A\u7CFB\u7EDF\uFF0C\u53EA\u8981\u6EE1\u8DB3 HTTP \u8C03\u7528\u5373\u53EF\uFF0C\u66F4\u9002\u5408\u5BF9\u5916\uFF0CRPC \u4F1A\u6709\u8BED\u8A00\u9650\u5236\uFF0C\u4E0D\u540C\u8BED\u8A00\u7684 RPC \u8C03\u7528\u8D77\u6765\u5F88\u9EBB\u70E6</li><li>JSON \u683C\u5F0F\u53EF\u8BFB\u6027\u66F4\u5F3A\uFF0C\u5F00\u53D1\u8C03\u8BD5\u90FD\u5F88\u65B9\u4FBF</li><li>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E25\u683C\u6309\u7167 REST \u89C4\u8303\u6765\u5199 API\uFF0CAPI \u770B\u8D77\u6765\u66F4\u6E05\u6670\uFF0C\u66F4\u5BB9\u6613\u88AB\u5927\u5BB6\u7406\u89E3</li></ol><p>\u5176\u5B9E\u4E1A\u754C\u666E\u904D\u91C7\u7528\u7684\u505A\u6CD5\u662F\uFF0C\u5185\u90E8\u7CFB\u7EDF\u4E4B\u95F4\u8C03\u7528\u7528 RPC\uFF0C\u5BF9\u5916\u7528 REST\uFF0C\u56E0\u4E3A\u5185\u90E8\u7CFB\u7EDF\u4E4B\u95F4\u53EF\u80FD\u8C03\u7528\u5F88\u9891\u7E41\uFF0C\u9700\u8981 RPC \u7684\u9AD8\u6027\u80FD\u652F\u6491\u3002\u5BF9\u5916\u7528 REST \u66F4\u6613\u7406\u89E3\uFF0C\u66F4\u901A\u7528\u4E9B\u3002\u5F53\u7136\u4EE5\u73B0\u6709\u7684\u670D\u52A1\u5668\u6027\u80FD\uFF0C\u5982\u679C\u4E24\u4E2A\u7CFB\u7EDF\u95F4\u8C03\u7528\u4E0D\u662F\u7279\u522B\u9891\u7E41\uFF0C\u5BF9\u6027\u80FD\u8981\u6C42\u4E0D\u662F\u975E\u5E38\u9AD8\uFF0C\u4EE5\u7B14\u8005\u7684\u5F00\u53D1\u7ECF\u9A8C\u6765\u770B\uFF0CREST \u7684\u6027\u80FD\u5B8C\u5168\u53EF\u4EE5\u6EE1\u8DB3\u3002\u672C\u5C0F\u518C\u4E0D\u662F\u8BA8\u8BBA\u5FAE\u670D\u52A1\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u9AD8\u9891\u8C03\u7528\u573A\u666F\uFF0C\u6B64\u5916 REST \u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u80FD\u591F\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u7684\u9700\u6C42\u573A\u666F\uFF0C\u6240\u4EE5 RPC \u7684\u6027\u80FD\u4F18\u52BF\u53EF\u4EE5\u5FFD\u7565\uFF0C\u76F8\u53CD\u57FA\u4E8E REST \u7684\u5176\u4ED6\u4F18\u52BF\uFF0C\u7B14\u8005\u66F4\u503E\u5411\u4E8E\u7528 REST \u6765\u6784\u5EFA API \u670D\u52A1\u5668\uFF0C\u672C\u5C0F\u518C\u6B63\u662F\u7528 REST \u98CE\u683C\u6765\u6784\u5EFA API \u7684\u3002</p><h2 id="\u5A92\u4F53\u7C7B\u578B\u9009\u62E9" tabindex="-1">\u5A92\u4F53\u7C7B\u578B\u9009\u62E9 <a class="header-anchor" href="#\u5A92\u4F53\u7C7B\u578B\u9009\u62E9" aria-hidden="true">#</a></h2><p>\u5A92\u4F53\u7C7B\u578B\u662F\u72EC\u7ACB\u4E8E\u5E73\u53F0\u7684\u7C7B\u578B\uFF0C\u8BBE\u8BA1\u7528\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u95F4\u7684\u901A\u4FE1\uFF0C\u5A92\u4F53\u7C7B\u578B\u7528\u4E8E\u4F20\u9012\u4FE1\u606F\uFF0C\u4E00\u4E2A\u6B63\u5F0F\u7684\u89C4\u8303\u5B9A\u4E49\u4E86\u8FD9\u4E9B\u4FE1\u606F\u5E94\u8BE5\u5982\u4F55\u8868\u793A\u3002HTTP \u7684 REST \u80FD\u591F\u63D0\u4F9B\u591A\u79CD\u4E0D\u540C\u7684\u54CD\u5E94\u5F62\u5F0F\uFF0C\u5E38\u89C1\u7684\u662F XML \u548C JSON\u3002JSON \u65E0\u8BBA\u4ECE\u5F62\u5F0F\u4E0A\u8FD8\u662F\u4F7F\u7528\u65B9\u6CD5\u4E0A\u90FD\u66F4\u7B80\u5355\u3002\u76F8\u6BD4 XML\uFF0CJSON \u7684\u5185\u5BB9\u66F4\u52A0\u7D27\u51D1\uFF0C\u6570\u636E\u5C55\u73B0\u5F62\u5F0F\u76F4\u89C2\u6613\u61C2\uFF0C\u5F00\u53D1\u6D4B\u8BD5\u90FD\u975E\u5E38\u65B9\u4FBF\uFF0C\u6240\u4EE5\u5728\u5A92\u4F53\u7C7B\u578B\u9009\u62E9\u4E0A\uFF0C\u9009\u62E9\u4E86 JSON \u683C\u5F0F\uFF0C\u8FD9\u4E5F\u662F\u5F88\u591A\u5927\u516C\u53F8\u6240\u91C7\u7528\u7684\u683C\u5F0F\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u4ECB\u7ECD\u4E86\u8F6F\u4EF6\u67B6\u6784\u4E2D API \u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5E76\u7B80\u5355\u4ECB\u7ECD\u4E86\u76F8\u5E94\u7684\u6280\u672F\uFF0C\u901A\u8FC7\u5BF9\u6BD4\uFF0C\u5F97\u51FA\u672C\u5C0F\u518C\u6240\u91C7\u7528\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1AAPI \u98CE\u683C\u91C7\u7528 REST\uFF0C\u5A92\u4F53\u7C7B\u578B\u9009\u62E9 JSON\u3002\u901A\u8FC7\u672C\u5C0F\u8282\u7684\u5B66\u4E60\uFF0C\u8BFB\u8005\u53EF\u4EE5\u4E86\u89E3\u5C0F\u518C\u6240\u6784\u5EFA API \u670D\u52A1\u5668\u6838\u5FC3\u6280\u672F\u7684\u9009\u578B\u548C\u539F\u56E0\u3002</p>',30),s=[t];function o(n,p,R,d,P,c){return r(),i("div",null,s)}const u=e(a,[["render",o]]);export{T as __pageData,u as default};
