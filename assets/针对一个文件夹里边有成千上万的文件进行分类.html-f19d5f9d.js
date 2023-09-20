const n=JSON.parse('{"key":"v-6b473b4a","path":"/posts/python/%E9%92%88%E5%AF%B9%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%87%8C%E8%BE%B9%E6%9C%89%E6%88%90%E5%8D%83%E4%B8%8A%E4%B8%87%E7%9A%84%E6%96%87%E4%BB%B6%E8%BF%9B%E8%A1%8C%E5%88%86%E7%B1%BB.html","title":"针对一个文件夹里边有成千上万的文件进行分类","lang":"zh-CN","frontmatter":{"title":"针对一个文件夹里边有成千上万的文件进行分类","category":["python"],"tag":["python","文件","分类"],"description":"import os, shutil path = r\\"文件夹路径\\" # 文件夹路径 data = os.listdir(path) count = 1 p2 = os.path.join(path,\\"_{}\\".format(count)) temp = 0 for i in data: \\tp1 = os.path.join(path,i) temp += 1 if not os.path.exists(p2): os.mkdir(p2) shutil.move(p1, p2) else: shutil.move(p1, p2) print(\\"move\\",p1,\\"&gt;&gt;&gt;\\",p2) if temp % 5 == 0: # 将5改成需要多少个做成一个文件夹 count += 1 p2 = os.path.join(path,\\"_{}\\".format(count))","head":[["meta",{"property":"og:url","content":"https://lideshan.top/posts/python/%E9%92%88%E5%AF%B9%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%87%8C%E8%BE%B9%E6%9C%89%E6%88%90%E5%8D%83%E4%B8%8A%E4%B8%87%E7%9A%84%E6%96%87%E4%BB%B6%E8%BF%9B%E8%A1%8C%E5%88%86%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"木子"}],["meta",{"property":"og:title","content":"针对一个文件夹里边有成千上万的文件进行分类"}],["meta",{"property":"og:description","content":"import os, shutil path = r\\"文件夹路径\\" # 文件夹路径 data = os.listdir(path) count = 1 p2 = os.path.join(path,\\"_{}\\".format(count)) temp = 0 for i in data: \\tp1 = os.path.join(path,i) temp += 1 if not os.path.exists(p2): os.mkdir(p2) shutil.move(p1, p2) else: shutil.move(p1, p2) print(\\"move\\",p1,\\"&gt;&gt;&gt;\\",p2) if temp % 5 == 0: # 将5改成需要多少个做成一个文件夹 count += 1 p2 = os.path.join(path,\\"_{}\\".format(count))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T11:11:28.000Z"}],["meta",{"property":"article:author","content":"爱喝水的木子"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"文件"}],["meta",{"property":"article:tag","content":"分类"}],["meta",{"property":"article:modified_time","content":"2023-08-31T11:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"针对一个文件夹里边有成千上万的文件进行分类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T11:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"爱喝水的木子\\",\\"url\\":\\"https://lideshan.top\\",\\"email\\":\\"muzi@lideshan.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1693480288000,"updatedTime":1693480288000,"contributors":[{"name":"爱喝水的木子","email":"50564847+ice-a@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"posts/python/针对一个文件夹里边有成千上万的文件进行分类.md","localizedDate":"2023年8月31日","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> os<span class=\\"token punctuation\\">,</span> shutil\\n\\npath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">r\\"文件夹路径\\"</span>  <span class=\\"token comment\\"># 文件夹路径</span>\\ndata <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>listdir<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span>\\ncount <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\np2 <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"_{}\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>count<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\ntemp <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n<span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> data<span class=\\"token punctuation\\">:</span>\\n\\tp1 <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span>i<span class=\\"token punctuation\\">)</span>\\n    temp <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>exists<span class=\\"token punctuation\\">(</span>p2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        os<span class=\\"token punctuation\\">.</span>mkdir<span class=\\"token punctuation\\">(</span>p2<span class=\\"token punctuation\\">)</span>\\n        shutil<span class=\\"token punctuation\\">.</span>move<span class=\\"token punctuation\\">(</span>p1<span class=\\"token punctuation\\">,</span> p2<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n        shutil<span class=\\"token punctuation\\">.</span>move<span class=\\"token punctuation\\">(</span>p1<span class=\\"token punctuation\\">,</span> p2<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"move\\"</span><span class=\\"token punctuation\\">,</span>p1<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"&gt;&gt;&gt;\\"</span><span class=\\"token punctuation\\">,</span>p2<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">if</span> temp <span class=\\"token operator\\">%</span> <span class=\\"token number\\">5</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>  <span class=\\"token comment\\"># 将5改成需要多少个做成一个文件夹</span>\\n        count <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n        p2 <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"_{}\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>count<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"爱喝水的木子"},"autoDesc":true}');export{n as data};
