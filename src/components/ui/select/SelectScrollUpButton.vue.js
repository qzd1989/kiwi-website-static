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
import { SelectScrollUpButton, useForwardProps } from 'radix-vue';
import { ChevronUp } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
var props = defineProps();
var delegatedProps = computed(function () {
    var _ = props.class, delegated = __rest(props, ["class"]);
    return delegated;
});
var forwardedProps = useForwardProps(delegatedProps);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.SelectScrollUpButton;
/** @type {[typeof __VLS_components.SelectScrollUpButton, typeof __VLS_components.SelectScrollUpButton, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: (__VLS_ctx.cn('flex cursor-default items-center justify-center py-1', props.class)) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({}, (__VLS_ctx.forwardedProps)), { class: (__VLS_ctx.cn('flex cursor-default items-center justify-center py-1', props.class)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {};
var __VLS_7 = {}.ChevronUp;
/** @type {[typeof __VLS_components.ChevronUp, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7(__assign({ class: "h-4 w-4" })));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign({ class: "h-4 w-4" })], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
// @ts-ignore
var __VLS_6 = __VLS_5;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            SelectScrollUpButton: SelectScrollUpButton,
            ChevronUp: ChevronUp,
            cn: cn,
            forwardedProps: forwardedProps,
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
