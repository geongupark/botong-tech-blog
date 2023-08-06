<template>
  <div class="max-w-[800px] mx-auto">
    <div>
      <VueSelect
        class="mt-14"
        :value="keyword"
        :options="Object.keys(tags)"
        placeholder="Search your tag..."
        v-model="selected"
        label="title"
      ></VueSelect>
    </div>
    <div class="mt-10">
      <div
        class="py-2 w-full cursor-pointer border-b-2 border-gray-200/[0.5] duration-500 hover:scale-105"
        @click="router.go(page.link)"
        v-for="page in tags[selected]"
      >
        <div class="font-bold">{{ page.title }}</div>
        <div class="text-sm">{{ page.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vitepress";
const selected = ref();
const router = useRouter();

const props = defineProps({
  tags: Array,
  keyword: String,
});
onMounted(() => {
  selected.value = props.keyword;
});
</script>
<style>
@import "vue-select/dist/vue-select.css";
:root {
  /* Search Input */
  --vs-search-input-placeholder-color: var(--vs-colors--light);
  /* Borders */
  --vs-border-radius: 10px;
  /* Active State */
  --vs-dropdown-option--active-bg: var(--vs-colors--lightest);
}
.dark {
  --vs-darkmode-background: rgba(30, 30, 32);
  --vs-colors--lightest: rgba(116, 123, 255, 0.26);
  --vs-colors--light: rgba(116, 123, 255, 0.5);
  --vs-colors--dark: rgba(116, 123, 255);
  --vs-colors--darkest: rgba(255, 255, 255, 0.15);

  /* Borders */
  --vs-border-color: var(--vs-colors--light);
  --vs-border-width: 2px;
  --vs-border-style: solid;

  /* Options */
  --vs-dropdown-bg: var(--vs-darkmode-background);
}
.dark .card {
  border: solid 1px var(--vs-colors--light);
  background-color: var(--vs-darkmode-background);
}
.dark .card h3 {
  color: var(--vs-colors--dark);
}
.dark .card p {
  color: azure;
}
</style>
