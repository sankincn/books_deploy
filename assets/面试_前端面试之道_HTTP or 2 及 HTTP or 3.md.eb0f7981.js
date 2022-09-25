import{_ as e,c as a,o as t,d as r}from"./app.c4f45da1.js";const H=JSON.parse('{"title":"HTTP or 2 \u53CA HTTP or 3","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTTP/2","slug":"http-2","link":"#http-2","children":[]},{"level":2,"title":"\u4E8C\u8FDB\u5236\u4F20\u8F93","slug":"\u4E8C\u8FDB\u5236\u4F20\u8F93","link":"#\u4E8C\u8FDB\u5236\u4F20\u8F93","children":[]},{"level":2,"title":"\u591A\u8DEF\u590D\u7528","slug":"\u591A\u8DEF\u590D\u7528","link":"#\u591A\u8DEF\u590D\u7528","children":[]},{"level":2,"title":"Header \u538B\u7F29","slug":"header-\u538B\u7F29","link":"#header-\u538B\u7F29","children":[]},{"level":2,"title":"\u670D\u52A1\u7AEF Push","slug":"\u670D\u52A1\u7AEF-push","link":"#\u670D\u52A1\u7AEF-push","children":[]},{"level":2,"title":"HTTP/3","slug":"http-3","link":"#http-3","children":[{"level":3,"title":"QUIC","slug":"quic","link":"#quic","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"\u9762\u8BD5/\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053/HTTP or 2 \u53CA HTTP or 3.md"}'),T={name:"\u9762\u8BD5/\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053/HTTP or 2 \u53CA HTTP or 3.md"},p=r('<h1 id="http-or-2-\u53CA-http-or-3" tabindex="-1">HTTP or 2 \u53CA HTTP or 3 <a class="header-anchor" href="#http-or-2-\u53CA-http-or-3" aria-hidden="true">#</a></h1><hr><h1 id="http-2-\u53CA-http-3" tabindex="-1">HTTP/2 \u53CA HTTP/3 <a class="header-anchor" href="#http-2-\u53CA-http-3" aria-hidden="true">#</a></h1><p>\u8FD9\u4E00\u7AE0\u8282\u6211\u4EEC\u5C06\u6765\u5B66\u4E60 HTTP/2 \u53CA HTTP/3 \u7684\u5185\u5BB9\u3002</p><p>HTTP/2 \u5F88\u597D\u7684\u89E3\u51B3\u4E86\u5F53\u4E0B\u6700\u5E38\u7528\u7684 HTTP/1 \u6240\u5B58\u5728\u7684\u4E00\u4E9B\u6027\u80FD\u95EE\u9898\uFF0C\u53EA\u9700\u8981\u5347\u7EA7\u5230\u8BE5\u534F\u8BAE\u5C31\u53EF\u4EE5\u51CF\u5C11\u5F88\u591A\u4E4B\u524D\u9700\u8981\u505A\u7684\u6027\u80FD\u4F18\u5316\u5DE5\u4F5C\uFF0C\u5F53\u7136\u517C\u5BB9\u95EE\u9898\u4EE5\u53CA\u5982\u4F55\u4F18\u96C5\u964D\u7EA7\u5E94\u8BE5\u662F\u56FD\u5185\u8FD8\u4E0D\u666E\u904D\u4F7F\u7528\u7684\u539F\u56E0\u4E4B\u4E00\u3002</p><p>\u867D\u7136 HTTP/2 \u5DF2\u7ECF\u89E3\u51B3\u4E86\u5F88\u591A\u95EE\u9898\uFF0C\u4F46\u662F\u5E76\u4E0D\u4EE3\u8868\u5B83\u5DF2\u7ECF\u662F\u5B8C\u7F8E\u7684\u4E86\uFF0CHTTP/3 \u5C31\u662F\u4E3A\u4E86\u89E3\u51B3 HTTP/2 \u6240\u5B58\u5728\u7684\u4E00\u4E9B\u95EE\u9898\u800C\u88AB\u63A8\u51FA\u6765\u7684\u3002</p><h2 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-hidden="true">#</a></h2><p>HTTP/2 \u76F8\u6BD4\u4E8E HTTP/1\uFF0C\u53EF\u4EE5\u8BF4\u662F\u5927\u5E45\u5EA6\u63D0\u9AD8\u4E86\u7F51\u9875\u7684\u6027\u80FD\u3002</p><p>\u5728 HTTP/1 \u4E2D\uFF0C\u4E3A\u4E86\u6027\u80FD\u8003\u8651\uFF0C\u6211\u4EEC\u4F1A\u5F15\u5165\u96EA\u78A7\u56FE\u3001\u5C06\u5C0F\u56FE\u5185\u8054\u3001\u4F7F\u7528\u591A\u4E2A\u57DF\u540D\u7B49\u7B49\u7684\u65B9\u5F0F\u3002\u8FD9\u4E00\u5207\u90FD\u662F\u56E0\u4E3A\u6D4F\u89C8\u5668\u9650\u5236\u4E86\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u7684\u8BF7\u6C42\u6570\u91CF\uFF08Chrome \u4E0B\u4E00\u822C\u662F\u9650\u5236\u516D\u4E2A\u8FDE\u63A5\uFF09\uFF0C\u5F53\u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42\u5F88\u591A\u8D44\u6E90\u7684\u65F6\u5019\uFF0C\u961F\u5934\u963B\u585E\uFF08Head of line blocking\uFF09\u4F1A\u5BFC\u81F4\u5728\u8FBE\u5230\u6700\u5927\u8BF7\u6C42\u6570\u91CF\u65F6\uFF0C\u5269\u4F59\u7684\u8D44\u6E90\u9700\u8981\u7B49\u5F85\u5176\u4ED6\u8D44\u6E90\u8BF7\u6C42\u5B8C\u6210\u540E\u624D\u80FD\u53D1\u8D77\u8BF7\u6C42\u3002</p><p>\u5728 HTTP/2 \u4E2D\u5F15\u5165\u4E86\u591A\u8DEF\u590D\u7528\u7684\u6280\u672F\uFF0C\u8FD9\u4E2A\u6280\u672F\u53EF\u4EE5\u53EA\u901A\u8FC7\u4E00\u4E2A TCP \u8FDE\u63A5\u5C31\u53EF\u4EE5\u4F20\u8F93\u6240\u6709\u7684\u8BF7\u6C42\u6570\u636E\u3002\u591A\u8DEF\u590D\u7528\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u6D4F\u89C8\u5668\u9650\u5236\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u7684\u8BF7\u6C42\u6570\u91CF\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u4E5F\u95F4\u63A5\u66F4\u5BB9\u6613\u5B9E\u73B0\u5168\u901F\u4F20\u8F93\uFF0C\u6BD5\u7ADF\u65B0\u5F00\u4E00\u4E2A TCP \u8FDE\u63A5\u90FD\u9700\u8981\u6162\u6162\u63D0\u5347\u4F20\u8F93\u901F\u5EA6\u3002</p><p>\u5927\u5BB6\u53EF\u4EE5\u901A\u8FC7 <a href="https://http2.akamai.com/demo" target="_blank" rel="noreferrer">\u8BE5\u94FE\u63A5</a> \u611F\u53D7\u4E0B HTTP/2 \u6BD4 HTTP/1 \u5230\u5E95\u5FEB\u4E86\u591A\u5C11\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/12/163542ca61eaff17~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5728 HTTP/1 \u4E2D\uFF0C\u56E0\u4E3A\u961F\u5934\u963B\u585E\u7684\u539F\u56E0\uFF0C\u4F60\u4F1A\u53D1\u73B0\u53D1\u9001\u8BF7\u6C42\u662F\u957F\u8FD9\u6837\u7684</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/12/163542c96df8563d~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5728 HTTP/2 \u4E2D\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u590D\u7528\u540C\u4E00\u4E2A TCP \u8FDE\u63A5\uFF0C\u4F60\u4F1A\u53D1\u73B0\u53D1\u9001\u8BF7\u6C42\u662F\u957F\u8FD9\u6837\u7684</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/12/163542c9d3128c7a~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u4E8C\u8FDB\u5236\u4F20\u8F93" tabindex="-1">\u4E8C\u8FDB\u5236\u4F20\u8F93 <a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u4F20\u8F93" aria-hidden="true">#</a></h2><p>HTTP/2 \u4E2D\u6240\u6709\u52A0\u5F3A\u6027\u80FD\u7684\u6838\u5FC3\u70B9\u5728\u4E8E\u6B64\u3002\u5728\u4E4B\u524D\u7684 HTTP \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u662F\u901A\u8FC7\u6587\u672C\u7684\u65B9\u5F0F\u4F20\u8F93\u6570\u636E\u3002\u5728 HTTP/2 \u4E2D\u5F15\u5165\u4E86\u65B0\u7684\u7F16\u7801\u673A\u5236\uFF0C\u6240\u6709\u4F20\u8F93\u7684\u6570\u636E\u90FD\u4F1A\u88AB\u5206\u5272\uFF0C\u5E76\u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u7F16\u7801\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/12/163543c25e5e9f23~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u591A\u8DEF\u590D\u7528" tabindex="-1">\u591A\u8DEF\u590D\u7528 <a class="header-anchor" href="#\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h2><p>\u5728 HTTP/2 \u4E2D\uFF0C\u6709\u4E24\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5206\u522B\u662F\u5E27\uFF08frame\uFF09\u548C\u6D41\uFF08stream\uFF09\u3002</p><p>\u5E27\u4EE3\u8868\u7740\u6700\u5C0F\u7684\u6570\u636E\u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5E27\u4F1A\u6807\u8BC6\u51FA\u8BE5\u5E27\u5C5E\u4E8E\u54EA\u4E2A\u6D41\uFF0C\u6D41\u4E5F\u5C31\u662F\u591A\u4E2A\u5E27\u7EC4\u6210\u7684\u6570\u636E\u6D41\u3002</p><p>\u591A\u8DEF\u590D\u7528\uFF0C\u5C31\u662F\u5728\u4E00\u4E2A TCP \u8FDE\u63A5\u4E2D\u53EF\u4EE5\u5B58\u5728\u591A\u6761\u6D41\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4E5F\u5C31\u662F\u53EF\u4EE5\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5BF9\u7AEF\u53EF\u4EE5\u901A\u8FC7\u5E27\u4E2D\u7684\u6807\u8BC6\u77E5\u9053\u5C5E\u4E8E\u54EA\u4E2A\u8BF7\u6C42\u3002\u901A\u8FC7\u8FD9\u4E2A\u6280\u672F\uFF0C\u53EF\u4EE5\u907F\u514D HTTP \u65E7\u7248\u672C\u4E2D\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u6781\u5927\u7684\u63D0\u9AD8\u4F20\u8F93\u6027\u80FD\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/12/1635442531d3e5ee~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="header-\u538B\u7F29" tabindex="-1">Header \u538B\u7F29 <a class="header-anchor" href="#header-\u538B\u7F29" aria-hidden="true">#</a></h2><p>\u5728 HTTP/1 \u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u6587\u672C\u7684\u5F62\u5F0F\u4F20\u8F93 header\uFF0C\u5728 header \u643A\u5E26 cookie \u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u6BCF\u6B21\u90FD\u9700\u8981\u91CD\u590D\u4F20\u8F93\u51E0\u767E\u5230\u51E0\u5343\u7684\u5B57\u8282\u3002</p><p>\u5728 HTTP /2 \u4E2D\uFF0C\u4F7F\u7528\u4E86 HPACK \u538B\u7F29\u683C\u5F0F\u5BF9\u4F20\u8F93\u7684 header \u8FDB\u884C\u7F16\u7801\uFF0C\u51CF\u5C11\u4E86 header \u7684\u5927\u5C0F\u3002\u5E76\u5728\u4E24\u7AEF\u7EF4\u62A4\u4E86\u7D22\u5F15\u8868\uFF0C\u7528\u4E8E\u8BB0\u5F55\u51FA\u73B0\u8FC7\u7684 header \uFF0C\u540E\u9762\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5C31\u53EF\u4EE5\u4F20\u8F93\u5DF2\u7ECF\u8BB0\u5F55\u8FC7\u7684 header \u7684\u952E\u540D\uFF0C\u5BF9\u7AEF\u6536\u5230\u6570\u636E\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7\u952E\u540D\u627E\u5230\u5BF9\u5E94\u7684\u503C\u3002</p><h2 id="\u670D\u52A1\u7AEF-push" tabindex="-1">\u670D\u52A1\u7AEF Push <a class="header-anchor" href="#\u670D\u52A1\u7AEF-push" aria-hidden="true">#</a></h2><p>\u5728 HTTP/2 \u4E2D\uFF0C\u670D\u52A1\u7AEF\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u67D0\u4E2A\u8BF7\u6C42\u540E\uFF0C\u4E3B\u52A8\u63A8\u9001\u5176\u4ED6\u8D44\u6E90\u3002</p><p>\u53EF\u4EE5\u60F3\u8C61\u4EE5\u4E0B\u60C5\u51B5\uFF0C\u67D0\u4E9B\u8D44\u6E90\u5BA2\u6237\u7AEF\u662F\u4E00\u5B9A\u4F1A\u8BF7\u6C42\u7684\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u91C7\u53D6\u670D\u52A1\u7AEF push \u7684\u6280\u672F\uFF0C\u63D0\u524D\u7ED9\u5BA2\u6237\u7AEF\u63A8\u9001\u5FC5\u8981\u7684\u8D44\u6E90\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u76F8\u5BF9\u51CF\u5C11\u4E00\u70B9\u5EF6\u8FDF\u65F6\u95F4\u3002\u5F53\u7136\u5728\u6D4F\u89C8\u5668\u517C\u5BB9\u7684\u60C5\u51B5\u4E0B\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 prefetch \u3002</p><h2 id="http-3" tabindex="-1">HTTP/3 <a class="header-anchor" href="#http-3" aria-hidden="true">#</a></h2><p>\u867D\u7136 HTTP/2 \u89E3\u51B3\u4E86\u5F88\u591A\u4E4B\u524D\u65E7\u7248\u672C\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u5B83\u8FD8\u662F\u5B58\u5728\u4E00\u4E2A\u5DE8\u5927\u7684\u95EE\u9898\uFF0C\u867D\u7136\u8FD9\u4E2A\u95EE\u9898\u5E76\u4E0D\u662F\u5B83\u672C\u8EAB\u9020\u6210\u7684\uFF0C\u800C\u662F\u5E95\u5C42\u652F\u6491\u7684 TCP \u534F\u8BAE\u7684\u95EE\u9898\u3002</p><p>\u56E0\u4E3A HTTP/2 \u4F7F\u7528\u4E86\u591A\u8DEF\u590D\u7528\uFF0C\u4E00\u822C\u6765\u8BF4\u540C\u4E00\u57DF\u540D\u4E0B\u53EA\u9700\u8981\u4F7F\u7528\u4E00\u4E2A TCP \u8FDE\u63A5\u3002\u5F53\u8FD9\u4E2A\u8FDE\u63A5\u4E2D\u51FA\u73B0\u4E86\u4E22\u5305\u7684\u60C5\u51B5\uFF0C\u90A3\u5C31\u4F1A\u5BFC\u81F4 HTTP/2 \u7684\u8868\u73B0\u60C5\u51B5\u53CD\u5012\u4E0D\u5982 HTTP/1 \u4E86\u3002</p><p>\u56E0\u4E3A\u5728\u51FA\u73B0\u4E22\u5305\u7684\u60C5\u51B5\u4E0B\uFF0C\u6574\u4E2A TCP \u90FD\u8981\u5F00\u59CB\u7B49\u5F85\u91CD\u4F20\uFF0C\u4E5F\u5C31\u5BFC\u81F4\u4E86\u540E\u9762\u7684\u6240\u6709\u6570\u636E\u90FD\u88AB\u963B\u585E\u4E86\u3002\u4F46\u662F\u5BF9\u4E8E HTTP/1 \u6765\u8BF4\uFF0C\u53EF\u4EE5\u5F00\u542F\u591A\u4E2A TCP \u8FDE\u63A5\uFF0C\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u53CD\u5230\u53EA\u4F1A\u5F71\u54CD\u5176\u4E2D\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u5269\u4F59\u7684 TCP \u8FDE\u63A5\u8FD8\u53EF\u4EE5\u6B63\u5E38\u4F20\u8F93\u6570\u636E\u3002</p><p>\u90A3\u4E48\u53EF\u80FD\u5C31\u4F1A\u6709\u4EBA\u8003\u8651\u5230\u53BB\u4FEE\u6539 TCP \u534F\u8BAE\uFF0C\u5176\u5B9E\u8FD9\u5DF2\u7ECF\u662F\u4E00\u4EF6\u4E0D\u53EF\u80FD\u5B8C\u6210\u7684\u4EFB\u52A1\u4E86\u3002\u56E0\u4E3A TCP \u5B58\u5728\u7684\u65F6\u95F4\u5B9E\u5728\u592A\u957F\uFF0C\u5DF2\u7ECF\u5145\u65A5\u5728\u5404\u79CD\u8BBE\u5907\u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u534F\u8BAE\u662F\u7531\u64CD\u4F5C\u7CFB\u7EDF\u5B9E\u73B0\u7684\uFF0C\u66F4\u65B0\u8D77\u6765\u4E0D\u5927\u73B0\u5B9E\u3002</p><p>\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0CGoogle \u5C31\u66F4\u8D77\u7089\u7076\u641E\u4E86\u4E00\u4E2A\u57FA\u4E8E UDP \u534F\u8BAE\u7684 QUIC \u534F\u8BAE\uFF0C\u5E76\u4E14\u4F7F\u7528\u5728\u4E86 HTTP/3 \u4E0A\uFF0C\u5F53\u7136 HTTP/3 \u4E4B\u524D\u540D\u4E3A HTTP-over-QUIC\uFF0C\u4ECE\u8FD9\u4E2A\u540D\u5B57\u4E2D\u6211\u4EEC\u4E5F\u53EF\u4EE5\u53D1\u73B0\uFF0CHTTP/3 \u6700\u5927\u7684\u6539\u9020\u5C31\u662F\u4F7F\u7528\u4E86 QUIC\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u5173\u4E8E\u8FD9\u4E2A\u534F\u8BAE\u7684\u5185\u5BB9\u3002</p><h3 id="quic" tabindex="-1">QUIC <a class="header-anchor" href="#quic" aria-hidden="true">#</a></h3><p>\u4E4B\u524D\u6211\u4EEC\u5B66\u4E60\u8FC7 UDP \u534F\u8BAE\u7684\u5185\u5BB9\uFF0C\u77E5\u9053\u8FD9\u4E2A\u534F\u8BAE\u867D\u7136\u6548\u7387\u5F88\u9AD8\uFF0C\u4F46\u662F\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u53EF\u9760\u3002QUIC \u867D\u7136\u57FA\u4E8E UDP\uFF0C\u4F46\u662F\u5728\u539F\u672C\u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E86\u5F88\u591A\u529F\u80FD\uFF0C\u6BD4\u5982\u591A\u8DEF\u590D\u7528\u30010-RTT\u3001\u4F7F\u7528 TLS1.3 \u52A0\u5BC6\u3001\u6D41\u91CF\u63A7\u5236\u3001\u6709\u5E8F\u4EA4\u4ED8\u3001\u91CD\u4F20\u7B49\u7B49\u529F\u80FD\u3002\u8FD9\u91CC\u6211\u4EEC\u5C31\u6311\u9009\u51E0\u4E2A\u91CD\u8981\u7684\u529F\u80FD\u5B66\u4E60\u4E0B\u8FD9\u4E2A\u534F\u8BAE\u7684\u5185\u5BB9\u3002</p><p><strong>\u591A\u8DEF\u590D\u7528</strong></p><p>\u867D\u7136 HTTP/2 \u652F\u6301\u4E86\u591A\u8DEF\u590D\u7528\uFF0C\u4F46\u662F TCP \u534F\u8BAE\u7EC8\u7A76\u662F\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD\u7684\u3002QUIC \u539F\u751F\u5C31\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5E76\u4E14\u4F20\u8F93\u7684\u5355\u4E2A\u6570\u636E\u6D41\u53EF\u4EE5\u4FDD\u8BC1\u6709\u5E8F\u4EA4\u4ED8\u4E14\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u7684\u6570\u636E\u6D41\uFF0C\u8FD9\u6837\u7684\u6280\u672F\u5C31\u89E3\u51B3\u4E86\u4E4B\u524D TCP \u5B58\u5728\u7684\u95EE\u9898\u3002</p><p>\u5E76\u4E14 QUIC \u5728\u79FB\u52A8\u7AEF\u7684\u8868\u73B0\u4E5F\u4F1A\u6BD4 TCP \u597D\u3002\u56E0\u4E3A TCP \u662F\u57FA\u4E8E IP \u548C\u7AEF\u53E3\u53BB\u8BC6\u522B\u8FDE\u63A5\u7684\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5728\u591A\u53D8\u7684\u79FB\u52A8\u7AEF\u7F51\u7EDC\u73AF\u5883\u4E0B\u662F\u5F88\u8106\u5F31\u7684\u3002\u4F46\u662F QUIC \u662F\u901A\u8FC7 ID \u7684\u65B9\u5F0F\u53BB\u8BC6\u522B\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u4E0D\u7BA1\u4F60\u7F51\u7EDC\u73AF\u5883\u5982\u4F55\u53D8\u5316\uFF0C\u53EA\u8981 ID \u4E0D\u53D8\uFF0C\u5C31\u80FD\u8FC5\u901F\u91CD\u8FDE\u4E0A\u3002</p><p><strong>0-RTT</strong></p><p>\u901A\u8FC7\u4F7F\u7528\u7C7B\u4F3C TCP \u5FEB\u901F\u6253\u5F00\u7684\u6280\u672F\uFF0C\u7F13\u5B58\u5F53\u524D\u4F1A\u8BDD\u7684\u4E0A\u4E0B\u6587\uFF0C\u5728\u4E0B\u6B21\u6062\u590D\u4F1A\u8BDD\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5C06\u4E4B\u524D\u7684\u7F13\u5B58\u4F20\u9012\u7ED9\u670D\u52A1\u7AEF\u9A8C\u8BC1\u901A\u8FC7\u5C31\u53EF\u4EE5\u8FDB\u884C\u4F20\u8F93\u4E86\u3002</p><p><strong>\u7EA0\u9519\u673A\u5236</strong></p><p>\u5047\u5982\u8BF4\u8FD9\u6B21\u6211\u8981\u53D1\u9001\u4E09\u4E2A\u5305\uFF0C\u90A3\u4E48\u534F\u8BAE\u4F1A\u7B97\u51FA\u8FD9\u4E09\u4E2A\u5305\u7684\u5F02\u6216\u503C\u5E76\u5355\u72EC\u53D1\u51FA\u4E00\u4E2A\u6821\u9A8C\u5305\uFF0C\u4E5F\u5C31\u662F\u603B\u5171\u53D1\u51FA\u4E86\u56DB\u4E2A\u5305\u3002</p><p>\u5F53\u51FA\u73B0\u5176\u4E2D\u7684\u975E\u6821\u9A8C\u5305\u4E22\u5305\u7684\u60C5\u51B5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53E6\u5916\u4E09\u4E2A\u5305\u8BA1\u7B97\u51FA\u4E22\u5931\u7684\u6570\u636E\u5305\u7684\u5185\u5BB9\u3002</p><p>\u5F53\u7136\u8FD9\u79CD\u6280\u672F\u53EA\u80FD\u4F7F\u7528\u5728\u4E22\u5931\u4E00\u4E2A\u5305\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u51FA\u73B0\u4E22\u5931\u591A\u4E2A\u5305\u5C31\u4E0D\u80FD\u4F7F\u7528\u7EA0\u9519\u673A\u5236\u4E86\uFF0C\u53EA\u80FD\u4F7F\u7528\u91CD\u4F20\u7684\u65B9\u5F0F\u4E86\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u603B\u7ED3\u4E00\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>HTTP/2 \u901A\u8FC7\u591A\u8DEF\u590D\u7528\u3001\u4E8C\u8FDB\u5236\u6D41\u3001Header \u538B\u7F29\u7B49\u7B49\u6280\u672F\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u6027\u80FD\uFF0C\u4F46\u662F\u8FD8\u662F\u5B58\u5728\u7740\u95EE\u9898\u7684</li><li>QUIC \u57FA\u4E8E UDP \u5B9E\u73B0\uFF0C\u662F HTTP/3 \u4E2D\u7684\u5E95\u5C42\u652F\u6491\u534F\u8BAE\uFF0C\u8BE5\u534F\u8BAE\u57FA\u4E8E UDP\uFF0C\u53C8\u53D6\u4E86 TCP \u4E2D\u7684\u7CBE\u534E\uFF0C\u5B9E\u73B0\u4E86\u5373\u5FEB\u53C8\u53EF\u9760\u7684\u534F\u8BAE</li></ul>',50),h=[p];function i(s,d,l,o,P,n){return t(),a("div",null,h)}const g=e(T,[["render",i]]);export{H as __pageData,g as default};
