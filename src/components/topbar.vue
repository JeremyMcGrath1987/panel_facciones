<template>
  <div class="tob-bar flex flex-row items-center w-full p-4">
    <!-- <img
      @click="$router.push({ name: 'Home' })"
      class="h-12 pr-3 self-start"
      src="../assets/images/lspd_logo.png"
      alt="lspd logo"
    />
    <img class="recto-text" src="../assets/images/recto-text.png" alt="recto" />
    <fast-search class="ml-auto"></fast-search> -->
    <search class="mx-auto" />
  </div>
</template>
<script>
import search from "../components/search";
/* import fastSearch from "./fastSearch"; */
export default {
  name: "topbar",
  components: { search/* , fastSearch */ }
};
</script>
<style lang="scss">
.recto-text {
  height: 20px;
  margin-top: -10px;
}
</style>
