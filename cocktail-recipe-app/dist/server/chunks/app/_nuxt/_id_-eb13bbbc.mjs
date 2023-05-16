import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { C as CocktailData } from './HeroCocktailsData-c74faad4.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const routeParam = route.params.id;
    const cocktailData = CocktailData.cocktails[routeParam];
    const formattedInstructions = computed(() => {
      return cocktailData.instructions.replace(/,/g, ",<br>");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center mt-4 min-h-screen" }, _attrs))}><div class="w-4/5"><img${ssrRenderAttr("src", unref(cocktailData).image)} class="w-full sm:w-2/3 m-auto" alt=""><div class="sm:w-2/3 m-auto"><h1 class="font-bold text-3xl pt-4 pb-2">${ssrInterpolate(unref(cocktailData).name)}</h1><p class="text-lg">${ssrInterpolate(unref(cocktailData).description)}</p> <br><h2 class="font-bold text-3xl pt-4 pb-2">Instructions</h2><p class="text-lg">${unref(formattedInstructions)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-eb13bbbc.mjs.map
