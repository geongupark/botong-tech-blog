---
layout: page
---

<script setup>
  import Tags from '../.vitepress/components/Tags.vue'
  import { ref, onMounted, computed } from "vue";
  import { useData, useRoute, useRouter } from "vitepress";

  const data = useData();
  const tags = ref([]);
  const keyword = computed(() => {
    try{
      return getQueryParameter(document.location.href, "keyword");
    }
    catch(error)
    {
      return '';
    }
  });
  
  onMounted(()=>{
    tags.value = data.site.value.themeConfig.tags;
  });

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
