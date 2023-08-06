<template>
  <div>
    <span
      v-for="(tag, i) in frontmatter.tags"
      :key="i"
      class="hover:scale-105 duration-100 mr-2 my-5 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
    >
      <span
        class="font-bold cursor-pointer"
        @click="router.go(withBase(`/tag/?keyword=${tag}`))"
      >
        #{{ tag }}
      </span>
    </span>

    <h1>
      <span className="relative group">
        <span class="">{{ frontmatter.title }}</span>
        <span
          class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 animate-underLine"
        ></span>
      </span>
    </h1>
    <div class="mt-5 mb-5 italic">
      <VueTyper
        type-delay="70"
        pre-type-delay="800"
        caret-animation="smooth"
        preEraseDelay="999999"
        :text="frontmatter.description"
      ></VueTyper>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useData, withBase, useRouter } from "vitepress";
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const frontmatter = useData().frontmatter.value;
const router = useRouter();
</script>
<style>
:root .vue-typer {
  --char-typed-color: rgb(136, 136, 136);
}
.dark .vue-typer {
  --char-typed-color: rgb(161, 161, 161);
  --caret-idle-color: rgb(161, 161, 161);
}
</style>
