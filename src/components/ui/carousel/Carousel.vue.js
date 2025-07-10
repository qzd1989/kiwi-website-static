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
import { useProvideCarousel } from './useCarousel';
import { cn } from '@/lib/utils';
var props = withDefaults(defineProps(), {
    orientation: 'horizontal',
});
var emits = defineEmits();
var carouselArgs = useProvideCarousel(props, emits);
var __VLS_exposed = carouselArgs;
defineExpose(__VLS_exposed);
function onKeyDown(event) {
    var prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    var nextKey = props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
    if (event.key === prevKey) {
        event.preventDefault();
        carouselArgs.scrollPrev();
        return;
    }
    if (event.key === nextKey) {
        event.preventDefault();
        carouselArgs.scrollNext();
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_withDefaultsArg = (function (t) { return t; })({
    orientation: 'horizontal',
});
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onKeydown: (__VLS_ctx.onKeyDown) }, { class: (__VLS_ctx.cn('relative', props.class)) }), { role: "region", 'aria-roledescription': "carousel", tabindex: "0" }));
var __VLS_0 = __assign({}, (__VLS_ctx.carouselArgs));
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            cn: cn,
            carouselArgs: carouselArgs,
            onKeyDown: onKeyDown,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_component = (await import('vue')).defineComponent({
    setup: function () {
        return __assign({}, __VLS_exposed);
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
