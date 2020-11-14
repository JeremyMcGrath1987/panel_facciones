<template>
  <div class="busqueda md:w-1/3">
    <div class="flex items-center border-teal-500 py-2">
      <input
        v-model="query"
        class="appearance-none bg-panel-dark border border-panel-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
        type="text"
        placeholder="INTRODUCE ID"
      />
      <button
        @click="searchForFiles"
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-white py-2 px-4 border border-panel-light hover:border-gray-500"
        type="button"
      >
        BUSCAR CIUDADANO/A
      </button>
    </div>
    <div id="app">
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Búsqueda incorrecta</h3>
      </modal>
    </div>
  </div>
</template>
<script>
import modal from "./modal";
export default {
  name: "search",
  components: {
    modal,
  },
  data: () => {
    return {
      query: "",
      showModal: false,
    };
  },
  methods: {
    searchForFiles: async function () {
      let query = this.query.trim();
      let fastsearch = this.$store.state.search;
      let search = {
        query: query,
        type: undefined,
        tag: fastsearch,
      };
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      if (
        query.search(/^[0-9]/) >= 0
        
      ) {
        if (query.search(/[0-9]/) >= 0) {
          search.type = "id";
        } else {
          query = "undefined";
          search.query = undefined;
        }

        if (this.$route.name !== "Citizen") {
          await this.$router.push({
            name: "Citizen",
          });
        }
        /* // eslint-disable-next-line no-undef
        mp.trigger("searchRecto", JSON.stringify(search)); */
        await this.$store.dispatch("loadingScreen/ISLOADING", false);
      } else {
        this.showModal = true;
        await this.$store.dispatch("loadingScreen/ISLOADING", false);
      }
    },
  },
};
</script>
