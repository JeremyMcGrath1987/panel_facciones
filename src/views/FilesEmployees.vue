<template>
  <div class="files flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap py-4 pl-4">
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
      <div class="file-content py-4 pr-2 flex flex-col w-full">
        <table class="border-b border-recto-dark">
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td></td>
              <td class="px-4 py-2">Nombre</td>
              <td class="px-4 py-2">ID</td>
              <td class="px-4 py-2">Rango</td>
              <td class="px-4 py-2">Salario</td>
              <td class="px-4 py-2">Ascenso</td>
              <td class="px-4 py-2">Descenso</td>
              <td class="px-4 py-2">Despido</td>
              <td class="px-2 py-2">Online</td>
            </tr>
            <tr></tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(empleado, index) in this.$store.state.employees.data"
              :key="index"
              :file="empleado"
            >
              <td></td>
              <td class="px-4 py-2">{{ empleado.name }}</td>
              <td class="px-4 py-2">{{ empleado.id }}</td>
              <td class="px-4 py-2">{{ empleado.rank }}</td>
              <td class="px-4 py-2">{{ formatPrice(empleado.salario) }} $</td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="ascendEmployee(empleado.id)"
                >
                  Ascender
                </button>
              </td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="descendEmployee(empleado.id)"
                >
                  Descender
                </button>
              </td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-remove-note border-recto-light"
                  @click="dismissEmployee(empleado.id)"
                >
                  Despedir
                </button>
              </td>
              <td v-if="empleado.online" class="px-2 py-2 bg-green-600"></td>
              <td v-else class="px-2 py-2 bg-red-600"></td>

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
import singleFaction from "../mixins/singleFaction";
export default {
  name: "filesemployees",
  components: { /* topbar, */ /* file, */ fileMenu },
  mixins: [formatPrice, singleFaction],
  methods: {
    ascendEmployee: function(id) {
      /* this.$store.dispatch("REMOVENOTE", index); */
      console.log(id);
    },
    descendEmployee: function(id) {
      /* this.$store.dispatch("REMOVENOTE", index); */
      console.log(id);
    },
    dismissEmployee: function(id) {
      /* this.$store.dispatch("REMOVENOTE", index); */
      console.log(id);
    },
    gotofile: async function(id) {
      /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
      await this.$router.push({ name: "File2", params: { id: id } });
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
  width: 72px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus{
  outline: none;
}
</style>