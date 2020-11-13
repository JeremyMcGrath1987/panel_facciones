<template>
  <div class="file flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <!-- <top-bar /> -->
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap py-4 pl-4">
        <!-- <file-image /> -->
        <file-menu active="information" />
      </div>
      <div class="file-content py-4 pr-2 flex flex-col w-full">
        <div class="properties-wrapper flex flex-col">
          <div>
            <table class="table-auto border-b border-recto-dark w-full">
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Dinero total
                  </td>
                </tr>
                <tr class="border-l border-r border-recto-dark">
                  <td class="px-4 py-2">
                    {{ formatPrice(singleFaction._money) }} $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4">
            <table
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Espacios disponibles en el almacén
                  </td>
                  <td class="px-4 py-2">
                    Espacios utilizados en el almacén
                  </td>
                  <td class="px-4 py-2">
                    Espacios totales del almacén
                  </td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                >
                  <td class="px-4 py-2">
                    <p>
                      {{ singleFaction._inventory._inventory._availableSlots }}
                    </p>
                  </td>
                  <td class="px-4 py-2">
                    <p>
                      {{ (singleFaction._inventory._inventory._slots - singleFaction._inventory._inventory._availableSlots) }}
                    </p>
                  </td>
                  <td class="px-4 py-2">
                    <p>
                      {{ singleFaction._inventory._inventory._slots }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4">
            <table
              v-if="
                Array.isArray(singleFaction._inventory._inventory._items) &&
                  singleFaction._inventory._inventory._items.length > 0
              "
              class="table-auto border-b border-recto-dark w-full"
            >
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">
                    Items
                  </td>
                  <td class="px-4 py-2">
                    Cantidad
                  </td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(item, index) in singleFaction._inventory._inventory._items"
                  :key="index"
                >
                  <td class="px-4 py-2">
                    <p>
                      {{ item.name }}
                    </p>
                  </td>
                  <td class="px-4 py-2">
                    <p>
                      {{ item.qty }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <p>No hay items en el almacén.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import topBar from "../components/topbar"; */
/* import fileImage from "../components/fileImage"; */
import fileMenu from "../components/fileMenu";
import singleFaction from "../mixins/singleFaction";
import formatPrice from "../mixins/formatPrice";
export default {
  name: "information",
  components: { /* topBar, */ /* fileImage, */ fileMenu },
  mixins: [singleFaction, formatPrice],
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
};
</script>
