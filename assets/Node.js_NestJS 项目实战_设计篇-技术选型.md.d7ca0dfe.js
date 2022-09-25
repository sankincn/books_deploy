import{_ as e,c as o,o as d,d as c}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u6280\u672F\u9009\u578B","slug":"\u6280\u672F\u9009\u578B","link":"#\u6280\u672F\u9009\u578B","children":[{"level":3,"title":"\u5F00\u53D1\u6846\u67B6\u9009\u578B","slug":"\u5F00\u53D1\u6846\u67B6\u9009\u578B","link":"#\u5F00\u53D1\u6846\u67B6\u9009\u578B","children":[]},{"level":3,"title":"\u6570\u636E\u5E93\u9009\u578B","slug":"\u6570\u636E\u5E93\u9009\u578B","link":"#\u6570\u636E\u5E93\u9009\u578B","children":[]}]},{"level":2,"title":"\u5199\u5728\u6700\u540E","slug":"\u5199\u5728\u6700\u540E","link":"#\u5199\u5728\u6700\u540E","children":[]}],"relativePath":"Node.js/NestJS \u9879\u76EE\u5B9E\u6218/\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B.md"}'),r={name:"Node.js/NestJS \u9879\u76EE\u5B9E\u6218/\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B.md"},t=c('<h1 id="\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B" tabindex="-1">\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B <a class="header-anchor" href="#\u8BBE\u8BA1\u7BC7-\u6280\u672F\u9009\u578B" aria-hidden="true">#</a></h1><hr><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u4E00\u7AE0\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E86\u7F51\u5173\u7CFB\u7EDF\uFF0C\u5E76\u4E14\u9488\u5BF9\u8981\u505A\u7684\u529F\u80FD\u505A\u4E86\u9879\u76EE\u67B6\u6784\u8BBE\u8BA1\u4E0E\u9700\u6C42\u62C6\u89E3\u3002</p><p>\u90A3\u5728\u4E00\u4E2A\u9879\u76EE\u6B63\u5F0F\u5F00\u53D1\u4E4B\u524D\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u505A\u4E00\u4E2A\u6280\u672F\u8C03\u7814\uFF0C\u4ECE\u5F00\u53D1\u6846\u67B6\u3001\u4F7F\u7528\u7684\u5DE5\u5177\u3001\u6570\u636E\u5E93\u7B49\u7B49\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u9884\u7814\uFF0C\u907F\u514D\u5728\u4E1A\u52A1\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u56E0\u4E3A\u6280\u672F\u539F\u56E0\u5BFC\u81F4\u5B8C\u6210\u4E0D\u4E86\u9700\u6C42\u7684\u5C40\u9762\u3002</p><p>\u4F8B\u5982\u56E2\u961F\u4E2D\u6240\u6709\u5E76\u6CA1\u6709 <code>Java</code> \u5F00\u53D1\uFF0C\u6784\u5EFA\u5DE5\u5177\u4F7F\u7528\u4E86\u57FA\u4E8E <code>Java</code> \u7684 <code>Jenkins</code>\uFF0C\u8FD9\u4E2A\u65F6\u5019\u60F3\u5BF9 <code>Jenkins</code> \u6709\u4E00\u4E9B\u6280\u672F\u6539\u9020\u8981\u6C42\u65E0\u6CD5\u987A\u5229\u5B8C\u6210\u3002</p><p>\u672C\u7AE0\u6211\u4EEC\u5C31\u4E00\u8D77\u5BF9<strong>\u5F00\u53D1\u6846\u67B6</strong>\u4E0E<strong>\u6570\u636E\u5E93</strong>\u7684\u7C7B\u578B\u505A\u7B80\u5355\u7684\u5BF9\u6BD4\u4E0E\u9009\u62E9\u3002</p><blockquote><p>\u5BF9\u4E8E\u5DE5\u7A0B\u4E2D\u6240\u4F7F\u7528\u7684\u73AF\u5883\u4EE5\u53CA\u4E2D\u95F4\u4EF6\u914D\u7F6E\uFF0C\u611F\u8C22\u540E\u7AEF\u5927\u4F6C<a href="https://juejin.cn/user/325111173878983" target="_blank" rel="noreferrer">\u548C\u8033\u6735</a>\u4E13\u95E8\u5199\u4E86\u4E00\u7BC7\u4ECB\u7ECD\u7684\u6587\u7AE0\u914D\u5408\u4E00\u4E0B\uFF0C\u5185\u5BB9\u975E\u5E38\u5168\u9762\uFF0C\u9700\u8981\u7684\u540C\u5B66\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B\u3010<a href="https://juejin.cn/post/7118919471317647397/" target="_blank" rel="noreferrer">\u73AF\u5883\u4E0E\u4E2D\u95F4\u4EF6\u914D\u7F6E</a>\u3011</p></blockquote><h2 id="\u6280\u672F\u9009\u578B" tabindex="-1">\u6280\u672F\u9009\u578B <a class="header-anchor" href="#\u6280\u672F\u9009\u578B" aria-hidden="true">#</a></h2><h3 id="\u5F00\u53D1\u6846\u67B6\u9009\u578B" tabindex="-1">\u5F00\u53D1\u6846\u67B6\u9009\u578B <a class="header-anchor" href="#\u5F00\u53D1\u6846\u67B6\u9009\u578B" aria-hidden="true">#</a></h3><p>\u5E02\u9762\u4E0A\u5E38\u89C1\u7684\u7F51\u5173\u7CFB\u7EDF\u53CA\u6846\u67B6\u6709\u5982\u4E0B\u51E0\u79CD\u3002</p><blockquote><p>\u53EA\u662F\u4E3E\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u6846\u67B6\uFF0C\u5E76\u672A\u5168\u90E8\u5217\u51FA\uFF0C\u8FD8\u6709\u5F88\u591A\u5176\u4ED6\u4F18\u79C0\u7684\u6846\u67B6\u53EF\u4EE5\u81EA\u884C\u627E\u5BFB</p></blockquote><ul><li>Nginx+Lua\uFF1AOpen Resty\u3001Abtesting Gateway\u3002</li><li>Java\uFF1ASpring Cloud Gateway\u3002</li><li>Go\uFF1AJanus\u3001Grpc-Gateway\u3002</li><li>Node.js\uFF1AExpress Gateway\u3001MicroGateway\u3002</li></ul><p>\u4E0A\u8FF0\u90FD\u662F\u4E1A\u5185\u6210\u719F\u7684\u6846\u67B6\u4EE5\u53CA\u65B9\u6848\uFF0C\u5E76\u4E14\u7F51\u5173\u7CFB\u7EDF\u4F5C\u4E3A<strong>\u72EC\u7ACB</strong>\u4E8E\u4E1A\u52A1\u7684\u6280\u672F\u4E2D\u95F4\u5C42\uFF0C\u5E76\u4E0D\u5B58\u5728\u5F00\u53D1\u8BED\u8A00\u4E0E\u6846\u67B6\u7684\u9650\u5236\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u56E2\u961F\u7684\u5B9E\u9645\u6280\u672F\u6808\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u56E2\u961F\u7684\u7F51\u5173\u6846\u67B6\u3002</p><p>\u4F46\u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\uFF0C\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\u7684\u6210\u672C\u4E0D\u4F4E\u3002\u540C\u65F6\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3\u4E1A\u52A1\u9700\u6C42\uFF0C\u6211\u4EEC\u5E76\u4E0D\u6253\u7B97\u4F7F\u7528\u5E02\u9762\u5DF2\u7ECF\u5F00\u6E90\u6216\u8005\u6210\u719F\u7684\u6846\u67B6\u53BB\u642D\u5EFA\u4E00\u4E2A\u7F51\u5173\u7CFB\u7EDF\uFF0C\u800C\u662F\u4F7F\u7528 <code>NodeJS</code> \u6765\u4ECE\u5934\u642D\u5EFA\u4E00\u4E2A\u7F51\u5173\u7CFB\u7EDF\u3002</p><p>\u65E2\u7136\u9009\u62E9\u4E86 <code>NodeJS</code> \u5F00\u53D1\u7CFB\u7EDF\uFF0C\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u6846\u67B6\u4E5F\u6709\u5F88\u591A\u6BD4\u5982\u8001\u724C\u7684 <code>Express</code>\u3001<code>Koa</code> \u7B49\uFF0C\u6211\u4EEC\u9009\u62E9\u57FA\u4E8E\u5B83\u4FE9\u5C01\u88C5\u7684\u4E0A\u5C42\u6846\u67B6 <code>Egg</code> \u4E0E <code>NestJs</code> \u8FDB\u884C\u7B80\u5355\u5BF9\u6BD4\u3002</p><h4 id="egg-\u4E0E-nestjs-\u5BF9\u6BD4" tabindex="-1"><code>Egg</code> \u4E0E <code>NestJs</code> \u5BF9\u6BD4 <a class="header-anchor" href="#egg-\u4E0E-nestjs-\u5BF9\u6BD4" aria-hidden="true">#</a></h4><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u770B\u770B\u4E24\u5BB6\u7684 <strong>Slogan</strong>\uFF1A</p><ul><li><code>Egg</code>: \u4E3A\u4F01\u4E1A\u7EA7\u6846\u67B6\u548C\u5E94\u7528\u800C\u751F\u3002</li><li><code>NestJS</code>: \u7528\u4E8E\u6784\u5EFA\u9AD8\u6548\u3001\u53EF\u4F38\u7F29\u7684\u670D\u52A1\u7AEF\u5E94\u7528\u7A0B\u5E8F\u7684\u6E10\u8FDB\u5F0F <strong>Node.js</strong> \u6846\u67B6\u3002</li></ul><p>\u4ECE <strong>Slogan</strong> \u4E0A\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C <code>Egg</code>\u66F4\u5173\u6CE8<strong>\u4F01\u4E1A</strong>\u7684\u7EF4\u5EA6\uFF0C<code>NestJS</code> \u66F4\u6CE8\u91CD<strong>\u9879\u76EE</strong>\u8FD9\u4E2A\u7EF4\u5EA6\u3002</p><p>\u63A5\u4E0B\u6765\u662F\u5B83\u4EEC\u7684\u5B66\u4E60\u4F53\u9A8C\u3002\u9996\u5148\u662F <code>Egg</code>\uFF1A</p><ol><li>\u6587\u6863\u4F53\u9A8C\u975E\u5E38\u68D2\uFF0C\u6BD5\u7ADF\u662F\u963F\u91CC\u5F00\u6E90\uFF0C\u56FD\u4EBA\u5F00\u53D1\u7684\u6846\u67B6\uFF0C\u4E2D\u6587\u6587\u6863\u5185\u5BB9\u5F88\u4E30\u5BCC\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u95EE\u9898\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u627E\u5230\u5BF9\u5E94\u7684\u5185\u5BB9\u3002</li><li>\u5949\u884C\u300E<strong>\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E</strong>\u300F\uFF0C\u6309\u7167<a href="https://www.eggjs.org/zh-CN/advanced/loader" target="_blank" rel="noreferrer">\u4E00\u5957\u7EDF\u4E00\u7684\u7EA6\u5B9A</a>\u8FDB\u884C\u5E94\u7528\u5F00\u53D1\uFF0C\u56E2\u961F\u5185\u90E8\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u51CF\u5C11\u5F00\u53D1\u4EBA\u5458\u7684\u5B66\u4E60\u4E0E\u534F\u540C\u6210\u672C\u3002</li><li>\u4F7F\u7528\u7684\u603B\u4EBA\u6570\u867D\u7136\u4E0D\u6BD4 NestJS\uFF0C\u4F46\u80DC\u5728\u56FD\u4EBA\u591A\uFF0C\u9047\u5230\u95EE\u9898\u53EF\u4EE5\u54A8\u8BE2\u7684\u4EBA\u4E5F\u4F1A\u591A\u4E00\u4E9B\u3002</li></ol><p>\u63A5\u7740\u662F <code>NestJS</code>\uFF1A</p><ol><li>\u4E2D\u6587\u6587\u6863\u5927\u90E8\u5206\u7684\u5185\u5BB9\u662F\u4E2D\u6587\u76F4\u8BD1\uFF0C\u6709\u4E9B\u5185\u5BB9\u6CA1\u6709\u7FFB\u8BD1\u5B8C\u6574\u6216\u8005\u7FFB\u8BD1\u610F\u5883\u4E0D\u5BF9\u3002\u53E6\u5916\uFF0C\u4E2D\u6587\u7248\u672C\u7684\u5185\u5BB9\u4E5F\u4F1A\u843D\u540E\u82F1\u6587\u7248\u672C\u5F88\u591A\uFF0C\u6587\u6863\u8D44\u6599\u4F7F\u7528\u3001\u5B66\u4E60\u8D77\u6765\u4F1A\u6BD4\u8F83\u9EBB\u70E6\u3002</li><li>\u4F7F\u7528\u603B\u4EBA\u6570\u867D\u7136\u6BD4 <code>Egg</code> \u66F4\u591A\u4E00\u4E9B\uFF0C\u4F46\u662F\u5728\u56FD\u5185\u4F7F\u7528\u7684\u4EBA\u6570\u4E0D\u53CA <code>Egg</code>\uFF0C\u6240\u4EE5\u5F88\u591A\u95EE\u9898\u89E3\u7B54\u4E2D\u6587\u7248\u672C\u4F1A\u5C11\u4E8E <code>Egg</code>\u3002</li></ol><h4 id="\u6280\u672F\u5206\u6790" tabindex="-1">\u6280\u672F\u5206\u6790 <a class="header-anchor" href="#\u6280\u672F\u5206\u6790" aria-hidden="true">#</a></h4><p><strong>Egg</strong></p><ol><li><code>Egg</code> \u7684\u5E95\u5C42\u6846\u67B6\u662F\u57FA\u4E8E <code>Koa</code> \u5F00\u53D1\uFF0C\u5728\u6027\u80FD\u4E0E\u5F00\u53D1\u4F53\u9A8C\u4E0A\u4F1A\u6BD4 <code>Express</code> \u66F4\u4F18\u8D8A\u3002</li><li>\u53EF\u9009\u7528 <code>JS</code> \u4EE5\u53CA <code>TS</code> \u5F00\u53D1\uFF0C\u4E24\u8005\u90FD\u662F\u57FA\u4E8E <code>Classify</code> \u5F00\u53D1\uFF0C\u5BF9\u521A\u63A5\u89E6\u670D\u52A1\u7AEF\u5F00\u53D1\u7684\u524D\u7AEF\u66F4\u53CB\u597D\u3002</li><li>\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\uFF0C\u51CF\u5C11\u5F00\u53D1\u8D1F\u62C5\u3001\u5B66\u4E60\u4EE5\u53CA\u534F\u4F5C\u6210\u672C\u3002</li><li>\u9AD8\u5EA6\u53EF\u6269\u5C55\u7684\u63D2\u4EF6\u673A\u5236\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5B9A\u5236\u63D2\u4EF6\u3002</li><li>\u5185\u7F6E\u96C6\u7FA4\uFF1A\u4F7F\u7528 <code>Cluster</code>\uFF0C\u81EA\u5E26\u8FDB\u7A0B\u5B88\u62A4\u3001\u591A\u8FDB\u7A0B\u4EE5\u53CA\u8FDB\u7A0B\u95F4\u901A\u8BAF\u7B49\u529F\u80FD\u3002</li></ol><p><strong>NestJS</strong></p><ol><li><code>NestJS</code> \u7684\u5E95\u5C42\u6846\u67B6\u662F\u57FA\u4E8E <code>Express</code> \u5F00\u53D1\u7684\u3002</li><li>\u9664\u4E86 <code>Express</code> \u4E4B\u5916\uFF0C<code>NestJS</code> \u4E5F\u652F\u6301\u4F7F\u7528 <a href="https://github.com/fastify/fastify" target="_blank" rel="noreferrer">Fastify</a> \u4F5C\u4E3A\u5E95\u5C42\u6846\u67B6\u3002\u56E0\u4E3A <code>NestJS</code> \u7684\u8BBE\u8BA1\u7406\u5FF5\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u6846\u67B6\u9002\u914D\u5668\uFF0C\u5176\u4E3B\u8981\u529F\u80FD\u662F\u4EE3\u7406\u4E2D\u95F4\u4EF6\u548C\u5904\u7406\u5668\u5230\u9002\u5F53\u7684\u7279\u5B9A\u5E93\u5E94\u7528\u4E2D\uFF0C\u4ECE\u800C\u8FBE\u5230\u6846\u67B6\u7684\u72EC\u7ACB\u6027\u3002</li><li><code>TS</code> \u7F16\u7A0B\u5E76\u7ED3\u5408\u4E86 <code>OOP</code>\uFF08\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF09\uFF0C<code>FP</code>\uFF08\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF09\u548C <code>FRP</code>\uFF08\u51FD\u6570\u5F0F\u54CD\u5E94\u7F16\u7A0B\uFF09\u7684\u5143\u7D20\uFF0C\u5B66\u4E60\u6210\u672C\u4F1A\u9AD8\u4E8E <code>Egg</code>\uFF0C\u5BF9\u65B0\u624B\u524D\u7AEF\u53CB\u597D\u5EA6\u4E0D\u9AD8\uFF0C\u518D\u52A0\u4E0A\u6587\u6863\u7F3A\u9677\uFF0C\u529D\u9000\u6982\u7387\u500D\u589E\u3002</li><li>\u6A21\u5757\u52A0\u8F7D\u65B9\u9762\u4F7F\u7528 IoC \u6A21\u5F0F\uFF1A\u6A21\u5757\u5BB9\u5668 - \u4F9D\u8D56\u6CE8\u5165(\u901A\u8FC7\u88C5\u9970\u5668\u548C\u5143\u6570\u636E\u5B9E\u73B0)\uFF0C\u5F00\u53D1\u6548\u7387\u4EE5\u53CA\u7EF4\u62A4\u6027\u4F1A\u66F4\u9AD8\u3002</li><li>\u6574\u4E2A\u6846\u67B6\u7684\u914D\u5957\u529F\u80FD\u975E\u5E38\u5B8C\u5584\u4F8B\u5982\uFF1A\u9274\u6743\u3001\u6587\u6863\u3001\u5FAE\u670D\u52A1\u3001<code>CLI</code> \u5DE5\u5177\u7B49\u3002</li></ol><h4 id="\u7EFC\u5408\u5BF9\u6BD4" tabindex="-1">\u7EFC\u5408\u5BF9\u6BD4 <a class="header-anchor" href="#\u7EFC\u5408\u5BF9\u6BD4" aria-hidden="true">#</a></h4><p><code>NestJS</code> \u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u9009\u62E9\uFF0C\u66F4\u52A0\u81EA\u7531\u4EE5\u53CA\u66F4\u504F\u5411\u540E\u7AEF\u5F00\u53D1\u7684\u4F53\u9A8C\uFF0C\u800C <code>Egg</code> \u4F5C\u4E3A\u6DF1\u5EA6\u5B9A\u5236\u8FC7\u7684\u6846\u67B6\uFF0C\u81EA\u5B9A\u4E49\u7684\u7A0B\u5EA6\u4F1A\u5F31\u4E8E <code>NestJS</code>\uFF0C\u5728\u56E2\u961F\u521D\u671F\u5FEB\u901F\u5F00\u53D1\u4E1A\u52A1\u7684\u65F6\u5019\u975E\u5E38\u9002\u5408\u3002</p><p>\u4E0A\u8FF0\u5BF9\u6BD4\u5E76\u4E0D\u4EE3\u8868\u4E24\u4E2A\u6846\u67B6\u4E00\u5B9A\u6709\u4E2A\u9AD8\u4E0B\u4E4B\u5206\uFF0C\u9488\u5BF9\u4E8E\u56E2\u961F\u3001\u9879\u76EE\u7684\u4E0D\u540C\u65F6\u671F\uFF0C\u5F00\u53D1\u4EBA\u5458\u7684\u80FD\u529B\u3001\u559C\u597D\uFF0C\u54EA\u4E00\u79CD\u6846\u67B6\u80FD\u53D1\u6325\u6700\u5927\u4EF7\u503C\uFF0C\u5B83\u5C31\u662F\u5F53\u524D\u5BF9\u4F60\u6765\u8BF4\u6700\u597D\u7684\u6846\u67B6\u3002</p><p>\u6B64\u5916\uFF0C\u4F7F\u7528 <code>Egg</code> \u6765\u5BF9\u6BD4 <code>NestJS</code> \u5E76\u4E0D\u662F\u975E\u5E38\u5408\u9002\uFF0C\u4E24\u8005\u7684\u8BBE\u8BA1\u6A21\u5F0F\u4E0A\u6709\u5DEE\u522B\uFF0C\u7406\u8BBA\u4E0A\u5E94\u8BE5\u7528\u53E6\u4E00\u6B3E <strong>IoC</strong> \u6846\u67B6 <a href="http://www.midwayjs.org/" target="_blank" rel="noreferrer">Midway</a> \u6765\u5BF9\u6BD4\uFF0C\u4E0D\u8FC7\u5728 <a href="https://juejin.cn/book/6948353204648148995" target="_blank" rel="noreferrer">DevOps</a> \u5C0F\u518C\u4E2D\u6211\u4EEC\u4F7F\u7528 <code>Egg</code> \u4F5C\u4E3A\u5F00\u53D1\u6846\u67B6\uFF0C\u6240\u4EE5\u8FD9\u672C\u5C0F\u518C\u4F18\u5148\u4F7F\u7528\u4E86 <code>Egg</code> \u4F5C\u4E3A\u9009\u578B\u5BF9\u6BD4\u3002</p><h3 id="\u6570\u636E\u5E93\u9009\u578B" tabindex="-1">\u6570\u636E\u5E93\u9009\u578B <a class="header-anchor" href="#\u6570\u636E\u5E93\u9009\u578B" aria-hidden="true">#</a></h3><p>\u6570\u636E\u5E93\u90E8\u5206\uFF0C\u6211\u4EEC\u4E3B\u8981\u5BF9\u6BD4 <strong>MySQL</strong> \u548C <strong>MongoDB</strong>\u3002</p><p>\u5178\u578B\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6709<strong>\u4E8B\u52A1\u56DE\u6EDA</strong>\uFF0C\u5B83\u652F\u6301<strong>\u5355\u70B9\u3001\u96C6\u7FA4\u90E8\u7F72\u67B6\u6784</strong>\uFF0C\u6210\u719F\u5EA6\u975E\u5E38\u9AD8\u3002\u5B83\u4F5C\u4E3A\u5F00\u6E90\u6570\u636E\u5E93\u62E5\u6709\u975E\u5E38\u5168\u7684\u6587\u6863\u4E0E\u793E\u533A\u8D44\u6E90\uFF0C\u51FA\u73B0\u95EE\u9898\u80FD\u5FEB\u901F\u83B7\u5F97\u5BF9\u5E94\u7684\u5E2E\u52A9\uFF0C\u540E\u7AEF\u9996\u63A8\u6570\u636E\u5E93\u4E4B\u4E00\u3002</p><p>\u4F46\u662F\u5BF9\u4E8E\u590D\u6742\u8BFB\u5199\u64CD\u4F5C\uFF0C\u9700\u8981\u7EC4\u5408\u7D22\u5F15\u67E5\u8BE2\u591A\u8868\uFF0C\u5BF9\u6027\u80FD\u6D88\u8017\u4E0D\u5C0F\uFF0C\u9700\u8981\u505A\u8BFB\u5199\u5206\u79BB\u6216\u8005\u8868\u7ED3\u6784\u62C6\u89E3\uFF0C\u5BF9\u4E1A\u52A1\u67B6\u6784\u8BBE\u8BA1\u8981\u6C42\u6BD4\u8F83\u9AD8\u3002</p><p><code>MongoDB</code> \u662F\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u3001<code>nosql</code> \u7684\u4EE3\u8868\u4F5C\u3002\u5B83\u53EF\u4EE5\u901A\u8FC7\u526F\u672C\u96C6\u3001\u5206\u7247\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF0C\u5728\u96C6\u7FA4\u67B6\u6784\u62E5\u6709\u5341\u5206<strong>\u9AD8\u7684\u6269\u5C55\u6027</strong>\uFF0C\u4F46\u8981\u5B9E\u73B0\u8FD9\u79CD\u9AD8\u53EF\u7528\u5BF9\u8FD0\u7EF4\u7684\u8981\u6C42\u6BD4\u8F83\u9AD8\u3002</p><p><code>MongoDB</code> <strong>\u6570\u636E\u5904\u7406\u65B9\u5F0F</strong> \u662F\u57FA\u4E8E\u5185\u5B58\u7684\uFF0C\u5C06\u70ED\u6570\u636E\u5B58\u5728\u7269\u7406\u5185\u5B58\u4E2D\uFF0C\u4ECE\u800C\u8FBE\u5230<strong>\u9AD8\u901F\u8BFB\u5199</strong>\u3002\u7531\u4E8E\u6027\u80FD\u51FA\u8272\uFF0C\u4E00\u822C\u7528\u5728\u535A\u5BA2\u3001\u5185\u7BA1\u7BA1\u7406\u7B49\u5927\u6570\u636E\u5B58\u50A8\u7684\u7CFB\u7EDF\u4E2D\u8F83\u4E3A\u5408\u9002\u3002</p><p>\u603B\u7684\u6765\u8BF4\uFF0C\u8FD9\u4E24\u79CD\u6570\u636E\u5E93\u5404\u6709\u5343\u79CB\uFF0C\u6211\u4EEC\u8981\u6839\u636E\u4E0D\u540C\u7684\u9879\u76EE\u9700\u6C42\u6765\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u5E93\u3002</p><p>\u5728\u4E4B\u524D\u7684\u67B6\u6784\u8BBE\u8BA1\u4E2D\uFF0C\u6211\u4EEC\u4E00\u5171\u9700\u8981\u5F00\u53D1 <strong>3</strong> \u4E2A\u7CFB\u7EDF\uFF0C\u5176\u4E2D\u7269\u6599\u7CFB\u7EDF\u9664\u4E86\u9700\u8981\u4FDD\u5B58\u7269\u6599\u7684\u7248\u672C\u4FE1\u606F\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u5B58\u50A8 <code>HTML</code> \u8FD9\u79CD\u5185\u5BB9\u6570\u636E\uFF0C\u6240\u4EE5<strong>\u5728\u7269\u6599\u7CFB\u7EDF\u4E2D\u4F7F\u7528 <code>MongoDB</code> \u65E0\u7591\u662F\u975E\u5E38\u597D\u7684\u9009\u62E9</strong>\u3002<strong>\u5E38\u89C4\u7684\u9879\u76EE\u5982\u7528\u6237\u4E2D\u5FC3\uFF0C\u9488\u5BF9\u4E8E\u6743\u9650\u7684\u7BA1\u7406\u975E\u5E38\u590D\u6742\uFF0C\u6240\u4EE5\u9009\u62E9 <code>MySQL</code> \u4F7F\u7528\u591A\u8868\u5173\u8054\u6765\u5B58\u50A8\u6570\u636E\u66F4\u4E3A\u5408\u9002\u3002</strong></p><p>\u4F46\u662F\u7528\u6237\u4E2D\u5FC3\u4F7F\u7528 <code>MySQL</code> \u4F5C\u4E3A\u6570\u636E\u5E93\u7684\u8BDD\uFF0C\u7528\u6237\u767B\u5F55\u4FE1\u606F\u8FD9\u79CD\u5171\u7528\u7684\u6570\u636E\u5C31\u4E0D\u53EF\u80FD\u4FDD\u5B58\u5728\u6BCF\u4E2A <code>pod</code>\uFF0C\u800C\u4E14\u9891\u7E41\u7684\u8BFB\u53D6 <code>MySQL</code> \u4E5F\u4E0D\u592A\u5B9E\u9645\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4F7F\u7528 <code>Redis</code> \u6765\u505A\u7EDF\u4E00\u7F13\u5B58\uFF0C\u5F25\u8865\u5173\u7CFB\u578B\u6570\u636E\u7684\u7F3A\u9677\u3002<code>Redis</code> \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684 <strong>key-value</strong> \u6570\u636E\u5E93\uFF0C\u4E00\u822C\u5E38\u7528\u4E8E\u4E1A\u52A1\u6570\u636E\u7F13\u5B58\u7684\u64CD\u4F5C\u3002</p><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1">\u5199\u5728\u6700\u540E <a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u4E3B\u8981\u9488\u5BF9\u9879\u76EE\u9700\u6C42\u5BF9\u6280\u672F\u9009\u578B\u505A\u4E86\u4E00\u4E9B\u4ECB\u7ECD\uFF0C\u5BF9\u4E8E <code>Egg</code> \u4E0E <code>NestJS</code> \u7684\u7BC7\u5E45\u4ECB\u7ECD\u8F83\u591A\uFF0C\u6BD5\u7ADF\u5C0F\u518C\u4E3B\u8981\u8FD8\u662F\u56F4\u7ED5 <code>NestJS</code> \u5C55\u5F00\u7684\uFF0C\u5176\u4ED6\u5DE5\u5177\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u4E0E\u4F7F\u7528\u4F1A\u5728\u5BF9\u5E94\u7684\u7BC7\u5E45\u518D\u62D3\u5C55\u3002</p><p>\u6B64\u5916\uFF0C\u4E00\u4E2A\u56E2\u961F\u5BF9\u6280\u672F\u7684\u9009\u62E9\u9664\u4E86\u9002\u914D\u4E1A\u52A1\u9700\u6C42\uFF0C\u4E5F\u8981\u8003\u8651\u56E2\u961F\u7684\u6574\u4F53\u6C34\u5E73\u4E0E\u6280\u672F\u6808\u3002\u4F8B\u5982\uFF0C\u5728\u56E2\u961F\u540E\u7AEF\u7684\u5F00\u53D1\u8BED\u8A00\u4F7F\u7528\u7684\u662F <code>Go</code>\uFF0C\u90A3\u4E48 <code>CICD</code> \u5DE5\u5177\u9009\u62E9 <code>Jenkins</code> \u663E\u7136\u4E0D\u662F\u6700\u4F18\u7684\u9009\u62E9\uFF0C\u8981\u8003\u8651\u5230\u4F7F\u7528\u4E0E\u540E\u671F\u7EF4\u62A4\u7684\u95EE\u9898\u3002\u540C\u6837\u5982\u679C\u56E2\u961F\u6C34\u5E73\u68AF\u5EA6\u4E0D\u9AD8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6CA1\u6709\u5FC5\u8981\u4E00\u5B9A\u5F3A\u4E0A <code>NestJS</code>\uFF0C\u53EF\u4EE5\u4F18\u5148\u9009\u7528 <code>Egg</code> \u8FD9\u79CD\u5BF9\u524D\u7AEF\u4F53\u9A8C\u53CB\u597D\u7684\u6846\u67B6\uFF0C\u540E\u671F\u8FC7\u5EA6\u5347\u7EA7\u5230 <code>Midway</code> \u4E5F\u662F\u5408\u7406\u7684\u6280\u672F\u89C4\u5212\u3002</p><p>\u5982\u679C\u4F60\u6709\u4EC0\u4E48\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u63D0\u51FA\u6216\u8005\u52A0\u7FA4\u6C9F\u901A\u3002 \u{1F44F}</p>',46),s=[t];function a(n,i,l,g,p,h){return d(),o("div",null,s)}const f=e(r,[["render",a]]);export{u as __pageData,f as default};
