const n=JSON.parse(`{"key":"v-39e055ce","path":"/posts/python/%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E4%B8%AD%E6%89%80%E6%9C%89%E9%9F%B3%E9%A2%91%E7%9A%84%E6%97%B6%E9%97%B4.html","title":"统计一个文件夹中所有音频的时间(python)","lang":"zh-CN","frontmatter":{"title":"统计一个文件夹中所有音频的时间(python)","category":["python"],"tag":["python","pydub","音频","文件"],"description":"import os try: from pydub.utils import mediainfo except: os.system(\\"pip3 install pydub\\") from pydub.utils import mediainfo def count_time(file_path): song = mediainfo(file_path) return song['duration'] # 递归统计文件夹下所有文件数量 def count_file_time(path): global all_time file_list = os.listdir(path) for file in file_list: file_path = os.path.join(path, file) if os.path.isdir(file_path): count_file_time(file_path) else: if file_path.split(\\".\\")[-1] in file_type: print(file_path, count_time(file_path)) all_time += float(count_time(file_path)) # 放文件路径 path = r\\"\\" file_type = [\\"wav\\", \\"mp3\\"] all_time = 0 count_file_time(path) print(\\"共:\\", all_time, \\"秒\\")","head":[["meta",{"property":"og:url","content":"https://lideshan.top/posts/python/%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E4%B8%AD%E6%89%80%E6%9C%89%E9%9F%B3%E9%A2%91%E7%9A%84%E6%97%B6%E9%97%B4.html"}],["meta",{"property":"og:site_name","content":"木子"}],["meta",{"property":"og:title","content":"统计一个文件夹中所有音频的时间(python)"}],["meta",{"property":"og:description","content":"import os try: from pydub.utils import mediainfo except: os.system(\\"pip3 install pydub\\") from pydub.utils import mediainfo def count_time(file_path): song = mediainfo(file_path) return song['duration'] # 递归统计文件夹下所有文件数量 def count_file_time(path): global all_time file_list = os.listdir(path) for file in file_list: file_path = os.path.join(path, file) if os.path.isdir(file_path): count_file_time(file_path) else: if file_path.split(\\".\\")[-1] in file_type: print(file_path, count_time(file_path)) all_time += float(count_time(file_path)) # 放文件路径 path = r\\"\\" file_type = [\\"wav\\", \\"mp3\\"] all_time = 0 count_file_time(path) print(\\"共:\\", all_time, \\"秒\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T11:11:28.000Z"}],["meta",{"property":"article:author","content":"爱喝水的木子"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"pydub"}],["meta",{"property":"article:tag","content":"音频"}],["meta",{"property":"article:tag","content":"文件"}],["meta",{"property":"article:modified_time","content":"2023-08-31T11:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"统计一个文件夹中所有音频的时间(python)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T11:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"爱喝水的木子\\",\\"url\\":\\"https://lideshan.top\\",\\"email\\":\\"muzi@lideshan.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1693480288000,"updatedTime":1693480288000,"contributors":[{"name":"爱喝水的木子","email":"50564847+ice-a@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"posts/python/统计一个文件夹中所有音频的时间.md","localizedDate":"2023年8月31日","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> os\\n\\n<span class=\\"token keyword\\">try</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">from</span> pydub<span class=\\"token punctuation\\">.</span>utils <span class=\\"token keyword\\">import</span> mediainfo\\n<span class=\\"token keyword\\">except</span><span class=\\"token punctuation\\">:</span>\\n    os<span class=\\"token punctuation\\">.</span>system<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pip3 install pydub\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">from</span> pydub<span class=\\"token punctuation\\">.</span>utils <span class=\\"token keyword\\">import</span> mediainfo\\n\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">count_time</span><span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    song <span class=\\"token operator\\">=</span> mediainfo<span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> song<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'duration'</span><span class=\\"token punctuation\\">]</span>\\n\\n\\n<span class=\\"token comment\\"># 递归统计文件夹下所有文件数量</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">count_file_time</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">global</span> all_time\\n    file_list <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>listdir<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token builtin\\">file</span> <span class=\\"token keyword\\">in</span> file_list<span class=\\"token punctuation\\">:</span>\\n        file_path <span class=\\"token operator\\">=</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>join<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">file</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> os<span class=\\"token punctuation\\">.</span>path<span class=\\"token punctuation\\">.</span>isdir<span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            count_file_time<span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">if</span> file_path<span class=\\"token punctuation\\">.</span>split<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\".\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token keyword\\">in</span> file_type<span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">,</span> count_time<span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                all_time <span class=\\"token operator\\">+=</span> <span class=\\"token builtin\\">float</span><span class=\\"token punctuation\\">(</span>count_time<span class=\\"token punctuation\\">(</span>file_path<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\"># 放文件路径</span>\\npath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">r\\"\\"</span>\\nfile_type <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"wav\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"mp3\\"</span><span class=\\"token punctuation\\">]</span>\\nall_time <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\ncount_file_time<span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"共:\\"</span><span class=\\"token punctuation\\">,</span> all_time<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"秒\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"爱喝水的木子"},"autoDesc":true}`);export{n as data};
