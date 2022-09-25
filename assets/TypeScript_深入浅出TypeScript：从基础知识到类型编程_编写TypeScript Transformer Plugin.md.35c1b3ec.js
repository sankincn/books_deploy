import{_ as s,c as n,o as a,d as e}from"./app.c4f45da1.js";const u=JSON.parse('{"title":"\u7F16\u5199TypeScript Transformer Plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"AST\u904D\u5386","slug":"ast\u904D\u5386","link":"#ast\u904D\u5386","children":[]},{"level":2,"title":"\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F","slug":"\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F","link":"#\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F","children":[]},{"level":2,"title":"\u7F16\u5199 transformer Plugin","slug":"\u7F16\u5199-transformer-plugin","link":"#\u7F16\u5199-transformer-plugin","children":[{"level":3,"title":"\u76EE\u6807","slug":"\u76EE\u6807","link":"#\u76EE\u6807","children":[]},{"level":3,"title":"\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48","slug":"\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48","link":"#\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48","children":[]},{"level":3,"title":"\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9","slug":"\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9","link":"#\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9","children":[]},{"level":3,"title":"\u5982\u4F55\u521B\u5EFA\u8282\u70B9","slug":"\u5982\u4F55\u521B\u5EFA\u8282\u70B9","link":"#\u5982\u4F55\u521B\u5EFA\u8282\u70B9","children":[]},{"level":3,"title":"\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B","slug":"\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B","link":"#\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B","children":[]},{"level":3,"title":"\u5982\u4F55\u66F4\u65B0 ImportDeclaration \u8282\u70B9","slug":"\u5982\u4F55\u66F4\u65B0-importdeclaration-\u8282\u70B9","link":"#\u5982\u4F55\u66F4\u65B0-importdeclaration-\u8282\u70B9","children":[]},{"level":3,"title":"\u6539\u8FDB","slug":"\u6539\u8FDB","link":"#\u6539\u8FDB","children":[]}]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u7F16\u5199TypeScript Transformer Plugin.md"}'),l={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/\u7F16\u5199TypeScript Transformer Plugin.md"},p=e(`<h1 id="\u7F16\u5199typescript-transformer-plugin" tabindex="-1">\u7F16\u5199TypeScript Transformer Plugin <a class="header-anchor" href="#\u7F16\u5199typescript-transformer-plugin" aria-hidden="true">#</a></h1><hr><h1 id="\u7F16\u5199typescript-transformer-plugin-1" tabindex="-1">\u7F16\u5199TypeScript Transformer Plugin <a class="header-anchor" href="#\u7F16\u5199typescript-transformer-plugin-1" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86,TypeScript\u7684\u8F6C\u5316\u539F\u7406\u4E0EBabel\u5176\u5B9E\u662F\u8FD1\u4F3C\u7684:</p><ol><li>\u5148\u628A\u6E90\u4EE3\u7801\u89E3\u6790\u4E3Atoken\u6D41,\u7136\u540E\u751F\u6210AST</li><li>\u901A\u8FC7\u8BBF\u95EE\u8005\u6A21\u5F0F\u8BBF\u95EEAST\u8282\u70B9\u5E76\u4FEE\u6539\u751F\u6210\u65B0\u7684AST</li><li>\u901A\u8FC7\u65B0\u7684AST\u751F\u6210js\u4EE3\u7801</li></ol><h2 id="ast\u904D\u5386" tabindex="-1">AST\u904D\u5386 <a class="header-anchor" href="#ast\u904D\u5386" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u73B0\u5728\u5C31\u7B80\u5355\u5730\u8FDB\u884C\u4E00\u4E2A\u5C0F\u7684\u64CD\u4F5C,\u5148\u770B\u4E0B\u9762\u7684\u4EE3\u7801:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function add(x: number, y: number): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return x + y</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5148\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u5DE5\u4F5C,\u5C31\u662F\u904D\u5386<code>index.ts</code>\u6587\u4EF6\u4E2D\u7684\u5404\u4E2AAST\u8282\u70B9.</p><p>\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6<code>transformer.ts</code>,\u5728\u8FD9\u91CC\u6211\u4EEC\u5C06\u8FDB\u884C\u5BF9AST\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// transformer.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import ts from &quot;typescript&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5F15\u5165\u76EE\u6807\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">const filePath = &quot;./index.ts&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA\u4E00\u4E2A program \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">const program = ts.createProgram([filePath], {});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E3A\u6211\u4EEC\u7684 program \u505A\u4E00\u4E2A\u7C7B\u578B\u68C0\u67E5\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">const checker = program.getTypeChecker();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u83B7\u53D6 index.ts \u6E90\u4EE3\u7801\u7684AST</span></span>
<span class="line"><span style="color:#A6ACCD;">const source = program.getSourceFile(filePath);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u521B\u5EFA printer\u5B9E\u4F8B\u4E3A\u6211\u4EEC\u6253\u5370\u6700\u540E\u7684ast</span></span>
<span class="line"><span style="color:#A6ACCD;">const printer = ts.createPrinter();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6211\u4EEC\u63D0\u4F9B\u7ED9\u5B9A\u7C7B\u578B\u7684\u8282\u70B9\u5B57\u7B26\u4E32\u7684\u5C0F\u52A9\u624B</span></span>
<span class="line"><span style="color:#A6ACCD;">const syntaxToKind = (kind: ts.Node[&quot;kind&quot;]) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return ts.SyntaxKind[kind];</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4ECE\u6839\u8282\u70B9\u5F00\u59CB\u904D\u5386\u5E76\u6253\u5370</span></span>
<span class="line"><span style="color:#A6ACCD;">ts.forEachChild(source!, node =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(syntaxToKind(node.kind));</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7ED3\u679C\u5982\u4E0B:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb1537911d335~tplv-t2oaga2asx-image.image" alt="\u7ED3\u679C"></p><p>\u6211\u4EEC\u770B\u5230\u901A\u8FC7\u904D\u5386\u6211\u4EEC\u83B7\u5F97\u4E86AST\u4E0A\u7684\u8282\u70B9,\u9996\u5148\u662F\u4E24\u4E2A\u53D8\u91CF\u58F0\u660E(VariableStatement):</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u7740\u662F\u4E00\u4E2A\u51FD\u6570\u58F0\u660E(FunctionDeclaration):</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function add(x: number, y: number): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return x + y</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\u7684<code>EndOfFileToken</code>\u76F8\u5F53\u4E8E\u7ED3\u675F\u6807\u5FD7.</p><h2 id="\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F" tabindex="-1">\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F <a class="header-anchor" href="#\u9009\u62E9\u8F6C\u6362\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u521A\u624D\u76F4\u63A5\u5229\u7528\u4E86TypeScript\u63D0\u4F9B\u7684API\u8FDB\u884C\u4E86AST\u7684\u904D\u5386\u64CD\u4F5C,\u4F46\u662F\u5982\u679C\u6D89\u53CA\u5230\u8F6C\u6362\u64CD\u4F5C,\u4F9D\u7136\u7528TypeScript\u7684API\u8FDB\u884C\u88F8\u64CD\u4F5C\u4F1A\u5F88\u9EBB\u70E6,\u6709\u6CA1\u6709\u66F4\u65B9\u4FBF\u7684\u65B9\u6CD5?</p><p>\u76EE\u524DTS\u8F6C\u6362\u6709\u4EE5\u4E0B\u4E09\u79CD\u4E3B\u6D41\u7684\u65B9\u5F0F:</p><ul><li>\u9002\u7528\u4E8EWebpack\u751F\u6001\u7CFB\u7EDF\u7684<a href="https://github.com/TypeStrong/ts-loader" target="_blank" rel="noreferrer">ts-loader</a></li><li>\u4F7F\u7528<a href="https://github.com/cevek/ttypescript" target="_blank" rel="noreferrer">ttypescript</a>\u4EE3\u66FFtsc</li><li>\u7F16\u5199\u81EA\u5DF1\u7684\u7F16\u8BD1\u5668\u5305\u88C5\u5668</li></ul><p>\u5176\u4E2D\u5E94\u7528\u6700\u5E7F\u6CDB\u3001\u751F\u6001\u6700\u5B8C\u5584\u7684\u5F53\u5C5E<code>ts-loader</code>+ <code>webpack</code>.</p><p>\u5176\u5B9E\u8FD8\u6709\u4E00\u4E2A\u91CD\u8981\u539F\u56E0\u5C31\u662F\u6211\u4EEC\u76EE\u524D\u7684\u524D\u7AEF\u5F00\u53D1\u4E3B\u8981\u501F\u52A9\u7684\u5C31\u662Fwebpack\u6253\u5305\u5668,\u9009\u62E9\u8FD9\u79CD\u65B9\u5F0F\u66F4\u52A0\u8D34\u8FD1\u5B9E\u9645\u5F00\u53D1.</p><p>\u5B83\u7684\u4F7F\u7528\u65B9\u5F0F\u5F88\u7B80\u5355,\u7ED9 ts-loader \u914D\u7F6E <code>getCustomTransformers</code>\u7684\u9009\u9879:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  test: /\\.tsx?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">  loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ... // other loader&#39;s options</span></span>
<span class="line"><span style="color:#A6ACCD;">    getCustomTransformers: () =&gt; ({ before: [yourImportedTransformer] })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u8BE6\u89C1<a href="https://github.com/TypeStrong/ts-loader" target="_blank" rel="noreferrer">ts-loader</a></p></blockquote><h2 id="\u7F16\u5199-transformer-plugin" tabindex="-1">\u7F16\u5199 transformer Plugin <a class="header-anchor" href="#\u7F16\u5199-transformer-plugin" aria-hidden="true">#</a></h2><h3 id="\u76EE\u6807" tabindex="-1">\u76EE\u6807 <a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u8981\u5B9E\u73B0\u5982\u4E0B\u8F6C\u6362\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// before</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// after</span></span>
<span class="line"><span style="color:#A6ACCD;">import Button from &#39;antd/lib/button&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48" tabindex="-1">\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48 <a class="header-anchor" href="#\u4E86\u89E3\u9700\u8981\u6539\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>Custom Transformer \u64CD\u4F5C\u662F AST\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u4EE3\u7801\u8F6C\u6362\u524D\u540E\u7684 AST \u533A\u522B\u5728\u54EA\u91CC.</p><p>\u8F6C\u6362\u524D\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE3\u7801\u7684 AST \u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb153794c07ff~tplv-t2oaga2asx-image.image" alt=""></p><p>\u8F6C\u6362\u540E:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import Button from &#39;antd/lib/button&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE3\u7801\u7684 AST \u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb15379ccae52~tplv-t2oaga2asx-image.image" alt=""></p><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u7684\u8F6C\u6362\u6709\u4E24\u5904\uFF1A</p><ul><li>\u66FF\u6362 ImportClause \u7684\u5B50\u8282\u70B9\uFF0C\u4F46\u4FDD\u7559\u5176\u4E2D\u7684 Identifier</li><li>\u66FF\u6362 StringLiteral \u4E3A\u539F\u6765\u7684\u503C\u52A0\u4E0A\u4E0A\u9762\u7684 Identifier</li></ul><p>\u90A3\u4E48\uFF0C\u8BE5\u5982\u4F55\u627E\u5230\u5E76\u66FF\u6362\u5BF9\u5E94\u7684\u8282\u70B9\u5462\uFF1F</p><h3 id="\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9" tabindex="-1">\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9 <a class="header-anchor" href="#\u5982\u4F55\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9" aria-hidden="true">#</a></h3><p>TS \u63D0\u4F9B\u4E86\u4E24\u4E2A\u65B9\u6CD5\u904D\u5386 AST\uFF1A</p><ul><li>ts.forEachChild</li><li>ts.visitEachChild</li></ul><p>\u4E24\u4E2A\u65B9\u6CD5\u7684\u533A\u522B\u662F:</p><p><code>forEachChild</code> \u53EA\u80FD\u904D\u5386 AST\uFF0C<code>visitEachChild</code> \u5728\u904D\u5386\u7684\u540C\u65F6\uFF0C\u63D0\u4F9B\u7ED9\u6B64\u65B9\u6CD5\u7684 <code>visitor</code> \u56DE\u8C03\u7684\u8FD4\u56DE\u8282\u70B9\uFF0C\u4F1A\u88AB\u7528\u6765\u66FF\u6362\u5F53\u524D\u904D\u5386\u7684\u8282\u70B9\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 <code>visitEachChild</code> \u6765\u904D\u5386\u5E76\u66FF\u6362\u8282\u70B9.</p><p>\u5148\u770B\u4E00\u4E0B\u8FD9\u4E2A\u65B9\u6CD5\u7684\u7B7E\u540D\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param node The Node whose children will be visited.</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param visitor The callback used to visit each child.</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param context A lexical environment context for the visitor.</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">function visitEachChild&lt;T extends Node&gt;(node: T, visitor: Visitor, context: TransformationContext): T</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5047\u8BBE\u6211\u4EEC\u5DF2\u7ECF\u62FF\u5230\u4E86 AST \u7684\u6839\u8282\u70B9 SourceFile \u548C <code>TransformationContext</code>\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u904D\u5386 AST\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ts.visitEachChild(SourceFile, visitor, ctx)</span></span>
<span class="line"><span style="color:#A6ACCD;">function visitor(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(node.getChildCount()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return ts.visitEachChild(node, visitor, ctx)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return node</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610F\uFF1Avisitor \u7684\u8FD4\u56DE\u8282\u70B9\u4F1A\u88AB\u7528\u6765\u66FF\u6362 visitor \u6B63\u5728\u8BBF\u95EE\u7684\u8282\u70B9.</p><h3 id="\u5982\u4F55\u521B\u5EFA\u8282\u70B9" tabindex="-1">\u5982\u4F55\u521B\u5EFA\u8282\u70B9 <a class="header-anchor" href="#\u5982\u4F55\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a></h3><p>TS \u4E2D AST \u8282\u70B9\u7684\u5DE5\u5382\u51FD\u6570\u5168\u90FD\u4EE5 create \u5F00\u5934\uFF0C\u5728\u7F16\u8F91\u5668\u91CC\u6572\u4E0B\uFF1Ats.create\uFF0C\u4EE3\u7801\u8865\u5168\u5217\u8868\u91CC\u5C31\u80FD\u770B\u5230\u5F88\u591A\u5F88\u591A\u548C\u8282\u70B9\u521B\u5EFA\u6709\u5173\u7684\u65B9\u6CD5\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/11/16dbb15379d493ca~tplv-t2oaga2asx-image.image" alt=""></p><p>\u6BD4\u5982\uFF0C\u521B\u5EFA\u4E00\u4E2A 1+2 \u7684\u8282\u70B9:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ts.createAdd(ts.createNumericLiteral(&#39;1&#39;), ts.createNumericLiteral(&#39;2&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B" tabindex="-1">\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B <a class="header-anchor" href="#\u5982\u4F55\u5224\u65AD\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u524D\u9762\u8BF4\u8FC7\uFF0Cts.SyntaxKind\u91CC\u5B58\u50A8\u4E86\u6240\u6709\u7684\u8282\u70B9\u7C7B\u578B\u3002\u540C\u65F6\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4E2D\u90FD\u6709\u4E00\u4E2A kind \u5B57\u6BB5\u6807\u660E\u5B83\u7684\u7C7B\u578B\u3002\u6211\u4EEC\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u5224\u65AD\u8282\u70B9\u7C7B\u578B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(node.kind === ts.SyntaxKind.ImportDeclaration) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Get it!</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u7528 ts-is-kind \u6A21\u5757\u7B80\u5316\u5224\u65AD\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import * as kind from &#39;ts-is-kind&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(kind.isImportDeclaration(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Get it!</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u4E4B\u524D\u7684 visitor \u5C31\u53EF\u4EE5\u7EE7\u7EED\u8865\u5145\u4E0B\u53BB\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import * as kind from &#39;ts-is-kind&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">function visitor(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(kind.isImportDeclaration(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const updatedNode = updateImportNode(node, ctx)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return updateNode</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return node</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u56E0\u4E3A Import \u8BED\u53E5\u4E0D\u80FD\u5D4C\u5957\u5728\u5176\u4ED6\u8BED\u53E5\u4E0B\u9762\uFF0C\u6240\u4EE5 ImportDeclaration \u53EA\u4F1A\u51FA\u73B0\u5728 SourceFile \u7684\u4E0B\u4E00\u7EA7\u5B50\u8282\u70B9\u4E0A\uFF0C\u56E0\u6B64\u4E0A\u9762\u7684\u4EE3\u7801\u5E76\u6CA1\u6709\u5BF9 node \u505A\u6DF1\u5C42\u9012\u5F52\u904D\u5386\u3002</p><p>\u53EA\u8981 updateImportNode \u51FD\u6570\u5B8C\u6210\u4E86\u4E4B\u524D\u56FE\u4E2D\u8868\u73B0\u51FA\u7684 AST \u8F6C\u6362\uFF0C\u6211\u4EEC\u7684\u5DE5\u4F5C\u5C31\u5B8C\u6210\u4E86\u3002</p><h3 id="\u5982\u4F55\u66F4\u65B0-importdeclaration-\u8282\u70B9" tabindex="-1">\u5982\u4F55\u66F4\u65B0 ImportDeclaration \u8282\u70B9 <a class="header-anchor" href="#\u5982\u4F55\u66F4\u65B0-importdeclaration-\u8282\u70B9" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u5173\u6CE8 updateImportNode \u600E\u4E48\u5B9E\u73B0.</p><p>\u6211\u4EEC\u5DF2\u7ECF\u62FF\u5230\u4E86 ImportDeclaration \u8282\u70B9\uFF0C\u8FD8\u8BB0\u5F97\u5230\u5E95\u8981\u5E72\u4EC0\u4E48\u5417\uFF1F</p><ul><li>\u7528 Identifier \u66FF\u6362 NamedImports \u7684\u5B50\u8282\u70B9</li><li>\u4FEE\u6539 StringLiteral \u7684\u503C</li></ul><p>\u4E3A\u4E86\u65B9\u4FBF\u627E\u5230\u9700\u8981\u7684\u8282\u70B9\uFF0C\u6211\u4EEC\u5BF9 ImportDeclaration \u505A\u9012\u5F52\u904D\u5386\uFF0C\u53EA\u5BF9 NamedImports \u548C StringLiteral \u505A\u7279\u6B8A\u5904\u7406\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function updateImportNode(node: ts.Node, ctx: ts.TransformationContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const visitor: ts.Visitor = node =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (kind.isNamedImports(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (kind.isStringLiteral(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.getChildCount()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ts.visitEachChild(node, visitor, ctx)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return node</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9996\u5148\u5904\u7406 <code>NamedImports</code>:\u5728 AST explorer \u7684\u5E2E\u52A9\u4E0B\uFF0C\u53EF\u4EE5\u53D1\u73B0 <code>NamedImports</code> \u5305\u542B\u4E86\u4E09\u90E8\u5206\uFF0C\u4E24\u4E2A\u5927\u62EC\u53F7\u548C\u4E00\u4E2A\u53EB <code>Button</code> \u7684 <code>Identifier</code>\uFF0C\u6211\u4EEC\u5728 <code>isNamedImports</code> \u7684\u5224\u65AD\u4E0B\uFF0C\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A <code>Identifier</code>\uFF0C\u5C31\u53EF\u4EE5\u53D6\u4EE3\u539F\u5148\u7684 <code>NamedImports</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (kind.isNamedImports(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   const identifierName = node.getChildAt(1).getText()</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD4\u56DE\u7684\u8282\u70B9\u4F1A\u88AB\u7528\u4E8E\u53D6\u4EE3\u539F\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">  return ts.createIdentifier(identifierName)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u518D\u5904\u7406 <code>StringLiteral</code>:</p><p>\u53D1\u73B0\u8981\u8FD4\u56DE\u65B0\u7684 <code>StringLiteral</code>\uFF0C\u8981\u7528\u5230 isNamedImports \u5224\u65AD\u91CC\u63D0\u53D6\u51FA\u6765\u7684 <code>identifierName</code>.</p><p>\u56E0\u6B64\u6211\u4EEC\u5148\u628A identifierName \u63D0\u53D6\u5230\u5916\u5C42\u5B9A\u4E49\uFF0C\u4F5C\u4E3A updateImportNode \u7684\u5185\u90E8\u72B6\u6001.</p><p>\u540C\u65F6\uFF0C<code>antd/lib</code> \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u540D\u6CA1\u6709\u5927\u5199\u5B57\u6BCD\uFF0C\u56E0\u6B64\u8981\u628A identifierName \u4E2D\u9996\u5B57\u6BCD\u5927\u5199\u53BB\u6389\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (kind.isStringLiteral(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const libName = node.getText().replace(/[\\&quot;\\&#39;]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (identifierName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const fileName = camel2Dash(identifierName)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return ts.createLiteral(\`\${libName}/lib/\${fileName}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// from: https://github.com/ant-design/babel-plugin-import</span></span>
<span class="line"><span style="color:#A6ACCD;">function camel2Dash(_str: string) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const str = _str[0].toLowerCase() + _str.substr(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return str.replace(/([A-Z])/g, ($1) =&gt; \`-\${$1.toLowerCase()}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B8C\u6574\u7684 updateImportNode \u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function updateImportNode(node: ts.Node, ctx: ts.TransformationContext) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const visitor: ts.Visitor = node =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (kind.isNamedImports(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const identifierName = node.getChildAt(1).getText()</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ts.createIdentifier(identifierName)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (kind.isStringLiteral(node)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const libName = node.getText().replace(/[\\&quot;\\&#39;]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (identifierName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const fileName = camel2Dash(identifierName)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ts.createLiteral(\`\${libName}/lib/\${fileName}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (node.getChildCount()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ts.visitEachChild(node, visitor, ctx)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return node</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\uFF0C\u6211\u4EEC\u5C31\u6210\u529F\u5B9E\u73B0\u4E86\u5982\u4E0B\u4EE3\u7801\u8F6C\u6362\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// before</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// after</span></span>
<span class="line"><span style="color:#A6ACCD;">import Button from &#39;antd/lib/button&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6574\u5408\u8D77\u6765\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 Transformer Plugin\uFF0C\u5B8C\u6574\u4EE3\u7801\u8BF7\u89C1\uFF1A<a href="https://github.com/newraina/learning-ts-transfomer-plugin/blob/master/src/transformer.ts" target="_blank" rel="noreferrer">newraina/learning-ts-transfomer-plugin</a></p><h3 id="\u6539\u8FDB" tabindex="-1">\u6539\u8FDB <a class="header-anchor" href="#\u6539\u8FDB" aria-hidden="true">#</a></h3><p>\u521A\u624D\u5B9E\u73B0\u7684\u53EA\u662F\u4E00\u4E2A\u6700\u6700\u7CBE\u7B80\u7684\u7248\u672C\uFF0C\u8DDD\u79BB babel-plugin-import \u7684\u5B8C\u6574\u529F\u80FD\u8FD8\u6709\u5F88\u8FDC\uFF0C\u6BD4\u5982\uFF1A</p><ul><li>\u540C\u65F6 Import \u591A\u4E2A\u7EC4\u4EF6\u600E\u4E48\u529E\uFF0C\u5982<code>import { Button, Alert } from &#39;antd&#39;</code></li><li>Import \u65F6\u7528 as \u91CD\u547D\u540D\u4E86\u600E\u4E48\u529E\uFF0C\u5982<code>import { Button as Btn } from &#39;antd&#39;</code></li><li>\u5982\u679C CSS \u4E5F\u8981\u6309\u9700\u5F15\u5165\u600E\u4E48\u529E</li><li>\u2026</li></ul><p>\u4EE5\u4E0A\u90FD\u53EF\u4EE5\u5728 AST explorer \u7684\u5E2E\u52A9\u4E0B\u627E\u5230 AST \u8F6C\u6362\u524D\u540E\u7684\u533A\u522B\uFF0C\u7136\u540E\u6309\u7167\u672C\u6587\u4ECB\u7ECD\u7684\u6D41\u7A0B\u5B9E\u73B0\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u6587\u6211\u4EEC\u4E3B\u8981\u4ECB\u7ECD\u4E86TypeScript Transformer Plugin\u7684\u7F16\u5199\u65B9\u6CD5,\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684TypeScript Transformer Plugin\u5165\u624B\u5B66\u4E60,\u5C31\u6BD4\u5982<a href="https://github.com/Brooooooklyn/ts-import-plugin" target="_blank" rel="noreferrer">ts-import-plugin</a>\u3002</p><p>\u672C\u6587\u7684\u540E\u534A\u90E8\u5206\u6765\u6E90\u4E8E<a href="https://zhuanlan.zhihu.com/p/30360931" target="_blank" rel="noreferrer">\u5199\u4E00\u4E2ATypeScript Transformer Plugin</a>,\u539F\u56E0\u5728\u4E8E\u6211\u60F3\u5199\u4E00\u4E2ATS\u7248\u7684 <code>babel-plugin-import</code> \u4F5C\u4E3A\u6848\u4F8B,\u7136\u540E\u53D1\u73B0\u5DF2\u7ECF\u6709\u6587\u7AE0\u5199\u8FC7\u4E86\u800C\u4E14\u5199\u5F97\u4E0D\u9519\u3002</p>`,93),o=[p];function t(r,i,c,d,A,C){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
