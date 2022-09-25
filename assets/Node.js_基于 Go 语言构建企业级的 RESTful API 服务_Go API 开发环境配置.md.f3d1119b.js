import{_ as e,c as o,o as s,d as a}from"./app.c4f45da1.js";const h=JSON.parse('{"title":"Go API \u5F00\u53D1\u73AF\u5883\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Go \u547D\u4EE4\u5B89\u88C5","slug":"go-\u547D\u4EE4\u5B89\u88C5","link":"#go-\u547D\u4EE4\u5B89\u88C5","children":[]},{"level":2,"title":"Vim \u914D\u7F6E","slug":"vim-\u914D\u7F6E","link":"#vim-\u914D\u7F6E","children":[]},{"level":2,"title":"Vim IDE \u5E38\u7528\u529F\u80FD","slug":"vim-ide-\u5E38\u7528\u529F\u80FD","link":"#vim-ide-\u5E38\u7528\u529F\u80FD","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/Go API \u5F00\u53D1\u73AF\u5883\u914D\u7F6E.md"}'),l={name:"Node.js/\u57FA\u4E8E Go \u8BED\u8A00\u6784\u5EFA\u4F01\u4E1A\u7EA7\u7684 RESTful API \u670D\u52A1/Go API \u5F00\u53D1\u73AF\u5883\u914D\u7F6E.md"},n=a(`<h1 id="go-api-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" tabindex="-1">Go API \u5F00\u53D1\u73AF\u5883\u914D\u7F6E <a class="header-anchor" href="#go-api-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a></h1><hr><h1 id="go-api-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E-1" tabindex="-1">Go API \u5F00\u53D1\u73AF\u5883\u914D\u7F6E <a class="header-anchor" href="#go-api-\u5F00\u53D1\u73AF\u5883\u914D\u7F6E-1" aria-hidden="true">#</a></h1><h2 id="go-\u547D\u4EE4\u5B89\u88C5" tabindex="-1">Go \u547D\u4EE4\u5B89\u88C5 <a class="header-anchor" href="#go-\u547D\u4EE4\u5B89\u88C5" aria-hidden="true">#</a></h2><p>Go \u6709\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F\uFF0C\u6BD4\u5982 Go \u6E90\u7801\u5B89\u88C5\u3001Go \u6807\u51C6\u5305\u5B89\u88C5\u3001\u7B2C\u4E09\u65B9\u5DE5\u5177\uFF08yum\u3001apt-get \u7B49\uFF09\u5B89\u88C5\u3002\u672C\u5C0F\u518C API \u8FD0\u884C\u5728 Linux \u670D\u52A1\u5668\u4E0A\uFF0C\u9009\u62E9\u901A\u8FC7\u6807\u51C6\u5305\u6765\u5B89\u88C5 Go \u7F16\u8BD1\u73AF\u5883\u3002Go \u63D0\u4F9B\u4E86\u6BCF\u4E2A\u5E73\u53F0\u6253\u597D\u5305\u7684\u4E00\u952E\u5B89\u88C5\uFF0C\u8FD9\u4E9B\u5305\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230\u5982\u4E0B\u76EE\u5F55\uFF1A<code>/usr/local/go</code>\u3002\u5F53\u7136\u4F60\u53EF\u4EE5\u6539\u53D8\u5B83\u4EEC\u7684\u5B89\u88C5\u4F4D\u7F6E\uFF0C\u4F46\u662F\u6539\u53D8\u4E4B\u540E\u4F60\u5FC5\u987B\u5728\u4F60\u7684\u73AF\u5883\u53D8\u91CF\u4E2D\u8BBE\u7F6E\u5982\u4E0B\u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\uFF1A</p><ul><li>GOROOT\uFF1AGOROOT \u5C31\u662F Go \u7684\u5B89\u88C5\u8DEF\u5F84</li><li>GOPATH\uFF1AGOPATH \u662F\u4F5C\u4E3A\u7F16\u8BD1\u540E\u4E8C\u8FDB\u5236\u7684\u5B58\u653E\u76EE\u7684\u5730\u548C import \u5305\u65F6\u7684\u641C\u7D22\u8DEF\u5F84</li></ul><p>\u5047\u5B9A\u4F60\u60F3\u8981\u5B89\u88C5 Go \u7684\u76EE\u5F55\u4E3A <code>$GO_INSTALL_DIR</code>\uFF0C\u540E\u9762\u66FF\u6362\u4E3A\u76F8\u5E94\u7684\u76EE\u5F55\u8DEF\u5F84\uFF0C\u5B89\u88C5\u6B65\u9AA4\u5982\u4E0B\u3002</p><ol><li>\u4E0B\u8F7D\u5B89\u88C5\u5305</li></ol><p>\u5B89\u88C5\u5305\u4E0B\u8F7D\u5730\u5740\u4E3A <a href="https://golang.org/dl/" target="_blank" rel="noreferrer">golang.org</a>\uFF0C\u5982\u679C\u6253\u4E0D\u5F00\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u5730\u5740\uFF1A<a href="https://golang.google.cn/dl/" target="_blank" rel="noreferrer">golang.google.cn</a>\u3002</p><p>Linux \u7248\u672C\u9009\u62E9 goxxxxx.linux-amd64.tar.gz \u683C\u5F0F\u7684\u5B89\u88C5\u5305\uFF0C\u8FD9\u91CC\u5728 Linux \u670D\u52A1\u5668\u4E0A\u76F4\u63A5\u7528 <code>wget</code> \u547D\u4EE4\u4E0B\u8F7D\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ wget https://dl.google.com/go/go1.10.2.linux-amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u8BBE\u7F6E\u5B89\u88C5\u76EE\u5F55
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ export GO_INSTALL_DIR=$HOME</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u8FD9\u91CC\u6211\u4EEC\u5B89\u88C5\u5230\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\u3002</p></blockquote><ol start="3"><li><pre><code>\u89E3\u538B Go \u5B89\u88C5\u5305
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ tar -xvzf go1.10.2.linux-amd64.tar.gz -C $GO_INSTALL_DIR</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li><pre><code>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ export GO_INSTALL_DIR=$HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">$ export GOROOT=$GO_INSTALL_DIR/go</span></span>
<span class="line"><span style="color:#A6ACCD;">$ export GOPATH=$HOME/mygo</span></span>
<span class="line"><span style="color:#A6ACCD;">$ export PATH=$GOPATH/bin:$PATH:$GO_INSTALL_DIR/go/bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4E0D\u60F3\u6BCF\u6B21\u767B\u5F55\u7CFB\u7EDF\u90FD\u8BBE\u7F6E\u4E00\u6B21\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5C06\u4E0A\u9762 4 \u884C\u8FFD\u52A0\u5230 <code>$HOME/.bashrc</code> \u6587\u4EF6\u4E2D\u3002</p><ol start="5"><li><pre><code>\u6267\u884C \`go version\` \u68C0\u67E5 Go \u662F\u5426\u6210\u529F\u5B89\u88C5
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ go version</span></span>
<span class="line"><span style="color:#A6ACCD;">go version go1.10.2 linux/amd64</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u770B\u5230 <code>go version</code> \u547D\u4EE4\u8F93\u51FA go \u7248\u672C\u53F7 <code>go1.10.2 linux/amd64</code>\uFF0C\u8BF4\u660E go \u547D\u4EE4\u5B89\u88C5\u6210\u529F\u3002</p><ol start="6"><li>\u521B\u5EFA <code>$GOPATH/src</code> \u76EE\u5F55</li></ol><p><code>$GOPATH/src</code> \u662F Go \u6E90\u7801\u5B58\u653E\u7684\u76EE\u5F55\uFF0C\u6240\u4EE5\u5728\u6B63\u5F0F\u5F00\u59CB\u7F16\u7801\u524D\u8981\u5148\u786E\u4FDD <code>$GOPATH/src</code> \u76EE\u5F55\u5B58\u5728\uFF0C\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ mkdir -p $GOPATH/src</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vim-\u914D\u7F6E" tabindex="-1">Vim \u914D\u7F6E <a class="header-anchor" href="#vim-\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A Vim \u662F Linux \u4E0B\u5F00\u53D1\u7684\u6700\u57FA\u672C\u5DE5\u5177\uFF0C\u4E3A\u4E86\u901A\u7528\u8FD9\u91CC\u57FA\u4E8E Vim \u6765\u914D\u7F6E\u5F00\u53D1\u73AF\u5883\u3002\u5982\u679C\u8981\u914D\u7F6E\u4E00\u4E2A Vim IDE \u6709\u5F88\u591A\u6B65\u9AA4\u9700\u8981\u4E00\u6B65\u4E00\u6B65\u53BB\u505A\uFF0C\u7B14\u8005\u8C03\u7814\u4E86\u5F88\u591A Go vim ide \u7684\u914D\u7F6E\u65B9\u6CD5\uFF0C\u7F16\u5199\u4E86\u4E00\u4E2A\u5B89\u88C5\u5DE5\u5177\uFF0C\u8FD9\u91CC\u76F4\u63A5\u7528\u8BE5\u5DE5\u5177\u6765\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u6B65\u9AA4\u5982\u4E0B\u3002</p><ol><li><pre><code>\u4E0B\u8F7D Vim \u914D\u7F6E\u5DE5\u5177
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/lexVim</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li><pre><code>\u8FDB\u5165 lexVim \u76EE\u5F55\uFF0C\u4E0B\u8F7D go ide \u9700\u8981\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cd lexVim</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/lexkong/vim-go-ide-bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u90FD\u662F\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5927\u6982\u6709 141MB\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85 :-)</p></blockquote><ol start="3"><li><pre><code>\u542F\u52A8\u5B89\u88C5\u811A\u672C\uFF1A
</code></pre></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ ./start_vim.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u542F\u52A8\u540E\uFF0C\u4F1A\u8FDB\u5165\u4E00\u4E2A\u4EA4\u4E92\u73AF\u5883\uFF0C\u4F9D\u6B21\u8F93\u5165\uFF1A <code>1 \\-&gt; yourname \\-&gt; youremail@qq.com</code>\uFF0C\u811A\u672C\u6700\u540E\u8F93\u51FA <code>this vim config is success !</code>\u8BF4\u660E\u5B89\u88C5\u6210\u529F\u3002\u5F88\u7B80\u5355\uFF0C\u53EA\u9700 3 \u4E2A\u9009\u62E9\u5373\u53EF\u5B89\u88C5\u6210\u529F\uFF0C\u914D\u7F6E IDE so easy\u3002</p><h2 id="vim-ide-\u5E38\u7528\u529F\u80FD" tabindex="-1">Vim IDE \u5E38\u7528\u529F\u80FD <a class="header-anchor" href="#vim-ide-\u5E38\u7528\u529F\u80FD" aria-hidden="true">#</a></h2><p>\u5728 Go \u9879\u76EE\u5F00\u53D1\u4E2D\u6700\u5E38\u7528\u7684\u529F\u80FD\u662F\uFF1A</p><ul><li><code>gd</code> \u6216\u8005<code>ctrl + ]</code> \u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u51FD\u6570\u5B9A\u4E49\u5904</li><li><code>ctrl + t</code> \u6807\u7B7E\u9000\u6808</li><li><code>ctrl + o</code> \u8DF3\u8F6C\u5230\u524D\u4E00\u4E2A\u4F4D\u7F6E</li><li><code>&lt;F4&gt;</code> \u6700\u8FD1\u6587\u4EF6\u5217\u8868</li><li><code>&lt;F5&gt;</code> \u5728 Vim \u7684\u4E0A\u9762\u6253\u5F00\u6587\u4EF6\u67E5\u627E\u7A97\u53E3</li><li><code>&lt;F9&gt;</code> \u751F\u6210\u4F9B\u51FD\u6570\u8DF3\u8F6C\u7684 tag</li><li><code>&lt;F2&gt;</code> \u6253\u5F00\u76EE\u5F55\u7A97\u53E3\uFF0C\u518D\u6309\u4F1A\u5173\u95ED\u76EE\u5F55\u7A97\u53E3</li><li><code>&lt;F6&gt;</code> \u6DFB\u52A0\u51FD\u6570\u6CE8\u91CA</li></ul><blockquote><p>\u5728\u4EE3\u7801\u95F4\u8DF3\u6765\u8DF3\u53BB\uFF0C\u5C06\u5149\u6807\u653E\u5728\u67D0\u4E2A\u51FD\u6570\u8C03\u7528\u4E0A\uFF0C\u6309 <code>ctl + ]</code> \u5C31\u4F1A\u8DF3\u5230\u51FD\u6570\u7684\u5B9A\u4E49\u5904\uFF0C\u6309 <code>ctrl + o</code> \u5C31\u4F1A\u8DF3\u56DE\u6765\u3002</p><p>\u66F4\u591A Go vim ide \u529F\u80FD\u8BF7\u53C2\u8003 <a href="https://github.com/lexkong/lexVim/blob/master/doc/ide.md" target="_blank" rel="noreferrer">Vim IDE \u529F\u80FD</a>\u3002</p></blockquote><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u201C\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002\u201D\u5728\u5F00\u59CB Go \u5F00\u53D1\u4E4B\u524D\uFF0C\u9700\u8981\u5B89\u88C5\u57FA\u672C\u7684 Go \u7F16\u8BD1\u5DE5\u5177\uFF0C\u8BBE\u7F6E\u57FA\u672C\u7684\u73AF\u5883\u53D8\u91CF\u3002\u5982\u679C\u6709\u4E00\u4E2A\u987A\u624B\u7684\u5F00\u53D1\u5DE5\u5177\u5C31\u66F4\u597D\u4E86\u3002\u8BE5\u5C0F\u8282\u5411\u8BFB\u8005\u4ECB\u7ECD\u4E86\uFF1A</p><ol><li>\u5982\u4F55\u5B89\u88C5 Go \u7F16\u8BD1\u73AF\u5883</li><li>\u5982\u4F55\u914D\u7F6E Vim IDE</li></ol><p>\u5F00\u5934\u7684\u8FD9 4 \u5C0F\u8282\u4ECB\u7ECD\u4E86 API \u5F00\u53D1\u7684\u4E00\u4E9B\u57FA\u672C\u7684\u77E5\u8BC6\uFF0C\u5E76\u505A\u4E86\u5F00\u53D1\u524D\u7684\u51C6\u5907\u5DE5\u4F5C\uFF0C\u63A5\u4E0B\u6765\u5F00\u59CB API \u5F00\u53D1\u5B9E\u6218\uFF0C\u4E00\u6B65\u4E00\u6B65\u6559\u4F60\u6784\u5EFA\u4E00\u4E2A\u8D26\u53F7\u7BA1\u7406\u7684 API \u670D\u52A1\uFF0C\u6EE1\u6EE1\u7684\u5E72\u8D27\u7B49\u4F60\u6765 Get\u3002</p>`,43),c=[n];function p(i,t,r,d,g,A){return s(),o("div",null,c)}const m=e(l,[["render",p]]);export{h as __pageData,m as default};
