const e=JSON.parse('{"key":"v-aa0ac5b6","path":"/posts/Javascript/%E5%B8%B8%E7%94%A8%E7%9A%84js%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html","title":"常用的js代码片段","lang":"zh-CN","frontmatter":{"title":"常用的js代码片段","category":["code"],"tag":["javascript","code"],"description":"获取选择到的字 function getSelectedText() { \\tif (window.getSelection) { // This technique is the most likely to be standardized. \\t\\t// getSelection() returns a Selection object, which we do not document. \\t\\treturn window.getSelection() \\t\\t\\t.toString(); \\t} else if (document.getSelection) { \\t\\t// This is an older, simpler technique that returns a string \\t\\treturn document.getSelection(); \\t} else if (document.selection) { \\t\\t// This is the IE-specific technique. \\t\\t// We do not document the IE selection property or TextRange objects. \\t\\treturn document.selection.createRange() \\t\\t\\t.text; \\t} }","head":[["meta",{"property":"og:url","content":"https://lideshan.top/posts/Javascript/%E5%B8%B8%E7%94%A8%E7%9A%84js%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html"}],["meta",{"property":"og:site_name","content":"木子"}],["meta",{"property":"og:title","content":"常用的js代码片段"}],["meta",{"property":"og:description","content":"获取选择到的字 function getSelectedText() { \\tif (window.getSelection) { // This technique is the most likely to be standardized. \\t\\t// getSelection() returns a Selection object, which we do not document. \\t\\treturn window.getSelection() \\t\\t\\t.toString(); \\t} else if (document.getSelection) { \\t\\t// This is an older, simpler technique that returns a string \\t\\treturn document.getSelection(); \\t} else if (document.selection) { \\t\\t// This is the IE-specific technique. \\t\\t// We do not document the IE selection property or TextRange objects. \\t\\treturn document.selection.createRange() \\t\\t\\t.text; \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T11:11:28.000Z"}],["meta",{"property":"article:author","content":"爱喝水的木子"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:tag","content":"code"}],["meta",{"property":"article:modified_time","content":"2023-08-31T11:11:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用的js代码片段\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T11:11:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"爱喝水的木子\\",\\"url\\":\\"https://lideshan.top\\",\\"email\\":\\"muzi@lideshan.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1693480288000,"updatedTime":1693480288000,"contributors":[{"name":"爱喝水的木子","email":"50564847+ice-a@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.65,"words":495},"filePathRelative":"posts/Javascript/常用的js代码片段.md","localizedDate":"2023年8月31日","excerpt":"<h1> 获取选择到的字</h1>\\n<div class=\\"language-JavaScript line-numbers-mode\\" data-ext=\\"JavaScript\\"><pre class=\\"language-JavaScript\\"><code>function getSelectedText() {\\n\\tif (window.getSelection) { // This technique is the most likely to be standardized.         \\n\\t\\t// getSelection() returns a Selection object, which we do not document.        \\n\\t\\treturn window.getSelection()\\n\\t\\t\\t.toString();\\n\\t} else if (document.getSelection) {\\n\\t\\t// This is an older, simpler technique that returns a string        \\n\\t\\treturn document.getSelection();\\n\\t} else if (document.selection) {\\n\\t\\t// This is the IE-specific technique.         \\n\\t\\t// We do not document the IE selection property or TextRange objects.         \\n\\t\\treturn document.selection.createRange()\\n\\t\\t\\t.text;\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"爱喝水的木子"},"autoDesc":true}');export{e as data};
