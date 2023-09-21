import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-cfc8e941.js";const a={},d=s(`<p>docker方式搭建</p><h1 id="主服务器配置" tabindex="-1"><a class="header-anchor" href="#主服务器配置" aria-hidden="true">#</a> 主服务器配置</h1><h2 id="_1-创建并启动mysql主服务器" tabindex="-1"><a class="header-anchor" href="#_1-创建并启动mysql主服务器" aria-hidden="true">#</a> 1.创建并启动mysql主服务器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3306:3306 -v F:\\db\\mysql\\conf:/etc/mysql/conf.d -v F:\\db\\mysql\\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-master mysql:8.0.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建mysql主服务器配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建mysql主服务器配置文件" aria-hidden="true">#</a> 2.创建mysql主服务器配置文件</h2><p>my.cnf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
# 服务器唯一id，默认值1
server-id=1
# 设置日志格式，默认值ROW
binlog_format=STATEMENT
# 二进制日志名，默认binlog
# log-bin=binlog
# 设置需要复制的数据库，默认复制全部数据库
#binlog-do-db=mytestdb
# 设置不需要复制的数据库
#binlog-ignore-db=mysql
#binlog-ignore-db=infomation_schema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试连接" tabindex="-1"><a class="header-anchor" href="#_3-测试连接" aria-hidden="true">#</a> 3.测试连接</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进入容器：env LANG=C.UTF-8 避免容器中显示中文乱码
docker exec -it mysql-master env LANG=C.UTF-8 /bin/bash
#进入容器内的mysql命令行
mysql -uroot -p123456
#修改默认密码校验方式
ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-主节点创建slave用户" tabindex="-1"><a class="header-anchor" href="#_4-主节点创建slave用户" aria-hidden="true">#</a> 4.主节点创建slave用户</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create user &#39;lds_slave&#39;@&#39;%&#39;;
# 设置密码
alter user &#39;lds_slave&#39;@&#39;%&#39; identified with mysql_native_password by &#39;123456&#39;;
# 授予复制权限
grant replication slave on *.* to &#39;lds_slave&#39;@&#39;%&#39;;
# 刷新权限
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-在主机中查询master的状态" tabindex="-1"><a class="header-anchor" href="#_5-在主机中查询master的状态" aria-hidden="true">#</a> 5.在主机中查询master的状态</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>记录File和Position的值
 File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+----------+--------------+------------------+-------------------+
| binlog.000002 |     1345 |              |                  |                   |
+---------------+----------+--------------+------------------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="从服务器配置" tabindex="-1"><a class="header-anchor" href="#从服务器配置" aria-hidden="true">#</a> 从服务器配置</h1><h2 id="_1-启动从服务器" tabindex="-1"><a class="header-anchor" href="#_1-启动从服务器" aria-hidden="true">#</a> 1.启动从服务器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3307:3306 -v F:\\db\\mysql_slave\\conf:/etc/mysql/conf.d -v F:\\db\\mysql_slave\\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-slave1 mysql:8.0.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-从服务器配置" tabindex="-1"><a class="header-anchor" href="#_2-从服务器配置" aria-hidden="true">#</a> 2.从服务器配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
# 服务器唯一id，每台服务器的id必须不同，如果配置其他从机，注意修改id
server-id=2
# 中继日志名，默认xxxxxxxxxxxx-relay-bin
#relay-log=relay-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试连接-1" tabindex="-1"><a class="header-anchor" href="#_3-测试连接-1" aria-hidden="true">#</a> 3.测试连接</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进入容器：env LANG=C.UTF-8 避免容器中显示中文乱码
docker exec -it mysql-slave1 env LANG=C.UTF-8 /bin/bash
#进入容器内的mysql命令行
mysql -uroot -p123456
#修改默认密码校验方式
ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-在从机中配置主从关系" tabindex="-1"><a class="header-anchor" href="#_4-在从机中配置主从关系" aria-hidden="true">#</a> 4.在从机中配置主从关系</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>change master to master_host=&#39;192.168.28.23&#39;,master_user=&#39;lds_slave&#39;,master_password=&#39;123456&#39;,master_port=3306,master_log_file=&#39;binlog.000002&#39;,master_log_pos=1345;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-启动从机的复制功能" tabindex="-1"><a class="header-anchor" href="#_5-启动从机的复制功能" aria-hidden="true">#</a> 5.启动从机的复制功能</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start slave
# 查看状态(不需要分号)
show slave status\\G
slave_io_running

