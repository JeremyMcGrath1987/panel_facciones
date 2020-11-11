<template>
  <div class="flex items-center w-full mb-2">
    <!-- Toggle Button -->
    <label class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input type="checkbox" class="hidden" :checked="active" @change="$emit('changeStatus')"/>
        <!-- line -->
        <div
          class="toggle__line w-10 h-4 bg-recto-dark rounded-full shadow-inner"
        ></div>
        <!-- dot -->
        <div
          class="toggle__dot absolute w-6 h-6 bg-recto-dark border border-recto-light rounded-full shadow inset-y-0 left-0"
        ></div>
      </div>
      <!-- label -->
      <div class="ml-3 font-medium">
        <slot></slot>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: "toggle",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #587fff;
}
</style>
