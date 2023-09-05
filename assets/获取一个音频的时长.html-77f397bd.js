import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-54f97c4d.js";const s={},a=d(`<h1 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install pydub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import os
import shutil

try:
    from pydub.utils import mediainfo
except:
    os.system(&quot;pip3 install pydub&quot;)
    from pydub.utils import mediainfo


def count_time(file_path):
    song = mediainfo(file_path)
    return float(song[&quot;duration&quot;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[a];function l(r,c){return i(),n("div",null,t)}const m=e(s,[["render",l],["__file","获取一个音频的时长.html.vue"]]);export{m as default};
