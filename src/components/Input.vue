<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <b-form-input
      class="input"
      autocomplete="off"
      :name="name"
      :value="value"
      @input="input"
      type="text"
      size="lg"
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
    value: String,
    validation: String,
    placeholder: String
  },
  data() {
    return {
      validationError: ""
    };
  },
  computed: {
    name: function() {
      return this.label.replace(/\s/g, "");
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
        this.$emit("input", value);
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
  margin-bottom: 40px;
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
