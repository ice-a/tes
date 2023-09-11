import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as d}from"./app-810a1599.js";const i={},r=d(`<h1 id="容器崩掉之后自动重启" tabindex="-1"><a class="header-anchor" href="#容器崩掉之后自动重启" aria-hidden="true">#</a> 容器崩掉之后自动重启</h1><h2 id="容器未创建时" tabindex="-1"><a class="header-anchor" href="#容器未创建时" aria-hidden="true">#</a> 容器未创建时</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --restart=always --name 设置容器名 使用的镜像
--restart具体参数值详细信息：
    no　　　　　　　 // 默认策略,容器退出时不重启容器；
    on-failure　　  // 在容器非正常退出时（退出状态非0）才重新启动容器；
    on-failure:3    // 在容器非正常退出时重启容器，最多重启3次；
    always　　　　  // 无论退出状态是如何，都重启容器；
    unless-stopped  // 在容器退出时总是重启容器，但是不考虑在 Docker 守护进程启动时就已经停止了的容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器已经创建" tabindex="-1"><a class="header-anchor" href="#容器已经创建" aria-hidden="true">#</a> 容器已经创建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker update --restart=always 容器ID(或者容器名)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),s=[r];function t(l,c){return a(),n("div",null,s)}const v=e(i,[["render",t],["__file","容器自动重启.html.vue"]]);export{v as default};
