<template>
  <div class="note flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-image />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <file-menu active="" />
        <p class="mb-2 text-lg font-bold">AÑADE UNA DEUDA</p>
        <div class="note-form flex flex-row">
          <div class="field w-1/4">
            <input
              v-model="deuda"
              class="appearance-none bg-recto-dark border w-full border-recto-light w-1/2 p-2 uppercase focus:outline-none placeholder-gray-700"
              type="number"
              placeholder="Cantidad de la deuda"
            />
          </div>
        </div>
        <div class="note-form flex flex-row pt-2">
          <textarea
            v-model="texto"
            placeholder="Introduce una nota"
            class="w-full appearance-none bg-recto-dark border w-full border-recto-light p-2 uppercase focus:outline-none placeholder-gray-700 h-64"
          ></textarea>
        </div>
        <button
          @click="addDebt"
          class="mt-2 w-1/4 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
          type="button"
        >
          AÑADIR DEUDA
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
import fileImage from "../components/fileImage";
export default {
  name: "note",
  data: () => {
    return {
      user: undefined,
      texto: undefined,
      deuda: undefined
    };
  },
  components: { topBar, fileMenu, fileImage },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    addDebt: async function() {
      let debtAdded = await this.$store.dispatch("ADDDEBT", {
        user: this.$store.state.user.data.name,
        texto: this.texto,
        deuda: this.deuda
      });
      if (!debtAdded) {
        console.log("debt error");
      } else {
        this.user = undefined;
        this.texto = undefined;
        this.deuda = undefined;
        await this.$store.dispatch("loadingScreen/ISLOADING", true);
        this.$router.push({ name: "Debts" });
      }
    }
  }
};
</script>
