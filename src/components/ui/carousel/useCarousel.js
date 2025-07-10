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
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { onMounted, ref } from 'vue';
var _a = createInjectionState(function (_a, emits) {
    var opts = _a.opts, orientation = _a.orientation, plugins = _a.plugins;
    var _b = emblaCarouselVue(__assign(__assign({}, opts), { axis: orientation === 'horizontal' ? 'x' : 'y' }), plugins), emblaNode = _b[0], emblaApi = _b[1];
    function scrollPrev() {
        var _a;
        (_a = emblaApi.value) === null || _a === void 0 ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
        var _a;
        (_a = emblaApi.value) === null || _a === void 0 ? void 0 : _a.scrollNext();
    }
    var canScrollNext = ref(true);
    var canScrollPrev = ref(true);
    function onSelect(api) {
        canScrollNext.value = api.canScrollNext();
        canScrollPrev.value = api.canScrollPrev();
    }
    onMounted(function () {
        var _a, _b, _c;
        if (!emblaApi.value)
            return;
        (_a = emblaApi.value) === null || _a === void 0 ? void 0 : _a.on('init', onSelect);
        (_b = emblaApi.value) === null || _b === void 0 ? void 0 : _b.on('reInit', onSelect);
        (_c = emblaApi.value) === null || _c === void 0 ? void 0 : _c.on('select', onSelect);
        emits('init-api', emblaApi.value);
    });
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev: canScrollPrev, canScrollNext: canScrollNext, scrollPrev: scrollPrev, scrollNext: scrollNext, orientation: orientation };
}), useProvideCarousel = _a[0], useInjectCarousel = _a[1];
function useCarousel() {
    var carouselState = useInjectCarousel();
    if (!carouselState)
        throw new Error('useCarousel must be used within a <Carousel />');
    return carouselState;
}
export { useCarousel, useProvideCarousel };
