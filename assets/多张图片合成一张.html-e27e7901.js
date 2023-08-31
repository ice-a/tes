const n=JSON.parse(`{"key":"v-777bf380","path":"/posts/python/%E5%A4%9A%E5%BC%A0%E5%9B%BE%E7%89%87%E5%90%88%E6%88%90%E4%B8%80%E5%BC%A0.html","title":"多张图片合成一张","lang":"zh-CN","frontmatter":{"title":"多张图片合成一张","category":["code"],"tag":["python"],"description":"import cv2 as cv import numpy as np # 读入图片 src = cv.imread('test.jpg') # 调用cv.putText()添加文字 text = \\"Your are so beautiful!\\" AddText = src.copy() cv.putText(AddText, text, (200, 100), cv.FONT_HERSHEY_COMPLEX, 2.0, (100, 200, 200), 5) # 将原图片和添加文字后的图片拼接起来 res = np.hstack([src, AddText]) # 显示拼接后的图片 cv.imshow('text', res) cv.waitKey() cv.destroyAllWindows()","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/python/%E5%A4%9A%E5%BC%A0%E5%9B%BE%E7%89%87%E5%90%88%E6%88%90%E4%B8%80%E5%BC%A0.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"多张图片合成一张"}],["meta",{"property":"og:description","content":"import cv2 as cv import numpy as np # 读入图片 src = cv.imread('test.jpg') # 调用cv.putText()添加文字 text = \\"Your are so beautiful!\\" AddText = src.copy() cv.putText(AddText, text, (200, 100), cv.FONT_HERSHEY_COMPLEX, 2.0, (100, 200, 200), 5) # 将原图片和添加文字后的图片拼接起来 res = np.hstack([src, AddText]) # 显示拼接后的图片 cv.imshow('text', res) cv.waitKey() cv.destroyAllWindows()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T11:11:28.000Z"}],["meta",{"property":"article:author","content":"爱喝水的木子"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:modified_time","content":"2023-08-31T11:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多张图片合成一张\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T11:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"爱喝水的木子\\",\\"url\\":\\"https://lideshan.cn\\",\\"email\\":\\"muzi@lideshan.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1693480288000,"updatedTime":1693480288000,"contributors":[{"name":"爱喝水的木子","email":"50564847+ice-a@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"posts/python/多张图片合成一张.md","localizedDate":"2023年8月31日","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> cv2 <span class=\\"token keyword\\">as</span> cv\\n<span class=\\"token keyword\\">import</span> numpy <span class=\\"token keyword\\">as</span> np\\n<span class=\\"token comment\\"># 读入图片</span>\\nsrc <span class=\\"token operator\\">=</span> cv<span class=\\"token punctuation\\">.</span>imread<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'test.jpg'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 调用cv.putText()添加文字</span>\\ntext <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"Your are so beautiful!\\"</span>\\nAddText <span class=\\"token operator\\">=</span> src<span class=\\"token punctuation\\">.</span>copy<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ncv<span class=\\"token punctuation\\">.</span>putText<span class=\\"token punctuation\\">(</span>AddText<span class=\\"token punctuation\\">,</span> text<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">200</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> cv<span class=\\"token punctuation\\">.</span>FONT_HERSHEY_COMPLEX<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 将原图片和添加文字后的图片拼接起来</span>\\nres <span class=\\"token operator\\">=</span> np<span class=\\"token punctuation\\">.</span>hstack<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>src<span class=\\"token punctuation\\">,</span> AddText<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># 显示拼接后的图片</span>\\ncv<span class=\\"token punctuation\\">.</span>imshow<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'text'</span><span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">)</span>\\ncv<span class=\\"token punctuation\\">.</span>waitKey<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\ncv<span class=\\"token punctuation\\">.</span>destroyAllWindows<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"爱喝水的木子"},"autoDesc":true}`);export{n as data};
