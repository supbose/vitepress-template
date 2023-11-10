import{_ as s,a as n,S as a,z as l}from"./chunks/framework.e084a0e7.js";const d=JSON.parse('{"title":"FTP.json 说明文档","description":"","frontmatter":{},"headers":[],"relativePath":"articles/随笔/未归档/ftp-deploy.md","filePath":"articles/随笔/未归档/ftp-deploy.md","lastUpdated":1699594742000}'),p={name:"articles/随笔/未归档/ftp-deploy.md"},o=l(`<h1 id="ftp-json-说明文档" tabindex="-1">FTP.json 说明文档 <a class="header-anchor" href="#ftp-json-说明文档" aria-label="Permalink to &quot;FTP.json 说明文档&quot;">​</a></h1><h2 id="auth-ftp-json-说明" tabindex="-1"><code>../.auth/ftp.json</code> 说明 <a class="header-anchor" href="#auth-ftp-json-说明" aria-label="Permalink to &quot;\`../.auth/ftp.json\` 说明&quot;">​</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">host</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#546E7A;font-style:italic;">//ftp服务器地址</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">port</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">21</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#546E7A;font-style:italic;">//ftp服务器端口</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">supbose</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#546E7A;font-style:italic;">//ftp服务器用户账号</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">********</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;"> </span><span style="color:#546E7A;font-style:italic;">//ftp服务器用户密码</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>.<code>./.auth/ftp.json</code> 自行创建,如上配置</p></blockquote><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><ul><li><p>添加 插件 <a href="https://github.com/SamKirkland/ftp-deploy" target="_blank" rel="noreferrer">@samkirkland/ftp-deploy</a></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">add</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">@samkirkland/ftp-deploy</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>项目中添加<code>ftp.config.js</code>配置文件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#546E7A;font-style:italic;">//const { deploy, excludeDefaults } = require(&#39;@samkirkland/ftp-deploy&#39;)</span></span>
<span class="line"><span style="color:#546E7A;font-style:italic;">//const config = require(&#39;../.auth/ftp.json&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">deploy</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">excludeDefaults</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@samkirkland/ftp-deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> config </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../.auth/ftp.json</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">function</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">deployMyCode</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">🚚 Deploy started</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">deploy</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		server</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">config</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">host</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">config</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">username</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		password</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">config</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">password</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">local-dir</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./docs/.vitepress/dist/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#546E7A;font-style:italic;">// &#39;server-dir&#39;: &#39;/&#39;,//注释掉就是默认根目录</span></span>
<span class="line"><span style="color:#F07178;">		exclude</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#EEFFFF;">excludeDefaults</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dontDeployThisFolder/**</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#EEFFFF;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">🚀 Deploy done!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">deployMyCode</span><span style="color:#EEFFFF;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ul><h2 id="最后配置npm脚本" tabindex="-1">最后配置<code>NPM</code>脚本 <a class="header-anchor" href="#最后配置npm脚本" aria-label="Permalink to &quot;最后配置\`NPM\`脚本&quot;">​</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ftp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node --experimental-json-modules ./ftp.config.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#546E7A;font-style:italic;">// &quot;ftp&quot;: &quot;node ./ftp.config.js&quot;,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">cloud</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm docs:build &amp;&amp; pnpm ftp</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="到此结束" tabindex="-1">到此结束 <a class="header-anchor" href="#到此结束" aria-label="Permalink to &quot;到此结束&quot;">​</a></h2><blockquote><p>关于<code>@samkirkland/ftp-deploy</code>更多配置请查看<a href="https://github.com/SamKirkland/ftp-deploy" target="_blank" rel="noreferrer">@samkirkland/ftp-deploy</a></p></blockquote>`,10),e=[o];function t(F,r,c,y,D,i){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{d as __pageData,E as default};
