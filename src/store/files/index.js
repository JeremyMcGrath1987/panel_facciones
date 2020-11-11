export default {
    namespaced: true,
    state: {
      data: [{"name":"Escorbuto Dev","photo":"https://i.gyazo.com/e3fb519a0f088b4c1cabc90ae0e3f456.png","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Jeremy","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Aleks Mora","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Jose Mayo","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Escorbuto Dev","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Escorbuto Dev","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Escorbuto Dev","photo":"https://i.gyazo.com/e3fb519a0f088b4c1cabc90ae0e3f456.png","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Jeremy","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Aleks Mora","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Jose Mayo","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Escorbuto Dev","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false},{"name":"Escorbuto Dev","photo":"","id":"1603206077L","stateCountry":"Los Santos","peligroso":false,"byc":false,"lspd":false,"embargado":false}]
    },
    actions: {
      SETFILES: (context, filesLite) => {
        context.commit("setFiles", filesLite);
      }
    },
    mutations: {
      setFiles: (state, filesLite) => {

        if(filesLite.length<=0){
          state.data = {message: "No hay coincidencias en el sistema"}
        }else{
          state.data = filesLite;
        }
        
      }
    }
  };