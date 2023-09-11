import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c as r,a as i,b as n,d as a,w as c,e as m}from"./app-810a1599.js";const v={},o=m(`<h1 id="安装ffmpeg" tabindex="-1"><a class="header-anchor" href="#安装ffmpeg" aria-hidden="true">#</a> 安装ffmpeg</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu
sudo apt update
sudo apt install ffmpeg
ffmpeg -version  # 查看版本 我的是4.x
centos
yum -y install wget
wget --no-check-certificate https://www.johnvansickle.com/ffmpeg/old-releases/ffmpeg-4.0.3-64bit-static.tar.xz
tar -xJf ffmpeg-4.0.3-64bit-static.tar.xz
cd ffmpeg-4.0.3-64bit-static
mv ffmpeg /usr/bin &amp;&amp; mv ffprobe /usr/bin &amp;&amp; mv qt-faststart /usr/bin &amp;&amp; mv ffmpeg-10bit /usr/bin
windows
下载ffmpeg构建好的文件
https://github.com/BtbN/FFmpeg-Builds/releases
添加环境变量路径 ffmpeg/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="b站开启直播" tabindex="-1"><a class="header-anchor" href="#b站开启直播" aria-hidden="true">#</a> B站开启直播</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.登录
2.个人中心
3.我的直播
4.我的直播间
5.选择直播分类
6.点击开始直播
7.复制服务器地址 rtmp://live-push.bilivideo.com/live-bvc/
8.复制串流密钥 ?streamname=xxx
9.组成一个链接之后要用 rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ffmpeg推流" tabindex="-1"><a class="header-anchor" href="#ffmpeg推流" aria-hidden="true">#</a> ffmpeg推流</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>找到一个视频文件随便命名(尽量几个字母)我的是demo.mp4
通过ffmpeg推流示例
ffmpeg -re -stream_loop -1 -i &quot;./demo.mp4&quot; -c copy -f flv &quot;rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="设置后台启动" tabindex="-1"><a class="header-anchor" href="#设置后台启动" aria-hidden="true">#</a> 设置后台启动</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ffmpeg -re -stream_loop -1 -i &quot;./demo.mp4&quot; -c copy -f flv &quot;rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx&quot; &gt;&gt;/dev/null 2&gt;&amp;1 &lt;/dev/null &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果没用什么问题，打开B站直播地址就能看到推流视频
我的直播间测试地址 https://live.bilibili.com/14118989
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="我的直播间" tabindex="-1"><a class="header-anchor" href="#我的直播间" aria-hidden="true">#</a> 我的直播间</h1>`,11),u={href:"https://live.bilibili.com/14118989",target:"_blank",rel:"noopener noreferrer"};function b(p,f){const s=e("ExternalLinkIcon"),d=e("font");return l(),r("div",null,[o,i("p",null,[i("a",u,[n("点击进入"),a(s)])]),a(d,{color:"red"},{default:c(()=>[n("注意版权问题")]),_:1})])}const x=t(v,[["render",b],["__file","ffmpeg推流直播.html.vue"]]);export{x as default};
