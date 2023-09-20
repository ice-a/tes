import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as a,d as t,w as s,e as r,b as l}from"./app-dd3d4d63.js";const c={},u=r(`<h2 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create -n ocr python=3.8
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
pip install paddlehub -i https://mirror.baidu.com/pypi/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两种使用方法" tabindex="-1"><a class="header-anchor" href="#两种使用方法" aria-hidden="true">#</a> 两种使用方法</h2><h3 id="直接使用-1" tabindex="-1"><a class="header-anchor" href="#直接使用-1" aria-hidden="true">#</a> 直接使用(1)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;&quot;&quot;可选参数
    paths (list[str]): 图片的路径；
    images (list[numpy.ndarray]): 图片数据，ndarray.shape 为 [H, W, C]，BGR格式；
    use_gpu (bool): 是否使用 GPU；若使用GPU，请先设置CUDA_VISIBLE_DEVICES环境变量
    box_thresh (float): 检测文本框置信度的阈值；
    visualization (bool): 是否将识别结果保存为图片文件；
    output_dir (str): 图片的保存路径，默认设为 detection_result；
&quot;&quot;&quot;
&quot;&quot;&quot; return
    res (list[dict]): 识别结果的列表，列表中每一个元素为 dict，各字段为：
    data (list): 检测文本框结果，文本框在原图中的像素坐标，4*2的矩阵，依次表示文本框左上，右上，右下，左下顶点的坐标
    save_path (str): 识别结果的保存路径, 如不保存图片则save_path为&#39;&#39;
&quot;&quot;&quot;
import paddlehub as hub
import cv2
image_path =&quot;&quot;
text_detector = hub.Module(name=&quot;chinese_text_detection_db_server&quot;)
result = text_detector.detect_text(images=[cv2.imread(image_path)])
# or
# result =text_detector.detect_text(paths=[image_path])
print(result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署服务器-2" tabindex="-1"><a class="header-anchor" href="#部署服务器-2" aria-hidden="true">#</a> 部署服务器(2)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 终端输入
hub serving start -m chinese_text_detection_db_server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="发送请求" tabindex="-1"><a class="header-anchor" href="#发送请求" aria-hidden="true">#</a> 发送请求</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import requests
import json
import cv2
import base64

def cv2_to_base64(image):
    data = cv2.imencode(&#39;.jpg&#39;, image)[1]
    return base64.b64encode(data.tostring()).decode(&#39;utf8&#39;)

# 发送HTTP请求
data = {&#39;images&#39;:[cv2_to_base64(cv2.imread(&quot;/PATH/TO/IMAGE&quot;))]}
headers = {&quot;Content-type&quot;: &quot;application/json&quot;}
url = &quot;http://127.0.0.1:8866/predict/chinese_text_detection_db_server&quot;
r = requests.post(url=url, headers=headers, data=json.dumps(data))

# 打印预测结果
print(r.json()[&quot;results&quot;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多模型" tabindex="-1"><a class="header-anchor" href="#更多模型" aria-hidden="true">#</a> 更多模型</h2>`,10);function v(o,m){const e=n("font");return d(),a("div",null,[u,t(e,{color:"block"},{default:s(()=>[l("[更多模型可在官网查看](https://www.paddlepaddle.org.cn/modelbase)")]),_:1})])}const _=i(c,[["render",v],["__file","利用paddle的识别模型识别图片内容_chinese_text_detection_db_server.html.vue"]]);export{_ as default};
