import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-c13b3cb2.js";const s={},a=d(`<h1 id="获取选择到的字" tabindex="-1"><a class="header-anchor" href="#获取选择到的字" aria-hidden="true">#</a> 获取选择到的字</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function getSelectedText() {
	if (window.getSelection) { // This technique is the most likely to be standardized.         
		// getSelection() returns a Selection object, which we do not document.        
		return window.getSelection()
			.toString();
	} else if (document.getSelection) {
		// This is an older, simpler technique that returns a string        
		return document.getSelection();
	} else if (document.selection) {
		// This is the IE-specific technique.         
		// We do not document the IE selection property or TextRange objects.         
		return document.selection.createRange()
			.text;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="阻止右键" tabindex="-1"><a class="header-anchor" href="#阻止右键" aria-hidden="true">#</a> 阻止右键</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>document.body.onselectstart = document.body.oncontextmenu = function() {
	return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="动态加载" tabindex="-1"><a class="header-anchor" href="#动态加载" aria-hidden="true">#</a> 动态加载</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//NO.1
function loadScript(url, callback){
    var script = document.createElement (&quot;script&quot;)
    script.type = &quot;text/javascript&quot;;
    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (this.readyState == &quot;loaded&quot; || this.readyState == &quot;complete&quot;){
                this.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName(&quot;head&quot;)[0].appendChild(script);
}

//NO.2
function loadScript(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(&quot;get&quot;, url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300 || xhr.status == 304){
                var script = document.createElement (&quot;script&quot;);
                script.type = &quot;text/javascript&quot;;
                script.text = xhr.responseText;
                document.body.appendChild(script);
                callback();
            }
        }
    };
    xhr.send(null);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="dom加载完执行" tabindex="-1"><a class="header-anchor" href="#dom加载完执行" aria-hidden="true">#</a> dom加载完执行</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function domLoad(fn){
    if(document.addEventListener){
        document.addEventListener(&quot;DOMContentLoaded&quot;, fn, false);
    }else{
        if(window.ActiveXObject){
            document.write(&quot;&lt;script id=&#39;ie_onload&#39; defer src=&#39;javascript:void(0)&#39;&gt;&lt;\\/script&gt;&quot;);
            document.getElementById(&quot;ie_onload&quot;).onreadystatechange = function(){
                if(this.readyState == &quot;complete&quot;){
                    this.onreadystatechange = null;
                    fn();
                }
            }
        }
        if(/WebKit/i.test(navigator.userAgent)){
            var _timer = setInterval(function(){
                if(/loaded|complete/.test(document.readyState)){
                    clearInterval(_timer);
                    fn();
                }
            }, 10);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="加载样式表" tabindex="-1"><a class="header-anchor" href="#加载样式表" aria-hidden="true">#</a> 加载样式表</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function addSheet(url){
    var oLink = document.createElement(&#39;link&#39;),oHead = document.getElementsByTagName(&#39;head&#39;)[0];
    oLink.rel = &#39;stylesheet&#39;;
    oLink.type = &#39;text/css&#39;;
    oLink.href = url;
    oHead.appendChild(oLink);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="获取css" tabindex="-1"><a class="header-anchor" href="#获取css" aria-hidden="true">#</a> 获取css</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function getStyle(o, attr){
    if(o.currentStyle){
        return o.currentStyle[attr];
    }
    else{
        return getComputedStyle(o,false)[attr];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="获取服务器时间" tabindex="-1"><a class="header-anchor" href="#获取服务器时间" aria-hidden="true">#</a> 获取服务器时间</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function getNowDate(callback){
    var xhr = new XMLHttpRequest();
    xhr.open(&#39;get&#39;, &#39;null.txt&#39;, true); //null.txt不存在，我们不需要
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 3){ //状态3响应
            callback(xhr.getResponseHeader(&#39;Date&#39;)); //返回时间，那么可以利用获得的时间做倒计时程序了。
        }
    };
    xhr.send(null);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="cookie处理" tabindex="-1"><a class="header-anchor" href="#cookie处理" aria-hidden="true">#</a> cookie处理</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function Cookie(name, value, options){
    if(typeof value != &#39;undefined&#39;){
        options = options || {};
        if(value === null){
            options.expires = -1; //过期
        }
        var expires = &#39;&#39;;
        //存在时间选项
        if(options.expires &amp;&amp; (typeof options.expires == &#39;number&#39; || options.expires.toUTCString)){
            var date;
            if(typeof options.expires == &#39;number&#39;){
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            }else{
                date = options.expires;
            }
            expires = &#39;; expires=&#39;+date.toUTCString();
        }
        var path = options.path ? &#39;; path=&#39;+options.path : &#39;&#39;;
        var domain = options.domain ? &#39;; domain=&#39;+options.domain : &#39;&#39;;
        var secure = options.secure ? &#39;; secure&#39; : &#39;&#39;;
        //写入cookie
        document.cookie = [name, &#39;=&#39;, encodeURIComponent(value), expires, path, domain, secure].join(&#39;&#39;);
    }else{//读取cookie
        var cookValue = null;
        if(document.cookie &amp;&amp; document.cookie != &#39;&#39;){
            var cookie = document.cookie.split(&#39;;&#39;);
            for(var i = 0, len = cookie.length; i &lt; len; i++){
                var c = cookie[i].replace(/^\\s+|\\s+$/g, &#39;&#39;);
                if(c.substring(0, name.length + 1) == (name + &#39;=&#39;)){
                    cookValue = decodeURIComponent(c.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookValue;
    }
}
//设置
Cookie(&quot;user&quot;, &quot;Jununx&quot;);
//获取
Cookie(&quot;user&quot;);
//删除
Cookie(&quot;user&quot;, null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[a];function r(t,c){return i(),n("div",null,l)}const o=e(s,[["render",r],["__file","常用的js代码片段.html.vue"]]);export{o as default};
