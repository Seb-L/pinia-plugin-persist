import{_ as n,c as s,o as a,a as t}from"./app.61960c33.js";const _='{"title":"Custom storage","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/custom-storage.md"}',o={},p=t(`<h1 id="custom-storage" tabindex="-1">Custom storage <a class="header-anchor" href="#custom-storage" aria-hidden="true">#</a></h1><p>By default the storage is set to sessionStorage, but you can specify the storage you want to use for each strategy by setting the <code>storage</code> key.</p><p>You can then use <code>sessionStorage</code>, <code>localStorage</code> or any custom storage object.</p><p>In this example we create a storage that uses the <code>js-cookie</code> npm module to get and set the user&#39;s access token into a cookie.</p><div class="language-typescript"><pre><code><span class="token comment">// store/use-user-store.ts</span>
<span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>

<span class="token keyword">const</span> cookiesStorage<span class="token operator">:</span> Storage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setItem</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;accessToken&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">.</span>accessToken<span class="token punctuation">,</span> <span class="token punctuation">{</span> expires<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      accessToken<span class="token operator">:</span> Cookies<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&#39;accessToken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeUser&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      firstName<span class="token operator">:</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">,</span>
      lastName<span class="token operator">:</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span>
      accessToken<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  persist<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        storage<span class="token operator">:</span> cookiesStorage<span class="token punctuation">,</span>
        paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;accessToken&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5),e=[p];function c(u,k,l,r,i,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{_ as __pageData,m as default};
