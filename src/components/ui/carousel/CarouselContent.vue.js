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
import { useCarousel } from './useCarousel';
import { cn } from '@/lib/utils';
defineOptions({
    inheritAttrs: false,
});
var props = defineProps();
var _a = useCarousel(), carouselRef = _a.carouselRef, orientation = _a.orientation;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: "carouselRef" }, { class: "overflow-hidden" }));
/** @type {typeof __VLS_ctx.carouselRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (__VLS_ctx.cn('flex', __VLS_ctx.orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)) }));
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
[__VLS_dollars.$attrs,];
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            cn: cn,
            carouselRef: carouselRef,
            orientation: orientation,
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
