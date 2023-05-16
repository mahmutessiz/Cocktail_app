import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "[idApi]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.idApi;
    let cocktailDataApi = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-center mt-4 min-h-screen" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(cocktailDataApi).drinks, (item) => {
        _push(`<div class="w-4/5"><img${ssrRenderAttr("src", item.strDrinkThumb)} class="w-full sm:w-2/3 m-auto" alt=""><div class="sm:w-2/3 m-auto"><h1 class="font-bold text-3xl pt-4 pb-2">${ssrInterpolate(item.strDrink)}</h1><h2 class="font-bold text-xl pt-4 pb-2">Ingredients</h2><ul class="list-disc px-4">`);
        if (item.strIngredient1) {
          _push(`<li>${ssrInterpolate(item.strIngredient1)} - ${ssrInterpolate(item.strMeasure1)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient2) {
          _push(`<li>${ssrInterpolate(item.strIngredient2)} - ${ssrInterpolate(item.strMeasure2)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient3) {
          _push(`<li>${ssrInterpolate(item.strIngredient3)} - ${ssrInterpolate(item.strMeasure3)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient4) {
          _push(`<li>${ssrInterpolate(item.strIngredient4)} - ${ssrInterpolate(item.strMeasure4)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient5) {
          _push(`<li>${ssrInterpolate(item.strIngredient5)} - ${ssrInterpolate(item.strMeasure5)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient6) {
          _push(`<li>${ssrInterpolate(item.strIngredient6)} - ${ssrInterpolate(item.strMeasure6)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient7) {
          _push(`<li>${ssrInterpolate(item.strIngredient7)} - ${ssrInterpolate(item.strMeasure7)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient8) {
          _push(`<li>${ssrInterpolate(item.strIngredient8)} - ${ssrInterpolate(item.strMeasure8)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient9) {
          _push(`<li>${ssrInterpolate(item.strIngredient9)} - ${ssrInterpolate(item.strMeasure9)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient10) {
          _push(`<li>${ssrInterpolate(item.strIngredient10)} - ${ssrInterpolate(item.strMeasure10)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient11) {
          _push(`<li>${ssrInterpolate(item.strIngredient11)} - ${ssrInterpolate(item.strMeasure11)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient12) {
          _push(`<li>${ssrInterpolate(item.strIngredient12)} - ${ssrInterpolate(item.strMeasure12)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient13) {
          _push(`<li>${ssrInterpolate(item.strIngredient13)} - ${ssrInterpolate(item.strMeasure13)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient14) {
          _push(`<li>${ssrInterpolate(item.strIngredient14)} - ${ssrInterpolate(item.strMeasure14)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if (item.strIngredient15) {
          _push(`<li>${ssrInterpolate(item.strIngredient15)} - ${ssrInterpolate(item.strMeasure15)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><h2 class="font-bold text-xl pt-4 pb-2">Instructions</h2><p class="text-lg">${ssrInterpolate(item.strInstructions)}</p> <br></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipeApi/[idApi].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_idApi_-0945199a.mjs.map
