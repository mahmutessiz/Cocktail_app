import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "[SearchParam]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.SearchParam;
    let cocktailDataApi = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><h1 class="text-center font-bold text-3xl md:text-5xl mt-8">Results</h1><div class="card-container"><!--[-->`);
      ssrRenderList(unref(cocktailDataApi).drinks, (cocktail) => {
        _push(`<div class="card"><img${ssrRenderAttr("src", cocktail.strDrinkThumb)} class="object-cover object-center w-full aspect-video" alt="martini image"><div><ul class="flex flex-col justify-between py-4 px-2"><li class="text-black font-bold text-xl">${ssrInterpolate(cocktail.strDrink)}</li><li class="text-black/80 line-clamp-4">${ssrInterpolate(cocktail.strInstructions)}</li><li class="w-full flex justify-end px-4 pt-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/recipeApi/" + cocktail.idDrink,
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
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results/[SearchParam].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_SearchParam_-27923253.mjs.map
