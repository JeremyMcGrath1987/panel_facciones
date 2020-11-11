<template>
  <div class="files flex flex-col flex-no-wrap">
    <!-- <topbar /> -->
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <!-- <file-image /> -->
        <file-menu active="files" />
      </div>
      <!-- <div class="items-end md:w-1/3 sm:1/2 lg:1/3 mt-8">
        <p class="text-xl flex items-center justify-center h-full flex-col">
          {{ this.$store.state.files.data.message }}
        </p>
      </div>
      <div
        v-if="!this.$store.state.files.data.message"
        class="files-wrapper flex flex-wrap p-4"
      >
        <file
          class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1"
          v-for="(file, index) in this.$store.state.files.data"
          :key="index"
          :file="file"
          @click.native="gotofile(file.id)"
        />
      </div> -->
      <div class="file-content p-4 flex flex-col w-full">
        <table class="border-b border-recto-dark">
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td></td>
              <td class="px-4 py-2">Nombre</td>
              <td class="px-4 py-2">ID</td>
              <td class="px-4 py-2">Cargo</td>
              <td class="px-4 py-2">Salario</td>
              <td class="px-4 py-2">Ascenso</td>
              <td class="px-4 py-2">Despido</td>
            </tr>
            <tr></tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(file, index) in this.$store.state.files.data"
              :key="index"
              :file="file"
            >
              <td></td>
              <td class="px-4 py-2">{{ file.name }}</td>
              <td class="px-4 py-2">{{ file.id }}</td>
              <td class="px-4 py-2">{{ file.cargo }}</td>
              <td class="px-4 py-2">{{ formatPrice(file.salario) }} $</td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="removeNote(index)"
                >
                  Ascender
                </button>
              </td>
              
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="removeNote(index)"
                >
                  Despedir
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
/* import topbar from "../components/topbar"; */
/* import file from "../components/file"; */
import formatPrice from "../mixins/formatPrice";
import fileMenu from "../components/fileMenu";
export default {
  name: "file",
  components: { /* topbar, */ /* file, */ fileMenu },
  mixins: [formatPrice],
  methods: {
    gotofile: async function(id) {
      /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
      await this.$router.push({ name: "File", params: { id: id } });
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
.button-remove-note{
  width: 62px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus{
  outline: none;
}
</style>