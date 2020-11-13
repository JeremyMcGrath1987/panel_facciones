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
          id: 0,
          name: "cadet",
          label: "Cadete",
        },
        {
          id: 1,
          name: "officer",
          label: "Oficial",
          money: "$400"
        },
        {
          id: 2,
          name: "sergeant",
          label: "Sargento",
          money: "$400"
        },
        {
          id: 3,
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
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
              slots: 1,
              weight: 0,
              type: "recipe",
              ilegal: false,
              prop: "prop_fncwood_16e",
              icon: "madera",
              text: "undefined",
              qty: 2
            },{
              name: "Madera mala",
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
    SETFILE: (context, file) => {
      context.commit("setFile", file);
    },
    TOGGLESTATUS: (context, status) => {
      context.commit("toggleStatus", status);
    },
    ADDNOTE: (context, note) => {
      if (note.user && note.texto) {
        context.commit("addNote", note);
        return true;
      } else {
        return false;
      }
    },
    REMOVENOTE: (context, index) => {
      context.commit('removeNote', index);
    },
    ADDDEBT: (context, debt) => {
      if ((debt.user && debt.texto, debt.deuda)) {
        debt.deuda = Number(debt.deuda);
        if (debt.deuda <= 0) {
          return false;
        }
        context.commit("addDebt", debt);
        return true;
      } else {
        return false;
      }
    },
    REMOVEDEBT: (context, checkedDebts) => {
      context.commit('removeDEBT', checkedDebts);
    },
    ADDFINE: (context, fine) => {
      if (fine.arts.length > 0) {
        context.commit("addFine", fine);
      }
    },
    ADDIMAGE: (context, urlImage) => {
      context.commit('addImage', urlImage);
    }
  },
  mutations: {
    setFile: (state, file) => {
      state.data = file;
    },
    toggleStatus: (state, status) => {
      state.data[status] = !state.data[status];
      /* let statusId = {
        userId: state.data.id,
        status: status
      };
      // eslint-disable-next-line no-undef
      mp.trigger("toggleStatusRecto", JSON.stringify(statusId)); */

    },
    addNote: (state, note) => {
      note.fecha = moment();
      state.data.notas.unshift(note);
      /* let noteId = {
        userId: state.data.id,
        note: note
      };
      // eslint-disable-next-line no-undef
      mp.trigger("setNoteRecto", JSON.stringify(noteId)); */
    },
    removeNote: (state, index) => {
      state.data.notas.splice(index, 1);
      /* let indexId = {
        userId: state.data.id,
        index: index
      };
      // eslint-disable-next-line no-undef
      mp.trigger("removeNoteRecto", JSON.stringify(indexId)); */
    },
    addDebt: (state, debt) => {
      debt.fecha = moment();
      state.data.deudas.unshift(debt);
      /* let debtId = {
        userId: state.data.id,
        debt: debt
      };
      // eslint-disable-next-line no-undef
      mp.trigger("setDebtRecto", JSON.stringify(debtId)); */
    },
    removeDEBT: (state, checkedDebts) => {
      if (!checkedDebts === undefined || checkedDebts[0] >= 0) {
        /* let debtsId = {
          userId: state.data.id,
          index: checkedDebts
        };
        // eslint-disable-next-line no-undef
        mp.trigger("removeDebtsRecto", JSON.stringify(debtsId)); */
        for (let i = checkedDebts.length - 1; i >= 0; i--) {
          state.data.deudas.splice(checkedDebts[i], 1);
        }
        checkedDebts.splice(0, checkedDebts.length);
      } else {
        return false;
      }
    },
    addFine: (state, fine) => {
      state.data.antecedentes.unshift(fine);
      /* let fineId = {
        userId: state.data.id,
        fine: fine
      };
      // eslint-disable-next-line no-undef
      mp.trigger("addReportRecto", JSON.stringify(fineId)); */
    },
    addImage: (state, urlImage) => {
      state.data.photo = urlImage;
      /* let imageId = {
        userId: state.data.id,
        image: urlImage
      };
      // eslint-disable-next-line no-undef
      mp.trigger("setImageRecto", JSON.stringify(imageId)); */
    }
  },
  getters: {
    peligroso: state => {
      return state.data.peligroso;
    },
    byc: state => {
      return state.data.byc;
    },
    lspd: state => {
      return state.data.lspd;
    }
  }
};
