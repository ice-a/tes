import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as l,d as t,w as r,a as e,b as n,e as u}from"./app-c13b3cb2.js";const o={},c=e("h1",{id:"clone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clone","aria-hidden":"true"},"#"),n(" clone")],-1),v=e("p",null,"逛GitHub遇到喜欢的项目但是暂时又不想看可以clone",-1),m=u(`<h2 id="flask-demo" tabindex="-1"><a class="header-anchor" href="#flask-demo" aria-hidden="true">#</a> flask demo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from flask import *
import os
import uuid

from pip import main

app = Flask(__name__)


# post请求提交的数据都在json中
@app.route(&#39;/github&#39;, methods=[&#39;POST&#39;, &#39;GET&#39;])
def login():
    if request.method == &#39;POST&#39;:
        github_url = request.form.get(&#39;url&#39;, &#39;&#39;)
        github_name = request.form.get(&#39;name&#39;, &#39;&#39;)
        with open(&quot;download.txt&quot;, &quot;a&quot;) as f:
            f.write(github_url + &quot;\\t&quot; + github_name + &quot;\\n&quot;)
        if not github_name:
            github_name = uuid.uuid1().hex
        call = &quot;git clone {} {}&quot;.format(
            github_url,
            os.path.join(&quot;/data/github&quot;, github_name.replace(&quot; &quot;, &quot;_&quot;)))
        print(call)
        os.system(call)
        return jsonify({&#39;msg&#39;: &#39;ok&#39;, &quot;status&quot;: &quot;created&quot;, &quot;name&quot;: github_name})
    else:
        return jsonify({&#39;msg&#39;: &#39;error&#39;})


if __name__ == &#39;__main__&#39;:
    app.run(host=&#39;0.0.0.0&#39;, port=5000, debug=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upload-code" tabindex="-1"><a class="header-anchor" href="#upload-code" aria-hidden="true">#</a> upload code</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests

headers = {
    &#39;User-Agent&#39;: &#39;Apipost client Runtime/+https://www.apipost.cn/&#39;,
}

data = {
  &#39;url&#39;: &#39;XXXXXX&#39;,
  &#39;name&#39;: &#39;XXXXXX&#39;
}

response = requests.post(&#39;http://XXXXX:5000/github&#39;, headers=headers, data=data)
pritn(response.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(_,h){const i=d("font");return a(),l("div",null,[c,v,t(i,{color:"red"},{default:r(()=>[n("方法:服务器搭建一个简单的flask dmeo，遇到喜欢的把链接发送给服务器，让服务器去下载，我们去干别的事")]),_:1}),m])}const g=s(o,[["render",b],["__file","逛github遇到喜欢的项目但是没时间去看的解决方法.html.vue"]]);export{g as default};
