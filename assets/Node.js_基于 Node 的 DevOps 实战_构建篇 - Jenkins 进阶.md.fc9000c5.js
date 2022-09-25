import{_ as s,c as a,o as n,d as p}from"./app.c4f45da1.js";const d=JSON.parse('{"title":"\u6784\u5EFA\u7BC7 - Jenkins \u8FDB\u9636","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u6280\u672F\u65B9\u6848\u8BBE\u8BA1","slug":"\u6280\u672F\u65B9\u6848\u8BBE\u8BA1","link":"#\u6280\u672F\u65B9\u6848\u8BBE\u8BA1","children":[]},{"level":2,"title":"Jenkinsfile","slug":"jenkinsfile","link":"#jenkinsfile","children":[]},{"level":2,"title":"\u672C\u7AE0\u5C0F\u7ED3","slug":"\u672C\u7AE0\u5C0F\u7ED3","link":"#\u672C\u7AE0\u5C0F\u7ED3","children":[]}],"relativePath":"Node.js/\u57FA\u4E8E Node \u7684 DevOps \u5B9E\u6218/\u6784\u5EFA\u7BC7 - Jenkins \u8FDB\u9636.md"}'),l={name:"Node.js/\u57FA\u4E8E Node \u7684 DevOps \u5B9E\u6218/\u6784\u5EFA\u7BC7 - Jenkins \u8FDB\u9636.md"},e=p(`<h1 id="\u6784\u5EFA\u7BC7-jenkins-\u8FDB\u9636" tabindex="-1">\u6784\u5EFA\u7BC7 - Jenkins \u8FDB\u9636 <a class="header-anchor" href="#\u6784\u5EFA\u7BC7-jenkins-\u8FDB\u9636" aria-hidden="true">#</a></h1><hr><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u7AE0\u662F Docker \u7684\u4E00\u4E9B\u57FA\u7840\u7528\u6CD5\uFF0C \u5E76\u4E14\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7 Docker \u6784\u5EFA\u4E86\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u6253\u5305\u7684 Docker \u955C\u50CF\uFF0C\u90A3\u4E48\u672C\u7AE0\uFF0C\u672C\u5C06\u501F\u52A9 Jenkins \u7684 pipeline \u6D41\u6C34\u7EBF\uFF0C\u6784\u5EFA\u4E00\u5957\u9002\u914D\u591A\u7AEF\u7684 job\u3002</p><h2 id="\u6280\u672F\u65B9\u6848\u8BBE\u8BA1" tabindex="-1">\u6280\u672F\u65B9\u6848\u8BBE\u8BA1 <a class="header-anchor" href="#\u6280\u672F\u65B9\u6848\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>\u7167\u4F8B\uFF0C\u5728\u6B63\u5F0F\u5F00\u53D1\u4E4B\u524D\u8FDB\u884C\u4E86\u4E00\u8F6E\u6280\u672F\u9884\u7814\uFF0C\u5148\u5C06\u9884\u7814\u7684\u65B9\u6848\u7406\u4E00\u4E0B</p><h4 id="\u811A\u672C\u5168\u91CF\u6D41\u7A0B-when-\u6761\u4EF6" tabindex="-1">\u811A\u672C\u5168\u91CF\u6D41\u7A0B + when \u6761\u4EF6 <a class="header-anchor" href="#\u811A\u672C\u5168\u91CF\u6D41\u7A0B-when-\u6761\u4EF6" aria-hidden="true">#</a></h4><p>\u4E00\u4E2A pineline \u6D41\u6C34\u7EBF\u5C06\u6240\u6709\u7684\u72B6\u6001\u6D41\u7A0B\u90FD\u662F\u9884\u8BBE\u597D\u7684\uFF0C\u4F8B\u5982\u5168\u91CF\u7684\u6D41\u7A0B\u4ECE dev -&gt; test -&gt; deploy \u8FD9\u79CD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570 + when \u6761\u4EF6\u8BED\u53E5\u8DF3\u8FC7\u6307\u5B9A\u6D41\u7A0B</p><p>\u4F18\u52BF\uFF1A</p><p>\u8FD9\u4E2A\u65B9\u6848\u662F\u6700\u7B80\u5355\u7684\uFF0C\u540C\u65F6\u5F00\u53D1\u6210\u672C\u6700\u4F4E\u3002</p><p>\u52A3\u52BF\uFF1A</p><p>\u867D\u7136\u662F\u7B80\u5355\u7684\u65B9\u6848\uFF0C\u4F46\u662F\u811A\u672C\u76F8\u5BF9\u4E8E\u56FA\u5B9A\uFF0C\u5982\u679C\u6709\u5168\u65B0\u7684\u6D41\u7A0B\u662F\u9700\u8981\u91CD\u65B0\u5F00\u53D1\u65B0\u7684 pipeline \u6D41\u6C34\u7EBF\u3002</p><h4 id="pipeline-scm" tabindex="-1">pipeline scm <a class="header-anchor" href="#pipeline-scm" aria-hidden="true">#</a></h4><p>\u901A\u8FC7 pipeline scm \u5728\u62C9\u53D6 git \u9879\u76EE\u7684\u540C\u65F6\u8BFB\u53D6 git \u9879\u76EE\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\uFF08Jenkinsfile\uFF09\uFF0C\u8FDB\u884C\u9879\u76EE\u6784\u5EFA\u3002</p><p>\u4F18\u52BF\uFF1A</p><p>\u76F8\u6BD4\u7B2C\u4E00\u79CD\u6BD4\u8F83\u7075\u6D3B\uFF0C\u5728\u9879\u76EE\u6784\u5EFA\u4E4B\u524D\u901A\u8FC7 gitlab api \u7684\u65B9\u5F0F\u53BB\u4FEE\u6539 Jenkinsfile\uFF0C\u8FBE\u5230\u4E00\u4E2A\u52A8\u6001\u751F\u6210\u6D41\u6C34\u7EBF\u7684\u76EE\u7684\u3002</p><p>\u52A3\u52BF\uFF1A</p><p>\u9700\u8981\u901A\u8FC7 gitlab api \u53BB\u4FEE\u6539 Jenkinsfile\uFF0C\u5BB9\u6613\u5F15\u8D77\u51B2\u7A81\u3002</p><h4 id="\u4FEE\u6539-jenkinsfile" tabindex="-1">\u4FEE\u6539 Jenkinsfile <a class="header-anchor" href="#\u4FEE\u6539-jenkinsfile" aria-hidden="true">#</a></h4><p>\u521B\u5EFA 10 \u4E2A job\uFF0C\u5173\u95ED\u5355 job \u7684\u5E76\u53D1\u529F\u80FD\uFF0C\u76F4\u63A5\u901A\u8FC7 Jenkins Api \u4FEE\u6539\u5BF9\u5E94\u7684 Jenkinsfile\uFF0C\u7136\u540E\u624B\u52A8\u7EF4\u62A4\u4EFB\u52A1\u961F\u5217\u3002</p><p>\u4F18\u52BF\uFF1A</p><p>\u81EA\u5B9A\u4E49\u5316\u7A0B\u5EA6\u975E\u5E38\u9AD8\uFF0C\u4E14\u4E0E\u9879\u76EE\u4EE3\u7801\u5B8C\u5168\u9694\u79BB\uFF0C\u4E0D\u9700\u8981\u4FEE\u6539\u9879\u76EE\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u52A3\u52BF\uFF1A</p><p>Jenkins \u7684 job \u81EA\u5E26\u5E76\u53D1\u961F\u5217\uFF0C\u624B\u52A8\u7EF4\u62A4\u961F\u5217\u589E\u52A0\u5F00\u53D1\u6210\u672C\u3002</p><h4 id="blue-ocean" tabindex="-1">blue ocean <a class="header-anchor" href="#blue-ocean" aria-hidden="true">#</a></h4><p>\u4F7F\u7528 blue ocean \u5173\u8054\u6E90\u7801\u4ED3\u5E93\uFF0C\u4FEE\u6539 Jenkinsfile \u518D\u8FD0\u884C\uFF0C\u8FD9\u79CD\u65B9\u6848\u4E0E\u7B2C\u4E8C\u79CD\u867D\u7136\u8FC7\u7A0B\u4E0D\u540C\u4F46\u7ED3\u679C\u57FA\u672C\u7C7B\u4F3C\uFF0C\u6240\u4EE5\u4F18\u7F3A\u70B9\u57FA\u672C\u76F8\u901A</p><h4 id="\u6700\u540E\u65B9\u6848" tabindex="-1">\u6700\u540E\u65B9\u6848 <a class="header-anchor" href="#\u6700\u540E\u65B9\u6848" aria-hidden="true">#</a></h4><p>\u6839\u636E\u4E0A\u8FF0 4 \u4E2A\u65B9\u6848\u7684\u4F18\u7F3A\u70B9\uFF0C\u7ED3\u5408\u73B0\u6709\u7684\u4EBA\u529B\u53EF\u4EE5\u9488\u5BF9\u6027\u7684\u9009\u62E9\uFF0C\u90A3\u4E48\u5BF9\u6211\u4EEC\u6765\u8BF4\uFF0C\u7B2C\u4E00\u79CD\u65B9\u6848\u7684\u6027\u4EF7\u6BD4\u662F\u6700\u9AD8\u7684\u3002</p><h2 id="jenkinsfile" tabindex="-1">Jenkinsfile <a class="header-anchor" href="#jenkinsfile" aria-hidden="true">#</a></h2><p>\u9009\u5B9A\u65B9\u6848\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5F00\u53D1\u5BF9\u5E94\u7684 pipeline \u811A\u672C\u4E86\u3002</p><blockquote><p>\u8FD9\u91CC\u4E5F\u4E0D\u8FC7\u591A\u4ECB\u7ECD\u8BED\u6CD5\u7684\u8BE6\u7EC6\uFF0C\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u7684\u540C\u5B66\u4EEC\u53EF\u4EE5\u70B9\u51FB <a href="https://www.jenkins.io/zh/doc/book/pipeline/syntax/" target="_blank" rel="noreferrer">API \u6587\u6863</a>\u5730\u5740\u67E5\u770B\u66F4\u591A</p></blockquote><h4 id="\u521B\u5EFA-stage" tabindex="-1">\u521B\u5EFA stage <a class="header-anchor" href="#\u521B\u5EFA-stage" aria-hidden="true">#</a></h4><p>\u9996\u5148\u521B\u5EFA\u5168\u91CF stage</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pipeline {</span></span>
<span class="line"><span style="color:#A6ACCD;">    agent any </span></span>
<span class="line"><span style="color:#A6ACCD;">    stages {</span></span>
<span class="line"><span style="color:#A6ACCD;">        stage(&#39;Pre Git&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            steps {</span></span>
<span class="line"><span style="color:#A6ACCD;">                script {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    echo &quot;pre git&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stage(&#39;Pre Dependencies&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            steps {</span></span>
<span class="line"><span style="color:#A6ACCD;">                script {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    echo &quot;check node_modules,\${params.CACHE}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stage(&#39;build&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            steps {</span></span>
<span class="line"><span style="color:#A6ACCD;">                script {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    echo &quot;build project&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stage(&#39;test&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            steps {</span></span>
<span class="line"><span style="color:#A6ACCD;">                script {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    echo &quot;test case&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        stage(&#39;deploy&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            steps {</span></span>
<span class="line"><span style="color:#A6ACCD;">                script {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    echo &quot;deploy project&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u4E0A\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86 5 \u4E2A stage\uFF1A</p><ul><li>Pre Git\uFF1A\u62C9\u53D6\u9879\u76EE</li><li>Pre Dependencies\uFF1A\u5B89\u88C5\u4F9D\u8D56</li><li>build\uFF1A\u6784\u5EFA</li><li>test\uFF1A\u6D4B\u8BD5</li><li>deploy: \u53D1\u5E03</li></ul><h4 id="pre-git-\u62C9\u53D6\u9879\u76EE" tabindex="-1">Pre Git \u62C9\u53D6\u9879\u76EE <a class="header-anchor" href="#pre-git-\u62C9\u53D6\u9879\u76EE" aria-hidden="true">#</a></h4><p>\u62C9\u53D6\u9879\u76EE\u5206\u4E24\u79CD</p><ol><li><pre><code>\u9879\u76EE\u672A\u62C9\u53D6\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A
</code></pre></li></ol><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">sh </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git clone \${params.PROJECT_GIT_PATH}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">sh </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git checkout \${params.BRANCH_NAME}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u9879\u76EE\u5DF2\u5B58\u5728</li></ol><p>\u5982\u679C\u9879\u76EE\u5DF2\u7ECF\u88AB clone \u8FC7\u4E86\uFF0C\u90A3\u4E48\u6709\u53EF\u80FD\u5728\u5B89\u88C5\u4F9D\u8D56\u7684\u4E4B\u540E\uFF0C\u62C9\u53D6\u5207\u6362\u5206\u652F\u51FA\u73B0\u51B2\u7A81\uFF0C\u6216\u8005\u5206\u652F\u5220\u9664\u5BFC\u81F4\u62C9\u53D6\u5F02\u5E38\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u91CD\u7F6E\u672C\u5730 git</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> sh &quot;git fetch --all&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">sh &quot;git reset --hard origin/\${params.BRANCH_NAME}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">sh &quot;git checkout \${params.BRANCH_NAME}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="pre-dependencies-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">Pre Dependencies \u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#pre-dependencies-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h4><p>\u8FD9\u4E00\u6B65\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7B80\u5355\u7684 yarn \u547D\u4EE4\uFF0C\u6240\u6709\u9879\u76EE\u76F4\u63A5\u4F7F\u7528 yarn\uFF0C\u4F9D\u9760 yarn \u672C\u8EAB\u7684\u5C5E\u6027\u5E2E\u6211\u4EEC\u7F13\u5B58 + \u6821\u6B63\u4F9D\u8D56\u3002</p><h4 id="build-\u6784\u5EFA\u9879\u76EE" tabindex="-1">build \u6784\u5EFA\u9879\u76EE <a class="header-anchor" href="#build-\u6784\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h4><p>\u8FD9\u4E00\u6B65\u5C31\u53EF\u4EE5\u4F7F\u7528\u5230\u6211\u4EEC\u4E0A\u4E00\u7AE0\u6784\u5EFA\u597D\u7684\u6253\u5305\u955C\u50CF</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">sh </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docker run -i --rm </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">-v /home/build/\${params.PROJECT_NAME}:/home/\${params.PROJECT_NAME} </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">\${params.DOCKER_PUBLISHER} sh -c </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">&#39;cd /home/app &amp;&amp; CONFIG_PATH=/home/\${params.PROJECT_NAME}/.config.json node ./src/build.js  &amp;&amp; exit&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6574\u4F53\u7684\u6D41\u7A0B\u662F\u6839\u636E\u4F20\u5165\u7684 docker \u955C\u50CF\u540D\u79F0\uFF0C\u62C9\u53D6\u5BF9\u5E94\u7684\u955C\u50CF\uFF0C\u5C06\u672C\u5730\u7684\u9879\u76EE\u8DEF\u5F84\u6302\u8F7D\u5230 docker \u5F53\u4E2D\uFF0C\u7136\u540E\u518D\u5728 docker \u4E2D\u8FDB\u884C\u9879\u76EE\u6784\u5EFA\u3002</p><p>\u8FD9\u6837\u7684\u4F18\u52BF\u8FD8\u662F\u4E0D\u9519\u7684\uFF0C\u8FD9\u91CC\u91CD\u7533\u4E00\u4E0B\uFF1A</p><ol><li>docker \u662F<strong>\u73AF\u5883\u9694\u79BB</strong>\u7684\uFF0C\u8FD9\u6837\u5982\u679C\u51FA\u73B0\u975E\u6CD5\u6307\u4EE4\u6216\u8005\u5F02\u5E38\uFF0C\u5D29\u6389\u7684\u53EA\u662F\u5F53\u524D\u5BB9\u5668\uFF0C\u800C\u4E0D\u4F1A\u5F71\u54CD\u5BBF\u4E3B\u7CFB\u7EDF\uFF0C\u6700\u591A\u5F71\u54CD\u5230\u5F53\u524D\u6302\u8F7D\u5230 docker \u7684\u9879\u76EE</li><li>\u540C\u65F6\u5F97\u76CA\u4E8E\u73AF\u5883\u9694\u79BB\uFF0Cdocker \u6784\u5EFA\u51FA\u6765\u7684\u6253\u5305\u955C\u50CF\u662F\u4EFB\u610F\u7684\uFF0C\u4E5F\u5C31\u662F\u5B83\u53EF\u4EE5<strong>\u4E3A\u6240\u6B32\u4E3A</strong>\u3002\u6784\u5EFA\u73AF\u5883\u4E0E\u547D\u4EE4\u90FD\u662F\u81EA\u5B9A\u4E49\u7684\uFF0C\u501F\u52A9\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u7CFB\u7EDF\u6784\u5EFA\u7684\u9879\u76EE\u5C06\u4E0D\u4E0D\u4EC5\u4EC5\u9650\u5236\u4E8E\u524D\u7AEF\u9879\u76EE\u3002</li></ol><h4 id="deploy-\u53D1\u5E03\u9879\u76EE" tabindex="-1">deploy \u53D1\u5E03\u9879\u76EE <a class="header-anchor" href="#deploy-\u53D1\u5E03\u9879\u76EE" aria-hidden="true">#</a></h4><p>\u4E0E\u6784\u5EFA\u76F8\u901A\uFF0C\u5BF9\u4E8E\u53D1\u5E03\u6765\u8BF4\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 docker \u6765\u89E3\u51B3\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u9879\u76EE\u7684\u53D1\u5E03\u5730\u5740\u3001\u65B9\u5F0F\u53EF\u4EE5\u4E0D\u5C3D\u76F8\u540C\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">sh </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docker run -i --rm </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">-v /home/build/\${params.PROJECT_NAME}:/home/\${params.PROJECT_NAME} </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">\${params.DOCKER_PUBLISHER} sh -c </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">&#39;cd /home/app &amp;&amp; CONFIG_PATH=/home/\${params.PROJECT_NAME}/.config.json node ./src/build.js  &amp;&amp; exit&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u4EE5\u4E0A\u8FF0\u7684\u547D\u4EE4\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u53EF\u4EE5\u7531\u591A\u4E2A\u4EFB\u610F\u7684 builder \u4E0E publisher docker \u955C\u50CF\u7EC4\u5408\u4F7F\u7528\u3002</p><h4 id="gitlab-\u4FE1\u606F\u540C\u6B65" tabindex="-1">Gitlab \u4FE1\u606F\u540C\u6B65 <a class="header-anchor" href="#gitlab-\u4FE1\u606F\u540C\u6B65" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u6D41\u6C34\u7EBF\u6765\u8BF4\uFF0C\u53EF\u4EE5\u4F7F\u7528 gitlab api \u8FDB\u884C\u6D88\u606F\u63A8\u9001\uFF0C\u5728 Jenkinsfile \u7684 post \u8BED\u6CD5\u4E2D\u505A\u6700\u540E\u7684\u4FE1\u606F\u540C\u6B65\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;"> post </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">always</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6784\u5EFA\u7ED3\u675F...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">success</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u606D\u559C\u60A8\uFF0C\u6784\u5EFA\u6210\u529F\uFF01\uFF01\uFF01</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curl --request POST --header </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">PRIVATE-TOKEN: \${PRIVATE_TOKEN}</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">\${GITLAB_URL}/api/v4/projects/\${PROJECT_ID}/statuses/\${COMMITS_ID}?state=success</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">failure</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u62B1\u6B49\uFF0C\u6784\u5EFA\u5931\u8D25\uFF01\uFF01\uFF01</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">sh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curl --request POST --header </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">PRIVATE-TOKEN: \${PRIVATE_TOKEN}</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">\${GITLAB_URL}/api/v4/projects/\${PROJECT_ID}/statuses/\${COMMITS_ID}?state=failed</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">unstable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BE5\u4EFB\u52A1\u5DF2\u7ECF\u88AB\u6807\u8BB0\u4E3A\u4E0D\u7A33\u5B9A\u4EFB\u52A1....</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="when-\u8BED\u6CD5\u63A5\u5165" tabindex="-1">when \u8BED\u6CD5\u63A5\u5165 <a class="header-anchor" href="#when-\u8BED\u6CD5\u63A5\u5165" aria-hidden="true">#</a></h4><p>when \u8BED\u6CD5\u4F7F\u7528\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF0C\u5728 stage \u4E2D\u76F4\u63A5\u6DFB\u52A0\u5BF9\u5E94\u7684\u89C4\u5219\u5373\u53EF\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#82AAFF;">stage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">when</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">expression</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PIPELINE_TEST</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">steps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">script</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">echo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test case</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u672C\u7AE0\u5C0F\u7ED3" tabindex="-1">\u672C\u7AE0\u5C0F\u7ED3 <a class="header-anchor" href="#\u672C\u7AE0\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u662F Jenkins \u7684\u4E00\u4E2A\u8FDB\u9636\u4F7F\u7528\u3002</p><p>\u53EF\u4EE5\u770B\u5230\u6574\u4E2A\u6784\u5EFA\u6D41\u7A0B\uFF0C\u6211\u4EEC\u5408\u7406\u7684\u5229\u7528\u4E86 docker \u7684\u7279\u6027\uFF0C\u6784\u5EFA\u4E86\u4E00\u4E2A\u901A\u7528\u6027\u975E\u5E38\u9AD8\u7684\u811A\u672C\uFF0C\u5BF9\u5E94\u7684\u6784\u5EFA\u914D\u7F6E\u53EF\u4EE5\u653E\u5728 devops \u7CFB\u7EDF\u4E2D\u7EF4\u62A4\uFF0C\u901A\u8FC7\u5BF9\u6BCF\u4E2A\u9879\u76EE\u914D\u7F6E\u4E0D\u540C\u7684 builder \u4E0E publisher\uFF0C\u7406\u8BBA\u4E0A\u53EF\u4EE5\u505A\u5230\u6784\u5EFA\u4EFB\u610F\u9879\u76EE\u3002</p><p>\u540C\u65F6 Jenkins \u8FD8\u6709\u66F4\u591A\u7684\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u6BD4\u5982\u4F7F\u7528 <code>groovy</code> \u8BED\u6CD5\u62D3\u5C55 pipeline \u7684\u529F\u80FD\u3001blue ocean \u63D2\u4EF6\u4EE5\u53CA\u66F4\u591A\u4F18\u79C0\u7684\u63D2\u4EF6\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u81EA\u5B9A\u4E49\u66F4\u9AD8\u7EA7\u7684\u7528\u6CD5\uFF0C\u5982\u679C\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u7684\u8DDF\u5176\u4ED6\u7591\u95EE\u7684\u8BDD\u53EF\u4EE5\u6DFB\u52A0\u6211\u7684\u5FAE\u4FE1 <strong>cookieboty</strong> \u6216\u8005\u52A0\u5165\u7FA4\u4E00\u8D77\u4EA4\u6D41\u3002</p><p>\u5982\u679C\u4F60\u6709\u4EC0\u4E48\u7591\u95EE\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u63D0\u51FA\uFF0C\u6216\u8005\u52A0\u7FA4\u6C9F\u901A\u3002 \u{1F44F}</p>`,66),o=[e];function c(t,r,i,y,D,C){return n(),a("div",null,o)}const h=s(l,[["render",c]]);export{d as __pageData,h as default};
