---
layout: page
---

<script setup>
  import Tags from '../.vitepress/components/Tags.vue'
  import { ref, onMounted, computed } from "vue";
  import { useData, useRoute, useRouter } from "vitepress";

  const books = ["test", "vue"];
  let tags = ref([]);
  tags = useData().site.value.themeConfig.tags;
  const keyword = getQueryParameter(document.location.href, "keyword")
  function getQueryParameter(url, parameter) {
    parameter = parameter.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + parameter + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
</script>
<div class="w-4/5 mx-auto">
  <Tags class="pt-10" :tags="tags" :keyword="keyword"></Tags>
</div>
