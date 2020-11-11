export default {
  namespaced: true,
  state: {
    data: [{ "name": "Jose Mayo", "id": "9845613212F","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Mark Ruffalo", "id": "1603206077L","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Jeff Ground", "id": "4513789546K","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Frank Roswelt", "id": "8456791249H","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Gregory Summers", "id": "3465178495P","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Ashlynn Sampson", "id": "7447459776Q","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Joyce Keegan", "id": "6061696214A","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Felix Bennett", "id": "3360029023G","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Ariel Chandler", "id": "7823622408V","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Dominik McMillan", "id": "8245640371N","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Donavan Schmidt", "id": "9461785780F","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Lina Brewer", "id": "4989110327D","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Ashly Crabtree", "id": "5935440597E","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Lorena Cormier", "id": "3548832104T","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Carina O'Leary", "id": "3082909106O","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Austin Ramsey", "id": "8016424577Y","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Finlay Butler", "id": "2169438695W","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Damien Muir", "id": "9563107938Y","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Enrique O'Neill", "id": "1910638706I","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Armani Garza", "id": "8596771452","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },
    { "name": "Jacob Peterson", "id": "2603082909R","salario": 150, "stateCountry": "Los Santos", "cargo": "cargo" },]
  },
  actions: {
    SETFILES: (context, filesLite) => {
      context.commit("setFiles", filesLite);
    }
  },
  mutations: {
    setFiles: (state, filesLite) => {

      if (filesLite.length <= 0) {
        state.data = { message: "No hay coincidencias en el sistema" }
      } else {
        state.data = filesLite;
      }

    }
  }
};