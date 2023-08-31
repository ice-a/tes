const n=JSON.parse(`{"key":"v-4f006a1c","path":"/posts/python/%E7%AD%9B%E9%80%89%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%E6%98%AF0%E7%9A%84.html","title":"筛选文件大小是0Kb的","lang":"zh-CN","frontmatter":{"title":"筛选文件大小是0Kb的","category":["python"],"tag":["python","筛选","文件"],"description":"import os import shutil from multiprocessing.pool import ThreadPool import json # 移动文件夹 def move_data(src, dst): shutil.move(src, dst) def get_size(file): # 获取文件大小:KB size = os.path.getsize(file) return size / 1024 # 读取文件 def read_dir_data(in_file, out_file): th = ThreadPool(8) for i in os.listdir(in_file): t = os.path.join(in_file, i) # 判断json内容是否为空 with open(t,\\"r\\",encoding=\\"utf-8\\")as f: data=json.loads(f.read()) if len(data[\\"shapes\\"])==0: dst = os.path.join(out_file, i) print(\\"move:{}&gt;&gt;&gt;{}\\".format(t, dst)) th.apply_async(move_data, args=(t, dst)) th.close() th.join() if __name__ == '__main__': # 筛选文件夹 in_file=r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\1\\" # 筛选结果文件夹 out_file=r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\2\\" read_dir_data(in_file,out_file)","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/python/%E7%AD%9B%E9%80%89%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%E6%98%AF0%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"筛选文件大小是0Kb的"}],["meta",{"property":"og:description","content":"import os import shutil from multiprocessing.pool import ThreadPool import json # 移动文件夹 def move_data(src, dst): shutil.move(src, dst) def get_size(file): # 获取文件大小:KB size = os.path.getsize(file) return size / 1024 # 读取文件 def read_dir_data(in_file, out_file): th = ThreadPool(8) for i in os.listdir(in_file): t = os.path.join(in_file, i) # 判断json内容是否为空 with open(t,\\"r\\",encoding=\\"utf-8\\")as f: data=json.loads(f.read()) if len(data[\\"shapes\\"])==0: dst = os.path.join(out_file, i) print(\\"move:{}&gt;&gt;&gt;{}\\".format(t, dst)) th.apply_async(move_data, args=(t, dst)) th.close() th.join() if __name__ == '__main__': # 筛选文件夹 in_file=r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\1\\" # 筛选结果文件夹 out_file=r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\2\\" read_dir_data(in_file,out_file)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T11:11:28.000Z"}],["meta",{"property":"article:author","content":"爱喝水的木子"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"筛选"}],["meta",{"property":"article:tag","content":"文件"}],["meta",{"property":"article:modified_time","content":"2023-08-31T11:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"筛选文件大小是0Kb的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T11:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"爱喝水的木子\\",\\"url\\":\\"https://lideshan.cn\\",\\"email\\":\\"muzi@lideshan.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1693480288000,"updatedTime":1693480288000,"contributors":[{"name":"爱喝水的木子","email":"50564847+ice-a@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"posts/python/筛选文件大小是0的.md","localizedDate":"2023年8月31日","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> os\\n<span class=\\"token keyword\\">import</span> shutil\\n<span class=\\"token keyword\\">from</span> multiprocessing<span class=\\"token punctuation\\">.</span>pool <span class=\\"token keyword\\">import</span> ThreadPool\\n<span class=\\"token keyword\\">import</span> json\\n\\n<span class=\\"token comment\\"># 移动文件夹</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">move_data</span><span class=\\"token punctuation\\">(</span>src<span class=\\"token punctuation\\">,</span> dst<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    shutil<span class=\\"token punctuation\\">.</span>move<span class=\\"token punctuation\\">(</span>src<span class=\\"token punctuation\\">,</span> dst<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">get_size</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">file</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># 获取文件大小:KB</span>\\n    size <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>getsize<span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">file</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> size <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1024</span>\\n\\n\\n<span class=\\"token comment\\"># 读取文件</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">read_dir_data</span><span class=\\"token punctuation\\">(</span>in_file<span class=\\"token punctuation\\">,</span> out_file<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    th <span class=\\"token operator\\">=</span> ThreadPool<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> os<span class=\\"token punctuation\\">.</span>listdir<span class=\\"token punctuation\\">(</span>in_file<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        t <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>in_file<span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">)</span>\\n\\n        <span class=\\"token comment\\"># 判断json内容是否为空</span>\\n        <span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">open</span><span class=\\"token punctuation\\">(</span>t<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"r\\"</span><span class=\\"token punctuation\\">,</span>encoding<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"utf-8\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">as</span> f<span class=\\"token punctuation\\">:</span>\\n            data<span class=\\"token operator\\">=</span>json<span class=\\"token punctuation\\">.</span>loads<span class=\\"token punctuation\\">(</span>f<span class=\\"token punctuation\\">.</span>read<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"shapes\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">==</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n            dst <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>out_file<span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"move:{}&gt;&gt;&gt;{}\\"</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>t<span class=\\"token punctuation\\">,</span> dst<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n            th<span class=\\"token punctuation\\">.</span>apply_async<span class=\\"token punctuation\\">(</span>move_data<span class=\\"token punctuation\\">,</span> args<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>t<span class=\\"token punctuation\\">,</span> dst<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n    th<span class=\\"token punctuation\\">.</span>close<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    th<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">if</span> __name__ <span class=\\"token operator\\">==</span> <span class=\\"token string\\">'__main__'</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token comment\\"># 筛选文件夹</span>\\n    in_file<span class=\\"token operator\\">=</span><span class=\\"token string\\">r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\1\\"</span>\\n    <span class=\\"token comment\\"># 筛选结果文件夹</span>\\n    out_file<span class=\\"token operator\\">=</span><span class=\\"token string\\">r\\"C:\\\\Users\\\\DM\\\\Desktop\\\\新建文件夹 (2)\\\\2\\"</span>\\n    read_dir_data<span class=\\"token punctuation\\">(</span>in_file<span class=\\"token punctuation\\">,</span>out_file<span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"爱喝水的木子"},"autoDesc":true}`);export{n as data};
