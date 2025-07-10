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
import { computed } from "vue";
import { AccordionHeader, AccordionTrigger, } from "radix-vue";
import { Plus } from "lucide-vue-next";
import { cn } from "@/lib/utils";
var props = defineProps();
var delegatedProps = computed(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.AccordionHeader;
/** @type {[typeof __VLS_components.AccordionHeader, typeof __VLS_components.AccordionHeader, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "flex" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "flex" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.AccordionTrigger;
/** @type {[typeof __VLS_components.AccordionTrigger, typeof __VLS_components.AccordionTrigger, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign(__assign({}, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('flex flex-1 gap-4 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-[135deg]', props.class)) })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign(__assign({}, (__VLS_ctx.delegatedProps)), { class: (__VLS_ctx.cn('flex flex-1 gap-4 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-[135deg]', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {};
var __VLS_11 = {};
var __VLS_13 = {}.Plus;
/** @type {[typeof __VLS_components.Plus, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ class: "h-4 w-4 shrink-0 transition-transform duration-200" })));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ class: "h-4 w-4 shrink-0 transition-transform duration-200" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9, __VLS_12 = __VLS_11;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            AccordionHeader: AccordionHeader,
            AccordionTrigger: AccordionTrigger,
            Plus: Plus,
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
