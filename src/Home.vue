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

import { calcChurchTax, calcIncomeTax, calcSoli } from "./calc.js";

export default {
  name: "Home",
  components: { Panel, InputForm },
  data() {
    return {
      calculations: ""
    };
  },
  methods: {
    submitted: function(input) {
      const incomeValue = parseInt(input.incomeValue);
      const incomeTax = calcIncomeTax(
        incomeValue,
        incomeValue,
        input.relationship
      );
      const soli = calcSoli(incomeTax, input.relationship);

      const churchtax = input.isInChurch
        ? calcChurchTax(incomeTax, input.stateOfResidence)
        : 0;
      const netIncome =
        ((incomeValue - incomeTax - soli - churchtax) * 100) / 100;

      this.calculations = {
        incomeValue,
        incomeTax,
        soli,
        churchtax,
        netIncome
      };
    }
  }
};
</script>

<style lang="scss">
.row {
  padding: 0 15px;
}
</style>