下边两个都是Yes搭建成功
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="从服务器配置2" tabindex="-1"><a class="header-anchor" href="#从服务器配置2" aria-hidden="true">#</a> 从服务器配置2</h1><h2 id="_1-创建并启动从服务器2" tabindex="-1"><a class="header-anchor" href="#_1-创建并启动从服务器2" aria-hidden="true">#</a> 1.创建并启动从服务器2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3306:3306 -v /home/yuluo/shardingsphere-env/master/conf:/etc/mysql/conf.d -v /home/yuluo/shardingsphere-env/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name yuluo-mysql-master mysql:8.0.29
eg:
docker run -d -p 3308:3306 -v F:\\db\\mysql_slave2\\conf:/etc/mysql/conf.d -v F:\\db\\mysql_slave2\\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql-slave2 mysql:8.0.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件" aria-hidden="true">#</a> 2.配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
# 服务器唯一id，每台服务器的id必须不同，如果配置其他从机，注意修改id
server-id=3
# 中继日志名，默认xxxxxxxxxxxx-relay-bin
#relay-log=relay-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置主从关系" tabindex="-1"><a class="header-anchor" href="#_3-配置主从关系" aria-hidden="true">#</a> 3.配置主从关系</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>change master to master_host=&#39;192.168.28.23&#39;,master_user=&#39;lds_slave&#39;,master_password=&#39;123456&#39;,master_port=3306,master_log_file=&#39;binlog.000002&#39;,master_log_pos=1345;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-启动从机的复制功能" tabindex="-1"><a class="header-anchor" href="#_4-启动从机的复制功能" aria-hidden="true">#</a> 4.启动从机的复制功能</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>start slave
# 查看状态(不需要分号)
show slave status\\G
slave_io_running

下边两个都是Yes搭建成功
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-同步测试" tabindex="-1"><a class="header-anchor" href="#_5-同步测试" aria-hidden="true">#</a> 5.同步测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>master中
CREATE DATABASE db_user;

USE db_user;

CREATE TABLE t_user (
 id BIGINT AUTO_INCREMENT,
 uname VARCHAR(30),
 PRIMARY KEY (id)
);

INSERT INTO t_user(uname) VALUES(&#39;zhang3&#39;);
INSERT INTO t_user(uname) VALUES(@@hostname);
# 在从机中查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="停止和重置" tabindex="-1"><a class="header-anchor" href="#停止和重置" aria-hidden="true">#</a> 停止和重置</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 在从机上执行。功能说明：停止I/O 线程和SQL线程的操作。
stop slave; 

-- 在从机上执行。功能说明：用于删除SLAVE数据库的relaylog日志文件，并重新启用新的relaylog文件。
reset slave;

-- 在主机上执行。功能说明：删除所有的binglog日志文件，并将日志索引文件清空，重新开始所有新的日志文件。
-- 用于第一次进行搭建主从库时，进行主库binlog初始化工作；
reset master;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常见问题错误解决" tabindex="-1"><a class="header-anchor" href="#常见问题错误解决" aria-hidden="true">#</a> 常见问题错误解决</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 在从机停止slave
stop slave; 

-- 在主机查看mater状态
SHOW MASTER STATUS;
-- 在主机刷新日志
FLUSH LOGS;
-- 再次在主机查看mater状态（会发现File和Position发生了变化）
SHOW MASTER STATUS;
-- 修改从机连接主机的SQL，并重新连接即可

-- 查看server_id 
show variables like &#39;server_id&#39;;

-- 如果为1 查看配置文件是否映射进去

重启容器问题解决
启动docker容器后提示 WARNING: IPv4 forwarding is disabled. Networking will not work.
C:\\Users\\administrator&gt;mysql -h 192.168.100.201 -P 3306 -u root -p
#修改配置文件：
vim /usr/lib/sysctl.d/00-system.conf
#追加
net.ipv4.ip_forward=1
#接着重启网络
systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),l=[d];function r(v,t){return i(),n("div",null,l)}const u=e(a,[["render",r],["__file","mysql主从同步集群搭建.html.vue"]]);export{u as default};
