import{_ as s,c as n,o as a,a as t}from"./app.61960c33.js";const h='{"title":"Persist partial state","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/partial-state.md"}',p={},e=t(`<h1 id="persist-partial-state" tabindex="-1">Persist partial state <a class="header-anchor" href="#persist-partial-state" aria-hidden="true">#</a></h1><p>By default the whole state is persisted, but you can specify the state keys you want ot persist, by setting the <code>paths</code> key in each strategy.</p><p>In this example we persist the <code>firstName</code> and <code>lastName</code> in the sessionStorage, and the <code>accessToken</code> in the localStorage.</p><div class="language-typescript"><pre><code><span class="token comment">// store/use-user-store.ts</span>
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
      <span class="token punctuation">{</span> storage<span class="token operator">:</span> sessionStorage<span class="token punctuation">,</span> paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;firstName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lastName&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> storage<span class="token operator">:</span> localStorage<span class="token punctuation">,</span> paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;accessToken&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,4),o=[e];function c(r,i,l,u,k,d){return a(),n("div",null,o)}var g=s(p,[["render",c]]);export{h as __pageData,g as default};
