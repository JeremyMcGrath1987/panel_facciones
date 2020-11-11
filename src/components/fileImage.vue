<template>
  <div class="fileImage">
    <div
      class="img-container border border-recto-dark w-56 h-64 overflow-hidden"
    >
      <img
        class="object-cover w-full h-full opacity-50"
        :src="fileImage"
        :alt="singleFile.name"
      />
    </div>
    <div>
      <img
        class="camera_button"
        src="../assets/images/camera_button.png"
        @click="showAddUrlImage"
      />
    </div>
    <div
      class="input_urlImage bg-recto-dark border border-recto-light"
      v-if="show"
    >
      <input
        class="appearance-none bg-recto-dark border border-recto-light w-full p-2 focus:outline-none placeholder-gray-700"
        type="text"
        v-model="urlImage"
        placeholder="INTRODUCE UNA URL IMAGEN"
      />
      <button
        class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
        @click="addImage(urlImage)"
      >
        AÑADIR FOTO
      </button>
      <button
        class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
        @click="show = false"
      >
        CANCELAR
      </button>
    </div>
    <ul class="file-details mt-4">
      <li>
        <span class="font-bold">ID:</span>
        {{ singleFile.id }}
      </li>
      <li>
        <span class="font-bold">Nombre:</span>
        {{ singleFile.name }}
      </li>
      <li>
        <span class="font-bold">Condado:</span>
        {{ singleFile.stateCountry }}
      </li>
      <li>
        <span class="font-bold">Domicilio:</span>
        <span
          v-if="
            Array.isArray(singleFile.propiedades.casas) &&
              singleFile.propiedades.casas.length > 1
          "
          >Varios domicilios</span
        >
        <span
          v-else-if="
            Array.isArray(singleFile.propiedades.casas) &&
              singleFile.propiedades.casas.length === 1
          "
          >{{ singleFile.propiedades.casas[0] }}</span
        >
        <span v-else>N/A</span>
      </li>
      <li>
        <span class="font-bold">Contacto:</span>
        {{ singleFile.telefono }}
      </li>
      <li>
        <span class="font-bold">Deuda pte:</span>
        {{ this.formatPrice(totalDebt) || 0 }} $
      </li>
    </ul>
    <ul class="mt-4">
      <li v-if="singleFile.peligroso">
        <span class="block w-full bg-red-500 text-white rounder text-center p-1"
          >Peligroso</span
        >
      </li>
      <li class="mt-1" v-if="singleFile.byc">
        <span
          class="block w-full bg-orange-500 text-white rounder text-center p-1"
          >En Búsqueda y captura</span
        >
      </li>
      <li class="mt-1" v-if="seizure">
        <span class="bg-white block w-full text-black rounder text-center p-1"
          >Ejecutar embargo</span
        >
      </li>
      <li class="mt-1" v-if="seizureWarning">
        <span
          class="bg-yellow-500 block w-full text-black rounder text-center p-1"
          >Avisar embargo</span
        >
      </li>
      <li class="mt-1" v-if="singleFile.lspd">
        <span
          class="block w-full bg-blue-500 text-white rounder text-center p-1"
          >Agente de la ley</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
import singleFile from "../mixins/singleFile";
import formatPrice from "../mixins/formatPrice";
import totalDebt from "../mixins/totalDebt";
export default {
  name: "singleFile",
  data: () => {
    return {
      urlImage: "",
      show: false
    };
  },
  mixins: [singleFile, formatPrice, totalDebt],
  methods: {
    addImage: function(urlImage) {
      if (!urlImage == "") {
        this.$store.dispatch("ADDIMAGE", urlImage);
        return (this.show = false);
      } else {
        return false;
      }
    },
    showAddUrlImage: function() {
      return (this.show = true);
    }
  },
  computed: {
    fileImage: function() {
      return (
        this.singleFile.photo || require("../assets/images/file_bg_pattern.png")
      );
    },
    seizure: function() {
      return this.totalDebt > process.env.VUE_APP_SEIZURE;
    },
    seizureWarning: function() {
      return (
        this.totalDebt >= process.env.VUE_APP_SEIZUREWARNING &&
        this.totalDebt <= process.env.VUE_APP_SEIZURE
      );
    }
  }
};
</script>
<style lang="scss">
.camera_button {
  position: absolute;
  left: 85px;
  top: 210px;
  width: 8%;
  opacity: 0.1;
}

.camera_button:hover {
  opacity: 0.7;
}

.input_urlImage {
  position: absolute;
  top: 210px;
  left: 300px;
  width: 550px;
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
}

.input_urlImage input {
  width: 100%;
  height: 50px;
  text-align: center;
}

.input_urlImage button {
  margin: 15px 15px 0 15px;
}
</style>
