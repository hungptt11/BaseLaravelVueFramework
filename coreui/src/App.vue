<template>
  <div class="vld-parent">
    <loading
      :active.sync="this.$store.state.loadingIndicatorFlag"
      :can-cancel="false"
      :is-full-page="true"
      :height="150"
      :width="150"
    ></loading>
    <router-view></router-view>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "App",
  data() {
    return {
      isLoading: true
    };
  },
  components: {
    Loading
  }
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>
