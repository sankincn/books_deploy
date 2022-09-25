import{_ as e,c as a,o as t,d as r}from"./app.e5528619.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE","slug":"title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE","link":"#title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE","children":[]},{"level":2,"title":"FaaS\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F","slug":"faas\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F","link":"#faas\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F","children":[]},{"level":2,"title":"FaaS\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F","slug":"faas\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F","link":"#faas\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F","children":[]},{"level":2,"title":"FaaS\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F","slug":"faas\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F","link":"#faas\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u4F5C\u4E1A","slug":"\u4F5C\u4E1A","link":"#\u4F5C\u4E1A","children":[]},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","link":"#\u53C2\u8003\u8D44\u6599","children":[]}],"relativePath":"Node.js/\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE/02-\u539F\u7406-\u901A\u8FC7\u4E00\u4E2A\u6848\u4F8B-\u7406\u89E3FaaS\u7684\u8FD0\u884C\u903B\u8F91.md"}'),l={name:"Node.js/\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE/02-\u539F\u7406-\u901A\u8FC7\u4E00\u4E2A\u6848\u4F8B-\u7406\u89E3FaaS\u7684\u8FD0\u884C\u903B\u8F91.md"},s=r('<hr><h2 id="title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE" tabindex="-1">title: \u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-Serverless\u5165\u95E8\u8BFE <a class="header-anchor" href="#title-\u84B2\u677E\u6D0B\uFF08\u79E6\u7CA4\uFF09-serverless\u5165\u95E8\u8BFE" aria-hidden="true">#</a></h2><p>02 | \u539F\u7406\uFF1A\u901A\u8FC7\u4E00\u4E2A\u6848\u4F8B\uFF0C\u7406\u89E3FaaS\u7684\u8FD0\u884C\u903B\u8F91</p><p>\u4F60\u597D\uFF0C\u6211\u662F\u79E6\u7CA4\u3002\u4E0A\u4E00\u8BB2\u6211\u4EEC\u4ECB\u7ECD\u4E86\u4EC0\u4E48\u662FServerless\uFF0C\u4ECE\u6982\u5FF5\u7684\u89D2\u5EA6\u6211\u4EEC\u5DF2\u7ECF\u5BF9Serverless\u6709\u4E86\u4E00\u4E2A\u6DF1\u5165\u7684\u4E86\u89E3\uFF1B\u90A3\u4ECE\u5E94\u7528\u89D2\u5EA6\u6765\u770B\uFF0CServerless\u5BF9\u4E8E\u5F00\u53D1\u8005\u7A76\u7ADF\u6709\u4EC0\u4E48\u9B54\u529B\u5462\uFF1F\u8FD9\u4E00\u8BB2\uFF0C\u6211\u51C6\u5907\u901A\u8FC7\u5FEB\u901F\u90E8\u7F72\u7EAFFaaS\u7684Serverless\u5E94\u7528\uFF0C\u7ED9\u4F60\u8BB2\u4E00\u8BB2FaaS\u5E94\u7528\u80CC\u540E\u7684\u8FD0\u884C\u539F\u7406\u3002</p><p>\u4E3A\u4E86\u8BA9\u4F60\u66F4\u597D\u5730\u4F53\u9A8CServerless\u5E26\u6765\u7684\u53D8\u9769\uFF0C\u8FD9\u8282\u8BFE\u6211\u4EEC\u4EE5Serverless\u7248\u672C\u7684&quot;Hello World&quot;\u5B9E\u64CD\u4F8B\u5B50\u8FDB\u884C\u5C55\u793A\u3002\u9274\u4E8E\u6211\u7684\u719F\u6089\u7A0B\u5EA6\uFF0C\u6211\u9009\u62E9\u4E86\u963F\u91CC\u4E91\uFF0C\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F60\u719F\u6089\u7684\u4E91\u670D\u52A1\u5546\uFF08\u6211\u5728\u4E13\u680F\u7684\u6700\u540E\u4E00\u8BFE\u8FD8\u4F1A\u8BB2\u5230\u5982\u4F55\u89E3\u9664\u4E91\u670D\u52A1\u5546\u7684\u9650\u5236\uFF0C\u6DF7\u5408\u4F7F\u7528\u591A\u4E91\u8FD0\u8425\u5546\u670D\u52A1\u7B49\u7B49\uFF09\u3002</p><p>\u53E6\u5916\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u4F60\u662F\u8DDF\u7740\u6211\u4E00\u6B65\u6B65\u5B9E\u64CD\u7EC3\u4E60\u7684\uFF0C\u90A3\u4E48\u5F00\u901A\u4E91\u670D\u52A1\u53EF\u80FD\u4F1A\u4EA7\u751F\u5C11\u91CF\u8D39\u7528\uFF0C\u9047\u5230\u5145\u503C\u63D0\u793A\u4F60\u8981\u81EA\u884C\u8003\u8651\u4E00\u4E0B\u3002\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u4E0D\u7740\u6025\u4F53\u9A8C\uFF0C\u6211\u89C9\u5F97\u770B\u6211\u7684\u89C6\u9891\u6F14\u793A\u4E5F\u5DF2\u7ECF\u8DB3\u591F\u4E86\u3002</p><p>\u6211\u4EEC\u4ECE\u4E0A\u9762\u7684\u6F14\u793A\u4E5F\u770B\u5230\u4E86\uFF0C\u4F1A\u7528Serverless\u8FD9\u4E2A\u76EE\u6807\u6211\u89C9\u5F97\u4E0D\u96BE\u5B9E\u73B0\uFF0C\u4F46\u8FD9\u4E0D\u662F\u6211\u4EEC\u8FD9\u8282\u8BFE\u7684\u7EC8\u6781\u76EE\u7684\u3002\u4ECA\u5929\u6211\u5C31\u60F3\u5E26\u7740\u4F60\u6253\u5F00\u8FD9\u4E2AFaaS &quot;Hello World&quot;\u5E94\u7528\u7684\u5F15\u64CE\u76D6\uFF0C\u6765\u770B\u770B\u5B83\u5185\u90E8\u5230\u5E95\u662F\u5982\u4F55\u8FD0\u884C\u7684\u3002\u4E3A\u4EC0\u4E48\u8981\u6025\u7740\u7ED9\u4F60\u8BB2\u539F\u7406\u5462\uFF1F\u56E0\u4E3A\u5982\u679C\u4F60\u4E0D\u7406\u89E3\u539F\u7406\u7684\u8BDD\uFF0C\u540E\u9762\u5728\u5E94\u7528Serverless\u5316\u7684\u65F6\u5019\u5C31\u65E0\u4ECE\u4E0B\u624B\u4E86\u3002</p><h2 id="faas\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F" tabindex="-1">FaaS\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F <a class="header-anchor" href="#faas\u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF1F" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u5927\u5BB6\u90FD\u89C9\u5F97Serverless\u662F\u4E2A\u65B0\u4E1C\u897F\uFF0C\u662F\u4E2A\u65B0\u98CE\u53E3\uFF0C\u521A\u624D\u5728\u6F14\u793A\u7684\u89C6\u9891\u91CC\u4F60\u4E5F\u80FD\u770B\u5230\uFF0C\u5B83\u786E\u5B9E\u5F88\u65B9\u4FBF\u3002\u4F46\u4F60\u4E5F\u4E0D\u7528\u628A\u5B83\u60F3\u5F97\u591A\u590D\u6742\uFF0C\u8FD0\u884C\u5E94\u7528\u7684\u90A3\u5957\u903B\u8F91\u8FD8\u6CA1\u6709\u53D8\u5316\uFF0CServerless\u53EA\u662F\u7528\u6280\u672F\u624B\u6BB5\u5E2E\u6211\u4EEC\u5C4F\u853D\u4E86\u590D\u6742\u6027\uFF0C\u8FD9\u70B9\u5B83\u548C\u5176\u4ED6\u7684\u4E91\u6280\u672F\u6CA1\u6709\u4EFB\u4F55\u5DEE\u522B\u3002</p><p>\u4F60\u53EF\u4EE5\u60F3\u60F3\uFF0C\u5728Serverless\u51FA\u73B0\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u90E8\u7F72\u8FD9\u6837\u4E00\u4E2A&quot;Hello World&quot;\u5E94\u7528\u5F97\u4F55\u7B49\u7E41\u7410\u3002\u9996\u5148\u4E3A\u4E86\u8FD0\u884C\u6211\u4EEC\u7684\u5E94\u7528\uFF0C\u6211\u4EEC\u8981\u5728\u670D\u52A1\u7AEF\u6784\u5EFA\u4EE3\u7801\u7684\u8FD0\u884C\u73AF\u5883\uFF1A\u6211\u4EEC\u8981\u8D2D\u4E70\u865A\u62DF\u673A\u670D\u52A1\uFF0C\u521D\u59CB\u5316\u865A\u62DF\u673A\u8FD0\u884C\u73AF\u5883\uFF0C\u5B89\u88C5\u6211\u4EEC\u9700\u8981\u7684\u5E94\u7528\u8FD0\u884C\u73AF\u5883\uFF0C\u5C3D\u91CF\u548C\u672C\u5730\u5F00\u53D1\u73AF\u5883\u4FDD\u6301\u4E00\u81F4\uFF1B\u7D27\u63A5\u7740\u4E3A\u4E86\u8BA9\u7528\u6237\u80FD\u591F\u8BBF\u95EE\u6211\u4EEC\u521A\u521A\u542F\u52A8\u7684\u5E94\u7528\uFF0C\u6211\u4EEC\u9700\u8981\u8D2D\u4E70\u57DF\u540D\uFF0C\u7528\u865A\u62DF\u673AIP\u6CE8\u518C\u57DF\u540D\uFF1B\u914D\u7F6ENginx\uFF0C\u542F\u52A8Nginx\uFF1B\u6700\u540E\u6211\u4EEC\u8FD8\u9700\u8981\u4E0A\u4F20\u5E94\u7528\u4EE3\u7801\uFF0C\u542F\u52A8\u5E94\u7528\u3002</p><p>\u4F60\u53EF\u4EE5\u95ED\u4E0A\u773C\u775B\u60F3\u60F3\u662F\u4E0D\u662F\u6211\u8BF4\u7684\u8FD9\u6837\uFF0C\u5F53\u7136\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u4F60\u7406\u89E3\uFF0C\u6211\u8FD8\u753B\u4E86\u5F20\u56FE\u3002\u524D\u97625\u6B65\u90FD\u51C6\u5907\u597D\u4E86\uFF0C\u7528\u6237\u5728\u7B2C6\u6B65\u624D\u80FD\u6210\u529F\u8BBF\u95EE\u5230\u6211\u4EEC\u7684\u5E94\u7528\u3002</p><p><img src="https://static001.geekbang.org/resource/image/20/63/20d3270c573266f1a01d788d52260863.png" alt="" title="Hello World \u5E94\u7528\u90E8\u7F72\u7684\u4F20\u7EDF\u6D41\u7A0B"></p><p>\u4E0E\u4E0A\u9762\u4F20\u7EDF\u6D41\u7A0B\u5F62\u6210\u9C9C\u660E\u5BF9\u6BD4\u7684\u662F\uFF0C\u6211\u4EEC\u521A\u521A\u7684Serverless\u90E8\u7F72\u53EA\u9700\u8981\u7B80\u5355\u76843\u6B65\uFF0C\u800C\u4E14\u76EE\u524D\u8FD9\u6837\u64CD\u4F5C\u4E0B\u6765\uFF0C\u6CA1\u6709\u4EA7\u751F\u4EFB\u4F55\u8D39\u7528\u3002\u4E0A\u4E00\u8BFE\u6211\u4EEC\u8BB2\u8FC7\uFF0C**Serverless\u662F\u5BF9\u670D\u52A1\u7AEF\u8FD0\u7EF4\u4F53\u7CFB\u7684\u6781\u7AEF\u62BD\u8C61\u3002**\u6CE8\u610F\uFF0C\u8FD9\u53E5\u8BDD\u91CC\u9762\u6709\u4E2A\u5173\u952E\u8BCD\uFF0C\u201C\u62BD\u8C61\u201D\uFF0C\u6211\u6CA1\u6709\u7528\u201C\u9769\u65B0\u201D\u201C\u98A0\u8986\u201D\u4E4B\u7C7B\u7684\u8BCD\u8BED\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7528\u6237HTTP\u6570\u636E\u8BF7\u6C42\u7684\u5168\u94FE\u8DEF\uFF0C\u5E76\u6CA1\u6709\u8D28\u7684\u6539\u53D8\uFF0CServerless\u53EA\u662F\u5C06\u5168\u94FE\u8DEF\u7684\u6A21\u578B\u7B80\u5316\u4E86\u3002</p><p>\u5177\u4F53\u6765\u8BF4\uFF0C\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u5728\u670D\u52A1\u7AEF\u6784\u5EFA\u4EE3\u7801\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u800CFaaS\u5E94\u7528\u5C06\u8FD9\u4E00\u6B65\u62BD\u8C61\u4E3A\u51FD\u6570\u670D\u52A1\uFF1B\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u8D1F\u8F7D\u5747\u8861\u548C\u53CD\u5411\u4EE3\u7406\uFF0C\u800CFaaS\u5E94\u7528\u5C06\u8FD9\u4E00\u6B65\u62BD\u8C61\u4E3AHTTP\u51FD\u6570\u89E6\u53D1\u5668\uFF1B\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u4E0A\u4F20\u4EE3\u7801\u548C\u542F\u52A8\u5E94\u7528\uFF0C\u800CFaaS\u5E94\u7528\u5C06\u8FD9\u4E00\u6B65\u62BD\u8C61\u4E3A\u51FD\u6570\u4EE3\u7801\u3002</p><p><img src="https://static001.geekbang.org/resource/image/08/fd/084b55574ca1588097383571c57c1dfd.png" alt="" title="Hello World \u5E94\u7528\u7684\u8FD0\u884C\u67B6\u6784\u56FE"></p><p>\u89E6\u53D1\u5668\u3001\u51FD\u6570\u670D\u52A1\u2026\u2026\u54A6\uFF0C\u662F\u4E0D\u662F\u53D1\u73B0\u5F00\u59CB\u51FA\u73B0\u4E86\u4E00\u4E9B\u964C\u751F\u540D\u8BCD\uFF1F\u4E0D\u7528\u7740\u6025\uFF0C\u8FD8\u662F\u5BF9\u7167\u7740\u4E0A\u9762\u8FD9\u5F20\u56FE\uFF0C\u6211\u7ED9\u4F60\u518D\u4E32\u4E0B&quot;Hello World&quot;\u8FD9\u4E2A\u7EAFFaaS\u5E94\u7528\u7684\u6570\u636E\u8BF7\u6C42\u94FE\u6761\u3002\u7406\u89E3\u4E86\u8FD9\u4E9B\u94FE\u6761\uFF0C\u4F60\u81EA\u7136\u5C31\u7406\u89E3\u4E86\u8FD9\u51E0\u4E2A\u65B0\u540D\u8BCD\u7684\u80CC\u666F\u4E86\u3002</p><p>\u54B1\u4EEC\u5148\u4ECE\u56FE\u7684\u53F3\u8FB9\u5F00\u59CB\u770B\uFF0C\u56FE\u4E0A\u6211\u6807\u6CE8\u4E86\u6B21\u5E8F\u3002\u5F53\u7528\u6237\u7B2C\u4E00\u6B21\u8BBF\u95EEHTTP\u51FD\u6570\u89E6\u53D1\u5668\u65F6\uFF0C\u51FD\u6570\u89E6\u53D1\u5668\u5C31\u4F1AHold\u4F4F\u7528\u6237\u7684HTTP\u8BF7\u6C42\uFF0C\u5E76\u4EA7\u751F\u4E00\u4E2AHTTP Request\u4E8B\u4EF6\u901A\u77E5\u51FD\u6570\u670D\u52A1\u3002</p><p>\u7D27\u63A5\u7740\u51FD\u6570\u670D\u52A1\u5C31\u4F1A\u68C0\u67E5\u6709\u6CA1\u6709\u95F2\u7F6E\u7684\u51FD\u6570\u5B9E\u4F8B\uFF1B\u5982\u679C\u6CA1\u6709\u51FD\u6570\u5B9E\u4F8B\uFF0C\u5C31\u53BB\u51FD\u6570\u4EE3\u7801\u4ED3\u5E93\u4E2D\u62C9\u53D6\u4F60\u7684\u4EE3\u7801\uFF1B\u521D\u59CB\u5316\u5E76\u542F\u52A8\u4E00\u4E2A\u51FD\u6570\u5B9E\u4F8B\uFF0C\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u8FD9\u4E2AHTTP Request\u5BF9\u8C61\u4F5C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u6267\u884C\u51FD\u6570\u3002</p><p>\u518D\u8FDB\u4E00\u6B65\uFF0C\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679CHTTP Response\u8FD4\u56DE\u51FD\u6570\u89E6\u53D1\u5668\uFF0C\u51FD\u6570\u89E6\u53D1\u5668\u518D\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u7B49\u5F85\u7684\u7528\u6237\u5BA2\u6237\u7AEF\u3002</p><p>\u5982\u679C\u4F60\u8FD8\u8BB0\u5F97\u7684\u8BDD\uFF0C\u6211\u4EEC\u521A\u521A\u7684\u89C6\u9891\u6F14\u793A\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u7684\u7EAFFaaS &quot;Hello World&quot;\u5E94\u7528\u4F8B\u5B50\u4E2D\uFF0C\u9ED8\u8BA4\u521B\u5EFA\u4E863\u4E2A\u670D\u52A1\u3002</p><p>\u7B2C\u4E00\u4E2A&quot;GreetingServiceGreetingFunctionhttpTrigger&quot;\u51FD\u6570\u89E6\u53D1\u5668\uFF0C\u51FD\u6570\u89E6\u53D1\u5668\u662F\u6240\u6709\u8BF7\u6C42\u7684\u7EDF\u4E00\u5165\u53E3\uFF0C\u5F53\u8BF7\u6C42\u53D1\u751F\u65F6\uFF0C\u5B83\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u901A\u77E5\u51FD\u6570\u670D\u52A1\uFF0C\u5E76\u4E14\u7B49\u5F85\u51FD\u6570\u670D\u52A1\u6267\u884C\u8FD4\u56DE\u540E\uFF0C\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u7B49\u5F85\u7684\u8BF7\u6C42\u3002</p><p>\u7B2C\u4E8C\u4E2A&quot;GreetingService&quot;\u51FD\u6570\u670D\u52A1\uFF0C\u5F53\u51FD\u6570\u89E6\u53D1\u5668\u901A\u77E5\u7684\u201C\u4E8B\u4EF6\u201D\u5230\u6765\uFF0C\u5B83\u4F1A\u67E5\u770B\u5F53\u524D\u6709\u6CA1\u6709\u95F2\u7F6E\u7684\u51FD\u6570\u5B9E\u4F8B\uFF0C\u5982\u679C\u6709\u5219\u8C03\u7528\u51FD\u6570\u5B9E\u4F8B\u5904\u7406\uFF1B\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u4F1A\u521B\u5EFA\u51FD\u6570\u5B9E\u4F8B\uFF0C\u7B49\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u518D\u8C03\u7528\u51FD\u6570\u5B9E\u4F8B\u5904\u7406\u4E8B\u4EF6\u3002</p><p>\u7B2C\u4E09\u4E2A&quot;GreetingServiceGreetingFunction&quot;\u51FD\u6570\u4EE3\u7801\uFF0C\u201C\u51FD\u6570\u670D\u52A1\u201D\u5728\u7B2C\u4E00\u6B21\u5B9E\u4F8B\u5316\u51FD\u6570\u65F6\uFF0C\u5C31\u4F1A\u4ECE\u8FD9\u4E2A\u4EE3\u7801\u4ED3\u5E93\u4E2D\u62C9\u53D6\u4EE3\u7801\uFF0C\u5E76\u6784\u5EFA\u51FD\u6570\u5B9E\u4F8B\u3002</p><p>\u7406\u89E3\u4E86FaaS\u5E94\u7528\u8C03\u7528\u94FE\u8DEF\uFF0C\u6211\u60F3\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF1A\u201C\u771F\u591F\u590D\u6742\uFF0C\u6298\u817E\u6765\u6298\u817E\u53BB\uFF0C\u600E\u4E48\u611F\u89C9\u5B83\u7684\u8FD9\u5957\u7B80\u5316\u903B\u8F91\u5F88\u50CF\u4EE5\u524D\u65B0\u6D6A\u7684SAE\u6216\u8005Heroku\u90A3\u6837\u7684NoOps\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\uFF1F\u201D\u4E0D\u77E5\u9053\u4F60\u662F\u4E0D\u662F\u6709\u8FD9\u6837\u7684\u95EE\u9898\uFF0C\u53CD\u6B63\u6211\u5F53\u65F6\u7B2C\u4E00\u6B21\u63A5\u89E6Serverless\u65F6\u5C31\u6709\u7C7B\u4F3C\u7684\u7591\u95EE\u3002</p><p>\u5176\u5B9E\uFF0CFaaS\u4E0E\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\u5BF9\u6BD4\uFF0C**\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E\u8D44\u6E90\u5229\u7528\u7387\uFF0C**\u8FD9\u4E5F\u662FFaaS\u6700\u5927\u7684\u521B\u65B0\u70B9\u3002FaaS\u7684\u5E94\u7528\u5B9E\u4F8B\u53EF\u4EE5\u7F29\u5BB9\u52300\uFF0C\u800C\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\u5219\u81F3\u5C11\u8981\u7EF4\u63011\u53F0\u670D\u52A1\u5668\u6216\u5BB9\u5668\u3002</p><p>\u4F60\u6CE8\u610F\u770B\u7684\u8BDD\uFF0C\u5728\u4E0A\u9762&quot;Hello World&quot;\u4F8B\u5B50\u4E2D\uFF0C\u51FD\u6570\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u4E4B\u524D\uFF0C\u5B9E\u9645\u7684\u670D\u52A1\u5668\u5360\u7528\u4E3A0\u3002\u56E0\u4E3A\u76F4\u5230\u7528\u6237\u7B2C\u4E00\u6B21HTTP\u6570\u636E\u8BF7\u6C42\u8FC7\u6765\u65F6\uFF0C\u51FD\u6570\u670D\u52A1\u624D\u88ABHTTP\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u542F\u52A8\u51FD\u6570\u5B9E\u4F8B\u3002\u4E5F\u5C31\u662F\u8BF4\u6CA1\u6709\u7528\u6237\u8BF7\u6C42\u65F6\uFF0C\u51FD\u6570\u670D\u52A1\u6CA1\u6709\u4EFB\u4F55\u7684\u51FD\u6570\u5B9E\u4F8B\uFF0C\u4E5F\u5C31\u4E0D\u5360\u7528\u4EFB\u4F55\u7684\u670D\u52A1\u5668\u8D44\u6E90\u3002\u800C\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\uFF0C\u521B\u5EFA\u5E94\u7528\u5B9E\u4F8B\u7684\u8FC7\u7A0B\u901A\u5E38\u9700\u8981\u51E0\u5341\u79D2\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u4F60\u7684\u670D\u52A1\u53EF\u7528\u6027\uFF0C\u5FC5\u987B\u4E00\u76F4\u7EF4\u6301\u7740\u81F3\u5C11\u4E00\u53F0\u670D\u52A1\u5668\u8FD0\u884C\u4F60\u7684\u5E94\u7528\u5B9E\u4F8B\u3002</p><p>\u6253\u4E2A\u6BD4\u65B9\u7684\u8BDD\uFF0CFaaS\u5C31\u6709\u70B9\u50CF\u6211\u4EEC\u7684\u58F0\u63A7\u706F\uFF0C\u6709\u4EBA\u7684\u65F6\u5019\u5B83\u53EF\u4EE5\u5F88\u5FEB\u4EAE\u8D77\u6765\uFF0C\u6CA1\u4EBA\u7684\u65F6\u5019\u53C8\u53EF\u4EE5\u5173\u7740\u3002\u5BF9\u6BD4\u4F20\u7EDF\u7684\u9700\u8981\u4EBA\u624B\u52A8\u5F00\u5173\u7684\u706F\uFF0C\u58F0\u63A7\u706F\u6700\u5927\u7684\u4F18\u52BF\u80AF\u5B9A\u5C31\u662F\u7701\u7535\u4E86\u3002\u4F46\u4F60\u60F3\u60F3\uFF0C\u80FD\u7701\u7535\u7684\u524D\u63D0\u662F\u6709\u4EBA\u7684\u65F6\u5019\uFF0C\u58F0\u63A7\u706F\u80FD\u591F\u627E\u5230\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\u5FEB\u901F\u4EAE\u8D77\u6765\u3002</p><p>FaaS\u4E5F\u662F\u8FD9\u6837\uFF0C\u5B83\u4F18\u52BF\u80CC\u540E\u7684\u5173\u952E\u70B9\u662F\u53EF\u4EE5\u6781\u901F\u542F\u52A8\u3002\u90A3\u5B83\u662F\u600E\u4E48\u505A\u7684\u5462\uFF1F\u8981\u7406\u89E3\u6781\u901F\u542F\u52A8\u80CC\u540E\u7684\u903B\u8F91\uFF0C\u8FD9\u91CC\u6211\u5C31\u8981\u5F15\u5165\u51B7\u542F\u52A8\u7684\u6982\u5FF5\u4E86\u3002</p><h2 id="faas\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F" tabindex="-1">FaaS\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F <a class="header-anchor" href="#faas\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF1F" aria-hidden="true">#</a></h2><p>\u51B7\u542F\u52A8\u672C\u6765\u662FPC\u4E0A\u7684\u6982\u5FF5\uFF0C\u5B83\u662F\u6307\u5173\u95ED\u7535\u6E90\u540E\uFF0CPC\u518D\u542F\u52A8\u4ECD\u7136\u9700\u8981\u91CD\u65B0\u52A0\u8F7DBIOS\u8868\uFF0C\u4E5F\u5C31\u662F\u4ECE\u786C\u4EF6\u9A71\u52A8\u5F00\u59CB\u542F\u52A8\uFF0C\u56E0\u6B64\u542F\u52A8\u901F\u5EA6\u5F88\u6162\u3002</p><p>\u73B0\u5728\u7684\u4E91\u670D\u52A1\u5546\uFF0C\u7EBF\u4E0A\u7269\u7406\u670D\u52A1\u5668\u65AD\u7535\u91CD\u542F\u51E0\u4E4E\u662F\u4E0D\u592A\u53EF\u80FD\u7684\u3002**FaaS\u4E2D\u7684\u51B7\u542F\u52A8\u662F\u6307\u4ECE\u8C03\u7528\u51FD\u6570\u5F00\u59CB\u5230\u51FD\u6570\u5B9E\u4F8B\u51C6\u5907\u5B8C\u6210\u7684\u6574\u4E2A\u8FC7\u7A0B\u3002**\u51B7\u542F\u52A8\u6211\u4EEC\u5173\u6CE8\u7684\u662F\u542F\u52A8\u65F6\u95F4\uFF0C\u542F\u52A8\u65F6\u95F4\u8D8A\u77ED\uFF0C\u6211\u4EEC\u5BF9\u8D44\u6E90\u7684\u5229\u7528\u7387\u5C31\u8D8A\u9AD8\u3002\u73B0\u5728\u7684\u4E91\u670D\u52A1\u5546\uFF0C\u57FA\u4E8E\u4E0D\u540C\u7684\u8BED\u8A00\u7279\u6027\uFF0C\u51B7\u542F\u52A8\u5E73\u5747\u8017\u65F6\u57FA\u672C\u5728100\uFF5E700\u6BEB\u79D2\u4E4B\u95F4\u3002\u5F97\u76CA\u4E8EGoogle\u7684JavaScript\u5F15\u64CEJust In Time\u7279\u6027\uFF0CNode.js\u5728\u51B7\u542F\u52A8\u65B9\u9762\u901F\u5EA6\u662F\u6700\u5FEB\u7684\u3002</p><p>100\uFF5E700\u6BEB\u79D2\u7684\u51B7\u542F\u52A8\u65F6\u95F4\uFF0C\u6211\u4E0D\u77E5\u9053\u4F60\u542C\u5230\u8FD9\u4E2A\u6570\u636E\u7684\u65F6\u5019\u662F\u4E0D\u662F\u9707\u60CA\u4E86\u4E00\u4E0B\u3002</p><p>\u4E0B\u9762\u8FD9\u5F20\u56FE\u662FFaaS\u5E94\u7528\u51B7\u542F\u52A8\u7684\u8FC7\u7A0B\u3002\u5176\u4E2D\uFF0C\u84DD\u8272\u90E8\u5206\u662F\u4E91\u670D\u52A1\u5546\u8D1F\u8D23\u7684\uFF0C\u7EA2\u8272\u90E8\u5206\u7531\u4F60\u8D1F\u8D23\uFF0C\u800C\u51FD\u6570\u4EE3\u7801\u521D\u59CB\u5316\uFF0C\u4E00\u4EBA\u4E00\u534A\u3002\u4E5F\u5C31\u662F\u8BF4\u84DD\u8272\u90E8\u5206\u5728\u51B7\u542F\u52A8\u65F6\u5019\u7684\u8017\u65F6\u4F60\u4E0D\u7528\u5173\u5FC3\uFF0C\u800C\u7EA2\u8272\u90E8\u5206\u5C31\u662F\u4F60\u7684\u51FD\u6570\u8017\u65F6\u3002\u81F3\u4E8E\u8D44\u6E90\u8C03\u5EA6\u662F\u8981\u505A\u4EC0\u4E48\uFF0C\u4F60\u53EF\u4EE5\u5148\u5FFD\u7565\uFF0C\u6211\u540E\u9762\u4F1A\u63D0\u5230\u3002</p><p>\u4F8B\u5982\u4ECE\u521A\u624D\u6F14\u793A\u89C6\u9891\u7684\u4E91\u670D\u52A1\u63A7\u5236\u53F0\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C&quot;Hello World&quot;\u7684\u5355\u6B21\u51FD\u6570\u8017\u65F6\u662F0.0125 CU-S\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8017\u65F612.5\u6BEB\u79D2\uFF0C\u5B9E\u9645\u6211\u4EEC\u6293\u6570\u636E\u5305\u6765\u770B\uFF0C\u9664\u53BB\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u6211\u4EEC\u6574\u4E2AHTTPS\u8BF7\u6C42\u5230\u5B8C\u5168\u8FD4\u56DE\u7ED3\u679C\u9700\u8981100\u6BEB\u79D2\u3002\u6211\u4EEC\u8D1F\u8D23\u7684\u7EA2\u8272\u90E8\u5206\u8017\u65F6\u662F12.5\u6BEB\u79D2\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E91\u670D\u52A1\u5546\u8D1F\u8D23\u7684\u84DD\u8272\u90E8\u5206\u8017\u65F6\u662F87.5\u6BEB\u79D2\u3002</p><p><img src="https://static001.geekbang.org/resource/image/53/28/53d9831798509d2b8cd66e1714ab8428.png" alt="" title="FaaS\u5E94\u7528\u51B7\u542F\u52A8\u8FC7\u7A0B\u56FE"></p><p>\u6CE8\u610F\uFF0CFaaS\u670D\u52A1\u4ECE0\u5F00\u59CB\uFF0C\u542F\u52A8\u5E76\u6267\u884C\u5B8C\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EA\u9700\u8981100\u6BEB\u79D2\u3002\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48FaaS\u6562\u7F29\u5BB9\u52300\u7684\u4E3B\u8981\u539F\u56E0\u3002\u901A\u5E38\u6211\u4EEC\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\u6709\u4E2A\u5173\u952E\u6307\u6807\uFF0C\u54CD\u5E94\u65F6\u95F4\u57281\u79D2\u4EE5\u5185\uFF0C\u90FD\u7B97\u4F18\u79C0\u3002\u8FD9\u4E48\u4E00\u5BF9\u6BD4\uFF0C100\u6BEB\u79D2\u7684\u542F\u52A8\u65F6\u95F4\uFF0C\u5BF9\u4E8E\u7F51\u9875\u7684\u79D2\u5F00\u7387\u5F71\u54CD\u771F\u7684\u6781\u5C0F\u3002</p><p>\u800C\u4E14\u53EF\u4EE5\u80AF\u5B9A\u7684\u662F\uFF0C\u4E91\u670D\u52A1\u5546\u8FD8\u4F1A\u4E0D\u505C\u5730\u4F18\u5316\u81EA\u5DF1\u8D1F\u8D23\u7684\u90E8\u5206\uFF0C\u6BD5\u7ADF\u542F\u52A8\u901F\u5EA6\u8D8A\u5FEB\u5BF9\u8D44\u6E90\u7684\u5229\u7528\u7387\u5C31\u8D8A\u9AD8\uFF0C\u4F8B\u5982\u51B7\u542F\u52A8\u8FC7\u7A0B\u4E2D\u8017\u65F6\u6BD4\u8F83\u957F\u7684\u662F\u4E0B\u8F7D\u51FD\u6570\u4EE3\u7801\u3002\u6240\u4EE5\u4E00\u65E6\u4F60\u66F4\u65B0\u4EE3\u7801\uFF0C\u4E91\u670D\u52A1\u5546\u5C31\u4F1A\u5077\u5077\u5F00\u59CB\u8C03\u5EA6\u8D44\u6E90\uFF0C\u4E0B\u8F7D\u4F60\u7684\u4EE3\u7801\u6784\u5EFA\u51FD\u6570\u5B9E\u4F8B\u7684\u955C\u50CF\u3002\u8BF7\u6C42\u7B2C\u4E00\u6B21\u8BBF\u95EE\u65F6\uFF0C\u4E91\u670D\u52A1\u5546\u5C31\u53EF\u4EE5\u5229\u7528\u6784\u5EFA\u597D\u7684\u7F13\u5B58\u955C\u50CF\uFF0C\u76F4\u63A5\u8DF3\u8FC7\u51B7\u542F\u52A8\u7684\u4E0B\u8F7D\u51FD\u6570\u4EE3\u7801\u6B65\u9AA4\uFF0C\u4ECE\u955C\u50CF\u542F\u52A8\u5BB9\u5668\uFF0C\u8FD9\u4E2A\u4E5F\u53EB<strong>\u9884\u70ED\u51B7\u542F\u52A8</strong>\u3002\u6240\u4EE5\u5982\u679C\u6211\u4EEC\u6709\u4E9B\u4E1A\u52A1\u573A\u666F\u5BF9\u54CD\u5E94\u65F6\u95F4\u6BD4\u8F83\u654F\u611F\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7<strong>\u9884\u70ED\u51B7\u542F\u52A8\u6216\u9884\u7559\u5B9E\u4F8B\u7B56\u7565</strong>[1]\uFF0C\u52A0\u901F\u6216\u7ED5\u8FC7\u51B7\u542F\u52A8\u65F6\u95F4\u3002</p><p>\u4E86\u89E3\u4E86\u51B7\u542F\u52A8\u7684\u6982\u5FF5\uFF0C\u6211\u4EEC\u518D\u770B\u770B\u4E3A\u4EC0\u4E48FaaS\u53EF\u4EE5\u6781\u901F\u542F\u52A8\uFF0C\u800C\u5E94\u7528\u6258\u7BA1\u5E73\u53F0PaaS\u4E0D\u884C\uFF1F</p><p>\u9996\u5148\u5E94\u7528\u6258\u7BA1\u5E73\u53F0PaaS\u4E3A\u4E86\u9002\u5E94\u7528\u6237\u7684\u591A\u6837\u6027\uFF0C\u5FC5\u987B\u652F\u6301\u591A\u8BED\u8A00\u517C\u5BB9\uFF0C\u8FD8\u8981\u63D0\u4F9B\u4F20\u7EDF\u540E\u53F0\u670D\u52A1\uFF0C\u4F8B\u5982MySQL\u3001Redis\u3002</p><p>\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C\u5E94\u7528\u6258\u7BA1\u5E73\u53F0PaaS\u5728\u521D\u59CB\u5316\u73AF\u5883\u65F6\uFF0C\u6709\u5927\u91CF\u4F9D\u8D56\u548C\u591A\u8BED\u8A00\u7248\u672C\u9700\u8981\u517C\u5BB9\uFF0C\u800C\u4E14\u517C\u5BB9\u591A\u79CD\u7528\u6237\u7684\u5E94\u7528\u4EE3\u7801\u5F80\u5F80\u4E5F\u4F1A\u589E\u52A0\u5E94\u7528\u6784\u5EFA\u8FC7\u7A0B\u7684\u65F6\u95F4\u3002\u6240\u4EE5\u901A\u5E38\u5E94\u7528\u6258\u7BA1\u5E73\u53F0PaaS\u65E0\u6CD5\u62BD\u8C61\u51FA\u8F7B\u91CF\u7684\u53EF\u590D\u7528\u7684\u5C42\u7EA7\uFF0C\u53EA\u80FD\u9009\u62E9\u670D\u52A1\u5668\u6216\u5BB9\u5668\u65B9\u6848\uFF0C\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u5F00\u59CB\u6784\u5EFA\u5E94\u7528\u5B9E\u4F8B\u3002</p><p>FaaS\u8BBE\u8BA1\u4E4B\u521D\u5C31\u727A\u7272\u4E86\u7528\u6237\u7684\u53EF\u63A7\u6027\u548C\u5E94\u7528\u573A\u666F\uFF0C\u6765\u7B80\u5316\u4EE3\u7801\u6A21\u578B\uFF0C\u5E76\u4E14\u901A\u8FC7\u5206\u5C42\u7ED3\u6784\u8FDB\u4E00\u6B65\u63D0\u5347\u8D44\u6E90\u7684\u5229\u7528\u7387\u3002\u5B66\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5F97\u6765\u770B\u770B\u9690\u85CF\u5728FaaS\u51B7\u542F\u52A8\u4E2D\u6700\u91CD\u8981\u7684\u9769\u65B0\u6280\u672F\uFF1A\u5206\u5C42\u7ED3\u6784\u3002</p><h2 id="faas\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F" tabindex="-1">FaaS\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F <a class="header-anchor" href="#faas\u662F\u600E\u4E48\u5206\u5C42\u7684\uFF1F" aria-hidden="true">#</a></h2><p><img src="https://static001.geekbang.org/resource/image/64/1b/64a03d797850a58f8d5f8d117fa0031b.png" alt="" title="FaaS\u5B9E\u4F8B\u6267\u884C\u7ED3\u6784\u56FE"></p><p>\u4F60\u7684FaaS\u5B9E\u4F8B\u6267\u884C\u65F6\uFF0C\u5C31\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u81F3\u5C11\u662F3\u5C42\u7ED3\u6784\uFF1A\u5BB9\u5668\u3001\u8FD0\u884C\u65F6Runtime\u3001\u5177\u4F53\u51FD\u6570\u4EE3\u7801\u3002</p><p>\u5BB9\u5668\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u64CD\u4F5C\u7CFB\u7EDFOS\u3002\u4EE3\u7801\u8981\u8FD0\u884C\uFF0C\u603B\u9700\u8981\u548C\u786C\u4EF6\u6253\u4EA4\u9053\uFF0C\u5BB9\u5668\u5C31\u662F\u6A21\u62DF\u51FA\u5185\u6838\u548C\u786C\u4EF6\u4FE1\u606F\uFF0C\u8BA9\u4F60\u7684\u4EE3\u7801\u548CRuntime\u53EF\u4EE5\u5728\u91CC\u9762\u8FD0\u884C\u3002\u5BB9\u5668\u7684\u4FE1\u606F\u5305\u62EC\u5185\u5B58\u5927\u5C0F\u3001OS\u7248\u672C\u3001CPU\u4FE1\u606F\u3001\u73AF\u5883\u53D8\u91CF\u7B49\u7B49\u3002\u76EE\u524D\u7684FaaS\u5B9E\u73B0\u65B9\u6848\u4E2D\uFF0C\u5BB9\u5668\u65B9\u6848\u53EF\u80FD\u662FDocker\u5BB9\u5668\u3001VM\u865A\u62DF\u673A\uFF0C\u751A\u81F3Sandbox\u6C99\u76D2\u73AF\u5883\u3002</p><p>\u8FD0\u884C\u65F6Runtime [2]\uFF0C\u5C31\u662F\u4F60\u7684\u51FD\u6570\u6267\u884C\u65F6\u7684\u4E0A\u4E0B\u6587context\u3002Runtime\u7684\u4FE1\u606F\u5305\u62EC\u4EE3\u7801\u8FD0\u884C\u7684\u8BED\u8A00\u548C\u7248\u672C\uFF0C\u4F8B\u5982Node.js v10\uFF0CPython3.6\uFF1B\u53EF\u8C03\u7528\u5BF9\u8C61\uFF0C\u4F8B\u5982aliyun SDK\uFF1B\u7CFB\u7EDF\u4FE1\u606F\uFF0C\u4F8B\u5982\u73AF\u5883\u53D8\u91CF\u7B49\u7B49\u3002</p><p>\u5173\u4E8EFaaS\u76843\u5C42\u7ED3\u6784\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u4E48\u60F3\u8C61\uFF1A\u5BB9\u5668\u5C42\u5C31\u50CF\u662FWindows\u64CD\u4F5C\u7CFB\u7EDF\uFF1BRuntime\u5C31\u50CF\u662FWindows\u91CC\u9762\u7684\u64AD\u653E\u5668\u66B4\u98CE\u5F71\u97F3\uFF1B\u4F60\u7684\u4EE3\u7801\u5C31\u50CF\u662F\u653E\u5728U\u76D8\u91CC\u7684\u7535\u5F71\u3002</p><p>\u8FD9\u6837\u5206\u5C42\u6709\u4EC0\u4E48\u597D\u5904\u5462\uFF1F\u5BB9\u5668\u5C42\u9002\u7528\u6027\u66F4\u5E7F\uFF0C\u4E91\u670D\u52A1\u5546\u53EF\u4EE5\u9884\u70ED\u5927\u91CF\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF0C\u5C06\u7269\u7406\u670D\u52A1\u5668\u7684\u8BA1\u7B97\u8D44\u6E90\u788E\u7247\u5316\u3002Runtime\u7684\u5B9E\u4F8B\u9002\u7528\u6027\u8F83\u4F4E\uFF0C\u53EF\u4EE5\u5C11\u91CF\u9884\u70ED\uFF1B\u5BB9\u5668\u548CRuntime\u56FA\u5B9A\u540E\uFF0C\u4E0B\u8F7D\u4F60\u7684\u4EE3\u7801\u5C31\u53EF\u4EE5\u6267\u884C\u4E86\u3002\u901A\u8FC7\u5206\u5C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A\u5230\u8D44\u6E90\u7EDF\u7B79\u4F18\u5316\uFF0C\u8FD9\u6837\u5C31\u80FD\u8BA9\u4F60\u7684\u4EE3\u7801\u5FEB\u901F\u4F4E\u6210\u672C\u5730\u88AB\u6267\u884C\u3002</p><p>\u7406\u89E3\u4E86\u5206\u5C42\uFF0C\u6211\u4EEC\u518D\u56DE\u60F3\u4E00\u4E0BFaaS\u5206\u5C42\u5BF9\u5E94\u51B7\u542F\u52A8\u7684\u8FC7\u7A0B\uFF0C\u5176\u5B9E\u4F60\u5C31\u4E0D\u96BE\u7406\u89E3\u4E91\u670D\u52A1\u5546\u8D1F\u8D23\u7684\u5C31\u662F\u5BB9\u5668\u548CRuntime\u7684\u51C6\u5907\u9636\u6BB5\u4E86\u3002\u800C\u5F00\u53D1\u8005\u81EA\u5DF1\u8D1F\u8D23\u7684\u5219\u662F\u51FD\u6570\u6267\u884C\u9636\u6BB5\u3002\u4E00\u65E6\u5BB9\u5668&amp;Runtime\u542F\u52A8\u540E\uFF0C\u5C31\u4F1A\u7EF4\u6301\u4E00\u6BB5\u65F6\u95F4\uFF0C\u8FD9\u6BB5\u65F6\u95F4\u5185\u7684\u8FD9\u4E2A\u51FD\u6570\u5B9E\u4F8B\u5C31\u53EF\u4EE5\u76F4\u63A5\u5904\u7406\u7528\u6237\u6570\u636E\u8BF7\u6C42\u3002\u5F53\u4E00\u6BB5\u65F6\u95F4\u5185\u6CA1\u6709\u7528\u6237\u8BF7\u6C42\u4E8B\u4EF6\u53D1\u751F\uFF08\u5404\u4E2A\u4E91\u670D\u52A1\u5546\u7EF4\u6301\u5B9E\u4F8B\u7684\u65F6\u95F4\u548C\u7B56\u7565\u4E0D\u540C\uFF09\uFF0C\u5219\u4F1A\u9500\u6BC1\u8FD9\u4E2A\u51FD\u6570\u5B9E\u4F8B\u3002</p><p>\u5177\u4F53\u4F60\u53EF\u4EE5\u770B\u4E0B\u4E0B\u9762\u8FD9\u5F20\u56FE\uFF0C\u4EE5\u8F85\u52A9\u4F60\u7406\u89E3\u3002</p><p><img src="https://static001.geekbang.org/resource/image/a8/69/a82eef4cb307dfe42040ffb7d4852a69.png" alt="" title="FaaS\u5206\u5C42\u5BF9\u5E94\u51B7\u542F\u52A8\u793A\u610F\u56FE"></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u4E00\u8BB2\uFF0C\u6211\u5E26\u4F60\u4F53\u9A8C\u4E86\u53EA\u9700\u8981\u4E09\u6B65\u5C31\u80FD\u5FEB\u901F\u90E8\u7F72\u7EAFFaaS\u7684Web\u5E94\u7528\u4E0A\u7EBF\uFF0C\u6211\u4EEC\u4E5F\u6253\u5F00\u4E86FaaS\u5F15\u64CE\u76D6\uFF0C\u4ECB\u7ECD\u4E86FaaS\u7684\u5185\u90E8\u8FD0\u884C\u673A\u5236\u3002\u73B0\u5728\u6211\u4EEC\u5C31\u6765\u603B\u7ED3\u4E00\u4E0B\u8FD9\u8282\u8BFE\u7684\u5173\u952E\u70B9\u3002</p><ol><li>\u7EAFFaaS\u5E94\u7528\u8C03\u7528\u94FE\u8DEF\u7531\u51FD\u6570\u89E6\u53D1\u5668\u3001\u51FD\u6570\u670D\u52A1\u548C\u51FD\u6570\u4EE3\u7801\u4E09\u90E8\u5206\u7EC4\u6210\uFF0C\u5B83\u4EEC\u5206\u522B\u66FF\u4EE3\u4E86\u4F20\u7EDF\u670D\u52A1\u7AEF\u8FD0\u7EF4\u7684\u8D1F\u8F7D\u5747\u8861&amp;\u53CD\u5411\u4EE3\u7406\uFF0C\u670D\u52A1\u5668&amp;\u5E94\u7528\u8FD0\u884C\u73AF\u5883\uFF0C\u5E94\u7528\u4EE3\u7801\u90E8\u7F72\u3002</li><li>\u5BF9\u6BD4\u4F20\u7EDF\u5E94\u7528\u6258\u7BA1PaaS\u5E73\u53F0\uFF0CFaaS\u5E94\u7528\u6700\u5927\u7684\u4E0D\u540C\u5C31\u662F\uFF0CFaaS\u5E94\u7528\u53EF\u4EE5\u7F29\u5BB9\u52300\uFF0C\u5728\u4E8B\u4EF6\u5230\u6765\u65F6\u6781\u901F\u542F\u52A8\uFF0CNode.js\u7684\u51FD\u6570\u751A\u81F3\u53EF\u4EE5\u505A\u5230100ms\u542F\u52A8\u5E76\u6267\u884C\u3002</li><li>FaaS\u5728\u8BBE\u8BA1\u4E0A\u727A\u7272\u4E86\u7528\u6237\u7684\u53EF\u63A7\u6027\u548C\u5E94\u7528\u573A\u666F\uFF0C\u6765\u7B80\u5316\u4EE3\u7801\u6A21\u578B\uFF0C\u5E76\u4E14\u901A\u8FC7\u5206\u5C42\u7ED3\u6784\u8FDB\u4E00\u6B65\u63D0\u5347\u8D44\u6E90\u7684\u5229\u7528\u7387\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48FaaS\u51B7\u542F\u52A8\u65F6\u95F4\u80FD\u8FD9\u4E48\u77ED\u7684\u4E3B\u8981\u539F\u56E0\u3002\u5173\u4E8EFaaS\u76843\u5C42\u7ED3\u6784\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u4E48\u60F3\u8C61\uFF1A\u5BB9\u5668\u5C42\u5C31\u50CF\u662FWindows\u64CD\u4F5C\u7CFB\u7EDF\uFF1BRuntime\u5C31\u50CF\u662FWindows\u91CC\u9762\u7684\u64AD\u653E\u5668\u66B4\u98CE\u5F71\u97F3\uFF1B\u4F60\u7684\u4EE3\u7801\u5C31\u50CF\u662F\u653E\u5728U\u76D8\u91CC\u7684\u7535\u5F71\u3002</li></ol><h2 id="\u4F5C\u4E1A" tabindex="-1">\u4F5C\u4E1A <a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a></h2><p>\u6700\u540E\uFF0C\u7ED9\u4F60\u7559\u4E2A\u4F5C\u4E1A\u5427\u3002\u6211\u77E5\u9053\u6574\u4E2A\u539F\u7406\u4F60\u542C\u8D77\u6765\u80AF\u5B9A\u8FD8\u4E0D\u662F\u90A3\u4E48\u597D\u7406\u89E3\uFF0C\u5B9E\u8DF5\u662F\u68C0\u9A8C\u771F\u7406\u7684\u552F\u4E00\u6807\u51C6\uFF0C\u5982\u679C\u4F60\u6709\u65F6\u95F4\u5E76\u4E14\u65B9\u4FBF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8BD5\u7740\u81EA\u5DF1\u52A8\u624BRun\u4E00\u4E2AFaaS\u7684Hello World\u4F8B\u5B50\uFF0C\u7136\u540E\u601D\u8003\u5176\u4E2D\u7684\u539F\u7406\u3002</p><p>\u5F53\u7136\uFF0C\u5982\u679C\u4ECA\u5929\u8FD9\u8282\u8BFE\u8BA9\u4F60\u6709\u6240\u6536\u83B7\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><p>[1] \u9884\u7559\u5B9E\u4F8B\u4ECB\u7ECD\uFF0C<a href="https://help.aliyun.com/document_detail/138103.html?spm=a2c4g.11186623.6.621.3f085c22jYnnb6" target="_blank" rel="noreferrer">https://help.aliyun.com/document_detail/138103.html</a></p><p>[2] Node.js Runtime\u4ECB\u7ECD\uFF0C<a href="https://help.aliyun.com/document_detail/58011.html?spm=5176.11065259.1996646101.searchclickresult.3d147730b7VloO" target="_blank" rel="noreferrer">https://help.aliyun.com/document_detail/58011.html</a></p>',60),p=[s];function i(o,n,d,S,c,h){return t(),a("div",null,p)}const _=e(l,[["render",i]]);export{g as __pageData,_ as default};
