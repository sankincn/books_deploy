import{_ as s,c as n,o as a,d as p}from"./app.e0e4ea3a.js";const m=JSON.parse('{"title":"TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nest \u521D\u59CB\u5316","slug":"nest-\u521D\u59CB\u5316","link":"#nest-\u521D\u59CB\u5316","children":[]},{"level":2,"title":"Controller","slug":"controller","link":"#controller","children":[]},{"level":2,"title":"Service","slug":"service","link":"#service","children":[]},{"level":2,"title":"TypeORM","slug":"typeorm","link":"#typeorm","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}],"relativePath":"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7.md"}'),o={name:"TypeScript/\u6DF1\u5165\u6D45\u51FATypeScript\uFF1A\u4ECE\u57FA\u7840\u77E5\u8BC6\u5230\u7C7B\u578B\u7F16\u7A0B/TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7.md"},e=p(`<h1 id="typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7" tabindex="-1">TypeScript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7 <a class="header-anchor" href="#typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1-\u5B9E\u6218\u7BC7" aria-hidden="true">#</a></h1><hr><h1 id="typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u5B9E\u6218\u7BC7" tabindex="-1">typescript \u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u5B9E\u6218\u7BC7 <a class="header-anchor" href="#typescript-\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\uFF1A\u5B9E\u6218\u7BC7" aria-hidden="true">#</a></h1><h2 id="nest-\u521D\u59CB\u5316" tabindex="-1">Nest \u521D\u59CB\u5316 <a class="header-anchor" href="#nest-\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u5728\u5168\u5C40\u5B89\u88C5 nest.js \u7684 cli\uFF0C\u7136\u540E\u521D\u59CB\u5316\u6211\u4EEC\u7684\u9879\u76EE\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g @nestjs/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">nest new nest-app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u9009\u62E9 npm \u8FDB\u884C\u5B89\u88C5\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded070281d3d31~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-15-54"></p><p>\u6211\u4EEC\u5B89\u88C5\u5B8C\u6BD5\u540E\u6253\u5F00\u7F16\u8F91\u5668\uFF0C\u5B83\u7684\u76EE\u5F55\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded070282838ce~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-18-34"></p><p>\u8FD0\u884C <code>npm start</code> \u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE<a href="http://localhost:3000/%EF%BC%8C%E6%95%88%E6%9E%9C%E5%A6%82%E4%B8%8B%EF%BC%9A" target="_blank" rel="noreferrer">http://localhost:3000/\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</a></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07028950d36~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-20-36"></p><p>\u90A3\u4E48\u6211\u4EEC\u7684\u7B2C\u4E00\u4E2A Nest.js \u7A0B\u5E8F\u5C31\u542F\u52A8\u4E86\u3002</p><h2 id="controller" tabindex="-1">Controller <a class="header-anchor" href="#controller" aria-hidden="true">#</a></h2><p>Controller \u63A7\u5236\u5668\uFF0Ccontroller \u8D1F\u8D23\u5904\u7406\u4F20\u5165\u7684\u8BF7\u6C42, \u5E76\u8C03\u7528\u5BF9\u5E94\u7684 service \u5B8C\u6210\u4E1A\u52A1\u5904\u7406\uFF0C\u8FD4\u56DE\u5BF9\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u3002</p><p>\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 controller:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nest g co books</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u4EA7\u751F\u4E24\u4E2A\u52A8\u4F5C\uFF1A</p><ol><li>\u521B\u5EFA controller \u6587\u4EF6\uFF1A</li></ol><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded070288f5390~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-40-42"></p><ol start="2"><li>\u5C06\u65B0\u521B\u5EFA\u7684 controller \u6CE8\u518C\u5230 module \u4E2D\u53BB</li></ol><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07028c79ea1~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-41-35"></p><p>\u6211\u4EEC\u770B\u5230\u751F\u6210\u7684 <code>books.controller.ts</code> \u6587\u4EF6\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Controller } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Controller(&#39;books&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksController {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>@Controller(&#39;books&#39;)</code> \u6307\u5B9A\u4E86\u5F53\u524D\u8DEF\u7531\u8DEF\u5F84\u4E3A <code>books</code>\uFF0C\u53EF\u89C1 Nest.js \u91C7\u7528\u7684\u662F\u5206\u6563\u5F0F\u8DEF\u7531\u3002</p><p>\u6211\u4EEC\u5BF9\u6B64\u6587\u4EF6\u8FDB\u884C\u6539\u5199\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Controller, Get } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Controller(&#39;books&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksController {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Get(&#39;/js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    findJavaScript() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;JavaScript\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u5F15\u5165\u7684 <code>Get(&#39;/js&#39;)</code> \u4EE3\u8868\u4E86 get \u65B9\u6CD5\uFF0C\u9488\u5BF9 <code>books/js</code> \u7684\u8DEF\u7531\u4E0B\u8FDB\u884C\u7684\u5904\u7406\u3002</p><p>\u6211\u4EEC\u73B0\u5728\u628A\u670D\u52A1\u6682\u505C\uFF0C\u9009\u62E9\u5F00\u53D1\u6A21\u5F0F\u518D\u6B21\u542F\u52A8\u9879\u76EE:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run start:dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u7684\u6BCF\u6B21\u66F4\u6539\u90FD\u4F1A\u89E6\u53D1\u9879\u76EE\u7684\u4E8C\u6B21\u7F16\u8BD1\uFF0C\u5C31\u4E0D\u7528\u53CD\u590D\u8FD0\u884C\u9879\u76EE\u4E86\u3002</p><p>\u8BBF\u95EE <code>http://localhost:3000/books/js</code> \u8DEF\u7531\uFF0C\u6211\u4EEC\u770B\u5230\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07028b2f494~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-49-29"></p><p>\u679C\u7136\uFF0CController \u53EF\u4EE5\u63A7\u5236\u5904\u7406\u8DEF\u7531\uFF0C\u4F46\u662F\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u8FD9\u4E9B\u8FD4\u56DE\u7684\u6570\u636E\u5E76\u4E0D\u662F\u5199\u6B7B\u7684\uFF0C\u6211\u4EEC\u5FC5\u987B\u5728 Controller \u4E2D\u8C03\u7528 Service \u6765\u83B7\u53D6\u6570\u636E\u3002</p><h2 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u7EE7\u7EED\u7528\u547D\u4EE4\u884C\u751F\u6210 Service:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nest g s books</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07056a93717~tplv-t2oaga2asx-image.image" alt="2019-10-21-01-54-56"></p><p>\u6211\u4EEC\u6539\u5199 <code>books.service.ts</code> \u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Injectable } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Injectable()</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksService {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getBooks() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return \`\u672C\u4E66\u627E\u5230\u4E86\uFF01\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6539\u5199 <code>books.controller.ts</code> \u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">@Controller(&#39;books&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksController {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(private readonly booksService: BooksService) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Get(&#39;/js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    findBook() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const res = this.booksService.getBooks();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return res;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u5728 <code>BooksController</code> \u6CE8\u5165\u4E86 <code>BooksService</code>\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5728 <code>BooksController</code> \u8C03\u7528\u76F8\u5173\u7684\u65B9\u6CD5 <code>this.booksService.getBooks()</code>\uFF0C\u8FD9\u91CC\u5C31\u662F\u4F9D\u8D56\u6CE8\u5165\u7684\u8FD0\u7528\u3002</p><p>\u4F46\u662F\u4EC5\u4EC5\u6709 Service\u3001Controller \u4E5F\u662F\u4E0D\u591F\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u6301\u4E45\u5316\u50A8\u5B58\u6570\u636E\u7684\u6570\u636E\u5E93\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u5728 Service \u4E0E \u6570\u636E\u5E93\u4E4B\u95F4\u9700\u8981\u52A0\u4E00\u5C42 DAO\uFF0C\u5F00\u53D1\u8005\u4E0D\u5E94\u8BE5\u76F4\u63A5\u64CD\u7EB5\u6570\u636E\u5E93\uFF0C\u4E00\u65B9\u9762\u6027\u80FD\u6CA1\u6709\u4FDD\u8BC1\uFF0C\u53E6\u4E00\u65B9\u9762\u4E0D\u6613\u7EF4\u62A4\uFF0C\u8FD9\u5C31\u6D89\u53CA\u5230\u4E86 TypeORM\u3002</p><h2 id="typeorm" tabindex="-1">TypeORM <a class="header-anchor" href="#typeorm" aria-hidden="true">#</a></h2><p>TypeORM \u662F\u4E00\u4E2A ORM \u6846\u67B6\uFF0C\u5728 Nest.js \u67B6\u6784\u4E2D\u5145\u5F53 DAO \u5C42\uFF0C\u6211\u4EEC\u901A\u8FC7\u64CD\u7EB5 TypeORM \u6765\u95F4\u63A5\u64CD\u7EB5\u6570\u636E\u5E93\u3002</p><p>\u6211\u4EEC\u5148\u5B89\u88C5\u76F8\u5173\u7684\u5E93\u4EE5\u4FBF\u5728 nest.js \u6846\u67B6\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save @nestjs/typeorm typeorm mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u5728 mysql \u4E2D\u65B0\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93 <code>nest</code>:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07059cf8e97~tplv-t2oaga2asx-image.image" alt="2019-10-21-02-26-06"></p><p>\u6211\u4EEC\u5728 <code>app.module.ts</code> \u914D\u7F6E <code>TypeOrmModule</code>\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Module } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { TypeOrmModule } from &#39;@nestjs/typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { AppController } from &#39;./app.controller&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { AppService } from &#39;./app.service&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BooksController } from &#39;./books/books.controller&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BooksService } from &#39;./books/books.service&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BooksEntity } from &#39;./entities/books.entity&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Module({</span></span>
<span class="line"><span style="color:#A6ACCD;">  imports: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    TypeOrmModule.forRoot({</span></span>
<span class="line"><span style="color:#A6ACCD;">      keepConnectionAlive: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: &#39;mysql&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      host: &#39;localhost&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      port: 3306,</span></span>
<span class="line"><span style="color:#A6ACCD;">      username: &#39;root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      database: &#39;nest&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      synchronize: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      entities: [BooksEntity],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  controllers: [AppController, BooksController],</span></span>
<span class="line"><span style="color:#A6ACCD;">  providers: [AppService, BooksService],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export class AppModule {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u7684 <code>Entity</code> \u8BBE\u7F6E\u5982\u4E0B <code>entities/books.entity.ts</code>:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Entity, PrimaryGeneratedColumn, Column } from &#39;typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Entity(&#39;books&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksEntity {</span></span>
<span class="line"><span style="color:#A6ACCD;">  @PrimaryGeneratedColumn()</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: number;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Column({ length: 20 })</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Column({ length: 10 })</span></span>
<span class="line"><span style="color:#A6ACCD;">  author: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6210\u529F\u8FD0\u884C\u4E4B\u540E\uFF0C\u6211\u4EEC\u7684 <code>Entity</code> \u4F1A\u88AB\u6620\u5C04\u5230\u6570\u636E\u5E93\u4E2D\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded0706b482dc8~tplv-t2oaga2asx-image.image" alt="2019-10-21-03-15-14"></p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u5C42 DAO \u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u4E86, \u5728 <code>books.service.ts</code> \u4E2D\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Injectable } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { InjectRepository } from &#39;@nestjs/typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Repository } from &#39;typeorm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as _ from &#39;lodash&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { BooksEntity } from &#39;../entities/books.entity&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CreateBooksDto } from &#39;../dtos/books.dto&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Injectable()</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksService {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(</span></span>
<span class="line"><span style="color:#A6ACCD;">    @InjectRepository(BooksEntity)</span></span>
<span class="line"><span style="color:#A6ACCD;">    private readonly booksRepository: Repository&lt;BooksEntity&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  async getBooks(id: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return await this.booksRepository.findOne(id);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  async createBooks(book: CreateBooksDto) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const res = await this.booksRepository.save(book);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return _.pick(res, &#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6211\u4EEC\u7528 <code>@InjectRepository()</code> \u4FEE\u9970\u5668\u5411 <code>BooksService</code> \u6CE8\u5165 <code>booksRepository</code>\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 <code>BooksService</code> \u4E2D\u5229\u7528<code>this.booksRepository</code> \u8FDB\u884C DAO \u7684\u64CD\u4F5C\u4E86\uFF0C\u6BD4\u5982\u67E5\u627E\u3001\u5220\u9664\u3001\u521B\u5EFA\u7B49\u7B49\u3002</p><p>\u6211\u4EEC\u5728 <code>books.controller.ts</code> \u4E2D\u7F16\u8F91\u63A7\u5236\u5668\uFF0C\u81F3\u4E8E HTTP \u8BF7\u6C42\u5BF9\u8C61\u7684\u5185\u5BB9\uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B, \u4E0D\u5FC5\u624B\u52A8\u83B7\u53D6\u5B83\u4EEC\u3002 \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E13\u7528\u7684\u88C5\u9970\u5668\uFF0C\u6BD4\u5982 <code>@Body()</code> \u6216 <code>@Query()</code> \u6765\u81EA\u52A8\u83B7\u53D6\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { Controller, Get, Param, Post, Body } from &#39;@nestjs/common&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { BooksService } from &#39;./books.service&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { CreateBooksDto } from &#39;../dtos/books.dto&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Controller(&#39;books&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">export class BooksController {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(private readonly booksService: BooksService) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Get(&#39;:id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  findBook(@Param(&#39;id&#39;) id: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.booksService.getBooks(id);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Post()</span></span>
<span class="line"><span style="color:#A6ACCD;">  async create(@Body() createCatDto: CreateBooksDto): Promise&lt;{ id: number }&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return await this.booksService.createBooks(createCatDto);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8FDB\u884C\u4E00\u4E0B\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u5728 PostMan \u4E2D\u8FDB\u884C\u5982\u4E0B\u6D4B\u8BD5\uFF1A</p><p><img src="https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/0dbc5eaa8156ae71b886fc62f34671e4.png" alt="2019-10-21-04-21-18"></p><p>\u6211\u4EEC\u4F20\u5165\u4E00\u4E2A json\uFF0C\u5305\u542B\u4E66\u540D\u548C\u4F5C\u8005\u540D\u5B57\uFF0C\u7528 post \u65B9\u6CD5\u53D1\u9001\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded0707f1a273a~tplv-t2oaga2asx-image.image" alt="2019-10-21-04-22-49"></p><p>\u6211\u4EEC\u770B\u5230\u4E86 201 \u521B\u5EFA\u6210\u529F\u7684\u72B6\u6001\u7801\uFF0C\u5E76\u53D7\u5230\u4E86\u6211\u4EEC\u7684 book \u7684 id\uFF0C\u518D\u770B\u770B\u6570\u636E\u5E93\u662F\u5426\u4FDD\u5B58\u4E86\u6570\u636E\uFF1A</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded07086b137d5~tplv-t2oaga2asx-image.image" alt="2019-10-21-04-23-38"></p><p>\u6CA1\u95EE\u9898\uFF0C\u6211\u4EEC\u7EE7\u7EED\u5C1D\u8BD5\u67E5\u8BE2 id \u4E3A 14 \u7684\u4E66\u7C4D\u4FE1\u606F:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded0709aa3bb92~tplv-t2oaga2asx-image.image" alt="2019-10-21-04-24-22"></p><p>\u6211\u4EEC\u6210\u529F\u67E5\u8BE2:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/21/16ded0709adcee82~tplv-t2oaga2asx-image.image" alt="2019-10-21-04-25-30"></p><p>\u6211\u4EEC\u8FD9\u4E2A\u7B80\u6613\u7684\u670D\u52A1\u5668\u642D\u5EFA\u7B97\u662F\u57FA\u672C\u544A\u4E00\u6BB5\u843D\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5B66\u4E60\u4E86\u57FA\u4E8E Nest.js \u7684\u7B80\u6613\u670D\u52A1\u5668\u642D\u5EFA\uFF0C\u5176\u5206\u5C42\u7684\u601D\u60F3\u65E0\u5904\u4E0D\u5728\uFF1A</p><ul><li>\u6211\u4EEC\u901A\u8FC7 Controller \u5904\u7406\u8DEF\u7531\u8BF7\u6C42</li><li>\u901A\u8FC7 Service \u8FDB\u884C\u8BA1\u7B97\u548C\u6570\u636E\u64CD\u4F5C</li><li>\u901A\u8FC7 typeorm \u751F\u6210 dao \u5C42\uFF0C\u6211\u4EEC\u95F4\u63A5\u64CD\u4F5C\u6570\u636E\u5E93</li></ul><p>\u5404\u4E2A\u5C42\u5404\u53F8\u5176\u804C\uFF0C\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F\u5145\u5206\u89E3\u8026\uFF0C\u8FD9\u662F\u4F01\u4E1A\u7EA7\u670D\u52A1\u5668\u5F00\u53D1\u7684\u57FA\u672C\u8BBE\u8BA1\u601D\u60F3\u3002</p><p>\u6211\u5DF2\u7ECF\u628A\u5B8C\u6574\u4EE3\u7801\u53D1\u5E03\u5230\u4E86github <a href="https://github.com/xiaomuzhu/nest-app" target="_blank" rel="noreferrer">\u4ED3\u5E93</a> \u4E2D\u3002</p>`,78),l=[e];function t(c,r,i,C,A,d){return a(),n("div",null,l)}const g=s(o,[["render",t]]);export{m as __pageData,g as default};
