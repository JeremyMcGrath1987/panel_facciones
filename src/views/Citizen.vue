<template>
  <div class="files2 flex flex-col flex-no-wrap">
    <topbar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-menu active="citizen" />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <table class="border-b border-recto-dark">
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td></td>
              <td class="px-4 py-2">Nombre</td>
              <td class="px-4 py-2">ID</td>
              <td class="px-4 py-2">Contratación</td>
            </tr>
            <tr></tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(file, index) in this.$store.state.citizen.data"
              :key="index"
              :file="file"
            >
              <td></td>
              <td class="px-4 py-2">{{ file.name }}</td>
              <td class="px-4 py-2">{{ file.id }}</td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-contract border-recto-light"
                  @click="contract(file.id)"
                >
                  Contratar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import topbar from "../components/topbar";
import formatPrice from "../mixins/formatPrice";
import fileMenu from "../components/fileMenu";
export default {
  name: "citizen",
  components: { topbar, fileMenu },
  mixins: [formatPrice],
  methods: {
    contract: function (id) {
      console.log(id);
    },
    gotofile: async function(id) {
      /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
      await this.$router.push({ name: "Citizen", params: { id: id } });
      /* // eslint-disable-next-line no-undef
            mp.trigger("getFileRecto", id); */
    }
  }
};
</script>
<style lang="scss">
.file-details {
  li {
    border: none;
    padding: 0;
    display: block;
  }
}
tr:nth-child(odd) {
  border: 1px solid #000000;
}
.button-contract{
  width: 70px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus{
  outline: none;
}
</style>