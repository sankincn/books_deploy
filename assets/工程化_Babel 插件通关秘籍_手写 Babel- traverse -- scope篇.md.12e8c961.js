import{_ as s,c as n,o as a,d as p}from"./app.c4f45da1.js";const C=JSON.parse('{"title":"\u624B\u5199 Babel- traverse -- scope\u7BC7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":2,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0","link":"#\u4EE3\u7801\u5B9E\u73B0","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/\u624B\u5199 Babel- traverse -- scope\u7BC7.md"}'),l={name:"\u5DE5\u7A0B\u5316/Babel \u63D2\u4EF6\u901A\u5173\u79D8\u7C4D/\u624B\u5199 Babel- traverse -- scope\u7BC7.md"},o=p(`<h1 id="\u624B\u5199-babel-traverse-scope\u7BC7" tabindex="-1">\u624B\u5199 Babel- traverse -- scope\u7BC7 <a class="header-anchor" href="#\u624B\u5199-babel-traverse-scope\u7BC7" aria-hidden="true">#</a></h1><hr><p>path.scope \u4E2D\u8BB0\u5F55\u7740\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u6570\u636E\uFF0C\u901A\u8FC7 scope \u53EF\u4EE5\u62FF\u5230\u6574\u6761\u4F5C\u7528\u57DF\u94FE\uFF0C\u5305\u62EC\u58F0\u660E\u7684\u53D8\u91CF\u548C\u5BF9\u8BE5\u58F0\u660E\u7684\u5F15\u7528\u3002</p><p>\u8FD9\u8282\u6211\u4EEC\u5B9E\u73B0\u4E0B scope\u3002</p><h2 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h2><p>\u524D\u9762\u6211\u4EEC\u5B9E\u73B0\u4E86 traverse \u548C path\uFF0C\u80FD\u591F\u904D\u5386 AST \u548C\u5BF9 AST \u589E\u5220\u6539\u4E86\uFF0C\u800C scope \u548C path \u4E00\u6837\u4E5F\u662F\u904D\u5386\u8FC7\u7A0B\u4E2D\u8BB0\u5F55\u7684\u4FE1\u606F\u3002</p><p>\u80FD\u751F\u6210 scope \u7684 AST \u53EB\u505A block\uFF0C\u6BD4\u5982 FunctionDeclaration \u5C31\u662F block\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684 scope\u3002</p><p>\u6211\u4EEC\u628A\u8FD9\u7C7B\u8282\u70B9\u8BB0\u5F55\u4E0B\u6765\uFF0C\u904D\u5386\u7684\u65F6\u5019\u9047\u5230 block \u8282\u70B9\u4F1A\u751F\u6210\u65B0\u7684 scope\uFF0C\u5426\u5219\u62FF\u4E4B\u524D\u7684 scope\u3002</p><p>scope \u4E2D\u8BB0\u5F55\u7740 bindings\uFF0C\u4E5F\u5C31\u662F\u58F0\u660E\uFF0C\u6BCF\u4E2A\u58F0\u660E\u4F1A\u8BB0\u5F55\u5728\u54EA\u91CC\u58F0\u660E\u7684\uFF0C\u88AB\u54EA\u91CC\u5F15\u7528\u7684\u3002</p><p>\u9047\u5230 block \u8282\u70B9\uFF0C\u521B\u5EFA scope \u7684\u65F6\u5019\uFF0C\u8981\u904D\u5386\u4F5C\u7528\u57DF\u4E2D\u7684\u6240\u6709\u58F0\u660E\uFF08VariableDeclaraion\u3001FunctionDeclaration\uFF09\uFF0C\u8BB0\u5F55\u8BE5 binding \u5230 scope \u4E2D\u3002</p><p>\u8BB0\u5F55\u5B8C bindings \u4E4B\u540E\u8FD8\u8981\u518D\u904D\u5386\u4E00\u6B21\u8BB0\u5F55\u5F15\u7528\u8FD9\u4E9B binding \u7684 reference\u3002</p><p>\u57FA\u4E8E\u8FD9\u79CD\u601D\u8DEF\u6211\u4EEC\u5C31\u80FD\u5B9E\u73B0 scope \u7684\u529F\u80FD\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C\u521B\u5EFA Binding \u7C7B\u548C Scope \u7C7B\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Binding</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">scope</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">kind</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">referenced</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">referencePaths</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scope</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">parentScope</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentScope</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">bindings</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">registerBinding</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">bindings</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Binding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getOwnBinding</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">bindings</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getBinding</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getOwnBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hasBinding</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!!this.</span><span style="color:#82AAFF;">getBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>bindings \u662F\u8BB0\u5F55\u4F5C\u7528\u57DF\u4E2D\u7684\u6BCF\u4E00\u4E2A\u58F0\u660E\uFF0C\u540C\u65F6\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5B9E\u73B0 \u6DFB\u52A0\u58F0\u660E registerBinding\u3001\u67E5\u627E\u58F0\u660E getBinding\u3001getOwnBinding\u3001hasBidning \u7684\u65B9\u6CD5\u3002</p><p>getOwnBing \u662F\u53EA\u4ECE\u5F53\u524D scope \u67E5\u627E\uFF0C\u800C getBinding \u5219\u662F\u987A\u7740\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u67E5\u627E\u3002</p><p>\u4E4B\u540E\u6211\u4EEC\u5728 path \u91CC\u9762\u5B9A\u4E49\u4E00\u4E2A scope \u7684 get \u7684\u65B9\u6CD5\uFF0C\u5F53\u9700\u8981\u7528\u5230 scope \u7684\u65F6\u5019\u624D\u4F1A\u521B\u5EFA\uFF0C\u56E0\u4E3A scope \u521B\u5EFA\u4E4B\u540E\u8FD8\u8981\u904D\u5386\u67E5\u627E bindings\uFF0C\u662F\u6BD4\u8F83\u8017\u65F6\u7684\uFF0C\u5B9E\u73B0 get \u53EF\u4EE5\u505A\u5230\u7528\u5230\u7684\u65F6\u5019\u624D\u521B\u5EFA\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">get </span><span style="color:#82AAFF;">scope</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">__scope</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">__scope</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBlock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">isBlock</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentScope</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parentPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">parentPath</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scope</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">__scope</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBlock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Scope</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">parentScope</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentScope</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u7684 isBlock \u65B9\u6CD5\u7684\u5B9E\u73B0\u5C31\u662F\u4ECE\u6211\u4EEC\u8BB0\u5F55\u7684\u6570\u636E\u4E2D\u67E5\u627E\u8BE5\u8282\u70B9\u662F\u5426\u662F block\uFF0C\u4E5F\u5C31\u662F\u662F\u5426\u662F\u51FD\u6570\u58F0\u660E\u8FD9\u79CD\u80FD\u751F\u6210\u4F5C\u7528\u57DF\u7684\u8282\u70B9\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#82AAFF;">isBlock</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">types</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visitorKeys</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isBlock</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u5728\u8BB0\u5F55\u8282\u70B9\u7684\u904D\u5386\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u4E5F\u8BB0\u5F55\u4E86\u8BE5\u8282\u70B9\u662F\u5426\u662F block\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">astDefinationsMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Program</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">visitor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isBlock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">astDefinationsMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FunctionDeclaration</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">visitor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">params</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isBlock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u5F53\u904D\u5386\u5230 block \u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u521B\u5EFA Scope \u5BF9\u8C61\uFF0C\u7136\u540E\u548C\u5F53\u524D Scope \u5173\u8054\u8D77\u6765\uFF0C\u5F62\u6210\u4F5C\u7528\u57DF\u94FE\u3002</p><p>scope \u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\u6211\u4EEC\u8981\u626B\u63CF\u4F5C\u7528\u57DF\u4E2D\u6240\u6709\u7684\u58F0\u660E\uFF0C\u8BB0\u5F55\u5230 scope\u3002\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u56E0\u4E3A\u9047\u5230\u51FD\u6570\u4F5C\u7528\u57DF\u8981\u8DF3\u8FC7\u904D\u5386\uFF0C\u56E0\u4E3A\u5B83\u6709\u81EA\u5DF1\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">traverse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">VariableDeclarator</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">registerBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">childPath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FunctionDeclaration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">skip</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">registerBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">childPath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8BB0\u5F55\u5B8C binding \u4E4B\u540E\uFF0C\u518D\u626B\u63CF\u6240\u6709\u5F15\u7528\u8BE5 binding \u7684\u5730\u65B9\uFF0C\u4E5F\u5C31\u662F\u626B\u63CF\u6240\u6709\u7684 identifier\u3002</p><p>\u8FD9\u91CC\u8981\u6392\u9664\u58F0\u660E\u8BED\u53E5\u91CC\u9762\u7684 identifier\uFF0C\u90A3\u4E2A\u662F\u5B9A\u4E49\u53D8\u91CF\u4E0D\u662F\u5F15\u7528\u53D8\u91CF\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">traverse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Identifier</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">childPath</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findParent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isVariableDeclarator</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isFunctionDeclaration</span><span style="color:#F07178;">())) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">childPath</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">binding</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getBinding</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">binding</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">referenced</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">referencePaths</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">childPath</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u4F5C\u7528\u57DF\u94FE path.scope\uFF0C\u53EF\u4EE5\u5728 visitor \u4E2D\u5206\u6790\u4F5C\u7528\u57DF\u4E86\u3002</p><p>\u6BD4\u5982\u5220\u9664\u6389\u672A\u88AB\u5F15\u7528\u7684\u53D8\u91CF\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#82AAFF;">traverse</span><span style="color:#A6ACCD;">(ast</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Program</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scope</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bindings</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">])</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">referenced</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">FunctionDeclaration</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scope</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bindings</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">])</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">referenced</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>scope \u662F\u4F5C\u7528\u57DF\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u8BB0\u5F55\u7740\u6BCF\u4E00\u4E2A\u58F0\u660E\uFF08binding\uFF09\u548C\u5BF9\u8BE5\u58F0\u660E\u7684\u5F15\u7528\uFF08reference\uFF09\u3002</p><p>\u53EA\u6709 block \u8282\u70B9\u9700\u8981\u751F\u6210 scope\uFF0C\u6240\u4EE5\u6211\u4EEC\u4F1A\u8BB0\u5F55\u4EC0\u4E48\u8282\u70B9\u662F block \u8282\u70B9\uFF0C\u9047\u5230 block \u8282\u70B9\u4F1A\u751F\u6210 scope\uFF0C\u5426\u5219\u62FF\u4E4B\u524D\u7684\u3002</p><p>\u56E0\u4E3A scope \u4F1A\u904D\u5386 AST \u6765\u6CE8\u518C binding\uFF0C\u8FD8\u662F\u6BD4\u8F83\u8017\u65F6\u7684\u3002\u6211\u4EEC\u5728 path \u4E2D\u5B9A\u4E49\u4E86 scope \u7684 get \u65B9\u6CD5\uFF0C\u7528\u5230\u7684\u65F6\u5019\u624D\u4F1A\u521B\u5EFA scope\u3002</p><p>\u521B\u5EFA scope \u65F6\u4F1A\u626B\u63CF\u4F5C\u7528\u57DF\u4E2D\u7684\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E\uFF0C\u8BB0\u5F55\u5230 bindings \u4E2D\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86 getBinding\u3001getOwnBinding\u3001hasBinding\u3001registerBinding \u7B49\u65B9\u6CD5\u3002</p><p>\u4E4B\u540E\u518D\u6B21\u626B\u63CF\u4F5C\u7528\u57DF\uFF0C\u627E\u5230\u6240\u6709\u5F15\u7528\u8FD9\u4E9B binding \u7684 identifier\uFF0C\u8BB0\u5F55\u5230 reference \u4E2D\u3002</p><p>\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 visitor \u4E2D\u5206\u6790 scope \u6765\u5B9E\u73B0\u7C7B\u4F3C\u6B7B\u4EE3\u7801\u5220\u9664\u7B49\u529F\u80FD\u4E86\u3002</p><p>\uFF08\u4EE3\u7801\u5728<a href="https://github.com/QuarkGluonPlasma/babel-plugin-exercize" target="_blank" rel="noreferrer">\u8FD9\u91CC</a>\uFF0C\u5EFA\u8BAE git clone \u4E0B\u6765\u901A\u8FC7 node \u8DD1\u4E00\u4E0B\uFF09</p>`,41),e=[o];function c(t,r,F,D,y,A){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{C as __pageData,d as default};
