import moment from "moment";
moment.locale("en", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
    "_"
  ),
  monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
    "_"
  ),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
});

export default {
  state: {
    data:
    {
      _id: 2,
      _name: "lspd",
      _label: "LSPD",
      _ranks: [
        {
          id: 5,
          name: "cadet",
          label: "Cadete",
          money: "$300"
        },
        {
          id: 45,
          name: "officer",
          label: "Oficial",
          money: "$400"
        },
        {
          id: 17,
          name: "sergeant",
          label: "Sargento",
          money: "$400"
        },
        {
          id: 8,
          name: "lieutenant",
          label: "Teniente",
          money: "$400"
        },
      ],
      _spawnVehicles: {
        Station1: []
      },
      _money: 456150,
      _inventory: {
        _name: "Almacén",
        _inventory: {
          _slots: 500,
          _availableSlots: 470,
          _items: [
            {
              name: "Pistola Vintage",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bolsita María",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bolsita Coca",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Porra",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Taser",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Dinero Negro",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Bidón Gasolina",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Joyas",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Linterna",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }, {
              name: "Madera",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            }
          ]
        },
        _maxWeight: 500
      },
      _coords: [
        {
          type: "inventario",
          pos: Object,
          minRank: 0,
          station: false
        }
      ]
    }

  },
  actions: {
    SETFACTION: (context, faction) => {
      context.commit("setFaction", faction);
    },
    ADDMONEY: (context, money) => {
      context.commit("addMoney", money);
    },
    WITHDRAWMONEY: (context, money) => {
      context.commit("withdrawMoney", money);
    },
    EDITSALARY: (context, salary) => {
      context.commit("editSalary", salary);
    }
  },
  mutations: {
    addMoney: (state, money) => {
      state.data._money += money;
    },
    withdrawMoney: (state, money) => {
      if ((state.data._money - money) < 0) {
        return false
      } else {
        state.data._money -= money;
      }

    },
    setFaction: (state, faction) => {
      state.data = faction;
    },
    editSalary: (state, salary) => {
      state.data._ranks[salary.index].money = ("$"+String(salary.money));
    }
  }
};
