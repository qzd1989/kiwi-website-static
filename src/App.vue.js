var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Community from "./components/Community.vue";
import Footer from "./components/Footer.vue";
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof Navbar, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof Hero, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(Hero, new Hero({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof Community, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(Community, new Community({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(Footer, new Footer({}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Navbar: Navbar,
            Hero: Hero,
            Community: Community,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
