import{_ as s,c as a,o as e,d as n}from"./app.e5528619.js";const _=JSON.parse('{"title":"\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-SMTP\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"Python\u4F7F\u7528SMTP","slug":"python\u4F7F\u7528smtp","link":"#python\u4F7F\u7528smtp","children":[]},{"level":2,"title":"\u6388\u6743\u7801\u8BBE\u7F6E","slug":"\u6388\u6743\u7801\u8BBE\u7F6E","link":"#\u6388\u6743\u7801\u8BBE\u7F6E","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-SMTP\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011.md"}'),p={name:"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-SMTP\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011.md"},t=n(`<h1 id="\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-smtp\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011" tabindex="-1">\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-SMTP\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011 <a class="header-anchor" href="#\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848-smtp\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613\u3010\u52A0\u63A8\u7BC7\u3011" aria-hidden="true">#</a></h1><hr><h1 id="\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848\uFF1Asmtp\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613" tabindex="-1">\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848\uFF1ASMTP\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613 <a class="header-anchor" href="#\u8FDC\u7A0B\u4E0B\u5355\u65B9\u6848\uFF1Asmtp\u90AE\u4EF6\u5B9E\u65F6\u63D0\u9192\u4EA4\u6613" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7528\u91CF\u5316\u4EA4\u6613\u7684\u76EE\u7684\u5C31\u662F\u8BA9\u7A0B\u5E8F\u5168\u81EA\u52A8\u5730\u53BB\u8DD1\u7B56\u7565\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u89E3\u653E\u7535\u8111\u5C4F\u5E55\u524D\u7684\u4F60\u3002\u5F53\u4EA7\u751F\u4EA4\u6613\u4FE1\u53F7\u7684\u65F6\u5019\u6216\u8005\u51FA\u73B0\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u5F97\u9700\u8981\u901A\u77E5\u5230\u76F8\u5173\u4EBA\u5458\u624D\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8981\u5B9E\u73B0\u4E00\u79CD\u8FDC\u7A0B\u63D0\u9192\u7684\u529F\u80FD\uFF0C\u89E3\u51B3\u65B9\u6848\u6709\u7528\u5FAE\u4FE1\u3001\u77ED\u4FE1\u3001\u90AE\u4EF6\u4E4B\u7C7B\u7684\u65B9\u5F0F\u3002</p><p>\u524D\u9762\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5FAE\u4FE1\u65B9\u5F0F\uFF0C\u4E0D\u8FC7\u6709\u4E9B\u540C\u5B66\u53CD\u9988\u8BF4\u51FA\u73B0\u4E86\u5FAE\u4FE1\u7F51\u9875\u7248\u65E0\u6CD5\u767B\u9646\u4E4B\u7C7B\u7684\u95EE\u9898\uFF0C\u8FD9\u91CC\u6211\u4EEC\u518D\u4ECB\u7ECD\u4E0B\u90AE\u7BB1\u8FD9\u79CD\u76F8\u5BF9\u6709\u6548\u7684\u65B9\u5F0F\u6765\u8FDC\u7A0B\u63D0\u9192\u3002</p><h2 id="python\u4F7F\u7528smtp" tabindex="-1">Python\u4F7F\u7528SMTP <a class="header-anchor" href="#python\u4F7F\u7528smtp" aria-hidden="true">#</a></h2><p>\u53D1\u9001\u90AE\u4EF6\u548C\u6838\u5FC3\u662FSMTP\uFF08Simple Mail Transfer Protocol\uFF09\u534F\u8BAE\uFF0C\u5B83\u662F\u4E00\u7EC4\u7528\u4E8E\u7531\u6E90\u5730\u5740\u5230\u76EE\u7684\u5730\u5740\u7684\u90AE\u4EF6\u4F20\u8F93\u89C4\u5219\u3002</p><p>Python\u771F\u7684\u662F\u4EC0\u4E48\u90FD\u80FD\u505A\uFF0C\u5B83\u5BF9SMTP\u8FDB\u884C\u4E86\u7B80\u5355\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u7528\u5230\u4E24\u4E2A\u6A21\u5757\uFF0C\u5C31\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u53D1\u9001\u7EAF\u6587\u672C\u90AE\u4EF6\u3001HTML\u90AE\u4EF6\u4EE5\u53CA\u5E26\u9644\u4EF6\u7684\u90AE\u4EF6\u3002</p><p>\u54EA\u4E24\u4E2A\u6A21\u5757\u5462\uFF1FPython\u5185\u7F6E\u7684email\u6A21\u5757\u8D1F\u8D23\u6784\u5EFA\u90AE\u4EF6\uFF0C\u53E6\u4E00\u4E2Asmtplib\u6A21\u5757\u8D1F\u8D23\u53D1\u9001\u90AE\u4EF6\u3002</p><p>\u5E38\u89C4\u7684\u6D41\u7A0B\uFF0C\u5148\u628A\u6D89\u53CA\u5230\u7684\u6A21\u5757\u5168\u90E8\u5BFC\u5165\u8FDB\u6765\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">from email import encoders</span></span>
<span class="line"><span style="color:#A6ACCD;">from email.header import Header</span></span>
<span class="line"><span style="color:#A6ACCD;">from email.mime.text import MIMEText</span></span>
<span class="line"><span style="color:#A6ACCD;">from email.utils import parseaddr, formataddr</span></span>
<span class="line"><span style="color:#A6ACCD;">import smtplib</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u7528MIMEText()\u6784\u9020\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u7EAF\u6587\u672C\u90AE\u4EF6\uFF0C\u5176\u4E2D\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u90AE\u4EF6\u6B63\u6587\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5185\u5BB9\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982&#39;plain&#39;\u8868\u793A\u7EAF\u6587\u672C\u90AE\u4EF6\uFF0C&#39;html&#39;\u8868\u793AHTML\u90AE\u4EF6\u3002</p><p>\u521B\u5EFA\u7684\u90AE\u4EF6\u5BF9\u8C61\u4E2D\uFF0C\u8981\u6DFB\u52A0From\u3001To\u548CSubject\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u5426\u5219\u5C31\u4E0D\u662F\u4E00\u5C01\u5B8C\u6574\u7684\u90AE\u4EF6\uFF0C\u6BD4\u5982\u4F1A\u51FA\u73B0\u90AE\u4EF6\u6CA1\u6709\u4E3B\u9898\uFF0C\u53D1\u4EF6\u4EBA\u7684\u540D\u79F0\u4E3A\u533F\u540D\uFF0C\u660E\u660E\u6536\u5230\u4E86\u90AE\u4EF6\u5374\u63D0\u793A\u4E0D\u5728\u6536\u4EF6\u4EBA\u4E2D\u8FD9\u4E9B\u60C5\u51B5\u3002</p><p>\u5178\u578B\u7684\u4F8B\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u53D1\u9001\u7EAF\u6587\u672C\u683C\u5F0F\u7684\u90AE\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">msg = MIMEText(&#39;order attention&#39;,&#39;plain&#39;,&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u53D1\u9001\u90AE\u7BB1\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">msg[&#39;From&#39;] = =&#39;\u53D1\u4EF6\u4EBA\u90AE\u7BB1\u8D26\u53F7&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6536\u4EF6\u7BB1\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">msg[&#39;To&#39;] =&#39;\u6536\u4EF6\u4EBA\u90AE\u7BB1\u8D26\u53F7&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4E3B\u9898 </span></span>
<span class="line"><span style="color:#A6ACCD;">msg[&#39;Subject&#39;] = &quot;\u4E3B\u9898&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u6765\u8BF4\u8BF4\u8D1F\u8D23\u53D1\u9001\u90AE\u4EF6\u7684smtplib\u6A21\u5757\uFF0C\u8FD9\u4E2A\u6A21\u5757\u4E3B\u8981\u662F\u7528smtplib.SMTP()\u7C7B\u53BB\u8FDE\u63A5SMTP\u670D\u52A1\u5668\uFF0C\u7136\u540E\u53D1\u9001\u90AE\u4EF6\u3002</p><p>\u4F8B\u7A0B\u4E2D\u6211\u4EEC\u4F1A\u7528\u5230\u51E0\u4E2A\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982set_debuglevel(1)\u6253\u5370\u548CSMTP\u670D\u52A1\u5668\u4EA4\u4E92\u7684\u6240\u6709\u4FE1\u606F\u3002login()\u767B\u5F55SMTP\u670D\u52A1\u5668\uFF0Csendmail()\u65B9\u6CD5\u53D1\u90AE\u4EF6\u3002</p><p>\u5178\u578B\u4F8B\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server = smtplib.SMTP(smtp_server, 25)</span></span>
<span class="line"><span style="color:#A6ACCD;">server.set_debuglevel(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">server.login(from_addr, password)</span></span>
<span class="line"><span style="color:#A6ACCD;">server.sendmail(from_addr, [to_addr], msg.as_string())</span></span>
<span class="line"><span style="color:#A6ACCD;">server.quit()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u7684password\u662F\u4E2A\u6BD4\u8F83\u5BB9\u6613\u6DF7\u6DC6\u7684\u5730\u65B9\u3002\u4E0D\u662F\u90AE\u7BB1\u767B\u9646\u7684\u5BC6\u7801\uFF0C\u800C\u662F\u6388\u6743\u7801\u3002</p><h2 id="\u6388\u6743\u7801\u8BBE\u7F6E" tabindex="-1">\u6388\u6743\u7801\u8BBE\u7F6E <a class="header-anchor" href="#\u6388\u6743\u7801\u8BBE\u7F6E" aria-hidden="true">#</a></h2><p>\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u767B\u5F55QQ\u90AE\u7BB1\u65F6\u662F\u9700\u8981\u6388\u6743\u7801\u7684\uFF0C\u5305\u62EC\u5176\u4ED6\u90AE\u7BB1\u4E5F\u90FD\u4E00\u6837\uFF0C\u6BD4\u5982126\u3001163\u90AE\u7BB1\u7B49\u7B49\u3002\u6388\u6743\u7801\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u4E13\u7528\u5BC6\u7801\uFF0C\u9002\u7528\u4E8E\u767B\u5F55\u4EE5\u4E0B\u670D\u52A1\uFF1APOP3/IMAP/SMTP/Exchange/CardDAV/CalDAV\u670D\u52A1\u3002</p><p>\u5982\u4F55\u8BBE\u7F6E\u5462\uFF1F\u4EE5QQ\u90AE\u7BB1\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5728QQ\u90AE\u4EF6\u7684\u5E2E\u52A9\u4E2D\u5FC3\u627E\u5230\u4E86\u65B9\u6CD5\u3002</p><p>\u5728\u4E2A\u4EBA\u90AE\u7BB1\u9875\u9762\u8FDB\u5165[\u8BBE\u7F6E] -&gt; [\u5E10\u6237] \u9875\u9762\u627E\u5230\u5165\u53E3\uFF0C\u7136\u540E\u628APOP3/IMAP/SMTP\u8FD9\u51E0\u4E2A\u670D\u52A1\u5F00\u542F\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/25/1724ada6d53d67ac~tplv-t2oaga2asx-image.image" alt=""></p><p>\u5F00\u542F\u7684\u65F6\u5019\u6709\u9A8C\u8BC1\u5BC6\u4FDD\u73AF\u8282\uFF0C\u9700\u8981\u53D1\u9001\u77ED\u4FE1\uFF0C\u63A5\u7740\u5C31\u83B7\u53D6\u5230\u6388\u6743\u7801\uFF0C\u5728\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u7684\u5BC6\u7801\u680F\u91CC\u9762\u8F93\u5165\u8FD916\u4F4D\u6388\u6743\u7801\u8FDB\u884C\u9A8C\u8BC1\u5373\u53EF\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/25/1724adac7e37e957~tplv-t2oaga2asx-image.image" alt=""></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/25/1724adb1473326ac~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8FD9\u6837\u4E00\u6765\u90AE\u4EF6\u5C31\u53D1\u9001\u6210\u529F\u4E86\uFF0C\u6211\u5DF2\u7ECF\u5F97\u5230\u4E0B\u5355\u63D0\u9192\u4E86\uFF01\uFF01\uFF01\u624B\u673A\u90AE\u7BB1\u4E5F\u4E00\u6837\u53EF\u4EE5\u6536\u5230\u54E6\uFF01</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/25/1724adb6743c305e~tplv-t2oaga2asx-image.image" alt=""></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/25/1724adb9ee54ad49~tplv-t2oaga2asx-image.image" alt=""></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u7ECF\u8FC7\u6211\u7684\u591A\u8F6E\u6D4B\u8BD5\uFF0C\u4ECE\u7B56\u7565\u7684\u4FE1\u53F7\u4EA7\u751F\u5230\u6536\u5230\u90AE\u4EF6\uFF0C\u5EF6\u8FDF\u65F6\u95F4\u57FA\u672C\u57281s\u5DE6\u53F3\uFF0C\u7531\u4E8E\u6211\u4EEC\u8BBE\u7F6E\u4E86\u6ED1\u70B9\uFF0C\u5BF9\u4E8E\u80A1\u7968\u8FD9\u7C7B\u4F4E\u9891\u4EA4\u6613\u573A\u5408\u6765\u8BF4\uFF0C\u65F6\u6548\u6027\u5DF2\u7ECF\u7EF0\u7EF0\u6709\u4F59\u4E86\u3002</p>`,34),l=[t];function o(r,i,c,d,m,h){return e(),a("div",null,l)}const A=s(p,[["render",o]]);export{_ as __pageData,A as default};
