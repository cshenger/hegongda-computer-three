<template>
  <div>
    <h2>计算机组成原理</h2>
    <Content :topic="topic" />
  </div>
</template>

<script>
let topic = require("./topic.json");
import Content from "@/components/Content";

export default {
  name: "composition",
  components: {
    Content,
  },
  data() {
    return {
      topic: null,
    };
  },
  created() {
    this.topic = topic;
  },
};
</script>

<style>
</style>