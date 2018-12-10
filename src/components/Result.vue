<template>
  <div>
    <table>
      <tr class="table-head">
        <th class="name">Name</th>
        <th class="value">Value</th>
      </tr>
      <tr class="calc-base">
        <td>Gross Income</td>
        <td class="value">
          {{ results.incomeValue }}
        </td>
      </tr>
      <tr>
        <td>Income Tax</td>
        <td class="value">
          - {{ results.incomeTax }}
        </td>
      </tr>
      <tr>
        <td>Church Tax</td>
        <td class="value">
          - {{ results.churchTax }}
        </td>
      </tr>
      <tr>
        <td>Solidarity Charge</td>
        <td class="value">
          - {{ results.soli }}
        </td>
      </tr>
      <tr class="calc-result">
        <td>Net Income</td>
        <td class="value">
          {{ results.netIncome }}
        </td>
      </tr>
    </table>

    <b-button
      v-on:click="handleBackClick"
      class="btn-back"
      variant="outline-secondary"
      size="sm"
    >
      Back
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    results: Object
  },
  methods: {
    handleBackClick: function() {
      this.$emit("clearInputData", {});
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
}

td {
  padding: 5px 0;
}

.euro_icon {
  fill: rgba(0, 0, 0, 0.8);
  width: 20px;
  height: 20px;
}

.table-panel {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}
.btn-back {
  margin-top: 10px;
  border-color: $darkAccent;
  color: $darkAccent;

  &:hover {
    background: $darkAccent;
    color: white;
  }
}

.table-head {
  color: $darkShades;
}

.value {
  text-align: right;
}

.calc-row {
  padding: 0 55px;
}
.calc-result {
  position: relative;
  border-top: 3px solid #f4f5f5;
}
</style>
