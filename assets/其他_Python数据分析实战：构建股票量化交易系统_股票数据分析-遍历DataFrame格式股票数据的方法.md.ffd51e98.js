import{_ as s,c as a,o as n,d as l}from"./app.e5528619.js";const D=JSON.parse('{"title":"\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386DataFrame\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u4F8B\u7A0B\u6570\u636E\u51C6\u5907","slug":"\u4F8B\u7A0B\u6570\u636E\u51C6\u5907","link":"#\u4F8B\u7A0B\u6570\u636E\u51C6\u5907","children":[]},{"level":2,"title":"for..in\u5FAA\u73AF\u65B9\u5F0F","slug":"for-in\u5FAA\u73AF\u65B9\u5F0F","link":"#for-in\u5FAA\u73AF\u65B9\u5F0F","children":[]},{"level":2,"title":"iterrows()\u751F\u6210\u5668\u65B9\u5F0F","slug":"iterrows-\u751F\u6210\u5668\u65B9\u5F0F","link":"#iterrows-\u751F\u6210\u5668\u65B9\u5F0F","children":[]},{"level":2,"title":"apply()\u5FAA\u73AF\u65B9\u5F0F","slug":"apply-\u5FAA\u73AF\u65B9\u5F0F","link":"#apply-\u5FAA\u73AF\u65B9\u5F0F","children":[]},{"level":2,"title":"\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F","slug":"\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F","link":"#\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F","children":[]},{"level":2,"title":"\u6267\u884C\u6548\u7387\u5BF9\u6BD4","slug":"\u6267\u884C\u6548\u7387\u5BF9\u6BD4","link":"#\u6267\u884C\u6548\u7387\u5BF9\u6BD4","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386DataFrame\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5.md"}'),p={name:"\u5176\u4ED6/Python\u6570\u636E\u5206\u6790\u5B9E\u6218\uFF1A\u6784\u5EFA\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u7CFB\u7EDF/\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386DataFrame\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5.md"},e=l(`<h1 id="\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386dataframe\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5" tabindex="-1">\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386DataFrame\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u80A1\u7968\u6570\u636E\u5206\u6790-\u904D\u5386dataframe\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h1><hr><h1 id="\u80A1\u7968\u6570\u636E\u5206\u6790\uFF1A\u904D\u5386dataframe\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5" tabindex="-1">\u80A1\u7968\u6570\u636E\u5206\u6790\uFF1A\u904D\u5386DataFrame\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u80A1\u7968\u6570\u636E\u5206\u6790\uFF1A\u904D\u5386dataframe\u683C\u5F0F\u80A1\u7968\u6570\u636E\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u5728\u5BF9\u80A1\u7968\u6570\u636E\u5206\u6790\u4E2D\u4E0D\u53EF\u907F\u514D\u7684\u6D89\u53CA\u5230\u5BF9dataframe\u683C\u5F0F\u6570\u636E\u7684\u904D\u5386\u67E5\u8BE2\u548C\u5904\u7406\uFF0C\u6700\u5E38\u7528\u7684\u904D\u5386\u65B9\u6CD5\u662F\u7528for\u5FAA\u73AF\u6267\u884C\uFF0C\u5F53\u7136Numpy \u7684\u77E2\u91CF\u5316\u65B9\u6CD5\u53EF\u4EE5\u7528\u7B80\u6D01\u7684\u8868\u8FBE\u5F0F\u4EE3\u66FFfor\u5FAA\u73AF\u5B8C\u6210\u5BF9\u6570\u636E\u7684\u904D\u5386\u3002\u9664\u4E86\u8FD9\u4E24\u79CD\u65B9\u6CD5\u4E4B\u5916\uFF0C\u5176\u5B9E\u8FD8\u6709\u5176\u4ED6\u904D\u5386dataframe\u683C\u5F0F\u6570\u636E\u7684\u65B9\u6CD5\u3002\u672C\u8282\u901A\u8FC7\u5B9E\u73B0\u5355\u5747\u7EBF\u7A81\u7834\u7B56\u7565\u4E3A\u4F8B\u7A0B\uFF0C\u4ECB\u7ECD\u5BF9dataframe\u683C\u5F0F\u6570\u636E\u904D\u5386\u7684\u51E0\u79CD\u65B9\u6CD5\uFF0C\u5E76\u4E14\u5BF9\u6BD4\u5404\u79CD\u65B9\u6CD5\u7684\u6267\u884C\u6548\u7387\u3002</p><h2 id="\u4F8B\u7A0B\u6570\u636E\u51C6\u5907" tabindex="-1">\u4F8B\u7A0B\u6570\u636E\u51C6\u5907 <a class="header-anchor" href="#\u4F8B\u7A0B\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a></h2><p>\u5355\u5747\u7EBF\u7A81\u7834\u7684\u4EA4\u6613\u7B56\u7565\u4E3A\uFF1A\u82E5\u6628\u65E5\u6536\u76D8\u4EF7\u9AD8\u51FA\u8FC7\u53BB20\u65E5\u5E73\u5747\u4EF7\u5219\u4ECA\u5929\u5F00\u76D8\u5373\u4E70\u5165\u80A1\u7968\uFF1B\u82E5\u6628\u65E5\u6536\u76D8\u4EF7\u4F4E\u4E8E\u8FC7\u53BB20\u65E5\u5E73\u5747\u4EF7\uFF0C\u90A3\u4E48\u4ECA\u5929\u5F00\u76D8\u5356\u51FA\u80A1\u7968\u3002\u56E0\u6B64\u9700\u8981\u904D\u5386\u67E5\u8BE2\u6BCF\u4E2A\u4EA4\u6613\u65E5\u6536\u76D8\u4EF7\u4E0E\u8FC7\u53BB20\u65E5\u5E73\u5747\u4EF7\u7684\u5DEE\u503C\uFF0C\u5E76\u4E14\u6807\u8BB0\u67E5\u8BE2\u7684\u7ED3\u679C\u4EE5\u63D0\u4F9B\u4EA4\u6613\u64CD\u4F5C\u3002</p><p>\u9996\u5148\u6211\u4EEC\u9009\u53D6\u524D\u9762\u5C0F\u8282\u4E2D\u6240\u4ECB\u7ECD\u7684\u80A1\u7968\u4EA4\u6613\u6570\u636E\u63A5\u53E3\u6765\u83B7\u53D6\u4E0A\u8BC1\u6307\u6570\u4EA4\u6613\u6570\u636E\u3002\u6211\u4EEC\u4F7F\u7528pandas-datareade\u6A21\u5757data.DataReader()\u65B9\u6CD5\u83B7\u53D6\u4E0A\u8BC1\u6307\u65702018\u5E741\u67081\u65E5\u81F32019\u67081\u65E51\u65E5\u7684\u4EA4\u6613\u6570\u636E\uFF0C\u4EE5\u4F5C\u4E3A\u672C\u5C0F\u8282\u904D\u5386dataframe\u683C\u5F0F\u7684\u4F8B\u7A0B\u6570\u636E\uFF0C\u6253\u5370\u67E5\u770B\u4EA4\u6613\u6570\u636E\u7684\u524D10\u884C\u683C\u5F0F\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u83B7\u53D6\u4E0A\u8BC1\u6307\u6570\u4EA4\u6613\u6570\u636E pandas-datareade\u6A21\u5757data.DataReader()\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">df_stockload = web.DataReader(&quot;000001.SS&quot;, &quot;yahoo&quot;, datetime.datetime(2018, 1, 1), datetime.datetime(2019, 1, 1))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># python3.7\u6253\u5370</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head(10))  # \u67E5\u770B\u524D10\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-02  3349.1  3314.0  3314.0  3348.3  202300     3348.3</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-03  3379.9  3345.3  3347.7  3369.1  213800     3369.1</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-04  3392.8  3365.3  3371.0  3385.7  207000     3385.7</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-05  3402.1  3380.2  3386.5  3391.8  213100     3391.8</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-08  3412.7  3384.6  3391.6  3409.5  236200     3409.5</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-09  3417.2  3403.6  3406.1  3413.9  191500     3413.9</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-10  3430.2  3398.8  3414.1  3421.8  209100     3421.8</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-11  3426.5  3405.6  3415.6  3425.3  173800     3425.3</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-12  3435.4  3418.0  3423.9  3428.9  174100     3428.9</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-15  3442.5  3402.3  3429.0  3410.5  232000     3410.5</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5176\u6B21\u4F7F\u7528df.rolling().mean()\u65B9\u6CD5\u8BA1\u7B97\u5F97\u5230M20\u79FB\u52A8\u5E73\u5747\u7EBF\uFF0C\u8BE5\u65B9\u6CD5\u53EA\u9700\u63D0\u4F9B\u6536\u76D8\u4EF7\u548C\u79FB\u52A8\u5E73\u5747\u65F6\u95F4\u7A97\u53E3\u5927\u5C0F\u5373\u53EF\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">df_stockload[&#39;Ma20&#39;] = df_stockload.Close.rolling(window=20).mean()#\u589E\u52A0M20\u79FB\u52A8\u5E73\u5747\u7EBF</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head())  # \u67E5\u770B\u524D5\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close  Ma20</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                               </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-02  3349.1  3314.0  3314.0  3348.3  202300     3348.3   NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-03  3379.9  3345.3  3347.7  3369.1  213800     3369.1   NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-04  3392.8  3365.3  3371.0  3385.7  207000     3385.7   NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-05  3402.1  3380.2  3386.5  3391.8  213100     3391.8   NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-08  3412.7  3384.6  3391.6  3409.5  236200     3409.5   NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[5 rows x 7 columns]</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.tail())  # \u67E5\u770B\u672B5\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                 </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-12-25  2514.0  2462.8  2503.9  2504.8  136500     2504.8  2587.8</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-12-26  2513.8  2492.1  2501.1  2498.3  108800     2498.3  2582.6</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-12-27  2532.0  2483.1  2527.7  2483.1  135400     2483.1  2578.4</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-12-28  2505.1  2478.3  2483.6  2493.9  119200     2493.9  2573.7</span></span>
<span class="line"><span style="color:#A6ACCD;">2019-01-02  2500.3  2456.4  2497.9  2465.3  109900     2465.3  2564.2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[5 rows x 7 columns]</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8EMa20\u79FB\u52A8\u5E73\u5747\u7EBF\u662F\u753120\u65E5\u7684\u6536\u76D8\u4EF7\u8BA1\u7B97\u5E73\u5747\u503C\u5F97\u5230\u7684\uFF0C\u56E0\u6B64\u53EA\u6709\u5728\u7B2C20\u4E2A\u4EA4\u6613\u65E5\u65F6\u624D\u80FD\u5F97\u5230\u7B2C\u4E00\u4E2AMa20\u79FB\u52A8\u5E73\u5747\u7EBF\u6570\u503C\uFF0C\u6211\u4EEC\u9700\u8981\u5904\u7406\u4E0B\u524D19\u4E2A\u4EA4\u6613\u65E5\u4E2DMa20\u5217\u7684NaN\u503C\u3002\u53EF\u4EE5\u4F7F\u7528DataFrame.dropna()\u65B9\u6CD5\u5220\u9664NaN\u503C\u3002\u5176\u4E2D\u53C2\u6570axis=0\u8868\u793A\u5220\u9664\u5305\u542B\u7F3A\u5931\u503C\u884C\uFF0Caxis=1\u8868\u793A\u5220\u9664\u5305\u542B\u7F3A\u5931\u503C\u5217\uFF1B\u53C2\u6570how=any\u8868\u793A\u53EA\u8981\u6709\u4E00\u4E2A\u7F3A\u5931\u503C\u5C31\u5220\u9664\u8BE5\u884C\u6216\u5217\uFF0Chow=all\u8868\u793A\u53EA\u6709\u5F53\u6240\u6709\u503C\u90FD\u4E3A\u7F3A\u5931\u503C\u65F6\u624D\u5220\u9664\u8BE5\u884C\u6216\u5217\u3002\u6B64\u5904\u9009\u62E9\u53EA\u8981\u6709\u4E00\u4E2A\u7F3A\u5931\u503C\u5C31\u5220\u9664\u5305\u542B\u7F3A\u5931\u503C\u6240\u5728\u7684\u884C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">df_stockload.dropna(axis=0,how=&#39;any&#39;,inplace=True)#NAN\u503C\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head())  # \u67E5\u770B\u524D5\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                 </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[5 rows x 7 columns]</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u5B8C\u6210\u4E86\u5B9E\u73B0\u5355\u5747\u7EBF\u7A81\u7834\u7B56\u7565\u7684\u524D\u671F\u6570\u636E\u51C6\u5907\u5DE5\u4F5C\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5206\u522B\u4ECB\u7ECD\u4E0B\u904D\u5386dataframe\u683C\u5F0F\u6570\u636E\u7684\u51E0\u79CD\u65B9\u6CD5\u3002</p><h2 id="for-in\u5FAA\u73AF\u65B9\u5F0F" tabindex="-1">for..in\u5FAA\u73AF\u65B9\u5F0F <a class="header-anchor" href="#for-in\u5FAA\u73AF\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u4F7F\u7528for..in\u5FAA\u73AF\u65B9\u5F0F\u5B9E\u73B0\u5355\u5747\u7EBF\u7A81\u7834\u7B56\u7565\u3002for..in\u5FAA\u73AF\u904D\u5386\u7684\u65B9\u5F0F\u662FPython\u4E2D\u6700\u5E38\u7528\u7684\u65B9\u5F0F\uFF0C\u5176\u4E2D\u7684\u539F\u7406\u6211\u4EEC\u5728\u300A\u524D\u7F6E\u57FA\u7840\uFF1A\u73A9\u8F6CPython\u904D\u5386\u5DE5\u5177for..in\u300B\u4E2D\u5DF2\u7ECF\u4ECB\u7ECD\u3002</p><p>\u6211\u4EEC\u904D\u5386\u5168\u90E8\u4EA4\u6613\u65E5\u7684\u6536\u76D8\u4EF7\u6570\u503C\u548CMa20\u6570\u503C\uFF0C\u5C06\u6536\u76D8\u4EF7\u6570\u503C\u51CF\u53BBMa20\u6570\u503C\uFF0C\u5E76\u4F7F\u7528np.sign()\u53D6\u5DEE\u503C\u7B26\u53F7\uFF0C\u5F53\u6536\u76D8\u4EF7\u5728Ma20\u4E0A\u65B9\u65F6\u5DEE\u503C\u4E3A\u6B63\uFF0C\u6536\u76D8\u4EF7\u5728Ma20\u4E0A\u4E0B\u65B9\u65F6\u5DEE\u503C\u4E3A\u8D1F\uFF0C\u7531\u8D1F\u8F6C\u6B63\u5BF9\u5E94\u4E3A\u4E70\u70B9\uFF0C\u7531\u6B63\u8F6C\u8D1F\u5BF9\u5E94\u4E3A\u5356\u70B9\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def forin_looping(df):</span></span>
<span class="line"><span style="color:#A6ACCD;">    df[&#39;signal&#39;] = 0 #df = df.assign(signal = 0)  #\u53EF\u91C7\u7528assign\u65B0\u589E\u4E00\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">    for i in np.arange(0,df.shape[0]):</span></span>
<span class="line"><span style="color:#A6ACCD;">        df.iloc[i,df.columns.get_loc(&#39;signal&#39;)] = np.sign(df.iloc[i][&#39;Close&#39;] - df.iloc[i][&#39;Ma20&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    return df</span></span>
<span class="line"><span style="color:#A6ACCD;">print(forin_looping(df_stockload)[0:5])</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20  signal</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="iterrows-\u751F\u6210\u5668\u65B9\u5F0F" tabindex="-1">iterrows()\u751F\u6210\u5668\u65B9\u5F0F <a class="header-anchor" href="#iterrows-\u751F\u6210\u5668\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u53E6\u4E00\u79CDPython\u4E2D\u5E38\u7528\u7684\u904D\u5386\u65B9\u5F0F\u4E3Aiterrows()\u751F\u6210\u5668\u65B9\u5F0F\u3002\u6240\u8C13\u751F\u6210\u5668\u5176\u5B9E\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8FED\u4EE3\u5668\uFF0C\u5185\u90E8\u652F\u6301\u4E86\u8FED\u4EE3\u5668\u534F\u8BAE\u3002Python\u4E2D\u63D0\u4F9B\u751F\u6210\u5668\u51FD\u6570\u548C\u751F\u6210\u5668\u8868\u8FBE\u5F0F\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\u751F\u6210\u5668\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\uFF0C\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u6784\u5EFA\u4E00\u4E2A\u7ED3\u679C\u5217\u8868\uFF0C\u8282\u7701\u4E86\u5185\u5B58\u7A7A\u95F4\u3002\u5728Python 2\u4E2D\u53EF\u4F7F\u7528xrange\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF0C\u7528\u6765\u4E00\u6B21\u4E00\u4E2A\u503C\u5730\u904D\u5386\u4E00\u4E2A\u8303\u56F4\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u6BD4range\u66F4\u7701\u5185\u5B58\u3002\u5728Python 3\u4E2Dxrange\u5DF2\u7ECF\u6539\u540D\u4E3Arange\u3002</p><p>\u6211\u4EEC\u5148\u4E86\u89E3\u4E0B\u751F\u6210\u5668\u51FD\u6570\u65B9\u5F0F\u5B9E\u73B0\u751F\u6210\u5668\u3002\u8FD9\u79CD\u65B9\u5F0F\u7F16\u5199\u4E3A\u5E38\u89C4\u7684def\u8BED\u53E5\uFF0C\u4F7F\u7528yield\u8BED\u53E5\u4E00\u6B21\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\uFF0C\u5728\u6BCF\u4E2A\u7ED3\u679C\u4E4B\u95F4\u6302\u8D77\u548C\u7EE7\u7EED\u5B83\u4EEC\u7684\u72B6\u6001\uFF0C\u4F8B\u7A0B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u751F\u6210\u5668\u51FD\u6570\u65B9\u5F0F\u5B9E\u73B0\u751F\u6210\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">def gensquares(N):</span></span>
<span class="line"><span style="color:#A6ACCD;">	for i in range(N):</span></span>
<span class="line"><span style="color:#A6ACCD;">		yield i**2 </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">print(gensquares(5))</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6253\u5370\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;generator object gensquares at 0x11a35cf48&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in gensquares(5):</span></span>
<span class="line"><span style="color:#A6ACCD;">	print(i) </span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6253\u5370\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;">16</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u751F\u6210\u5668\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9E\u73B0\u751F\u6210\u5668\u5C31\u662F\u7C7B\u4F3C\u5217\u8868\u89E3\u6790\uFF0C\u6309\u9700\u4EA7\u751F\u7ED3\u679C\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F8B\u7A0B\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u751F\u6210\u5668\u8868\u8FBE\u5F0F\u65B9\u5F0F\u5B9E\u73B0\u751F\u6210\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">print(x**2 for x in range(5))</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6253\u5370\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;generator object &lt;genexpr&gt; at 0xb3d31fa4&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(list(x**2 for x in range(5)))</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6253\u5370\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 1, 4, 9, 16]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u901A\u8FC7iterrows()\u904D\u5386\u65B9\u5F0F\u8BA1\u7B97\u80A1\u7968\u6BCF\u4E2A\u4EA4\u6613\u65E5\u6536\u76D8\u4EF7\u4E0EMa20\u5DEE\u503C\uFF0C\u6B64\u5904iterrows\u662F\u5BF9dataframe\u683C\u5F0F\u6570\u636E\u884C\u8FDB\u884C\u8FED\u4EE3\u7684\u4E00\u4E2A\u751F\u6210\u5668\uFF0C\u5B83\u8FD4\u56DE\u6BCF\u884C\u7684\u7D22\u5F15\u53CA\u5305\u542B\u884C\u672C\u8EAB\u7684\u5BF9\u8C61\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#iterrows()\u904D\u5386\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">def iterrows_loopiter(df):</span></span>
<span class="line"><span style="color:#A6ACCD;">    df[&#39;signal&#39;] = 0 #df = df.assign(signal = 0)  #\u53EF\u91C7\u7528assign\u65B0\u589E\u4E00\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">    for index,row in df.iterrows():</span></span>
<span class="line"><span style="color:#A6ACCD;">        df.loc[index, &#39;signal&#39;] = np.sign(row[&#39;Close&#39;]-row[&#39;Ma20&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    return df</span></span>
<span class="line"><span style="color:#A6ACCD;">print(iterrows_loopiter(df_stockload)[0:5])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20  signal</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="apply-\u5FAA\u73AF\u65B9\u5F0F" tabindex="-1">apply()\u5FAA\u73AF\u65B9\u5F0F <a class="header-anchor" href="#apply-\u5FAA\u73AF\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>apply()\u65B9\u6CD5\u53EF\u5C06\u51FD\u6570\u5E94\u7528\u4E8Edataframe\u7279\u5B9A\u884C\u6216\u5217\u3002\u51FD\u6570\u7531lambda\u65B9\u5F0F\u5728\u4EE3\u7801\u4E2D\u5185\u5D4C\u5B9E\u73B0\uFF0Clambda \u4E3A\u533F\u540D\u51FD\u6570\uFF0C\u53EF\u4EE5\u7701\u53BB\u5B9A\u4E49\u51FD\u6570\u7684\u8FC7\u7A0B\uFF0C\u8BA9\u4EE3\u7801\u66F4\u52A0\u7CBE\u7B80\u3002lambda\u51FD\u6570\u7684\u672B\u5C3E\u5305\u542Baxis\u53C2\u6570\uFF0C\u7528\u6765\u544A\u77E5Pandas\u5C06\u51FD\u6570\u8FD0\u7528\u4E8E\u884C\uFF08axis = 1\uFF09\u6216\u8005\u5217\uFF08axis = 0\uFF09\u3002apply()\u65B9\u6CD5\u5FAA\u73AF\u65B9\u5F0F\u5B9E\u73B0\u7684\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">df_stockload[&#39;signal&#39;] = df_stockload.apply(lambda row: (np.sign(row[&#39;Close&#39;]-row[&#39;Ma20&#39;])), axis = 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head())</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20  signal</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F" tabindex="-1">\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F <a class="header-anchor" href="#\u77E2\u91CF\u5316\u904D\u5386\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u6B64\u5904\u6211\u4EEC\u4E3B\u8981\u5904\u7406\u4E00\u7EF4\u6570\u7EC4\u4E4B\u95F4\u7684\u8BA1\u7B97\uFF0C\u90A3\u4E48\u77E2\u91CF\u5316\u65B9\u5F0F\u53EF\u4F7F\u7528Pandas series \u7684\u77E2\u91CF\u5316\u65B9\u5F0F\u548CNumpy arrays\u7684\u77E2\u91CF\u5316\u65B9\u5F0F\u4E24\u79CD\u3002\u5148\u6765\u770B\u4E0BPandas series \u7684\u77E2\u91CF\u5316\u65B9\u5F0F\u3002Pandas\u7684DataFrame\u3001series\u57FA\u7840\u5355\u5143\u6570\u636E\u7ED3\u6784\u57FA\u4E8E\u94FE\u8868\uFF0C\u56E0\u6B64\u53EF\u5C06\u51FD\u6570\u5728\u6574\u4E2A\u94FE\u8868\u4E0A\u8FDB\u884C\u77E2\u91CF\u5316\u64CD\u4F5C\uFF0C\u800C\u4E0D\u7528\u6309\u987A\u5E8F\u6267\u884C\u6BCF\u4E2A\u503C\u3002Pandas\u5305\u62EC\u4E86\u975E\u5E38\u4E30\u5BCC\u7684\u77E2\u91CF\u5316\u51FD\u6570\u5E93\uFF0C\u6211\u4EEC\u53EF\u628A\u6574\u4E2Aseries\uFF08\u5217\uFF09\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\uFF0C\u5BF9\u6574\u4E2A\u94FE\u8868\u8FDB\u884C\u8BA1\u7B97\u3002Pandas series \u7684\u77E2\u91CF\u5316\u65B9\u5F0F\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#Pandas series \u7684\u77E2\u91CF\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">df_stockload[&#39;signal&#39;] = np.sign(df_stockload[&#39;Close&#39;]-df_stockload[&#39;Ma20&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head())</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20  signal</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5BF9\u4E8ENumpy arrays\u7684\u77E2\u91CF\u5316\u65B9\u5F0F\uFF0C\u7531\u4E8E\u672C\u4F8B\u7684\u77E2\u91CF\u5316\u8FD0\u7B97\u4E2D\u53EA\u4F7F\u7528\u4E86series\u7684\u6570\u503C\uFF0C\u65E0\u9700\u4F7F\u7528\u7D22\u5F15\u7B49\u4FE1\u606F\uFF0C\u56E0\u6B64\u53EF\u5C06series\u8F6C\u6362\u4E3Aarray\u7C7B\u578B\uFF0C\u8282\u7701\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u7684\u5F88\u591A\u5F00\u9500\u3002\u6211\u4EEC\u53EF\u4F7F\u7528values \u65B9\u6CD5\u5C06\u94FE\u8868\u4ECEPandas series\u8F6C\u6362\u4E3ANumPy arrays\uFF0C\u628ANumPy array\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\uFF0C\u5BF9\u6574\u4E2A\u94FE\u8868\u8FDB\u884C\u8BA1\u7B97\u3002Numpy arrays\u7684\u77E2\u91CF\u5316\u65B9\u5F0F\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#Numpy arrays\u7684\u77E2\u91CF\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">df_stockload[&#39;signal&#39;] = np.sign(df_stockload[&#39;Close&#39;].values-df_stockload[&#39;Ma20&#39;].values)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(df_stockload.head())</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">              High     Low    Open   Close  Volume  Adj Close    Ma20  signal</span></span>
<span class="line"><span style="color:#A6ACCD;">Date                                                                         </span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-29  3587.0  3510.3  3563.6  3523.0  236000     3523.0  3454.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-30  3523.1  3484.7  3511.5  3488.0  186400     3488.0  3461.3     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-01-31  3495.5  3454.7  3470.5  3480.8  207300     3480.8  3466.8     1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-01  3495.1  3424.4  3478.7  3447.0  260500     3447.0  3469.9    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">2018-02-02  3463.2  3388.9  3419.2  3462.1  208100     3462.1  3473.4    -1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6267\u884C\u6548\u7387\u5BF9\u6BD4" tabindex="-1">\u6267\u884C\u6548\u7387\u5BF9\u6BD4 <a class="header-anchor" href="#\u6267\u884C\u6548\u7387\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p>\u4F7F\u7528timeit\u65B9\u6CD5\u5BF9\u4EE5\u4E0A\u51E0\u79CD\u904D\u5386\u65B9\u5F0F\u8FDB\u884C\u6267\u884C\u65F6\u95F4\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u4F7F\u7528timeit\u65B9\u6CD5\u5BF9\u6BD4\u65B9\u6CD5\u53C2\u8003\u4F8B\u7A0B\u5982\u4E0B\uFF0C\u9700\u8981import timeit\u6A21\u5757\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">from timeit import timeit</span></span>
<span class="line"><span style="color:#A6ACCD;">def test1():</span></span>
<span class="line"><span style="color:#A6ACCD;">    forin_looping(df_stockload)</span></span>
<span class="line"><span style="color:#A6ACCD;">def test2():</span></span>
<span class="line"><span style="color:#A6ACCD;">    iterrows_loopiter(df_stockload)</span></span>
<span class="line"><span style="color:#A6ACCD;">def test3():</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;signal&#39;] = df_stockload.apply(lambda row: (np.sign(row[&#39;Close&#39;] - row[&#39;Ma20&#39;])), axis=1)</span></span>
<span class="line"><span style="color:#A6ACCD;">def test4():</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;signal&#39;] = np.sign(df_stockload[&#39;Close&#39;]-df_stockload[&#39;Ma20&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">def test5():</span></span>
<span class="line"><span style="color:#A6ACCD;">    df_stockload[&#39;signal&#39;] = np.sign(df_stockload[&#39;Close&#39;].values - df_stockload[&#39;Ma20&#39;].values)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#for..in\u5FAA\u73AF\u8FED\u4EE3\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">t1 = timeit(&#39;test1()&#39;, &#39;from __main__ import test1&#39;, number=100)</span></span>
<span class="line"><span style="color:#A6ACCD;">#iterrows()\u904D\u5386\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">t2 = timeit(&#39;test2()&#39;, &#39;from __main__ import test2&#39;, number=100)</span></span>
<span class="line"><span style="color:#A6ACCD;">#apply()\u65B9\u6CD5\u5FAA\u73AF\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">t3 = timeit(&#39;test3()&#39;, &#39;from __main__ import test3&#39;, number=100)</span></span>
<span class="line"><span style="color:#A6ACCD;">#Pandas series \u7684\u77E2\u91CF\u5316\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">t4 = timeit(&#39;test4()&#39;, &#39;from __main__ import test4&#39;, number=100)</span></span>
<span class="line"><span style="color:#A6ACCD;">#Numpy arrays\u7684\u77E2\u91CF\u5316\u65B9\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">t5 = timeit(&#39;test5()&#39;, &#39;from __main__ import test5&#39;, number=100)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(t1,t2,t3,t4,t5)</span></span>
<span class="line"><span style="color:#A6ACCD;">#14.943237108999998 8.827773373 0.5511996379999999 0.02215727200000117 0.012933490000001768</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8E\u6D4B\u8BD5\u73AF\u5883\u5343\u5DEE\u4E07\u522B\uFF0C\u6B64\u5904\u6D4B\u8BD5\u7ED3\u679C\u4EC5\u4F9B\u540C\u5B66\u4EEC\u5BF9\u4E8E\u51E0\u79CD\u904D\u5386\u65B9\u5F0F\u6A2A\u5411\u5BF9\u6BD4\u53C2\u8003\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">loop: 14.943235208999998</span></span>
<span class="line"><span style="color:#A6ACCD;">iterrows: 8.826773373</span></span>
<span class="line"><span style="color:#A6ACCD;">apply: 0.5511994379999999</span></span>
<span class="line"><span style="color:#A6ACCD;">pandas series: 0.02216327200000117 </span></span>
<span class="line"><span style="color:#A6ACCD;">numpy array: 0.012934390000001768</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\u5FAA\u73AF\u6267\u884C\u7684\u901F\u5EA6\u662F\u6700\u6162\u7684\uFF0Citerrows()\u9488\u5BF9Pandas\u7684dataframe\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u76F8\u6BD4\u76F4\u63A5\u5FAA\u73AF\u6709\u663E\u8457\u63D0\u5347\u3002apply()\u65B9\u6CD5\u4E5F\u662F\u5728\u884C\u4E4B\u95F4\u8FDB\u884C\u5FAA\u73AF\uFF0C\u4F46\u7531\u4E8E\u5229\u7528\u4E86\u7C7B\u4F3CCython\u7684\u8FED\u4EE3\u5668\u7684\u4E00\u7CFB\u5217\u5168\u5C40\u4F18\u5316\uFF0C\u5176\u6548\u7387\u8981\u6BD4iterrows\u9AD8\u5F88\u591A\u3002NumPy arrays\u7684\u77E2\u91CF\u5316\u8FD0\u884C\u901F\u5EA6\u6700\u5FEB\uFF0C\u5176\u6B21\u662FPandas series\u77E2\u91CF\u5316\u3002\u7531\u4E8E\u77E2\u91CF\u5316\u662F\u540C\u65F6\u4F5C\u7528\u4E8E\u6574\u4E2A\u5E8F\u5217\u7684\uFF0C\u53EF\u4EE5\u8282\u7701\u66F4\u591A\u7684\u65F6\u95F4\uFF0C\u76F8\u6BD4\u4F7F\u7528\u6807\u91CF\u64CD\u4F5C\u66F4\u597D\uFF0CNumPy\u4F7F\u7528\u9884\u7F16\u8BD1\u7684C\u4EE3\u7801\u5728\u5E95\u5C42\u8FDB\u884C\u4F18\u5316\uFF0C\u540C\u65F6\u4E5F\u907F\u514D\u4E86Pandas series\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u7684\u5F88\u591A\u5F00\u9500\uFF0C\u4F8B\u5982\u7D22\u5F15\u3001\u6570\u636E\u7C7B\u578B\u7B49\u7B49\uFF0C\u56E0\u6B64\uFF0CNumPy arrays\u7684\u64CD\u4F5C\u8981\u6BD4Pandas series\u5FEB\u5F97\u591A\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u672C\u8282\u4ECB\u7ECD\u4E86\u904D\u5386dataframe\u6570\u636E\u7684\u51E0\u79CD\u65B9\u6CD5\uFF0C\u5E76\u4E14\u5BF9\u8FD9\u4E9B\u65B9\u6CD5\u7684\u6267\u884C\u6548\u7387\u8FDB\u884C\u4E86\u76F4\u89C2\u7684\u6BD4\u8F83\u3002\u6211\u4EEC\u770B\u5230\u5FAA\u73AF\u6267\u884C\u7684\u901F\u5EA6\u662F\u6700\u6162\u7684\uFF0C\u800C\u77E2\u91CF\u5316\u65B9\u6CD5\u7684\u6548\u7387\u5374\u51FA\u5947\u7684\u9AD8\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48NumPy\u5E93\u5E7F\u6CDB\u5E94\u7528\u5728\u6570\u636E\u5904\u7406\u4E2D\u7684\u91CD\u8981\u539F\u56E0\uFF0C\u6211\u76F8\u4FE1\u540C\u5B66\u4EEC\u5728\u672C\u5C0F\u8282\u7684\u5B66\u4E60\u540E\u5BF9\u904D\u5386\u6570\u636E\u65F6\u7684\u6267\u884C\u6548\u7387\u6709\u4E00\u5B9A\u7684\u8BA4\u8BC6\uFF0C\u80FD\u591F\u9009\u62E9\u66F4\u5408\u9002\u7684\u904D\u5386\u65B9\u6CD5\u53BB\u5904\u7406\u6570\u636E\u3002</p><p>\u6700\u540E\uFF0C\u7ED9\u5927\u5BB6\u7559\u4E00\u9053\u601D\u8003\u9898\uFF1A</p><p>\u6211\u4EEC\u5BF9\u51E0\u79CD\u904D\u5386\u65B9\u5F0F\u7ECF\u8FC7\u6A2A\u5411\u5BF9\u6BD4\u53D1\u73B0\u4E86\u5B83\u4EEC\u6267\u884C\u901F\u5EA6\u7684\u5FEB\u6162\u987A\u5E8F\uFF0C\u7531\u4E8E\u77E2\u91CF\u5316\u662F\u540C\u65F6\u4F5C\u7528\u4E8E\u6574\u4E2A\u5E8F\u5217\u7684\uFF0C\u53EF\u4EE5\u8282\u7701\u66F4\u591A\u7684\u65F6\u95F4\uFF0C\u76F8\u6BD4\u4F7F\u7528\u6807\u91CF\u64CD\u4F5C\u5F53\u7136\u6548\u7387\u66F4\u9AD8\uFF0C\u90A3\u4E48NumPy arrays\u7684\u64CD\u4F5C\u4E3A\u4EC0\u4E48\u4F1A\u6BD4Pandas series\u5FEB\u5F97\u591A\u5462\uFF1F</p><p>\u6B22\u8FCE\u5927\u5BB6\u5728\u7559\u8A00\u533A\u7559\u8A00\uFF0C\u6211\u4EEC\u4E00\u8D77\u8BA8\u8BBA\u3002</p>`,45),o=[e];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
