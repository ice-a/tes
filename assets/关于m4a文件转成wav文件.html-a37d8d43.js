import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as t}from"./app-54f97c4d.js";const c={},n=t(`<p>m4a文件转为16bit,单声道,采样率为48kHz</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for i in *.m4a; do ffmpeg -i &quot;$i&quot; -acodec pcm_s16le -ac 1 -ar 48000 &quot;\${i%}.wav&quot;; done
-acodec pcm_s16le:16bit
-ac 1:单声道
-ar 48000:48kHZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[n];function o(d,r){return a(),i("div",null,s)}const m=e(c,[["render",o],["__file","关于m4a文件转成wav文件.html.vue"]]);export{m as default};
