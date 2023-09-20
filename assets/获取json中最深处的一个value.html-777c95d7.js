import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-dd3d4d63.js";const e={},p=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> time
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;../question2/用代码实现找到字典中的value.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>


<span class="token comment"># 统计耗时</span>
<span class="token keyword">def</span> <span class="token function">count_running</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token operator">*</span>arg<span class="token punctuation">,</span> <span class="token operator">**</span>kwarg<span class="token punctuation">)</span><span class="token punctuation">:</span>
        s_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        res <span class="token operator">=</span> f<span class="token punctuation">(</span><span class="token operator">*</span>arg<span class="token punctuation">,</span> <span class="token operator">**</span>kwarg<span class="token punctuation">)</span>
        e_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;耗时：{}秒&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>e_time <span class="token operator">-</span> s_time<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> res

    <span class="token keyword">return</span> inner


<span class="token comment"># 递归获取</span>
<span class="token decorator annotation punctuation">@count_running</span>
<span class="token keyword">def</span> <span class="token function">recursion_get_value</span><span class="token punctuation">(</span>dict_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> dict_data<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">dict</span><span class="token punctuation">:</span>
            recursion_get_value<span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;recursion_get_value:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>


recursion_get_value<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","获取json中最深处的一个value.html.vue"]]);export{k as default};
