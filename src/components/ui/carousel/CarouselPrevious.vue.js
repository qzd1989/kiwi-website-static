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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ArrowLeft } from 'lucide-vue-next';
import { useCarousel } from './useCarousel';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
var props = defineProps();
var _a = useCarousel(), orientation = _a.orientation, canScrollPrev = _a.canScrollPrev, scrollPrev = _a.scrollPrev;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign(__assign({ 'onClick': {} }, { disabled: (!__VLS_ctx.canScrollPrev) }), { class: (__VLS_ctx.cn('touch-manipulation absolute h-8 w-8 rounded-full p-0', __VLS_ctx.orientation === 'horizontal'
        ? '-left-12 top-1/2 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90', props.class)) }), { variant: "outline" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { disabled: (!__VLS_ctx.canScrollPrev) }), { class: (__VLS_ctx.cn('touch-manipulation absolute h-8 w-8 rounded-full p-0', __VLS_ctx.orientation === 'horizontal'
            ? '-left-12 top-1/2 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90', props.class)) }), { variant: "outline" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onClick: (__VLS_ctx.scrollPrev)
};
var __VLS_8 = {};
__VLS_3.slots.default;
var __VLS_9 = {};
var __VLS_11 = {}.ArrowLeft;
/** @type {[typeof __VLS_components.ArrowLeft, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11(__assign({ class: "h-4 w-4 text-current" })));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ class: "h-4 w-4 text-current" })], __VLS_functionalComponentArgsRest(__VLS_12), false));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-current']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            ArrowLeft: ArrowLeft,
            cn: cn,
            Button: Button,
            orientation: orientation,
            canScrollPrev: canScrollPrev,
            scrollPrev: scrollPrev,
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
