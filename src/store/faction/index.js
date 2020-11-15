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
      {}

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
      state.data._ranks[salary.index].money = salary.money;
    }
  }
};
