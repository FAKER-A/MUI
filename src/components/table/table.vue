<template>
<div class="m-table-wrapper">
    <table>
        <slot></slot>
        <m-table-head :columns="columns"></m-table-head>
        <m-table-body :data="data" :columns="columns"></m-table-body>
    </table>
</div>
</template>
<script>
import TableBody from "./table-body.vue";
import TableHead from "./table-head.vue";
var index = 0;
export default {
  name: "m-table",
  props: ["data"],
  data() {
    return {
      columns: []
    };
  },
  created() {
    this.$on("initCol", this.addCol);
  },
  mounted() {
    console.log(this.$el);
  },
  components: {
    "m-table-body": TableBody,
    "m-table-head": TableHead
  },
  methods: {
    addCol(e) {
      this.columns.push(e);
    }
  }
};
</script>
<style lang="scss">
@import "../../scss/common/color.scss";
@import "../../scss/common/font.scss";
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid $secondary-color;
}
</style>
