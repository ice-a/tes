import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as d,d as r,w as l,e,b as u}from"./app-54f97c4d.js";const c={},t=e(`<h2 id="安装samba" tabindex="-1"><a class="header-anchor" href="#安装samba" aria-hidden="true">#</a> 安装samba</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> samba <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建共享文件夹" tabindex="-1"><a class="header-anchor" href="#创建共享文件夹" aria-hidden="true">#</a> 创建共享文件夹</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/ubuntu
<span class="token function">mkdir</span> sharefolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建用户并分配不用用户组" tabindex="-1"><a class="header-anchor" href="#创建用户并分配不用用户组" aria-hidden="true">#</a> 创建用户并分配不用用户组</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建用户组
groupadd person
useradd -s /sbin/nologin -M -g person user1
useradd -s /sbin/nologin -M -g person user2
# 创建管理员用户组
groupadd personadmin
useradd -s /sbin/nologin -M -g personadmin useradmin1
useradd -s /sbin/nologin -M -g personadmin useradmin2
# 设置密码
smbpasswd -a XXXX
smbpasswd -a user1
smbpasswd -a user2
smbpasswd -a useradmin1
smbpasswd -a useradmin2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改samba配置" tabindex="-1"><a class="header-anchor" href="#修改samba配置" aria-hidden="true">#</a> 修改samba配置</h2><h3 id="在这个位置" tabindex="-1"><a class="header-anchor" href="#在这个位置" aria-hidden="true">#</a> 在这个位置</h3><figure><img src="https://lideshan.cn/zb_users/upload/2022/05/202205271057358974598.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加以下信息" tabindex="-1"><a class="header-anchor" href="#添加以下信息" aria-hidden="true">#</a> 添加以下信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[spider]  # 共享的名字
   comment = sambaadmin dm # 共享的简介
   path = /home/ubuntu/sharefolder   # 共享路径
   public = yes   # 是否开放
   writeable = yes   # 是否可写
   read only = no   # 是否只读
   valid users = @person, @personadmin # 允许访问的用户组,用户直接dm1,d1
   create mask = 0777 # 创建文件给予的权限
   force create mask = 0777  # 强制文件的权限
   directory mask = 0777   # 创建文件夹给予的权限
   force directory mask = 0777 # 强制文件夹的权限
   force user = ubuntu   # 强制归属于ubuntu用户
   browseable = yes   # 允许打开
   available = yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启samba服务" tabindex="-1"><a class="header-anchor" href="#重启samba服务" aria-hidden="true">#</a> 重启samba服务</h2>`,12),o=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo /etc/init.d/smbd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="账号不能使用问题" tabindex="-1"><a class="header-anchor" href="#账号不能使用问题" aria-hidden="true">#</a> 账号不能使用问题</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除samba账号
sudo smbpasswd -d lds
# 删除用户
sudo userdel -r lds
# 创建没有文件夹的账号
sudo useradd -s /sbin/nologin -M -g dmai lds
# 设置samba账号密码
sudo smbpasswd -a lds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,b){const a=n("font");return i(),d("div",null,[t,r(a,{color:"Red"},{default:l(()=>[u("注意：重启服务的时候一定要把正在操作的文件给关闭掉，不然可能会出问题")]),_:1}),o])}const g=s(c,[["render",m],["__file","关于ubuntu服务器启动samba并创建不同用户组访问限制.html.vue"]]);export{g as default};
