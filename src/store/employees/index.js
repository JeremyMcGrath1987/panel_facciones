export default {
  namespaced: true,
  state: {
    data: [{ "name": "Jose Mayo", "id": "9845613212F","salario": 800, "rank": "Jefe LSPD", "online": true},
    { "name": "Mark Ruffalo", "id": "1603206077L","salario": 750, "rank": "Jefe Adjunto", "online": true },
    { "name": "Aleks Mora", "id": "4513789546K","salario": 700, "rank": "Jefe Supervisor", "online": false },
    { "name": "Frank Roswelt", "id": "8456791249H","salario": 500, "rank": "Capitán", "online": false },
    { "name": "Gregory Summers", "id": "3465178495P","salario": 450, "rank": "Teniente", "online": false },
    { "name": "Ashlynn Sampson", "id": "7447459776Q","salario": 400, "rank": "Sargento", "online": false },
    { "name": "Joyce Keegan", "id": "6061696214A","salario": 400, "rank": "Sargento", "online": false },
    { "name": "Felix Bennett", "id": "3360029023G","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Ariel Chandler", "id": "7823622408V","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Dominik McMillan", "id": "8245640371N","salario": 300, "rank": "Oficial", "online": false },
    { "name": "Donavan Schmidt", "id": "9461785780F","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Lina Brewer", "id": "4989110327D","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Ashly Crabtree", "id": "5935440597E","salario": 300, "rank": "Oficial", "online": false },
    { "name": "Lorena Cormier", "id": "3548832104T","salario": 300, "rank": "Oficial", "online": false },
    { "name": "Carina O'Leary", "id": "3082909106O","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Austin Ramsey", "id": "8016424577Y","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Finlay Butler", "id": "2169438695W","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Damien Muir", "id": "9563107938Y","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Enrique O'Neill", "id": "1910638706I","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Armani Garza", "id": "8596771452","salario": 300, "rank": "Oficial", "online": true },
    { "name": "Jacob Peterson", "id": "2603082909R","salario": 300, "rank": "Oficial", "online": true },]
  },
  actions: {
    ASCENDEMPLOYEE: (context, info) => {
      context.commit("ascendEmployee", info);
    },
    DESCENDEMPLOYEE: (context, info) => {
      context.commit("descendEmployee", info);
    },
    DISMISSEMPLOYEE: (context, index) => {
      context.commit("dismissEmployee", index);
    }
  },
  mutations: {
    ascendEmployee: (state, info) => {
      const search = state.data[info.index];
      search.rank = info.rank;
    },
    descendEmployee: (state, info) => {
      const search = state.data[info.index];
      search.rank = info.rank;
    },
    dismissEmployee: (state, index) => {
      state.data.splice(index, 1);
      console.log(index);

    }
  
  }
};