<template>
  <div class="busqueda-rapida flex flex-row justify-center">
    <ul id="fastsearchlist" class="text-xs fast-search-list">
      <li
        class="hover:border-red-500 hover:text-red-500"
        :class="{
          'bg-red-500 text-white border-red-500': this.$store.state.search
            .peligroso
        }"
        @click="$store.dispatch('search/UPDATE_SEARCH', 'peligroso')"
      >
        Peligroso
      </li>
      <li
        class="hover:border-yellow-500 hover:text-yellow-500"
        :class="{
          'bg-yellow-500 text-white border-yellow-500': this.$store.state.search
            .byc
        }"
        @click="$store.dispatch('search/UPDATE_SEARCH', 'byc')"
      >
        ByC
      </li>
      <li
        class="hover:border-gray-400 hover:text-gray-400"
        :class="{
          'bg-gray-400 text-white border-gray-400': this.$store.state.search.embargado
        }"
        @click="$store.dispatch('search/UPDATE_SEARCH', 'embargado')"
      >
        Embargado
      </li>
      <li
        class="hover:border-blue-400 hover:text-blue-400"
        :class="{
          'bg-blue-400 text-white border-blue-400': this.$store.state.search
            .lspd
        }"
        @click="$store.dispatch('search/UPDATE_SEARCH', 'lspd')"
      >
        lspd
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "fast-search"
};
</script>
<style lang="scss">
#fastsearchlist {
  li {
    @apply mr-1 bg-transparent border border-recto-light px-1 rounded;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
