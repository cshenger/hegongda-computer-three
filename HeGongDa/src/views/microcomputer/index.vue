<template>
  <div>
    <h2>微机原理与接口技术</h2>
    <Content :topic="topic" />
  </div>
</template>

<script>
let topic = require("./topic.json");
import Content from "@/components/Content";

export default {
  name: "microcomputer",
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