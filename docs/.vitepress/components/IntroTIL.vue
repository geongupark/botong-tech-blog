<template>
  <span
    v-for="(tag, i) in frontmatter.tags"
    :key="i"
    class="hover:animate-shake mr-2 my-5 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
  >
    <a :href="withBase('\/tag\/?keyword=' + tag)">#{{ tag }} </a>
  </span>

  <kinesis-container>
    <kinesis-element :strength="20" type="depth">
      <h1>
        <span className="relative group">
          <span>{{ frontmatter.title }}</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-2 duration-700 bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 transition-all group-hover:w-full"
          ></span>
        </span>
      </h1>
      <div class="mt-5 mb-5 italic">
        <VueTyper
          type-delay="90"
          pre-type-delay="800"
          caret-animation="smooth"
          preEraseDelay="999999"
          :text="frontmatter.description"
        ></VueTyper>
      </div>
    </kinesis-element>
  </kinesis-container>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useData, withBase } from "vitepress";
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const frontmatter = useData().frontmatter.value;
</script>
<style>
:root .vue-typer {
  --char-typed-color: rgb(136, 136, 136);
}
.dark .vue-typer {
  --char-typed-color: rgb(161, 161, 161);
}
</style>
