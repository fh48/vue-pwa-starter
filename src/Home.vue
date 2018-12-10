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
          <InputForm
            v-if="!resultsCalculated"
            @submitted="submitted"
          />
          <Result
            v-if="resultsCalculated"
            :results="calculations"
            @clearInputData="clearIncomeData"
          />
        </template>
      </Panel>
    </b-row>
  </b-container>
</template>
<script>
import Panel from "./components/Panel.vue";
import InputForm from "./components/InputForm.vue";
import Result from "./components/Result.vue";

import { calcChurchTax, calcIncomeTax, calcSoli } from "./calc.js";

export default {
  name: "Home",
  components: { Panel, InputForm, Result },
  data() {
    return {
      calculations: ""
    };
  },
  computed: {
    resultsCalculated: function() {
      return Object.keys(this.calculations).length !== 0;
    }
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

      const churchTax = input.isInChurch
        ? calcChurchTax(incomeTax, input.stateOfResidence)
        : 0;
      const netIncome =
        ((incomeValue - incomeTax - soli - churchTax) * 100) / 100;

      this.calculations = {
        incomeValue,
        incomeTax,
        soli,
        churchTax,
        netIncome
      };
    },
    clearIncomeData: function() {
      this.calculations = "";
    }
  }
};
</script>

<style lang="scss">
.row {
  padding: 0 15px;
}
</style>

