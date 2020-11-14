<template>
  <div class="file flex flex-col flex-no-wrap">
    <div class="tob-bar flex flex-row items-center w-full mt-8 py-2">
      <h1 class="mx-auto font-bold text-5xl py-2 px-4">
        {{ singleFaction._label }}
      </h1>
    </div>
    <div
      v-if="show"
      class="input_money addmoney bg-panel-dark border border-panel-light"
    >
      <input
        class="appearance-none bg-panel-dark border border-panel-light w-full p-2 focus:outline-none placeholder-gray-700"
        type="number"
        v-model="money"
        placeholder="INTRODUCE UNA CANTIDAD"
      />
      <button
        v-if="add"
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-white py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="
          addMoney(money), (show = false), (add = false), (withdraw = false)
        "
      >
        AÑADIR FONDOS
      </button>
      <button
        v-if="withdraw"
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-white py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="
          withdrawMoney(money),
            (show = false),
            (add = false),
            (withdraw = false)
        "
      >
        RETIRAR FONDOS
      </button>
      <button
        class="flex-shrink-0 bg-panel-light hover:bg-gray-500 text-white py-2 px-4 border border-panel-light hover:border-gray-500"
        @click="(show = false), (add = false), (withdraw = false)"
      >
        CANCELAR
      </button>
    </div>
    <div class="file-details-content flex flex-row">
      <div class="flex flex-wrap p-4">
        <file-menu active="moneymanagement" />
      </div>
      <div class="file-content p-4 flex flex-col w-1/2">
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td class="px-4 py-2">Fondos</td>
            </tr>
            <tr class="border-l border-r border-panel-dark">
              <td class="px-4 py-2 w-1/6">
                {{ formatPrice(singleFaction._money) }} $
                <button
                  class="button-withdraw border-panel-light"
                  @click="(show = true), (withdraw = true), (add = false)"
                >
                  RETIRAR FONDOS
                </button>
                <button
                  class="button-add border-panel-light"
                  @click="(show = true), (add = true), (withdraw = false)"
                >
                  INGRESAR FONDOS
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="file-content p-4 flex flex-col w-1/2">
        <table class="border-b border-panel-dark">
          <tbody>
            <tr class="border border-panel-dark font-bold bg-panel-dark">
              <td class="px-4 py-2">Rango</td>
              <td class="px-4 py-2">Sueldo</td>
              <td></td>
            </tr>
            <tr
              class="border-l border-r border-panel-dark"
              v-for="(rango, index) in singleFaction._ranks"
              :key="index"
            >
              <td class="px-4 py-2">{{ rango.label }}</td>
              <td class="px-4 py-2 w-1/6">{{ rango.money }} $</td>
              <td class="px-4 py-2 w-1/6">
                <button
                  class="button-withdraw border-panel-light"
                  @click="(show = true), (withdraw = true), (add = false)"
                >
                  EDITAR SUELDO
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
import fileMenu from "../components/fileMenu";
export default {
  name: "moneymanagement",
  components: { fileMenu },
  data: () => {
    return {
      money: undefined,
      show: false,
      add: false,
      withdraw: false,
    };
  },
  async mounted() {
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    addMoney: function (money) {
      if (money !== undefined) {
        if (money > 0) {
          /* // eslint-disable-next-line no-undef
            mp.trigger("addFactionMoney", parseInt(money)); */
          this.$store.dispatch("ADDMONEY", parseInt(money));
          this.money = undefined;
          this.show = false;
        }
      }
    },
    withdrawMoney: function (money) {
      if (money !== undefined) {
        if (money > 0) {
          /* // eslint-disable-next-line no-undef
            mp.trigger("removeFactionMoney", parseInt(money)); */
          this.$store.dispatch("WITHDRAWMONEY", parseInt(money));
          this.money = undefined;
          this.show = false;
        }
      }
    },
    formatPrice: function (value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    singleFaction: function () {
      return this.$store.state.faction.data;
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
.button-withdraw {
  width: 101px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 65px;
  font-size: 12px;
}
.button-withdraw:focus {
  outline: none;
}
.button-add {
  width: 112px;
  height: 20px;
  border: 1px solid #000000;
  margin-left: 15px;
  font-size: 12px;
}
.button-add:focus {
  outline: none;
}
.button-remove-note {
  width: 62px;
  height: 20px;
  border: 1px solid #000000;
}
.button-remove-note:focus {
  outline: none;
}
.input_money {
  font-size: 1.1em;
  padding: 15px;
  text-align: center;
}

.addmoney {
  position: absolute;
  top: 210px;
  left: 300px;
  width: 550px;
}

.withdrawMoney {
  position: absolute;
  top: 385px;
  left: 300px;
  width: 550px;
}

.input_money input {
  width: 100%;
  height: 50px;
  text-align: center;
}

.input_money button {
  margin: 15px 15px 0 15px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
