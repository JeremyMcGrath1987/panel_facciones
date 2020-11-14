<template>
  <div class="tob-bar flex flex-row items-center w-full p-4">
    <search class="mx-auto" />
  </div>
</template>
<script>
import search from "../components/search";
export default {
  name: "topbar",
  components: { search }
};
</script>
<style lang="scss">
.panel-text {
  height: 20px;
  margin-top: -10px;
}
</style>
