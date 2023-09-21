import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as d}from"./app-cfc8e941.js";const i={},s=d(`<p>获取版本号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda --version
conda -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取帮助</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda --help
conda -h
	eg：conda update --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create --name your_env_name
	eg:conda create --name your_env_name python=2.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建包含某些包的环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create --name your_env_name numpy scipy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建指定python版本下包含某些包的环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create --name your_env_name python=3.5 numpy scipy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列举当前所有环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda info --envs
conda env list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到某个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda activate your_env_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出某个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制某个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create --name new_env_name --clone old_env_name 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除某个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda remove --name your_env_name --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分享环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出
conda env export &gt; environment.yml
# 导入
	conda env create -f environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),t=[s];function l(c,r){return n(),a("div",null,t)}const o=e(i,[["render",l],["__file","conda的一些操作.html.vue"]]);export{o as default};
