<template>
  <div id="app">
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from "./Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

@import "../node_modules/animate.css/animate.min.css";

body {
  margin: 0;
  background: $lightShades;
}

h2 {
  font-size: 2rem;
}

button,
input {
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba($primary, 0.25) !important;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
}
</style>
