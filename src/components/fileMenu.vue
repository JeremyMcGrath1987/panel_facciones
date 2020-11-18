<template>
  <ul class="file-details mt-4 w-48">
    <li class="my-10">
      <a
        @click="goto('Information')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'information'
        }"
        >Información general</a
      >
    </li>
    <li class="my-10">
      <a
        @click="goto('FilesEmployees')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'files'
        }"
        >Lista empleados</a
      >
    </li>
    <li class="my-10">
      <a
        @click="goto('MoneyManagement')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{ 'border-b-2 border-panel-normal': active === 'moneymanagement' }"
        >Gestión Dinero</a
      >
    </li>
    <li class="my-10">
      <a
        @click="goto('Citizen')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'citizen'
        }"
        >Contratar Empleado</a
      >
    </li>
    
    <!-- <li class="my-10">
      <a
        @click="goto('Properties')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'propiedades'
        }"
        >Propiedades</a
      >
    </li>
    <li class="my-10">
      <a
        @click="goto('Admin')"
        class="hover:text-gray-500 cursor-pointer"
        :class="{
          'border-b-2 border-panel-normal': active === 'admin'
        }"
        >Administración</a
      >
    </li> -->
    <!-- <li class="ml-auto border border-panel-normal py-1 px-2">
      <a class="hover:text-gray-500 cursor-pointer" @click="goto('Note')"
        >Añadir nota</a
      >
    </li>
    <li class="ml-1 border border-panel-normal py-1 px-2">
      <a class="hover:text-gray-500 cursor-pointer" @click="goto('Debt')"
        >Añadir deuda</a
      >
    </li>
    <li
      class="ml-1 border border-panel-normal bg-panel-normal text-white py-1 px-2"
    >
      <a class="hover:text-gray-500 cursor-pointer" @click="goto('Report')"
        >Denunciar</a
      >
    </li> -->
  </ul>
</template>
<script>
export default {
  name: "fileMenu",
  props: {
    active: {
      type: String,
      required: true
    }
  },
  methods: {
    goto: async function(route) {
      if (route !== this.$route.name) {
        /* await this.$store.dispatch("loadingScreen/ISLOADING", true); */
        await this.$router.push({ name: route });
      }
    }
  }
};
</script>
