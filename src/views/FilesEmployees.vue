<template>
  <div class="filesemployees flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="alertSure bg-panel-dark border border-panel-light" v-if="rank">
      <p class="appearance-none text-white bg-panel-dark w-full p-2">
        Selecciona un rango para {{ name }}:
      </p>
      <div
        class="inline-block mr-4"
        v-for="(rango, key, index) in singleFaction._ranks"
        :key="index"
      >
        <input type="radio" v-model="rankObject" v-bind:value="rango" />
        {{ rango.label }}
      </div>
      <div></div>
      <!-- <select
        v-model="rankObject"
        class="text-white border border-panel-light bg-panel-dark w-full p-2"
      >
        <option disabled value="" selected>SELECCIONA UN RANGO</option>
        <option
          v-for="(rango, index) in singleFaction._ranks"
          :key="index"
          v-bind:value="rango"
        >
          {{ rango.label }}
        </option>
      </select> -->
      <button
        v-if="rankObject != ''"
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="rankEmployee(id, index, rankObject)"
      >
        ACEPTAR
      </button>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="rank = false"
      >
        CANCELAR
      </button>
    </div>
    <div class="alertSure bg-panel-dark border border-panel-light" v-if="show">
      <p class="appearance-none text-white bg-panel-dark w-full p-2">
        ¿Estas segura/o de despedir a {{ name }}?
      </p>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="dismissEmployee(id, index)"
      >
        ACEPTAR
      </button>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="show = false"
      >
        CANCELAR
      </button>
    </div>
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap py-4 pl-4">
        <file-menu active="files" />
      </div>
      <div class="file-content py-4 pr-2 flex flex-col w-full">
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td class="px-4 py-2">Nombre</td>
              <td class="px-4 py-2">ID</td>
              <td class="px-4 py-2">Rango</td>
              <td class="px-4 py-2">Rangos</td>
              <td class="px-4 py-2">Despido</td>
              <td class="px-2 py-2">Online</td>
            </tr>
            <tr></tr>
            <tr
              class="border-l border-r border-panel-dark"
              v-for="(empleado, index) in this.$store.state.employees.data"
              :key="index"
              :file="empleado"
            >
              <td></td>
              <td class="px-4 py-2">{{ empleado.name }}</td>
              <td class="px-4 py-2">{{ empleado.id }}</td>
              <td class="px-4 py-2">{{ empleado.rank }}</td>
              <td class="px-4 py-2" v-if="empleado.online">
                <button
                  :value="index"
                  class="button-rank border-panel-light hover:text-gray-500"
                  @click="showRank(empleado.id, index, empleado.name)"
                >
                  Cambiar rango
                </button>
              </td>
              <td v-else class="px-2 py-2"></td>
              <td class="px-4 py-2">
                <button
                  :value="index"
                  class="button-dismiss border-panel-light hover:text-gray-500"
                  @click="showSure(empleado.id, index, empleado.name)"
                >
                  Despedir
                </button>
              </td>
              <td v-if="empleado.online" class="px-2 py-2 online"></td>
              <td v-else class="px-2 py-2 offline"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import formatPrice from "../mixins/formatPrice";
import fileMenu from "../components/fileMenu";
import singleFaction from "../mixins/singleFaction";
export default {
  name: "filesemployees",
  components: { fileMenu },
  mixins: [formatPrice, singleFaction],
  data: () => {
    return {
      rankObject: "",
      rank: false,
      show: false,
      id: "",
      index: -1,
      name: "",
    };
  },
  async mounted() {
    /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
    // eslint-disable-next-line no-undef
    mp.trigger("getEmployees");
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    showSure: function (id, index, name) {
      return (
        (this.show = true),
        (this.id = id),
        (this.index = index),
        (this.name = name)
      );
    },
    showRank: function (id, index, name) {
      return (
        (this.rank = true),
        (this.id = id),
        (this.index = index),
        (this.name = name)
      );
    },
    rankEmployee: function (id, index, rank) {
      // eslint-disable-next-line no-undef
      mp.trigger("changeRankFaccion", id, rank.id);
      const info = {
        index: index,
        rank: rank.label,
      };
      this.$store.dispatch("employees/ASCENDEMPLOYEE", info);

      return (this.rank = false);
    },
    dismissEmployee: function (id, index) {
      // eslint-disable-next-line no-undef
      mp.trigger("despedirFaccion", id);
      this.$store.dispatch("employees/DISMISSEMPLOYEE", index);
      return (this.show = false);
    },
  },
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
.button-rank {
  width: 110px;
  height: 20px;
  border: 1px solid #000000;
}
.button-rank:focus {
  outline: none;
}
.button-dismiss {
  width: 72px;
  height: 20px;
  border: 1px solid #000000;
}
.button-dismiss:focus {
  outline: none;
}
.alertSure {
  position: fixed;
  bottom: 45%;
  right: 15%;
  width: 550px;
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
}

.alertSure button {
  margin: 15px 15px 0 15px;
}

.offline{
  background: url("../assets/images/boton_offline.png") no-repeat center;
}

.online{
  background: url("../assets/images/boton_online.png") no-repeat center;
}
</style>