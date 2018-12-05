<template>
  <div class="panel">
    <div class="header">
      <h2 class="headline">{{ headline }}</h2>
    </div>
    <div class="body">
      <slot name="body" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Panel",
  props: {
    headline: String,
    subHeadline: String
  }
};
</script>

<style lang="scss" scoped>
.panel {
  background: #fff;
  border-radius: 2px;
  max-width: 490px;
  width: 100%;
  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.27);

  .header {
    width: 100%;
    padding: 15px 5px;
    border-radius: 2px 2px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background: $brandColor;

    .headline {
      margin-bottom: 0px;
    }
  }

  .body {
    padding: 20px;
  }
}
</style>
