import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-47834413.js";const t={},e=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> win32com<span class="token punctuation">.</span>client
<span class="token keyword">import</span> os
<span class="token keyword">def</span> <span class="token function">ppt2pdf</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> output_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    PPT文件导出为pdf格式
    :param filename: PPT文件的名称
    :param output_filename: 导出的pdf文件的名称
    :return:
    &quot;&quot;&quot;</span>
    ppt_app <span class="token operator">=</span> win32com<span class="token punctuation">.</span>client<span class="token punctuation">.</span>Dispatch<span class="token punctuation">(</span><span class="token string">&#39;PowerPoint.Application&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># ppt_app.Visible = True  # 程序操作应用程序的过程是否可视化</span>
    ppt <span class="token operator">=</span> ppt_app<span class="token punctuation">.</span>Presentations<span class="token punctuation">.</span>Open<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    <span class="token comment"># 17数字是ppt转图片，32数字是ppt转pdf</span>
    ppt<span class="token punctuation">.</span>SaveAs<span class="token punctuation">(</span>output_filename<span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;导出成pdf格式成功!!!&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 退出PPT程序</span>
    ppt_app<span class="token punctuation">.</span>Quit<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 要处理的目录名称</span>
dirname <span class="token operator">=</span> <span class="token string">r&#39;&#39;</span>
filenames <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>dirname<span class="token punctuation">)</span>
<span class="token keyword">for</span> filename <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
    <span class="token keyword">if</span> filename<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;ppt&#39;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> filename<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;pptx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        base<span class="token punctuation">,</span> ext <span class="token operator">=</span> filename<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
        new_name <span class="token operator">=</span> base <span class="token operator">+</span> <span class="token string">&#39;.pdf&#39;</span>
        filename <span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>filename<span class="token punctuation">)</span>
        output_filename <span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>new_name<span class="token punctuation">)</span>
        ppt2pdf<span class="token punctuation">(</span>filename<span class="token punctuation">,</span> output_filename<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","ppt转pdf.html.vue"]]);export{d as default};
