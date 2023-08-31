import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-cff74dfe.js";const p={},o=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> shutil
<span class="token keyword">from</span> multiprocessing<span class="token punctuation">.</span>pool <span class="token keyword">import</span> ThreadPool
<span class="token keyword">import</span> json

<span class="token comment"># 移动文件夹</span>
<span class="token keyword">def</span> <span class="token function">move_data</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> dst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span>src<span class="token punctuation">,</span> dst<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_size</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取文件大小:KB</span>
    size <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> size <span class="token operator">/</span> <span class="token number">1024</span>


<span class="token comment"># 读取文件</span>
<span class="token keyword">def</span> <span class="token function">read_dir_data</span><span class="token punctuation">(</span>in_file<span class="token punctuation">,</span> out_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
    th <span class="token operator">=</span> ThreadPool<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>in_file<span class="token punctuation">)</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>in_file<span class="token punctuation">,</span> i<span class="token punctuation">)</span>

        <span class="token comment"># 判断json内容是否为空</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token keyword">as</span> f<span class="token punctuation">:</span>
            data<span class="token operator">=</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">&quot;shapes&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
            dst <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>out_file<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;move:{}&gt;&gt;&gt;{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> dst<span class="token punctuation">)</span><span class="token punctuation">)</span>
            th<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>move_data<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> dst<span class="token punctuation">)</span><span class="token punctuation">)</span>

    th<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    th<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token comment"># 筛选文件夹</span>
    in_file<span class="token operator">=</span><span class="token string">r&quot;C:\\Users\\DM\\Desktop\\新建文件夹 (2)\\1&quot;</span>
    <span class="token comment"># 筛选结果文件夹</span>
    out_file<span class="token operator">=</span><span class="token string">r&quot;C:\\Users\\DM\\Desktop\\新建文件夹 (2)\\2&quot;</span>
    read_dir_data<span class="token punctuation">(</span>in_file<span class="token punctuation">,</span>out_file<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","筛选文件大小是0的.html.vue"]]);export{r as default};
