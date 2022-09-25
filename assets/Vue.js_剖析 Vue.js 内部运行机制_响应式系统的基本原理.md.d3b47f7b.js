import{_ as s,c as e,o as a,d as n}from"./app.e5528619.js";const u=JSON.parse('{"title":"\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u54CD\u5E94\u5F0F\u7CFB\u7EDF","slug":"\u54CD\u5E94\u5F0F\u7CFB\u7EDF","link":"#\u54CD\u5E94\u5F0F\u7CFB\u7EDF","children":[]},{"level":2,"title":"Object.defineProperty","slug":"object-defineproperty","link":"#object-defineproperty","children":[]},{"level":2,"title":"\u5B9E\u73B0 observer\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09","slug":"\u5B9E\u73B0-observer\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09","link":"#\u5B9E\u73B0-observer\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09","children":[]}],"relativePath":"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406.md"}'),l={name:"Vue.js/\u5256\u6790 Vue.js \u5185\u90E8\u8FD0\u884C\u673A\u5236/\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406.md"},o=n(`<h1 id="\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406" tabindex="-1">\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a></h1><hr><h1 id="\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406-1" tabindex="-1">\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406-1" aria-hidden="true">#</a></h1><h2 id="\u54CD\u5E94\u5F0F\u7CFB\u7EDF" tabindex="-1">\u54CD\u5E94\u5F0F\u7CFB\u7EDF <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u7CFB\u7EDF" aria-hidden="true">#</a></h2><p>Vue.js \u662F\u4E00\u6B3E MVVM \u6846\u67B6\uFF0C\u6570\u636E\u6A21\u578B\u4EC5\u4EC5\u662F\u666E\u901A\u7684 JavaScript \u5BF9\u8C61\uFF0C\u4F46\u662F\u5BF9\u8FD9\u4E9B\u5BF9\u8C61\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u5374\u80FD\u5F71\u54CD\u5BF9\u5E94\u89C6\u56FE\uFF0C\u5B83\u7684\u6838\u5FC3\u5B9E\u73B0\u5C31\u662F\u300C<strong>\u54CD\u5E94\u5F0F\u7CFB\u7EDF</strong>\u300D\u3002\u5C3D\u7BA1\u6211\u4EEC\u5728\u4F7F\u7528 Vue.js \u8FDB\u884C\u5F00\u53D1\u65F6\u4E0D\u4F1A\u76F4\u63A5\u4FEE\u6539\u300C<strong>\u54CD\u5E94\u5F0F\u7CFB\u7EDF</strong>\u300D\uFF0C\u4F46\u662F\u7406\u89E3\u5B83\u7684\u5B9E\u73B0\u6709\u52A9\u4E8E\u907F\u5F00\u4E00\u4E9B\u5E38\u89C1\u7684\u300C<strong>\u5751</strong>\u300D\uFF0C\u4E5F\u6709\u52A9\u4E8E\u5728\u9047\u89C1\u4E00\u4E9B\u7422\u78E8\u4E0D\u900F\u7684\u95EE\u9898\u65F6\u53EF\u4EE5\u6DF1\u5165\u5176\u539F\u7406\u6765\u89E3\u51B3\u5B83\u3002</p><h2 id="object-defineproperty" tabindex="-1"><code>Object.defineProperty</code> <a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E0B <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noreferrer"><code>Object.defineProperty</code></a>\uFF0CVue.js\u5C31\u662F\u57FA\u4E8E\u5B83\u5B9E\u73B0\u300C<strong>\u54CD\u5E94\u5F0F\u7CFB\u7EDF</strong>\u300D\u7684\u3002</p><p>\u9996\u5148\u662F\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj: \u76EE\u6807\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    prop: \u9700\u8981\u64CD\u4F5C\u7684\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    descriptor: \u63CF\u8FF0\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    return value \u4F20\u5165\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(obj, prop, descriptor)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>descriptor\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u7B80\u5355\u4ECB\u7ECD\u51E0\u4E2A\u5C5E\u6027\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noreferrer">MDN \u6587\u6863</a>\u3002</p><ul><li><code>enumerable</code>\uFF0C\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\uFF0C\u9ED8\u8BA4 false\u3002</li><li><code>configurable</code>\uFF0C\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u4FEE\u6539\u6216\u8005\u5220\u9664\uFF0C\u9ED8\u8BA4 false\u3002</li><li><code>get</code>\uFF0C\u83B7\u53D6\u5C5E\u6027\u7684\u65B9\u6CD5\u3002</li><li><code>set</code>\uFF0C\u8BBE\u7F6E\u5C5E\u6027\u7684\u65B9\u6CD5\u3002</li></ul><h2 id="\u5B9E\u73B0-observer\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09" tabindex="-1">\u5B9E\u73B0 <code>observer</code>\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09 <a class="header-anchor" href="#\u5B9E\u73B0-observer\uFF08\u53EF\u89C2\u5BDF\u7684\uFF09" aria-hidden="true">#</a></h2><p>\u77E5\u9053\u4E86 <code>Object.defineProperty</code> \u4EE5\u540E\uFF0C\u6211\u4EEC\u6765\u7528\u5B83\u4F7F\u5BF9\u8C61\u53D8\u6210\u53EF\u89C2\u5BDF\u7684\u3002</p><p>\u8FD9\u4E00\u90E8\u5206\u7684\u5185\u5BB9\u6211\u4EEC\u5728\u7B2C\u4E8C\u5C0F\u8282\u4E2D\u5DF2\u7ECF\u521D\u6B65\u4ECB\u7ECD\u8FC7\uFF0C\u5728 <code>init</code> \u7684\u9636\u6BB5\u4F1A\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u300C<strong>\u54CD\u5E94\u5F0F\u5316</strong>\u300D\u3002</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/19/1606e8abbababbe6~tplv-t2oaga2asx-image.image" alt=""></p><p>\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u6211\u4EEC\u4E0D\u8003\u8651\u6570\u7EC4\u7B49\u590D\u6742\u7684\u60C5\u51B5\uFF0C\u53EA\u5BF9\u5BF9\u8C61\u8FDB\u884C\u5904\u7406\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A <code>cb</code> \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7528\u6765\u6A21\u62DF\u89C6\u56FE\u66F4\u65B0\uFF0C\u8C03\u7528\u5B83\u5373\u4EE3\u8868\u66F4\u65B0\u89C6\u56FE\uFF0C\u5185\u90E8\u53EF\u4EE5\u662F\u4E00\u4E9B\u66F4\u65B0\u89C6\u56FE\u7684\u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function cb (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* \u6E32\u67D3\u89C6\u56FE */</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;\u89C6\u56FE\u66F4\u65B0\u5566\uFF5E&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A <code>defineReactive</code> \uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u901A\u8FC7 <code>Object.defineProperty</code> \u6765\u5B9E\u73B0\u5BF9\u5BF9\u8C61\u7684\u300C<strong>\u54CD\u5E94\u5F0F</strong>\u300D\u5316\uFF0C\u5165\u53C2\u662F\u4E00\u4E2A obj\uFF08\u9700\u8981\u7ED1\u5B9A\u7684\u5BF9\u8C61\uFF09\u3001key\uFF08obj\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027\uFF09\uFF0Cval\uFF08\u5177\u4F53\u7684\u503C\uFF09\u3002\u7ECF\u8FC7 <code>defineReactive</code> \u5904\u7406\u4EE5\u540E\uFF0C\u6211\u4EEC\u7684 obj \u7684 key \u5C5E\u6027\u5728\u300C\u8BFB\u300D\u7684\u65F6\u5019\u4F1A\u89E6\u53D1 <code>reactiveGetter</code> \u65B9\u6CD5\uFF0C\u800C\u5728\u8BE5\u5C5E\u6027\u88AB\u300C\u5199\u300D\u7684\u65F6\u5019\u5219\u4F1A\u89E6\u53D1 <code>reactiveSetter</code> \u65B9\u6CD5\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function defineReactive (obj, key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(obj, key, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        enumerable: true,       /* \u5C5E\u6027\u53EF\u679A\u4E3E */</span></span>
<span class="line"><span style="color:#A6ACCD;">        configurable: true,     /* \u5C5E\u6027\u53EF\u88AB\u4FEE\u6539\u6216\u5220\u9664 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        get: function reactiveGetter () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return val;         /* \u5B9E\u9645\u4E0A\u4F1A\u4F9D\u8D56\u6536\u96C6\uFF0C\u4E0B\u4E00\u5C0F\u8282\u4F1A\u8BB2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        set: function reactiveSetter (newVal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (newVal === val) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            cb(newVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F53\u7136\u8FD9\u662F\u4E0D\u591F\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u4E0A\u9762\u518D\u5C01\u88C5\u4E00\u5C42 <code>observer</code> \u3002\u8FD9\u4E2A\u51FD\u6570\u4F20\u5165\u4E00\u4E2A value\uFF08\u9700\u8981\u300C<strong>\u54CD\u5E94\u5F0F</strong>\u300D\u5316\u7684\u5BF9\u8C61\uFF09\uFF0C\u901A\u8FC7\u904D\u5386\u6240\u6709\u5C5E\u6027\u7684\u65B9\u5F0F\u5BF9\u8BE5\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u901A\u8FC7 <code>defineReactive</code> \u5904\u7406\u3002\uFF08\u6CE8\uFF1A\u5B9E\u9645\u4E0A observer \u4F1A\u8FDB\u884C\u9012\u5F52\u8C03\u7528\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\u53BB\u6389\u4E86\u9012\u5F52\u7684\u8FC7\u7A0B\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function observer (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!value || (typeof value !== &#39;object&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.keys(value).forEach((key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        defineReactive(value, key, value[key]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6700\u540E\uFF0C\u8BA9\u6211\u4EEC\u7528 <code>observer</code> \u6765\u5C01\u88C5\u4E00\u4E2A Vue \u5427\uFF01</p><p>\u5728 Vue \u7684\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u5BF9 <code>options</code> \u7684 <code>data</code> \u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u91CC\u7684 <code>data</code> \u60F3\u5FC5\u5927\u5BB6\u5F88\u719F\u6089\uFF0C\u5C31\u662F\u5E73\u65F6\u6211\u4EEC\u5728\u5199 Vue \u9879\u76EE\u65F6\u7EC4\u4EF6\u4E2D\u7684 <code>data</code> \u5C5E\u6027\uFF08\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u91CC\u5F53\u4F5C\u4E00\u4E2A\u5BF9\u8C61\u6765\u7B80\u5355\u5904\u7406\uFF09\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Vue {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* Vue\u6784\u9020\u7C7B */</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this._data = options.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">        observer(this._data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u53EA\u8981 new \u4E00\u4E2A Vue \u5BF9\u8C61\uFF0C\u5C31\u4F1A\u5C06 <code>data</code> \u4E2D\u7684\u6570\u636E\u8FDB\u884C\u300C<strong>\u54CD\u5E94\u5F0F</strong>\u300D\u5316\u3002\u5982\u679C\u6211\u4EEC\u5BF9 <code>data</code> \u7684\u5C5E\u6027\u8FDB\u884C\u4E0B\u9762\u7684\u64CD\u4F5C\uFF0C\u5C31\u4F1A\u89E6\u53D1 <code>cb</code> \u65B9\u6CD5\u66F4\u65B0\u89C6\u56FE\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let o = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: &quot;I am test.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">o._data.test = &quot;hello,world.&quot;;  /* \u89C6\u56FE\u66F4\u65B0\u5566\uFF5E */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0C\u54CD\u5E94\u5F0F\u539F\u7406\u5DF2\u7ECF\u4ECB\u7ECD\u5B8C\u4E86\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5B66\u4E60\u300C<strong>\u54CD\u5E94\u5F0F\u7CFB\u7EDF</strong>\u300D\u7684\u53E6\u4E00\u90E8\u5206 \u2014\u2014\u300C<strong>\u4F9D\u8D56\u6536\u96C6</strong>\u300D\u3002</p><p>\u6CE8\uFF1A\u672C\u8282\u4EE3\u7801\u53C2\u8003<a href="https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86%E3%80%8B.js" target="_blank" rel="noreferrer">\u300A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u57FA\u672C\u539F\u7406\u300B</a>\u3002</p>`,29),p=[o];function c(t,r,i,d,A,C){return a(),e("div",null,p)}const b=s(l,[["render",c]]);export{u as __pageData,b as default};
