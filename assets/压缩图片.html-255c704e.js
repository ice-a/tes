import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-cfc8e941.js";const e={},p=t(`<h1 id="基于pillow进行图片压缩" tabindex="-1"><a class="header-anchor" href="#基于pillow进行图片压缩" aria-hidden="true">#</a> 基于pillow进行图片压缩</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image


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


<span class="token comment"># 压缩图片方法(配置即可用_1007)</span>
<span class="token keyword">def</span> <span class="token function">compress_image</span><span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> mb<span class="token operator">=</span><span class="token number">600</span><span class="token punctuation">,</span> step<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> quality<span class="token operator">=</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
        <span class="token keyword">return</span> infile
    outfile <span class="token operator">=</span> get_outfile<span class="token punctuation">(</span>infile<span class="token punctuation">,</span> outfile<span class="token punctuation">)</span>
    <span class="token keyword">while</span> o_size <span class="token operator">&gt;</span> mb<span class="token punctuation">:</span>
        im <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>infile<span class="token punctuation">)</span>
        im<span class="token punctuation">.</span>save<span class="token punctuation">(</span>outfile<span class="token punctuation">,</span> quality<span class="token operator">=</span>quality<span class="token punctuation">)</span>
        <span class="token keyword">if</span> quality <span class="token operator">-</span> step <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>
        quality <span class="token operator">-=</span> step
        o_size <span class="token operator">=</span> get_size<span class="token punctuation">(</span>outfile<span class="token punctuation">)</span>
    <span class="token keyword">return</span> outfile<span class="token punctuation">,</span> get_size<span class="token punctuation">(</span>outfile<span class="token punctuation">)</span>


<span class="token comment"># 扩展压缩</span>
a <span class="token operator">=</span> <span class="token string">r&quot;C:\\Users\\DM\\Desktop\\图片过长\\新建文件夹\\1&quot;</span>
b <span class="token operator">=</span> <span class="token string">r&quot;C:\\Users\\DM\\Desktop\\图片过长\\新建文件夹\\2&quot;</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">:</span>
    in_file <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    out_file <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>b<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>in_file<span class="token punctuation">,</span> out_file<span class="token punctuation">)</span>
    compress_image<span class="token punctuation">(</span>in_file<span class="token punctuation">,</span> out_file<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function o(l,c){return s(),a("div",null,i)}const k=n(e,[["render",o],["__file","压缩图片.html.vue"]]);export{k as default};
