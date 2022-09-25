import{_ as a,c as e,o as t,d as p}from"./app.c4f45da1.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"title: \u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5","slug":"title-\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5","link":"#title-\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5","children":[]},{"level":2,"title":"\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668","slug":"\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668","link":"#\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668","children":[]},{"level":2,"title":"V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684","slug":"v8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5javascript\u4EE3\u7801\u7684","link":"#v8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5javascript\u4EE3\u7801\u7684","children":[{"level":3,"title":"1. \u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587","slug":"_1-\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08ast\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587","link":"#_1-\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08ast\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587","children":[]},{"level":3,"title":"2. \u751F\u6210\u5B57\u8282\u7801","slug":"_2-\u751F\u6210\u5B57\u8282\u7801","link":"#_2-\u751F\u6210\u5B57\u8282\u7801","children":[]},{"level":3,"title":"3. \u6267\u884C\u4EE3\u7801","slug":"_3-\u6267\u884C\u4EE3\u7801","link":"#_3-\u6267\u884C\u4EE3\u7801","children":[]}]},{"level":2,"title":"JavaScript\u7684\u6027\u80FD\u4F18\u5316","slug":"javascript\u7684\u6027\u80FD\u4F18\u5316","link":"#javascript\u7684\u6027\u80FD\u4F18\u5316","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u601D\u8003\u65F6\u95F4","slug":"\u601D\u8003\u65F6\u95F4","link":"#\u601D\u8003\u65F6\u95F4","children":[]}],"relativePath":"JavaScript/\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5/14-\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668-V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684.md"}'),r={name:"JavaScript/\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5/14-\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668-V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684.md"},i=p(`<hr><h2 id="title-\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5" tabindex="-1">title: \u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5 <a class="header-anchor" href="#title-\u674E\u5175-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5" aria-hidden="true">#</a></h2><p>14 | \u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\uFF1AV8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684\uFF1F</p><p>\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u82B1\u4E86\u5F88\u591A\u7BC7\u5E45\u6765\u4ECB\u7ECDJavaScript\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u4E86\u89E3\u8FD9\u4E9B\u5185\u5BB9\u80FD\u5E2E\u52A9\u4F60\u4ECE\u5E95\u5C42\u7406\u89E3JavaScript\u7684\u5DE5\u4F5C\u673A\u5236\uFF0C\u4ECE\u800C\u80FD\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u7406\u89E3\u548C\u5E94\u7528JavaScript\u3002</p><p>\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u5C31\u7EE7\u7EED\u201C\u5411\u4E0B\u201D\u5206\u6790\uFF0C\u7AD9\u5728JavaScript\u5F15\u64CEV8\u7684\u89C6\u89D2\uFF0C\u6765\u5206\u6790JavaScript\u4EE3\u7801\u662F\u5982\u4F55\u88AB\u6267\u884C\u7684\u3002</p><p>\u524D\u7AEF\u5DE5\u5177\u548C\u6846\u67B6\u7684\u81EA\u8EAB\u66F4\u65B0\u901F\u5EA6\u975E\u5E38\u5757\uFF0C\u800C\u4E14\u8FD8\u4E0D\u65AD\u6709\u65B0\u7684\u51FA\u73B0\u3002\u8981\u60F3\u8FFD\u8D76\u4E0A\u524D\u7AEF\u5DE5\u5177\u548C\u6846\u67B6\u7684\u66F4\u65B0\u901F\u5EA6\uFF0C\u4F60\u5C31\u9700\u8981\u6293\u4F4F\u90A3\u4E9B\u672C\u8D28\u7684\u77E5\u8BC6\uFF0C\u7136\u540E\u624D\u80FD\u66F4\u52A0\u8F7B\u677E\u5730\u7406\u89E3\u8FD9\u4E9B\u4E0A\u5C42\u5E94\u7528\u3002\u6BD4\u5982\u6211\u4EEC\u63A5\u4E0B\u6765\u8981\u4ECB\u7ECD\u7684V8\u6267\u884C\u673A\u5236\uFF0C\u80FD\u5E2E\u52A9\u4F60\u4ECE\u5E95\u5C42\u4E86\u89E3JavaScript\uFF0C\u4E5F\u80FD\u5E2E\u52A9\u4F60\u6DF1\u5165\u7406\u89E3\u8BED\u8A00\u8F6C\u6362\u5668Babel\u3001\u8BED\u6CD5\u68C0\u67E5\u5DE5\u5177ESLint\u3001\u524D\u7AEF\u6846\u67B6Vue\u548CReact\u7684\u4E00\u4E9B\u5E95\u5C42\u5B9E\u73B0\u673A\u5236\u3002\u56E0\u6B64\uFF0C\u4E86\u89E3V8\u7684\u7F16\u8BD1\u6D41\u7A0B\u80FD\u8BA9\u4F60\u5BF9\u8BED\u8A00\u4EE5\u53CA\u76F8\u5173\u5DE5\u5177\u6709\u66F4\u52A0\u5145\u5206\u7684\u8BA4\u8BC6\u3002</p><p>\u8981\u6DF1\u5165\u7406\u89E3V8\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u4F60\u9700\u8981\u641E\u6E05\u695A\u4E00\u4E9B\u6982\u5FF5\u548C\u539F\u7406\uFF0C\u6BD4\u5982\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u8BE6\u7EC6\u8BB2\u89E3\u7684**\u7F16\u8BD1\u5668\uFF08Compiler\uFF09\u3001\u89E3\u91CA\u5668\uFF08Interpreter\uFF09\u3001\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u3001\u5B57\u8282\u7801\uFF08Bytecode\uFF09\u3001\u5373\u65F6\u7F16\u8BD1\u5668\uFF08JIT\uFF09**\u7B49\u6982\u5FF5\uFF0C\u90FD\u662F\u4F60\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u7684\u3002</p><h2 id="\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668" tabindex="-1">\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668 <a class="header-anchor" href="#\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668" aria-hidden="true">#</a></h2><p>\u4E4B\u6240\u4EE5\u5B58\u5728\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\uFF0C\u662F\u56E0\u4E3A\u673A\u5668\u4E0D\u80FD\u76F4\u63A5\u7406\u89E3\u6211\u4EEC\u6240\u5199\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u5728\u6267\u884C\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u9700\u8981\u5C06\u6211\u4EEC\u6240\u5199\u7684\u4EE3\u7801\u201C\u7FFB\u8BD1\u201D\u6210\u673A\u5668\u80FD\u8BFB\u61C2\u7684\u673A\u5668\u8BED\u8A00\u3002\u6309\u8BED\u8A00\u7684\u6267\u884C\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u628A\u8BED\u8A00\u5212\u5206\u4E3A\u7F16\u8BD1\u578B\u8BED\u8A00\u548C\u89E3\u91CA\u578B\u8BED\u8A00\u3002</p><p><strong>\u7F16\u8BD1\u578B\u8BED\u8A00\u5728\u7A0B\u5E8F\u6267\u884C\u4E4B\u524D\uFF0C\u9700\u8981\u7ECF\u8FC7\u7F16\u8BD1\u5668\u7684\u7F16\u8BD1\u8FC7\u7A0B\uFF0C\u5E76\u4E14\u7F16\u8BD1\u4E4B\u540E\u4F1A\u76F4\u63A5\u4FDD\u7559\u673A\u5668\u80FD\u8BFB\u61C2\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u6837\u6BCF\u6B21\u8FD0\u884C\u7A0B\u5E8F\u65F6\uFF0C\u90FD\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u8BE5\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u6B21\u91CD\u65B0\u7F16\u8BD1\u4E86</strong>\u3002\u6BD4\u5982C/C++\u3001GO\u7B49\u90FD\u662F\u7F16\u8BD1\u578B\u8BED\u8A00\u3002</p><p><strong>\u800C\u7531\u89E3\u91CA\u578B\u8BED\u8A00\u7F16\u5199\u7684\u7A0B\u5E8F\uFF0C\u5728\u6BCF\u6B21\u8FD0\u884C\u65F6\u90FD\u9700\u8981\u901A\u8FC7\u89E3\u91CA\u5668\u5BF9\u7A0B\u5E8F\u8FDB\u884C\u52A8\u6001\u89E3\u91CA\u548C\u6267\u884C</strong>\u3002\u6BD4\u5982Python\u3001JavaScript\u7B49\u90FD\u5C5E\u4E8E\u89E3\u91CA\u578B\u8BED\u8A00\u3002</p><p>\u90A3\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u662F\u5982\u4F55\u201C\u7FFB\u8BD1\u201D\u4EE3\u7801\u7684\u5462\uFF1F\u5177\u4F53\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/4e/81/4e196603ecb78188e99e963e251b9781.png" alt=""></p><p>\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u201C\u7FFB\u8BD1\u201D\u4EE3\u7801</p><p>\u4ECE\u56FE\u4E2D\u4F60\u53EF\u4EE5\u770B\u51FA\u8FD9\u4E8C\u8005\u7684\u6267\u884C\u6D41\u7A0B\uFF0C\u5927\u81F4\u53EF\u9610\u8FF0\u4E3A\u5982\u4E0B\uFF1A</p><ol><li>\u5728\u7F16\u8BD1\u578B\u8BED\u8A00\u7684\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u7F16\u8BD1\u5668\u9996\u5148\u4F1A\u4F9D\u6B21\u5BF9\u6E90\u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u5206\u6790\uFF0C\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u7136\u540E\u662F\u4F18\u5316\u4EE3\u7801\uFF0C\u6700\u540E\u518D\u751F\u6210\u5904\u7406\u5668\u80FD\u591F\u7406\u89E3\u7684\u673A\u5668\u7801\u3002\u5982\u679C\u7F16\u8BD1\u6210\u529F\uFF0C\u5C06\u4F1A\u751F\u6210\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u6587\u4EF6\u3002\u4F46\u5982\u679C\u7F16\u8BD1\u8FC7\u7A0B\u53D1\u751F\u4E86\u8BED\u6CD5\u6216\u8005\u5176\u4ED6\u7684\u9519\u8BEF\uFF0C\u90A3\u4E48\u7F16\u8BD1\u5668\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u6700\u540E\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E5F\u4E0D\u4F1A\u751F\u6210\u6210\u529F\u3002</li><li>\u5728\u89E3\u91CA\u578B\u8BED\u8A00\u7684\u89E3\u91CA\u8FC7\u7A0B\u4E2D\uFF0C\u540C\u6837\u89E3\u91CA\u5668\u4E5F\u4F1A\u5BF9\u6E90\u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u5206\u6790\uFF0C\u5E76\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u4E0D\u8FC7\u5B83\u4F1A\u518D\u57FA\u4E8E\u62BD\u8C61\u8BED\u6CD5\u6811\u751F\u6210\u5B57\u8282\u7801\uFF0C\u6700\u540E\u518D\u6839\u636E\u5B57\u8282\u7801\u6765\u6267\u884C\u7A0B\u5E8F\u3001\u8F93\u51FA\u7ED3\u679C\u3002</li></ol><h2 id="v8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5javascript\u4EE3\u7801\u7684" tabindex="-1">V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684 <a class="header-anchor" href="#v8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5javascript\u4EE3\u7801\u7684" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4ECB\u7ECD\uFF0C\u76F8\u4FE1\u4F60\u5DF2\u7ECF\u4E86\u89E3\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u4E86\u3002\u90A3\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u91CD\u70B9\u5206\u6790\u4E0BV8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684\u3002\u4F60\u53EF\u4EE5\u5148\u6765\u201C\u4E00\u89C8\u5168\u5C40\u201D\uFF0C\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/1a/ae/1af282bdc4036096c03074da53eb84ae.png" alt=""></p><p>V8\u6267\u884C\u4E00\u6BB5\u4EE3\u7801\u6D41\u7A0B\u56FE</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u6E05\u695A\u5730\u770B\u5230\uFF0CV8\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u65E2\u6709<strong>\u89E3\u91CA\u5668Ignition</strong>\uFF0C\u53C8\u6709<strong>\u7F16\u8BD1\u5668TurboFan</strong>\uFF0C\u90A3\u4E48\u5B83\u4EEC\u662F\u5982\u4F55\u914D\u5408\u53BB\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684\u5462? \u4E0B\u9762\u6211\u4EEC\u5C31\u6309\u7167\u4E0A\u56FE\u6765\u4E00\u4E00\u5206\u89E3\u5176\u6267\u884C\u6D41\u7A0B\u3002</p><h3 id="_1-\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08ast\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1">1. \u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#_1-\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08ast\uFF09\u548C\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h3><p>\u5C06\u6E90\u4EE3\u7801\u8F6C\u6362\u4E3A<strong>\u62BD\u8C61\u8BED\u6CD5\u6811</strong>\uFF0C\u5E76\u751F\u6210<strong>\u6267\u884C\u4E0A\u4E0B\u6587</strong>\uFF0C\u800C\u6267\u884C\u4E0A\u4E0B\u6587\u6211\u4EEC\u5728\u524D\u9762\u7684\u6587\u7AE0\u4E2D\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u5F88\u591A\u4E86\uFF0C\u4E3B\u8981\u662F\u4EE3\u7801\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u73AF\u5883\u4FE1\u606F\u3002</p><p>\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u5C31\u5F97\u91CD\u70B9\u8BB2\u89E3\u4E0B\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08\u4E0B\u9762\u8868\u8FF0\u4E2D\u5C31\u76F4\u63A5\u7528\u5B83\u7684\u7B80\u79F0AST\u4E86\uFF09\uFF0C\u770B\u770B\u4EC0\u4E48\u662FAST\u4EE5\u53CAAST\u7684\u751F\u6210\u8FC7\u7A0B\u662F\u600E\u6837\u7684\u3002</p><p>\u9AD8\u7EA7\u8BED\u8A00\u662F\u5F00\u53D1\u8005\u53EF\u4EE5\u7406\u89E3\u7684\u8BED\u8A00\uFF0C\u4F46\u662F\u8BA9\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u6765\u7406\u89E3\u5C31\u975E\u5E38\u56F0\u96BE\u4E86\u3002\u5BF9\u4E8E\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u6765\u8BF4\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u7406\u89E3\u7684\u5C31\u662FAST\u4E86\u3002\u6240\u4EE5\u65E0\u8BBA\u4F60\u4F7F\u7528\u7684\u662F\u89E3\u91CA\u578B\u8BED\u8A00\u8FD8\u662F\u7F16\u8BD1\u578B\u8BED\u8A00\uFF0C\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u751F\u6210\u4E00\u4E2AAST\u3002\u8FD9\u548C\u6E32\u67D3\u5F15\u64CE\u5C06HTML\u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u4E3A\u8BA1\u7B97\u673A\u53EF\u4EE5\u7406\u89E3\u7684DOM\u6811\u7684\u60C5\u51B5\u7C7B\u4F3C\u3002</p><p>\u4F60\u53EF\u4EE5\u7ED3\u5408\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u6765\u76F4\u89C2\u5730\u611F\u53D7\u4E0B\u4EC0\u4E48\u662FAST\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var myName = &quot;\u6781\u5BA2\u65F6\u95F4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 23;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">myName = &quot;geektime&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u7ECF\u8FC7<a href="http://resources.jointjs.com/demos/javascript-ast" target="_blank" rel="noreferrer">javascript-ast</a>\u7AD9\u70B9\u5904\u7406\u540E\uFF0C\u751F\u6210\u7684AST\u7ED3\u6784\u5982\u4E0B\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/73/36/7320526ef14d974be8393effcf25b436.png" alt=""></p><p>\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u7ED3\u6784</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0CAST\u7684\u7ED3\u6784\u548C\u4EE3\u7801\u7684\u7ED3\u6784\u975E\u5E38\u76F8\u4F3C\uFF0C\u5176\u5B9E\u4F60\u4E5F\u53EF\u4EE5\u628AAST\u770B\u6210\u4EE3\u7801\u7684\u7ED3\u6784\u5316\u7684\u8868\u793A\uFF0C\u7F16\u8BD1\u5668\u6216\u8005\u89E3\u91CA\u5668\u540E\u7EED\u7684\u5DE5\u4F5C\u90FD\u9700\u8981\u4F9D\u8D56\u4E8EAST\uFF0C\u800C\u4E0D\u662F\u6E90\u4EE3\u7801\u3002</p><p>AST\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u5728\u5F88\u591A\u9879\u76EE\u4E2D\u6709\u7740\u5E7F\u6CDB\u7684\u5E94\u7528\u3002\u5176\u4E2D\u6700\u8457\u540D\u7684\u4E00\u4E2A\u9879\u76EE\u662FBabel\u3002Babel\u662F\u4E00\u4E2A\u88AB\u5E7F\u6CDB\u4F7F\u7528\u7684\u4EE3\u7801\u8F6C\u7801\u5668\uFF0C\u53EF\u4EE5\u5C06ES6\u4EE3\u7801\u8F6C\u4E3AES5\u4EE3\u7801\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u73B0\u5728\u5C31\u7528ES6\u7F16\u5199\u7A0B\u5E8F\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u73B0\u6709\u73AF\u5883\u662F\u5426\u652F\u6301ES6\u3002Babel\u7684\u5DE5\u4F5C\u539F\u7406\u5C31\u662F\u5148\u5C06ES6\u6E90\u7801\u8F6C\u6362\u4E3AAST\uFF0C\u7136\u540E\u518D\u5C06ES6\u8BED\u6CD5\u7684AST\u8F6C\u6362\u4E3AES5\u8BED\u6CD5\u7684AST\uFF0C\u6700\u540E\u5229\u7528ES5\u7684AST\u751F\u6210JavaScript\u6E90\u4EE3\u7801\u3002</p><p>\u9664\u4E86Babel\u5916\uFF0C\u8FD8\u6709ESLint\u4E5F\u4F7F\u7528AST\u3002ESLint\u662F\u4E00\u4E2A\u7528\u6765\u68C0\u67E5JavaScript\u7F16\u5199\u89C4\u8303\u7684\u63D2\u4EF6\uFF0C\u5176\u68C0\u6D4B\u6D41\u7A0B\u4E5F\u662F\u9700\u8981\u5C06\u6E90\u7801\u8F6C\u6362\u4E3AAST\uFF0C\u7136\u540E\u518D\u5229\u7528AST\u6765\u68C0\u67E5\u4EE3\u7801\u89C4\u8303\u5316\u7684\u95EE\u9898\u3002</p><p>\u73B0\u5728\u4F60\u77E5\u9053\u4E86\u4EC0\u4E48\u662FAST\u4EE5\u53CA\u5B83\u7684\u4E00\u4E9B\u5E94\u7528\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u4E0BAST\u662F\u5982\u4F55\u751F\u6210\u7684\u3002\u901A\u5E38\uFF0C\u751F\u6210AST\u9700\u8981\u7ECF\u8FC7\u4E24\u4E2A\u9636\u6BB5\u3002</p><p><strong>\u7B2C\u4E00\u9636\u6BB5\u662F\u5206\u8BCD\uFF08tokenize\uFF09\uFF0C\u53C8\u79F0\u4E3A\u8BCD\u6CD5\u5206\u6790</strong>\uFF0C\u5176\u4F5C\u7528\u662F\u5C06\u4E00\u884C\u884C\u7684\u6E90\u7801\u62C6\u89E3\u6210\u4E00\u4E2A\u4E2Atoken\u3002\u6240\u8C13<strong>token</strong>\uFF0C\u6307\u7684\u662F\u8BED\u6CD5\u4E0A\u4E0D\u53EF\u80FD\u518D\u5206\u7684\u3001\u6700\u5C0F\u7684\u5355\u4E2A\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u3002\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\u6765\u66F4\u597D\u5730\u7406\u89E3\u4EC0\u4E48token\u3002</p><p><img src="https://static001.geekbang.org/resource/image/83/f5/838028071f63a132cc8b27b23960e5f5.png" alt=""></p><p>\u5206\u89E3token\u793A\u610F\u56FE</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u901A\u8FC7<code>var myName = \u201C\u6781\u5BA2\u65F6\u95F4\u201D</code>\u7B80\u5355\u5730\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5176\u4E2D\u5173\u952E\u5B57\u201Cvar\u201D\u3001\u6807\u8BC6\u7B26\u201CmyName\u201D \u3001\u8D4B\u503C\u8FD0\u7B97\u7B26\u201C=\u201D\u3001\u5B57\u7B26\u4E32\u201C\u6781\u5BA2\u65F6\u95F4\u201D\u56DB\u4E2A\u90FD\u662Ftoken\uFF0C\u800C\u4E14\u5B83\u4EEC\u4EE3\u8868\u7684\u5C5E\u6027\u8FD8\u4E0D\u4E00\u6837\u3002</p><p><strong>\u7B2C\u4E8C\u9636\u6BB5\u662F\u89E3\u6790\uFF08parse\uFF09\uFF0C\u53C8\u79F0\u4E3A\u8BED\u6CD5\u5206\u6790</strong>\uFF0C\u5176\u4F5C\u7528\u662F\u5C06\u4E0A\u4E00\u6B65\u751F\u6210\u7684token\u6570\u636E\uFF0C\u6839\u636E\u8BED\u6CD5\u89C4\u5219\u8F6C\u4E3AAST\u3002\u5982\u679C\u6E90\u7801\u7B26\u5408\u8BED\u6CD5\u89C4\u5219\uFF0C\u8FD9\u4E00\u6B65\u5C31\u4F1A\u987A\u5229\u5B8C\u6210\u3002\u4F46\u5982\u679C\u6E90\u7801\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u8FD9\u4E00\u6B65\u5C31\u4F1A\u7EC8\u6B62\uFF0C\u5E76\u629B\u51FA\u4E00\u4E2A\u201C\u8BED\u6CD5\u9519\u8BEF\u201D\u3002</p><p>\u8FD9\u5C31\u662FAST\u7684\u751F\u6210\u8FC7\u7A0B\uFF0C\u5148\u5206\u8BCD\uFF0C\u518D\u89E3\u6790\u3002</p><p>\u6709\u4E86AST\u540E\uFF0C\u90A3\u63A5\u4E0B\u6765V8\u5C31\u4F1A\u751F\u6210\u8BE5\u6BB5\u4EE3\u7801\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002\u81F3\u4E8E\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u524D\u9762\u51E0\u7BC7\u6587\u7AE0\u7684\u8BB2\u89E3\u3002</p><h3 id="_2-\u751F\u6210\u5B57\u8282\u7801" tabindex="-1">2. \u751F\u6210\u5B57\u8282\u7801 <a class="header-anchor" href="#_2-\u751F\u6210\u5B57\u8282\u7801" aria-hidden="true">#</a></h3><p>\u6709\u4E86AST\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u540E\uFF0C\u90A3\u63A5\u4E0B\u6765\u7684\u7B2C\u4E8C\u6B65\uFF0C\u89E3\u91CA\u5668Ignition\u5C31\u767B\u573A\u4E86\uFF0C\u5B83\u4F1A\u6839\u636EAST\u751F\u6210\u5B57\u8282\u7801\uFF0C\u5E76\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u3002</p><p>\u5176\u5B9E\u4E00\u5F00\u59CBV8\u5E76\u6CA1\u6709\u5B57\u8282\u7801\uFF0C\u800C\u662F\u76F4\u63A5\u5C06AST\u8F6C\u6362\u4E3A\u673A\u5668\u7801\uFF0C\u7531\u4E8E\u6267\u884C\u673A\u5668\u7801\u7684\u6548\u7387\u662F\u975E\u5E38\u9AD8\u6548\u7684\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5728\u53D1\u5E03\u540E\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\u8FD0\u884C\u6548\u679C\u662F\u975E\u5E38\u597D\u7684\u3002\u4F46\u662F\u968F\u7740Chrome\u5728\u624B\u673A\u4E0A\u7684\u5E7F\u6CDB\u666E\u53CA\uFF0C\u7279\u522B\u662F\u8FD0\u884C\u5728512M\u5185\u5B58\u7684\u624B\u673A\u4E0A\uFF0C\u5185\u5B58\u5360\u7528\u95EE\u9898\u4E5F\u66B4\u9732\u51FA\u6765\u4E86\uFF0C\u56E0\u4E3AV8\u9700\u8981\u6D88\u8017\u5927\u91CF\u7684\u5185\u5B58\u6765\u5B58\u653E\u8F6C\u6362\u540E\u7684\u673A\u5668\u7801\u3002\u4E3A\u4E86\u89E3\u51B3\u5185\u5B58\u5360\u7528\u95EE\u9898\uFF0CV8\u56E2\u961F\u5927\u5E45\u91CD\u6784\u4E86\u5F15\u64CE\u67B6\u6784\uFF0C\u5F15\u5165\u5B57\u8282\u7801\uFF0C\u5E76\u4E14\u629B\u5F03\u4E86\u4E4B\u524D\u7684\u7F16\u8BD1\u5668\uFF0C\u6700\u7EC8\u82B1\u4E86\u5C06\u8FDB\u56DB\u5E74\u7684\u65F6\u95F4\uFF0C\u5B9E\u73B0\u4E86\u73B0\u5728\u7684\u8FD9\u5957\u67B6\u6784\u3002</p><p>\u90A3\u4EC0\u4E48\u662F\u5B57\u8282\u7801\u5462\uFF1F\u4E3A\u4EC0\u4E48\u5F15\u5165\u5B57\u8282\u7801\u5C31\u80FD\u89E3\u51B3\u5185\u5B58\u5360\u7528\u95EE\u9898\u5462\uFF1F</p><p><strong>\u5B57\u8282\u7801\u5C31\u662F\u4ECB\u4E8EAST\u548C\u673A\u5668\u7801\u4E4B\u95F4\u7684\u4E00\u79CD\u4EE3\u7801\u3002\u4F46\u662F\u4E0E\u7279\u5B9A\u7C7B\u578B\u7684\u673A\u5668\u7801\u65E0\u5173\uFF0C\u5B57\u8282\u7801\u9700\u8981\u901A\u8FC7\u89E3\u91CA\u5668\u5C06\u5176\u8F6C\u6362\u4E3A\u673A\u5668\u7801\u540E\u624D\u80FD\u6267\u884C\u3002</strong></p><p>\u7406\u89E3\u4E86\u4EC0\u4E48\u662F\u5B57\u8282\u7801\uFF0C\u6211\u4EEC\u518D\u6765\u5BF9\u6BD4\u4E0B\u9AD8\u7EA7\u4EE3\u7801\u3001\u5B57\u8282\u7801\u548C\u673A\u5668\u7801\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/87/ff/87d1ab147d1dc4b78488e2443d58a3ff.png" alt=""></p><p>\u5B57\u8282\u7801\u548C\u673A\u5668\u7801\u5360\u7528\u7A7A\u95F4\u5BF9\u6BD4</p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u673A\u5668\u7801\u6240\u5360\u7528\u7684\u7A7A\u95F4\u8FDC\u8FDC\u8D85\u8FC7\u4E86\u5B57\u8282\u7801\uFF0C\u6240\u4EE5\u4F7F\u7528\u5B57\u8282\u7801\u53EF\u4EE5\u51CF\u5C11\u7CFB\u7EDF\u7684\u5185\u5B58\u4F7F\u7528\u3002</p><h3 id="_3-\u6267\u884C\u4EE3\u7801" tabindex="-1">3. \u6267\u884C\u4EE3\u7801 <a class="header-anchor" href="#_3-\u6267\u884C\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u751F\u6210\u5B57\u8282\u7801\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u8981\u8FDB\u5165\u6267\u884C\u9636\u6BB5\u4E86\u3002</p><p>\u901A\u5E38\uFF0C\u5982\u679C\u6709\u4E00\u6BB5\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5B57\u8282\u7801\uFF0C\u89E3\u91CA\u5668Ignition\u4F1A\u9010\u6761\u89E3\u91CA\u6267\u884C\u3002\u5230\u4E86\u8FD9\u91CC\uFF0C\u76F8\u4FE1\u4F60\u5DF2\u7ECF\u53D1\u73B0\u4E86\uFF0C\u89E3\u91CA\u5668Ignition\u9664\u4E86\u8D1F\u8D23\u751F\u6210\u5B57\u8282\u7801\u4E4B\u5916\uFF0C\u5B83\u8FD8\u6709\u53E6\u5916\u4E00\u4E2A\u4F5C\u7528\uFF0C\u5C31\u662F\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u3002\u5728Ignition\u6267\u884C\u5B57\u8282\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u70ED\u70B9\u4EE3\u7801\uFF08HotSpot\uFF09\uFF0C\u6BD4\u5982\u4E00\u6BB5\u4EE3\u7801\u88AB\u91CD\u590D\u6267\u884C\u591A\u6B21\uFF0C\u8FD9\u79CD\u5C31\u79F0\u4E3A<strong>\u70ED\u70B9\u4EE3\u7801</strong>\uFF0C\u90A3\u4E48\u540E\u53F0\u7684\u7F16\u8BD1\u5668TurboFan\u5C31\u4F1A\u628A\u8BE5\u6BB5\u70ED\u70B9\u7684\u5B57\u8282\u7801\u7F16\u8BD1\u4E3A\u9AD8\u6548\u7684\u673A\u5668\u7801\uFF0C\u7136\u540E\u5F53\u518D\u6B21\u6267\u884C\u8FD9\u6BB5\u88AB\u4F18\u5316\u7684\u4EE3\u7801\u65F6\uFF0C\u53EA\u9700\u8981\u6267\u884C\u7F16\u8BD1\u540E\u7684\u673A\u5668\u7801\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u5C31\u5927\u5927\u63D0\u5347\u4E86\u4EE3\u7801\u7684\u6267\u884C\u6548\u7387\u3002</p><p>V8\u7684\u89E3\u91CA\u5668\u548C\u7F16\u8BD1\u5668\u7684\u53D6\u540D\u4E5F\u5F88\u6709\u610F\u601D\u3002\u89E3\u91CA\u5668Ignition\u662F\u70B9\u706B\u5668\u7684\u610F\u601D\uFF0C\u7F16\u8BD1\u5668TurboFan\u662F\u6DA1\u8F6E\u589E\u538B\u7684\u610F\u601D\uFF0C\u5BD3\u610F\u7740\u4EE3\u7801\u542F\u52A8\u65F6\u901A\u8FC7\u70B9\u706B\u5668\u6162\u6162\u53D1\u52A8\uFF0C\u4E00\u65E6\u542F\u52A8\uFF0C\u6DA1\u8F6E\u589E\u538B\u4ECB\u5165\uFF0C\u5176\u6267\u884C\u6548\u7387\u968F\u7740\u6267\u884C\u65F6\u95F4\u8D8A\u6765\u8D8A\u9AD8\u6548\u7387\uFF0C\u56E0\u4E3A\u70ED\u70B9\u4EE3\u7801\u90FD\u88AB\u7F16\u8BD1\u5668TurboFan\u8F6C\u6362\u4E86\u673A\u5668\u7801\uFF0C\u76F4\u63A5\u6267\u884C\u673A\u5668\u7801\u5C31\u7701\u53BB\u4E86\u5B57\u8282\u7801\u201C\u7FFB\u8BD1\u201D\u4E3A\u673A\u5668\u7801\u7684\u8FC7\u7A0B\u3002</p><p>\u5176\u5B9E\u5B57\u8282\u7801\u914D\u5408\u89E3\u91CA\u5668\u548C\u7F16\u8BD1\u5668\u662F\u6700\u8FD1\u4E00\u6BB5\u65F6\u95F4\u5F88\u706B\u7684\u6280\u672F\uFF0C\u6BD4\u5982Java\u548CPython\u7684\u865A\u62DF\u673A\u4E5F\u90FD\u662F\u57FA\u4E8E\u8FD9\u79CD\u6280\u672F\u5B9E\u73B0\u7684\uFF0C\u6211\u4EEC\u628A\u8FD9\u79CD\u6280\u672F\u79F0\u4E3A<strong>\u5373\u65F6\u7F16\u8BD1\uFF08JIT\uFF09</strong>\u3002\u5177\u4F53\u5230V8\uFF0C\u5C31\u662F\u6307\u89E3\u91CA\u5668Ignition\u5728\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u7684\u540C\u65F6\uFF0C\u6536\u96C6\u4EE3\u7801\u4FE1\u606F\uFF0C\u5F53\u5B83\u53D1\u73B0\u67D0\u4E00\u90E8\u5206\u4EE3\u7801\u53D8\u70ED\u4E86\u4E4B\u540E\uFF0CTurboFan\u7F16\u8BD1\u5668\u4FBF\u95EA\u4EAE\u767B\u573A\uFF0C\u628A\u70ED\u70B9\u7684\u5B57\u8282\u7801\u8F6C\u6362\u4E3A\u673A\u5668\u7801\uFF0C\u5E76\u628A\u8F6C\u6362\u540E\u7684\u673A\u5668\u7801\u4FDD\u5B58\u8D77\u6765\uFF0C\u4EE5\u5907\u4E0B\u6B21\u4F7F\u7528\u3002</p><p>\u5BF9\u4E8EJavaScript\u5DE5\u4F5C\u5F15\u64CE\uFF0C\u9664\u4E86V8\u4F7F\u7528\u4E86\u201C\u5B57\u8282\u7801+JIT\u201D\u6280\u672F\u4E4B\u5916\uFF0C\u82F9\u679C\u7684SquirrelFish Extreme\u548CMozilla\u7684SpiderMonkey\u4E5F\u90FD\u4F7F\u7528\u4E86\u8BE5\u6280\u672F\u3002</p><p>\u8FD9\u4E48\u591A\u8BED\u8A00\u7684\u5DE5\u4F5C\u5F15\u64CE\u90FD\u4F7F\u7528\u4E86\u201C\u5B57\u8282\u7801+JIT\u201D\u6280\u672F\uFF0C\u56E0\u6B64\u7406\u89E3JIT\u8FD9\u5957\u5DE5\u4F5C\u673A\u5236\u8FD8\u662F\u5F88\u6709\u5FC5\u8981\u7684\u3002\u4F60\u53EF\u4EE5\u7ED3\u5408\u4E0B\u56FE\u770B\u770BJIT\u7684\u5DE5\u4F5C\u8FC7\u7A0B\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/66/8a/662413313149f66fe0880113cb6ab98a.png" alt=""></p><p>\u5373\u65F6\u7F16\u8BD1\uFF08JIT\uFF09\u6280\u672F</p><h2 id="javascript\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1">JavaScript\u7684\u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#javascript\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u5230\u8FD9\u91CC\u76F8\u4FE1\u4F60\u73B0\u5728\u5DF2\u7ECF\u4E86\u89E3V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684\u4E86\u3002\u5728\u8FC7\u53BB\u51E0\u5E74\u4E2D\uFF0CJavaScript\u7684\u6027\u80FD\u5F97\u5230\u4E86\u5927\u5E45\u63D0\u5347\uFF0C\u8FD9\u5F97\u76CA\u4E8EV8\u56E2\u961F\u5BF9\u89E3\u91CA\u5668\u548C\u7F16\u8BD1\u5668\u7684\u4E0D\u65AD\u6539\u8FDB\u548C\u4F18\u5316\u3002</p><p>\u867D\u7136\u5728V8\u8BDE\u751F\u4E4B\u521D\uFF0C\u4E5F\u51FA\u73B0\u8FC7\u4E00\u7CFB\u5217\u9488\u5BF9V8\u800C\u4E13\u95E8\u4F18\u5316JavaScript\u6027\u80FD\u7684\u65B9\u6848\uFF0C\u6BD4\u5982\u9690\u85CF\u7C7B\u3001\u5185\u8054\u7F13\u5B58\u7B49\u6982\u5FF5\u90FD\u662F\u90A3\u65F6\u5019\u63D0\u51FA\u6765\u7684\u3002\u4E0D\u8FC7\u968F\u7740V8\u7684\u67B6\u6784\u8C03\u6574\uFF0C\u4F60\u8D8A\u6765\u8D8A\u4E0D\u9700\u8981\u8FD9\u4E9B\u5FAE\u4F18\u5316\u7B56\u7565\u4E86\uFF0C\u76F8\u53CD\uFF0C\u5BF9\u4E8E\u4F18\u5316JavaScript\u6267\u884C\u6548\u7387\uFF0C\u4F60\u5E94\u8BE5\u5C06\u4F18\u5316\u7684\u4E2D\u5FC3\u805A\u7126\u5728\u5355\u6B21\u811A\u672C\u7684\u6267\u884C\u65F6\u95F4\u548C\u811A\u672C\u7684\u7F51\u7EDC\u4E0B\u8F7D\u4E0A\uFF0C\u4E3B\u8981\u5173\u6CE8\u4EE5\u4E0B\u4E09\u70B9\u5185\u5BB9\uFF1A</p><ol><li>\u63D0\u5347\u5355\u6B21\u811A\u672C\u7684\u6267\u884C\u901F\u5EA6\uFF0C\u907F\u514DJavaScript\u7684\u957F\u4EFB\u52A1\u9738\u5360\u4E3B\u7EBF\u7A0B\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u5F97\u9875\u9762\u5FEB\u901F\u54CD\u5E94\u4EA4\u4E92\uFF1B</li><li>\u907F\u514D\u5927\u7684\u5185\u8054\u811A\u672C\uFF0C\u56E0\u4E3A\u5728\u89E3\u6790HTML\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u89E3\u6790\u548C\u7F16\u8BD1\u4E5F\u4F1A\u5360\u7528\u4E3B\u7EBF\u7A0B\uFF1B</li><li>\u51CF\u5C11JavaScript\u6587\u4EF6\u7684\u5BB9\u91CF\uFF0C\u56E0\u4E3A\u66F4\u5C0F\u7684\u6587\u4EF6\u4F1A\u63D0\u5347\u4E0B\u8F7D\u901F\u5EA6\uFF0C\u5E76\u4E14\u5360\u7528\u66F4\u4F4E\u7684\u5185\u5B58\u3002</li></ol><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u597D\u4E86\uFF0C\u4ECA\u5929\u5C31\u8BB2\u5230\u8FD9\u91CC\uFF0C\u4E0B\u9762\u6211\u6765\u603B\u7ED3\u4E0B\u4ECA\u5929\u7684\u5185\u5BB9\u3002</p><ul><li>\u9996\u5148\u6211\u4EEC\u4ECB\u7ECD\u4E86\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u7684\u533A\u522B\u3002</li><li>\u7D27\u63A5\u7740\u53C8\u8BE6\u7EC6\u5206\u6790\u4E86V8\u662F\u5982\u4F55\u6267\u884C\u4E00\u6BB5JavaScript\u4EE3\u7801\u7684\uFF1AV8\u4F9D\u636EJavaScript\u4EE3\u7801\u751F\u6210AST\u548C\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u518D\u57FA\u4E8EAST\u751F\u6210\u5B57\u8282\u7801\uFF0C\u7136\u540E\u901A\u8FC7\u89E3\u91CA\u5668\u6267\u884C\u5B57\u8282\u7801\uFF0C\u901A\u8FC7\u7F16\u8BD1\u5668\u6765\u4F18\u5316\u7F16\u8BD1\u5B57\u8282\u7801\u3002</li><li>\u57FA\u4E8E\u5B57\u8282\u7801\u548C\u7F16\u8BD1\u5668\uFF0C\u6211\u4EEC\u53C8\u4ECB\u7ECD\u4E86JIT\u6280\u672F\u3002</li><li>\u6700\u540E\u6211\u4EEC\u5EF6\u4F38\u8BF4\u660E\u4E86\u4E0B\u4F18\u5316JavaScript\u6027\u80FD\u7684\u4E00\u4E9B\u7B56\u7565\u3002</li></ul><p>\u4E4B\u6240\u4EE5\u5728\u672C\u4E13\u680F\u91CC\u8BB2V8\u7684\u6267\u884C\u6D41\u7A0B\uFF0C\u662F\u56E0\u4E3A\u6211\u89C9\u5F97\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u7684\u76F8\u5173\u6982\u5FF5\u548C\u7406\u8BBA\u5BF9\u4E8E\u7A0B\u5E8F\u5458\u6765\u8BF4\u81F3\u5173\u91CD\u8981\uFF0C\u5411\u4E0A\u80FD\u8BA9\u4F60\u5145\u5206\u7406\u89E3\u4E00\u4E9B\u524D\u7AEF\u5E94\u7528\u7684\u672C\u8D28\uFF0C\u5411\u4E0B\u80FD\u6253\u5F00\u8BA1\u7B97\u673A\u7F16\u8BD1\u539F\u7406\u7684\u5927\u95E8\u3002\u901A\u8FC7\u8FD9\u4E9B\u77E5\u8BC6\u7684\u5B66\u4E60\u80FD\u8BA9\u4F60\u5C06\u5F88\u591A\u6A21\u7CCA\u7684\u6982\u5FF5\u5173\u8054\u8D77\u6765\uFF0C\u4F7F\u5176\u53D8\u5F97\u66F4\u52A0\u6E05\u695A\uFF0C\u4ECE\u800C\u62D3\u5BBD\u89C6\u91CE\uFF0C\u4E0A\u5347\u5230\u66F4\u9AD8\u7684\u5C42\u6B21\u3002</p><h2 id="\u601D\u8003\u65F6\u95F4" tabindex="-1">\u601D\u8003\u65F6\u95F4 <a class="header-anchor" href="#\u601D\u8003\u65F6\u95F4" aria-hidden="true">#</a></h2><p>\u6700\u540E\u7559\u7ED9\u4F60\u4E2A\u601D\u8003\u9898\uFF1A\u4F60\u662F\u600E\u4E48\u7406\u89E3\u201CV8\u6267\u884C\u65F6\u95F4\u8D8A\u4E45\uFF0C\u6267\u884C\u6548\u7387\u8D8A\u9AD8\u201D\u8FD9\u4E2A\u6027\u8D28\u7684\uFF1F</p><p>\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u7559\u8A00\u533A\u8BB0\u5F55\u4F60\u7684\u601D\u8003\u8FC7\u7A0B\u3002\u611F\u8C22\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p>`,70),n=[i];function s(l,c,o,S,d,g){return t(),e("div",null,n)}const _=a(r,[["render",s]]);export{v as __pageData,_ as default};
