import{_ as n,c as s,o as a,a as p}from"./app.61960c33.js";const f='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Setup","slug":"setup"},{"level":3,"title":"Vue2","slug":"vue2"},{"level":3,"title":"Vue3","slug":"vue3"},{"level":3,"title":"Nuxt","slug":"nuxt"},{"level":2,"title":"Typescript definitions","slug":"typescript-definitions"}],"relativePath":"index.md"}',t={},e=p(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><code>yarn add pinia-plugin-persist</code></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><h3 id="vue2" tabindex="-1">Vue2 <a class="header-anchor" href="#vue2" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> vueCompositionApi <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> piniaPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPersist<span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vueCompositionApi<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  pinia<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> h <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> piniaPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPersist<span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="nuxt" tabindex="-1">Nuxt <a class="header-anchor" href="#nuxt" aria-hidden="true">#</a></h3><p>Create a <code>pinia-plugin-persist.client.ts</code> file, and add your pinia plugin.</p><div class="language-typescript"><pre><code><span class="token comment">// plugins/pinia-plugin-persist.client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxt/types&#39;</span>
<span class="token keyword">import</span> piniaPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token operator">:</span> Context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span>pinia<span class="token operator">?.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPersist<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Then add your plugin in your <code>nuxt.config.ts</code> file.</p><div class="language-typescript"><pre><code><span class="token comment">// nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;~/plugins/pinia-plugin-persist.client&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="typescript-definitions" tabindex="-1">Typescript definitions <a class="header-anchor" href="#typescript-definitions" aria-hidden="true">#</a></h2><p>Add the <code>pinia-plugin-persist</code> types definition file to your tsconfig file.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;pinia-plugin-persist&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),o=[e];function i(c,u,l,r,k,d){return a(),s("div",null,o)}var h=n(t,[["render",i]]);export{f as __pageData,h as default};
