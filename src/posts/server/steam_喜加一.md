---
title: steam获取喜加一
tags:
- server
- python
categories:
- server
---


## 获取喜加一

```python
import requests
from bs4 import BeautifulSoup
 
#Server酱推送模块，PUSH_KEY替换自己的
def send_message_fangtang(_item,_message):
        PUSH_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'  #
        api = 'https://sctapi.ftqq.com/' + PUSH_KEY + '.send'
        _d = {
                "title": _item,
                "desp": _message
                }
        req = requests.post(api,data = _d)
        #print(req.text)
 
#爬取代码
url='https://steamstats.cn/xi'
headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 Edg/90.0.818.41'}
 
r=requests.get(url,headers=headers)
r.raise_for_status()
r.encoding = r.apparent_encoding
soup = BeautifulSoup(r.text, "html.parser")
tbody=soup.find('tbody')
tr=tbody.find_all('tr')
i=1
#desp="今日喜加一"+'\n'
for tr in tr:
        td=tr.find_all('td')
        name=td[1].string.strip().replace('\n', '').replace('\r', '')
        gametype=td[2].string.replace(" ","").replace('\n', '').replace('\r', '')
        start=td[3].string.replace(" ","").replace('\n', '').replace('\r', '')
        end=td[4].string.replace(" ","").replace('\n', '').replace('\r', '')
        time=td[5].string.replace(" ","").replace('\n', '').replace('\r', '')
        oringin=td[6].find('span').string.replace(" ","").replace('\n', '').replace('\r', '')
         
        sp=str(td[6]).split('"')
        http=sp[3]
        desp="序号："+str(i)+'\n\r'+"游戏名称："+name+'\n\r'+"类型："+gametype+'\n\r'+"开始时间："+start+'\n\r'+"结束时间："+end+'\n\r'+"是否永久："+time+'\n\r'+"平台："+oringin+'\n\r'+"链接："+http+'\n\r'
 
#推送
send_message_fangtang("今日喜加一",desp)
#print(desp)        
```

## Github Ations，new workflows新建main.yml

```python
name: happy plus one
 
on:
  push:
    branches:
      - main
  schedule:   
    - cron:  0 1 * * *   #国际标准时间，北京时间+8
 
jobs:
  my_job:
    runs-on: ubuntu-latest
    steps:
      - name: 'checkout codes'  #检测代码
        uses: actions/checkout@v2
      - name: 'set up python'  #配置python
        uses: actions/setup-python@v2
        with:
         python-version: ${{ matrix.python-version }}
      - name: requirements  #配置库
        run: |
         python -m pip install --upgrade pip
         pip install beautifulsoup4
      - name: 'Epic/steam happy +1'  #运行py
        run: |
          python ${{ github.workspace }}/ }}/happy_plus_one.py
```

## 复制第一步的happy_plus_one.py文件到Github

[效果](http://img.lideshan.top/i/2023/09/05/64f690d850edb.bmp)
