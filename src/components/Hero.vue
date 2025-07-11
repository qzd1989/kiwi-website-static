<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "./ui/button";

const mode = useColorMode();
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 pt-20 pb-10 md:pt-32 md:pb-10"
    >
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>Simplifying your tasks, one click at a time.</h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Kiwi monitors your screen in real time, detecting images, colors, and
          text. You can use Python scripts to access the results and simulate
          mouse and keyboard actions.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://github.com/kiwi-biexi/kiwi/releases/download/v1.1.0/Kiwi_1.1.0_x64-setup.exe"
            target="_blank"
          >
            <Button class="font-bold group/arrow">
              Download Kiwi 1.1.0 (x64) – Windows 11 only
            </Button>
          </a>
        </div>
      </div>

      <div class="relative group mt-14">
        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30"
          :src="mode == 'light' ? 'kiwi-demo.png' : 'kiwi-demo.png'"
          alt="dashboard using shadcn-vue"
        />
      </div>
    </div>
  </section>
</template>
