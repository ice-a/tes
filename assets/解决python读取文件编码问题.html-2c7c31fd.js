import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as t}from"./app-810a1599.js";const d={},s=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import chardet


# 获取文件编码
def get_file_encode(file_path):
    with open(file_path, &#39;rb&#39;) as f:
        return chardet.detect(f.read())[&#39;encoding&#39;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[s];function c(l,r){return n(),i("div",null,a)}const v=e(d,[["render",c],["__file","解决python读取文件编码问题.html.vue"]]);export{v as default};
