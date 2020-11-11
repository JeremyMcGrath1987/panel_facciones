<template>
  <div class="file flex flex-col flex-no-wrap">
    <top-bar />
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <!-- <file-image /> -->
        <file-menu active="propiedades" />
      </div>
      <div class="file-content p-4 flex flex-col w-full">
        
        <div class="properties-wrapper flex flex-col">
          <div>
            <table
              v-if="
                Array.isArray(singleFile.propiedades.vehiculos) &&
                  singleFile.propiedades.vehiculos.length > 0
              "
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Vehículos
                  </td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(vehiculo, index) in singleFile.propiedades.vehiculos"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    <p>
                      {{ vehiculo }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No tiene vehículos registrados.</p>
            </div>
          </div>
          <div class="mt-4">
            <table
              v-if="
                Array.isArray(singleFile.propiedades.casas) &&
                  singleFile.propiedades.casas.length > 0
              "
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Domicilios
                  </td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(casa, index) in singleFile.propiedades.casas"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    <p>
                      {{ casa }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No tiene domicilios registrados.</p>
            </div>
          </div>
          <div class="mt-4">
            <table
              v-if="
                Array.isArray(singleFile.propiedades.negocios) &&
                  singleFile.propiedades.negocios.length > 0
              "
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Negocios
                  </td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(negocio, index) in singleFile.propiedades.negocios"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    <p>
                      {{ negocio }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No hay negocios a su nombre.</p>
            </div>
          </div>
          <div class="mt-4">
            <table
              v-if="
                Array.isArray(singleFile.propiedades.negocios) &&
                  singleFile.propiedades.negocios.length > 0
              "
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Cuentas bancarias
                  </td>
                </tr>
                <tr class="border-l border-r border-recto-dark">
                  <td class="px-4 py-2">
                    <p>
                      {{ formatPrice(singleFile.banco) || 0 }}
                      $
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No hay datos en este apartado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "../components/topbar";
/* import fileImage from "../components/fileImage"; */
import fileMenu from "../components/fileMenu";
import singleFile from "../mixins/singleFile";
import formatPrice from "../mixins/formatPrice";
export default {
  name: "properties",
  components: { topBar, /* fileImage, */ fileMenu },
  mixins: [singleFile, formatPrice],
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  }
};
</script>
