import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-cff74dfe.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">import</span> os
<span class="token keyword">from</span> multiprocessing<span class="token punctuation">.</span>pool <span class="token keyword">import</span> ThreadPool

<span class="token comment"># 获取图片文件大小</span>
<span class="token keyword">def</span> <span class="token function">get_size</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取文件大小:KB</span>
    size <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> size <span class="token operator">/</span> <span class="token number">1024</span>


<span class="token comment"># 拼接输出文件地址</span>
<span class="token keyword">def</span> <span class="token function">get_outfile</span><span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> outfile<span class="token punctuation">:</span>
        <span class="token keyword">return</span> outfile
    <span class="token builtin">dir</span><span class="token punctuation">,</span> suffix <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>infile<span class="token punctuation">)</span>
    outfile <span class="token operator">=</span> <span class="token string">&#39;{}-out{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">,</span> suffix<span class="token punctuation">)</span>
    <span class="token keyword">return</span> outfile


<span class="token comment"># 压缩文件到指定大小</span>
<span class="token keyword">def</span> <span class="token function">compress_image</span><span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> mb<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">,</span> step<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> quality<span class="token operator">=</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 判断该张图片是否压缩</span>
    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>outfile<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;不改变图片尺寸压缩到指定大小
    :param infile: 压缩源文件
    :param outfile: 压缩文件保存地址
    :param mb: 压缩目标，KB
    :param step: 每次调整的压缩比率
    :param quality: 初始压缩比率
    :return: 压缩文件地址，压缩文件大小
    &quot;&quot;&quot;</span>
    o_size <span class="token operator">=</span> get_size<span class="token punctuation">(</span>infile<span class="token punctuation">)</span>
    <span class="token keyword">if</span> o_size <span class="token operator">&lt;=</span> mb<span class="token punctuation">:</span>
        shutil<span class="token punctuation">.</span>copyfile<span class="token punctuation">(</span>infile<span class="token punctuation">,</span>outfile<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;cp:</span><span class="token interpolation"><span class="token punctuation">{</span>infile<span class="token punctuation">}</span></span><span class="token string">&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>outfile<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
    outfile <span class="token operator">=</span> get_outfile<span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token punctuation">)</span>
    <span class="token keyword">while</span> o_size <span class="token operator">&gt;</span> mb<span class="token punctuation">:</span>
        im <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>infile<span class="token punctuation">)</span>
        im<span class="token punctuation">.</span>save<span class="token punctuation">(</span>outfile<span class="token punctuation">,</span> quality<span class="token operator">=</span>quality<span class="token punctuation">)</span>
        <span class="token keyword">if</span> quality <span class="token operator">-</span> step <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        quality <span class="token operator">-=</span> step
        o_size <span class="token operator">=</span> get_size<span class="token punctuation">(</span>outfile<span class="token punctuation">)</span>
    <span class="token keyword">return</span> outfile<span class="token punctuation">,</span> get_size<span class="token punctuation">(</span>outfile<span class="token punctuation">)</span>


<span class="token comment"># 默认600k，但是可能不会到600K,有的压缩不到</span>
path_a <span class="token operator">=</span> <span class="token string">r&quot;文件路径&quot;</span>
path_b <span class="token operator">=</span> <span class="token string">r&quot;文件路径&quot;</span>
<span class="token comment"># 使用线程池提高速度</span>
s <span class="token operator">=</span> ThreadPool<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path_a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    infile <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path_a<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    outfile <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path_b<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token comment"># if os.path.exists(outfile):</span>
    <span class="token comment">#     continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>infile<span class="token punctuation">)</span>
    s<span class="token punctuation">.</span>apply_async<span class="token punctuation">(</span>compress_image<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># compress_image(infile,outfile)</span>
s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(l,c){return s(),a("div",null,o)}const k=n(p,[["render",i],["__file","图片大小压缩.html.vue"]]);export{k as default};
