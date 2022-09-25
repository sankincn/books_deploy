import{_ as e,c as a,o as i,d as l}from"./app.e0e4ea3a.js";const f=JSON.parse('{"title":"\u62D3\u5C55 1-Go \u5F00\u53D1\u6280\u5DE7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E","link":"#\u8BF4\u660E","children":[]},{"level":2,"title":"Go \u5F00\u53D1\u6280\u5DE7","slug":"go-\u5F00\u53D1\u6280\u5DE7-1","link":"#go-\u5F00\u53D1\u6280\u5DE7-1","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u62D3\u5C55 1-Go \u5F00\u53D1\u6280\u5DE7.md"}'),o={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u62D3\u5C55 1-Go \u5F00\u53D1\u6280\u5DE7.md"},t=l('<h1 id="\u62D3\u5C55-1-go-\u5F00\u53D1\u6280\u5DE7" tabindex="-1">\u62D3\u5C55 1-Go \u5F00\u53D1\u6280\u5DE7 <a class="header-anchor" href="#\u62D3\u5C55-1-go-\u5F00\u53D1\u6280\u5DE7" aria-hidden="true">#</a></h1><hr><h1 id="go-\u5F00\u53D1\u6280\u5DE7" tabindex="-1">Go \u5F00\u53D1\u6280\u5DE7 <a class="header-anchor" href="#go-\u5F00\u53D1\u6280\u5DE7" aria-hidden="true">#</a></h1><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u672C\u5C0F\u8282\u662F\u62D3\u5C55\u5185\u5BB9\uFF0C\u7B14\u8005\u4F1A\u4E0D\u5B9A\u671F\u66F4\u65B0 Go \u5F00\u53D1\u6280\u5DE7\uFF0C\u4F7F\u8BE5\u6280\u5DE7\u7684\u5185\u5BB9\u5C3D\u53EF\u80FD\u5168\uFF0C\u5E76\u4FDD\u8BC1\u6280\u5DE7\u7684\u5B9E\u7528\u6027\u3002</p><h2 id="go-\u5F00\u53D1\u6280\u5DE7-1" tabindex="-1">Go \u5F00\u53D1\u6280\u5DE7 <a class="header-anchor" href="#go-\u5F00\u53D1\u6280\u5DE7-1" aria-hidden="true">#</a></h2><ol><li>package \u7684\u540D\u5B57\u548C\u76EE\u5F55\u540D\u4E00\u6837\uFF0Cmain \u9664\u5916</li><li>string \u8868\u793A\u7684\u662F\u4E0D\u53EF\u53D8\u7684\u5B57\u7B26\u4E32\u53D8\u91CF\uFF0C\u5BF9 string \u7684\u4FEE\u6539\u662F\u6BD4\u8F83\u91CD\u7684\u64CD\u4F5C\uFF0C\u57FA\u672C\u4E0A\u90FD\u9700\u8981\u91CD\u65B0\u7533\u8BF7\u5185\u5B58\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u9700\u8981\uFF0C\u9700\u8981\u4FEE\u6539\u65F6\u591A\u4F7F\u7528 []byte</li><li>\u5C3D\u91CF\u4F7F\u7528 strings \u5E93\u64CD\u4F5C string\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD</li><li>append \u8981\u5C0F\u5FC3\u81EA\u52A8\u5206\u914D\u5185\u5B58\uFF0Cappend \u8FD4\u56DE\u7684\u53EF\u80FD\u662F\u65B0\u5206\u914D\u7684\u5730\u5740</li><li>\u5982\u679C\u8981\u76F4\u63A5\u4FEE\u6539 map \u7684 value \u503C\uFF0C\u5219 value \u53EA\u80FD\u662F\u6307\u9488\uFF0C\u5426\u5219\u8981\u8986\u76D6\u539F\u6765\u7684\u503C</li><li>map \u5728\u5E76\u53D1\u4E2D\u9700\u8981\u52A0\u9501</li><li>\u7F16\u8BD1\u8FC7\u7A0B\u65E0\u6CD5\u68C0\u67E5 interface{} \u7684\u8F6C\u6362\uFF0C\u53EA\u6709\u8FD0\u884C\u65F6\u68C0\u67E5\uFF0C\u5C0F\u5FC3\u5F15\u8D77 panic</li><li>\u4F7F\u7528 defer\uFF0C\u4FDD\u8BC1\u9000\u51FA\u51FD\u6570\u65F6\u91CA\u653E\u8D44\u6E90</li><li>\u5C3D\u91CF\u5C11\u7528\u5168\u5C40\u53D8\u91CF\uFF0C\u901A\u8FC7\u53C2\u6570\u4F20\u9012\uFF0C\u4F7F\u6BCF\u4E2A\u51FD\u6570\u90FD\u662F\u201C\u65E0\u72B6\u6001\u201D\u7684\uFF0C\u8FD9\u6837\u51CF\u5C11\u8026\u5408\uFF0C\u4E5F\u65B9\u4FBF\u5206\u5DE5\u548C\u5355\u5143\u6D4B\u8BD5</li><li>\u53C2\u6570\u5982\u679C\u6BD4\u8F83\u591A\uFF0C\u5C06\u76F8\u5173\u53C2\u6570\u5B9A\u4E49\u6210\u7ED3\u6784\u4F53\u4F20\u9012</li></ol>',7),r=[t];function n(d,s,_,c,h,p){return i(),a("div",null,r)}const u=e(o,[["render",n]]);export{f as __pageData,u as default};
