import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as a,a as e,b as l,d,e as u}from"./app-cfc8e941.js";const t={},v={href:"https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86",target:"_blank",rel:"noopener noreferrer"},c=u(`<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install ua<span class="token operator">-</span>parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from ua_parser import user_agent_parser
import pprint
pp = pprint.PrettyPrinter(indent=4)
ua_string = &#39;Mozilla/5.0 (Linux; Android 6.0.1; NX531J Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044605 Mobile Safari/537.36 MMWEBID/9629 MicroMessenger/7.0.3.1400(0x27000334) Process/tools NetType/WIFI Language/zh_CN&#39;
parsed_string = user_agent_parser.Parse(ua_string)
pp.pprint(parsed_string)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{   &#39;device&#39;: {   &#39;brand&#39;: &#39;Generic_Android&#39;,
                  &#39;family&#39;: &#39;NX531J&#39;,
                  &#39;model&#39;: &#39;NX531J&#39;},
    &#39;os&#39;: {   &#39;family&#39;: &#39;Android&#39;,
              &#39;major&#39;: &#39;6&#39;,
              &#39;minor&#39;: &#39;0&#39;,
              &#39;patch&#39;: &#39;1&#39;,
              &#39;patch_minor&#39;: None},
    &#39;string&#39;: &#39;Mozilla/5.0 (Linux; Android 6.0.1; NX531J Build/MMB29M; wv) &#39;
              &#39;AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 &#39;
              &#39;Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044605 Mobile &#39;
              &#39;Safari/537.36 MMWEBID/9629 &#39;
              &#39;MicroMessenger/7.0.3.1400(0x27000334) Process/tools &#39;
              &#39;NetType/WIFI Language/zh_CN&#39;,
    &#39;user_agent&#39;: {   &#39;family&#39;: &#39;Chrome Mobile WebView&#39;,
                      &#39;major&#39;: &#39;66&#39;,
                      &#39;minor&#39;: &#39;0&#39;,
                      &#39;patch&#39;: &#39;3359&#39;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install pyyaml ua<span class="token operator">-</span>parser user<span class="token operator">-</span>agents
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from user_agents import parse
# iPhone&#39;s user agent string
ua_string = &#39;Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3&#39;
user_agent = parse(ua_string)

# Accessing user agent&#39;s browser attributes
user_agent.browser  # returns Browser(family=u&#39;Mobile Safari&#39;, version=(5, 1), version_string=&#39;5.1&#39;)
user_agent.browser.family  # returns &#39;Mobile Safari&#39;
user_agent.browser.version  # returns (5, 1)
user_agent.browser.version_string   # returns &#39;5.1&#39;

# Accessing user agent&#39;s operating system properties
user_agent.os  # returns OperatingSystem(family=u&#39;iOS&#39;, version=(5, 1), version_string=&#39;5.1&#39;)
user_agent.os.family  # returns &#39;iOS&#39;user_agent.os.version  # returns (5, 1)
user_agent.os.version_string  # returns &#39;5.1&#39;# Accessing 
user agent&#39;s device properties
user_agent.device  

# returns Device(family=u&#39;iPhone&#39;, brand=u&#39;Apple&#39;, model=u&#39;iPhone&#39;)
user_agent.device.family  # returns &#39;iPhone&#39;
user_agent.device.brand # returns &#39;Apple&#39;
user_agent.device.model # returns &#39;iPhone&#39;

#Viewing a pretty string version
str(user_agent) # returns &quot;iPhone / iOS 5.1 / Mobile Safari 5.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能" aria-hidden="true">#</a> 高级功能：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from user_agents import parse

# Let&#39;s start from an old, non touch Blackberry device
ua_string = &#39;BlackBerry9700/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/331 UNTRUSTED/1.0 3gpp-gba&#39;
user_agent = parse(ua_string)
user_agent.is_mobile # returns True
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns False
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns &quot;BlackBerry 9700 / BlackBerry OS 5 / BlackBerry 9700&quot;

# Now a Samsung Galaxy S3
ua_string = &#39;Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30&#39;
user_agent = parse(ua_string)
user_agent.is_mobile # returns True
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns &quot;Samsung GT-I9300 / Android 4.0.4 / Android 4.0.4&quot;

# iPad&#39;s user agent string
ua_string = &#39;Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10&#39;
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns True
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns &quot;iPad / iOS 3.2 / Mobile Safari 4.0.4&quot;

# Kindle Fire&#39;s user agent string
ua_string = &#39;Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true&#39;
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns True
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns &quot;Kindle / Android / Amazon Silk 1.1.0-80&quot;

# Touch capable Windows 8 device
ua_string = &#39;Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)&#39;
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns True
user_agent.is_bot # returns False
str(user_agent) # returns &quot;PC / Windows 8 / IE 10&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function o(m,b){const n=s("ExternalLinkIcon");return r(),a("div",null,[e("p",null,[e("a",v,[l("用户代理"),d(n)])]),c])}const p=i(t,[["render",o],["__file","UserAgent-python解析.html.vue"]]);export{p as default};
