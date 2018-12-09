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
          <InputForm @submitted="submitted" />
        </template>
      </Panel>
    </b-row>
  </b-container>
</template>
<script>
import Panel from "./components/Panel.vue";
import InputForm from "./components/InputForm.vue";

export default {
  name: "Home",
  components: { Panel, InputForm },
  data() {
    return {
      inputData: ""
    };
  },
  methods: {
    submitted: function(input) {
      console.log(input);
      this.inputData = input;
    }
  }
};
</script>

<style lang="scss">
.row {
  padding: 0 15px;
}
</style>

