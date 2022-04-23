<template>
  <Title>Obapelumi</Title>
  <header class="fw-screen sticky top-0 backdrop-blur-xl">
    <div
      class="flex items-center justify-between py-4 mx-10 xl:max-w-6xl xl:mx-auto"
    >
      <NuxtLink to="/"
        ><img src="/images/obapelumi.jpg" class="h-10 w-10 rounded-full" />
      </NuxtLink>
      <div class="flex space-x-8">
        <NuxtLink
          v-for="link in links"
          :to="link.to"
          activeClass="underline underline-offset-2"
          class="font-semibold text-sm text-gray-500 hover:text-gray-600 hover:underline hover:underline-offset-2"
          >{{ link.title }}</NuxtLink
        >
      </div>
    </div>
  </header>

  <NuxtPage />

  <footer
    class="flex flex-col space-y-2 pb-2 pt-4 max-w-xs mx-auto rounded-t-xl shadow-2xl justify-center sm:sticky bottom-0 backdrop-blur-xl"
  >
    <div class="items-center justify-center space-x-8 flex">
      <a href="https://github.com/obapelumi" target="__blank"
        ><IconsGithub class="h-6 text-gray-600 hover:fill-gray-600"
      /></a>
      <a href="https://twitter.com/0bapelumi" target="__blank"
        ><IconsTwitter class="h-6 text-gray-600 hover:fill-gray-600"
      /></a>
    </div>
    <span class="text-center text-gray-600 text-xs"
      >Copyright &copy; {{ currentYear }} · All rights reserved</span
    >
  </footer>
</template>

<script setup lang="ts">
const links = [
  { to: '/work', title: 'Work' },
  { to: '/articles', title: 'Articles' }
]
const currentYear = useYear()
</script>
