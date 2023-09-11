import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,e}from"./app-c13b3cb2.js";const l={},d=e(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>powershell
set-executionpolicy remotesigned -scope currentuser
iwr -useb get.scoop.sh | iex
# 修改路径
$env:SCOOP=&#39;F:\\App\\scoop&#39;
[Environment]::SetEnvironmentVariable(&#39;SCOOP&#39;, $env:SCOOP, &#39;User&#39;)
# 配置环境变量
scoop bucket known  # 查看软件商店
scoop bucket add &lt;bucketname&gt;  安装软甲商店

# 查找软件
scoop search &lt;app&gt;
# 安装软件
scoop install &lt;app&gt;
# 查看软件详细信息
scoop info &lt;app&gt;
# 查看已安装的软件
scoop list
# 卸载软件 -p删除配置文件
scoop uninstall &lt;app&gt;
# 更新scoop本体和软件列表
scoop update
# 更新指定app
scoop update &lt;app&gt;
# 更新所有已安装的软件
scoop update *
# 检查scoop的问题并给出解决问题的建议
scoop checkup
# 查看命令列表
scoop help
# 显示安装包缓存
scoop cache show
# 删除指定的应用包的缓存
scoop cache rm &lt;app&gt;
# 删除所有应用包的缓存
scoop cache rm *
# 安装或更新不需要缓存可以添加参数 -k 或者--no-cache
scoop install -k &lt;app&gt;
scoop update -k *
# 删除旧版本的软件
scoop cleanup [-k] &lt;app&gt;
# 删除所有软件的旧版本
scoop cleanup [-k] *
# 全局安装
scoop install sudo
sudo scoop install -g &lt;app&gt;
scoop list
# 开启多线程下载
scoop instll aria2
# 配置
scoop config aria2-enabled false  # 开启aria2下载
aria2-retry-wait 重试等待秒数 2
aria2-split 单任务 最大连接数 5
aria2-max-connection-per-server 单服务器最大链接数 5 16
aria2-min-split-size 最小文件分片大小 5M

# example:
scoop config aria2-split 32
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 1M

# finally
# 更新 scoop 及软件包列表 
scoop update 
# 非全局安装（并禁止安装包缓存） 
scoop install -k &lt;app&gt; 
# 全局安装（并禁止安装包缓存） 
sudo scoop install -gk &lt;app&gt; 
# 卸载非全局软件（并删除配置文件） 
scoop uninstall -p &lt;app&gt;
#卸载全局软件（并删除配置文件） 
sudo scoop uninstall -gp &lt;app&gt; 
# 更新所有非全局软件（并禁止安装包缓存） 
scoop update -k * 
# 更新所有软件（并禁止安装包缓存） 
sudo scoop update -gk * 
# 删除所有旧版本非全局软件（并删除软件包缓存） 
scoop cleanup -k * 
# 删除所有旧版本软件（并删除软件包缓存） 
sudo scoop cleanup -gk * 
# 清除软件包缓存 
scoop cache rm *

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function c(v,r){return i(),s("div",null,a)}const p=n(l,[["render",c],["__file","windows包管理器scoop.html.vue"]]);export{p as default};
