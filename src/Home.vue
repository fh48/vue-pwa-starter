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
          <form @submit.prevent="handleSubmit">
            <Input
              label="Net Income"
              validation="required|numeric"
              v-model="inputValue"
              @input="input"
            />

            <b-button
              class="btn"
              type="submit"
              variant="darkShades"
              size="lg"
              :disabled="!inputValue"
            >
              Calculate!
            </b-button>

          </form>
        </template>
      </Panel>
    </b-row>
  </b-container>
</template>
<script>
import Panel from "./components/Panel.vue";
import Input from "./components/Input.vue";

export default {
  name: "Home",
  components: { Panel, Input },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    input: function(inputValue) {
      this.inputValue = inputValue;
    },
    handleSubmit: function(submitEvent) {
      console.log("This is our raw data:", this.inputValue);
    }
  }
};
</script>

<style lang="scss">
.row {
  padding: 0 15px;
}

.btn {
  font-weight: bold;
  margin: 5px;
  margin-top: 25px;
}
</style>

