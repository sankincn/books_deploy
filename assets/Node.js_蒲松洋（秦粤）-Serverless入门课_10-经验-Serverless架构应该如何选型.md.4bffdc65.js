import{_ as s,c as e,o as a,d as n}from"./app.c4f45da1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE","slug":"title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE","link":"#title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE","children":[]},{"level":2,"title":"\u4E91\u670D\u52A1\u5546","slug":"\u4E91\u670D\u52A1\u5546","link":"#\u4E91\u670D\u52A1\u5546","children":[]},{"level":2,"title":"\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F","slug":"\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F","link":"#\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F","children":[]},{"level":2,"title":"\u4E91\u4E0A\u90E8\u7F72K8s\u96C6\u7FA4Knative","slug":"\u4E91\u4E0A\u90E8\u7F72k8s\u96C6\u7FA4knative","link":"#\u4E91\u4E0A\u90E8\u7F72k8s\u96C6\u7FA4knative","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u4F5C\u4E1A","slug":"\u4F5C\u4E1A","link":"#\u4F5C\u4E1A","children":[]}],"relativePath":"Node.js/\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE/10-\u7ECF\u9A8C-Serverless\u67B6\u6784\u5E94\u8BE5\u5982\u4F55\u9009\u578B.md"}'),l={name:"Node.js/\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE/10-\u7ECF\u9A8C-Serverless\u67B6\u6784\u5E94\u8BE5\u5982\u4F55\u9009\u578B.md"},p=n(`<hr><h2 id="title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE" tabindex="-1">title: \u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE <a class="header-anchor" href="#title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE" aria-hidden="true">#</a></h2><p>10 | \u7ECF\u9A8C\uFF1AServerless\u67B6\u6784\u5E94\u8BE5\u5982\u4F55\u9009\u578B\uFF1F</p><p>\u4F60\u597D\uFF0C\u6211\u662F\u79E6\u7CA4\u3002\u901A\u8FC7\u524D\u9762\u7684\u4E24\u8282\u5B9E\u8DF5\u8BFE\uFF0C\u6211\u4EEC\u4F53\u9A8C\u4E86\u5728\u672C\u5730\u73AF\u5883\u4E2D\u642D\u5EFAK8s\uFF0C\u5E76\u4E14\u6211\u4EEC\u5229\u7528K8s\u7684\u7EC4\u4EF6\u6269\u5C55\u80FD\u529B\uFF0C\u5728\u672C\u5730\u7684K8s\u4E0A\u5B89\u88C5\u4E86Istio\u548CKnative\u3002\u6B63\u5982\u6211\u5728\u524D\u9762\u8BFE\u7A0B\u4E2D\u6240\u8BF4\u7684\uFF0CK8s\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u96C6\u7FA4\u67B6\u6784\uFF0C\u8F7B\u677E\u8FC1\u79FB\u5230\u5176\u4ED6\u96C6\u7FA4\u4E0A\uFF0C\u90A3\u4E48\u4ECA\u5929\u6211\u5C31\u5E26\u4F60\u5C06\u6211\u4EEC\u672C\u5730K8\u4E0A\u90E8\u7F72\u7684\u201C\u5F85\u529E\u4EFB\u52A1\u201DWeb\u670D\u52A1\u90E8\u7F72\u5230\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\u3002</p><p>\u5B9E\u8DF5\u8BFE\u91CC\u8FD8\u6709\u8FD9\u4E48\u4E2A\u5C0F\u7EC6\u8282\uFF0C\u4E0D\u77E5\u9053\u4F60\u6CE8\u610F\u6CA1\uFF0C\u6211\u4EEC\u4F7F\u7528Knative\u65F6\uFF0C\u5E94\u7528\u548C\u5FAE\u670D\u52A1\u90E8\u7F72\u90FD\u9700\u8981\u5173\u5FC3\u9879\u76EE\u5E94\u7528\u4E2D\u7684Dockerfile\uFF0C\u800C\u6211\u5728\u4F7F\u7528FaaS\u51FD\u6570\u65F6\uFF0C\u8FDEDockerfile\u90FD\u4E0D\u7528\u7BA1\u4E86\uFF0C\u5176\u5B9E\u8FD9\u5C31\u662FServerless\u5E26\u6765\u7684\u53D8\u9769\u4E4B\u4E00\u3002\u5F53\u7136\uFF0C\u73B0\u5728\u6709\u5F88\u591A\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\uFF0C\u4E5F\u505A\u4E86Serverless\u5316\uFF0C\u8BA9\u6211\u4EEC\u90E8\u7F72\u4E00\u4E2A\u5E94\u7528\u65F6\u53EA\u9700\u8981\u5173\u5FC3Release\u5206\u652F\u7684\u4EE3\u7801\u5408\u5E76\uFF0C\u4F8B\u5982Heroku\u3001SAE\u7B49\u7B49\u3002</p><p>\u8FD9\u91CC\u6211\u9700\u8981\u5148\u89E3\u91CA\u4E00\u4E0B\uFF0CK8s\u96C6\u7FA4\u7684\u8FD0\u7EF4\u5DE5\u4F5C\u5BF9\u4E8E\u5F88\u591A\u4E2A\u4EBA\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u662F\u6709\u4E9B\u91CD\u7684\u3002\u6211\u4EEC\u901A\u5E38\u4E86\u89E3\u57FA\u672C\u77E5\u8BC6\uFF0C\u7528kubectl\u8C03\u7528K8s\u96C6\u7FA4\u5C31\u53EF\u4EE5\u4E86\u3002\u54B1\u4EEC\u8BFE\u7A0B\u91CC\uFF0C\u6211\u662F\u4E3A\u4E86\u8BA9\u4F60\u66F4\u597D\u7406\u89E3Serverless\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u6240\u4EE5\u624D\u5411\u4F60\u4ECB\u7ECDKnative\u5728K8s\u4E0A\u7684\u642D\u5EFA\u548C\u4F7F\u7528\u8FC7\u7A0B\u3002</p><p>\u5B9E\u9645\u5DE5\u4F5C\u4E2DK8s\u96C6\u7FA4\u7684\u8FD0\u7EF4\uFF0C\u8FD8\u662F\u5E94\u8BE5\u4EA4\u7ED9\u4E13\u4E1A\u7684\u8FD0\u7EF4\u4EBA\u5458\u3002\u53E6\u5916\uFF0C\u4E91\u670D\u52A1\u5546\u7684K8s\u96C6\u7FA4\uFF0C\u90FD\u4F1A\u63D0\u4F9B\u63A7\u5236\u9762\u677F\uFF0C\u4E00\u952E\u5B89\u88C5\u7EC4\u4EF6\u3002\u6211\u4EEC\u5728\u4F7F\u7528Serverless\u7684\u90E8\u7F72\u5E94\u7528\u65F6\uFF0C\u4E0D\u7528\u5173\u5FC3\u5E95\u5C42\u201C\u88AB\u900F\u660E\u5316\u201D\u7684\u7C7B\u4F3CKnative\u3001Istio\u7B49\u7B49\u63D2\u4EF6\u80FD\u529B\uFF0C\u8FD9\u4E5F\u662FServerless\u5E94\u7528\u7684\u4EF7\u503C\u6240\u5728\uFF0C\u867D\u7136\u5B83\u672C\u8EAB\u7684\u5E95\u5C42\u6784\u5EFA\u5728\u590D\u6742\u4E14\u7CBE\u5BC6\u7684\u5404\u79CD\u670D\u52A1\u4E0A\uFF0C\u4F46\u6211\u4EEC\u4F7F\u7528Serverless\u5374\u6781\u5176\u7CBE\u7B80\u3002</p><p>\u5728\u5F00\u59CB\u90E8\u7F72K8s\u4E0A\u4E91\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u4E91\u670D\u52A1\u5546\u3002\u6B63\u5982\u6211\u4EEC\u4E0A\u8282\u8BFE\u6240\u8BF4\uFF0CK8s\u6574\u4F53\u67B6\u6784\u8FC1\u79FB\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u6211\u4EEC\u7834\u89E3Vendor-lock\uFF0C\u53EA\u8981\u6211\u4EEC\u90E8\u7F72\u7684\u4E91\u670D\u52A1\u5546\u662FCNCF\u7684\u6210\u5458\uFF0C\u652F\u6301K8s\u96C6\u7FA4\u5C31\u53EF\u4EE5\u4E86\u3002\u5B9E\u9645\u4E0A\u76EE\u524D\u51E0\u4E4E\u6240\u6709\u7684\u4E91\u670D\u52A1\u5546\u90FD\u52A0\u5165\u4E86CNCF\u9635\u8425\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u7684K8s\u7248\u672C\u7684\u201C\u5F85\u529E\u4EFB\u52A1\u201DWeb\u670D\u52A1\uFF0C\u53EF\u4EE5\u4EFB\u610F\u9009\u62E9\u4E91\u670D\u52A1\u5546\u90E8\u7F72\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u6A2A\u5411\u5BF9\u6BD4\u4E91\u670D\u52A1\u5546\u7684\u5404\u9879\u6307\u6807\u53BB\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u7684\u3002\u5F53\u6211\u4EEC\u6709\u4E86\u9009\u62E9\u6743\uFF0C\u4E5F\u53CD\u5411\u4FC3\u8FDB\u4E86\u4E91\u670D\u52A1\u5546\u7684\u826F\u6027\u7ADE\u4E89\u3002</p><h2 id="\u4E91\u670D\u52A1\u5546" tabindex="-1">\u4E91\u670D\u52A1\u5546 <a class="header-anchor" href="#\u4E91\u670D\u52A1\u5546" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u770B\u770B2019\u5E74\u7684<a href="https://www.canalys.com/newsroom/canalys-worldwide-cloud-infrastructure-Q4-2019-and-full-year-2019" target="_blank" rel="noreferrer">\u5168\u7403\u4E91\u670D\u52A1\u5546\u7684\u5E02\u573A\u5360\u6709\u7387</a>\u6570\u636E\uFF0C\u6211\u4E5F\u5C06\u6309\u7167\u8FD9\u4E2A\u6570\u636E\u6392\u540D\uFF0C\u4F9D\u6B21\u5411\u4F60\u4ECB\u7ECD\u4E91\u670D\u52A1\u5546\u548C\u4ED6\u7684\u4E3B\u8981\u7279\u8272\uFF1A</p><ol><li>\u4E9A\u9A6C\u900A\u7684AWS\u5E02\u5360\u738732.4%\u3002\u4E9A\u9A6C\u900A\u51ED\u501F\u5E9E\u5927\u590D\u6742\u7684\u5168\u7403\u7535\u5546\u4E1A\u52A1\uFF0C\u8BA9\u5176\u673A\u623F\u505A\u5230\u4E86\u8986\u76D6\u5168\u7403\uFF0C\u5E76\u5F15\u9886\u4E91\u670D\u52A1\u7684\u53D1\u5C55\uFF0C\u63D0\u4F9B\u6700\u5168\u9762\u7684\u751F\u6001\u548C\u6700\u9AD8\u7A33\u5B9A\u6027\u7684\u670D\u52A1\u3002\u4E91\u670D\u52A1\u5546\u8001\u5927\u7684\u5730\u4F4D\u8FD1\u5E74\u5185\u90FD\u96BE\u4EE5\u64BC\u52A8\u3002</li><li>\u5FAE\u8F6F\u7684Azure\u5E02\u5360\u738717.6%\u3002\u4F9D\u8D56\u5FAE\u8F6FWindows\u5168\u5BB6\u6876\u7684\u4F18\u52BF\u548C\u8FD1\u5E74\u7684JavaScrpit\u6280\u672F\u793E\u533A\u7684\u6536\u8D2D\u6216\u8005\u5E76\u8D2D\uFF0C\u4ED6\u7684\u5E02\u573A\u5730\u4F4D\u7D27\u8DDF\u4E9A\u9A6C\u900A\u4E4B\u540E\u3002\u6574\u4F53\u4E91\u670D\u52A1\u4EA7\u54C1\u7684\u62A5\u4EF7\u4E5F\u7D27\u76EFAWS\uFF0C\u6240\u6709\u670D\u52A1\u4EF7\u683C\u7565\u4F4E\u4E8EAWS\u3002</li><li>\u963F\u91CC\u5DF4\u5DF4\u7684\u963F\u91CC\u4E91\uFF0C\u5E02\u5360\u73876.0%\u3002\u56FD\u5185\u5E02\u573A\u5360\u6709\u7387\u7B2C\u4E00\uFF0C\u968F\u7740\u963F\u91CC\u7535\u5546\u4E1A\u52A1\u51FA\u6D77\uFF0C\u963F\u91CC\u4E91\u673A\u623F\u4E5F\u90E8\u7F72\u5230\u4E86\u6D77\u5916\u3002\u5728\u56FD\u5185\u4E91\u91CC\u751F\u6001\u5EFA\u8BBE\u5F97\u6BD4\u8F83\u5B8C\u5907\uFF0C\u6BCF\u5E74\u90FD\u7ECF\u53D7\u53CC\u5341\u4E00\u6D41\u91CF\u7684\u6D17\u793C\uFF0C\u4E0D\u65AD\u6253\u78E8\u7A33\u5B9A\u6027\u3002\u5BA2\u670D\u54CD\u5E94\u901F\u5EA6\u662F\u4E00\u5927\u4EAE\u70B9\u3002</li><li>\u8C37\u6B4C\u7684\u8C37\u6B4C\u4E91\uFF0C\u5E02\u573A\u5360\u6709\u73875.4%\u3002\u8C37\u6B4C\u662F\u540E\u8D77\u4E4B\u79C0\uFF0C\u51ED\u501F15\u5E74\u63D0\u51FACNCF\u4E91\u539F\u751F\u767D\u76AE\u4E66\uFF0C\u901A\u8FC7\u5EFA\u7ACB\u89C4\u8303\u548C\u5F00\u6E90\u751F\u6001\uFF0C\u8FC5\u901F\u5207\u5165\u4E91\u670D\u52A1\u9886\u57DF\u5E76\u5360\u6709\u4E00\u5E2D\u4E4B\u5730\u3002\u4EF7\u683C\u7B56\u7565\u4E0A\u7D27\u76EFAWS\uFF0C\u5E76\u4F9D\u9760Google\u7684\u641C\u7D22\u5F15\u64CE\u5BF9\u5927\u89C4\u6A21\u96C6\u7FA4\u8C03\u5EA6\u80FD\u529B\u7684\u79EF\u7D2F\u3002\u4E91\u670D\u52A1\u5546\u4E2D\u6700\u9AD8\u7684\u7269\u7406\u673A\u8D44\u6E90\u5229\u7528\u7387\uFF0C\u8BA9\u8C37\u6B4C\u4E91\u7684\u4EF7\u683C\u505A\u5230\u4E86\u4E91\u670D\u52A1\u5546\u4E2D\u7684\u6700\u4F4E\u3002</li><li>\u5176\u4ED6\u4E91\uFF0C\u5E02\u573A\u5360\u6709\u738738.5%\u3002\u817E\u8BAF\u4E91\u3001\u534E\u4E3A\u4E91\u7B49\u5176\u4ED6\u7684\u4E91\u670D\u52A1\u5546\u90FD\u5F52\u5E76\u5230\u4E86\u8FD9\u91CC\uFF0C\u8FD8\u6709\u4E00\u4E9B\u4E13\u95E8\u505A\u4E13\u6709\u4E91\u670D\u52A1\u7684\uFF0C\u6BD4\u5982CDN\u5168\u7403\u52A0\u901F\u7684Akamai\uFF0CPaaS\u5E94\u7528\u6258\u7BA1\u7684Heroku\u7B49\u7B49\u3002\u503C\u5F97\u4E00\u63D0\u7684\u662F\u817E\u8BAF\u4E91\uFF0C\u817E\u8BAF\u4E91\u4ECE2019\u5E74\u5F00\u59CB\u5927\u529B\u53D1\u5C55Serverless\uFF0C\u5E76\u79EF\u6781\u548CServerless\u751F\u6001\u5408\u4F5C\uFF0C\u4F30\u8BA1\u662F\u5E0C\u671B\u4EE5\u6B64\u4E3A\u7A81\u7834\u70B9\u63D0\u5347\u81EA\u5DF1\u7684\u5E02\u573A\u5360\u6709\u7387\u3002</li></ol><p>\u4E0B\u9762\u662F\u6211\u6309\u6211\u76EE\u524D\uFF08\u6CE8\u610F\u53EA\u662F\u76EE\u524D\uFF09\u638C\u63E1\u7684\u6570\u636E\u548C\u8BA4\u77E5\u6574\u7406\u7684\u8868\u683C\uFF0C\u5728\u9009\u62E9\u4E91\u670D\u52A1\u5546\u65F6\u4F60\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u8003\u3002\u5176\u4E2D\u8BBF\u95EE\u9650\u5236\u5E94\u8BE5\u662F\u6700\u4F18\u5148\u8003\u8651\u7684\uFF0C\u56FD\u5185\u8FD0\u8425\u90E8\u7F72\u7684\u5E94\u7528\uFF0C\u80AF\u5B9A\u662F\u8981\u9996\u9009\u56FD\u5185\u4E91\u670D\u52A1\u5546\u3002</p><p><img src="https://static001.geekbang.org/resource/image/d3/63/d3f31145aa72d7390db032b81b947663.png" alt=""></p><p>\u5F53\u6211\u4EEC\u5B8C\u6210\u4E91\u670D\u52A1\u5546\u7684\u9009\u62E9\u540E\uFF0C\u7406\u8BBA\u4E0A\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7Docker\u5BB9\u5668\uFF0C\u521B\u5EFA\u6211\u4EEC\u6240\u9700\u8981\u7684\u5404\u79CD\u670D\u52A1\uFF0C\u4F8B\u5982Redis\u3001MySQL\u3001Kafka\u7B49\u7B49\u3002\u5177\u4F53\u600E\u4E48\u505A\uFF0C\u4F60\u5E94\u8BE5\u5F88\u719F\u6089\u4E86\uFF0C\u5148\u53BBDocker Hub \u5B98\u7F51\uFF0C\u627E\u5230\u6211\u4EEC\u6240\u9700\u8981\u7684\u670D\u52A1\u955C\u50CF\uFF0C\u5728\u8FD9\u4E2A\u955C\u50CF\u7684\u57FA\u7840\u4E0A\u52A0\u4E0A\u6211\u4EEC\u81EA\u5DF1\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u751F\u6210\u79C1\u6709Docker\u955C\u50CF\u4E0A\u4F20\u5230\u6211\u4EEC\u7684Registry\uFF0C\u7136\u540E\u5728K8s\u96C6\u7FA4\u4E2D\u5C31\u53EF\u4EE5\u90E8\u7F72\u4E86\u3002\u8FD9\u4E5F\u662F\u524D\u9762\u6211\u4EEC\u8BB2\u5230\u7684Docker\u5BB9\u5668\u5E26\u6765\u7684\u98A0\u8986\u5F0F\u4F53\u9A8C\u3002</p><p>\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u5728\u91CD\u5EA6\u4F7F\u7528Docker\u6280\u672F\u7684\u540C\u65F6\uFF0C\u4E5F\u5FC5\u987B\u6DF1\u5165\u4E86\u89E3Docker\u548C\u6211\u4EEC\u6240\u7528\u7684\u5177\u4F53\u955C\u50CF\u7684\u9650\u5236\u3002\u6BD4\u5982\uFF0C\u5982\u4F55\u89E3\u51B3\u5E94\u7528\u955C\u50CF\u786C\u76D8\u6301\u4E45\u5316\u7684\u95EE\u9898\u3001\u5982\u4F55\u89E3\u51B3MySQL\u955C\u50CF\u7684\u5BB9\u5668\u6269\u7F29\u5BB9\u7684\u95EE\u9898\u3001Kafka\u955C\u50CF\u96C6\u7FA4\u5982\u4F55\u642D\u5EFA\u7B49\u7B49\u3002\u8FD9\u4E9B\u90FD\u662F\u65B0\u6280\u672F\u5F15\u5165\u7684\u65B0\u7684\u95EE\u9898\uFF0C\u800C\u4E14\u89E3\u51B3\u65B9\u6848\u548C\u4F20\u7EDF\u8FD0\u7EF4\u865A\u62DF\u673A\u4E5F\u4E0D\u4E00\u6837\u3002</p><p>\u53E6\u5916\uFF0C\u4E3A\u4E86\u63D0\u5347\u6211\u4EEC\u7684\u7814\u53D1\u6548\u80FD\uFF0C\u6211\u4EEC\u8FD8\u5E94\u8BE5\u8FDB\u4E00\u6B65\u4E86\u89E3\u4E91\u670D\u52A1\u5546\u8FD8\u80FD\u4E3A\u6211\u4EEC\u63D0\u4F9B\u54EA\u4E9B\u80FD\u529B\uFF0C\u8282\u7701\u6211\u4EEC\u7684\u65F6\u95F4\u548C\u6210\u672C\u3002\u5F53\u6211\u4EEC\u5F00\u53D1\u4E00\u4E2A\u4E91\u4E0A\u9879\u76EE\u65F6\uFF0C\u4E91\u670D\u52A1\u5546\u5DF2\u7ECF\u4E3A\u6211\u4EEC\u51C6\u5907\u4E86\u5404\u79CD\u884C\u4E1A\u89E3\u51B3\u65B9\u6848\uFF0C\u6765\u63D0\u5347\u6211\u4EEC\u7684\u5F00\u53D1\u901F\u5EA6\uFF0C\u4F8B\u5982\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u3001\u89C6\u9891\u5A92\u4F53\u6D41\u8F6C\u7801\u670D\u52A1\u3001\u7269\u8054\u7F51MQTT\u89E3\u51B3\u65B9\u6848\u7B49\u7B49\u3002\u5229\u7528\u8FD9\u4E9B\u670D\u52A1\u548C\u6211\u4EEC\u524D\u9762\u8BB2\u7684\u670D\u52A1\u7F16\u6392\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u52A0\u901F\u6211\u4EEC\u7684\u7814\u53D1\u901F\u5EA6\u3002</p><h2 id="\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F" tabindex="-1">\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F <a class="header-anchor" href="#\u4E91\u670D\u52A1\u5982\u4F55\u9009\u578B\uFF1F" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u4E91\u670D\u52A1\u5546\u90FD\u63D0\u4F9B\u6570\u4EE5\u767E\u8BA1\u7684\u5404\u79CD\u670D\u52A1\uFF0C\u4F46\u5927\u4F53\u4E0A\u6211\u4EEC\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B3\u7C7B\uFF1AIaaS\u3001PaaS\u548CSaaS\u3002</p><p><img src="https://static001.geekbang.org/resource/image/af/42/af06bd8f061823956d558be91b446442.png" alt=""></p><p>\u6211\u4EEC\u5148\u770B\u770B\u56FE\u793A\u4E2D\u7684\u91D1\u5B57\u5854\uFF0C\u8FD9\u91CC\u6211\u9700\u8981\u5F15\u5165\u65B0\u7684\u6982\u5FF5\u670D\u52A1\u7EA7\u522B\u534F\u8BAESLA\uFF1A\u670D\u52A1\u63D0\u4F9B\u5546\u4E0E\u53D7\u670D\u52A1\u7528\u6237\u4E4B\u95F4\u5177\u4F53\u8FBE\u6210\u4E86\u627F\u8BFA\u7684\u670D\u52A1\u6307\u6807\u2014\u2014\u8D28\u91CF\u3001\u53EF\u7528\u6027\u3001\u8D23\u4EFB\u3002\u770B\u4E0A\u53BB\u6709\u4E9B\u7ED5\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u670D\u52A1\u4E0D\u8FBE\u6807\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5411\u4E91\u670D\u52A1\u5546\u7D22\u8D54\u635F\u5931\u3002</p><p>\u6211\u4EEC\u524D\u9762\u8BFE\u7A0B\u4E2D\u6240\u8BF4\u7684\uFF0C\u6D88\u606F\u961F\u5217\u7684\u7A33\u5B9A\u6027\u8FBE\u523010\u4E2A9\uFF0C\u5176\u5B9E\u5C31\u662F\u6307SLA\u6307\u6807\u6570\u636E\u53EF\u9760\u6027\u4E3A99.99999999%\uFF0C\u4F46\u662F\uFF0C\u6D88\u606F\u961F\u5217\u7684\u670D\u52A1\u53EF\u7528\u6027\u5176\u5B9E\u662F99.95%\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6D88\u606F\u961F\u5217\u670D\u52A1\u670D\u52A1\u4E00\u5E74\u4E2D\u4E0D\u53EF\u4F7F\u7528\u65F6\u95F4\u4E3A4.38\u5C0F\u65F6\uFF0C\u4E00\u65E6\u4E0D\u53EF\u7528\u65F6\u95F4\u8D85\u8FC7\u4E86\u8FD9\u4E2A\u8981\u6C42\uFF0C\u4E91\u670D\u52A1\u5546\u5219\u9700\u8981\u5411\u5BA2\u6237\u8D54\u4ED8\uFF08\u5982\u679C\u8FD9\u90E8\u5206\u77E5\u8BC6\u4F60\u6CA1\u63A5\u89E6\u8FC7\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u4E0B\u8D75\u6210\u8001\u5E08\u7684<a href="https://time.geekbang.org/column/article/212722" target="_blank" rel="noreferrer">\u8FD9\u7BC7\u6587\u7AE0</a>\uFF09\u3002</p><p>\u56E0\u6B64\u5BF9\u4E8E\u4E91\u670D\u52A1\u5546\u6765\u8BF4\uFF0C\u8981\u7EF4\u6301\u8D44\u6E90\u7684\u9AD8\u53EF\u7528\u6027\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u8D44\u6E90\u8C03\u5EA6\u53CA\u65F6\uFF0C\u5B81\u53EF\u6D6A\u8D39\u90E8\u5206\u8D44\u6E90\uFF0C\u4E5F\u4E0D\u80FD\u727A\u7272\u7528\u6237\u7684\u53EF\u7528\u6027\u3002\u800C\u4E91\u670D\u52A1\u7684\u4EF7\u683C\u5219\u548C\u7269\u7406\u673A\u865A\u62DF\u5316\u6BD4\u4F8B\u5F3A\u76F8\u5173\uFF0C\u865A\u62DF\u5316\u6BD4\u4F8B\u8D8A\u4F4E\uFF0C\u8BF4\u660E\u4F60\u5BF9\u8FD9\u4E2A\u8D44\u6E90\u72EC\u5360\u6027\u8D8A\u9AD8\uFF0C\u5F53\u7136\u4EF7\u683C\u4E5F\u5C31\u8D8A\u9AD8\u3002\u7269\u7406\u673A\u865A\u62DF\u5316\u6BD4\u4F8B\uFF0C\u4E5F\u662F\u4E91\u670D\u52A1\u5546\u7684\u8D44\u6E90\u8C03\u5EA6\u80FD\u529B\uFF0C\u5BF9\u4E91\u670D\u52A1\u5546\u6765\u8BF4\u6838\u5FC3\u6307\u6807\u5C31\u662FCPU\u5229\u7528\u7387\u3002</p><p>\u4E86\u89E3\u4E86\u4E00\u4E9B\u524D\u63D0\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5177\u4F53\u770B\u770B\u8FD93\u7C7B\u3002</p><ul><li>IaaS\u5C42\u662F\u9762\u5411\u8FD0\u7EF4\u4EBA\u5458\uFF0C\u670D\u52A1\u5668\u6216\u865A\u62DF\u673A\u670D\u52A1\u3002\u53EF\u7528\u6027\u4E5F\u6700\u9AD8\uFF0C\u901A\u5E38\u53EF\u4EE5\u52304\u4E2A9\uFF0C99.99%\u3002\u53EF\u63A7\u6027\u9AD8\uFF0C\u865A\u62DF\u673A\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u5F00\u59CB\uFF0C\u4F60\u53EF\u4EE5\u767B\u5F55\u865A\u62DF\u673A\uFF0C\u5E76\u4E14\u4EFB\u610F\u5B89\u88C5\u5404\u79CD\u81EA\u5DF1\u6240\u9700\u7684\u51FD\u6570\u5E93\u548C\u4E8C\u8FDB\u5236\u5305\u3002\u8D44\u6E90\u7684\u7269\u7406\u673A\u865A\u62DF\u5316\u6BD4\u4F8B\uFF0C\u901A\u5E38\u662F2:1\u7684\uFF0C\u6027\u80FD\u662F\u6700\u7A33\u5B9A\u7684\u3002</li><li>PaaS\u5C42\u662F\u9762\u5411\u5F00\u53D1\u8005\uFF0C\u901A\u5E38\u90E8\u7F72\u5728IaaS\u5C42\u4E4B\u4E0A\uFF0C\u670D\u52A1\u79CD\u7C7B\u6700\u4E3A\u7E41\u591A\u3002\u53EF\u7528\u6027\u4F4E\u4E8EIaaS\uFF0C\u901A\u5E38\u662F99.95%\u3002\u53EF\u63A7\u6027\u4E2D\u7B49\uFF0CPaaS\u901A\u5E38\u90FD\u63D0\u4F9B\u7279\u5B9A\u7684\u670D\u52A1\uFF0C\u4F8B\u5982\u5E94\u7528\u6258\u7BA1\u3001\u6570\u636E\u5E93\u7B49\u7B49\uFF0C\u6211\u4EEC\u53EA\u80FD\u901A\u8FC7\u63D0\u4F9B\u7684\u63A7\u5236\u53F0\u767B\u5F55\u3002\u8D44\u6E90\u7684\u7269\u7406\u673A\u865A\u62DF\u5316\u6BD4\u4F8B\uFF0C\u901A\u5E38\u662F4:1\uFF0C\u6027\u80FD\u8F83\u7A33\u5B9A\u3002</li><li>SaaS\u5C42\u662F\u9762\u5411\u7EC8\u7AEF\u7528\u6237\uFF0C\u901A\u5E38\u90E8\u7F72\u5728PaaS\u5C42\u4E4B\u4E0A\u3002\u53EF\u7528\u6027\u4F4E\u4E8EPaaS\uFF0C\u901A\u5E38\u662F99.9%\u3002\u53EF\u63A7\u6027\u4F4E\uFF0CSaaS\u76F4\u63A5\u9762\u5411\u7528\u6237\u63D0\u4F9B\u670D\u52A1\uFF0C\u6211\u4EEC\u53EA\u80FD\u767B\u5F55\u540E\u53F0\u64CD\u4F5C\u90E8\u5206\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5\u3002\u8D44\u6E90\u7684\u7269\u7406\u673A\u865A\u62DF\u5316\u6BD4\u4F8B\u4E0D\u592A\u786E\u5B9A\uFF0C\u4F46\u80AF\u5B9A\u8D85\u8FC78:1\uFF0C\u6027\u80FD\u4E00\u822C\u3002</li></ul><p>FaaS\u5219\u662F\u4E00\u4E2A\u7279\u4F8B\uFF0C\u867D\u7136\u5B83\u4E5F\u5C5E\u4E8E\u9762\u5411\u5F00\u53D1\u8005\u7684\uFF0C\u4F46\u5229\u7528FaaS\u6781\u901F\u7684\u51B7\u542F\u52A8\u7279\u6027\uFF0C\u5B83\u5E76\u4E0D\u9700\u8981\u5173\u5FC3\u5E95\u5C42\u7684\u9AD8\u53EF\u7528\u6027\u3002\u53CD\u800C\u7528\u5B83\u53EF\u4EE5\u586B\u6EE1\u95F2\u7F6E\u7684\u673A\u5668\u8D44\u6E90\uFF0C\u63D0\u5347\u7269\u7406\u673A\u7684\u8D44\u6E90\u5229\u7528\u7387\u3002\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5728\u4E91\u670D\u52A1\u5546\u8FD9\u4E48\u9AD8\u7684\u8FD0\u4F5C\u6210\u672C\u4E0B\uFF0CFaaS\u8FD8\u80FD\u514D\u8D39\u63D0\u4F9B\u7ED9\u5927\u5BB6\u4F7F\u7528\u3002</p><p><img src="https://static001.geekbang.org/resource/image/41/9b/4162456b4550db3be9be6daead865d9b.png" alt=""></p><p>\u6211\u4ECB\u7ECDSLA\uFF0C\u4E3B\u8981\u662F\u5E0C\u671B\u4F60\u80FD\u5BF9\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684\u670D\u52A1\u5C42\u7EA7\u6709\u4E2A\u8BA4\u8BC6\u3002\u6211\u4EEC\u5728\u8BBE\u8BA1\u548C\u8FD0\u7EF4\u81EA\u5DF1\u7684\u5E94\u7528\u65F6\uFF0C\u9700\u8981\u7EFC\u5408\u8003\u8651\u5230\u53EF\u7528\u6027\u548C\u4EF7\u683C\u3002FaaS\u662F\u6027\u4EF7\u6BD4\u6700\u9AD8\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u65E5\u5E38\u4F7F\u7528\u65F6\uFF0C\u5982\u679C\u6709\u9002\u5408FaaS\u7684\u573A\u666F\uFF0C\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5730\u4F7F\u7528FaaS\u3002</p><p>\u5982\u679C\u8981\u6DF1\u5165\u4E86\u89E3\u4E91\u670D\u52A1\uFF0C\u6211\u7684\u7ECF\u9A8C\u662F\u53EF\u4EE5\u4ECE\u4E91\u670D\u52A1\u5546\u7F51\u7AD9\u7684\u884C\u4E1A\u89E3\u51B3\u65B9\u6848\u51FA\u53D1\u3002\u5148\u7C97\u7565\u4E86\u89E3\u4E00\u4E0B\uFF0C\u6709\u54EA\u4E9B\u884C\u4E1A\u89E3\u51B3\u65B9\u6848\uFF0C\u4FBF\u4E8E\u6211\u4EEC\u638C\u63E1\u4E91\u670D\u52A1\u5546\u7684\u80FD\u529B\u8FB9\u754C\u3002\u5982\u679C\u611F\u89C9\u6BD4\u8F83\u51CC\u4E71\u7684\u8BDD\uFF0C\u6700\u597D\u81EA\u5DF1\u7528\u201C\u8111\u56FE\u201D\u68B3\u7406\u4E00\u6B21\u3002\u53E6\u5916\u518D\u8BF4\u53E5\u9898\u5916\u8BDD\uFF0C\u6211\u4E0D\u5EFA\u8BAE\u4F60\u5B66\u4E60\u522B\u4EBA\u7684\u8111\u56FE\uFF0C\u56E0\u4E3A\u8111\u56FE\u90FD\u662F\u81EA\u5DF1\u68B3\u7406\u601D\u8003\u7684\u8FC7\u7A0B\uFF0C\u4F60\u81EA\u5DF1\u5927\u8111\u7684Map\u4E0D\u4E00\u5B9A\u9002\u5408\u522B\u4EBA\uFF0C\u522B\u4EBA\u7684Map\u4E5F\u4E0D\u9002\u5408\u4F60\u3002</p><p>\u8A00\u5F52\u6B63\u4F20\uFF0C\u6211\u4EEC\u81EA\u5DF1\u5728\u4E91\u4E0A\u642D\u5EFAK8s\u96C6\u7FA4\u4E3B\u8981\u67092\u79CD\u65B9\u5F0F\uFF1A\u8D2D\u4E70\u865A\u62DF\u673A\u81EA\u5EFA\u548C\u8D2D\u4E70K8s\u96C6\u7FA4\u3002\u5F53\u7136\u9996\u63A8\u8D2D\u4E70K8s\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u8282\u7701\u6211\u4EEC\u66F4\u591A\u6210\u672C\u3002K8s\u96C6\u7FA4\u7684Master\u8282\u70B9\uFF0C\u963F\u91CC\u4E91K8s\u96C6\u7FA4\u662F\u4E0D\u6536\u8D39\u7684\uFF0C\u800C\u6211\u4EEC\u81EA\u5DF1\u642D\u5EFA\u5219\u9700\u8981\u81F3\u5C11\u4E00\u53F0\u865A\u62DF\u673A\u3002\u865A\u62DF\u673A\u81EA\u5EFA\uFF0C\u6BD4\u8F83\u9002\u5408\u5927\u578B\u6216\u62E5\u6709\u5F3A\u5927\u8FD0\u7EF4\u56E2\u961F\u7684\u4E92\u8054\u7F51\u516C\u53F8\u3002\u4F46\u65E0\u8BBA\u662F\u81EA\u5EFA\u8FD8\u662F\u8D2D\u4E70K8s\u96C6\u7FA4\uFF0C\u6211\u4EEC\u642D\u5EFA\u7684K8s\u96C6\u7FA4\u7684\u5E95\u5C42\u90FD\u662FIaaS\u3002</p><h2 id="\u4E91\u4E0A\u90E8\u7F72k8s\u96C6\u7FA4knative" tabindex="-1">\u4E91\u4E0A\u90E8\u7F72K8s\u96C6\u7FA4Knative <a class="header-anchor" href="#\u4E91\u4E0A\u90E8\u7F72k8s\u96C6\u7FA4knative" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u5B8C\u9009\u578B\u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u8FD8\u662F\u52A8\u624B\u5B9E\u64CD\u4E00\u4E0B\u3002</p><p>\u6211\u4EEC\u8FD9\u8282\u8BFE\u7684K8s\u4F8B\u5B50\uFF0C\u9009\u62E9\u4E86\u963F\u91CC\u4E91\u7684Serverless K8s\u96C6\u7FA4\uFF1AASK\u3002\u8FD9\u4E2AK8s\u96C6\u7FA4\u7684\u7279\u70B9\u662F\uFF0CMaster\u8282\u70B9\u662F\u514D\u8D39\u7684\uFF0C\u53EA\u6536\u53D6\u7F51\u5173\u7684\u8D39\u7528\uFF0CWorker\u8282\u70B9\u662F\u865A\u62DF\u8282\u70B9\uFF0C\u800C\u6211\u4EECPod\u4E2D\u7684\u5BB9\u5668\u662F\u901A\u8FC7ECI\u5BB9\u5668\u521B\u5EFA\u7684\u3002\u4F20\u7EDF\u7684K8s\u96C6\u7FA4ACK\u7684Worker\u8282\u70B9\uFF0C\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u8D2D\u4E70\u865A\u62DF\u673A\u6388\u6743K8s\u96C6\u7FA4\uFF0C\u521D\u59CB\u5316\u6210Worker\u8282\u70B9\u3002ECI\u662F\u8F7B\u91CF\u7EA7\u7684Docker\u5BB9\u5668\uFF0C\u540C\u65F6\u5177\u5907\u9AD8\u6027\u80FD\u548C\u4F4E\u4EF7\u683C\u7684\u4F18\u52BF\u3002\u53E6\u5916\uFF0CASK\u7684Knative\u529F\u80FD\u662F\u65B0\u4E0A\u7EBF\u516C\u6D4B\u7684\uFF0C\u63A8\u8350\u5B83\u8FD8\u662F\u56E0\u4E3A\u6027\u4EF7\u6BD4\u3002</p><p>\u6211\u4EEC\u4F7F\u7528K8s\u96C6\u7FA4\uFF0C\u540C\u6837\u53EF\u4EE5\u81EA\u5DF1\u5B89\u88C5Istio\uFF0C\u518D\u5B89\u88C5Knative\uFF0C\u53EA\u9700\u8981\u6CE8\u610FK8s\u96C6\u7FA4\u7684\u7248\u672C\u5C31\u53EF\u4EE5\u4E86\u3002\u4F46\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684K8s\u96C6\u7FA4\uFF0C\u901A\u5E38\u90FD\u5DF2\u7ECF\u5E2E\u4F60\u51C6\u5907\u597D\u4E86\u63A7\u5236\u53F0\u64CD\u4F5C\u3002\u6240\u4EE5\u5B9E\u9645\u4E0A\u6211\u4EEC\u4F7F\u7528\u4E91\u7AEF\u7684K8s\u96C6\u7FA4\uFF0C\u8981\u6BD4\u672C\u5730\u642D\u5EFA\u8FD8\u8981\u7B80\u5355\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728ASK\u63A7\u5236\u53F0\uFF0C\u5DE6\u8FB9Knative\uFF08\u516C\u6D4B\uFF09\u4E2D\u9009\u62E9\u6211\u4EEC\u7684K8s\u96C6\u7FA4\uFF0C\u70B9\u51FB\u201C\u4E00\u952E\u90E8\u7F72\u201D\u5C31\u53EF\u4EE5\u4E86\u3002\u5F53\u7136\u5982\u679C\u4F60\u9009\u62E9\u7684\u4E91\u670D\u52A1\u5546\u4E0D\u652F\u6301\u201C\u4E00\u952E\u90E8\u7F72\u201D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u67E5\u770BK8s\u96C6\u7FA4\u7684\u7248\u672C\u53F7\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684Istio\u7248\u672C\u548CKnative\u7248\u672C\uFF0C\u6309\u7167\u6211\u4EEC\u4E0A\u8282\u8BFE\u6240\u8BB2\u7684\u5185\u5BB9\uFF0C\u81EA\u884C\u5B89\u88C5K8s\u7EC4\u4EF6\u3002</p><p>\u53E6\u5916\u4E3A\u4E86\u65B9\u4FBF\u65B0\u624B\uFF0C\u6211\u8FD8\u662F\u9700\u8981\u63D0\u793A\u4E00\u4E0B\u5982\u4F55\u5728\u672C\u5730\u540C\u65F6\u7BA1\u7406\u591A\u4E2AK8s\u96C6\u7FA4\u3002</p><p>\u9996\u5148\u6211\u4EEC\u6253\u5F00\u672C\u5730\u7684kubectl\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A$HOME/.kube/config\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E2AK8s\u96C6\u7FA4\u7684\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u5206\u4E3A3\u4E2A\u90E8\u5206\uFF1Aclusters\u3001contexts\u3001users\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apiVersion: v1</span></span>
<span class="line"><span style="color:#A6ACCD;">clusters:</span></span>
<span class="line"><span style="color:#A6ACCD;">- cluster:</span></span>
<span class="line"><span style="color:#A6ACCD;">    certificate-authority-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">    server: https://kubernetes.docker.internal:6443</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">- cluster:</span></span>
<span class="line"><span style="color:#A6ACCD;">    certificate-authority-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">    server: https://k8s\u96C6\u7FA4IP:6443</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: kubernetes</span></span>
<span class="line"><span style="color:#A6ACCD;">contexts:</span></span>
<span class="line"><span style="color:#A6ACCD;">- context:</span></span>
<span class="line"><span style="color:#A6ACCD;">    cluster: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">    user: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">- context:</span></span>
<span class="line"><span style="color:#A6ACCD;">    cluster: kubernetes-ask</span></span>
<span class="line"><span style="color:#A6ACCD;">    user: kubernetes-ask-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: kubernetes-admin-id</span></span>
<span class="line"><span style="color:#A6ACCD;">current-context: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">kind: Config</span></span>
<span class="line"><span style="color:#A6ACCD;">preferences: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">users:</span></span>
<span class="line"><span style="color:#A6ACCD;">- name: docker-desktop</span></span>
<span class="line"><span style="color:#A6ACCD;">  user:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client-certificate-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">    client-key-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">- name: kubernetes-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">  user:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client-certificate-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">    client-key-data: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5C06\u4E91\u4E0AK8s\u7ED9\u6211\u4EEC\u63D0\u4F9B\u7684\u96C6\u7FA4\u51ED\u636E\u7684cluster\u3001context\u3001user\uFF0C\u5206\u522B\u6DFB\u52A0\u5230config\u6587\u4EF6\u5BF9\u5E94\u7684clusters\u3001contexts\u3001users\u90E8\u5206\u4E0B\u9762\uFF0C\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u6211\u4EEC\u518D\u6B21\u67E5\u770Bkubectl config get contexts\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u65B0\u6DFB\u52A0\u7684\u4E91\u4E0AK8s\u96C6\u7FA4\u4E86\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">kubectl config get-contexts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5269\u4E0B\u7684\u64CD\u4F5C\u5C31\u8DDF\u6211\u4EEC\u4E0A\u8282\u8BFE\u4FDD\u6301\u4E00\u81F4\u4E86\u3002\u6211\u4EEC\u53EA\u9700\u8981\u5728knative-myapp\u91CC\u9762\u6267\u884Ckubectl apply\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u4F8B\u5B50\u8FD0\u884C\u5728\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\u4E86\u3002</p><p>\u6211\u4EEC\u60F3\u8BBF\u95EE\u4E91\u4E0AK8s\u96C6\u7FA4\u7248\u672C\u7684\u201C\u5F85\u529E\u4EFB\u52A1\u201DWeb\u670D\u52A1\u65F6\uFF0C\u540C\u6837\u4E5F\u662F\u7528kubectl\u67E5\u770Bkservice\uFF0C\u6211\u4EEC\u7684\u57DF\u540D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">kubectl get kservice</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://static001.geekbang.org/resource/image/d3/20/d3810957c110ba84a71085d20a510820.png" alt=""></p><p>\u7D27\u63A5\u7740\u901A\u8FC7\u67E5\u770Bingress-gateway\u4E86\u89E3K8s\u96C6\u7FA4\u7684\u5916\u7F51\u5165\u53E3IP\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">kubectl get svc -n knative-serving</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://static001.geekbang.org/resource/image/3c/b2/3cdd4a0a5affe9724a7c15755aa7beb2.png" alt=""></p><p>\u6211\u4EEC\u5728\u672C\u5730\u901A\u8FC7Host\u7ED1\u5B9A\u57DF\u540D\u548CEXTERNAL-IP\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86\u3002\u6211\u518D\u5570\u55E6\u4E00\u53E5\uFF1A\u5982\u679C\u662F\u4F60\u81EA\u5DF1\u7684\u57DF\u540D\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u57DF\u540D\u7684DNS\u89E3\u6790A\u503C\uFF0C\u6307\u5411\u8FD9\u4E2AEXTERNAL-IP\u5C31\u53EF\u4EE5\u4E86\u3002</p><p><img src="https://static001.geekbang.org/resource/image/e6/55/e6d014f06a7a6047fef335052372b555.png" alt=""></p><p>\u6211\u4EEC\u540C\u6837\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u540D\u7A7A\u95F4namespace\uFF0C\u770B\u770B\u8FD9\u4E2AK8s\u96C6\u7FA4\u4E2D\u90FD\u7ED9\u6211\u4EEC\u5B89\u88C5\u4E86\u54EA\u4E9B\u7EC4\u4EF6\u3002\u8FD8\u8BB0\u5F97\u6211\u4EEC\u8BB2\u8FC7\u7684FaaS\u7684HTTP\u89E6\u53D1\u5668\u8BA4\u8BC1\u65B9\u5F0F\u5417\uFF1F\u6211\u4EEC\u90E8\u7F72\u5728\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\uFF0C\u8C03\u7528\u6211\u4EEC\u7684FaaS\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u6211\u4EEC\u81EA\u5DF1\u7684\u5BB9\u5668\u5B9E\u73B0\u51FD\u6570\u9274\u6743\u7684\u7B97\u6CD5\uFF0C\u8D70\u51FD\u6570\u9274\u6743\u6D41\u7A0B\u4E86\u3002</p><p>\u5230\u8FD9\u513F\uFF0C\u4E91\u4E0A\u90E8\u7F72K8s\u96C6\u7FA4Knative\u8FD9\u4E2A\u4F8B\u5B50\u6211\u4EEC\u5C31\u5B9E\u8DF5\u5B8C\u4E86\uFF0C\u4E0D\u77E5\u9053\u4F60\u6709\u6CA1\u6709\u8DDF\u7740\u6211\u4E00\u8D77\u52A8\u624B\u64CD\u4F5C\uFF1F\u6700\u540E\uFF0C\u8FD8\u6709\u4E00\u70B9\u9700\u8981\u63D0\u793A\u4F60\u4E00\u4E0B\uFF0C\u5982\u679C\u4F60\u4E3A\u4E86\u4F53\u9A8C\u6211\u4EEC\u8FD9\u8282\u8BFE\u7684\u5185\u5BB9\uFF0C\u5728\u4E91\u4E0A\u81EA\u5DF1\u8D2D\u4E70\u4E86K8s\u96C6\u7FA4\u6D4B\u8BD5\uFF0C\u90A3\u7B49\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\u4F60\u4E00\u5B9A\u8981\u6E05\u7406\u5E72\u51C0\u4E86\uFF0C\u9664\u4E86\u901A\u8FC7kubectl delete\u6E05\u9664\u6211\u4EEC\u90E8\u7F72\u7684\u5E94\u7528\uFF0C\u8FD8\u8981\u5728\u4E91\u4E0A\u5220\u9664K8s\u96C6\u7FA4\u548Cworker\u8282\u70B9\uFF0C\u5426\u5219\u8FD8\u4F1A\u6301\u7EED\u4EA7\u751F\u8D39\u7528\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u8282\u8BFE\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u8BA9\u672C\u5730\u7684Knative\u5E94\u7528\u6253\u7834\u4E91\u670D\u52A1\u5546\u7684\u9501\u5B9A\uFF0C\u90E8\u7F72\u4E0A\u4E91\u3002\u56E0\u4E3ACNCF\u7684K8s\u96C6\u7FA4\u7684\u53EF\u79FB\u690D\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728CNCF\u7684\u4E91\u670D\u52A1\u5546\u6210\u5458\u4E2D\u4EFB\u610F\u9009\u62E9\u3002\u6211\u6839\u636E\u6211\u81EA\u5DF1\u7684\u7ECF\u9A8C\uFF0C\u603B\u7ED3\u4E86\u4E00\u4EFD\u4E91\u670D\u52A1\u5546\u7684\u5BF9\u6BD4\u8868\u683C\uFF0C\u8FD9\u4E2A\u8868\u683C\u7684\u5185\u5BB9\u5BF9\u6BD4\u4E86\u6211\u4EEC\u81EA\u8EAB\u4E1A\u52A1\u7684\u7279\u70B9\uFF0C\u8FD8\u6709\u4EF7\u683C\u7B49\u56E0\u7D20\uFF0C\u8BA9\u6211\u4EEC\u81EA\u7531\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u7684\u4E91\u670D\u52A1\u5546\u3002</p><p>\u6211\u4EEC\u5728\u4E91\u4E0A\u521B\u5EFA\u597DK8s\u96C6\u7FA4\uFF0C\u4F7F\u7528K8s\u96C6\u7FA4\u5C31\u8DDF\u6211\u4EEC\u672C\u5730\u4F7F\u7528\u662F\u4E00\u6837\u7684\uFF0C\u800C\u4E14\u5F88\u591A\u4E91\u670D\u52A1\u5546\u8FD8\u63D0\u4F9B\u201C\u4E00\u952E\u90E8\u7F72\u201D\u8BA9\u6211\u4EEC\u5FEB\u901F\u5B89\u88C5K8s\u7EC4\u4EF6\u3002\u6700\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06Knative\u7684\u5E94\u7528\u90E8\u7F72\u4E0A\u4E91\u4E86\u3002</p><p>\u7136\u800C\u6211\u4EEC\u867D\u7136\u53EF\u4EE5\u7528Knative\u89E3\u51B3Container Serverless\u7684\u4E91\u670D\u52A1\u5546\u9501\uFF0C\u4F46\u5374\u65E0\u6CD5\u89E3\u51B3\u4E91\u670D\u52A1\u5546\u7528FaaS\u6784\u5EFA\u8D77\u7684\u65B0\u58C1\u5792\u3002\u6BCF\u4E2A\u4E91\u670D\u52A1\u5546FaaS\u7684Runtime\u90FD\u4E0D\u4E00\u6837\uFF0C\u6211\u4EEC\u7684\u51FD\u6570\u4EE3\u7801\u8981\u517C\u5BB9\u591A\u4E2A\u4E91\u670D\u52A1\u5546\u90E8\u7F72\uFF0C\u8981\u5199\u5F88\u591A\u989D\u5916\u7684\u4EE3\u7801\uFF0C\u5904\u7406\u517C\u5BB9\u6027\u7684\u95EE\u9898\u3002\u90A3\u4E48\u4E0B\u8282\u8BFE\u6211\u4EEC\u5C31\u518D\u770B\u770B\u5982\u4F55\u7834\u89E3FaaS\u7684\u65B0Vendor-lock\u3002</p><h2 id="\u4F5C\u4E1A" tabindex="-1">\u4F5C\u4E1A <a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a></h2><p>\u8FD9\u8282\u8BFE\uFF0C\u5EFA\u8BAE\u4F60\u521B\u5EFA\u4E00\u4E2A\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\uFF0C\u5E76\u4E14\u5C06\u6211\u4EEC\u4E0A\u8282\u8BFE\u7684\u5185\u5BB9\u90E8\u7F72\u5230\u4E91\u4E0A\u7684K8s\u96C6\u7FA4\u3002\u611F\u53D7\u4E00\u4E0B\u4E91\u4E0A\u7684K8s\u5982\u4F55\u6253\u901A\u90E8\u7F72\u548C\u63D0\u4F9B\u7ED9\u4E92\u8054\u7F51\u7528\u6237\u8BBF\u95EE\u3002</p><p>\u671F\u5F85\u4F60\u7684\u5B9E\u8DF5\u603B\u7ED3\uFF0C\u6B22\u8FCE\u7559\u8A00\u4E0E\u6211\u4EA4\u6D41\u3002\u5982\u679C\u4ECA\u5929\u7684\u5185\u5BB9\u8BA9\u4F60\u6709\u6240\u6536\u83B7\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u628A\u6587\u7AE0\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p>`,57),t=[p];function r(c,o,i,d,A,C){return a(),e("div",null,t)}const K=s(l,[["render",r]]);export{u as __pageData,K as default};
