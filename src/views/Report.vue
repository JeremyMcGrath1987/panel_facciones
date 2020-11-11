<template>
  <div class="report relative pb-16">
    <div
      class="lista-delitos-aplicados fixed bg-recto-normal z-20 overflow-y-scroll"
      :class="{ desplegada: isDesplegada }"
    >
      <div class="delitos-header flex flex-row py-4 px-4 flex-grow">
        <a
          @click="isDesplegada = !isDesplegada"
          href="#"
          class="self-start mr-8 border border-recto-light py-1 px-2"
        >{{ isDesplegada ? "Plegar" : "Desplegar" }}</a>
        <p class="flex-1 flex items-center self-start pt-1">
          Cantidad de delitos:
          <strong class="ml-2">{{ selected.length }}</strong>
        </p>
        <ul class="right-0 self-start">
          <li class="inline-block ml-4">Penal actual:</li>
          <li class="inline-block ml-4">
            {{ calculateMonths }}
            <span class="text-xs">Meses</span>
          </li>
          <li class="inline-block ml-4">{{ formatPrice(calculateFine) }} $</li>
          <li
            v-if="selected.length > 0"
            @click="selected = []"
            class="inline-block ml-4 text-red-400 hover:text-red-800 cursor-pointer ml-1 border border-red-400 py-1 px-2"
          >Cancelar denuncia</li>
          <li
            @click="confirmDelito"
            v-if="selected.length > 0"
            class="inline-block ml-4 hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
          >Confirmar la denuncia</li>
        </ul>
      </div>
      <table class="table-auto border-b border-recto-dark w-full">
        <tbody>
          <tr class="border border-recto-dark font-bold bg-recto-dark">
            <td class="px-4 py-2">Delito aplicado</td>
            <td>Pena</td>
            <td>Multa</td>
            <td></td>
          </tr>
          <tr
            class="border-l border-r border-recto-dark"
            v-for="(delito, index) in selected"
            :key="index"
          >
            <td class="px-4 py-2">
              ART. {{ delito.numero }} - {{ delito.titulo }}
              <p class="text-xs">{{ delito.texto }}</p>
            </td>
            <td>
              {{ delito.pena }}
              <span class="text-xs">meses</span>
            </td>
            <td>{{ formatPrice(delito.multa) }} $</td>
            <td class="px-4 py-2">
              <a
                @click="removeDelito(index)"
                class="float-right text-red-400 hover:text-red-900 cursor-pointer ml-1 border border-red-400 py-1 px-2"
              >Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="file flex flex-col flex-no-wrap">
      <top-bar />
      <div class="file-details-content flex flex-row">
        <div class="flex flex-wrap p-4">
          <file-image />
        </div>
        <div class="file-content p-4 flex flex-col w-full">
          <file-menu active />
          <p class="mb-2 text-lg font-bold">acta de denuncia</p>
          <input
            v-model="search"
            class="mt-2 mb-4 appearance-none bg-recto-dark border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
            type="text"
            placeholder="Buscar delito"
          />
          <div class="report-tables flex flex-row">
            <table class="table-auto border-b border-recto-dark w-full">
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">Código penal</td>
                  <td>Pena</td>
                  <td>Multa</td>
                  <td></td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(delito, index) in filteredList"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    ART. {{ delito.numero }} - {{ delito.titulo }}
                    <p class="text-xs">{{ delito.texto }}</p>
                  </td>
                  <td>
                    {{ delito.pena }}
                    <span class="text-xs">meses</span>
                  </td>
                  <td>{{ formatPrice(delito.multa) }} $</td>
                  <td class="px-4 py-2">
                    <a
                      @click="addDelito(delito)"
                      class="float-right hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
                    >Añadir</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "@/components/topbar";
import fileMenu from "@/components/fileMenu";
import fileImage from "@/components/fileImage";
import singleFile from "@/mixins/singleFile";
import formatPrice from "@/mixins/formatPrice";
import moment from "moment";
export default {
  name: "report",
  data: () => {
    return {
      search: "",
      selected: [],
      isDesplegada: false
    };
  },
  components: { topBar, fileImage, fileMenu },
  mixins: [singleFile, formatPrice],
  async mounted() {
    /* // eslint-disable-next-line no-undef
    mp.trigger("getArticlesList"); */
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  computed: {
    filteredList() {
      return this.$store.state.articlesList.data.filter(delito => {
        let d = delito.numero + " " + delito.titulo.toLowerCase();
        let s = this.search.toLowerCase();
        return d.includes(s);
      });
    },
    calculateMonths: function() {
      let selectedMonths = 0;
      this.selected.forEach(delito => {
        selectedMonths += delito.pena;
      });
      return selectedMonths;
    },
    calculateFine: function() {
      let selectedFine = 0;
      this.selected.forEach(delito => {
        selectedFine += delito.multa;
      });
      return selectedFine;
    }
  },
  methods: {
    addDelito: function(delito) {
      this.selected.push(delito);
    },
    removeDelito: function(index) {
      this.selected.splice(index, 1);
    },
    confirmDelito: async function() {
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      let fine = {
        arts: [],
        pena: undefined,
        multa: undefined,
        user: undefined,
        fecha: moment()
      };
      this.selected.forEach(delito => {
        fine.arts.push(`${delito.numero}. - ${delito.titulo}`);
      });
      fine.pena = this.calculateMonths;
      fine.multa = this.calculateFine;
      fine.user = this.$store.state.user.data.name;
      await this.$store.dispatch("ADDFINE", fine);
      await this.$router.push({ name: "File" });
      await this.$store.dispatch("loadingScreen/ISLOADING", false);
    }
  }
};
</script>
<style lang="scss">
tr:nth-child(odd) {
  background: #0b122f;
}
.lista-delitos-aplicados {
  transition: all 0.4s ease-in-out;
  height: 65px;
  bottom: 238px;
  width: 1142px;
}
.desplegada {
  height: 640px !important;
}
</style>
