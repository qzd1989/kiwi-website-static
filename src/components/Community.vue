<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import DiscordIcon from "./../icons/DiscordIcon.vue";
import QQIcon from "./../icons/QQIcon.vue";
</script>

<template>
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr)">
                <Component class="w-20 h-20 m-auto mb-4" :is="DiscordIcon" />
                <Component class="w-20 h-20 m-auto mb-4" :is="QQIcon" />
              </div>
              Ready to join this
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                Community?
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Join the group chat to share and exchange your experiences.
          </CardContent>

          <CardFooter>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
              <Button as-child>
                <a href="https://discord.gg/bCXzZqd5jW" target="_blank">
                  Join Discord
                </a>
              </Button>
              <div></div>
              <Button as-child>
                <a href="https://qm.qq.com/q/vTKiVcaLC0" target="_blank">
                  Join QQ group
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
