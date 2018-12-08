<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <b-form-input
      v-if="inputType==='input'"
      class="input"
      autocomplete="off"
      :name="name"
      :value="value"
      @input="input"
      type="text"
      size="lg"
    />
    <v-select
      v-if="inputType==='dropdown'"
      class="input-dropdown"
      @input="input"
      :options="options"
      :placeholder="placeholder"
      :name="name"
    />
    <transition
      name="alert-in"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
    >
      <p
        class="alert"
        v-if="validationError"
      >
        {{ validationError }}
      </p>
    </transition>
  </div>

</template>

<script>
import { Validator } from "vee-validate";
const v = new Validator();

export default {
  name: "Input",
  props: {
    label: String,
    value: String | Number | Object,
    validation: String,
    placeholder: String,
    options: Array,
    year: Number
  },
  data() {
    return {
      validationError: ""
    };
  },
  computed: {
    name: function() {
      return this.label.replace(/\s/g, "");
    },
    inputType: function() {
      return this.options ? "dropdown" : "input";
    }
  },
  methods: {
    validate(value) {
      return v.verify(value, this.validation, {
        name: this.label
      });
    },

    async input(value) {
      const { valid, errors } = await this.validate(value);
      if (valid) {
        this.validationError = "";
        this.$emit("input", { type: this.inputType, value });
      } else {
        this.validationError = errors[0];
        this.$emit("input", "");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;
  margin-bottom: 30px;
  label {
    margin: 5px 0;
  }
}

.v-select {
  width: 100%;
  height: calc(2.875rem + 2px);
  background: white;
  border-radius: 3px;
  font-size: 1.25rem;
}

.v-select ::after {
  border-left: 0;
  border-right: 0;
}

.alert {
  background: #202f7c;
  color: #fcfaf6;
  font-size: 11px;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  padding: 5px;
  margin-top: 5px;
}
</style>
