import{_ as a,c as t,o as e,d as s}from"./app.e5528619.js";const C=JSON.parse('{"title":"\u4EC0\u4E48\u662F Canvas","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F Canvas","slug":"\u4EC0\u4E48\u662F-canvas-2","link":"#\u4EC0\u4E48\u662F-canvas-2","children":[]},{"level":2,"title":"Canvas \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","slug":"canvas-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","link":"#canvas-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","children":[]},{"level":2,"title":"\u4E00\u53E5\u8BDD\u603B\u7ED3 Canvas \u662F\u4EC0\u4E48","slug":"\u4E00\u53E5\u8BDD\u603B\u7ED3-canvas-\u662F\u4EC0\u4E48","link":"#\u4E00\u53E5\u8BDD\u603B\u7ED3-canvas-\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5","slug":"\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5","link":"#\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5","children":[]},{"level":2,"title":"\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706","slug":"\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706","link":"#\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706","children":[]},{"level":2,"title":"svg \u548C Canvas \u7684\u533A\u522B","slug":"svg-\u548C-canvas-\u7684\u533A\u522B","link":"#svg-\u548C-canvas-\u7684\u533A\u522B","children":[{"level":3,"title":"\u4EC0\u4E48\u662F svg","slug":"\u4EC0\u4E48\u662F-svg","link":"#\u4EC0\u4E48\u662F-svg","children":[]},{"level":3,"title":"Canvas \u548C svg \u7684\u533A\u522B","slug":"canvas-\u548C-svg-\u7684\u533A\u522B","link":"#canvas-\u548C-svg-\u7684\u533A\u522B","children":[]}]}],"relativePath":"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u4EC0\u4E48\u662F Canvas.md"}'),d={name:"\u5176\u4ED6/\u5982\u4F55\u4F7F\u7528 Canvas \u5236\u4F5C\u51FA\u70AB\u9177\u7684\u7F51\u9875\u80CC\u666F\u7279\u6548/\u4EC0\u4E48\u662F Canvas.md"},n=s('<h1 id="\u4EC0\u4E48\u662F-canvas" tabindex="-1">\u4EC0\u4E48\u662F Canvas <a class="header-anchor" href="#\u4EC0\u4E48\u662F-canvas" aria-hidden="true">#</a></h1><hr><h1 id="\u4EC0\u4E48\u662F-canvas-1" tabindex="-1">\u4EC0\u4E48\u662F Canvas <a class="header-anchor" href="#\u4EC0\u4E48\u662F-canvas-1" aria-hidden="true">#</a></h1><p>\u524D\u4E00\u6BB5\u5B66\u4E60\u4E86\u4E00\u4E2A\u5B66\u77E5\u8BC6\u7684\u65B9\u6CD5\u8BBA\uFF0C\u4E2A\u4EBA\u89C9\u5F97\u5F88\u6709\u7528\uFF0C\u63A8\u8350\u7ED9\u5927\u5BB6\uFF0C\u5C31\u662F\u5728\u5B66\u4E60\u4E00\u4E2A\u6982\u5FF5\u7684\u65F6\u5019\uFF0C\u5148\u95EE\u4E00\u4E0B<strong>\u8FD9\u4E2A\u77E5\u8BC6\u7684\u6982\u5FF5\u662F\u4EC0\u4E48</strong>\uFF0C\u7136\u540E\u518D<strong>\u770B\u4E00\u4E0B\u8FD9\u4E2A\u77E5\u8BC6\u5B83\u88AB\u63D0\u51FA\u6765\u7684\u76EE\u7684\u662F\u4EC0\u4E48</strong>\uFF0C\u7136\u540E\u5982\u679C\u4F60\u80FD\u5C06\u5176\u7528\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u90A3\u4E48\u4F60\u5C31\u7406\u89E3\u4E86\u8BE5\u77E5\u8BC6\u70B9\u3002</p><p>\u6240\u4EE5\u5BF9\u4E8E\u4EC0\u4E48\u662F Canvas\uFF0C\u6211\u4EEC\u4E5F\u6309\u7167\u8FD9\u4E2A\u65B9\u6CD5\u6765\u5206\u6790\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdd7ebe40358e5~tplv-t2oaga2asx-image.image" alt="\u5B66\u4E60\u6982\u5FF5\u6B65\u9AA4"></p><h2 id="\u4EC0\u4E48\u662F-canvas-2" tabindex="-1">\u4EC0\u4E48\u662F Canvas <a class="header-anchor" href="#\u4EC0\u4E48\u662F-canvas-2" aria-hidden="true">#</a></h2><p>\u5728 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API" target="_blank" rel="noreferrer">MDN</a> \u4E2D\u662F\u8FD9\u6837\u5B9A\u4E49 <code>&lt;canvas&gt;</code> \u7684\uFF1A</p><blockquote><p><code>&lt;canvas&gt;</code> \u662F HTML5 \u65B0\u589E\u7684\u5143\u7D20\uFF0C\u53EF\u7528\u4E8E\u901A\u8FC7\u4F7F\u7528 JavaScript \u4E2D\u7684\u811A\u672C\u6765\u7ED8\u5236\u56FE\u5F62\u3002\u4F8B\u5982\uFF0C\u5B83\u53EF\u4EE5\u7528\u4E8E\u7ED8\u5236\u56FE\u5F62\u3001\u5236\u4F5C\u7167\u7247\u3001\u521B\u5EFA\u52A8\u753B\uFF0C\u751A\u81F3\u53EF\u4EE5\u8FDB\u884C\u5B9E\u65F6\u89C6\u9891\u5904\u7406\u6216\u6E32\u67D3\u3002</p></blockquote><p>\u8FD9\u91CC\u9700\u8981\u5212\u91CD\u70B9\u7684\u662F\uFF0C<code>&lt;canvas&gt;</code> \u53EA\u662F\u4E00\u4E2A\u753B\u5E03\uFF0C\u672C\u8EAB\u5E76\u4E0D\u5177\u6709\u7ED8\u56FE\u7684\u80FD\u529B\uFF0C\u7ED8\u56FE\u5FC5\u987B\u4F7F\u7528 JavaScript \u7B49\u811A\u672C\u8BED\u8A00\u3002</p><p><code>&lt;canvas&gt;</code> \u6807\u7B7E\u5141\u8BB8\u811A\u672C\u8BED\u8A00\u52A8\u6001\u6E32\u67D3\u4F4D\u56FE\u50CF\u3002<code>&lt;canvas&gt;</code> \u6807\u7B7E\u521B\u5EFA\u51FA\u4E86\u4E00\u4E2A\u53EF\u7ED8\u5236\u533A\u57DF\uFF0CJavaScript \u4EE3\u7801\u53EF\u4EE5\u901A\u8FC7\u4E00\u5957\u5B8C\u6574\u7684\u7ED8\u56FE\u529F\u80FD\u7C7B\u4F3C\u4E8E\u5176\u4ED6\u901A\u7528\u4E8C\u7EF4\u7684 API \u8BBF\u95EE\u8BE5\u533A\u57DF\uFF0C\u4ECE\u800C\u751F\u6210\u52A8\u6001\u7684\u56FE\u5F62\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A <code>&lt;canvas&gt;</code> \u6807\u7B7E\u53EA\u662F\u4E00\u4E2A\u77E9\u5F62\u7684\u753B\u5E03\u3002JavaScript \u5C31\u662F\u753B\u7B14\uFF0C\u8D1F\u8D23\u5728\u753B\u5E03\u4E0A\u753B\u753B\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u7684<a href="http://cherryblog.site/" target="_blank" rel="noreferrer">\u4E2A\u4EBA\u535A\u5BA2</a>\u4E2D\u7684\u80CC\u666F\u5C31\u662F\u4F7F\u7528 Canvas \u5236\u4F5C\u7684\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/15/15fbdba8bc88ca28~tplv-t2oaga2asx-image.image" alt="http://cherryblog.site/"></p><p>\u6211\u4EEC\u5BA1\u67E5\u5143\u7D20\u53EF\u4EE5\u770B\u5230\u6574\u4E2A\u80CC\u666F\u5C31\u662F\u4E00\u4E2A Canvas \u5143\u7D20\uFF0C\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u90FD\u662F 100%\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdd83572dd39a1~tplv-t2oaga2asx-image.image" alt="http://cherryblog.site/"></p><h2 id="canvas-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1">Canvas \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898 <a class="header-anchor" href="#canvas-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u6211\u5728 MSDN\uFF08\u300AMicrosoft Developer Network\u300B\u662F\u5FAE\u8F6F\u4E00\u4E2A\u671F\u520A\u4EA7\u54C1\uFF0C\u4E13\u95E8\u4ECB\u7ECD\u5404\u79CD\u7F16\u7A0B\u6280\u5DE7\uFF09\u4E0A\u627E\u5230\u4E86 Canvas \u51FA\u73B0\u7684\u80CC\u666F\uFF0C\u6765\u7ED9\u5927\u5BB6\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u3002</p><p>\u5728\u4E92\u8054\u7F51\u51FA\u73B0\u7684\u65E9\u671F\uFF0CWeb \u53EA\u4E0D\u8FC7\u662F\u9759\u6001\u6587\u672C\u548C\u94FE\u63A5\u7684\u96C6\u5408\u30021993 \u5E74\uFF0C\u6709\u4EBA\u63D0\u51FA\u4E86 <code>img</code> \u6807\u7B7E\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u5D4C\u5165\u56FE\u50CF\u3002</p><p>\u7531\u4E8E\u4E92\u8054\u7F51\u7684\u53D1\u5C55\u8D8A\u6765\u8D8A\u8FC5\u731B\uFF0CWeb \u5E94\u7528\u5DF2\u7ECF\u4ECE Web \u6587\u6863\u53D1\u5C55\u5230 Web \u5E94\u7528\u7A0B\u5E8F\u3002\u4F46\u662F\u56FE\u50CF\u4E00\u76F4\u662F\u9759\u6001\u7684\uFF0C\u4EBA\u4EEC\u8D8A\u6765\u8D8A\u5E0C\u671B\u5728\u5176\u7F51\u7AD9\u548C\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u52A8\u6001\u5A92\u4F53\uFF08\u5982\u97F3\u9891\u3001\u89C6\u9891\u548C\u4EA4\u4E92\u5F0F\u52A8\u753B\u7B49\uFF09\uFF0C\u4E8E\u662F Flash \u5C31\u51FA\u73B0\u4E86\u3002</p><p>\u4F46\u662F\u968F\u7740 Web \u5E94\u7528\u7684\u53D1\u5C55\uFF0C\u51FA\u73B0\u4E86 HTML5\uFF0C\u5728 HTML5 \u4E2D\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5A92\u4F53\u5143\u7D20\u5927\u53D7\u9752\u7750\u3002\u5305\u62EC\u51FA\u73B0\u65B0\u7684 <code>Audio</code> \u548C <code>Video</code> \u6807\u7B7E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5C06\u97F3\u9891\u548C\u89C6\u9891\u8D44\u6E90\u653E\u5728 Web \u4E0A\uFF0C\u800C\u4E0D\u9700\u8981\u5176\u4ED6\u7B2C\u4E09\u65B9\u3002</p><p>\u5176\u6B21\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u53EA\u80FD\u5728 Web \u9875\u9762\u4E2D\u663E\u793A\u9759\u6001\u56FE\u7247\u7684\u95EE\u9898\uFF0C\u51FA\u73B0\u4E86 Canvas \u6807\u7B7E\u3002\u5B83\u662F\u4E00\u4E2A\u7ED8\u56FE\u8868\u9762\uFF0C\u5305\u542B\u4E00\u7EC4\u4E30\u5BCC\u7684 JavaScript API\uFF0C\u8FD9\u4E9B API \u4F7F\u4F60\u80FD\u591F\u52A8\u6001\u521B\u5EFA\u548C\u64CD\u4F5C\u56FE\u50CF\u53CA\u52A8\u753B\u3002img \u5BF9\u9759\u6001\u56FE\u5F62\u5185\u5BB9\u8D77\u5230\u4E86\u54EA\u4E9B\u4F5C\u7528\uFF0CCanvas \u5C31\u53EF\u80FD\u5BF9\u53EF\u7F16\u5199\u811A\u672C\u7684\u52A8\u6001\u5185\u5BB9\u8D77\u5230\u54EA\u4E9B\u4F5C\u7528\u3002</p><h2 id="\u4E00\u53E5\u8BDD\u603B\u7ED3-canvas-\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u53E5\u8BDD\u603B\u7ED3 Canvas \u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u53E5\u8BDD\u603B\u7ED3-canvas-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u662F Canvas\uFF1FCanvas \u662F\u4E3A\u4E86\u89E3\u51B3 Web \u9875\u9762\u4E2D\u53EA\u80FD\u663E\u793A\u9759\u6001\u56FE\u7247\u8FD9\u4E2A\u95EE\u9898\u800C\u63D0\u51FA\u7684\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528 JavaScript \u7B49\u811A\u672C\u8BED\u8A00\u5411\u5176\u4E2D\u7ED8\u5236\u56FE\u50CF\u7684 HTML \u6807\u7B7E\u3002</p><h2 id="\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5" tabindex="-1">\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5" aria-hidden="true">#</a></h2><p>Canvas \u5DF2\u7ECF\u53D7\u5230\u4E86\u4E3B\u6D41\u6D4F\u89C8\u5668\u7684\u652F\u6301\uFF0C\u5E76\u4E14\u652F\u6301\u60C5\u51B5\u826F\u597D\uFF0C\u5177\u4F53\u652F\u6301\u60C5\u51B5\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u5143\u7D20</th><th>Chrome</th><th>IE</th><th>Firefox</th><th>Safari</th><th>Opera</th></tr></thead><tbody><tr><td>Canvas</td><td>4.0+</td><td>9.0+</td><td>2.0+</td><td>3.1+</td><td>9.0+</td></tr></tbody></table><h2 id="\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706" tabindex="-1">\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706 <a class="header-anchor" href="#\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u8FF0\u7684\u4ECB\u7ECD\uFF0C\u5927\u5BB6\u5E94\u8BE5\u5927\u4F53\u4E0A\u660E\u767D\u4E86 <code>&lt;canvas&gt;</code> \u662F\u53EF\u4EE5\u5728 Web \u9875\u9762\u4E0A\u7ED8\u5236\u56FE\u5F62\u7684 HTML \u6807\u7B7E\u3002\u90A3\u4E48\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u8FD9\u79CD\u6280\u672F\u800C\u4E0D\u662F\u5176\u4ED6\u7684\u5462\uFF1F</p><p>\u8FD9\u91CC\u6211\u4EEC\u5C31\u8981\u5206\u6790\u4E00\u4E0B <code>canvas</code> \u548C\u5176\u4ED6\u6280\u672F\u7684\u533A\u522B\u4E86\u3002</p><p>\u600E\u4E48\u5728\u7F51\u9875\u4E0A\u753B\u4E00\u4E2A\u5706\uFF1F\u8FD9\u662F\u7B14\u8005\u4E4B\u524D\u5728\u9762\u8BD5\u7684\u65F6\u5019\u9047\u5230\u7684\u4E00\u4E2A\u95EE\u9898 (\u0CA5_\u0CA5)</p><p>\u6211\u60F3\u5230\u7684\u65B9\u6CD5\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u6709\u66F4\uFF08q\xED\uFF09\u597D\uFF08j\xEC\uFF09\u65B9\uFF08y\xEDn\uFF09\u5F0F\uFF08qi\u01CEo\uFF09\u4E5F\u53EF\u4EE5\u7559\u8A00\u3002</p><ul><li>\u76F4\u63A5\u4F7F\u7528\u56FE\u7247\uFF0C\u5982\u679C\u9700\u6C42\u53EA\u662F\u663E\u793A\u4E00\u4E2A\u5706\u5F62\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u56FE\u7247\u3002</li><li>\u4F7F\u7528 div + CSS3 \u7684 <code>border</code> + <code>border-radius</code> \u6A21\u62DF\u4E00\u4E2A\u5706\u3002</li><li>\u4F7F\u7528 svg\u3002\u53EF\u80FD\u5BF9\u4E8E\u5F88\u591A\u524D\u7AEF\u6765\u8BF4\uFF0Csvg \u548C png\u3001jpg \u7B49\u5176\u4ED6\u56FE\u7247\u683C\u5F0F\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u5176\u5B9E\u8FD8\u662F\u6709\u4E00\u5B9A\u7684\u5DEE\u522B\u3002\u4E0B\u9762\u6211\u4EEC\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD svg\u3002</li><li>Canvas + JavaScript \u52A8\u6001\u753B\u4E00\u4E2A\u5706\u3002</li></ul><p>\u90A3\u4E48\u6211\u4EEC\u6765\u5206\u6790\u4E00\u4E0B\u4EE5\u4E0A\u51E0\u79CD\u65B9\u5F0F\u7684\u4F18\u52A3\u6027\uFF1A</p><ul><li><strong>\u4F7F\u7528\u56FE\u7247</strong>\u53EF\u4EE5\u8BF4\u662F\u4EE5\u4E0A\u51E0\u79CD\u65B9\u5F0F\u4E2D\u6392\u540D\u5012\u6570\u7B2C\u4E00\u7684\u4E86\uFF0C\u56E0\u4E3A\u76F4\u63A5\u4F7F\u7528\u56FE\u7247\u9996\u5148\u4F1A\u589E\u52A0\u4E00\u6B21\u8BF7\u6C42\uFF08\u5236\u4F5C\u6210\u7CBE\u7075\u56FE\u53E6\u8BF4\uFF09\uFF0C\u5176\u6B21\u662F\u4E0D\u6613\u66F4\u6539\uFF0C\u5982\u679C\u60F3\u6362\u4E00\u79CD\u989C\u8272\u5C31\u9700\u8981\u66F4\u6362\u56FE\u7247\uFF0C\u4EE3\u4EF7\u592A\u5927\u3002</li><li><strong>\u4F7F\u7528 div + CSS3</strong> \u7684\u65B9\u5F0F\u9002\u7528\u4E8E\u5355\u4E2A\u7684\u5706\uFF0C\u5B9E\u73B0\u8D77\u6765\u6BD4\u8F83\u7B80\u5355\uFF0C\u4EE3\u4EF7\u4E5F\u6BD4\u8F83\u5C0F\uFF0C\u4F46\u589E\u52A0\u4E86\u4E00\u4E2A\u6CA1\u6709\u610F\u4E49\u7684 DOM \u8282\u70B9\uFF0C\u4E0D\u7B26\u5408\u8BED\u4E49\u5316\u7F16\u7A0B\u89C4\u8303\u3002</li><li><strong>\u4F7F\u7528 svg \u548C Canvas</strong> \u90FD\u53EF\u4EE5\u4F7F\u7528\u811A\u672C\u8BED\u8A00\u6765\u52A8\u6001\u5199\u5165\u4E00\u4E2A\u5706\u3002</li></ul><p>\u90A3\u4E48\uFF0C\u4F7F\u7528 svg \u548C Canvas \u53C8\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F</p><h2 id="svg-\u548C-canvas-\u7684\u533A\u522B" tabindex="-1">svg \u548C Canvas \u7684\u533A\u522B <a class="header-anchor" href="#svg-\u548C-canvas-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662F-svg" tabindex="-1">\u4EC0\u4E48\u662F svg <a class="header-anchor" href="#\u4EC0\u4E48\u662F-svg" aria-hidden="true">#</a></h3><p>\u521A\u521A\u6211\u4EEC\u4ECB\u7ECD\u4E86 Canvas\uFF0C\u90A3\u4E48\u4EC0\u4E48\u662F svg \u5462\uFF1F</p><blockquote><p>svg\uFF08Scalable Vector Graphics\uFF0C\u53EF\u7F29\u653E\u77E2\u91CF\u56FE\u5F62\uFF09\u662F\u57FA\u4E8E XML\uFF08\u53EF\u6269\u5C55\u6807\u8BB0\u8BED\u8A00\uFF0C\u6807\u51C6\u901A\u7528\u6807\u8BB0\u8BED\u8A00\u7684\u5B50\u96C6\uFF09\uFF0C\u7528\u4E8E\u63CF\u8FF0\u4E8C\u7EF4\u77E2\u91CF\u56FE\u5F62\u7684\u4E00\u79CD\u56FE\u5F62\u683C\u5F0F\u3002\u5B83\u7531 W3C\uFF08\u4E07\u7EF4\u7F51\u8054\u76DF\uFF09\u5236\u5B9A\uFF0C\u662F\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\u3002</p></blockquote><p>\u7B80\u5355\u7684\u8BF4\u5C31\u662F\uFF0C<strong>svg \u53EF\u4EE5\u7528\u6765\u5B9A\u4E49 XML \u683C\u5F0F\u7684\u77E2\u91CF\u56FE\u5F62</strong>\u3002</p><p>\u56E0\u4E3A\u5176\u672C\u8D28\u662F XML \u6587\u4EF6\uFF0C\u6240\u4EE5 svg \u662F\u4F7F\u7528 XML \u6587\u6863\u63CF\u8FF0\u6765\u7ED8\u56FE\u7684\u3002\u548C HTML \u4E00\u6837\uFF0C\u5982\u679C\u6211\u4EEC\u9700\u8981\u4FEE\u6539 svg \u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8BB0\u4E8B\u672C\u6253\u5F00\u4FEE\u6539\u3002</p><h3 id="canvas-\u548C-svg-\u7684\u533A\u522B" tabindex="-1">Canvas \u548C svg \u7684\u533A\u522B <a class="header-anchor" href="#canvas-\u548C-svg-\u7684\u533A\u522B" aria-hidden="true">#</a></h3><p>Canvas \u548C svg\u90FD\u5141\u8BB8\u4F60\u5728\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA\u56FE\u5F62\uFF0C\u4F46\u662F\u5B83\u4EEC\u5728\u6839\u672C\u4E0A\u662F\u4E0D\u540C\u7684\uFF0C\u90A3\u4E48 Canvas \u548C svg \u6709\u4EC0\u4E48\u6839\u672C\u533A\u522B\u5462\uFF1F</p><p>\u5C31\u5982\u521A\u521A\u4ECB\u7ECD\u7684\u90A3\u6837\uFF0C<strong>svg \u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u4F7F\u7528 XML \u63CF\u8FF0 2D \u56FE\u5F62\u7684\u8BED\u8A00</strong>\u3002</p><p>svg \u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684 DOM \u5143\u7D20\uFF0C\u65E2\u7136\u662F\u72EC\u7ACB\u7684 DOM \u5143\u7D20\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7 css \u548C JavaScript \u6765\u64CD\u63A7 dom\u3002\u53EF\u4EE5\u5BF9\u6BCF\u4E00\u4E2A DOM \u5143\u7D20\u8FDB\u884C\u76D1\u542C\u3002</p><p>\u5E76\u4E14\u56E0\u4E3A\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u662F\u4E00\u4E2A DOM \u5143\u7D20\uFF0C\u6240\u4EE5\u4FEE\u6539 svg \u4E2D\u7684 DOM \u5143\u7D20\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8FDB\u884C DOM \u91CD\u7ED8\u3002</p><p><strong>Canvas \u901A\u8FC7 JavaScript \u6765\u7ED8\u5236 2D \u56FE\u5F62</strong>\uFF0CCanvas \u53EA\u662F\u4E00\u4E2A HTML \u5143\u7D20\uFF0C\u5176\u4E2D\u7684\u56FE\u5F62\u4E0D\u4F1A\u5355\u72EC\u521B\u5EFA DOM \u5143\u7D20\u3002\u56E0\u6B64\u6211\u4EEC\u4E0D\u80FD\u901A\u8FC7 JavaScript \u64CD\u63A7 Canvas \u5185\u5355\u72EC\u7684\u56FE\u5F62\uFF0C\u4E0D\u80FD\u5BF9\u5176\u4E2D\u7684\u5177\u4F53\u56FE\u5F62\u8FDB\u884C\u76D1\u63A7\u3002</p><p>\u5728 Canvas \u4E2D\uFF0C\u4E00\u65E6\u56FE\u5F62\u88AB\u7ED8\u5236\u5B8C\u6210\uFF0C\u5B83\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u5F97\u5230\u6D4F\u89C8\u5668\u7684\u5173\u6CE8\u3002\u5982\u679C\u5176\u4F4D\u7F6E\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u6574\u4E2A\u573A\u666F\u4E5F\u9700\u8981\u91CD\u65B0\u7ED8\u5236\uFF0C\u5305\u62EC\u4EFB\u4F55\u6216\u8BB8\u5DF2\u88AB\u56FE\u5F62\u8986\u76D6\u7684\u5BF9\u8C61\u3002</p><blockquote><p>\u5B9E\u9645\u4E0A Canvas \u662F\u57FA\u4E8E\u50CF\u7D20\u7684\u5373\u65F6\u6A21\u5F0F\u56FE\u5F62\u7CFB\u7EDF\uFF0C\u7ED8\u5236\u5B8C\u5BF9\u8C61\u540E\u4E0D\u4FDD\u5B58\u5BF9\u8C61\u5230\u5185\u5B58\u4E2D\uFF0C\u5F53\u518D\u6B21\u9700\u8981\u8FD9\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u7ED8\u5236\uFF1Bsvg \u662F\u57FA\u4E8E\u5F62\u72B6\u7684\u4FDD\u7559\u6A21\u5F0F\u56FE\u5F62\u7CFB\u7EDF\uFF0C\u7ED8\u5236\u5B8C\u5BF9\u8C61\u540E\u4F1A\u5C06\u5176\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u5F53\u9700\u8981\u4FEE\u6539\u8FD9\u4E2A\u5BF9\u8C61\u4FE1\u606F\u65F6\uFF0C\u76F4\u63A5\u4FEE\u6539\u5C31\u53EF\u4EE5\u4E86\u3002\u8FD9\u79CD\u6839\u672C\u7684\u533A\u522B\u5BFC\u81F4\u4E86\u5F88\u591A\u5E94\u7528\u573A\u666F\u7684\u4E0D\u540C\u3002</p></blockquote><table><thead><tr><th>Canvas</th><th>svg</th></tr></thead><tbody><tr><td>\u4F9D\u8D56\u5206\u8FA8\u7387\uFF08\u4F4D\u56FE\uFF09</td><td>\u4E0D\u4F9D\u8D56\u5206\u8FA8\u7387\uFF08\u77E2\u91CF\u56FE\uFF09</td></tr><tr><td>\u5355\u4E2A HTML \u5143\u7D20</td><td>\u6BCF\u4E00\u4E2A\u56FE\u5F62\u90FD\u662F\u4E00\u4E2A DOM \u5143\u7D20</td></tr><tr><td>\u53EA\u80FD\u901A\u8FC7\u811A\u672C\u8BED\u8A00\u7ED8\u5236\u56FE\u5F62</td><td>\u53EF\u4EE5\u901A\u8FC7 CSS \u4E5F\u53EF\u4EE5\u901A\u8FC7\u811A\u672C\u8BED\u8A00\u7ED8\u5236</td></tr><tr><td>\u4E0D\u652F\u6301\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</td><td>\u652F\u6301\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</td></tr><tr><td>\u5F31\u7684\u6587\u672C\u6E32\u67D3\u80FD\u529B</td><td>\u6700\u9002\u5408\u5E26\u6709\u5927\u578B\u6E32\u67D3\u533A\u57DF\u7684\u5E94\u7528\u7A0B\u5E8F\uFF08\u6BD4\u5982\u8C37\u6B4C\u5730\u56FE\uFF09</td></tr><tr><td>\u56FE\u9762\u8F83\u5C0F\uFF0C\u5BF9\u8C61\u6570\u91CF\u8F83\u5927\uFF08<code>&gt;10k</code>\uFF09\u65F6\u6027\u80FD\u6700\u4F73</td><td>\u5BF9\u8C61\u6570\u91CF\u8F83\u5C0F (<code>&lt;10k</code>)\u3001\u56FE\u9762\u66F4\u5927\u65F6\u6027\u80FD\u66F4\u4F73</td></tr></tbody></table><p>\u6240\u4EE5\u662F\u9009\u62E9 Canvas \u8FD8\u662F svg \u8FD8\u662F\u9700\u8981\u770B\u81EA\u5DF1\u7684\u9700\u6C42\u3002</p><p>\u672C\u5C0F\u518C\u4E3B\u8981\u4ECB\u7ECD Canvas \u7684\u76F8\u5173\u5185\u5BB9\uFF0C\u5BF9 svg \u4E0D\u505A\u8FC7\u591A\u7684\u4ECB\u7ECD~</p>',53),r=[n];function c(v,i,o,l,p,h){return e(),t("div",null,r)}const b=a(d,[["render",c]]);export{C as __pageData,b as default};
