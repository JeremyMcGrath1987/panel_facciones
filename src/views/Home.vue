<template>
  <div class="home flex items-center justify-center h-full flex-col">
    <img src="../assets/images/lspd_logo.png" alt="lspd logo" />
    <p class="mt-8">
      <span class="font-bold">R</span>egistro
      <span class="font-bold">E</span>statal de
      <span class="font-bold">C</span>iudadanos y
      <span class="font-bold">T</span>rámites
      <span class="font-bold">O</span>rgánicos,
      <strong class="font-bold">v:2.0.0</strong>
    </p>
    <fast-search class="mt-4 md:w-1/3 w-full" />
    <search class="mt-4 md:w-1/3 w-full" />
  </div>
</template>
<script>
import search from "../components/search";
import fastSearch from "../components/fastSearch";
export default {
  name: "Home",
  components: { search, fastSearch },
  mounted() {
    /* // eslint-disable-next-line no-undef
    mp.trigger("getUserData"); */
  }
};
</script>
