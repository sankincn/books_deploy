import{_ as e,c as a,o as i,d as t}from"./app.e0e4ea3a.js";const x=JSON.parse('{"title":"\u8FDB\u9636 6-API \u9AD8\u53EF\u7528\u65B9\u6848","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6848\u4ECB\u7ECD","slug":"\u65B9\u6848\u4ECB\u7ECD","link":"#\u65B9\u6848\u4ECB\u7ECD","children":[]},{"level":2,"title":"Keepalived \u7B80\u4ECB","slug":"keepalived-\u7B80\u4ECB","link":"#keepalived-\u7B80\u4ECB","children":[]},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72","link":"#\u90E8\u7F72","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 6-API \u9AD8\u53EF\u7528\u65B9\u6848.md"}'),l={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/\u8FDB\u9636 6-API \u9AD8\u53EF\u7528\u65B9\u6848.md"},d=t('<h1 id="\u8FDB\u9636-6-api-\u9AD8\u53EF\u7528\u65B9\u6848" tabindex="-1">\u8FDB\u9636 6-API \u9AD8\u53EF\u7528\u65B9\u6848 <a class="header-anchor" href="#\u8FDB\u9636-6-api-\u9AD8\u53EF\u7528\u65B9\u6848" aria-hidden="true">#</a></h1><hr><h1 id="api-\u9AD8\u53EF\u7528\u65B9\u6848" tabindex="-1">API \u9AD8\u53EF\u7528\u65B9\u6848 <a class="header-anchor" href="#api-\u9AD8\u53EF\u7528\u65B9\u6848" aria-hidden="true">#</a></h1><p>\u672C\u5C0F\u8282\u4E3A\u53EF\u9009\u5C0F\u8282\u3002\u56E0\u4E3A\u8BE5\u65B9\u6848\u9700\u8981\u6709\u81F3\u5C11\u4E24\u53F0\u670D\u52A1\u5668\uFF0C\u6CA1\u6709\u591A\u53F0\u670D\u52A1\u5668\u7684\u8BFB\u8005\u53EA\u9700\u8981\u4E86\u89E3\u5373\u53EF\u3002</p><h2 id="\u65B9\u6848\u4ECB\u7ECD" tabindex="-1">\u65B9\u6848\u4ECB\u7ECD <a class="header-anchor" href="#\u65B9\u6848\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>Nginx \u81EA\u5E26\u8D1F\u8F7D\u5747\u8861\u529F\u80FD\uFF0C\u5E76\u4E14\u5F53 Nginx \u540E\u7AEF\u67D0\u4E2A\u670D\u52A1\u5668\u6302\u6389\u540E\uFF0CNginx \u4F1A\u81EA\u52A8\u5254\u9664\u8BE5\u670D\u52A1\u5668\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u53EF\u7528\u7684\u670D\u52A1\u5668\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5B9E\u73B0\u4E86\u540E\u7AEF API \u670D\u52A1\u7684\u9AD8\u53EF\u7528\uFF08HA\uFF09\u3002\u4F46\u662F Nginx \u662F\u5355\u70B9\u7684\uFF0C\u5982\u679C Nginx \u6302\u4E86\uFF0C\u540E\u7AEF\u7684\u6240\u6709\u670D\u52A1\u5668\u5C31\u90FD\u4E0D\u80FD\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5728\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u4E5F\u9700\u8981\u5BF9 Nginx \u505A\u9AD8\u53EF\u7528\u3002</p><p>Keepalived \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\u670D\u52A1\u5668\u9AD8\u53EF\u7528\u6216\u70ED\u5907\u89E3\u51B3\u65B9\u6848\uFF0CKeepalived \u4E3B\u8981\u6765\u9632\u6B62\u670D\u52A1\u5668\u5355\u70B9\u6545\u969C\u7684\u53D1\u751F\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7 Keepalived \u5BF9\u524D\u7AEF Nginx \u5B9E\u73B0\u9AD8\u53EF\u7528\u3002Keepalived + Nginx \u7684\u9AD8\u53EF\u7528\u65B9\u6848\u5177\u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ol><li>\u670D\u52A1\u529F\u80FD\u5F3A\u5927</li><li>\u7EF4\u62A4\u7B80\u5355</li></ol><h2 id="keepalived-\u7B80\u4ECB" tabindex="-1">Keepalived \u7B80\u4ECB <a class="header-anchor" href="#keepalived-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>Keepalived \u4EE5 VRRP \u534F\u8BAE\u4E3A\u57FA\u7840\u6765\u5B9E\u73B0\u9AD8\u53EF\u7528\u6027\u3002VRRP\uFF08Virtual Router Redundancy Protocol\uFF0C\u865A\u62DF\u8DEF\u7531\u5197\u4F59\u534F\u8BAE\uFF09\u662F\u7528\u4E8E\u5B9E\u73B0\u8DEF\u7531\u5668\u5197\u4F59\u7684\u534F\u8BAE\uFF0C\u5B83\u5C06\u4E24\u53F0\u6216\u591A\u53F0\u8DEF\u7531\u5668\u8BBE\u5907\u865A\u62DF\u6210\u4E00\u4E2A\u8BBE\u5907\uFF0C\u5BF9\u5916\u63D0\u4F9B\u865A\u62DF\u8DEF\u7531\u5668 IP\uFF08\u4E00\u4E2A\u6216\u591A\u4E2A\uFF09\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/5/163cec3864bd8244~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5C06 Nginx + Keepalived \u90E8\u7F72\u5728\u4E24\u53F0\u670D\u52A1\u5668\u4E0A\uFF0C\u62E5\u6709\u4E24\u4E2A\u771F\u5B9E\u7684 IP\uFF08IP1 \u548C IP2\uFF09\uFF0C\u901A\u8FC7\u4E00\u5B9A\u7684\u6280\u672F\uFF08\u5982 LVS\uFF09\u865A\u62DF\u51FA\u4E00\u4E2A\u865A\u62DF IP\uFF08VIP\uFF09\uFF0C\u5916\u754C\u8BF7\u6C42\u901A\u8FC7\u8BBF\u95EE VIP \u6765\u8BBF\u95EE\u670D\u52A1\u3002\u5728\u4E24\u53F0 Nginx + Keepalived \u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u540C\u4E00\u65F6\u95F4\u53EA\u6709\u4E00\u53F0\u4F1A\u63A5\u7BA1 VIP\uFF08\u53EB\u505A Master\uFF09\u63D0\u4F9B\u670D\u52A1\uFF0C\u53E6\u4E00\u53F0\uFF08\u53EB\u505A Slave\uFF09\u4F1A\u68C0\u6D4B Master \u7684\u5FC3\u8DF3\uFF0C\u5F53\u53D1\u73B0 Master \u505C\u6B62\u5FC3\u8DF3\u540E\uFF0CSlave \u4F1A\u81EA\u52A8\u63A5\u7BA1 VIP \u4EE5\u63D0\u4F9B\u670D\u52A1\uFF08\u6B64\u65F6\uFF0CSlave \u53D8\u6210 Master\uFF09\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0 Nginx \u7684\u9AD8\u53EF\u7528\uFF0C\u901A\u8FC7\u7B2C 19 \u8282\u53EF\u4EE5\u77E5\u9053\uFF0CNginx \u53EF\u4EE5\u5BF9\u540E\u53F0 API \u670D\u52A1\u5668\u505A\u9AD8\u53EF\u7528\uFF0C\u8FD9\u6837\u901A\u8FC7 Nginx + Keepalived \u7684\u7EC4\u5408\u65B9\u6848\u5C31\u5B9E\u73B0\u4E86\u6574\u4E2A API \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528\u3002</p><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><p>Keepalived + Nginx \u7684\u90E8\u7F72\u65B9\u6848\u7F51\u4E0A\u6709\u5F88\u591A\u8BE6\u7EC6\u7684\u6559\u7A0B\u3002\u56E0\u4E3A\u5C0F\u518C\u7BC7\u5E45\u9650\u5236\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u8BFB\u8005\u5982\u9700\u4E86\u89E3\uFF0C\u8BF7\u53C2\u8003 <a href="https://blog.csdn.net/xyang81/article/details/52556886" target="_blank" rel="noreferrer">Keepalived+Nginx\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF08HA\uFF09</a>\u3002</p>',14),r=[d];function n(s,p,o,h,c,_){return i(),a("div",null,r)}const P=e(l,[["render",n]]);export{x as __pageData,P as default};
