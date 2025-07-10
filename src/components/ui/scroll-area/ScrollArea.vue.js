var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { computed } from 'vue';
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport, } from 'radix-vue';
import ScrollBar from './ScrollBar.vue';
import { cn } from '@/lib/utils';
var props = defineProps();
var delegatedProps = computed(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ScrollAreaRoot;
/** @type {[typeof __VLS_components.ScrollAreaRoot, typeof __VLS_components.ScrollAreaRoot, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({}, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('relative overflow-hidden', props.class)) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({}, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('relative overflow-hidden', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ScrollAreaViewport;
/** @type {[typeof __VLS_components.ScrollAreaViewport, typeof __VLS_components.ScrollAreaViewport, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: "h-full w-full rounded-[inherit]" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: "h-full w-full rounded-[inherit]" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {};
var __VLS_8;
/** @type {[typeof ScrollBar, ]} */ ;
// @ts-ignore
var __VLS_11 = __VLS_asFunctionalComponent(ScrollBar, new ScrollBar({}));
var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_11), false));
var __VLS_14 = {}.ScrollAreaCorner;
/** @type {[typeof __VLS_components.ScrollAreaCorner, ]} */ ;
// @ts-ignore
var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_15), false));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[inherit]']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            ScrollAreaCorner: ScrollAreaCorner,
            ScrollAreaRoot: ScrollAreaRoot,
            ScrollAreaViewport: ScrollAreaViewport,
            ScrollBar: ScrollBar,
            cn: cn,
            delegatedProps: delegatedProps,
        };
    },
    __typeProps: {},
});
var __VLS_component = (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
