import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-cff74dfe.js";const p={},o=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span> shutil

path <span class="token operator">=</span> <span class="token string">r&quot;文件夹路径&quot;</span>  <span class="token comment"># 文件夹路径</span>
data <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
count <span class="token operator">=</span> <span class="token number">1</span>
p2 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token string">&quot;_{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
temp <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> data<span class="token punctuation">:</span>
	p1 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
    temp <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>p2<span class="token punctuation">)</span>
        shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;move&quot;</span><span class="token punctuation">,</span>p1<span class="token punctuation">,</span><span class="token string">&quot;&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span>p2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> temp <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># 将5改成需要多少个做成一个文件夹</span>
        count <span class="token operator">+=</span> <span class="token number">1</span>
        p2 <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token string">&quot;_{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(u,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","针对一个文件夹里边有成千上万的文件进行分类.html.vue"]]);export{r as default};
