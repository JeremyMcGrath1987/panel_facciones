<template>
  <div class="file flex flex-col flex-no-wrap pb-16">
    <div
      class="lista-delitos-aplicados fixed bg-recto-normal z-20 overflow-y-scroll"
    >
      <div class="delitos-header flex flex-row py-4 px-4 flex-grow float-right">
        <ul class="right-0 self-start">
          <li class="inline-block ml-4">Deuda a cancelar:</li>
          <li class="inline-block ml-4">
            {{ formatPrice(selectedDebtQty) }} $
          </li>
          <li
            class="inline-block ml-4 hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
          @click="removeDebt(checkedDebts)"
          >
            Eliminar deuda seleccionada
          </li>
        </ul>
      </div>
    </div>
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <!-- <file-image /> -->
        <file-menu active="deudas" />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        
        <table class="border-b border-recto-dark">
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td></td>
              <td class="px-4 py-2">Motivo</td>
              <td class="px-4 py-2">Agente</td>
              <td class="px-4 py-2">
                Deuda:
                <span class="font-light">{{ formatPrice(totalDebt) }} $</span>
              </td>
              <td class="px-4 py-2">fecha y hora</td>
            </tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(deuda, index) in singleFile.deudas"
              :key="index"
            >
              <td class="pl-2">
                <input
                  type="checkbox"
                  :value="index"
                  class="recto-checkbox border border-recto-light bg-recto-dark"
                  v-model="checkedDebts"
                />
              </td>
              <td class="px-4 py-2 ">{{ deuda.texto }}</td>
              <td class="px-4 py-2 w-1/6">{{ deuda.user }}</td>
              <td class="px-4 py-2 w-1/4">{{ formatPrice(deuda.deuda) }} $</td>
              <td class="px-4 py-2 w-1/5">
                {{ deuda.fecha }}:{{ deuda.hora }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
/* import fileImage from "../components/fileImage"; */
import formatPrice from "../mixins/formatPrice";
import totalDebt from "../mixins/totalDebt";
export default {
  name: "file",
  data: () => {
    return {
      checkedDebts: [],
      isDesplegada: false
    };
  },
  components: { topBar, fileMenu/* , fileImage */ },
  mixins: [formatPrice, totalDebt],
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    removeDebt: async function(checkedDebts) {
      await this.$store.dispatch("REMOVEDEBT", checkedDebts);  
    }
  },
  computed: {
    singleFile: function() {
      return this.$store.state.file.data;
    },
    selectedDebtQty: function() {
      let qty = 0;
      this.checkedDebts.forEach(i => {
        qty += this.singleFile.deudas[i].deuda;
      });
      return qty;
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
  background: #0b122f;
}
.recto-checkbox {
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  width: 20px;
  height: 20px;
}
input[type="checkbox"]:checked {
  border: 6px inset #0b122f;
  background: #587fff;
  outline: none;
}
.lista-delitos-aplicados {
  height: 65px;
  bottom: 238px;
  width: 1142px;
}
</style>
