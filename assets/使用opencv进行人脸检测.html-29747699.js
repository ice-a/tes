import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as t,a as n,b as e,d as a,e as o}from"./app-47834413.js";const d={},r=n("br",null,null,-1),_=n("br",null,null,-1),u={href:"https://github.com/opencv/opencv.git",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=n("br",null,null,-1),b=n("br",null,null,-1),h=n("br",null,null,-1),p=n("br",null,null,-1),f=n("br",null,null,-1),g=n("br",null,null,-1),C=n("br",null,null,-1),A=n("br",null,null,-1),x=n("br",null,null,-1),S=n("br",null,null,-1),E=n("br",null,null,-1),N=n("br",null,null,-1),y=n("br",null,null,-1),I=n("br",null,null,-1),w=n("br",null,null,-1),V=n("br",null,null,-1),H=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import cv2
#基本绘图
import numpy
cv2.namedWindow(&quot;Image&quot;) #创建窗口
img = cv2.imread(&#39;20180703200225.jpg&#39;) #读取图像
#人脸识别
#img.shape[0] 获取图片的高度  img.shape[1] 获取图片的宽度
faceCascade = cv2.CascadeClassifier(r&#39;./haarcascade_frontalface_default.xml&#39;)
faces = faceCascade.detectMultiScale(img,scaleFactor = 1.1,minNeighbors = 5,minSize = (10,10),flags = cv2.CASCADE_SCALE_IMAGE)
cv2.putText(img,&quot;Find&quot;+str(len(faces))+&quot;faces&quot;,(10,img.shape[0]-5),cv2.FONT_HERSHEY_SIMPLEX,1,(255,232,133),2)
for (x,y,w,h) in faces:
    cv2.rectangle(img,(x,y),(x+w,y+h),(128,255,0),2)
    print(x,y,w,h)
#cv2.imshow(&#39;Image&#39;,img)
cv2.imwrite(&#39;test.jpg&#39;,img)
cv2.waitKey(0)
cv2.destroyAllWindow()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function M(R,G){const l=s("ExternalLinkIcon");return c(),t("div",null,[n("p",null,[e("对特定图像进行识别，最关键的是要有识别对象的特征文件。OpenCV已经内置了人脸识别特征文件，我们只要使用OpenCV的CascadeClassifier类即可进行识别。"),r,e(" 语法："),_,n("a",u,[e("https://github.com/opencv/opencv.git"),a(l)]),e(" 在这里可以下载特征文件，在data目录下"),v,e(" 识别对象变量 = cv2.CascadeClassifier(特征文件)、、"),m,e(" 识别对象"),b,e(" 识别结果变量 = 识别对象变量.detectMultiScale(图片，参数1，参数2，。。。)"),h,e(" 参数有："),p,e(" 　　1、scaleFactor: 其原理是系统会以不同的区块大小对图片进行扫描，在进行特征对比。此参数用户设置区块的改变倍数，如无特别需求，一般设置为1.1"),f,e(" 　　2、minNeighbors 此为控制误检率参数，默认值为3"),g,e(" 　　3、minSize 设置最小的识别区块"),C,e(" 　　4、maxSize 设置最大的识别区块"),A,e(" 　　5、flags 此参数设置检测模式，可取值如下："),x,e(" 　　　　　　cv2.CV_HAAR_SCALE_IMAGE 按比例检测"),S,e(" 　　　　　　cv2.CV_HAAR_DO_CANNY_PRUNING 利用Canny 边缘检测器排除一些边缘很少或很多的图像区域"),E,e(" 　　　　　　cv2.CV_HAAR_FIND_BIGGEST_OBJECT 只检测最大物体"),N,e(" 　　　　　　cv2.CV_HAAR_DO_ROUGH_SEARCH 只做初步检测"),y,e(" face = faceCascade.detectMultiScale(image,scakeFactor=1.1,minSize=(10,10),minNeighbors=5,flags = cv2.CASCADE_SCALE_IMAGE)"),I,e(" detectMultiScale 方法可以识别多个面部，返回值是一个列表"),w,e(" for (x,y,w,h) in face:"),V,e(" x,y 表示面部区域的左上角x,y坐标；w,h表示面部区域的宽度和高度")]),H])}const q=i(d,[["render",M],["__file","使用opencv进行人脸检测.html.vue"]]);export{q as default};
