<template>
  <div>
    <v-select
      class="mx-[20%] mt-14"
      :value="keyword"
      :options="Object.keys(tags)"
      placeholder="Search your tag..."
      v-model="selected"
      label="title"
    ></v-select>
  </div>

  <ul>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <li v-for="page in tags[selected]">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <a
              :href="page.link"
              class="card m-2 block rounded-lg p-6 duration-1000 bg-white ring-1 ring-slate-900/5 space-y-3 dark:bg-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40"
            >
              <div class="flex items-center space-x-3">
                <h3 class="text-slate-900 truncate text-sm font-semibold">
                  {{ page.title }}
                </h3>
              </div>
              <p class="text-slate-500 truncate text-xs">
                {{ page.description }}
              </p>
            </a>
          </kinesis-element>
        </kinesis-container>
      </li>
    </div>
  </ul>
</template>
<script setup>
import { onMounted, ref } from "vue";

const selected = ref();

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
