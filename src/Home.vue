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

            <Input
              label="Year"
              validation="required|numeric"
              placeholder="Year"
              :options="yearOptions"
              v-model="yearValue"
            />

            <Input
              label="Church Tax"
              validation="required"
              :options="churchtaxOptions"
              v-model="isInChurch"
            />

            <Input
              v-if="isInChurch.value"
              label="State of Residence"
              validation="required"
              :options="stateOptions"
              v-model="stateOfResidence"
            />

            <b-button
              class="submit-btn mt-3"
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
      inputValue: "",
      yearValue: "",
      isInChurch: "",
      stateOfResidence: "",
      churchtaxOptions: [
        { label: "Yes", value: true },
        { label: "No", value: false }
      ],
      yearOptions: ["2018"],
      stateOptions: [
        { label: "Bayern", value: "Bayern" },
        {
          label: "BadenWuerttemberg",
          value: "BaWue"
        },
        { label: "Other", value: "Other" }
      ]
    };
  },
  computed: {
    isEnabled: function() {
      return (
        this.inputValue &&
        this.yearValue &&
        this.isInChurch &&
        this.stateOfResidence
      );
    }
  },
  methods: {
    input: function(input) {
      if (input.type === "input") {
        this.inputValue = input.value;
      }
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

.submit-btn {
  font-weight: bold;
  margin: 5px;
  margin-top: 35px;
}
</style>

