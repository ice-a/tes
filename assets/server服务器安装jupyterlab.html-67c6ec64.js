import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as n}from"./app-c13b3cb2.js";const r={},d=n(`<h1 id="安装jupyterlab" tabindex="-1"><a class="header-anchor" href="#安装jupyterlab" aria-hidden="true">#</a> 安装jupyterlab</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install jupyterlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="安装ipython" tabindex="-1"><a class="header-anchor" href="#安装ipython" aria-hidden="true">#</a> 安装ipython</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install ipython
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="设置jupyterlab密码" tabindex="-1"><a class="header-anchor" href="#设置jupyterlab密码" aria-hidden="true">#</a> 设置JupyterLab密码</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipython
from notebook.auth import passwd
passwd() # 输入密码
# 记录输出的结果,之后要用
&#39;argon2:$argon2id$v=19$m=10240,t=10,p=8$SLoIJjMvYC8ICwT+rJhpxQ$AekuE8hCGRSC8qc9C6/VNuacsqlGnlLO5fSnJqk78KI&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="创建jupyterlab-配置文件" tabindex="-1"><a class="header-anchor" href="#创建jupyterlab-配置文件" aria-hidden="true">#</a> 创建JupyterLab 配置文件</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jupyter lab --generate-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim ~/.jupyter/jupyter_lab_config.py
# 修改以下配置
c.ServerApp.root_dir = &#39;/home/jupyter&#39;	# 大概在999行
c.ServerApp.allow_root = True			# 大概在698行
c.ServerApp.open_browser = False		# 大概在957行
c.ServerApp.password = 刚才记录的密码		# 大概在961行
c.ServerApp.allow_remote_access = True  # 大概在694行
c.ServerApp.ip = &#39;*&#39;  #监听地址			# 大概在853行
c.ServerApp.port = 8848  #端口，默认8888	# 大概在969行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装其他包" tabindex="-1"><a class="header-anchor" href="#安装其他包" aria-hidden="true">#</a> 安装其他包</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install jupyterlab-language-pack-zh-CN # 中文
登录JupyterLab，在菜单里选择&#39;设置&#39; -&gt; &#39;语言&#39;，选择 &#39;中文&#39;
pip install jupyterlab-kite # 代码补全
pip install jupyterlab-system-monitor # 性能监控
pip install jupyterlab-spellchecker # 拼写检查
pip install black isort  # 代码格式化
pip install jupyterlab-code-formatter	# 代码格式化
pip install jupyterlab-git	# git
conda install nb_conda	# 关联conda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="后台启动" tabindex="-1"><a class="header-anchor" href="#后台启动" aria-hidden="true">#</a> 后台启动</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup jupyter-lab &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h1><h2 id="jupyterlab使用plotly图片不显示解决方法" tabindex="-1"><a class="header-anchor" href="#jupyterlab使用plotly图片不显示解决方法" aria-hidden="true">#</a> Jupyterlab使用plotly图片不显示解决方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda install nodejs # 需要先安装nodejs
jupyter labextension install jupyterlab-plotly@4.14.3
# 测试
import plotly.graph_objects as go
fig = go.Figure(data=go.Bar(y=[2, 3, 1]))
fig.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function t(s,c){return a(),i("div",null,l)}const p=e(r,[["render",t],["__file","server服务器安装jupyterlab.html.vue"]]);export{p as default};
