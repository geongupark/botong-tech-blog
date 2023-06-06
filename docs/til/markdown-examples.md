# Configuring TailwindCSS to work with Vitepress

<h1 className="text-3xl font-bold underline">
  Hello world!
</h1>
<div class="flex flex-col sm:flex-row items-center mt-10">
  <img src="../images/vite-logo.svg" alt="Vite package logo" width="200" height="200" style="float: left; margin-right: 12px;" />
  <p class="italic text-gray-500">
    I've found myself feeling limited by the styles provided by the framework so I looked into what it takes to use a stylesheet.
  </p>
</div>

A bit of searching around ended up pointing me towards [this Github issue](https://github.com/vuejs/vitepress/issues/62) which helps a user integrate [Tailwindcss](https://tailwindcss.com/), a framework I've been using professionally and in personal projects for awhile now.

According to the responses within the issue, there are two ways of bringing in TailwindCSS:

**1. Import TailwindCSS through their CDN:**
