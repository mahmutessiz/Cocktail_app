import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { C as CocktailData } from './HeroCocktailsData-c74faad4.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("hero-section-image.0d8547b6.webp");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} class="w-full hidden sm:block" alt="hero section image"></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "CocktailRecipeCard",
  __ssrInlineRender: true,
  setup(__props) {
    const cocktailData = CocktailData;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-container" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(cocktailData).cocktails, (cocktail) => {
        _push(`<div class="card"><img${ssrRenderAttr("src", cocktail.image)} class="object-cover object-center w-full aspect-video" alt="martini image"><div><ul class="flex flex-col justify-between py-4 px-2"><li class="text-black font-bold text-xl">${ssrInterpolate(cocktail.name)}</li><li class="text-black/80 line-clamp-4">${ssrInterpolate(cocktail.description)}</li><li class="w-full flex justify-end px-4 pt-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/recipe/" + cocktail.id,
          class: "border border-black/20 bg-[rgb(7,81,96)] text-white text-sm shadow-md shadow-black/30 hover:scale-105 py-1 px-2 rounded-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex"${_scopeId}>View more \xA0 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M19 10.41V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41l9 9z"${_scopeId}></path></svg></span>`);
            } else {
              return [
                createVNode("span", { class: "flex" }, [
                  createTextVNode("View more \xA0 "),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M19 10.41V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41l9 9z"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li></ul></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CocktailRecipeCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_CocktailRecipeCard = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_CocktailRecipeCard, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-32482b34.mjs.map
