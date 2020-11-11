<template>
  <div class="file flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <!-- <file-image /> -->
        <file-menu active="antecedentes" />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        
        <table
          v-if="
            Array.isArray(singleFile.antecedentes) &&
              singleFile.antecedentes.length > 0
          "
          class="table-auto border-b border-recto-dark"
        >
          <tbody>
            <tr class="border border-recto-dark font-bold bg-recto-dark">
              <td class="px-4 py-2">Antecedentes</td>
              <td class="px-4 py-2">Pena / Multa</td>
              <td class="px-4 py-2">Agente</td>
              <td class="px-4 py-2">fecha y hora</td>
            </tr>
            <tr
              class="border-l border-r border-recto-dark"
              v-for="(antecedente, index) in singleFile.antecedentes"
              :key="index"
            >
              <td class="px-4 py-2">
                <p v-for="(art, index) in antecedente.arts" :key="index">
                  {{ art }}
                </p>
              </td>
              <td class="px-4 py-2">
                {{ antecedente.pena }} <span class="text-xs">meses</span> /
                {{ formatPrice(antecedente.multa) }} $
              </td>
              <td class="px-4 py-2 w-1/6">{{ antecedente.user }}</td>
              <td class="px-4 py-2 w-1/4">{{ antecedente.fecha }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <p>No hay datos en este apartado.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
import fileMenu from "../components/fileMenu";
import singleFile from "../mixins/singleFile";
import formatPrice from "../mixins/formatPrice";
/* import fileImage from "../components/fileImage"; */
import moment from "moment";
moment.locale("es");

export default {
  name: "file",
  components: { topBar, fileMenu/* , fileImage */ },
  mixins: [singleFile, formatPrice],
  async mounted() {
    //Comprueba prescripciones
    if (process.env.VUE_APP_FELONY_PRESCRIPTION_DAYS > 0) {
      this.singleFile.antecedentes.forEach((antecedente, index) => {
        if (
          moment() >
            moment(antecedente.fecha).add(
              process.env.VUE_APP_FELONY_PRESCRIPTION_DAYS,
              "days"
            ) &&
          antecedente.multa < process.env.VUE_APP_DEBT_NO_PRESCRIPTION_OVER
        ) {
          //elimina antecedente
          this.singleFile.antecedentes.splice(index, 1);
        }
      });
      //Store antecedentes
      //TODO
    }
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
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
</style>
