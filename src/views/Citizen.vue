<template>
  <div class="files2 flex flex-col flex-no-wrap">
    <!-- <topbar /> -->
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div class="file-details-content flex flex-row">
      <div
        v-if="success"
        class="successContract bg-panel-dark border border-panel-light"
      >
        <p class="appearance-none text-white bg-panel-dark w-full p-2">
          Id: {{ this.id }} con rango: {{ this.rank.label }}
        </p>
        <p class="appearance-none text-white bg-panel-dark w-full p-2">
          contratado con éxito.
        </p>
        <button
          class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-gray-800 py-2 px-4 border border-panel-light hover:border-gray-500"
          @click="(success = false), (rank = ''), (id = undefined)"
        >
          ACEPTAR
        </button>
      </div>
      <div class="flex flex-wrap p-4">
        <file-menu active="citizen" />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td></td>
              <td class="px-4 py-2">ID</td>
              <td class="px-4 py-2">Rango</td>
              <td class="px-4 py-2">Contratación</td>
            </tr>
            <tr></tr>
            <tr class="border-l border-r border-panel-dark">
              <td></td>
              <td class="px-4 py-2">
                <input
                  class="appearance-none border border-panel-dark w-full p-2 focus:outline-none placeholder-gray-300 bg-gray-700"
                  type="text"
                  v-model="id"
                  placeholder="INTRODUCE LA ID A CONTRATAR"
                />
              </td>
              <td class="px-4 py-2 ancho inline-block">
                <div
                class="inline-block mr-6"
                  v-for="(rango, key, index) in singleFaction._ranks"
                  :key="index"
                >
                  <input type="radio" v-model="rank" v-bind:value="rango" />
                  {{ rango.label }} - {{ rango.money }}
                </div>
                <!-- <select
                  v-model="rank"
                  class="border border-panel-light w-full p-2"
                >
                  <option disabled value="" selected>
                    SELECCIONA UN RANGO
                  </option>
                  <option
                    v-for="(rango, index) in singleFaction._ranks"
                    :key="index"
                    v-bind:value="rango"
                  >
                    {{ rango.label }} - {{ rango.money }}
                  </option>
                </select> -->
              </td>
              <td class="px-4 py-2">
                <button
                  class="button-contract border-panel-normal hover:text-gray-500"
                  @click="contract(id, rank)"
                >
                  CONTRATAR
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
import singleFaction from "../mixins/singleFaction";
import formatPrice from "../mixins/formatPrice";
import fileMenu from "../components/fileMenu";
export default {
  name: "citizen",
  components: { /* topbar, */ fileMenu },
  mixins: [formatPrice, singleFaction],
  data: () => {
    return {
      rank: "",
      id: undefined,
      success: false,
    };
  },
  methods: {
    contract: function (id, rank) {
      
      if (id !== undefined) {
        if (id.trim() !== "" && rank.id != undefined) {
          this.success = true;
          // eslint-disable-next-line no-undef
          mp.trigger("citizenContract", id, rank.id);
        }
      }
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
.button-contract {
  width: 85px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus {
  outline: none;
}

.successContract {
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
  position: absolute;
  top: 210px;
  left: 300px;
  width: 550px;
}
.ancho{
  width: 26rem;
}
</style>