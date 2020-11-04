<template>
  <div>
    <h2>离散数学</h2>
    <Content :topic="topic" />
  </div>
</template>

<script>
let topic = require("./topic.json");
import Content from "@/components/Content";

export default {
  name: "math",
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