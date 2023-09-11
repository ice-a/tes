import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-c13b3cb2.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">from</span> pydub<span class="token punctuation">.</span>utils <span class="token keyword">import</span> mediainfo
<span class="token keyword">except</span><span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&quot;pip3 install pydub&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">from</span> pydub<span class="token punctuation">.</span>utils <span class="token keyword">import</span> mediainfo


<span class="token keyword">def</span> <span class="token function">count_time</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    song <span class="token operator">=</span> mediainfo<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
    <span class="token keyword">return</span> song<span class="token punctuation">[</span><span class="token string">&#39;duration&#39;</span><span class="token punctuation">]</span>


<span class="token comment"># 递归统计文件夹下所有文件数量</span>
<span class="token keyword">def</span> <span class="token function">count_file_time</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> all_time
    file_list <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> file_list<span class="token punctuation">:</span>
        file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
            count_file_time<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> file_path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">in</span> file_type<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> count_time<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">)</span>
                all_time <span class="token operator">+=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>count_time<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 放文件路径</span>
path <span class="token operator">=</span> <span class="token string">r&quot;&quot;</span>
file_type <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;wav&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mp3&quot;</span><span class="token punctuation">]</span>
all_time <span class="token operator">=</span> <span class="token number">0</span>
count_file_time<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;共:&quot;</span><span class="token punctuation">,</span> all_time<span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(l,c){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","统计一个文件夹中所有音频的时间.html.vue"]]);export{d as default};
