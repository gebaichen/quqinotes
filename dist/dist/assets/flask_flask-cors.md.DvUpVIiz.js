import{_ as i,c as e,m as s,a as n,t,aS as l,o as p}from"./chunks/framework.Dbjoj8K5.js";const m=JSON.parse('{"title":"Flask-CORS","description":"介绍什么是ajax跨域问题，并使用flask-cors来解决跨域问题","frontmatter":{"date":"2023.9.1","title":"Flask-CORS","tags":["flask","flask-cors","python","web","flask插件"],"description":"介绍什么是ajax跨域问题，并使用flask-cors来解决跨域问题"},"headers":[],"relativePath":"flask/flask-cors.md","filePath":"flask/flask-cors.md","lastUpdated":1700227085000}'),r={name:"flask/flask-cors.md"},h={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),k=l(`<p>用于处理跨源资源共享 （CORS） 的 Flask 扩展，使跨源 AJAX 成为可能。</p><h2 id="跨域问题" tabindex="-1">跨域问题 <a class="header-anchor" href="#跨域问题" aria-label="Permalink to &quot;跨域问题&quot;">​</a></h2><h3 id="什么是跨域问题" tabindex="-1">什么是跨域问题 <a class="header-anchor" href="#什么是跨域问题" aria-label="Permalink to &quot;什么是跨域问题&quot;">​</a></h3><p>跨域是因为出于浏览器的同源策略限制。<strong>同源策略</strong> （Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能， 如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。 可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。 同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。</p><p>所谓<strong>同源</strong>（即指在同一个域）就是两个页面具有相同的协议（protocol）， 主机（host）和端口号（port）。</p><p><strong>跨域问题</strong>就是当一个请求url的协议、域名、端口， 三者之间任意一个与当前页面url不同时出现的问题。</p><h3 id="为什么会有跨域问题" tabindex="-1">为什么会有跨域问题 <a class="header-anchor" href="#为什么会有跨域问题" aria-label="Permalink to &quot;为什么会有跨域问题&quot;">​</a></h3><p>因为我们在开发过过程中使用了<strong>前后端分离</strong>的方式，从而把不同的app部署到不同的服务器，不在同一域名内 就会出现跨域问题</p><p>当客户端向服务器端请求ajax服务时，如果客户端和服务器端域名不一致，就会出现跨域问题，ajax报错如下： <code>No &#39;Access-Control-Allow-Origin&#39; header is present on the requested 。</code></p><h3 id="怎样解决跨域问题" tabindex="-1">怎样解决跨域问题 <a class="header-anchor" href="#怎样解决跨域问题" aria-label="Permalink to &quot;怎样解决跨域问题&quot;">​</a></h3><p>使用flask-cors这个包，来解决</p><h2 id="_1-安装" tabindex="-1">1.安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1.安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-u1rNK" id="tab-svje5Ka" checked="checked"><label for="tab-svje5Ka">pip</label><input type="radio" name="group-u1rNK" id="tab-rbLwpaH"><label for="tab-rbLwpaH">poetry</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install Flask-CORS</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">poetry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add Flask-CORS</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="_2-初始化" tabindex="-1">2.初始化 <a class="header-anchor" href="#_2-初始化" aria-label="Permalink to &quot;2.初始化&quot;">​</a></h2><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask_cors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CORS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__name__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># r&#39;/*&#39; 是通配符，让本服务器所有的 URL 都允许跨域请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS(app, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resources</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>参数</th><th>类型</th><th>Head字段</th><th>说明</th></tr></thead><tbody><tr><td>resources</td><td>字典、迭代器或字符串</td><td>无</td><td>全局配置允许跨域的API接口</td></tr><tr><td>origins</td><td>列表、字符串或正则表达式</td><td>Access-Control-Allow-Origin</td><td>配置允许跨域访问的源，*表示全部允许</td></tr><tr><td>methods</td><td>列表、字符串</td><td>Access-Control-Allow-Methods</td><td>配置跨域支持的请求方式， 如：GET、POST</td></tr><tr><td>expose_headers</td><td>列表、字符串</td><td>Access-Control-Expose-Headers</td><td>自定义请求响应的Head信息</td></tr><tr><td>allow_headers</td><td>列表、字符串或正则表达式</td><td>Access-Control-Request-Headers</td><td>配置允许跨域的请求头</td></tr><tr><td>supports_credentials</td><td>布尔值</td><td>Access-Control-Allow-Credentials</td><td>是否允许请求发送cookie， false是不允许</td></tr><tr><td>max_age</td><td>整数、字符串</td><td>Access-Control-Max-Age</td><td>预检请求的有效时长</td></tr></tbody></table><h2 id="_3-在被请求的response-header中加入header" tabindex="-1">3.在被请求的Response header中加入header <a class="header-anchor" href="#_3-在被请求的response-header中加入header" aria-label="Permalink to &quot;3.在被请求的Response header中加入header&quot;">​</a></h2><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@app.after_request</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func_res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resp):     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> make_response(resp)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;GET,POST&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;x-requested-with,content-type&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>默认情况下，由于安全隐患，跨域提交 Cookie 处于禁用状态。请参阅文档，了解如何启用凭据请求，并确保在执行此操作之前添加某种 CSRF 保护！</p><p>如果想使用，操作如下：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask, session</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask_cors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CORS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__name__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS(app, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">supports_credentials</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用<code>supports_credentials=True</code>，把supports_credentials参数设置为true就可以启用cookie</p>`,23);function o(a,c,E,g,b,u){return p(),e("div",null,[s("h1",h,[n(t(a.$frontmatter.title)+" ",1),d]),k])}const F=i(r,[["render",o]]);export{m as __pageData,F as default};
