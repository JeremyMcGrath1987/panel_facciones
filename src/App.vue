<template>
  <div id="app">
    <img
      src="./assets/images/rugged_tablet.png"
      alt="rugged tablet"
      class="absolute bottom-0 right-0 z-50 pointer-events-none rugged-tablet"
    />
    <button class="buttonClose z-50" @click="closePanel"></button>
    <div
      class="panel-screen overflow-y-scroll"
      :style="{
        background:
          'url('+'), radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)'
      }"
    >
      <transition name="fade">
        <loading-screen
          v-show="this.$store.state.loadingScreen.loading"
          style="animation-duration: 0.3s"
        />
      </transition>
      <router-view />
    </div>
  </div>
</template>
<script>
import loadingScreen from "./components/loadingScreen";
export default {
  name: "app",
  components: { loadingScreen },
  methods: {
    closePanel: function() {
      /* // eslint-disable-next-line no-undef
        mp.trigger("closePanel"); */
    }
  }
};
</script>
<style lang="scss">
.rugged-tablet {
  height: 1007px;
}
.panel-screen {
  width: 1132px;
  height: 640px;
  position: absolute;
  bottom: 238px;
  right: 100px;
}
.buttonClose {
  width: 38px;
  height: 38px;
  position: absolute;
  bottom: 539px;
  right: 1263px;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
</style>
