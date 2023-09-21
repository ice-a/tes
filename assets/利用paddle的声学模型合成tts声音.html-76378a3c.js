import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-cfc8e941.js";const t={},p=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
conda create -n audio python=3.7
conda activate audio
conda install -y -c conda-forge sox libsndfile bzip2
pip install pytest-runner -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
pip install paddlespeech -i https://pypi.tuna.tsinghua.edu.cn/simple
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> paddle
<span class="token keyword">from</span> paddlespeech<span class="token punctuation">.</span>cli <span class="token keyword">import</span> TTSExecutor

tts_executor <span class="token operator">=</span> TTSExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span>
wav_file <span class="token operator">=</span> tts_executor<span class="token punctuation">(</span>
    text<span class="token operator">=</span><span class="token string">&#39;今天天气挺好的&#39;</span><span class="token punctuation">,</span>
    output<span class="token operator">=</span><span class="token string">&#39;output.wav&#39;</span><span class="token punctuation">,</span>
    am<span class="token operator">=</span><span class="token string">&#39;fastspeech2_csmsc&#39;</span><span class="token punctuation">,</span>
    am_config<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    am_ckpt<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    am_stat<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    spk_id<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>
    phones_dict<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    tones_dict<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    speaker_dict<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    voc<span class="token operator">=</span><span class="token string">&#39;pwgan_csmsc&#39;</span><span class="token punctuation">,</span>
    voc_config<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    voc_ckpt<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    voc_stat<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    lang<span class="token operator">=</span><span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span>
    device<span class="token operator">=</span>paddle<span class="token punctuation">.</span>get_device<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Wave file has been generated: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>wav_file<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","利用paddle的声学模型合成tts声音.html.vue"]]);export{d as default};
