<template>
  <div class="max-w-[800px] mx-auto">
    <div>
      <SimpleTypeahead
        id="tag_search"
        placeholder="Search your tag..."
        :defaultItem="keyword"
        :items="Object.keys(tags)"
        minInputLength="0"
        @select-item="selectItem"
      ></SimpleTypeahead>
    </div>
    <div class="mt-10">
      <div
        class="py-5 w-full cursor-pointer border-b-2 border-gray-200/[0.5] duration-500 hover:scale-105"
        @click="router.go(page.link)"
        v-for="page in tags[selected]"
      >
        <span
          v-for="(tag, i) in page.tags"
          :key="i"
          class="hover:scale-105 duration-100 mr-2 inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-[10px] text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
        >
          <span
            class="font-bold cursor-pointer"
            @click="router.go(`/tag/?keyword=${tag}`)"
          >
            #{{ tag }}
          </span>
        </span>
        <div class="font-bold mt-2 truncate">{{ page.title }}</div>
        <div class="text-sm mt-2 truncate opacity-70">
          {{ page.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vitepress";
import SimpleTypeahead from "vue3-simple-typeahead";
const selected = ref();
const router = useRouter();

const props = defineProps({
  tags: Array,
  keyword: String,
});
onMounted(() => {
  selected.value = props.keyword;
});
function selectItem(item) {
  selected.value = item;
}
</script>
<style>
@import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
:root {
  --tag-search-input-background: var(--vp-c-white);
  --tag-search-input-border-radius: 5px;
  --tag-search-input-border-color: var(--vp-c-brand-lightest);
}
.dark {
  --tag-search-input-background: var(--vp-c-bg);
  --tag-search-input-border-radius: 10px;
}
.simple-typeahead > input {
  width: 100%;
  padding: 4px 10px 4px 10px;
  border-radius: var(--tag-search-input-border-radius);
  background-color: var(--tag-search-input-background);
  border: 1px solid var(--tag-search-input-border-color);
}

.simple-typeahead .simple-typeahead-list {
  position: absolute;
  width: 100%;
  border-bottom-left-radius: var(--tag-search-input-border-radius);
  border-bottom-right-radius: var(--tag-search-input-border-radius);
  border: none;
  max-height: 300px;
  font-size: 12px;
  overflow-y: auto;
  z-index: 9;
}
.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item {
  cursor: pointer;
  background-color: var(--tag-search-input-background) !important;
  padding: 5px 10px !important;
  border-bottom: 0.1rem solid var(--tag-search-input-border-color) !important;
  border-left: 0.1rem solid var(--tag-search-input-border-color) !important;
  border-right: 0.1rem solid var(--tag-search-input-border-color) !important;
}
.simple-typeahead
  .simple-typeahead-list
  .simple-typeahead-list-item:last-child {
  border-bottom: none;
}
.simple-typeahead
  .simple-typeahead-list
  .simple-typeahead-list-item.simple-typeahead-list-item-active {
  background-color: var(--tag-search-input-border-color) !important;
}
</style>
