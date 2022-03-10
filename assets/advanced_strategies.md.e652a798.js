import{_ as s,c as n,o as a,a as t}from"./app.61960c33.js";const _='{"title":"Strategies","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/strategies.md"}',e={},p=t(`<h1 id="strategies" tabindex="-1">Strategies <a class="header-anchor" href="#strategies" aria-hidden="true">#</a></h1><p>With <code>pinia-plugin-persist</code> You can use multiple strategies to persist your store data.</p><p>You can define a strategy list in your store under the <code>persist</code> key.</p><div class="language-typescript"><pre><code><span class="token comment">// store/use-user-store.ts</span>
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
    strategies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- HERE</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Each strategy is an object like so:</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">PersistStrategy</span> <span class="token punctuation">{</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Storage key</span>
  storage<span class="token operator">?</span><span class="token operator">:</span> Storage<span class="token punctuation">;</span> <span class="token comment">// Actual storage (default: sessionStorage)</span>
  paths<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// list ok state keys you want to store in the storage</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),o=[p];function c(r,i,l,u,k,d){return a(),n("div",null,o)}var m=s(e,[["render",c]]);export{_ as __pageData,m as default};
