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
import { ref, onMounted } from "vue";
import { useColorMode } from "@vueuse/core";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";
var mode = useColorMode();
var isDev = import.meta.env.DEV;
var docsHref = isDev
    ? "http://localhost:5174/docs/index.html"
    : "/docs/index.html";
var routeList = [
    {
        href: "",
        label: "Home",
    },
    {
        href: docsHref,
        label: "Document",
    },
];
var isOpen = ref(false);
onMounted(function () {
    mode.value = "light";
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: ({
        'shadow-light': __VLS_ctx.mode === 'light',
        'shadow-dark': __VLS_ctx.mode === 'dark',
        'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 flex justify-between items-center p-2 bg-card shadow-md': true,
    }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "/" }, { class: "font-bold text-lg flex items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "../assets/logo.png" }, { class: "from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center lg:hidden" }));
var __VLS_0 = {}.Sheet;
/** @type {[typeof __VLS_components.Sheet, typeof __VLS_components.Sheet, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    open: (__VLS_ctx.isOpen),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        open: (__VLS_ctx.isOpen),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.SheetTrigger;
/** @type {[typeof __VLS_components.SheetTrigger, typeof __VLS_components.SheetTrigger, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    asChild: true,
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        asChild: true,
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
var __VLS_8 = {}.Menu;
/** @type {[typeof __VLS_components.Menu, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onClick': {} }, { class: "cursor-pointer" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12;
var __VLS_13;
var __VLS_14;
var __VLS_15 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.isOpen = true;
    }
};
var __VLS_11;
var __VLS_7;
var __VLS_16 = {}.SheetContent;
/** @type {[typeof __VLS_components.SheetContent, typeof __VLS_components.SheetContent, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ side: "left" }, { class: "flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ side: "left" }, { class: "flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
__VLS_19.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
var __VLS_20 = {}.SheetHeader;
/** @type {[typeof __VLS_components.SheetHeader, typeof __VLS_components.SheetHeader, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "mb-4 ml-4" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "mb-4 ml-4" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
__VLS_23.slots.default;
var __VLS_24 = {}.SheetTitle;
/** @type {[typeof __VLS_components.SheetTitle, typeof __VLS_components.SheetTitle, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ class: "flex items-center" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: "flex items-center" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
__VLS_27.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "/" }, { class: "flex items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "../assets/logo.png" }, { class: "from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" }));
var __VLS_27;
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col gap-2" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.routeList)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_28 = {}.Button;
    /** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ key: (item.label), asChild: true, variant: "ghost" }, { class: "justify-start text-base" })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ key: (item.label), asChild: true, variant: "ghost" }, { class: "justify-start text-base" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    __VLS_31.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isOpen = false;
        } }, { href: (item.href) }));
    (item.label);
    var __VLS_31;
}
var __VLS_32 = {}.SheetFooter;
/** @type {[typeof __VLS_components.SheetFooter, typeof __VLS_components.SheetFooter, ]} */ ;
// @ts-ignore
var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ class: "flex-col sm:flex-col justify-start items-start" })));
var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ class: "flex-col sm:flex-col justify-start items-start" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
__VLS_35.slots.default;
var __VLS_36 = {}.Separator;
/** @type {[typeof __VLS_components.Separator, ]} */ ;
// @ts-ignore
var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ class: "mb-2" })));
var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
/** @type {[typeof ToggleTheme, ]} */ ;
// @ts-ignore
var __VLS_40 = __VLS_asFunctionalComponent(ToggleTheme, new ToggleTheme({}));
var __VLS_41 = __VLS_40.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_40), false));
var __VLS_35;
var __VLS_19;
var __VLS_3;
var __VLS_43 = {}.NavigationMenu;
/** @type {[typeof __VLS_components.NavigationMenu, typeof __VLS_components.NavigationMenu, ]} */ ;
// @ts-ignore
var __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43(__assign({ class: "hidden lg:block" })));
var __VLS_45 = __VLS_44.apply(void 0, __spreadArray([__assign({ class: "hidden lg:block" })], __VLS_functionalComponentArgsRest(__VLS_44), false));
__VLS_46.slots.default;
var __VLS_47 = {}.NavigationMenuList;
/** @type {[typeof __VLS_components.NavigationMenuList, typeof __VLS_components.NavigationMenuList, ]} */ ;
// @ts-ignore
var __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
var __VLS_49 = __VLS_48.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_48), false));
__VLS_50.slots.default;
var __VLS_51 = {}.NavigationMenuItem;
/** @type {[typeof __VLS_components.NavigationMenuItem, typeof __VLS_components.NavigationMenuItem, ]} */ ;
// @ts-ignore
var __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
var __VLS_53 = __VLS_52.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_52), false));
__VLS_54.slots.default;
var __VLS_55 = {}.NavigationMenuLink;
/** @type {[typeof __VLS_components.NavigationMenuLink, typeof __VLS_components.NavigationMenuLink, ]} */ ;
// @ts-ignore
var __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    asChild: true,
}));
var __VLS_57 = __VLS_56.apply(void 0, __spreadArray([{
        asChild: true,
    }], __VLS_functionalComponentArgsRest(__VLS_56), false));
__VLS_58.slots.default;
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.routeList)); _b < _c.length; _b++) {
    var _d = _c[_b][0], href = _d.href, label = _d.label;
    var __VLS_59 = {}.Button;
    /** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    var __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59(__assign({ key: (label), asChild: true, variant: "ghost" }, { class: "justify-start text-base" })));
    var __VLS_61 = __VLS_60.apply(void 0, __spreadArray([__assign({ key: (label), asChild: true, variant: "ghost" }, { class: "justify-start text-base" })], __VLS_functionalComponentArgsRest(__VLS_60), false));
    __VLS_62.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (href),
    });
    (label);
    var __VLS_62;
}
var __VLS_58;
var __VLS_54;
var __VLS_50;
var __VLS_46;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "hidden lg:flex" }));
/** @type {[typeof ToggleTheme, ]} */ ;
// @ts-ignore
var __VLS_63 = __VLS_asFunctionalComponent(ToggleTheme, new ToggleTheme({}));
var __VLS_64 = __VLS_63.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_63), false));
/** @type {__VLS_StyleScopedClasses['shadow-light']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[90%]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-[70%]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-[75%]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:max-w-screen-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['top-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['from-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['via-primary/70']} */ ;
/** @type {__VLS_StyleScopedClasses['to-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-9']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-tr-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-br-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-card']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['from-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['via-primary/70']} */ ;
/** @type {__VLS_StyleScopedClasses['to-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-9']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:block']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            NavigationMenu: NavigationMenu,
            NavigationMenuItem: NavigationMenuItem,
            NavigationMenuLink: NavigationMenuLink,
            NavigationMenuList: NavigationMenuList,
            Sheet: Sheet,
            SheetContent: SheetContent,
            SheetFooter: SheetFooter,
            SheetHeader: SheetHeader,
            SheetTitle: SheetTitle,
            SheetTrigger: SheetTrigger,
            Button: Button,
            Separator: Separator,
            Menu: Menu,
            ToggleTheme: ToggleTheme,
            mode: mode,
            routeList: routeList,
            isOpen: isOpen,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
