<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useColorMode } from "@vueuse/core";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
}

const mode = useColorMode();
const isDev = import.meta.env.DEV;
const docsHref = isDev
  ? "http://localhost:9991/docs/index.html"
  : "/docs/index.html";
const routeList: RouteProps[] = [
  {
    href: "",
    label: "Home",
  },
  {
    href: docsHref,
    label: "Document",
  },
];
const isOpen = ref<boolean>(false);

onMounted(() => {
  mode.value = "light";
});
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <a href="/" class="font-bold text-lg flex items-center">
      <img
        src="../assets/logo.png"
        class="from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
      />
      Kiwi Assistant
    </a>
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center">
                  <img
                    src="../assets/logo.png"
                    class="from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
                  />
                  Kiwi
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="item in routeList"
                :key="item.label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a @click="isOpen = false" :href="item.href">
                  {{ item.label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
