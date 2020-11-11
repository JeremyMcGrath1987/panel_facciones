<template>
  <div id="app">
    <img
      src="./assets/images/rugged_tablet.png"
      alt="rugged tablet"
      class="absolute bottom-0 right-0 z-50 pointer-events-none rugged-tablet"
    />
    <button class="buttonClose z-50" @click="closeRecto"></button>
    <div
      class="recto-screen overflow-y-scroll"
      :style="{
        background:
          'url(' +
          bgpattern +
          '), radial-gradient(circle, rgba(3, 0, 36, 1) 0%, rgba(30, 20, 94, 1) 0%, rgba(22, 18, 51, 1) 100%)'
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
import bgPattern from "./mixins/bgPattern";
import loadingScreen from "./components/loadingScreen";
export default {
  name: "app",
  mixins: [bgPattern],
  components: { loadingScreen },
  methods: {
    closeRecto: function() {
      /* // eslint-disable-next-line no-undef
        mp.trigger("closeRecto"); */
    }
  }
};
</script>
<style lang="scss">
.rugged-tablet {
  height: 1007px;
}
.recto-screen {
  width: 1132px;
  height: 640px;
  position: absolute;
  bottom: 238px;
  right: 100px;
}
.buttonClose {
  width: 50px;
  height: 30px;
  position: absolute;
  bottom: 45px;
  right: 60px;
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
  background: #587fff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #587fff;
}
</style>
