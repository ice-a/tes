import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-810a1599.js";const e={},p=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> chardet


<span class="token comment"># 获取文件编码</span>
<span class="token keyword">def</span> <span class="token function">get_file_encode</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    获取文件编码
    :param file_path: 文件路径
    :return: 文件编码
    &quot;&quot;&quot;</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">return</span> chardet<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;encoding&#39;</span><span class="token punctuation">]</span>


<span class="token comment"># 获取文件内容</span>
<span class="token keyword">def</span> <span class="token function">get_file_content</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    获取文件内容
    :param file_path: 文件路径
    :return: 文件内容
    &quot;&quot;&quot;</span>
    <span class="token comment"># 临时存储列表</span>
    list_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span>get_file_encode<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> word <span class="token keyword">in</span> line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> word <span class="token keyword">not</span> <span class="token keyword">in</span> list_data<span class="token punctuation">:</span>
                    list_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
    <span class="token keyword">return</span> list_data


<span class="token comment"># 对比两个列表找到相同的值</span>
<span class="token keyword">def</span> <span class="token function">compare_list</span><span class="token punctuation">(</span>list_1<span class="token punctuation">,</span> list_2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    对比两个列表找到相同的值
    :param list_1: 列表1
    :param list_2: 列表2
    :return: 相同的值
    &quot;&quot;&quot;</span>
    list_3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> list_1<span class="token punctuation">:</span>
        <span class="token keyword">if</span> i <span class="token keyword">in</span> list_2<span class="token punctuation">:</span>
            list_3<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> list_3


<span class="token comment"># 将列表数据写入到结果中</span>
<span class="token keyword">def</span> <span class="token function">write_result</span><span class="token punctuation">(</span>list_data<span class="token punctuation">,</span> save_result<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    将列表数据写入到结果中
    :param list_data: 对比的列表文件
    :param save_result:保存结果
    &quot;&quot;&quot;</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> list_data<span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>save_result<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>word <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>


txt1 <span class="token operator">=</span> <span class="token string">&quot;../question1/随机汉字_1.txt&quot;</span>
txt2 <span class="token operator">=</span> <span class="token string">&quot;../question1/随机汉字_2.txt&quot;</span>
save_txt <span class="token operator">=</span> <span class="token string">&quot;../question1/结果.txt&quot;</span>

list_1 <span class="token operator">=</span> get_file_content<span class="token punctuation">(</span>txt1<span class="token punctuation">)</span>
list_2 <span class="token operator">=</span> get_file_content<span class="token punctuation">(</span>txt2<span class="token punctuation">)</span>
list_3 <span class="token operator">=</span> compare_list<span class="token punctuation">(</span>list_1<span class="token punctuation">,</span> list_2<span class="token punctuation">)</span>
write_result<span class="token punctuation">(</span>list_3<span class="token punctuation">,</span> save_txt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function o(l,c){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","对比两个txt获取共同的字.html.vue"]]);export{r as default};
