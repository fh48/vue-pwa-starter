<template>
  <form @submit.prevent="handleSubmit">
    <Input
      type="input"
      label="Net Income"
      validation="required|numeric"
      v-model="inputs.incomeValue"
      @input="input"
    />

    <Input
      type="dropdown"
      label="Year"
      validation="required|numeric"
      :options="yearOptions"
      v-model="inputs.yearValue"
    />

    <Input
      type="dropdown"
      label="Church Tax"
      validation="required"
      :options="churchtaxOptions"
      v-model="inputs.isInChurch"
    />

    <Input
      type="dropdown"
      label="State of Residence"
      validation="required"
      :options="stateOptions"
      v-model="inputs.stateOfResidence"
    />

    <Input
      type="radio"
      label="Personal Relationship"
      validation="required"
      :options="relationshipOptions"
      v-model="inputs.relationship"
    />

    <b-button
      class="submit-btn mt-3"
      type="submit"
      variant="darkShades"
      size="lg"
      :disabled="!isEnabled"
    >
      Calculate!
    </b-button>

  </form>
</template>

<script>
import Input from "./Input.vue";

export default {
  name: "InputForm",
  components: { Input },
  data() {
    return {
      inputs: {
        incomeValue: "",
        yearValue: "",
        isInChurch: "",
        stateOfResidence: "",
        relationship: ""
      },

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
      ],
      relationshipOptions: [
        { text: "married", value: "married" },
        { text: "single", value: "single" }
      ]
    };
  },
  computed: {
    isEnabled: function() {
      return !!Object.values(this.inputs).every(Boolean);
    }
  },
  methods: {
    input: function(input) {
      if (input.type === "input") {
        this.incomeValue = input.value;
      }
    },
    handleSubmit: function() {
      const { isInChurch, stateOfResidence } = this.inputs;
      const cleanedinputs = {
        ...this.inputs,
        isInChurch: isInChurch.value,
        stateOfResidence: stateOfResidence.value
      };
      console.log(cleanedinputs);

      this.$emit("submitted", cleanedinputs);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
