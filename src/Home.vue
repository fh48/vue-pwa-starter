<template>
  <b-container
    fluid
    class="home bv-example-row"
  >
    <b-row class="row justify-content-center">
      <Panel
        class="calculator-panel"
        headline="Income Tax Calculator"
      >
        <template
          class="form-body"
          slot="body"
        >
          input
        </template>
      </Panel>
    </b-row>
  </b-container>
</template>
<script>
import Panel from "./components/Panel.vue";

export default {
  name: "Home",
  components: { Panel }
};
</script>

<style lang="scss">
.row {
  padding: 0 15px;
}
</style>

